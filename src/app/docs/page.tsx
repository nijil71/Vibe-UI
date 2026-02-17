import React from 'react'
import { ArrowRight, Box, Zap, Palette, Shield } from 'lucide-react'
import Link from 'next/link'

export default function DocsPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Introduction</h1>
                <p className="text-xl text-neutral-400 font-light leading-relaxed">
                    VibeUI is a collection of production-ready, ultra-premium interface sections built for modern product teams.
                    Focus on your core logic while we handle the pixels.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    {
                        title: "Visual Excellence",
                        description: "Every component is meticulously designed with depth, motion, and texture.",
                        icon: Palette,
                        color: "text-purple-400"
                    },
                    {
                        title: "Developer First",
                        description: "Clean, consistent code structure that's easy to copy and customize.",
                        icon: Zap,
                        color: "text-amber-400"
                    },
                    {
                        title: "Production Ready",
                        description: "Responsive out of the box and optimized for performance.",
                        icon: Box,
                        color: "text-blue-400"
                    },
                    {
                        title: "Type Safe",
                        description: "First-class TypeScript support for a better developer experience.",
                        icon: Shield,
                        color: "text-emerald-400"
                    }
                ].map((feature, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                        <feature.icon className={`w-8 h-8 mb-6 ${feature.color}`} />
                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-white/10 relative overflow-hidden group">
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-white mb-4">Start Building</h2>
                    <p className="text-neutral-400 mb-8 max-w-sm">
                        Jump into our component library and start building your next big idea today.
                    </p>
                    <Link
                        href="/docs/installation"
                        className="inline-flex items-center px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all"
                    >
                        Installation Guide <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 blur-[80px] rounded-full group-hover:scale-110 transition-transform duration-700" />
            </div>
        </div>
    )
}
