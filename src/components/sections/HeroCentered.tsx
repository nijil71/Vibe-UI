"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function HeroCentered() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-neutral-950">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-bold text-accent-blue uppercase tracking-widest mb-8"
                >
                    <Sparkles className="w-3.5 h-3.5" />
                    Now in Public Beta
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8"
                >
                    Build interfaces{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
                        that inspire.
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                >
                    A next-generation component library designed for developers who refuse to compromise on aesthetics. Ship pixel-perfect UIs in minutes.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-white/10">
                        Get Started <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95">
                        <Play className="w-4 h-4 fill-white" /> Watch Demo
                    </button>
                </motion.div>

                {/* Trust */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[11px] text-neutral-600 uppercase tracking-[0.2em] font-bold"
                >
                    <span>Trusted by 2,000+ teams</span>
                    <div className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span>Open Source</span>
                    <div className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span>MIT Licensed</span>
                </motion.div>
            </div>
        </section>
    )
}
