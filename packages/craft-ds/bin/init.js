#!/usr/bin/env node

const fs = require("fs").promises;
const { existsSync } = require("fs");
const path = require("path");
const readline = require("readline");
const { spawnSync } = require("child_process");

const STYLEX_VERSION = "0.19.0";
const STYLEX_SETUP_URL = "https://stylexjs.com/docs/learn/installation/nextjs";

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
};

const log = {
  info: (message) => console.log(`${colors.blue}ℹ${colors.reset} ${message}`),
  success: (message) =>
    console.log(`${colors.green}✓${colors.reset} ${message}`),
  warn: (message) => console.log(`${colors.yellow}⚠${colors.reset} ${message}`),
  error: (message) => console.error(`${colors.red}✕${colors.reset} ${message}`),
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question, defaultValue) {
  return new Promise((resolve) => {
    rl.question(
      `${colors.blue}?${colors.reset} ${question} (default: ${defaultValue}): `,
      (answer) => resolve(answer.trim() || defaultValue),
    );
  });
}

function detectPackageManager() {
  if (existsSync("pnpm-lock.yaml")) return "pnpm";
  if (existsSync("yarn.lock")) return "yarn";
  if (existsSync("package-lock.json")) return "npm";
  return "npm";
}

function installDependencies(packageManager, dependencies, isDev) {
  const command = packageManager;
  const args = [packageManager === "npm" ? "install" : "add"];

  if (isDev) args.push("-D");
  args.push(...dependencies);

  log.info(`Installing ${dependencies.join(", ")}...`);
  const result = spawnSync(command, args, { stdio: "inherit" });

  if (result.status !== 0) {
    throw new Error(`Dependency installation failed with ${packageManager}.`);
  }
}

async function validateProject() {
  if (!existsSync("package.json")) {
    throw new Error("Run this command from the root of a Next.js project.");
  }

  const packageJson = JSON.parse(await fs.readFile("package.json", "utf8"));
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  if (!dependencies.next) {
    throw new Error("Craft's installer currently targets Next.js projects.");
  }

  const nodeMajor = Number(process.versions.node.split(".")[0]);
  if (nodeMajor < 18) {
    throw new Error(
      `Node.js 18 or newer is required. Found ${process.version}.`,
    );
  }
}

async function findComponentsDirectory() {
  const candidates = [
    path.join(process.cwd(), "app", "components"),
    path.join(process.cwd(), "src", "components"),
    path.join(process.cwd(), "components"),
  ];

  const existing = candidates.find((candidate) => existsSync(candidate));
  if (existing) return existing;

  const directory = existsSync(path.join(process.cwd(), "src"))
    ? path.join(process.cwd(), "src", "components")
    : path.join(process.cwd(), "components");

  await fs.mkdir(directory, { recursive: true });
  return directory;
}

async function copyCraftFiles(targetDirectory) {
  const filenames = ["ds.tsx", "tokens.stylex.ts", "themes.ts"];
  const existingFiles = filenames.filter((filename) =>
    existsSync(path.join(targetDirectory, filename)),
  );

  if (existingFiles.length > 0) {
    const answer = await prompt(
      `Replace existing ${existingFiles.join(", ")}?`,
      "no",
    );

    if (answer.toLowerCase() !== "yes") {
      log.warn("No files were changed.");
      return false;
    }
  }

  for (const filename of filenames) {
    await fs.copyFile(
      path.join(__dirname, "..", filename),
      path.join(targetDirectory, filename),
    );
  }

  return true;
}

async function main() {
  try {
    log.info("Craft StyleX installer");
    await validateProject();

    const targetDirectory = await findComponentsDirectory();
    const shouldContinue = await copyCraftFiles(targetDirectory);
    if (!shouldContinue) return;

    const packageManager = detectPackageManager();
    installDependencies(
      packageManager,
      [`@stylexjs/stylex@${STYLEX_VERSION}`],
      false,
    );
    installDependencies(
      packageManager,
      [
        `@stylexjs/babel-plugin@${STYLEX_VERSION}`,
        `@stylexjs/postcss-plugin@${STYLEX_VERSION}`,
        "autoprefixer",
      ],
      true,
    );

    log.success(
      `Installed Craft in ${path.relative(process.cwd(), targetDirectory)}.`,
    );
    log.warn("StyleX also needs Babel and PostCSS configuration.");
    console.log(`Follow the official Next.js setup: ${STYLEX_SETUP_URL}`);
    console.log(
      `Then import with: import { Main, Prose } from "@/components/ds";`,
    );
  } catch (error) {
    log.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  } finally {
    rl.close();
  }
}

main();
