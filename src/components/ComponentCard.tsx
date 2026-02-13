"use client"
import Link from "next/link"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { MouseEvent as ReactMouseEvent } from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ComponentCardProps {
    title: string
    description: string
    href: string
    icon?: LucideIcon
    tags?: string[]
}

export function ComponentCard({ title, description, href, icon: Icon, tags }: ComponentCardProps) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <Link href={href} className="group relative block h-full w-full">
            <div
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 px-8 py-8 transition-colors hover:border-white/20"
                onMouseMove={handleMouseMove}
            >
                {/* Spotlight Overlay */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.1),
                transparent 40%
              )
            `,
                    }}
                />

                {/* Content Container */}
                <div className="relative flex h-full flex-col">
                    {/* Icon / Preview Area */}
                    <div className="mb-8 flex h-40 w-full items-center justify-center rounded-2xl border border-white/5 bg-black/20 group-hover:bg-black/40 transition-colors">
                        {/* Background Grid Pattern in Preview */}
                        <div className="absolute inset-0 opacity-[0.1]"
                            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                        />

                        {/* Glowing Icon Container */}
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-transparent shadow-2xl shadow-blue-500/20 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/40">
                            {Icon ? <Icon className="h-8 w-8 text-white/90" /> : <div className="h-8 w-8 rounded-full bg-white/20" />}

                            {/* Inner Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed max-w-[90%] font-light">
                            {description}
                        </p>
                    </div>

                    {/* Tags */}
                    {tags && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span key={tag} className="inline-flex items-center rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-neutral-300 backdrop-blur-sm transition-colors group-hover:border-white/10 group-hover:bg-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}
