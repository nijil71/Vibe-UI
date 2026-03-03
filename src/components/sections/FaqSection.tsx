"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "How does the consumption-based pricing work?",
        answer: "We bill exactly for what you use. Each project gets a generous free tier, and once exceeded, you're charged per 1,000 requests. There are no hidden fees or monthly minimums on the basic plan."
    },
    {
        question: "Can I migrate my existing infrastructure to Vibe UI?",
        answer: "Yes! We provide built-in migration tools for AWS, Vercel, and Netlify. Our dedicated support team can also assist with custom architecture shifts for enterprise clients."
    },
    {
        question: "What kind of support do you offer for developers?",
        answer: "Every user has access to our community Discord and extensive documentation. Pro and Enterprise users get dedicated Slack channels and prioritized ticket response times under 2 hours."
    },
    {
        question: "Is there a limit to how many projects I can create?",
        answer: "On the Starter plan, you can have up to 3 active projects. Pro and Enterprise tiers offer unlimited project creation with granular team permissions."
    }
]

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className="w-full max-w-4xl mx-auto py-24 px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Got Questions?</h2>
                <p className="text-neutral-400 text-lg">
                    Everything you need to know about our platform and how to get started.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={cn(
                            "rounded-3xl border transition-all duration-300 overflow-hidden",
                            openIndex === i ? "bg-neutral-900 border-white/10" : "bg-neutral-950 border-white/5 hover:border-white/10"
                        )}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                        >
                            <span className={cn(
                                "text-lg font-bold transition-colors",
                                openIndex === i ? "text-white" : "text-neutral-400 group-hover:text-white"
                            )}>
                                {faq.question}
                            </span>
                            <div className={cn(
                                "p-2 rounded-xl border transition-all",
                                openIndex === i ? "bg-blue-600 border-accent-blue rotate-0" : "bg-white/5 border-white/5 group-hover:border-white/10"
                            )}>
                                {openIndex === i ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-neutral-500" />}
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 md:px-8 pb-8 pt-0">
                                        <p className="text-neutral-500 leading-relaxed text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}
