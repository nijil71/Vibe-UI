"use client"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Github, ChevronRight } from "lucide-react"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { scrollY } = useScroll()
    const pathname = usePathname()

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
                    <NavLink href="/components" active={pathname?.startsWith("/components") ?? false}>Components</NavLink>
                    <NavLink href="/docs" active={pathname?.startsWith("/docs") ?? false}>Docs</NavLink>

                    <div className="w-[1px] h-6 bg-white/10 mx-4" />

                    <Link
                        href="https://github.com/nijil71/Vibe-UI"
                        target="_blank"
                        className="text-sm font-medium text-white/50 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
                        aria-label="View on GitHub"
                    >
                        GitHub
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
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
                                <MobileLink href="/components" onClick={() => setIsOpen(false)} active={pathname?.startsWith("/components") ?? false}>Components</MobileLink>
                                <MobileLink href="/docs" onClick={() => setIsOpen(false)} active={pathname?.startsWith("/docs") ?? false}>Docs</MobileLink>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2 px-4">Social</p>
                                <Link
                                    href="https://github.com/nijil71/Vibe-UI"
                                    target="_blank"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 text-white group hover:bg-white/10 transition-all"
                                    aria-label="View on GitHub"
                                >
                                    <div className="flex items-center gap-3">
                                        <Github size={20} className="text-neutral-400 group-hover:text-white" />
                                        <span className="font-medium text-lg text-white">GitHub</span>
                                    </div>
                                    <ChevronRight size={18} className="text-neutral-600 group-hover:text-white" />
                                </Link>
                            </div>


                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "text-sm font-medium transition-colors relative group px-4 py-2 rounded-lg",
                active
                    ? "text-white bg-white/5"
                    : "text-white/60 hover:text-white hover:bg-white/5"
            )}
        >
            {children}
            {active && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent-blue rounded-full shadow-[0_0_8px_2px_var(--color-accent-blue-glow)]" />
            )}
        </Link>
    )
}

function MobileLink({ href, children, onClick, active }: { href: string; children: React.ReactNode; onClick: () => void; active: boolean }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "flex items-center justify-between p-4 rounded-2xl group transition-all outline-none",
                active ? "bg-white/10 text-white" : "text-white hover:bg-white/5"
            )}
        >
            <span className="text-2xl font-semibold tracking-tight group-hover:translate-x-1 transition-transform">{children}</span>
            <ChevronRight size={20} className="text-neutral-700 group-hover:text-white transition-colors" />
        </Link>
    )
}
