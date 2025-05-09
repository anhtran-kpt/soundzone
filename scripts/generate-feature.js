#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Get command line arguments
const args = process.argv.slice(2);
const featureNameArg = args.find((arg) => arg.startsWith("--name="));

if (!featureNameArg) {
  console.error("Please provide a feature name with --name=feature-name");
  process.exit(1);
}

// Parse feature name
const featureName = featureNameArg.split("=")[1];

// Validate feature name
if (!/^[a-z0-9-]+$/.test(featureName)) {
  console.error(
    "Feature name should be lowercase, can contain numbers and hyphens"
  );
  process.exit(1);
}

// Convert to different case formats
const pascalCase = featureName
  .split("-")
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join("");
const camelCase = pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);
const pluralPascalCase = pascalCase + "s";
const pluralCamelCase = camelCase + "s";

// Paths
const templateDir = path.join(__dirname, "../src/features/template");
const targetDir = path.join(__dirname, `../src/features/${featureName}`);

// Create feature directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Function to copy and process template files
function copyDir(source, target) {
  // Create the target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // Read all files in the source directory
  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(
      target,
      file.replace("Entity", pascalCase).replace("entity", camelCase)
    );

    // Get the file stats
    const stats = fs.statSync(sourcePath);

    if (stats.isDirectory()) {
      // Recursively copy directories
      copyDir(sourcePath, targetPath);
    } else {
      // Read and modify the file content
      let content = fs.readFileSync(sourcePath, "utf8");

      // Replace placeholder names with actual feature name
      content = content
        .replace(/entity/g, camelCase)
        .replace(/Entity/g, pascalCase)
        .replace(/entities/g, pluralCamelCase)
        .replace(/Entities/g, pluralPascalCase);

      // Write the modified content to the target file
      fs.writeFileSync(targetPath, content);
      console.log(`Created: ${targetPath}`);
    }
  });
}

// Execute the copy with name replacement
copyDir(templateDir, targetDir);

// Update the package.json to add the script
const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

if (!packageJson.scripts["generate:feature"]) {
  packageJson.scripts["generate:feature"] = "node scripts/generate-feature.js";
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log("Added generate:feature script to package.json");
}

console.log(`✅ Feature ${pascalCase} generated successfully!`);
console.log(`💡 Usage example:`);
console.log(
  `- Import: import { ${pascalCase}List, ${pascalCase}Form } from "@/features/${featureName}";`
);
console.log(`- API: src/app/api/${pluralCamelCase}/route.ts`);
console.log(`\nNext steps:`);
console.log(`1. Update the Prisma schema if needed`);
console.log(`2. Update the API endpoints configuration`);
console.log(`3. Create the API routes using the generated handlers`);
