"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send, Sparkles, CheckCircle2 } from "lucide-react"

export function NewsletterSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        setTimeout(() => setStatus("success"), 1500)
    }

    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="relative rounded-[40px] bg-neutral-900 border border-white/5 p-8 md:p-16 overflow-hidden">
                {/* Visual Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-bold text-blue-400 uppercase tracking-widest mb-8">
                            <Sparkles className="w-3.5 h-3.5" /> Weekly Insights
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
                            Build faster. <br />Stay inspired.
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-lg leading-relaxed">
                            Join 140,000+ developers getting our weekly digest on UI trends, system architecture, and production-ready components.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 w-full">
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/20">
                                    <CheckCircle2 className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">You're on the list!</h4>
                                <p className="text-emerald-400/80 font-medium">Welcome to the inner circle of development.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="space-y-4 w-full">
                                <div className="flex flex-col md:flex-row gap-3">
                                    <input
                                        required
                                        type="email"
                                        placeholder="Enter your work email"
                                        className="w-full md:flex-1 px-6 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-base md:text-lg font-medium"
                                    />
                                    <button
                                        disabled={status === "loading"}
                                        className="w-full md:w-auto px-8 py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all disabled:opacity-50 whitespace-nowrap"
                                    >
                                        {status === "loading" ? "..." : (
                                            <>
                                                Subscribe <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                                <p className="text-[11px] text-neutral-500 font-medium px-4 text-center md:text-left">
                                    No spam. Only high-quality technical content. Unsubscribe at any time.
                                </p>
                            </form>
                        )}

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 px-4">
                            {[
                                "Latest releases",
                                "Component peeks",
                                "Performance tips"
                            ].map((text) => (
                                <div key={text} className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-wider">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
