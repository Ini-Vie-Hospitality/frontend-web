import { fallbackHomepageData } from "./fallback.ts";
import type { HomepageData, PublishedHomepageData } from "./types.ts";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value);
const requiredKeys = (value: object) => Object.keys(value);

function validShape(value: unknown, fallback: unknown): boolean {
  if (Array.isArray(fallback)) return Array.isArray(value);
  if (!isRecord(fallback)) return typeof value === typeof fallback;
  if (!isRecord(value)) return false;
  return requiredKeys(fallback).every(
    (key) => key in value && validShape(value[key], fallback[key]),
  );
}

export function normalizeHomepageData(input: unknown): HomepageData {
  const source = isRecord(input) ? input : {};
  const data = Object.fromEntries(
    Object.keys(fallbackHomepageData).map((key) => [key, null]),
  ) as HomepageData;

  for (const key of Object.keys(
    fallbackHomepageData,
  ) as (keyof PublishedHomepageData)[]) {
    let value = source[key];
    if (key === "ourStory" && isRecord(value) && isRecord(value.blocks))
      value = { ...value, blocks: Object.values(value.blocks) };
    if (!validShape(value, fallbackHomepageData[key])) continue;
    if (
      key === "ourStory" &&
      (value as PublishedHomepageData["ourStory"]).blocks.length !== 4
    )
      continue;
    if (
      key === "specialOffers" &&
      (value as PublishedHomepageData["specialOffers"]).items.length !== 3
    )
      continue;
    const section = structuredClone(value) as PublishedHomepageData[typeof key];
    if (key === "featuredProperties" || key === "wellness") {
      const collection = section as
        | PublishedHomepageData["featuredProperties"]
        | PublishedHomepageData["wellness"];
      collection.items = collection.items.map((item) => ({
        ...item,
        id:
          typeof item.id === "string" && /^\d+$/.test(item.id)
            ? Number(item.id)
            : item.id,
      })) as never[];
    }
    data[key] = section as never;
  }

  return data;
}

type HomepageFetch = (
  input: string,
  init: RequestInit & { next?: { revalidate: number; tags?: string[] } },
) => Promise<Response>;
type HomepageLoaderDependencies = {
  apiUrl?: string;
  fetch?: HomepageFetch;
  environment?: string;
  logger?: (message: string) => void;
  mode?: "published" | "draft";
  previewSecret?: string;
};

export async function loadHomepageData({
  apiUrl = process.env.CMS_API_URL,
  fetch: fetchHomepage = fetch,
  environment = process.env.NODE_ENV,
  logger = console.error,
  mode = "published",
  previewSecret = process.env.HOMEPAGE_PREVIEW_SECRET,
}: HomepageLoaderDependencies = {}): Promise<HomepageData> {
  const fallback = (reason: string): HomepageData => {
    if (environment === "production")
      logger(`Homepage CMS fallback: ${reason}`);
    return structuredClone(fallbackHomepageData);
  };
  if (!apiUrl) return fallback("CMS_API_URL is missing");
  try {
    const preview = mode === "draft";
    const response = await fetchHomepage(
      `${apiUrl.replace(/\/$/, "")}/api/homepage${preview ? "/preview" : ""}`,
      {
        headers: {
          Accept: "application/json",
          ...(preview && previewSecret
            ? { Authorization: `Bearer ${previewSecret}` }
            : {}),
        },
        ...(preview
          ? { cache: "no-store" }
          : { next: { revalidate: 300, tags: ["homepage"] } }),
        signal: AbortSignal.timeout(5_000),
      },
    );
    if (!response.ok) return fallback(`HTTP ${response.status}`);
    const payload: unknown = await response.json();
    if (!isRecord(payload)) return fallback("invalid payload");
    const data = "data" in payload ? payload.data : payload;
    if (!isRecord(data)) return fallback("invalid payload");
    return normalizeHomepageData(data);
  } catch {
    return fallback("request failed");
  }
}
