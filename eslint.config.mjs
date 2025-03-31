import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import prettier from 'eslint-plugin-prettier'
import prettierConfig from './prettier.config.mjs' assert { type: 'json' }

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"], plugins: { js, prettier }, extends: ["js/recommended"], rules: {'prettier/prettier': ['error', prettierConfig]} },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
]);