"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "./ui/Button"
import HeroPreviewWrapper from "./HeroPreviewWrapper"
import DynamicPreview from "./Preview"

export function Hero() {
  return (
<section className="relative min-h-screen flex items-center overflow-hidden px-6">


  <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-24 items-center py-32">

    {/* LEFT CONTENT */}
    <div className="space-y-12">

      <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative font-bold text-6xl md:text-8xl tracking-tight leading-[0.85]"
>

  {/* Background Oversized Word */}
  <span className="absolute -top-16 left-0 text-[180px] md:text-[240px] font-black text-white/5 select-none pointer-events-none">
    UI
  </span>

  {/* Main Text */}
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
        className="text-xl text-neutral-400 max-w-xl leading-relaxed"
      >
        Production-ready interface sections you can integrate instantly.
        Clean structure. No visual noise.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="flex gap-5 pt-4"
      >
        <Link href="#components">
          <Button
            size="lg"
            className="h-12 px-10 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold shadow-[0_20px_60px_-20px_rgba(255,255,255,0.4)] group"
          >
            Explore Components
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

        <Link href="https://github.com/nijil71/Vibe-UI" target="_blank">
          <Button
            variant="secondary"
            size="lg"
            className="h-12 px-10 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] font-semibold"
          >
            <Github className="mr-2 w-4 h-4" />
            View Github
          </Button>
        </Link>
      </motion.div>
    </div>

    {/* RIGHT PREVIEW */}
    <div className="relative">
      {/* Ambient Light Behind Preview */}
      <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] blur-[120px] pointer-events-none" />

<div className="relative group">
  <HeroPreviewWrapper>
    <DynamicPreview />
  </HeroPreviewWrapper>
</div>
    </div>

  </div>
</section>

  )
}
