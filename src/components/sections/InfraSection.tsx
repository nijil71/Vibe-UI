"use client"
import React from "react"
import { motion } from "framer-motion"
import { Cpu, Database, Cloud, Zap, Server, Network } from "lucide-react"

export function InfraSection() {
    return (
        <div className="w-full max-w-7xl mx-auto py-16 md:py-24 px-6">
            <div className="text-center mb-16 md:mb-24">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">Infrastructure</h2>
                <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                {[
                    { label: "Edge Compute", value: "300+", sub: "Regional Nodes", icon: Cloud },
                    { label: "Database", value: "Vector", sub: "Built-in Support", icon: Database },
                    { label: "CPU Power", value: "Nitro", sub: "Hardware Acceleration", icon: Cpu },
                    { label: "Latency", value: "<50ms", sub: "Global Average", icon: Zap },
                    { label: "Reliability", value: "99.99%", sub: "Guaranteed Uptime", icon: Server },
                    { label: "Network", value: "Tier 1", sub: "Fibre Backbone", icon: Network },
                ].map((item, i) => (
                    <div key={i} className="bg-neutral-950 p-8 md:p-12 group hover:bg-neutral-900 transition-colors">
                        <div className="mb-6 md:mb-8 p-3 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-all">
                            <item.icon className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <p className="text-neutral-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-2">{item.label}</p>
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight group-hover:text-blue-500 transition-colors">{item.value}</h3>
                        <p className="text-neutral-600 text-xs md:text-sm font-medium">{item.sub}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 md:mt-20 p-8 md:p-12 rounded-3xl bg-blue-600/5 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden text-center md:text-left">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
                <div className="relative z-10">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Ready to scale?</h4>
                    <p className="text-blue-400/60 font-medium text-sm md:text-base">Join 2,000+ companies building on our network.</p>
                </div>
                <button className="relative z-10 w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                    Get Started Now
                </button>
            </div>
        </div>
    )
}
