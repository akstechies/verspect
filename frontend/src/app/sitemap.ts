import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://verspect.akstechies.com";
  const paths = [
    "",
    "/pricing",
    "/roadmap",
    "/changelog",
    "/feedback",
    "/contact",
    "/docs",
    "/blog",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
