"use client"
import React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Senior Engineer at Vercel",
        content: "The attention to detail in these sections is insane. We've integrated the dashboard stats into our internal tools and it saved us weeks of development time.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
        name: "Sarah Chen",
        role: "Product Designer at Figma",
        content: "Finally, a UI library that doesn't look like a generic template. The spacing, typography, and motion feel premium and high-end.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahC"
    },
    {
        name: "James Wilson",
        role: "CTO at Stripe",
        content: "Implementation was a breeze. The code is clean, modular, and easy to extend. It's now our go-to for rapid prototyping.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    }
]

export function Testimonials() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="flex flex-col items-center text-center mb-20">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6">
                    <Quote className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Trusted by experts.</h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    See what world-class engineers and designers are saying about VibeUI.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-neutral-900 border border-white/5 relative group hover:border-blue-500/30 transition-all"
                    >
                        <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-4 h-4 fill-blue-500 text-blue-500" />
                            ))}
                        </div>
                        <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                            "{t.content}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{t.name}</h4>
                                <p className="text-neutral-500 text-xs">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
