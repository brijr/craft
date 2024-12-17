#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");
const { existsSync } = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function promptUser(question, defaultValue) {
  return new Promise((resolve) => {
    rl.question(`${question} (default: ${defaultValue}): `, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
}

function detectPackageManager() {
  if (existsSync("package-lock.json")) return "npm";
  if (existsSync("yarn.lock")) return "yarn";
  if (existsSync("pnpm-lock.yaml")) return "pnpm";
  return "npm"; // Default to npm if no lock file is found
}

function runCommand(command) {
  console.log(`Running: ${command}`);
  execSync(command, { stdio: "inherit" });
}

// Validation and project structure detection
async function validateProject() {
  // Check for package.json
  if (!existsSync(path.join(process.cwd(), "package.json"))) {
    throw new Error(
      "No package.json found. Please run this command in a Next.js project root directory."
    );
  }

  // Read and validate package.json
  const packageJson = JSON.parse(
    await fs.readFile(path.join(process.cwd(), "package.json"), "utf8")
  );

  // Check for Next.js dependency
  const hasNextJs =
    (packageJson.dependencies && packageJson.dependencies.next) ||
    (packageJson.devDependencies && packageJson.devDependencies.next);

  if (!hasNextJs) {
    throw new Error(
      "This project doesn't appear to be a Next.js project. Please ensure Next.js is installed."
    );
  }

  return packageJson;
}

// Check and create necessary directories
async function ensureDirectories(componentsPath) {
  try {
    await fs.mkdir(componentsPath, { recursive: true });
    return true;
  } catch (error) {
    throw new Error(`Failed to create components directory: ${error.message}`);
  }
}

// Backup existing files if they exist
async function backupExistingFiles(destinationDir) {
  if (existsSync(destinationDir)) {
    const backupDir = `${destinationDir}_backup_${Date.now()}`;
    try {
      await fs.rename(destinationDir, backupDir);
      console.log(
        `Backed up existing files to ${path.relative(process.cwd(), backupDir)}`
      );
      return backupDir;
    } catch (error) {
      throw new Error(`Failed to backup existing files: ${error.message}`);
    }
  }
  return null;
}

// Validate source files exist
async function validateSourceFiles(craftDir) {
  const requiredFiles = ["index.tsx", "craft.css"];
  const missingFiles = [];

  for (const file of requiredFiles) {
    if (!existsSync(path.join(craftDir, file))) {
      missingFiles.push(file);
    }
  }

  if (missingFiles.length > 0) {
    throw new Error(
      `Missing required source files: ${missingFiles.join(", ")}`
    );
  }
}

async function getComponentsPath() {
  // Check for app directory first (Next.js 13+)
  const appPath = path.join(process.cwd(), "app");
  const srcPath = path.join(process.cwd(), "src");

  if (existsSync(appPath)) {
    return path.join(appPath, "components");
  } else if (existsSync(srcPath)) {
    return path.join(srcPath, "components");
  }
  return path.join(process.cwd(), "components");
}

// Check for existing Craft installations
async function checkExistingInstallation(componentsPath) {
  const oldCraftFile = path.join(componentsPath, "craft.tsx");
  const newCraftDir = path.join(componentsPath, "craft");

  let hasOldVersion = existsSync(oldCraftFile);
  let hasNewVersion = existsSync(newCraftDir);

  if (!hasOldVersion && !hasNewVersion) {
    return { exists: false };
  }

  const location = hasOldVersion
    ? path.relative(process.cwd(), oldCraftFile)
    : path.relative(process.cwd(), newCraftDir);

  const type = hasOldVersion ? "single file" : "directory";

  const update = await promptUser(
    `Found existing Craft installation (${type}) at ${location}. Would you like to update it? (yes/no)`,
    "yes"
  );

  if (update.toLowerCase() !== "yes") {
    throw new Error("Installation aborted by user.");
  }

  // If they have the old version and want to update, we'll need to remove it
  if (hasOldVersion) {
    try {
      const backupFile = `${oldCraftFile}_backup_${Date.now()}`;
      await fs.rename(oldCraftFile, backupFile);
      console.log(
        `Backed up old craft.tsx to ${path.relative(process.cwd(), backupFile)}`
      );
    } catch (error) {
      throw new Error(`Failed to backup old craft.tsx: ${error.message}`);
    }
  }

  return {
    exists: true,
    type,
    location,
    isOldVersion: hasOldVersion,
  };
}

async function main() {
  let backupDir = null;

  try {
    console.log("Welcome to the Craft Design System installer!");

    // Validate project structure
    const packageJson = await validateProject();
    console.log("Valid Next.js project detected");

    const componentName = await promptUser(
      "Enter the component name for the main file (default is index.tsx)",
      "index.tsx"
    );

    // Define source and destination paths
    const craftDir = path.join(__dirname, "..", "craft");
    await validateSourceFiles(craftDir);
    console.log("Source files validated");

    const componentsPath = await getComponentsPath();
    await ensureDirectories(componentsPath);

    // Check for existing installation
    const existingInstall = await checkExistingInstallation(componentsPath);
    if (existingInstall.exists) {
      console.log(
        `Updating existing Craft installation (${existingInstall.type})`
      );
      if (existingInstall.isOldVersion) {
        console.log("Migrating from single-file to directory structure");
      }
    } else {
      console.log(
        `Components directory ready at ${path.relative(
          process.cwd(),
          componentsPath
        )}`
      );
    }

    const destinationDir = path.join(componentsPath, "craft");
    const indexPath = path.join(craftDir, "index.tsx");
    const cssPath = path.join(craftDir, "craft.css");
    const destinationIndexPath = path.join(destinationDir, componentName);
    const destinationCssPath = path.join(destinationDir, "craft.css");

    console.log(`Installing Craft Design System components...`);

    // Only ask about replacement if it's not an update scenario
    if (!existingInstall.exists && existsSync(destinationDir)) {
      const replace = await promptUser(
        `Craft components already exist in ${path.relative(
          process.cwd(),
          destinationDir
        )}. Do you want to replace them? (yes/no)`,
        "no"
      );
      if (replace.toLowerCase() !== "yes") {
        console.log("Installation aborted.");
        process.exit(0);
      }
      // Backup existing files
      backupDir = await backupExistingFiles(destinationDir);
    }

    // Read component contents
    const [indexContent, cssContent] = await Promise.all([
      fs.readFile(indexPath, "utf8"),
      fs.readFile(cssPath, "utf8"),
    ]);

    // Create components/craft directory if it doesn't exist
    await fs.mkdir(destinationDir, { recursive: true });

    // Write component files
    await Promise.all([
      fs.writeFile(destinationIndexPath, indexContent.trim()),
      fs.writeFile(destinationCssPath, cssContent.trim()),
    ]);
    console.log("Component files written successfully");

    console.log("Installing dependencies...");

    const packageManager = detectPackageManager();

    // Check if components.json exists
    if (!existsSync(path.join(process.cwd(), "components.json"))) {
      // Install shadcn-ui
      runCommand(`npx shadcn@latest init`);
    } else {
      console.log("components.json found. Skipping shadcn-ui installation.");
    }

    // Install additional dependencies
    const installCmd =
      packageManager === "npm" ? "npm install" : `${packageManager} add`;
    runCommand(
      `${installCmd} clsx tailwind-merge tailwindcss-animate react-wrap-balancer`
    );

    // Get the relative path for import statements
    const importPath = path
      .relative(process.cwd(), destinationDir)
      .replace(/\\/g, "/") // Convert Windows paths to forward slashes
      .replace(/^src\//, "@/") // Replace src/ with @/ for Next.js path aliases
      .replace(/^app\//, "@/"); // Replace app/ with @/ for Next.js path aliases

    const successMessage = existingInstall.exists
      ? `\n✨ Success! Craft Design System has been ${
          existingInstall.isOldVersion ? "migrated" : "updated"
        } in ${path.relative(process.cwd(), destinationDir)}.`
      : `\n✨ Success! Craft Design System has been installed in ${path.relative(
          process.cwd(),
          destinationDir
        )}.`;

    console.log(successMessage);

    if (existingInstall.isOldVersion) {
      console.log(
        "\nℹ️  Your project has been migrated from the single-file to the directory structure."
      );
      console.log("   Please update your imports to use the new path.");
    }

    if (backupDir) {
      console.log(
        `ℹ️  Previous version backed up to: ${path.relative(
          process.cwd(),
          backupDir
        )}`
      );
    }

    console.log("\nTo use Craft in your project:");
    if (existingInstall.isOldVersion) {
      console.log("\nUpdate your imports:");
      console.log('   Old: import { ... } from "@/components/craft"');
      console.log(`   New: import { ... } from "${importPath}"`);
    }
    console.log("1. Import the CSS in your app/globals.css or layout.tsx:");
    console.log(`   import "${importPath}/craft.css"`);
    console.log("\n2. Import components in your pages:");
    console.log(`   import { Main, Section, Container } from "${importPath}"`);
    console.log("\n3. Start using components in your app:");
    console.log(`   export default function Page() {
     return (
       <Main>
         <Section>
           <Container>
             <h1>Hello, Craft!</h1>
           </Container>
         </Section>
       </Main>
     );
   }`);
  } catch (error) {
    console.error("\nAn error occurred during the installation:");
    console.error(error.message);

    // Cleanup on error if backup was made
    if (backupDir) {
      try {
        const destinationDir = path.join(await getComponentsPath(), "craft");
        if (existsSync(destinationDir)) {
          await fs.rm(destinationDir, { recursive: true });
        }
        await fs.rename(backupDir, destinationDir);
        console.log("Restored previous version from backup");
      } catch (restoreError) {
        console.error("Failed to restore from backup:", restoreError.message);
        console.error(`Manual restore may be needed from: ${backupDir}`);
      }
    }

    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
