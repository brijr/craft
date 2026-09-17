#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");
const { existsSync } = require("fs");

// Colored console output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.error(`${colors.red}✕${colors.reset} ${msg}`),
};

function createPrompt(rl) {
  return function promptUser(question, defaultValue) {
    return new Promise((resolve) => {
      rl.question(
        `${colors.blue}?${colors.reset} ${question} ${
          defaultValue ? `(default: ${defaultValue})` : ""
        }: `,
        (answer) => {
          resolve(answer.trim() || defaultValue);
        }
      );
    });
  };
}

const STYLESHEET_CANDIDATES = [
  "app/globals.css",
  "src/app/globals.css",
  "src/styles/globals.css",
  "styles/globals.css",
  "app/app.css",
  "src/index.css",
  "src/style.css",
];

function detectPackageManager() {
  if (existsSync("pnpm-lock.yaml")) return "pnpm";
  if (existsSync("yarn.lock")) return "yarn";
  if (existsSync("package-lock.json")) return "npm";
  return "pnpm"; // Default to pnpm
}

async function runCommand(command, silent = false) {
  if (!silent) log.info(`Running: ${command}`);
  try {
    execSync(command, { stdio: silent ? "ignore" : "inherit" });
    return true;
  } catch (error) {
    if (!silent) log.error(`Command failed: ${command}`);
    return false;
  }
}

// Check Node.js version
function checkNodeVersion() {
  const version = process.version.match(/^v(\d+)\./)[1];
  const minVersion = 18;

  if (parseInt(version) < minVersion) {
    throw new Error(
      `Node.js version ${minVersion} or higher is required. Current version: ${process.version}`
    );
  }
}

async function validateProject(rootDir = process.cwd()) {
  const packageJsonPath = path.join(rootDir, "package.json");

  if (!existsSync(packageJsonPath)) {
    throw new Error(
      "No package.json found. Please run this command in a project root directory."
    );
  }

  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  if (deps.next) {
    const nextVersion = String(deps.next).replace(/[^0-9.]/g, "");
    const [major] = nextVersion.split(".");
    if (parseInt(major, 10) < 14) {
      log.warn(
        "Craft works best with Next.js 14 or higher. Consider upgrading."
      );
    }
  }

  return packageJson;
}

// Check for required dependencies
async function checkDependencies() {
  const packageJson = JSON.parse(
    await fs.readFile(path.join(process.cwd(), "package.json"), "utf8")
  );

  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  return {
    hasShadcn: existsSync(path.join(process.cwd(), "components.json")),
    hasTailwind: deps["tailwindcss"] !== undefined,
    hasClsx: deps["clsx"] !== undefined,
    hasTailwindMerge: deps["tailwind-merge"] !== undefined,
  };
}

// Find the components directory
async function findComponentsDir() {
  const possiblePaths = [
    path.join(process.cwd(), "app", "components"),
    path.join(process.cwd(), "src", "components"),
    path.join(process.cwd(), "components"),
  ];

  // Check if we're in a monorepo
  const isMonorepo =
    existsSync(path.join(process.cwd(), "packages")) ||
    existsSync(path.join(process.cwd(), "apps"));

  if (isMonorepo) {
    log.warn("Monorepo detected. Installing in the current working directory.");
  }

  for (const dir of possiblePaths) {
    if (existsSync(dir)) {
      return dir;
    }
  }

  // If no components directory exists, create one in the appropriate location
  if (existsSync(path.join(process.cwd(), "src"))) {
    const dir = path.join(process.cwd(), "src", "components");
    await fs.mkdir(dir, { recursive: true });
    return dir;
  }

  const dir = path.join(process.cwd(), "components");
  await fs.mkdir(dir, { recursive: true });
  return dir;
}

function findStylesheet(rootDir = process.cwd(), exists = existsSync) {
  for (const relativePath of STYLESHEET_CANDIDATES) {
    const file = path.join(rootDir, relativePath);
    if (exists(file)) return file;
  }

  return null;
}

function toCssImportPath(fromFile, toFile) {
  let rel = path.relative(path.dirname(fromFile), toFile);
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel.split(path.sep).join("/");
}

