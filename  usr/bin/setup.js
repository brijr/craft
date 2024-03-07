#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Path to the craft.tsx file in your package
const craftFilePath = path.join(__dirname, "craft.tsx");

// Destination path in the user's project
const destPath = process.cwd();

// Function to copy the craft.tsx file into the user's project directory
function copyFile() {
  const destFilePath = path.join(destPath, "craft.tsx");
  if (fs.existsSync(destFilePath)) {
    console.log("craft.tsx already exists in the project directory.");
  } else {
    fs.copyFileSync(craftFilePath, destFilePath);
    console.log("craft.tsx has been added to your project.");
  }
}

// Function to install dependencies
function installDependencies() {
  // List your dependencies here
  const dependencies = [
    "clsx",
    "tailwind-merge",
    "@tailwindcss/typography",
    "react-wrap-balancer",
  ];
  console.log("Installing dependencies...");
  execSync(`npm install ${dependencies.join(" ")}`, { stdio: "inherit" });
  console.log("Dependencies have been installed.");
}

// Execute the functions
installDependencies();
copyFile();
