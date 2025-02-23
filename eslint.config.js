import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

import camelcaseFunctions from "./eslint-rules/camelcase-functions.js";
import noMoment from "./eslint-rules/no-moment.js";
import noConsoleLog from "./eslint-rules/no-console-log.js";

const customRulesPlugin = {
  rules: {
    "camelcase-functions": camelcaseFunctions,
    "no-moment": noMoment,
    "no-console-log": noConsoleLog,
  },
};

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "custom-rules": customRulesPlugin,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      "custom-rules/camelcase-functions": "error",
      "custom-rules/no-moment": "error",
      "custom-rules/no-console-log": "error",
    },
  },
];
