"use client"
import React from "react"
import { motion } from "framer-motion"
import { Twitter, Github, Linkedin, Disc } from "lucide-react"

export function FooterAdvanced() {
    return (
        <footer className="w-full bg-neutral-950 border-t border-white/5 pt-24 pb-12 mt-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-6">VibeUI</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-8">
                        The premium UI library for shipping secure, fast, and beautiful cloud infrastructure interfaces.
                    </p>
                    <div className="flex gap-4">
                        {[Twitter, Github, Linkedin, Disc].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Product</h4>
                    <ul className="space-y-4">
                        {["Features", "Integrations", "Pricing", "Changelog", "Docs"].map((link) => (
                            <li key={link}>
                                <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Company</h4>
                    <ul className="space-y-4">
                        {["About Us", "Careers", "Blog", "Contact", "Partners"].map((link) => (
                            <li key={link}>
                                <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Legal</h4>
                    <ul className="space-y-4">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "Compliance"].map((link) => (
                            <li key={link}>
                                <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-neutral-600 text-sm">
                    © {new Date().getFullYear()} VibeUI. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-neutral-600 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    All systems operational
                </div>
            </div>
        </footer>
    )
}
