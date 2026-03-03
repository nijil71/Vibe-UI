"use client"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Noise } from "@/components/ui/Noise"
import { CommandMenu } from "@/components/ui/CommandMenu"
import { BackToTop } from "@/components/BackToTop"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isPreview = pathname?.startsWith("/preview")

    if (isPreview) {
        return (
            <main className="flex flex-col min-h-screen bg-neutral-950">
                {children}
            </main>
        )
    }

    return (
        <>
            {/* Skip to content link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-white focus:text-black focus:rounded-xl focus:font-bold focus:text-sm focus:shadow-2xl"
            >
                Skip to content
            </a>
            <Noise />
            <CommandMenu />
            <Navbar />
            <main id="main-content" className="flex flex-col min-h-screen">
                {children}
            </main>
            <BackToTop />
        </>
    )
}
