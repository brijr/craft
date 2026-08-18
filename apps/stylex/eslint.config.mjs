import { nextJsConfig } from "@workspace/eslint-config/next-js";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  ...nextJsConfig,
  {
    files: ["babel.config.js", "postcss.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        __dirname: "readonly",
        module: "readonly",
        process: "readonly",
        require: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "turbo/no-undeclared-env-vars": "off",
    },
  },
];
