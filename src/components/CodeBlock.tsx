"use client"
import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0d0d0d] group">
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 border-b border-white/5">
                <span className="text-xs text-white/40 font-mono uppercase">{language}</span>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                    aria-label="Copy code"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                            <motion.span
                                key="check"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                            >
                                <Check className="w-4 h-4 text-green-400" />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="copy"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                            >
                                <Copy className="w-4 h-4" />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            <div className="p-4 overflow-x-auto custom-scrollbar">
                <pre className="text-sm font-mono text-white/80 leading-relaxed font-ligatures-none">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    )
}
