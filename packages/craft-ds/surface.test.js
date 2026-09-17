const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const pkg = require("./package.json");
const dsCss = fs.readFileSync(path.join(__dirname, "ds.css"), "utf8");
const dsTsx = fs.readFileSync(path.join(__dirname, "ds.tsx"), "utf8");

describe("package surface", () => {
  it("runtime dependencies are only clsx and tailwind-merge", () => {
    assert.deepEqual(Object.keys(pkg.dependencies).sort(), [
      "clsx",
      "tailwind-merge",
    ]);
  });

  it("npm files include the CSS and installer consumers need", () => {
    assert.ok(pkg.files.includes("ds.tsx"));
    assert.ok(pkg.files.includes("ds.css"));
    assert.ok(pkg.files.includes("bin/init.js"));
    assert.equal(pkg.exports["./ds.css"], "./ds.css");
  });

  it("ds.css defines color tokens with host-variable fallbacks", () => {
    const tokens = [
      ["--color-foreground", "--foreground"],
      ["--color-muted-foreground", "--muted-foreground"],
      ["--color-primary", "--primary"],
      ["--color-muted", "--muted"],
      ["--color-border", "--border"],
    ];
    for (const [themeName, hostName] of tokens) {
      const pattern = new RegExp(
        `${themeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*var\\(${hostName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},`
      );
      assert.match(dsCss, pattern, `${themeName} should map through ${hostName}`);
    }
    assert.match(dsCss, /@utility type-muted\s*\{/);
    assert.match(dsCss, /color:\s*var\(--color-muted-foreground\)/);
  });

  it("typography.muted is the type-muted utility", () => {
    assert.match(dsTsx, /muted:\s*"type-muted"/);
    assert.doesNotMatch(dsTsx, /muted:\s*"text-muted-foreground"/);
  });

  it("exports root classes and Layout still renders html with them", () => {
    assert.match(
      dsTsx,
      /export const root = "scroll-smooth antialiased focus:scroll-auto"/
    );
    assert.match(dsTsx, /export const Layout =/);
    assert.match(dsTsx, /<html/);
    assert.match(dsTsx, /className=\{cn\(root,\s*className\)\}/);
    for (const cls of ["scroll-smooth", "antialiased", "focus:scroll-auto"]) {
      assert.ok(dsTsx.includes(cls), `missing ${cls}`);
    }
  });
});
