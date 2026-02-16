"use client"
import { ComponentCard } from "./ComponentCard"
import {
    BarChart3,
    Grid,
    DollarSign,
    Terminal,
    Users,
    Rocket,
    Shield,
    Zap,
    Layout,
    MessageSquare,
    Activity,
    Cpu
} from "lucide-react"

const components = [
    {
        id: 1,
        title: "SaaS Dashboard Overview",
        description: "Analytics block with trend graphs and real-time performance metrics.",
        href: "/components/dashboard-stats",
        tags: ["Dashboard", "Analytics"],
        icon: BarChart3
    },
    {
        id: 2,
        title: "Feature Bento Grid",
        description: "High-impact grid for showcasing product capabilities and tech specs.",
        href: "/components/bento-features",
        tags: ["Product", "Layout"],
        icon: Grid
    },
    {
        id: 3,
        title: "Enterprise Pricing",
        description: "Multi-tier plan comparison with billing toggle and feature lists.",
        href: "/components/pricing-table",
        tags: ["Conversion", "Billing"],
        icon: DollarSign
    },
    {
        id: 4,
        title: "Developer Quickstart",
        description: "Codecentric documentation section with multi-language support.",
        href: "/components/api-quickstart",
        tags: ["Docs", "SDK"],
        icon: Terminal
    },
    {
        id: 5,
        title: "Team Workspace",
        description: "Sophisticated grid for company profiles and team synergy.",
        href: "/components/team-grid",
        tags: ["Team", "Social"],
        icon: Users
    },
    {
        id: 6,
        title: "Execution Workflow",
        description: "Strategic walkthrough of your product's lifecycle and steps.",
        href: "/components/workflow-steps",
        tags: ["Strategy", "Onboarding"],
        icon: Rocket
    },
    {
        id: 7,
        title: "Testimonial Wall",
        description: "Social proof section with refined avatars and floating feedback cards.",
        href: "/components/testimonials",
        tags: ["Social", "Proof"],
        icon: MessageSquare
    },
    {
        id: 8,
        title: "Security & Compliance",
        description: "Trust-building section detailing data protection and global standards.",
        href: "/components/security",
        tags: ["Trust", "Privacy"],
        icon: Shield
    },
    {
        id: 9,
        title: "System Infrastructure",
        description: "High-level overview of tech stack and node-based scaling.",
        href: "/components/infra",
        tags: ["Tech", "Cloud"],
        icon: Cpu
    },
    {
        id: 10,
        title: "Global Distribution",
        description: "Interactive map visualization for edge networks and server locations.",
        href: "/components/global-edge",
        tags: ["Network", "Edge"],
        icon: Activity
    },
    {
        id: 11,
        title: "Product Integrations",
        description: "Sophisticated hub for connecting your workflow with existing tools.",
        href: "/components/integrations",
        tags: ["ecosystem", "Automate"],
        icon: Zap
    },
    {
        id: 12,
        title: "Modern Blog Layout",
        description: "Clean, high-readability content structure for engineering blogs.",
        href: "/components/blog-post",
        tags: ["Content", "Reading"],
        icon: Layout
    }
]

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ComponentGrid({ limit }: { limit?: number }) {
    const displayedComponents = limit ? components.slice(0, limit) : components

    return (
        <section id="components" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Production Sections
                    </h2>
                    <p className="text-white/40 max-w-xl text-lg font-light">
                        Real-world UI sections designed for enterprise-grade applications.
                    </p>
                </div>

                {limit && (
                    <Link
                        href="/components"
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                    >
                        View All Components
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedComponents.map((component) => (
                    <ComponentCard
                        key={component.id}
                        title={component.title}
                        description={component.description}
                        href={component.href}
                        tags={component.tags}
                        icon={component.icon}
                    />
                ))}
            </div>

            {limit && displayedComponents.length < components.length && (
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/components"
                        className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all shadow-xl shadow-white/5"
                    >
                        Load More Sections
                    </Link>
                </div>
            )}
        </section>
    )
}
