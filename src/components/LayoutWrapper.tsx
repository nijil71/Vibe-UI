"use client"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Noise } from "@/components/ui/Noise"
import { CommandMenu } from "@/components/ui/CommandMenu"

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
            <Noise />
            <CommandMenu />
            <Navbar />
            <main className="flex flex-col min-h-screen">
                {children}
            </main>
        </>
    )
}
