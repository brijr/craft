#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const componentName = "craft.tsx";
const componentPath = path.join(__dirname, "..", "craft.tsx");
const componentContent = fs.readFileSync(componentPath, "utf8");

const destinationDir = path.join(process.cwd(), "components");

// Create the components directory in the root if it doesn't exist
if (!fs.existsSync(destinationDir)) {
  const rootDir = process.cwd();
  const rootComponentsDir = path.join(rootDir, "components");
  if (!fs.existsSync(rootComponentsDir)) {
    fs.mkdirSync(rootComponentsDir);
  }
  fs.mkdirSync(destinationDir);
}

const destinationPath = path.join(destinationDir, componentName);

// Write the component file to the destination path
fs.writeFileSync(destinationPath, componentContent.trim());

// Install @tailwindcss/typography as a dev dependency
execSync(
  "npm install @tailwindcss/typography@latest clsx@latest tailwind-merge@latest",
  { stdio: "inherit" }
);

console.log(
  `Successfully installed ${componentName} in the /components/ folder and installed @tailwindcss/typography.`
);
