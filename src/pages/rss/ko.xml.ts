import { getCollection } from "astro:content";
import { buildRssFeed } from "../../lib/rss";
import { getLanguageEssays } from "../../lib/site";

export async function GET({ site }: { site?: URL }) {
  const entries = getLanguageEssays(await getCollection("essays"), "ko");

  return new Response(
    buildRssFeed({
      title: "KO RSS",
      description: "원문 저장소의 에세이 피드입니다.",
      link: "/ko/",
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
