import React from 'react'
import { Terminal, Copy, Check } from 'lucide-react'
import { CodeBlock } from '@/components/CodeBlock'

export default function InstallationPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Installation</h1>
                <p className="text-xl text-neutral-400 font-light leading-relaxed">
                    Setting up VibeUI in your Next.js project takes less than 2 minutes.
                </p>
            </div>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Project Setup</h2>
                <p className="text-neutral-400">First, ensure you have a Next.js project with Tailwind CSS configured.</p>
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest">1. Create New Project</h3>
                    <CodeBlock
                        code={`npx create-next-app@latest my-vibe-app --typescript --tailwind --eslint`}
                        language="bash"
                    />
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest">2. Install Dependencies</h3>
                    <CodeBlock
                        code={`npm install framer-motion lucide-react clsx tailwind-merge`}
                        language="bash"
                    />
                </div>
            </section>

            <section className="space-y-6 pt-12 border-t border-white/5">
                <h2 className="text-2xl font-bold text-white">Theming</h2>
                <p className="text-neutral-400">Add the VibeUI color palette to your globals.css to enable the premium aesthetic.</p>
                <CodeBlock
                    code={`@theme {
  --color-background: #0a0a0a;
  --color-foreground: #ededed;
  --color-accent-blue: #3b82f6;
  --color-accent-violet: #8b5cf6;
}`}
                    language="css"
                />
            </section>
        </div>
    )
}
