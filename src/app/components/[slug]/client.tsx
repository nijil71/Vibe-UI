"use client"
import React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
    ArrowLeft,
    Monitor,
    Smartphone,
    Tablet,
    Code as CodeIcon,
    RotateCcw,
    BookOpen,
    Package,
    Copy
} from "lucide-react"
import { CodeBlock } from "@/components/CodeBlock"
import { cn } from "@/lib/utils"
import { COMPONENTS } from "@/data/components"
import Footer from "@/components/Footer"

export function ComponentDetailClient({ slug, codeString, codeHtml }: { slug: string, codeString: string, codeHtml: string }) {
    const data = COMPONENTS[slug as keyof typeof COMPONENTS]

    // Safety check, though page.tsx should handle 404
    if (!data) return null;

    const [activeTab, setActiveTab] = useState<"preview" | "code" | "usage">("preview")
    const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop")
    const [key, setKey] = useState(0)
    const [iframeLoaded, setIframeLoaded] = useState(false)

    // Derive component name from slug, e.g. "dashboard-stats" -> "DashboardStats"
    const componentName = slug.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("")

    return (
        <div className="min-h-screen pt-24 pb-24">
            {/* Header & Tabs - Contained for readability */}
            <div className="max-w-5xl mx-auto px-6">
                <Link href="/components" className="group inline-flex items-center text-sm text-white/50 hover:text-white mb-6 md:mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Components
                </Link>

                <div className="mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white/80 mb-4 inline-block">
                        {data.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl font-light leading-relaxed">
                        {data.description}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-1">
                    <button
                        onClick={() => setActiveTab("preview")}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors",
                            activeTab === "preview" ? "text-white" : "text-white/40 hover:text-white/70"
                        )}
                    >
                        <span className="flex items-center gap-2">
                            <Monitor className="w-4 h-4" /> Preview
                        </span>
                        {activeTab === "preview" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-accent-blue shadow-[0_0_10px_2px_var(--color-accent-blue-glow)]"
                            />
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab("code")}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors",
                            activeTab === "code" ? "text-white" : "text-white/40 hover:text-white/70"
                        )}
                    >
                        <span className="flex items-center gap-2">
                            <CodeIcon className="w-4 h-4" /> Code
                        </span>
                        {activeTab === "code" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-accent-blue shadow-[0_0_10px_2px_var(--color-accent-blue-glow)]"
                            />
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab("usage")}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors",
                            activeTab === "usage" ? "text-white" : "text-white/40 hover:text-white/70"
                        )}
                    >
                        <span className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" /> Usage
                        </span>
                        {activeTab === "usage" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-accent-blue shadow-[0_0_10px_2px_var(--color-accent-blue-glow)]"
                            />
                        )}
                    </button>

                    {activeTab === "preview" && (
                        <div className="ml-auto hidden sm:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
                            {[
                                { id: 'desktop', icon: Monitor },
                                { id: 'tablet', icon: Tablet },
                                { id: 'mobile', icon: Smartphone },
                            ].map((v) => (
                                <button
                                    key={v.id}
                                    onClick={() => setViewport(v.id as any)}
                                    aria-label={`${v.id} viewport`}
                                    className={cn(
                                        "p-2 rounded-lg transition-all",
                                        viewport === v.id ? "bg-white/10 text-white shadow-sm" : "text-white/30 hover:text-white/60"
                                    )}
                                >
                                    <v.icon className="w-4 h-4" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                >
                    {activeTab === "preview" ? (
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="flex justify-center">
                                <motion.div
                                    animate={{
                                        width: viewport === 'mobile' ? '375px' : viewport === 'tablet' ? '768px' : '100%'
                                    }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    className="relative rounded-[32px] border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl shadow-black/50"
                                >
                                    {/* Browser Header */}
                                    <div className="flex items-center px-6 py-4 bg-white/5 border-b border-white/5">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                        </div>
                                        <div className="flex-1 text-center">
                                            <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-black/40 text-[10px] sm:text-xs text-white/30 font-mono tracking-wider border border-white/5">
                                                vibeui.com/components/{slug}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setKey(k => k + 1)}
                                            className="p-1.5 rounded-md hover:bg-white/10 text-white/30 hover:text-white transition-colors"
                                            aria-label="Reload Preview"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Preview Content */}
                                    <div className="relative w-full h-[500px] md:h-[800px] overflow-hidden bg-neutral-950">
                                        {/* Skeleton Loader */}
                                        {!iframeLoaded && (
                                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 p-12">
                                                <div className="w-full max-w-md space-y-4">
                                                    <div className="h-8 bg-white/5 rounded-xl animate-pulse w-3/4" />
                                                    <div className="h-4 bg-white/5 rounded-lg animate-pulse w-full" />
                                                    <div className="h-4 bg-white/5 rounded-lg animate-pulse w-5/6" />
                                                </div>
                                                <div className="grid grid-cols-3 gap-4 w-full max-w-lg mt-4">
                                                    <div className="h-24 bg-white/5 rounded-2xl animate-pulse" />
                                                    <div className="h-24 bg-white/5 rounded-2xl animate-pulse delay-75" />
                                                    <div className="h-24 bg-white/5 rounded-2xl animate-pulse delay-150" />
                                                </div>
                                            </div>
                                        )}
                                        <iframe
                                            key={key}
                                            src={`/preview/${slug}`}
                                            className={`w-full h-full border-none transition-opacity duration-300 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                                            title={`${data.title} Preview`}
                                            onLoad={() => setIframeLoaded(true)}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ) : activeTab === "code" ? (
                        <div className="max-w-5xl mx-auto px-6">
                            <CodeBlock code={codeString} language="tsx" highlightedHtml={codeHtml} />
                        </div>
                    ) : (
                        <div className="max-w-5xl mx-auto px-6">
                            <div className="space-y-8">
                                {/* Import Path */}
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <h3 className="text-sm font-bold text-neutral-400 flex items-center gap-2 uppercase tracking-widest mb-4">
                                        <Package className="w-4 h-4" /> Import
                                    </h3>
                                    <CodeBlock
                                        code={`import { ${componentName} } from "@/components/sections/${componentName}"`}
                                        language="tsx"
                                    />
                                </div>

                                {/* Dependencies */}
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">Dependencies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["react", "framer-motion", "lucide-react", "tailwindcss"].map(dep => (
                                            <span key={dep} className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-xs font-mono text-white/60">{dep}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Basic Usage */}
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">Basic Usage</h3>
                                    <CodeBlock
                                        code={`export default function Page() {\n  return (\n    <main>\n      <${componentName} />\n    </main>\n  )\n}`}
                                        language="tsx"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
