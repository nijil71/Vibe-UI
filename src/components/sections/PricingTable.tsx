"use client"
import React, { useState } from "react"
import { Check, X, ShieldCheck, Zap } from "lucide-react"

const plans = [
    {
        name: "Starter",
        price: "0",
        description: "Perfect for hobbyists and side projects.",
        features: ["Up to 3 projects", "500 monthly requests", "Community support", "Basic analytics"],
        notIncluded: ["Custom domains", "Team collaboration", "Advanced security"],
        highlight: false
    },
    {
        name: "Pro",
        price: "29",
        description: "The standard for growing teams and startups.",
        features: ["Unlimited projects", "10,000 monthly requests", "Priority support", "Advanced analytics", "Custom domains", "Team seats (up to 5)"],
        notIncluded: ["Whitelabeling", "Dedicated account manager"],
        highlight: true,
        tag: "Most Popular"
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Control, scale, and security for large companies.",
        features: ["Unlimited everything", "Dedicated infrastructure", "24/7 Phone support", "SOC2 compliance", "SSO/SAML", "Custom SLA"],
        notIncluded: [],
        highlight: false
    }
]

export function PricingTable() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

    return (
        <div className="w-full py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Simple Pricing.</h2>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <span className={`text-sm ${billing === "monthly" ? "text-white" : "text-neutral-500"}`}>Monthly</span>
                    <button
                        onClick={() => setBilling(b => b === "monthly" ? "yearly" : "monthly")}
                        className="w-12 h-6 rounded-full bg-neutral-800 border border-white/10 relative p-1 transition-colors hover:border-blue-500/50"
                    >
                        <div className={`w-4 h-4 rounded-full bg-blue-500 transition-all ${billing === "yearly" ? "translate-x-6" : "translate-x-0"}`} />
                    </button>
                    <span className={`text-sm ${billing === "yearly" ? "text-white" : "text-neutral-500"}`}>Yearly <span className="text-emerald-400 font-bold ml-1 text-xs">-20%</span></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <div key={i} className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${plan.highlight ? "bg-neutral-900 border-blue-500/30 shadow-2xl shadow-blue-500/10 scale-105 z-10" : "bg-neutral-950 border-white/5 hover:border-white/20"}`}>
                        {plan.tag && (
                            <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg shadow-blue-500/40">
                                {plan.tag}
                            </div>
                        )}

                        <div className="mb-8">
                            <span className="text-neutral-400 text-sm font-medium">{plan.name}</span>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-5xl font-bold text-white tracking-tighter">
                                    {plan.price !== "Custom" && "$"}
                                    {billing === "yearly" && plan.price !== "Custom" ? Math.floor(parseInt(plan.price) * 0.8) : plan.price}
                                </span>
                                {plan.price !== "Custom" && <span className="text-neutral-500 text-lg">/mo</span>}
                            </div>
                            <p className="text-neutral-500 text-sm mt-4 leading-relaxed">{plan.description}</p>
                        </div>

                        <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all mb-8 ${plan.highlight ? "bg-white text-black hover:bg-neutral-200" : "bg-neutral-900 text-white hover:bg-neutral-800 border border-white/5"}`}>
                            {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                        </button>

                        <div className="space-y-4 flex-1">
                            {plan.features.map(f => (
                                <div key={f} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-blue-400 shrink-0" />
                                    <span className="text-sm text-neutral-300">{f}</span>
                                </div>
                            ))}
                            {plan.notIncluded.map(f => (
                                <div key={f} className="flex items-start gap-3 opacity-40">
                                    <X className="w-5 h-5 text-neutral-500 shrink-0" />
                                    <span className="text-sm text-neutral-500">{f}</span>
                                </div>
                            ))}
                        </div>

                        {plan.highlight && (
                            <div className="mt-8 pt-8 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                                    <span className="text-xs text-neutral-400 font-medium">99.9% Slatisfaction SLA</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
