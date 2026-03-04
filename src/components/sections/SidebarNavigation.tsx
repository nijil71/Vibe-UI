"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Home, BarChart3, Users, Settings, Bell, Search, ChevronLeft,
    ChevronRight, Layers, FileText, HelpCircle, LogOut, Zap
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { label: "Dashboard", icon: Home, active: true },
    { label: "Analytics", icon: BarChart3, badge: "New" },
    { label: "Team", icon: Users },
    { label: "Projects", icon: Layers },
    { label: "Documents", icon: FileText },
    { label: "Notifications", icon: Bell, badge: "3" },
]

const bottomItems = [
    { label: "Help & Support", icon: HelpCircle },
    { label: "Settings", icon: Settings },
]

export function SidebarNavigation() {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="w-full min-h-screen bg-neutral-950 flex">
            {/* Sidebar */}
            <motion.aside
                animate={{ width: collapsed ? 80 : 280 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative h-screen bg-neutral-900 border-r border-white/5 flex flex-col overflow-hidden shrink-0"
            >
                {/* Logo Area */}
                <div className="p-6 flex items-center gap-3 border-b border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <AnimatePresence>
                        {!collapsed && (
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                className="text-white font-bold text-lg tracking-tight whitespace-nowrap overflow-hidden"
                            >
                                VibeUI
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                {/* Search */}
                <AnimatePresence>
                    {!collapsed && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-4 pt-4 overflow-hidden"
                        >
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                <input
                                    placeholder="Search..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-blue-500/40 transition-all"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Nav Items */}
                <nav className="flex-1 overflow-y-auto p-3 space-y-1 mt-2">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            className={cn(
                                "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-sm font-medium group relative",
                                item.active
                                    ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.03)]"
                                    : "text-neutral-500 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5 shrink-0", item.active ? "text-blue-400" : "")} />
                            <AnimatePresence>
                                {!collapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="whitespace-nowrap overflow-hidden"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                            {item.badge && !collapsed && (
                                <span className={cn(
                                    "ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold",
                                    item.badge === "New"
                                        ? "bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                                )}>
                                    {item.badge}
                                </span>
                            )}
                            {item.active && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-accent-blue rounded-r-full" />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="p-3 border-t border-white/5 space-y-1">
                    {bottomItems.map((item) => (
                        <button
                            key={item.label}
                            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-neutral-500 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                        >
                            <item.icon className="w-5 h-5 shrink-0" />
                            <AnimatePresence>
                                {!collapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="whitespace-nowrap"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    ))}

                    {/* User Profile */}
                    <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/5 mt-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                            JD
                        </div>
                        <AnimatePresence>
                            {!collapsed && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-white text-sm font-bold truncate">Jane Dev</p>
                                    <p className="text-neutral-500 text-[10px] font-medium truncate">jane@vibeui.com</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Collapse Toggle */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="absolute top-20 -right-3 w-6 h-6 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all z-20 shadow-lg"
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
                </button>
            </motion.aside>

            {/* Main Content Demo */}
            <div className="flex-1 p-8 lg:p-12">
                <div className="max-w-4xl">
                    <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-neutral-500 mb-8">Welcome back, Jane. Here&apos;s your overview.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { label: "Total Users", value: "12,847", change: "+12%" },
                            { label: "Revenue", value: "$48.2K", change: "+8.3%" },
                            { label: "Active Projects", value: "23", change: "+3" },
                        ].map((stat) => (
                            <div key={stat.label} className="p-6 rounded-2xl bg-neutral-900 border border-white/5">
                                <p className="text-neutral-500 text-sm mb-2">{stat.label}</p>
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <span className="text-emerald-400 text-xs font-bold">{stat.change}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
