"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export function MagneticButton({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    const ref = useRef<HTMLButtonElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x, {
        stiffness: 150,
        damping: 15,
        mass: 0.1
    })

    const mouseYSpring = useSpring(y, {
        stiffness: 150,
        damping: 15,
        mass: 0.1
    })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e
        const { width, height, left, top } = ref.current!.getBoundingClientRect()

        // Calculate distance from center
        const xDist = clientX - (left + width / 2)
        const yDist = clientY - (top + height / 2)

        x.set(xDist * 0.3) // Magnetic strength
        y.set(yDist * 0.3)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseXSpring, y: mouseYSpring }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={cn(
                "relative rounded-full px-8 py-3 bg-white text-black font-medium text-lg uppercase tracking-wider overflow-hidden",
                className
            )}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2 h-full skew-x-12 -translate-x-full animate-shine pointer-events-none" />
        </motion.button>
    )
}
