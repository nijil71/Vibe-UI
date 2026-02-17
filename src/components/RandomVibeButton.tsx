"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, Sparkles } from "lucide-react"
import { useVibe } from "@/lib/VibeContext"
import { useState } from "react"

const VIBES = ['midnight', 'emerald', 'sunset', 'cobalt'] as const

export function RandomVibeButton() {
    const { vibe, setVibe } = useVibe()
    const [isHovered, setIsHovered] = useState(false)

    const cycleVibe = () => {
        const currentIndex = VIBES.indexOf(vibe)
        const nextIndex = (currentIndex + 1) % VIBES.length
        setVibe(VIBES[nextIndex])
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl shadow-2xl"
                    >
                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Current Vibe</p>
                        <p className="text-white font-medium capitalize flex items-center gap-2">
                            <Sparkles className="w-3 h-3 text-accent-blue" />
                            {vibe}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={cycleVibe}
                className="p-4 rounded-full bg-neutral-900 text-white shadow-2xl shadow-accent-blue/20 group border border-white/10 backdrop-blur-md relative overflow-hidden"
                aria-label="Change Vibe"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-violet/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Palette className="w-6 h-6 relative z-10 text-accent-blue" />
            </motion.button>
        </div>
    )
}
