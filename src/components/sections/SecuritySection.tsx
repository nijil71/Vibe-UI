"use client"
import React from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileCheck, CheckCircle2 } from "lucide-react"

const features = [
    {
        title: "SOC2 Type II Certified",
        desc: "Rigorous independent audits of our security, availability, and confidentiality.",
        icon: FileCheck,
        color: "blue"
    },
    {
        title: "AES-256 Encryption",
        desc: "Data is encrypted at rest and in transit using industry-standard protocols.",
        icon: Lock,
        color: "violet"
    },
    {
        title: "RBAC Controls",
        desc: "Granular access controls to ensure only authorized personnel have access.",
        icon: Eye,
        color: "emerald"
    }
]

export function SecuritySection() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                        Security you can <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">depend on.</span>
                    </h2>
                    <p className="text-neutral-400 text-lg mb-12 leading-relaxed max-w-lg">
                        We take security seriously. Our infrastructure is built from the ground up to protect your most sensitive data.
                    </p>

                    <div className="space-y-4">
                        {["GDPR & CCPA Compliant", "99.99% Uptime SLA", "24/7 Security Monitoring"].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                </div>
                                <span className="text-white/80 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />
                    <div className="grid grid-cols-1 gap-6 relative">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-3xl bg-neutral-900/50 border border-white/5 backdrop-blur-xl flex gap-6 items-center hover:bg-neutral-800/50 transition-all"
                            >
                                <div className={`p-4 rounded-2xl bg-neutral-950 border border-white/5 group-hover:border-${f.color}-500/30 transition-all`}>
                                    <f.icon className={`w-6 h-6 text-${f.color}-400`} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
                                    <p className="text-neutral-500 text-sm max-w-xs">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
