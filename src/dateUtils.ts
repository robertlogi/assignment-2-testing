import { getYear, add as addFn, isBefore, isSameDay as isSameDayFn, isWithinInterval } from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear(): number {
  return getYear(new Date());
}

export function add(date: Date, number: number, type: DATE_UNIT_TYPES = DATE_UNIT_TYPES.DAYS): Date {
  return addFn(date, { [type]: number });
}

export function isWithinRange(date: Date, from: Date, to: Date): boolean {
  return isWithinInterval(date, { start: from, end: to });
}

export function isDateBefore(date: Date, compareDate: Date): boolean {
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date): boolean {
  return isSameDayFn(date, compareDate);
}
