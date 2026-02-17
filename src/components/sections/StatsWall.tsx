"use client"
import React from "react"
import { motion } from "framer-motion"
import { Users, Globe2, Zap, Rocket } from "lucide-react"

const stats = [
    { label: "Active Deployments", value: "2.4M", icon: Rocket, color: "blue" },
    { label: "Requests per Day", value: "850M", icon: Zap, color: "amber" },
    { label: "Global Edge Nodes", value: "320+", icon: Globe2, color: "emerald" },
    { label: "Total Developers", value: "140K", icon: Users, color: "violet" },
]

export function StatsWall() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-[32px] bg-neutral-900 border border-white/5 overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-20 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2 ${stat.color === 'blue' ? 'bg-blue-500' :
                            stat.color === 'amber' ? 'bg-amber-500' :
                                stat.color === 'emerald' ? 'bg-emerald-500' : 'bg-violet-500'
                            }`} />

                        <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center border transition-all duration-500 ${stat.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white' :
                            stat.color === 'amber' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white' :
                                stat.color === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white' :
                                    'bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white'
                            }`}>
                            <stat.icon className="w-8 h-8" />
                        </div>

                        <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                            {stat.value}
                        </h3>
                        <p className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
