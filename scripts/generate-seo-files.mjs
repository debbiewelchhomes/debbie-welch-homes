import { readFile, writeFile } from "node:fs/promises";

const configSource = await readFile(new URL("../src/config/site.ts", import.meta.url), "utf8");
const blogSource = await readFile(new URL("../src/data/blogPosts.ts", import.meta.url), "utf8");

const defaultUrlMatch = configSource.match(/DEFAULT_SITE_URL\s*=\s*"([^"]+)"/);
if (!defaultUrlMatch) {
  throw new Error("DEFAULT_SITE_URL is missing from src/config/site.ts");
}

const siteUrl = (process.env.VITE_SITE_URL || defaultUrlMatch[1]).replace(/\/+$/, "");
const lastModified = process.env.SITE_LAST_MODIFIED || "2026-08-17";

const coreRoutes = [
  "/",
  "/services",
  "/services/buying",
  "/services/selling",
  "/services/relocation",
  "/services/downsizing",
  "/listings",
  "/blog",
  "/about",
  "/about/exp-realty",
  "/privacy-policy",
  "/contact",
  "/areas/snohomish-county",
  "/areas/arlington",
  "/areas/bothell-mill-creek",
  "/areas/everett-mukilteo",
  "/areas/lake-stevens",
  "/areas/marysville",
  "/areas/snohomish",
  "/areas/stanwood-camano"
];
const blogRoutes = [...blogSource.matchAll(/\n\s*slug:\s*"([^"]+)"/g)]
  .map((match) => `/blog/${match[1]}`);

const routes = [...new Set([...coreRoutes, ...blogRoutes])];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${lastModified}</lastmod>
  </url>`).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await Promise.all([
  writeFile(new URL("../public/sitemap.xml", import.meta.url), sitemap),
  writeFile(new URL("../public/robots.txt", import.meta.url), robots)
]);

console.log(`Generated SEO files for ${siteUrl} with ${routes.length} URLs.`);
