const path = require("node:path");

const dev = process.env.NODE_ENV !== "production";

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev,
        runtimeInjection: false,
        enableInlinedConditionalMerge: true,
        treeshakeCompensation: true,
        aliases: {
          "@/*": [path.join(__dirname, "*")],
          "@workspace/craft-ds/*": [
            path.join(__dirname, "../../packages/craft-ds/*"),
          ],
        },
        unstable_moduleResolution: {
          type: "commonJS",
        },
      },
    ],
  ],
};
