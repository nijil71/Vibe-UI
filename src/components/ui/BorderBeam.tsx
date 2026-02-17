"use client"
import React from 'react'
import { motion } from 'framer-motion'

export const BorderBeam = () => {
    return (
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden">
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,var(--color-accent-blue)_360deg)] opacity-40"
            />
        </div>
    )
}
