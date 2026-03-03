"use client"
import React from "react"
import { motion } from "framer-motion"
import { Tag, Calendar, Sparkles, Zap, Shield, Rocket, Bug } from "lucide-react"

const releases = [
    {
        version: "4.2.0",
        date: "Feb 28, 2026",
        title: "AI Component Generator",
        description: "Introducing our AI-powered component generation engine with real-time previews.",
        type: "feature" as const,
        changes: [
            "AI-driven component scaffolding from natural language prompts",
            "Real-time preview pane with hot-reload support",
            "Export to React, Vue, and Svelte frameworks",
            "Custom theme inheritance for generated components"
        ]
    },
    {
        version: "4.1.2",
        date: "Feb 14, 2026",
        title: "Performance & Stability",
        description: "Critical bug fixes and performance improvements across the platform.",
        type: "fix" as const,
        changes: [
            "Fixed hydration mismatch in SSR mode",
            "Reduced bundle size by 23% with tree-shaking improvements",
            "Fixed accessibility issues in modal components",
        ]
    },
    {
        version: "4.1.0",
        date: "Jan 30, 2026",
        title: "Enterprise Security Suite",
        description: "SOC2 compliance tools and advanced RBAC for enterprise teams.",
        type: "feature" as const,
        changes: [
            "Role-based access control with granular permissions",
            "Audit logging for all component modifications",
            "SSO integration with SAML 2.0 and OIDC",
            "Automated vulnerability scanning for dependencies"
        ]
    },
    {
        version: "4.0.0",
        date: "Jan 10, 2026",
        title: "VibeUI 4.0 — Major Release",
        description: "Complete redesign with a new rendering engine, design tokens, and plugin system.",
        type: "major" as const,
        changes: [
            "New GPU-accelerated rendering pipeline",
            "Design token system for consistent theming",
            "Plugin API for third-party extensions",
            "Dark mode first architecture",
            "Breaking: Dropped support for React 17"
        ]
    }
]

const typeConfig = {
    feature: { color: "blue", icon: Sparkles, label: "Feature" },
    fix: { color: "amber", icon: Bug, label: "Bug Fix" },
    major: { color: "violet", icon: Rocket, label: "Major Release" }
}

export function ChangelogTimeline() {
    return (
        <div className="w-full max-w-4xl mx-auto py-24 px-6">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
                    <Tag className="w-3.5 h-3.5" /> Changelog
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">What&apos;s New</h2>
                <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                    Stay up to date with the latest features, improvements, and fixes.
                </p>
            </div>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent" />

                <div className="space-y-16">
                    {releases.map((release, i) => {
                        const config = typeConfig[release.type]
                        const isLeft = i % 2 === 0

                        return (
                            <motion.div
                                key={release.version}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-start gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 w-[17px] h-[17px] rounded-full border-[3px] border-neutral-900 bg-blue-500 z-10 shadow-lg shadow-blue-500/30" />

                                {/* Content Card */}
                                <div className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? "" : ""}`}>
                                    <div className="group p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-all">
                                        {/* Meta */}
                                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${config.color === "blue" ? "bg-blue-500/10 border-blue-500/20 text-blue-400" :
                                                    config.color === "amber" ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
                                                        "bg-violet-500/10 border-violet-500/20 text-violet-400"
                                                }`}>
                                                <config.icon className="w-3 h-3" />
                                                {config.label}
                                            </span>
                                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
                                                <Calendar className="w-3 h-3" />
                                                {release.date}
                                            </span>
                                        </div>

                                        {/* Version Badge */}
                                        <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-400 mb-4">
                                            v{release.version}
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{release.title}</h3>
                                        <p className="text-neutral-500 text-sm leading-relaxed mb-6">{release.description}</p>

                                        {/* Change List */}
                                        <ul className="space-y-3">
                                            {release.changes.map((change, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm">
                                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${config.color === "blue" ? "bg-blue-500" :
                                                            config.color === "amber" ? "bg-amber-500" :
                                                                "bg-violet-500"
                                                        }`} />
                                                    <span className={`${change.startsWith("Breaking") ? "text-rose-400 font-medium" : "text-neutral-400"}`}>
                                                        {change}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
