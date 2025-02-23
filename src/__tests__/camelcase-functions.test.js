import { RuleTester } from "eslint";
import { describe, it, expect } from "vitest";
import camelcaseFunctions from "../../eslint-rules/camelcase-functions.js";
import typescriptParser from "@typescript-eslint/parser";

const ruleTester = new RuleTester({
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: "latest",
    sourceType: "module",
  },
});

describe("camelcase-functions rule", () => {
  it("should enforce camelCase for function names", () => {
    expect(() => {
      ruleTester.run("camelcase-functions", camelcaseFunctions, {
        valid: ["function myFunction() {}"],
        invalid: [
          {
            code: "function my_function() {}",
            errors: [
              { message: 'Function "my_function" should be camelCase.' },
            ],
            output: "function myFunction() {}",
          },
        ],
      });
    }).not.toThrow();
  });
});
