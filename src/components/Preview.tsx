"use client"

import { motion } from "framer-motion"

import { components } from "./ComponentGrid"

function DynamicPreview() {
  const componentCount = components.length


  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 4 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1 }}
      className="relative perspective-[1600px] w-full"
    >

      {/* Main Panel */}
      <div className="relative rounded-3xl border border-white/10 bg-[#0f0f0f] shadow-[0_60px_140px_-40px_rgba(0,0,0,0.9)] overflow-hidden p-8 md:p-14">

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Text Section */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
              Interface sections, refined.
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Carefully structured layouts built with spacing discipline,
              strong hierarchy and production-ready patterns.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <div className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold transition-transform hover:scale-105 cursor-default">
                Explore
              </div>
              <div className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-all cursor-default">
                Learn More
              </div>
            </div>
          </div>

          {/* Right Visual – Layered Product Visualization */}
          <div className="relative h-48 md:h-64 rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">

            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

            {/* Floating Panel 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 md:top-10 md:left-10 w-32 md:w-40 h-20 md:h-24 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg"
            >
              <div className="p-3 md:p-4 space-y-2">
                <div className="h-2 w-16 bg-white/20 rounded" />
                <div className="h-2 w-12 bg-white/10 rounded" />
              </div>
            </motion.div>

            {/* Floating Panel 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-36 md:w-48 h-24 md:h-28 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-xl"
            >
              <div className="p-4 md:p-5 space-y-3">
                <div className="h-3 w-20 md:w-24 bg-white/20 rounded" />
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-3/4 bg-white/10 rounded" />
              </div>
            </motion.div>

            {/* Soft Light Reflection */}
            <motion.div
              animate={{ x: ["-100%", "120%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
            />

          </div>


        </div>

      </div>

      {/* Floating Metric Card 1 - Hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="hidden sm:block absolute -top-6 -right-6 md:-top-10 md:-right-10 p-4 md:p-6 rounded-2xl bg-[#121212] border border-white/10 shadow-xl backdrop-blur-md"
      >
        <p className="text-[10px] md:text-xs text-neutral-400 mb-1">Components</p>
        <p className="text-xl md:text-2xl font-semibold text-white">
          {componentCount}
        </p>
      </motion.div>




    </motion.div>
  )
}

export default DynamicPreview
