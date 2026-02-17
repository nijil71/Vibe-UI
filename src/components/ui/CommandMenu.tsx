"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Command, X, ArrowRight, Layout, Box, Layers, Terminal as TerminalIcon, BookOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const items = [
    { title: "Introduction", href: "/docs", category: "Documentation", icon: BookOpen },
    { title: "Installation", href: "/docs/installation", category: "Documentation", icon: TerminalIcon },
    { title: "SaaS Dashboard Overview", href: "/components/dashboard-stats", category: "Components", icon: Layout },
    { title: "Feature Bento Grid", href: "/components/bento-features", category: "Components", icon: Box },
    { title: "Enterprise Pricing", href: "/components/pricing-table", category: "Components", icon: Layers },
    { title: "Developer Quickstart", href: "/components/api-quickstart", category: "Components", icon: TerminalIcon },
]

export function CommandMenu() {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0)
    const router = useRouter()

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    )

    const handleSelect = useCallback((href: string) => {
        setOpen(false)
        router.push(href)
        setQuery("")
    }, [router])

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
            if (e.key === "Escape") {
                setOpen(false)
            }
        }

        const handleOpen = () => setOpen(true)

        document.addEventListener("keydown", down)
        window.addEventListener("open-command-menu", handleOpen)
        return () => {
            document.removeEventListener("keydown", down)
            window.removeEventListener("open-command-menu", handleOpen)
        }
    }, [])

    useEffect(() => {
        setSelectedIndex(0)
    }, [query])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault()
            setSelectedIndex(i => (i + 1) % filteredItems.length)
        } else if (e.key === "ArrowUp") {
            e.preventDefault()
            setSelectedIndex(i => (i - 1 + filteredItems.length) % filteredItems.length)
        } else if (e.key === "Enter") {
            if (filteredItems[selectedIndex]) {
                handleSelect(filteredItems[selectedIndex].href)
            }
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
                    />

                    {/* Menu Container */}
                    <div className="fixed inset-0 z-[201] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            {/* Input Area */}
                            <div className="flex items-center px-6 py-4 border-b border-white/5 gap-4">
                                <Search className="w-5 h-5 text-neutral-500" />
                                <input
                                    autoFocus
                                    placeholder="Search components, docs, guides..."
                                    className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-neutral-600"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-neutral-500">
                                    ESC
                                </div>
                            </div>

                            {/* Results Area */}
                            <div className="max-h-[400px] overflow-y-auto p-2 custom-scrollbar">
                                {filteredItems.length === 0 ? (
                                    <div className="py-12 text-center">
                                        <p className="text-neutral-500">No results found for "{query}"</p>
                                    </div>
                                ) : (
                                    <div className="space-y-1">
                                        {filteredItems.map((item, index) => (
                                            <button
                                                key={item.href}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                onClick={() => handleSelect(item.href)}
                                                className={cn(
                                                    "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left group",
                                                    index === selectedIndex ? "bg-white/10 text-white" : "text-neutral-400 hover:bg-white/5"
                                                )}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={cn(
                                                        "p-2 rounded-lg bg-neutral-800 border border-white/5 group-hover:border-white/10 transition-colors",
                                                        index === selectedIndex && "bg-neutral-700 border-white/20"
                                                    )}>
                                                        <item.icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{item.title}</p>
                                                        <p className="text-xs text-neutral-500">{item.category}</p>
                                                    </div>
                                                </div>
                                                <ArrowRight className={cn(
                                                    "w-4 h-4 transition-transform",
                                                    index === selectedIndex ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                                                )} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-3 bg-neutral-950/50 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1.5 font-sans uppercase tracking-[0.1em] opacity-80">
                                        <div className="px-1.5 py-0.5 rounded border border-white/10 bg-black">↑↓</div> Navigate
                                    </span>
                                    <span className="flex items-center gap-1.5 font-sans uppercase tracking-[0.1em] opacity-80">
                                        <div className="px-1.5 py-0.5 rounded border border-white/10 bg-black">Enter</div> Select
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 text-white/20">
                                    <Command className="w-3 h-3" />
                                    <span>VIBE UI</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
