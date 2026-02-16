"use client"
import React from "react"
import { motion } from "framer-motion"

export default function RightPreviewBox() {
  return (
    <div className="relative h-64 rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

      {/* Floating Panel 1 */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-40 h-24 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg"
      >
        <div className="p-4 space-y-2">
          <div className="h-2 w-16 bg-white/20 rounded" />
          <div className="h-2 w-12 bg-white/10 rounded" />
        </div>
      </motion.div>

      {/* Floating Panel 2 */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 w-48 h-28 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-xl"
      >
        <div className="p-5 space-y-3">
          <div className="h-3 w-24 bg-white/20 rounded" />
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
  )
}
