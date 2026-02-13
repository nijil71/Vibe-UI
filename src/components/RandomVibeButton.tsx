"use client"
import { motion } from "framer-motion"
import { Shuffle } from "lucide-react"
import { useRouter } from "next/navigation"

const VIBES = [
    "/components/dashboard-stats",
    "/components/bento-features",
    "/components/pricing-table",
    "/components/api-quickstart",
    "/components/team-grid",
    "/components/workflow-steps"
]

export function RandomVibeButton() {
    const router = useRouter()

    const handleRandom = () => {
        const randomIndex = Math.floor(Math.random() * VIBES.length)
        const randomPath = VIBES[randomIndex]
        router.push(randomPath)
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleRandom}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30 group border border-white/20 backdrop-blur-md"
            aria-label="Random Vibe"
        >
            <Shuffle className="w-6 h-6 group-hover:animate-pulse" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md border border-white/10 shadow-xl">
                Try a Random Section
            </span>
        </motion.button>
    )
}
