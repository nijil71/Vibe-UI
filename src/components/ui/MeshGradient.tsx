"use client"
import React from 'react'
import { motion } from 'framer-motion'

export const MeshGradient = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-accent-blue/10 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-violet/10 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-[100px]"
            />
        </div>
    )
}
