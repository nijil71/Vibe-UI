"use client"
import { ComponentCard } from "./ComponentCard"
import {
    BarChart3,
    Grid,
    DollarSign,
    Terminal,
    Users,
    Rocket
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
    }
]

export function ComponentGrid() {
    return (
        <section id="components" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col mb-16 items-start gap-4">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    Production Sections
                </h2>
                <p className="text-white/40 max-w-xl text-lg font-light">
                    Real-world UI sections designed for enterprise-grade applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {components.map((component) => (
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
        </section>
    )
}