function injectDsCssImport(css, importPath) {
  const line = `@import "${importPath}";`;
  if (
    css.includes(importPath) ||
    css.includes("/ds.css") ||
    css.includes("craft-ds/ds.css")
  ) {
    return { css, injected: false };
  }

  const tailwindImport = /@import\s+["']tailwindcss["']\s*;/;
  if (tailwindImport.test(css)) {
    return {
      css: css.replace(tailwindImport, (match) => `${match}\n${line}`),
      injected: true,
    };
  }

  return { css: `${line}\n${css}`, injected: true };
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const promptUser = createPrompt(rl);

  try {
    log.info("Welcome to the Craft Design System installer!");

    // Check Node.js version
    checkNodeVersion();
    log.success("Node.js version check passed");

    // Validate project structure
    await validateProject();
    log.success("Valid project detected");

    // Check dependencies
    const { hasShadcn, hasTailwind, hasClsx, hasTailwindMerge } =
      await checkDependencies();

    // Install required dependencies
    const packageManager = detectPackageManager();
    const installCmd =
      packageManager === "npm" ? "npm install" : `${packageManager} add`;

    if (!hasTailwind) {
      log.info("Installing Tailwind CSS...");
      await runCommand(`${installCmd} -D tailwindcss`);
      log.success("Tailwind CSS installed");
    } else {
      log.success("Tailwind CSS already installed");
    }

    if (!hasShadcn) {
      log.info("Installing shadcn/ui...");
      const shouldInstall = await promptUser(
        "Would you like to install and configure shadcn/ui? (recommended)",
        "yes"
      );
      if (shouldInstall.toLowerCase() === "yes") {
        await runCommand(`npx shadcn@latest init`);
        log.success("shadcn/ui installed");
      } else {
        log.warn("Skipping shadcn/ui installation");
      }
    } else {
      log.success("shadcn/ui already installed");
    }

    // Find or create components directory
    const componentsDir = await findComponentsDir();
    log.success(
      `Components directory ready at ${path.relative(
        process.cwd(),
        componentsDir
      )}`
    );

    // Check for existing craft component
    const craftPath = path.join(componentsDir, "ds.tsx");
    if (existsSync(craftPath)) {
      const replace = await promptUser(
        "Craft component already exists. Do you want to replace it?",
        "no"
      );
      if (replace.toLowerCase() !== "yes") {
        log.info("Installation aborted.");
        process.exit(0);
      }
    }

    // Copy craft component and typography CSS
    const sourcePath = path.join(__dirname, "..", "ds.tsx");
    await fs.copyFile(sourcePath, craftPath);
    const cssSourcePath = path.join(__dirname, "..", "ds.css");
    const cssDestPath = path.join(componentsDir, "ds.css");
    await fs.copyFile(cssSourcePath, cssDestPath);
    log.success("Craft component and typography CSS installed");

    const globalsPath = findStylesheet();
    const cssImportPath = globalsPath
      ? toCssImportPath(globalsPath, cssDestPath)
      : "@/components/ds.css";
    if (globalsPath) {
      const currentCss = await fs.readFile(globalsPath, "utf8");
      const { css, injected } = injectDsCssImport(currentCss, cssImportPath);
      if (injected) {
        await fs.writeFile(globalsPath, css);
        log.success(
          `Added typography import to ${path.relative(process.cwd(), globalsPath)}`
        );
      } else {
        log.info("Typography CSS import already present");
      }
    } else {
      log.warn(
        `Could not find globals.css. Add this after @import "tailwindcss":\n   @import "${cssImportPath}";`
      );
    }

    // Install remaining dependencies if needed
    if (!hasClsx || !hasTailwindMerge) {
      log.info("Installing additional dependencies...");
      await runCommand(`${installCmd} clsx tailwind-merge`);
      log.success("Additional dependencies installed");
    }

    // Final success message
    console.log("\n" + "=".repeat(50));
    log.success(
      `Craft Design System installed in ${path.relative(
        process.cwd(),
        componentsDir
      )}`
    );
    console.log("\nTo use Craft in your project:");
    console.log(
      `1. Import components:\n   ${colors.blue}import { Main, Section, Container, Prose, typography, root } from "@/components/ds";${colors.reset}`
    );
    console.log(
      `\n2. Import CSS (after Tailwind):\n   ${colors.blue}@import "${cssImportPath}";${colors.reset}`
    );
    console.log(
      "\n3. UI text → typography.*  |  Markdown / CMS / AI HTML → <Prose>"
    );
    console.log("   Do not wrap app UI in Prose.");
    console.log("   Do not put typography.* on children inside Prose.");
    console.log(
      "   Layout renders <html> for Next App Router only. Vite / React Router: className={root} on the existing <html>."
    );
    console.log("\n4. Use in your app:");
    console.log(
      `   ${colors.blue}export default function Page() {
     return (
       <Main>
         <Section>
           <Container>
             <h1 className={typography.h1}>Hello, Craft!</h1>
           </Container>
         </Section>
       </Main>
     );
   }${colors.reset}`
    );
    console.log("\n" + "=".repeat(50));
  } catch (error) {
    log.error("An error occurred during installation:");
    log.error(error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

module.exports = {
  STYLESHEET_CANDIDATES,
  validateProject,
  findStylesheet,
  injectDsCssImport,
  toCssImportPath,
};

if (require.main === module) {
  main();
}
