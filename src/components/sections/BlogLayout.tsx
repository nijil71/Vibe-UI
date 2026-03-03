"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"

const posts = [
    {
        category: "Architecture",
        title: "How we scaled to 1M requests per second with Rust and WebAssembly.",
        author: "Elena Rossi",
        date: "Feb 12, 2026",
        time: "12 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
        category: "Updates",
        title: "Introducing v2.0: AI-powered component generation and real-time syncing.",
        author: "Marcus Chen",
        date: "Jan 28, 2026",
        time: "5 min read",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2078&auto=format&fit=crop"
    }
]

export function BlogLayout() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Engineering Blog</h2>
                    <p className="text-neutral-500 text-lg max-w-lg leading-relaxed">
                        Insights and technical articles from the engineering team at VibeUI.
                    </p>
                </div>
                <button className="flex items-center gap-2 text-white font-bold group">
                    Explore all articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {posts.map((post, i) => (
                    <motion.article
                        key={i}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 mb-8 relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{post.category}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
                            <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium">
                                <User className="w-3.5 h-3.5" /> {post.author}
                            </div>
                            <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium">
                                <Calendar className="w-3.5 h-3.5" /> {post.date}
                            </div>
                            <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium">
                                <Clock className="w-3.5 h-3.5" /> {post.time}
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors leading-tight">
                            {post.title}
                        </h3>

                        <p className="text-neutral-500 leading-relaxed mb-8 max-w-xl">
                            Discover the journey and technical challenges we overcame while building the world's fastest web infrastructure.
                        </p>

                        <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                            Read Article <ArrowRight className="w-3 h-3 text-accent-blue" />
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    )
}
