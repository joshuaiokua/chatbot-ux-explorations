import globals from "globals";
import pluginJs from "@eslint/js";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { ignores: ["*/dist/"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { settings: { react: { version: "detect" } } },
  pluginJs.configs.recommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
];
