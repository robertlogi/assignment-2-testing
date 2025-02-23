import { describe, it, expect } from "vitest";
import {
  add,
  getCurrentYear,
  isWithinRange,
  isDateBefore,
  isSameDay,
} from "../dateUtils";
import { DATE_UNIT_TYPES } from "../constants";

describe("Date Utils", () => {
  describe("getCurrentYear", () => {
    it("should return the current year", () => {
      const result = getCurrentYear();
      const expectedYear = new Date().getFullYear();
      expect(result).toBe(expectedYear);
    });
  });

  describe("add", () => {
    it("should add seconds to a given date", () => {
      const date = new Date("2025-01-01");
      const result = add(date, 86400, DATE_UNIT_TYPES.SECONDS);
      const expectedDate = new Date("2025-01-02");
      expect(result).toEqual(expectedDate);
    });

    it("should add minutes to a given date", () => {
      const date = new Date("2025-01-01");
      const result = add(date, 1440, DATE_UNIT_TYPES.MINUTES);
      const expectedDate = new Date("2025-01-02");
      expect(result).toEqual(expectedDate);
    });

    it("should add days to a given date", () => {
      const date = new Date("2025-01-01");
      const result = add(date, 10, DATE_UNIT_TYPES.DAYS);
      const expectedDate = new Date("2025-01-11");
      expect(result).toEqual(expectedDate);
    });

    it("should add weeks to a given date", () => {
      const date = new Date("2025-01-01");
      const result = add(date, 5, DATE_UNIT_TYPES.WEEKS);
      const expectedDate = new Date("2025-02-05");
      expect(result).toEqual(expectedDate);
    });

    it("should add months to a given date", () => {
      const date = new Date("2025-01-01");
      const result = add(date, 6, DATE_UNIT_TYPES.MONTHS);
      const expectedDate = new Date("2025-07-01");
      expect(result).toEqual(expectedDate);
    });

    it("should add years to a given date", () => {
      const date = new Date("2025-01-01");
      const result = add(date, 2, DATE_UNIT_TYPES.YEARS);
      const expectedDate = new Date("2027-01-01");
      expect(result).toEqual(expectedDate);
    });
  });

  describe("isWithinRange", () => {
    it("should return true if date is within range", () => {
      const date = new Date("2025-02-01");
      const from = new Date("2025-01-01");
      const to = new Date("2025-03-01");
      expect(isWithinRange(date, from, to)).toBe(true);
    });

    it("should return false if date is before the lower bounds", () => {
      const date = new Date("2025-04-01");
      const from = new Date("2025-01-01");
      const to = new Date("2025-03-01");
      expect(isWithinRange(date, from, to)).toBe(false);
    });

    it("should return false if date is after the upper bounds", () => {
      const date = new Date("2024-31-12");
      const from = new Date("2025-01-01");
      const to = new Date("2025-03-01");
      expect(isWithinRange(date, from, to)).toBe(false);
    });

    it("should return false if date is outside range", () => {
      const date = new Date("2025-04-01");
      const from = new Date("2025-01-01");
      const to = new Date("2025-03-01");
      expect(isWithinRange(date, from, to)).toBe(false);
    });

    it("should return true if date lies on the lower bounds of the range", () => {
      const date = new Date("2025-01-01");
      const from = new Date("2025-01-01");
      const to = new Date("2025-03-01");
      expect(isWithinRange(date, from, to)).toBe(true);
    });

    it("should return true if date lies on the upper bounds of the range", () => {
      const date = new Date("2025-03-01");
      const from = new Date("2025-01-01");
      const to = new Date("2025-03-01");
      expect(isWithinRange(date, from, to)).toBe(true);
    });
  });

  describe("isDateBefore", () => {
    it("should return true if date is before compareDate", () => {
      const date = new Date("2025-01-01");
      const compareDate = new Date("2025-02-01");
      expect(isDateBefore(date, compareDate)).toBe(true);
    });

    it("should return false if date is after compareDate", () => {
      const date = new Date("2025-03-01");
      const compareDate = new Date("2025-02-01");
      expect(isDateBefore(date, compareDate)).toBe(false);
    });

    it("should return false if date is the same as compareDate", () => {
      const date = new Date("2025-02-01");
      const compareDate = new Date("2025-02-01");
      expect(isDateBefore(date, compareDate)).toBe(false);
    });
  });

  describe("isSameDay", () => {
    it("should return true for the same day", () => {
      const date = new Date("2025-01-01");
      const compareDate = new Date("2025-01-01");
      expect(isSameDay(date, compareDate)).toBe(true);
    });

    it("should return false for different days", () => {
      const date = new Date("2025-01-01");
      const compareDate = new Date("2025-01-02");
      expect(isSameDay(date, compareDate)).toBe(false);
    });
  });
});
