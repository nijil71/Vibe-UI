"use client"
import React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, Monitor, Code as CodeIcon, RotateCcw } from "lucide-react"
import { CodeBlock } from "@/components/CodeBlock"
import { cn } from "@/lib/utils"
import { COMPONENTS } from "@/data/components"

export function ComponentDetailClient({ slug }: { slug: string }) {
    const data = COMPONENTS[slug as keyof typeof COMPONENTS]

    // Safety check, though page.tsx should handle 404
    if (!data) return null;

    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
    const [key, setKey] = useState(0) // For re-mounting component to reload animations

    return (
        <div className="min-h-screen pt-24 pb-24 px-6 max-w-7xl mx-auto">
            <Link href="/#components" className="group inline-flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Components
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white/80 mb-4 inline-block">
                    {data.title}
                </h1>
                <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
                    {data.description}
                </p>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-1">
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
                            className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"
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
                            className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"
                        />
                    )}
                </button>
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
                        <div className="relative rounded-xl border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl shadow-black/50">
                            {/* Browser Header */}
                            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                                <div className="flex-1 text-center">
                                    <div className="inline-flex items-center px-3 py-1 rounded bg-black/20 text-[10px] sm:text-xs text-white/30 font-mono tracking-wide">
                                        src/components/{slug}.tsx
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

                            {/* Scrollable Canvas Area */}
                            <div className="relative w-full h-[700px] overflow-y-auto bg-neutral-950 scrollbar-thin">
                                {/* Background Grid Pattern */}
                                <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
                                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
                                </div>

                                <div className="relative z-10 w-full min-h-full py-12" key={key}>
                                    {/* Render the component function */}
                                    <div className="max-w-7xl mx-auto">
                                        <data.component />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <CodeBlock code={data.code} language="tsx" />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
