import { expect, test } from "bun:test";
import { allBlogPosts, publicBlogPosts } from "./blogPosts";
import { getVisibleRelatedPosts } from "./visibleBlogReading";

test("related reading targets only the twelve pictured public posts", () => {
  expect(publicBlogPosts).toHaveLength(12);
  const links = publicBlogPosts.flatMap((post) => getVisibleRelatedPosts(post.slug));
  expect(links.length).toBeGreaterThan(0);
  for (const post of links) {
    expect(publicBlogPosts.some((visible) => visible.slug === post.slug && Boolean(visible.image))).toBe(true);
  }
});

test("hidden SEO articles get no new related reading", () => {
  const hidden = allBlogPosts.filter((post) => !publicBlogPosts.some((visible) => visible.id === post.id));
  expect(hidden).toHaveLength(18);
  for (const post of hidden) expect(getVisibleRelatedPosts(post.slug)).toEqual([]);
});