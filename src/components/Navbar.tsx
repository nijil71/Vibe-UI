"use client"
import Link from "next/link"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20)
    })

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-background/80 backdrop-blur-xl border-white/5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.1)]" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="group relative flex items-center gap-2">
                    {/* Google-esq clean Logo */}
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-300">
                        V
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground transition-all duration-300">
                        VibeUI
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-1">
                    <NavLink href="#components">Components</NavLink>
                    {/* <NavLink href="/templates">Templates</NavLink>
                    <NavLink href="/docs">Scale</NavLink> */}

                    <div className="w-[1px] h-6 bg-white/10 mx-4" />

                    <Link
                        href="https://github.com"
                        target="_blank"
                        className="text-sm font-medium text-white/50 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
                    >
                        GitHub
                    </Link>

                    <Link
                        href="/premium"
                        className="ml-2 text-sm font-medium bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-sm tracking-tight"
                    >
                        Get Pro
                    </Link>
                </div>

                {/* Mobile menu placeholder */}
                <div className="md:hidden">
                    <button className="text-foreground p-2 hover:bg-white/5 rounded-full transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
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
