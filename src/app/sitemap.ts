import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bb-portfolio-alpha.vercel.app";
  const routes = [
    "",
    "/projects",
    "/resume",
    "/contact",
    "/projects/canteen-platform",
    "/projects/bridge-it",
    "/projects/bulk-document-processor",
    "/projects/aegis-match",
    "/projects/krypton-kv",
    "/projects/commitor",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
