import { getCollection } from "astro:content";
import { buildRssFeed } from "../lib/rss";
import { getPublicEssays, SITE_DESCRIPTION, SITE_TITLE } from "../lib/site";

export async function GET({ site }: { site?: URL }) {
  const entries = getPublicEssays(await getCollection("essays"));

  return new Response(
    buildRssFeed({
      title: `${SITE_TITLE} RSS`,
      description: SITE_DESCRIPTION,
      link: "/",
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
