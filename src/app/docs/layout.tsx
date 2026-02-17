"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
    Search,
    Layout,
    Box,
    Layers,
    Palette,
    Terminal,
    BookOpen,
    Command,
    ExternalLink
} from 'lucide-react'

const docsNavigation = [
    {
        title: "Getting Started",
        items: [
            { title: "Introduction", href: "/docs", icon: BookOpen },
            { title: "Installation", href: "/docs/installation", icon: Terminal },
            // { title: "Theming", href: "/docs/theming", icon: Palette },
        ]
    },
    {
        title: "Components",
        items: [
            { title: "Dashboard Overview", href: "/components/dashboard-stats", icon: Layout },
            { title: "Bento Features", href: "/components/bento-features", icon: Box },
            { title: "Pricing Tables", href: "/components/pricing-table", icon: Layers },
            { title: "API Quickstart", href: "/components/api-quickstart", icon: Terminal },
        ]
    }
]

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <div className="flex min-h-screen bg-black">
            {/* Sidebar */}
            <aside className="fixed left-0 top-[64px] bottom-0 w-64 border-r border-white/5 bg-neutral-950/50 backdrop-blur-xl z-30 hidden lg:block overflow-y-auto">
                <div className="p-6 space-y-8">
                    {/* Search Trigger */}
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-command-menu'))}
                        className="flex items-center justify-between w-full px-4 py-2 text-sm text-neutral-500 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all group"
                    >
                        <div className="flex items-center gap-2">
                            <Search className="w-4 h-4" />
                            <span>Search...</span>
                        </div>
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-white/10 bg-black text-[10px] font-mono">
                            <Command className="w-2.5 h-2.5" />
                            <span>K</span>
                        </div>
                    </button>

                    <nav className="space-y-8">
                        {docsNavigation.map((section) => (
                            <div key={section.title} className="space-y-3">
                                <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 px-4">
                                    {section.title}
                                </h4>
                                <ul className="space-y-1">
                                    {section.items.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-all",
                                                    pathname === item.href
                                                        ? "bg-white/10 text-white font-medium shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                                        : "text-neutral-500 hover:text-white hover:bg-white/5"
                                                )}
                                            >
                                                <item.icon className="w-4 h-4" />
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>

                    <div className="pt-8 border-t border-white/5">
                        <Link
                            href="https://github.com/nijil71/Vibe-UI"
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 text-xs text-neutral-500 hover:text-white transition-colors"
                        >
                            Github <ExternalLink className="w-3 h-3" />
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:pl-64 pt-[64px]">
                <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16">
                    {children}
                </div>
            </main>
        </div>
    )
}
