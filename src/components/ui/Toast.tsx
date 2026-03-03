"use client"
import { useState, useEffect, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"

export function Toast({ message, isVisible, onClose }: { message: string; isVisible: boolean; onClose: () => void }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onClose, 2000)
            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-8 right-8 z-[200] flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900 border border-white/10 shadow-2xl shadow-black/50 backdrop-blur-2xl"
                >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium text-white">{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
