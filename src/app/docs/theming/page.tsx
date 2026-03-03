import React from 'react'
import { Palette, Type, Moon, Sun } from 'lucide-react'
import { CodeBlock } from '@/components/CodeBlock'

export default function ThemingPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Theming &amp; Customization</h1>
                <p className="text-xl text-neutral-400 font-light leading-relaxed">
                    VibeUI uses CSS custom properties for all design tokens. Customize the entire look and feel by editing a single file.
                </p>
            </div>

            {/* Color Palette Visualization */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Palette className="w-6 h-6 text-blue-400" /> Color Palette
                </h2>
                <p className="text-neutral-400">
                    All colors are defined as CSS custom properties in your <code className="text-white bg-white/10 px-2 py-0.5 rounded text-sm">globals.css</code> file under the <code className="text-white bg-white/10 px-2 py-0.5 rounded text-sm">@theme</code> block.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Background", var: "--color-background", value: "#0a0a0a" },
                        { name: "Foreground", var: "--color-foreground", value: "#ededed" },
                        { name: "Accent Blue", var: "--color-accent-blue", value: "#3b82f6" },
                        { name: "Accent Violet", var: "--color-accent-violet", value: "#8b5cf6" },
                        { name: "Charcoal", var: "--color-brand-charcoal", value: "#0a0a0a" },
                        { name: "Black", var: "--color-brand-black", value: "#050505" },
                        { name: "Gray", var: "--color-brand-gray", value: "#171717" },
                        { name: "Blue Glow", var: "--color-accent-blue-glow", value: "rgba(59,130,246,0.5)" },
                    ].map((color) => (
                        <div key={color.var} className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50">
                            <div className="h-16" style={{ backgroundColor: color.value }} />
                            <div className="p-3">
                                <p className="text-sm font-bold text-white">{color.name}</p>
                                <p className="text-[10px] text-neutral-500 font-mono">{color.var}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Overriding Variables */}
            <section className="space-y-6 pt-12 border-t border-white/5">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Moon className="w-6 h-6 text-violet-400" /> Customizing Colors
                </h2>
                <p className="text-neutral-400">
                    To customize the color scheme, simply override the variables in your <code className="text-white bg-white/10 px-2 py-0.5 rounded text-sm">globals.css</code>:
                </p>
                <CodeBlock
                    code={`@theme {
  /* Change the primary accent to teal */
  --color-accent-blue: #14b8a6;
  --color-accent-violet: #06b6d4;
  --color-accent-blue-glow: rgba(20, 184, 166, 0.5);

  /* Use a warmer background */
  --color-background: #0c0a09;
  --color-foreground: #fafaf9;
}`}
                    language="css"
                />
            </section>

            {/* Typography */}
            <section className="space-y-6 pt-12 border-t border-white/5">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Type className="w-6 h-6 text-amber-400" /> Typography
                </h2>
                <p className="text-neutral-400">
                    VibeUI uses <strong className="text-white">Outfit</strong> as the display and body font, and <strong className="text-white">Geist Mono</strong> for code. To change the font:
                </p>
                <CodeBlock
                    code={`@theme {
  /* Replace with your preferred font */
  --font-display: "Inter", system-ui;
  --font-sans: "Inter", system-ui;
  --font-mono: "JetBrains Mono", monospace;
}`}
                    language="css"
                />
            </section>

            {/* Glass Utilities */}
            <section className="space-y-6 pt-12 border-t border-white/5">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Sun className="w-6 h-6 text-emerald-400" /> Glass &amp; Utilities
                </h2>
                <p className="text-neutral-400">
                    VibeUI ships with glass-morphism utilities. Adjust transparency by modifying these tokens:
                </p>
                <CodeBlock
                    code={`@theme {
  --color-glass: rgba(255, 255, 255, 0.03);
  --color-glass-strong: rgba(255, 255, 255, 0.08);
  --color-border-glass: rgba(255, 255, 255, 0.05);
}

/* Usage in Tailwind classes */
<div className="glass-card rounded-xl p-6">
  Glassmorphism card content
</div>`}
                    language="css"
                />
            </section>
        </div>
    )
}
