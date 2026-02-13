"use client"
import React from "react"
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Zap, BarChart3 } from "lucide-react"

const stats = [
    { label: "Total Revenue", value: "$128,430", change: "+12.5%", trend: "up", icon: DollarSign },
    { label: "Active Users", value: "43,210", change: "+18.2%", trend: "up", icon: Users },
    { label: "Conversion Rate", value: "3.42%", change: "-2.1%", trend: "down", icon: Zap },
    { label: "Avg. Session", value: "4m 32s", change: "+4.3%", trend: "up", icon: BarChart3 },
]

export function DashboardStats() {
    return (
        <div className="w-full bg-neutral-950 border border-white/5 rounded-3xl p-8 overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Project Overview</h3>
                    <p className="text-neutral-500 text-sm">Real-time performance metrics for the last 30 days.</p>
                </div>
                <div className="flex bg-white/5 rounded-xl p-1 border border-white/5">
                    {["1D", "1W", "1M", "1Y"].map((t) => (
                        <button key={t} className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${t === "1M" ? "bg-white text-black" : "text-neutral-400 hover:text-white"}`}>
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                <stat.icon className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.trend === "up" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                                {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                {stat.change}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-neutral-500 text-sm mb-1">{stat.label}</span>
                            <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                        </div>

                        {/* Subtle Chart Mockup */}
                        <div className="mt-6 h-12 w-full flex items-end gap-1 px-1">
                            {[40, 70, 45, 90, 65, 80, 50, 85, 95, 75, 60, 90].map((h, j) => (
                                <div key={j} className="flex-1 bg-blue-500/20 rounded-t-sm group-hover:bg-blue-500/40 transition-all" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
