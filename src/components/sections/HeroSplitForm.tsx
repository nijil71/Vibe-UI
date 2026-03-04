"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Mail, User } from "lucide-react"

export function HeroSplitForm() {
    const [submitted, setSubmitted] = useState(false)

    return (
        <section className="relative w-full min-h-screen flex items-center px-6 py-24 overflow-hidden bg-neutral-950">
            {/* Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-violet/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left — Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Early Access Open
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
                        Ship your product{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                            10x faster.
                        </span>
                    </h1>

                    <p className="text-lg text-neutral-400 max-w-lg leading-relaxed">
                        Join thousands of developers building with production-ready components. Get instant access to our entire library and shape the future of UI.
                    </p>

                    <div className="space-y-5 pt-4">
                        {[
                            "200+ production-ready components",
                            "Full TypeScript & Tailwind CSS support",
                            "New components added weekly",
                            "Priority Discord community access"
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-accent-blue" />
                                </div>
                                <span className="text-neutral-300 text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right — Form Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <div className="bg-neutral-900/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20">
                                    <Check className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
                                <p className="text-neutral-500">We&apos;ll send you an invite once your spot is ready.</p>
                            </motion.div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
                                    <p className="text-neutral-500 text-sm">Get early access to the next generation of UI tooling.</p>
                                </div>

                                <form
                                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                                    className="space-y-5"
                                >
                                    <div>
                                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Full Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                                <User className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Jane Developer"
                                                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-accent-blue/40 transition-all text-sm font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Work Email</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                                <Mail className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <input
                                                required
                                                type="email"
                                                placeholder="jane@company.com"
                                                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-accent-blue/40 transition-all text-sm font-medium"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-sm hover:from-blue-500 hover:to-violet-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                                    >
                                        Request Early Access <ArrowRight className="w-4 h-4" />
                                    </button>

                                    <p className="text-[11px] text-neutral-500 text-center font-medium">
                                        No spam. We respect your privacy.
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
