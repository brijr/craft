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

async function ensureNextJsProject() {
  if (!existsSync("package.json")) {
    console.log("No package.json found. Creating a new Next.js project...");
    runCommand("npx create-next-app@latest . --ts --tailwind --eslint");
    console.log("Next.js project created successfully.");
  }
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

async function updateTailwindConfig() {
  const tailwindConfigPath = path.join(process.cwd(), "tailwind.config.ts");
  if (!existsSync(tailwindConfigPath)) {
    console.log("tailwind.config.ts not found. Skipping configuration update.");
    return;
  }

  let tailwindConfig = await fs.readFile(tailwindConfigPath, "utf8");
  const pluginsRegex = /plugins:\s*\[([\s\S]*?)\]/;
  const existingPlugins = tailwindConfig.match(pluginsRegex)?.[1] || "";
  const newPlugins =
    'require("tailwindcss-animate"), require("@tailwindcss/typography")';

  if (!existingPlugins.includes(newPlugins)) {
    const updatedPlugins = existingPlugins
      ? `${existingPlugins}, ${newPlugins}`
      : newPlugins;
    tailwindConfig = tailwindConfig.replace(
      pluginsRegex,
      `plugins: [${updatedPlugins}]`
    );
    await fs.writeFile(tailwindConfigPath, tailwindConfig);
    console.log("Updated tailwind.config.ts with new plugins.");
  } else {
    console.log("Tailwind config already includes required plugins.");
  }
}

async function main() {
  try {
    console.log("Welcome to the Craft Design System installer!");

    await ensureNextJsProject();

    const componentName = await promptUser(
      "Enter the component name",
      "craft.tsx"
    );
    const componentPath = path.join(__dirname, "..", "craft.tsx");
    const destinationDir = path.join(process.cwd(), "components");
    const destinationPath = path.join(destinationDir, componentName);

    console.log(`Installing component: ${componentName}`);

    // Check if the component already exists
    if (existsSync(destinationPath)) {
      const replace = await promptUser(
        `${componentName} already exists. Do you want to replace it? (yes/no)`,
        "no"
      );
      if (replace.toLowerCase() !== "yes") {
        console.log("Installation aborted.");
        process.exit(0);
      }
    }

    // Read component content
    const componentContent = await fs.readFile(componentPath, "utf8");

    // Create components directory if it doesn't exist
    await fs.mkdir(destinationDir, { recursive: true });

    // Write component file
    await fs.writeFile(destinationPath, componentContent.trim());

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
      `${installCmd} @tailwindcss/typography clsx tailwind-merge tailwindcss-animate react-wrap-balancer`
    );

    // Update Tailwind config
    await updateTailwindConfig();

    console.log(
      `\nSuccess! The ${componentName} component has been installed in the /components folder.`
    );
    console.log("You can now import and use the component in your project.");
  } catch (error) {
    console.error("\nAn error occurred during the installation:");
    console.error(error.message);
    console.error(
      "Please make sure you have the necessary permissions and try again."
    );
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
