import type { CollectionEntry } from "astro:content";

export const SITE_TITLE = "Essays";
export const SITE_DESCRIPTION =
  "A source-owned archive for long-form essays.";
export const DEFAULT_HERO_IMAGE = "/images/essay-desk.png";

export const UI_COPY = {
  ko: {
    siteTitle: "에세이",
    primaryNavigation: "기본 탐색",
    skipToContent: "본문으로 이동",
    relatedLanguageVersions: "대응 글",
    relatedEssays: "관련 글",
    share: "공유",
    previousEssay: "이전 글",
    nextEssay: "다음 글",
    essayNavigation: "글 이동",
    footerText: "원문은 이곳에 보관하고, 소셜 채널에는 새 글 알림과 원문 링크만 남깁니다.",
    feeds: "피드",
    allRss: "전체 RSS",
    koRss: "KO RSS",
    enRss: "EN RSS",
  },
  en: {
    siteTitle: "Essays",
    primaryNavigation: "Primary",
    skipToContent: "Skip to content",
    relatedLanguageVersions: "Alternate version",
    relatedEssays: "Related Essays",
    share: "Share",
    previousEssay: "Previous",
    nextEssay: "Next",
    essayNavigation: "Essay navigation",
    footerText: "Original essays live here. Social channels announce new work and point back to the source.",
    feeds: "Feeds",
    allRss: "All RSS",
    koRss: "KO RSS",
    enRss: "EN RSS",
  },
} as const;

export const LANGUAGES = {
  ko: {
    code: "ko",
    label: "KO",
    name: "KO",
    path: "/ko/",
    feedPath: "/rss/ko.xml",
    locale: "ko-KR",
  },
  en: {
    code: "en",
    label: "EN",
    name: "EN",
    path: "/en/",
    feedPath: "/rss/en.xml",
    locale: "en-US",
  },
} as const;

export type Language = keyof typeof LANGUAGES;
export type EssayEntry = CollectionEntry<"essays">;

export function pathWithBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const joined = `${normalizedBase}${normalizedPath}`;
  return joined === "" ? "/" : joined.replace(/\/{2,}/g, "/");
}

export function absoluteUrl(path: string, site?: URL | string): string {
  const siteUrl = site?.toString() ?? import.meta.env.SITE ?? "https://example.com";
  return new URL(pathWithBase(path), siteUrl).toString();
}

export function getEssayPath(entry: EssayEntry): string {
  return `/${entry.data.language}/essays/${entry.data.slug}/`;
}

export function getPublicEssays(entries: EssayEntry[]): EssayEntry[] {
  return entries
    .filter((entry) => !entry.data.draft)
    .sort((left, right) => {
      const dateOrder = right.data.pubDate.getTime() - left.data.pubDate.getTime();
      if (dateOrder !== 0) {
        return dateOrder;
      }

      return left.data.sortOrder - right.data.sortOrder;
    });
}

export function getLanguageEssays(entries: EssayEntry[], language: Language): EssayEntry[] {
  return getPublicEssays(entries).filter((entry) => entry.data.language === language);
}

export function getSeriesEssays(entries: EssayEntry[], language: Language): EssayEntry[] {
  return entries
    .filter((entry) => !entry.data.draft && entry.data.language === language)
    .sort((left, right) => {
      const dateOrder = left.data.pubDate.getTime() - right.data.pubDate.getTime();
      if (dateOrder !== 0) {
        return dateOrder;
      }

      return left.data.sortOrder - right.data.sortOrder;
    });
}

export function getAdjacentEssays(
  entries: EssayEntry[],
  entry: EssayEntry,
): { previous: EssayEntry | undefined; next: EssayEntry | undefined } {
  const series = getSeriesEssays(entries, entry.data.language);
  const index = series.findIndex((candidate) => candidate.id === entry.id);
  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: series[index - 1],
    next: series[index + 1],
  };
}

export function getAlternateEssays(entries: EssayEntry[], entry: EssayEntry): EssayEntry[] {
  return getPublicEssays(entries).filter(
    (candidate) =>
      candidate.data.canonicalId === entry.data.canonicalId &&
      candidate.data.language !== entry.data.language,
  );
}

export function getRelatedEssays(entries: EssayEntry[], entry: EssayEntry) {
  const publicEntries = getPublicEssays(entries);

  return entry.data.related
    .map((relation) => {
      const relatedEntry =
        publicEntries.find(
          (candidate) =>
            candidate.data.canonicalId === relation.canonicalId &&
            candidate.data.language === entry.data.language,
        ) ??
        publicEntries.find((candidate) => candidate.data.canonicalId === relation.canonicalId);

      return relatedEntry ? { relation, entry: relatedEntry } : undefined;
    })
    .filter((item): item is { relation: EssayEntry["data"]["related"][number]; entry: EssayEntry } => Boolean(item));
}

export function formatDate(date: Date, language: Language): string {
  return new Intl.DateTimeFormat(LANGUAGES[language].locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}
