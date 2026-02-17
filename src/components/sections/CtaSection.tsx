"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Play } from "lucide-react"

export function CtaSection() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6 overflow-hidden">
            <div className="relative p-1 px-1 rounded-[48px] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent">
                <div className="relative rounded-[46px] bg-[#0c0c0c] p-8 md:p-20 overflow-hidden text-center flex flex-col items-center">
                    {/* Background Visuals */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-10 mx-auto shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                            <Zap className="w-8 h-8 text-black fill-black" />
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                            Ready to ship your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500">best work yet?</span>
                        </h2>

                        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                            Stop wasting time on boilerplate. Get started with our enterprise-grade sections today and focus on what makes your product unique.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-white/5">
                                Start Building <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95">
                                <Play className="w-4 h-4 fill-white" /> Watch Demo
                            </button>
                        </div>

                        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-[11px] font-bold text-neutral-600 uppercase tracking-[0.2em]">
                            <span className="flex items-center gap-2 italic">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                14-Day Free Trial
                            </span>
                            <span className="flex items-center gap-2 italic">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                No Credit Card
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
