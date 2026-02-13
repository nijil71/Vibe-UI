import { COMPONENTS } from "@/data/components"
import { notFound } from "next/navigation"
import { ComponentDetailClient } from "./client"
import { Metadata } from "next"

export function generateStaticParams() {
    return Object.keys(COMPONENTS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const componentData = COMPONENTS[slug as keyof typeof COMPONENTS]

    if (!componentData) {
        return {
            title: "Not Found - VibeUI",
        }
    }

    return {
        title: `${componentData.title} - VibeUI`,
        description: componentData.description,
    }
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const componentData = COMPONENTS[slug as keyof typeof COMPONENTS]

    if (!componentData) {
        notFound()
    }

    return <ComponentDetailClient slug={slug} />
}
