import { COMPONENTS } from "@/data/components"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://vibeui.space"

    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/components`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/docs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/docs/installation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/docs/theming`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ]

    const componentPages: MetadataRoute.Sitemap = Object.keys(COMPONENTS).map((slug) => ({
        url: `${baseUrl}/components/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
    }))

    return [...staticPages, ...componentPages]
}
