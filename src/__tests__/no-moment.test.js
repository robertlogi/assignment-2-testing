import { RuleTester } from 'eslint';
import { describe, it, expect } from 'vitest';
import noMoment from '../../eslint-rules/no-moment.js';
import typescriptParser from '@typescript-eslint/parser';

const ruleTester = new RuleTester({
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
});

describe('no-moment rule', () => {
  it('should forbid the use of the moment library', () => {
    expect(() => {
      ruleTester.run('no-moment', noMoment, {
        valid: ['import date from "date-fns";', 'const dayjs = require("dayjs");'],
        invalid: [
          {
            code: 'import moment from "moment";',
            errors: [{ message: 'Using moment library is forbidden.' }],
          },
          {
            code: 'const moment = require("moment");',
            errors: [{ message: 'Using moment library is forbidden.' }],
          },
        ],
      });
    }).not.toThrow();
  });
});
