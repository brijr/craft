const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const {
  STYLESHEET_CANDIDATES,
  validateProject,
  findStylesheet,
  injectDsCssImport,
} = require("./init.js");

function makeRoot() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "craft-ds-init-"));
}

describe("validateProject", () => {
  it("does not throw when package.json has tailwindcss and no next", async () => {
    const root = makeRoot();
    fs.writeFileSync(
      path.join(root, "package.json"),
      JSON.stringify({
        name: "rr-app",
        dependencies: { tailwindcss: "^4.1.11" },
      })
    );
    const pkg = await validateProject(root);
    assert.equal(pkg.name, "rr-app");
    assert.equal(pkg.dependencies.next, undefined);
    assert.ok(pkg.dependencies.tailwindcss);
  });

  it("throws when package.json is missing", async () => {
    const root = makeRoot();
    await assert.rejects(() => validateProject(root), /package.json/);
  });
});

describe("findStylesheet", () => {
  it("lists Next globals.css paths before React Router and Vite entries", () => {
    assert.deepEqual(STYLESHEET_CANDIDATES, [
      "app/globals.css",
      "src/app/globals.css",
      "src/styles/globals.css",
      "styles/globals.css",
      "app/app.css",
      "src/index.css",
      "src/style.css",
    ]);
  });

  it("returns app/app.css when that file exists and globals.css does not", () => {
    const root = makeRoot();
    fs.mkdirSync(path.join(root, "app"));
    fs.writeFileSync(path.join(root, "app/app.css"), '@import "tailwindcss";');
    assert.equal(findStylesheet(root), path.join(root, "app/app.css"));
  });

  it("returns src/index.css when that file exists", () => {
    const root = makeRoot();
    fs.mkdirSync(path.join(root, "src"));
    fs.writeFileSync(path.join(root, "src/index.css"), '@import "tailwindcss";');
    assert.equal(findStylesheet(root), path.join(root, "src/index.css"));
  });

  it("returns src/style.css when that file exists", () => {
    const root = makeRoot();
    fs.mkdirSync(path.join(root, "src"));
    fs.writeFileSync(path.join(root, "src/style.css"), '@import "tailwindcss";');
    assert.equal(findStylesheet(root), path.join(root, "src/style.css"));
  });

  it("prefers app/globals.css over app/app.css", () => {
    const root = makeRoot();
    fs.mkdirSync(path.join(root, "app"));
    fs.writeFileSync(path.join(root, "app/globals.css"), "/* next */");
    fs.writeFileSync(path.join(root, "app/app.css"), "/* rr */");
    assert.equal(findStylesheet(root), path.join(root, "app/globals.css"));
  });

  it("returns null when no stylesheet exists and does not throw", () => {
    const root = makeRoot();
    assert.equal(findStylesheet(root), null);
  });
});

describe("injectDsCssImport", () => {
  it("inserts the ds.css import immediately after @import \"tailwindcss\";", () => {
    const source = '@import "tailwindcss";\n@theme {}\n';
    const { css, injected } = injectDsCssImport(source, "./components/ds.css");
    assert.equal(injected, true);
    assert.equal(
      css,
      '@import "tailwindcss";\n@import "./components/ds.css";\n@theme {}\n'
    );
  });

  it("is a no-op when that import is already present", () => {
    const source =
      '@import "tailwindcss";\n@import "./components/ds.css";\n';
    const { css, injected } = injectDsCssImport(
      source,
      "./components/ds.css"
    );
    assert.equal(injected, false);
    assert.equal(css, source);
  });
});
