import { describe, expect, test } from "bun:test";
import { resourceLinks } from "./resourceLinks";

describe("existing resource destinations", () => {
  test("retains the approved buyer guide destination", () => {
    expect(resourceLinks.buyerGuide).toBe("https://debbiewelchhomes.myflodesk.com/home-buyer-guide");
  });

  test("retains the existing live market report destination", () => {
    expect(resourceLinks.marketReports).toBe("https://debbiewelch.exprealty.com/pages/market-reports");
  });
});