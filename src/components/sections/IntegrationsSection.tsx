"use client"
import React from "react"
import { motion } from "framer-motion"
import { Zap, Github, Slack, Figma, Database, MessageSquare, Plus } from "lucide-react"

const integrations = [
    { name: "GitHub", icon: Github, color: "white" },
    { name: "Slack", icon: Slack, color: "blue" },
    { name: "Figma", icon: Figma, color: "violet" },
    { name: "PostgreSQL", icon: Database, color: "emerald" },
    { name: "Discord", icon: MessageSquare, color: "indigo" },
    { name: "Automation", icon: Zap, color: "amber" },
]

export function IntegrationsSection() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6 overflow-hidden">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Fits right in.</h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    Connect your existing workflow with hundreds of native integrations and a powerful developer API.
                </p>
            </div>

            <div className="relative flex flex-col items-center">
                {/* Connection Lines Decor */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <div className="w-[800px] h-[800px] rounded-full border border-white/20 scale-75" />
                    <div className="absolute w-[600px] h-[600px] rounded-full border border-white/20" />
                    <div className="absolute w-[400px] h-[400px] rounded-full border border-white/20" />
                </div>

                <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
                    {integrations.map((app, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center gap-4 text-center cursor-pointer"
                        >
                            <div className={`w-20 h-20 rounded-3xl bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:bg-neutral-800 transition-all group-hover:border-blue-500/30 group-hover:-translate-y-2`}>
                                <app.icon className={`w-8 h-8 text-neutral-400 group-hover:text-accent-blue transition-colors`} />
                            </div>
                            <div>
                                <span className="text-white font-bold block text-sm">{app.name}</span>
                                <span className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Connect</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center"
                >
                    <div className="p-4 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6">
                        <Plus className="w-6 h-6 text-accent-blue" />
                    </div>
                    <p className="text-neutral-500 font-medium">And 200+ more available in our marketplace.</p>
                </motion.div>
            </div>
        </div>
    )
}
