"use client"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { Button } from "./ui/Button"
import { ArrowRight, Code, Grid, Terminal, Github } from "lucide-react"

export function Hero() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-32 pb-20">

            {/* Google-Standard Grid Background */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Floating Elements - More structured now */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-blue-500/10 blur-[80px]"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-violet-500/10 blur-[80px]"
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Badge */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8 hover:bg-white/10 transition-colors cursor-default"
                >
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                    v2.0 Now Available
                </motion.div> */}

                {/* Main Heading */}
   <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] max-w-4xl mx-auto"
  >
    Build{" "}
<span className="relative inline-block">
  <span className="relative z-10">Faster.</span>
  <span className="absolute inset-0 blur-2xl opacity-40 bg-violet-500 -z-10" />
</span>

    <br />
    Design Better.
  </motion.h1>

  {/* Subheading */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.25 }}
    className="mt-6 mb-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal"
  >
    Production-ready interface sections <br className="hidden sm:block" />
    you can ship today.
  </motion.p>

                {/* CTAs - Google Material 3 Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <Link href="/components" className="w-full sm:w-auto">
                        <Button size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-100 font-medium text-base shadow-lg shadow-white/10 w-full sm:w-auto">
                            Get Started <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>

                    <Link href="https://github.com/nijil71/Vibe-UI" target="_blank" className="w-full sm:w-auto">
                        <Button variant="secondary" size="lg" className="h-12 px-8 rounded-full bg-white/5 hover:bg-white/10 border-white/10 font-medium text-base w-full sm:w-auto">
                            <Github className="mr-2 w-4 h-4" /> Github
                        </Button>
                    </Link>
                </motion.div>

                {/* Floating Preview Card - Material Style Elevation */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring" }}
                    style={{ y, opacity }} // Parallax effect
                    className="mt-20 w-full max-w-4xl rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-blue-900/20 overflow-hidden"
                >
                    <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="ml-4 px-3 py-1 bg-black/40 rounded text-xs font-mono text-white/30">
                            app/page.tsx
                        </div>
                    </div>

                    <div className="p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-b from-[#0d0d0d] to-[#050505]">
                        <div className="flex flex-col gap-4">
                            <div className="h-8 w-32 bg-white/10 rounded animate-pulse" />
                            <div className="h-4 w-full bg-white/5 rounded animate-pulse delay-75" />
                            <div className="h-4 w-2/3 bg-white/5 rounded animate-pulse delay-100" />
                            <div className="flex gap-2 mt-4">
                                <div className="h-10 w-24 bg-blue-600/20 rounded-full animate-pulse delay-150" />
                                <div className="h-10 w-24 bg-white/5 rounded-full animate-pulse delay-200" />
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-xl bg-gradient-to-tr from-blue-500/10 to-violet-500/10 border border-white/5 flex items-center justify-center">
                            <Grid className="w-16 h-16 text-blue-500/40" />

                            {/* Floating UI elements in preview */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 right-0 transform translate-x-1/2 bg-[#1a1a1a] p-3 rounded-lg border border-white/10 shadow-xl"
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
