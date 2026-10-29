import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const siteUrl = new URL((await readFile("dist/sitemap.xml", "utf8")).match(/<loc>([^<]*)<\/loc>/)[1]).origin;
const sitemap = await readFile("dist/sitemap.xml", "utf8");
const routes = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname);
const template = await readFile("dist/index.html", "utf8");
const { render } = await import("../dist/server/entry-server.js");

const renderHead = (helmet) => [
  helmet.title.toString(),
  helmet.meta.toString(),
  helmet.link.toString(),
  helmet.script.toString(),
].join("\n");

for (const route of routes) {
  const { html, helmet } = await render(route);
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

