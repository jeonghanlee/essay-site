import { getCollection } from "astro:content";
import { absoluteUrl, getEssayPath, getPublicEssays } from "../lib/site";

function urlEntry(path: string, site?: URL, lastModified?: Date): string {
  const lastmod = lastModified ? `\n    <lastmod>${lastModified.toISOString()}</lastmod>` : "";
  return `  <url>
    <loc>${absoluteUrl(path, site)}</loc>${lastmod}
  </url>`;
}

export async function GET({ site }: { site?: URL }) {
  const essays = getPublicEssays(await getCollection("essays"));
  const staticPaths = ["/", "/ko/", "/en/", "/rss.xml", "/rss/ko.xml", "/rss/en.xml"];
  const entries = [
    ...staticPaths.map((path) => urlEntry(path, site)),
    ...essays.map((entry) => urlEntry(getEssayPath(entry), site, entry.data.updatedDate ?? entry.data.pubDate)),
  ].join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
