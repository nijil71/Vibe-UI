"use client"

import { ComponentGrid } from "@/components/ComponentGrid"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

export default function ComponentsPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        All Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Sections</span>
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Browse our full library of production-ready React components and interface sections.
                        All components are built with Tailwind CSS and Framer Motion.
                    </p>
                </motion.div>

                {/* Search / Filter placeholder could go here */}
            </div>

            <ComponentGrid />

            {/* <section className="max-w-7xl mx-auto px-6 mt-32 text-center border-t border-white/5 pt-20">
                <h2 className="text-2xl font-bold text-white mb-4">Request a Section</h2>
                <p className="text-neutral-500 mb-8 max-w-lg mx-auto">
                    Can't find what you're looking for? Suggest a new UI pattern and we'll build it for the community.
                </p>
                <button className="px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all">
                    Submit Request
                </button>
            </section> */}

            <Footer />
        </main>
        
    )
}
