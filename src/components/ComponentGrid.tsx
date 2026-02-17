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
    Cpu,
    HelpCircle,
    TrendingUp,
    Mail,
    Megaphone
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
    },
    {
        id: 13,
        title: "Interactive FAQ",
        description: "Smooth accordion-based section for common user inquiries.",
        href: "/components/faq",
        tags: ["Support", "Accordion"],
        icon: HelpCircle
    },
    {
        id: 14,
        title: "Impact Stats Wall",
        description: "Bold, metric-heavy section for social proof and high-level wins.",
        href: "/components/stats-wall",
        tags: ["Metrics", "Growth"],
        icon: TrendingUp
    },
    {
        id: 15,
        title: "Premium Newsletter",
        description: "Conversion-focused mailing list signup with success states.",
        href: "/components/newsletter",
        tags: ["Marketing", "Email"],
        icon: Mail
    },
    {
        id: 16,
        title: "Global CTA Block",
        description: "High-impact final pitch with dual actions and trust signals.",
        href: "/components/cta",
        tags: ["Conversion", "Sales"],
        icon: Megaphone
    }
]

import Link from "next/link"
import { ArrowRight, Search, X } from "lucide-react"
import { useState, useMemo } from "react"

export function ComponentGrid({ limit }: { limit?: number }) {
    const [searchQuery, setSearchQuery] = useState("")
    const displayedComponents = useMemo(() => {
        const filtered = components.filter(comp =>
            comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            comp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        return limit ? filtered.slice(0, limit) : filtered
    }, [searchQuery, limit])

    return (
        <section id="components" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Production Sections
                    </h2>
                    <p className="text-white/40 max-w-xl text-lg font-light">
                        Real-world UI sections designed for enterprise-grade applications.
                    </p>
                </div>

                {!limit ? (
                    <div className="relative w-full md:w-80 group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="w-4 h-4 text-neutral-500 group-focus-within:text-accent-blue transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search components..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-11 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all font-medium"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-4 flex items-center text-neutral-500 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                ) : (
                    <Link
                        href="/components"
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                    >
                        View All Components
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>

            {displayedComponents.length === 0 ? (
                <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
                    <p className="text-neutral-500 text-lg">No components found matching "{searchQuery}"</p>
                    <button
                        onClick={() => setSearchQuery("")}
                        className="mt-4 text-accent-blue hover:underline font-medium text-sm"
                    >
                        Clear search
                    </button>
                </div>
            ) : null}

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
