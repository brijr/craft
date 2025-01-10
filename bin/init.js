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
  if (existsSync("pnpm-lock.yaml")) return "pnpm";
  if (existsSync("yarn.lock")) return "yarn";
  if (existsSync("package-lock.json")) return "npm";
  return "pnpm"; // Default to pnpm
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

// Check for required dependencies
async function checkDependencies() {
  const packageJson = JSON.parse(
    await fs.readFile(path.join(process.cwd(), "package.json"), "utf8")
  );

  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  return {
    hasShadcn: existsSync(path.join(process.cwd(), "components.json")),
    hasTailwind: deps["tailwindcss"] !== undefined,
  };
}

// Find the components directory
async function findComponentsDir() {
  const possiblePaths = [
    path.join(process.cwd(), "app", "components"),
    path.join(process.cwd(), "src", "components"),
    path.join(process.cwd(), "components"),
  ];

  for (const dir of possiblePaths) {
    if (existsSync(dir)) {
      return dir;
    }
  }

  // If no components directory exists, create one in the appropriate location
  if (existsSync(path.join(process.cwd(), "app"))) {
    const dir = path.join(process.cwd(), "app", "components");
    await fs.mkdir(dir, { recursive: true });
    return dir;
  }

  if (existsSync(path.join(process.cwd(), "src"))) {
    const dir = path.join(process.cwd(), "src", "components");
    await fs.mkdir(dir, { recursive: true });
    return dir;
  }

  const dir = path.join(process.cwd(), "components");
  await fs.mkdir(dir, { recursive: true });
  return dir;
}

async function main() {
  try {
    console.log("Welcome to the Craft Design System installer!");

    // Validate project structure
    await validateProject();
    console.log("Valid Next.js project detected");

    // Check dependencies
    const { hasShadcn, hasTailwind } = await checkDependencies();

    // Install required dependencies
    const packageManager = detectPackageManager();
    const installCmd =
      packageManager === "npm" ? "npm install" : `${packageManager} add`;

    if (!hasTailwind) {
      console.log("Installing Tailwind CSS...");
      runCommand(`${installCmd} -D tailwindcss`);
      console.log("Tailwind CSS installed");
    } else {
      console.log("Tailwind CSS already installed");
    }

    if (!hasShadcn) {
      console.log("Installing shadcn/ui...");
      runCommand(`npx shadcn@latest init`);
      console.log("shadcn/ui installed");
    } else {
      console.log("shadcn/ui already installed");
    }

    // Find or create components directory
    const componentsDir = await findComponentsDir();
    console.log(
      `Components directory ready at ${path.relative(
        process.cwd(),
        componentsDir
      )}`
    );

    // Check for existing craft component
    const craftPath = path.join(componentsDir, "craft.tsx");
    if (existsSync(craftPath)) {
      const replace = await promptUser(
        "Craft component already exists. Do you want to replace it? (yes/no)",
        "no"
      );
      if (replace.toLowerCase() !== "yes") {
        console.log("Installation aborted.");
        process.exit(0);
      }
    }

    // Copy craft component
    const sourcePath = path.join(__dirname, "..", "craft.tsx");
    await fs.copyFile(sourcePath, craftPath);
    console.log("Craft component installed");

    // Install remaining dependencies
    console.log("Installing additional dependencies...");
    runCommand(`${installCmd} clsx tailwind-merge tailwindcss-animate`);

    console.log(
      "\nSuccess! Craft Design System has been installed in ${path.relative(process.cwd(), componentsDir)}."
    );

    console.log("\nTo use Craft in your project:");
    console.log(
      `1. Import components from "${path.relative(process.cwd(), craftPath)}"`
    );
    console.log(
      '   import { Main, Section, Container } from "@/components/craft";'
    );
    console.log("\n2. Start using components in your app:");
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

    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
