"use client"
import React, { useState } from "react"
import { Copy, Check, Terminal, Code2, Globe2, Puzzle } from "lucide-react"

const languages = [
    { name: "Node.js", icon: Code2, code: `const vibe = require('vibe-ui')\n\nconst client = vibe.createClient({\n  apiKey: 'VIBE_SEC_4321'\n})\n\nawait client.deploy({\n  project: 'my-vibe-app',\n  edge: true\n})` },
    { name: "Python", icon: Terminal, code: `import vibeui\n\nclient = vibeui.Client(\n    api_key='VIBE_SEC_4321'\n)\n\nclient.deploy(\n    project='my-vibe-app',\n    edge=True\n)` },
    { name: "CURL", icon: Globe2, code: `curl -X POST https://api.vibeui.com/v1/deploy \\\n  -H "Authorization: Bearer VIBE_SEC_4321" \\\n  -d '{\n    "project": "my-vibe-app",\n    "edge": true\n  }'` }
]

export function ApiQuickstart() {
    const [activeLang, setActiveLang] = useState(0)
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(languages[activeLang].code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
                        Developer SDK
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Deploy in seconds, not hours.</h2>
                    <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                        Our SDK is designed with developer experience at its core. Zero-config deployments, type-safety out of the box, and a unified API for all your infrastructure needs.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: "Install the SDK", desc: "Available for Node.js, Python, and Go.", icon: Puzzle },
                            { title: "Initialize Project", desc: "vibe init will set up your local workspace.", icon: Code2 },
                            { title: "Live Sync", desc: "Watch your changes reflect globally in real-time.", icon: Globe2 },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
                                    <item.icon className="w-5 h-5 text-neutral-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{item.title}</h4>
                                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    {/* Decorative Glow */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                            <div className="flex gap-4">
                                {languages.map((lang, i) => (
                                    <button
                                        key={lang.name}
                                        onClick={() => setActiveLang(i)}
                                        className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeLang === i ? "text-blue-400" : "text-neutral-500 hover:text-white"}`}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={handleCopy}
                                className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 transition-colors"
                            >
                                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                        <div className="p-8 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <code className="text-neutral-300">
                                    {languages[activeLang].code.split('\n').map((line, i) => (
                                        <div key={i} className="table-row">
                                            <span className="table-cell pr-6 text-neutral-600 select-none text-right w-8">{i + 1}</span>
                                            <span className="table-cell">{line}</span>
                                        </div>
                                    ))}
                                </code>
                            </pre>
                        </div>
                        <div className="px-6 py-4 bg-white/5 border-t border-white/5 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/20" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                                <div className="w-2 h-2 rounded-full bg-green-500/20" />
                            </div>
                            <span className="text-[10px] text-neutral-600 font-mono tracking-tighter">SDK VERSION: 4.2.0-STABLE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
