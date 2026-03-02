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
    Megaphone,
    Layers,
    Monitor
} from "lucide-react"

export const components = [
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
    },
    {
        id: 17,
        title: "Feature Benefit Cards",
        description: "Elegant grid of feature cards with interactive hover highlights.",
        href: "/components/feature-cards",
        tags: ["Product", "Features"],
        icon: Layers
    },
    {
        id: 18,
        title: "Advanced Global Footer",
        description: "Comprehensive site foundation with deep links and social integration.",
        href: "/components/footer-advanced",
        tags: ["Layout", "Navigation"],
        icon: Monitor
    }
]

import Link from "next/link"
import { ArrowRight, Search, X, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"

export function ComponentGrid({ limit }: { limit?: number }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTag, setSelectedTag] = useState<string>("All")
    const [isExpanded, setIsExpanded] = useState(false)

    const allTags = useMemo(() => {
        const tags = new Set<string>(["All"])
        components.forEach(comp => comp.tags.forEach(tag => tags.add(tag)))
        return Array.from(tags)
    }, [])

    const visibleTags = useMemo(() => {
        if (isExpanded) return allTags
        return allTags.slice(0, 8)
    }, [allTags, isExpanded])

    const displayedComponents = useMemo(() => {
        const filtered = components.filter(comp => {
            const matchesSearch = comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                comp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

            const matchesTag = selectedTag === "All" || comp.tags.includes(selectedTag)

            return matchesSearch && matchesTag
        })
        return limit ? filtered.slice(0, limit) : filtered
    }, [searchQuery, selectedTag, limit])

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

            {!limit && (
                <div className="flex flex-wrap items-center gap-2 mb-12">
                    <div className="flex items-center gap-2 mr-2 text-white/30 text-xs font-bold uppercase tracking-widest">
                        <SlidersHorizontal className="w-3 h-3" />
                        Filter
                    </div>
                    {visibleTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-medium transition-all border",
                                selectedTag === tag
                                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                    : "bg-white/5 text-white/50 border-white/10 hover:border-white/20 hover:text-white"
                            )}
                        >
                            {tag}
                        </button>
                    ))}
                    {allTags.length > 8 && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-bold transition-all border border-blue-500/20 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                        >
                            {isExpanded ? (
                                <>Less <ChevronUp className="w-3 h-3" /></>
                            ) : (
                                <>+{allTags.length - 8} More <ChevronDown className="w-3 h-3" /></>
                            )}
                        </button>
                    )}
                </div>
            )}

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
