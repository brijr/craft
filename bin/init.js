#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the component name (default: craft.tsx): ", (componentName) => {
  componentName = componentName.trim() || "craft.tsx";
  const componentPath = path.join(__dirname, "..", "craft.tsx");

  console.log(`Welcome to the Craft component installer!`);
  console.log(`Installing component: ${componentName}`);

  try {
    const componentContent = fs.readFileSync(componentPath, "utf8");

    const destinationDir = path.join(process.cwd(), "components");

    // Create the components directory in the root if it doesn't exist
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, { recursive: true });
    }

    const destinationPath = path.join(destinationDir, componentName);

    // Write the component file to the destination path
    fs.writeFileSync(destinationPath, componentContent.trim());

    console.log(`Installing dependencies...`);

    // Install shadcn-ui
    execSync("npx shadcn-ui@latest init", { stdio: "inherit" });

    // Install @tailwindcss/typography, clsx, and tailwind-merge as dev dependencies
    execSync(
      "npm install @tailwindcss/typography@latest clsx@latest tailwind-merge@latest tailwindcss-animate@latest",
      { stdio: "inherit" }
    );

    // Add the @tailwindcss/typography and tailwindcss-animate plugins to the tailwind config file
    const tailwindConfigPath = path.join(process.cwd(), "tailwind.config.ts");
    let tailwindConfig;
    let updatedTailwindConfig;

    if (fs.existsSync(tailwindConfigPath)) {
      tailwindConfig = fs.readFileSync(tailwindConfigPath, "utf8");
      updatedTailwindConfig = tailwindConfig.replace(
        /plugins:\s*\[.*?\]/s,
        `plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]`
      );
      fs.writeFileSync(tailwindConfigPath, updatedTailwindConfig);
    }

    console.log(`\nSuccess! The ${componentName} component has been installed in the /components folder.`);
    console.log(`You can now import and use the component in your project.`);
  } catch (error) {
    console.error(`\nAn error occurred during the installation:`);
    console.error(error.message);
    console.error(`Please make sure you have the necessary permissions and try again.`);
    process.exit(1);
  } finally {
    rl.close();
  }
});
