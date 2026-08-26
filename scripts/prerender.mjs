import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const siteUrl = "https://debbiewelchhomes.com";
const sitemap = await readFile("dist/sitemap.xml", "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/debbiewelchhomes\.com([^<]*)<\/loc>/g)]
  .map((match) => match[1] || "/");
const template = await readFile("dist/index.html", "utf8");
const { render } = await import("../dist/server/entry-server.js");

const renderHead = (helmet) => [
  helmet.title.toString(),
  helmet.meta.toString(),
  helmet.link.toString(),
  helmet.script.toString(),
].join("\n");

for (const route of routes) {
  const { html, helmet } = render(route);
  if (!helmet) throw new Error(`No page metadata was rendered for ${route}`);
  const withoutRouteMetadata = template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta data-rh="true"[^>]*>\s*/gi, "");
  const page = withoutRouteMetadata
    .replace("<div id=\"root\"></div>", `<div id="root">${html}</div>`)
    .replace("</head>", `${renderHead(helmet)}\n</head>`);
  const output = route === "/" ? "dist/index.html" : join("dist", route.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, page);
}

console.log(`Prerendered ${routes.length} public pages for ${siteUrl}.`);

