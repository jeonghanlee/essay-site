import type { EssayEntry } from "./site";
import { absoluteUrl, getEssayPath, SITE_TITLE } from "./site";

type FeedOptions = {
  title: string;
  description: string;
  link: string;
  entries: EssayEntry[];
  site?: URL | string;
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatRssDate(date: Date): string {
  return date.toUTCString();
}

export function buildRssFeed(options: FeedOptions): string {
  const items = options.entries
    .map((entry) => {
      const itemUrl = absoluteUrl(getEssayPath(entry), options.site);
      const updated = entry.data.updatedDate ?? entry.data.pubDate;

      return `<item>
  <title>${escapeXml(entry.data.title)}</title>
  <link>${escapeXml(itemUrl)}</link>
  <guid>${escapeXml(itemUrl)}</guid>
  <description>${escapeXml(entry.data.summary)}</description>
  <pubDate>${formatRssDate(entry.data.pubDate)}</pubDate>
  <lastBuildDate>${formatRssDate(updated)}</lastBuildDate>
</item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${escapeXml(options.title)}</title>
  <link>${escapeXml(absoluteUrl(options.link, options.site))}</link>
  <description>${escapeXml(options.description)}</description>
  <generator>${escapeXml(SITE_TITLE)}</generator>
  <lastBuildDate>${formatRssDate(new Date())}</lastBuildDate>
${items}
</channel>
</rss>`;
}
