import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ombhalerao.vercel.app";
  const routes = [
    "",
    "/projects",
    "/resume",
    "/contact",
    "/projects/bridge-it",
    "/projects/cafe-la-roche",
    "/projects/aegis-match",
    "/projects/krypton-kv",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
