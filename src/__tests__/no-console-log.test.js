import { RuleTester } from "eslint";
import { describe, it, expect } from "vitest";
import noConsoleLog from "../../eslint-rules/no-console-log.js";
import typescriptParser from "@typescript-eslint/parser";

const ruleTester = new RuleTester({
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: "latest",
    sourceType: "module",
  },
});

describe("no-console-log rule", () => {
  it("should forbid the use of console.log", () => {
    expect(() => {
      ruleTester.run("no-console-log", noConsoleLog, {
        valid: ['console.error("error");', 'alert("hello");'],
        invalid: [
          {
            code: 'console.log("log message");',
            errors: [{ message: "Using console.log is forbidden." }],
          },
        ],
      });
    }).not.toThrow();
  });
});
