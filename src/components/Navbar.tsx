"use client"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Github, ChevronRight } from "lucide-react"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20)
    })

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent",
                scrolled || isOpen ? "bg-background/80 backdrop-blur-xl border-white/5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.1)]" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-3 z-50">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center font-semibold text-sm">
                        V
                    </div>

                    <span className="text-xl font-semibold tracking-tight text-white">
                        VibeUI
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    <NavLink href="/components">Components</NavLink>
                    <NavLink href="/docs">Docs</NavLink>

                    <div className="w-[1px] h-6 bg-white/10 mx-4" />

                    <Link
                        href="https://github.com/nijil71/Vibe-UI"
                        target="_blank"
                        className="text-sm font-medium text-white/50 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
                    >
                        GitHub
                    </Link>
{/* 
                    <Link
                        href="/premium"
                        className="ml-2 text-sm font-medium bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-sm tracking-tight"
                    >
                        Get Pro
                    </Link> */}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    {/* <Link
                        href="/premium"
                        className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-sm tracking-tight"
                    >
                        Get Pro
                    </Link> */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-2xl z-40 md:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2 px-4">Navigation</p>
                                <MobileLink href="/components" onClick={() => setIsOpen(false)}>Components</MobileLink>
                                <MobileLink href="/templates" onClick={() => setIsOpen(false)}>Templates</MobileLink>
                                <MobileLink href="/docs" onClick={() => setIsOpen(false)}>Documentation</MobileLink>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2 px-4">Social</p>
                                <Link
                                    href="https://github.com/nijil71/Vibe-UI"
                                    target="_blank"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 text-white group hover:bg-white/10 transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <Github size={20} className="text-neutral-400 group-hover:text-white" />
                                        <span className="font-medium text-lg text-white">GitHub</span>
                                    </div>
                                    <ChevronRight size={18} className="text-neutral-600 group-hover:text-white" />
                                </Link>
                            </div>

                            {/* <div className="mt-auto pb-12">
                                <Link
                                    href="/premium"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-colors shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
                                >
                                    Upgrade to Pro
                                </Link>
                            </div> */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group px-4 py-2 rounded-lg hover:bg-white/5">
            {children}
        </Link>
    )
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex items-center justify-between p-4 rounded-2xl text-white group hover:bg-white/5 transition-all outline-none"
        >
            <span className="text-2xl font-semibold tracking-tight group-hover:translate-x-1 transition-transform">{children}</span>
            <ChevronRight size={20} className="text-neutral-700 group-hover:text-white transition-colors" />
        </Link>
    )
}

