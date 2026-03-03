"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Volume2, VolumeX } from "lucide-react"
import { useState } from "react"

export function HeroVideo() {
    const [muted, setMuted] = useState(true)

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted={muted}
                    playsInline
                    className="w-full h-full object-cover"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%230a0a0a' width='1920' height='1080'/%3E%3C/svg%3E"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-abstract-dark-waves-4455/1080p.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50" />
            </div>

            {/* Mute Toggle */}
            <button
                onClick={() => setMuted(!muted)}
                className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-white/10 border border-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all backdrop-blur-md"
                aria-label={muted ? "Unmute video" : "Mute video"}
            >
                {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                        <span className="block">CRAFT.</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white/60">
                            DEPLOY.
                        </span>
                        <span className="block">SCALE.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
                        The future of web development is here. Build extraordinary experiences with components that push the boundaries.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl shadow-white/10">
                            Start Building <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10" />
        </section>
    )
}
