"use client"
import React from "react"
import { Shield, Zap, Globe, Cpu, Layers, Sparkles } from "lucide-react"

export function BentoFeatures() {
    return (
        <div className="w-full max-w-7xl mx-auto py-20 px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-display">Built for the future.</h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Our infrastructure is designed to scale with your ambitions, providing the performance and security your users expect.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto md:h-[600px]">
                {/* Large Feature */}
                <div className="md:col-span-3 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none -translate-y-12 translate-x-12" />
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 font-display">
                            <Zap className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Lightning Performance</h3>
                        <p className="text-neutral-400 max-w-xs leading-relaxed">Edge-computed results with sub-50ms latency globally across 30+ regions.</p>
                    </div>
                    <div className="mt-8 rounded-xl bg-black/40 border border-white/5 p-4 flex gap-3 items-center">
                        <div className="h-2 flex-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-3/4 animate-pulse" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Optimizing...</span>
                    </div>
                </div>

                {/* Medium Feature */}
                <div className="md:col-span-3 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between overflow-hidden relative group">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.05)_0%,transparent_70%)]" />
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 mb-6">
                            <Shield className="w-6 h-6 text-violet-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                        <p className="text-neutral-400 max-w-xs leading-relaxed">Bank-grade encryption and SOC2 compliance ready for your most sensitive data.</p>
                    </div>
                    <div className="mt-8 flex items-center gap-2">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center -ml-2 first:ml-0 overflow-hidden">
                                <div className="w-full h-full bg-neutral-700 animate-pulse" />
                            </div>
                        ))}
                        <span className="text-xs text-neutral-500 ml-2">+200 teams trust us</span>
                    </div>
                </div>

                {/* Small Features */}
                <div className="md:col-span-2 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col items-center text-center group hover:bg-neutral-800/50 transition-colors">
                    <Globe className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-blue-400 transition-colors" />
                    <h4 className="text-lg font-bold text-white mb-2">Global Edge</h4>
                    <p className="text-sm text-neutral-500">Deploy anywhere instantly.</p>
                </div>

                <div className="md:col-span-2 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col items-center text-center group hover:bg-neutral-800/50 transition-colors">
                    <Cpu className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-violet-400 transition-colors" />
                    <h4 className="text-lg font-bold text-white mb-2">AI Ready</h4>
                    <p className="text-sm text-neutral-500">Built-in vector support.</p>
                </div>

                <div className="md:col-span-2 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col items-center text-center group hover:bg-neutral-800/50 transition-colors">
                    <Sparkles className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-amber-400 transition-colors" />
                    <h4 className="text-lg font-bold text-white mb-2">Magical UX</h4>
                    <p className="text-sm text-neutral-500">Designed for developers.</p>
                </div>
            </div>
        </div>
    )
}
