import { expect, test } from "bun:test";
import { blogPublicationDate } from "./blogDate";

test("preserves the October 1, 2025 publication day in ISO format", () => {
  expect(blogPublicationDate("October 1, 2025")).toBe("2025-10-01");
});

test("preserves the December 15, 2025 publication day in ISO format", () => {
  expect(blogPublicationDate("December 15, 2025")).toBe("2025-12-15");
});

test("does not invent a publication date for invalid input", () => {
  expect(blogPublicationDate("February 30, 2025")).toBeUndefined();
});