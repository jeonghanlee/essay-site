import { getCollection } from "astro:content";
import { buildRssFeed } from "../../lib/rss";
import { getLanguageEssays } from "../../lib/site";

export async function GET({ site }: { site?: URL }) {
  const entries = getLanguageEssays(await getCollection("essays"), "en");

  return new Response(
    buildRssFeed({
      title: "EN RSS",
      description: "Long-form essays from the source archive.",
      link: "/en/",
      entries,
      site,
    }),
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
      },
    },
  );
}
