"use client"
import React from "react"
import { Code2, MonitorPlay, Rocket, Users2 } from "lucide-react"

const steps = [
    {
        title: "Connect your workspace",
        desc: "Import your repository from GitHub, GitLab or Bitbucket in one click.",
        icon: GithubSection,
        color: "blue"
    },
    {
        title: "Configure your environment",
        desc: "We automatically detect your framework and set up optimal build settings.",
        icon: Code2,
        color: "violet"
    },
    {
        title: "Review and Collaborate",
        desc: "Share preview deployments with your team for instant feedback.",
        icon: Users2,
        color: "emerald"
    },
    {
        title: "Push to Production",
        desc: "Every commit is built and deployed to our global edge network instantly.",
        icon: Rocket,
        color: "amber"
    }
]

function GithubSection() {
    return <div className="text-xl">⌘</div>
}

export function WorkflowSteps() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How it works.</h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
                    We've simplified the entire development lifecycle so you can focus on building what matters.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                {/* Connection Line (Desktop) */}
                <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                {steps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                        <div className={`w-32 h-32 rounded-3xl border border-white/5 bg-neutral-900 flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:scale-110 group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]`}>
                            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl ${step.color === 'blue' ? 'bg-blue-500/10' :
                                    step.color === 'violet' ? 'bg-violet-500/10' :
                                        step.color === 'emerald' ? 'bg-emerald-500/10' : 'bg-amber-500/10'
                                }`} />
                            <step.icon className={`w-8 h-8 relative z-10 transition-colors duration-300 ${step.color === 'blue' ? 'text-blue-400' :
                                    step.color === 'violet' ? 'text-violet-400' :
                                        step.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'
                                }`} />

                            {/* Step Number */}
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[10px] font-bold text-neutral-500 group-hover:text-white transition-colors">
                                0{i + 1}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors uppercase tracking-tight font-display">{step.title}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-[240px]">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
