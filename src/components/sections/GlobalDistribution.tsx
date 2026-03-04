"use client"
import React from "react"
import { motion } from "framer-motion"
import { Activity, Globe, MapPin, Zap } from "lucide-react"

export function GlobalDistribution() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute inset-0 bg-accent-blue/10 blur-[150px] rounded-full pointer-events-none" />
                    {/* Abstract Map Visualization */}
                    <div className="relative aspect-square rounded-3xl border border-white/5 bg-neutral-900/50 p-12 overflow-hidden flex items-center justify-center">
                        <Globe className="w-64 h-64 text-white/5 animate-spin-slow" />

                        {/* Map Pins */}
                        {[
                            { t: "10%", l: "20%", d: 0.2 },
                            { t: "40%", l: "70%", d: 0.5 },
                            { t: "60%", l: "30%", d: 0.8 },
                            { t: "20%", l: "80%", d: 1.1 },
                            { t: "80%", l: "60%", d: 1.4 },
                        ].map((pos, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: pos.d, duration: 0.5 }}
                                className="absolute"
                                style={{ top: pos.t, left: pos.l }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-accent-blue rounded-full animate-ping opacity-20" />
                                    <div className="w-4 h-4 rounded-full bg-accent-blue border-4 border-neutral-900 z-10 relative" />
                                </div>
                            </motion.div>
                        ))}

                        <div className="absolute bottom-12 left-12 p-4 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs font-bold text-white uppercase tracking-widest">Network Live</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-bold text-accent-blue uppercase tracking-widest mb-8">
                        Edge Network
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Zero latency, <br />worldwide.</h2>
                    <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
                        Our Tier-1 network spans across 30+ countries and 5 continents, bringing your content closer to your users than ever before.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <Activity className="w-6 h-6 text-accent-blue mb-4" />
                            <h4 className="text-white font-bold mb-2">High Availability</h4>
                            <p className="text-neutral-500 text-sm">Automated failover and redundancy at every layer of the stack.</p>
                        </div>
                        <div>
                            <Zap className="w-6 h-6 text-amber-400 mb-4" />
                            <h4 className="text-white font-bold mb-2">Instant Purge</h4>
                            <p className="text-neutral-500 text-sm">Global cache invalidation in less than 300 milliseconds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
