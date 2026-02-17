"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "./ui/Button"
import HeroPreviewWrapper from "./HeroPreviewWrapper"
import DynamicPreview from "./Preview"
import { MeshGradient } from "./ui/MeshGradient"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 py-20 md:py-32">
      <MeshGradient />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8 md:space-y-12">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] md:leading-[0.9]"
          >

            {/* Oversized Background Word (Desktop Only) */}
            <span className="hidden lg:block absolute -top-20 left-0 text-[200px] lg:text-[260px] font-black text-white/5 select-none pointer-events-none">
              UI
            </span>

            <span className="relative z-10 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Stop designing
            </span>

            <br />

            <span className="relative z-10 text-white">
              from scratch.
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-sm md:max-w-xl leading-relaxed"
          >
            Production-ready interface sections you can integrate instantly.
            Clean structure. No visual noise.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link href="#components" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold shadow-[0_20px_60px_-20px_rgba(255,255,255,0.4)] group"
              >
                Explore Components
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="https://github.com/nijil71/Vibe-UI" target="_blank" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] font-semibold"
              >
                <Github className="mr-2 w-4 h-4" />
                View Github
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT PREVIEW */}
        <div className="relative mt-10 md:mt-0">

          {/* Reduce glow size on mobile */}
          <div className="absolute -inset-10 md:-inset-20 
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] 
        blur-[80px] md:blur-[120px] pointer-events-none"
          />

          <div className="relative">
            <HeroPreviewWrapper>
              <DynamicPreview />
            </HeroPreviewWrapper>
          </div>

        </div>

      </div>
    </section>


  )
}
