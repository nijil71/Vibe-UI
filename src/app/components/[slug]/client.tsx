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
    RotateCcw
} from "lucide-react"
import { CodeBlock } from "@/components/CodeBlock"
import { cn } from "@/lib/utils"
import { COMPONENTS } from "@/data/components"
import Footer from "@/components/Footer"

export function ComponentDetailClient({ slug }: { slug: string }) {
    const data = COMPONENTS[slug as keyof typeof COMPONENTS]

    // Safety check, though page.tsx should handle 404
    if (!data) return null;

    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
    const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop")
    const [key, setKey] = useState(0) // For re-mounting component to reload animations

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
                                        <iframe
                                            key={key}
                                            src={`/preview/${slug}`}
                                            className="w-full h-full border-none"
                                            title={`${data.title} Preview`}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-5xl mx-auto px-6">
                            <CodeBlock code={data.code} language="tsx" />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
