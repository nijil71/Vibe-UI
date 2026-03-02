"use client"
import React from "react"
import { motion } from "framer-motion"
import { Shield, FastForward, Globe, Layers, ArrowRight } from "lucide-react"

const features = [
    {
        title: "Bank-grade Security",
        description: "Your data is encrypted at rest and in transit. We comply with SOC2, GDPR, and HIPAA.",
        icon: Shield,
        color: "blue"
    },
    {
        title: "Lightning Fast",
        description: "Built on edge infrastructure, delivering sub-50ms response times globally.",
        icon: FastForward,
        color: "violet"
    },
    {
        title: "Global CDN",
        description: "Assets are cached across 300+ edge nodes to ensure maximum availability.",
        icon: Globe,
        color: "emerald"
    },
    {
        title: "Seamless Integration",
        description: "Connect with your existing tools in just a few clicks using our native plugins.",
        icon: Layers,
        color: "amber"
    }
]

export function FeatureCards() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why choose VibeUI?</h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    We provide the foundational building blocks for modern web applications, focusing on performance, developer experience, and design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative p-8 rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden hover:bg-neutral-800 transition-colors"
                    >
                        <div className={`absolute top-0 left-0 w-full h-1 bg-${feature.color}-500/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`} />

                        <div className={`w-12 h-12 rounded-2xl bg-${feature.color}-500/10 flex items-center justify-center mb-6 text-${feature.color}-400`}>
                            <feature.icon className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                            {feature.description}
                        </p>

                        <button className={`flex items-center gap-2 text-${feature.color}-400 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity`}>
                            Learn more <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
