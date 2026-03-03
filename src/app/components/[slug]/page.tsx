import { COMPONENTS } from "@/data/components"
import { notFound } from "next/navigation"
import { ComponentDetailClient } from "./client"
import { Metadata } from "next"
import Footer from "@/components/Footer"
import fs from "fs"
import path from "path"
import { codeToHtml } from "shiki"

const COMPONENT_FILE_MAP: Record<string, string> = {
    "dashboard-stats": "DashboardStats.tsx",
    "bento-features": "BentoFeatures.tsx",
    "pricing-table": "PricingTable.tsx",
    "api-quickstart": "ApiQuickstart.tsx",
    "team-grid": "TeamSection.tsx",
    "workflow-steps": "WorkflowSteps.tsx",
    "testimonials": "Testimonials.tsx",
    "security": "SecuritySection.tsx",
    "infra": "InfraSection.tsx",
    "global-edge": "GlobalDistribution.tsx",
    "integrations": "IntegrationsSection.tsx",
    "blog-post": "BlogLayout.tsx",
    "faq": "FaqSection.tsx",
    "stats-wall": "StatsWall.tsx",
    "newsletter": "NewsletterSection.tsx",
    "cta": "CtaSection.tsx",
    "feature-cards": "FeatureCards.tsx",
    "footer-advanced": "FooterAdvanced.tsx",
    "cookie-consent": "CookieConsent.tsx",
    "maintenance-page": "MaintenanceSection.tsx",
    "login-form": "LoginForm.tsx",
    "changelog-timeline": "ChangelogTimeline.tsx",
    "not-found-page": "NotFoundPage.tsx",
}

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
    const componentData = COMPONENTS[slug as keyof typeof COMPONENTS] as any

    if (!componentData) {
        notFound()
    }

    let codeString = "";
    let codeHtml = "";
    try {
        const fileName = COMPONENT_FILE_MAP[slug];
        if (!fileName) throw new Error("File not mapped");
        const filePath = path.join(process.cwd(), "src/components/sections", fileName);
        codeString = fs.readFileSync(filePath, "utf-8");
        codeHtml = await codeToHtml(codeString, {
            lang: "tsx",
            theme: "github-dark",
        });
    } catch (e) {
        codeString = "// Component source missing or not mapped server-side";
    }

    return <>
        <ComponentDetailClient slug={slug} codeString={codeString} codeHtml={codeHtml} />
        <Footer />
    </>
}
