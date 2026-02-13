"use client"
import React from "react"
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react"

const team = [
    { name: "Elena Rossi", role: "Founder & CEO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena" },
    { name: "Marcus Chen", role: "Head of Engineering", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
    { name: "Sarah Jenkins", role: "Lead Designer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { name: "David Kim", role: "DevRel Lead", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
    { name: "Priya Sharma", role: "Product Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
    { name: "Liam O'Brien", role: "Core Maintainer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam" },
]

export function TeamSection() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-display">Crafted by the best.</h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Our team is a global collective of engineers, designers, and thinkers dedicated to pushing the boundaries of what's possible on the web.
                    </p>
                </div>
                <button className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Work with us <ExternalLink className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, i) => (
                    <div key={i} className="group p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-500">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{member.name}</h3>
                                <span className="text-neutral-500 text-sm font-medium">{member.role}</span>
                            </div>
                        </div>

                        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                            Passionate about building scalable systems and contributing to the open-source community around the world.
                        </p>

                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin].map((Icon, j) => (
                                <button key={j} className="text-neutral-500 hover:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
