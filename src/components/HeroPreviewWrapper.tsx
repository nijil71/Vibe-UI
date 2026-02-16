import { useMotionValue, useMotionTemplate, motion } from "framer-motion"
import { useRef } from "react"

function HeroPreviewWrapper({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      {/* Large Subtle Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.08),
              transparent 50%
            )
          `,
        }}
      />

      {children}
    </div>
  )
}

export default HeroPreviewWrapper
