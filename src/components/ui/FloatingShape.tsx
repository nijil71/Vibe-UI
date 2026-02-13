"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"
import { cn } from "@/lib/utils"

export function FloatingShape({
    className,
    delay = 0,
    duration = 20,
    rotate = 0
}: {
    className?: string
    delay?: number
    duration?: number
    rotate?: number
}) {
    return (
        <motion.div
            className={cn("absolute rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none", className)}
            initial={{ transform: `translate(0, 0) rotate(${rotate}deg)` }}
            animate={{
                transform: [
                    `translate(0px, 0px) rotate(${rotate}deg) scale(1)`,
                    `translate(${Math.random() * 50}px, ${Math.random() * 50}px) rotate(${rotate + 120}deg) scale(1.1)`,
                    `translate(${-Math.random() * 50}px, ${Math.random() * 50}px) rotate(${rotate + 240}deg) scale(0.9)`,
                    `translate(0px, 0px) rotate(${rotate + 360}deg) scale(1)`,
                ]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
        />
    )
}
