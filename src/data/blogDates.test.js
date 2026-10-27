import { expect, test } from "bun:test";
import { allBlogPosts, mainBlogPosts, searchInsightsPosts } from "./blogPosts";
import { blogPublicationDate } from "../lib/blogDate";

// Debbie's rule: publication dates should read as current, spread across late
// 2025 and 2026 rather than clustered in one old month.
const iso = (post) => blogPublicationDate(post.date);

test("every article date is machine-readable and never in the future", () => {
  const today = new Date();
  for (const post of allBlogPosts) {
    const value = iso(post);
    expect(value, `${post.id} has no valid publication date`).toBeTruthy();
    expect(new Date(`${value}T00:00:00`) <= today, `${post.id} is dated in the future`).toBe(true);
  }
});

test("most articles are dated in 2026 or later so the blog reads current", () => {
  const recent = allBlogPosts.filter((post) => Number(iso(post).slice(0, 4)) >= 2026);
  expect(recent.length).toBeGreaterThanOrEqual(15);
});

test("the four main articles are the newest on the site", () => {
  const newestInsight = Math.max(
    ...searchInsightsPosts.map((post) => new Date(`${iso(post)}T00:00:00`).getTime()),
  );
  for (const post of mainBlogPosts) {
    expect(new Date(`${iso(post)}T00:00:00`).getTime()).toBeGreaterThan(newestInsight);
  }
});

test("dates are spread out instead of sharing one publication day", () => {
  const distinct = new Set(allBlogPosts.map(iso));
  expect(distinct.size).toBeGreaterThanOrEqual(20);
});
