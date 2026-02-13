"use client"
import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "ghost"
    size?: "sm" | "md" | "lg"
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        // Base styles
        const baseStyles = "relative inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none overflow-hidden"

        // Variants
        const variants = {
            primary: "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] border border-transparent",
            secondary: "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20 shadow-lg shadow-black/20",
            ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
        }

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {isLoading && <span className="animate-spin mr-2">⟳</span>}
                    {children}
                </span>

                {/* Shine effect for primary button */}
                {variant === 'primary' && (
                    <motion.div
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 3 }}
                        animate={{ translateX: ["-100%", "200%"] }}
                    />
                )}
            </motion.button>
        )
    }
)
Button.displayName = "Button"

export { Button }
