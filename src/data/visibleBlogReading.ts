import { publicBlogPosts } from "@/data/blogPosts";

const relatedSlugs: Record<string, string[]> = {
  "sell-first-or-buy-first": ["downsizing-sell-buy-snohomish-county"],
  "downsizing-guide": ["sell-first-or-buy-first", "help-parents-downsize-out-of-area"],
  "relocating-guide": ["remote-out-of-area-buyers-sellers"],
  "pcs-military-relocation-naval-station-everett": ["va-home-buyers-naval-station-everett"],
  "first-time-home-buying-calm-guide": ["first-time-buyer-competitive-offer-protections", "interest-rates-impact"],
  "first-time-home-buyers-marysville-wa": ["first-time-home-buying-calm-guide"],
};

export const getVisibleRelatedPosts = (slug: string) => {
  if (!publicBlogPosts.some((post) => post.slug === slug && post.image)) return [];
  return (relatedSlugs[slug] ?? []).flatMap((target) => {
    const post = publicBlogPosts.find((candidate) => candidate.slug === target && candidate.image);
    return post ? [post] : [];
  });
};