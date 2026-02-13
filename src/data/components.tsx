import { DashboardStats } from "@/components/sections/DashboardStats"
import { BentoFeatures } from "@/components/sections/BentoFeatures"
import { PricingTable } from "@/components/sections/PricingTable"
import { ApiQuickstart } from "@/components/sections/ApiQuickstart"
import { TeamSection } from "@/components/sections/TeamSection"
import { WorkflowSteps } from "@/components/sections/WorkflowSteps"

export const COMPONENTS = {
  "dashboard-stats": {
    title: "SaaS Dashboard Overview",
    description: "A comprehensive analytics block featuring key performance metrics, real-time trends, and trend indicators. Perfect for admin panels and monitoring systems.",
    component: DashboardStats,
    code: `"use client"
import React from "react"
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Zap, BarChart3 } from "lucide-react"

const stats = [
  { label: "Total Revenue", value: "$128,430", change: "+12.5%", trend: "up", icon: DollarSign },
  { label: "Active Users", value: "43,210", change: "+18.2%", trend: "up", icon: Users },
  { label: "Conversion Rate", value: "3.42%", change: "-2.1%", trend: "down", icon: Zap },
  { label: "Avg. Session", value: "4m 32s", change: "+4.3%", trend: "up", icon: BarChart3 },
]

export function DashboardStats() {
  return (
    <div className="w-full bg-neutral-950 border border-white/5 rounded-3xl p-8 overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Project Overview</h3>
          <p className="text-neutral-500 text-sm">Real-time performance metrics for the last 30 days.</p>
        </div>
        <div className="flex bg-white/5 rounded-xl p-1 border border-white/5">
          {["1D", "1W", "1M", "1Y"].map((t) => (
            <button key={t} className={\`px-4 py-1.5 text-xs font-medium rounded-lg transition-all \${t === "1M" ? "bg-white text-black" : "text-neutral-400 hover:text-white"}\`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <stat.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div className={\`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full \${stat.trend === "up" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}\`}>
                {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-500 text-sm mb-1">{stat.label}</span>
              <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
            </div>
            
            <div className="mt-6 h-12 w-full flex items-end gap-1 px-1">
              {[40, 70, 45, 90, 65, 80, 50, 85, 95, 75, 60, 90].map((h, j) => (
                <div key={j} className="flex-1 bg-blue-500/20 rounded-t-sm group-hover:bg-blue-500/40 transition-all" style={{ height: \`\${h}%\` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}`
  },
  "bento-features": {
    title: "Feature Bento Grid",
    description: "Modern landing page section showcasing core features in a high-impact grid layout. Designed for visual clarity and engagement.",
    component: BentoFeatures,
    code: `"use client"
import React from "react"
import { Shield, Zap, Globe, Cpu, Layers, Sparkles } from "lucide-react"

export function BentoFeatures() {
  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-display">Built for the future.</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Our infrastructure is designed to scale with your ambitions, providing the performance and security your users expect.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto md:h-[600px]">
        <div className="md:col-span-3 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none -translate-y-12 translate-x-12" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 font-display">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Lightning Performance</h3>
            <p className="text-neutral-400 max-w-xs leading-relaxed">Edge-computed results with sub-50ms latency globally across 30+ regions.</p>
          </div>
          <div className="mt-8 rounded-xl bg-black/40 border border-white/5 p-4 flex gap-3 items-center">
            <div className="h-2 flex-1 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-blue-500 w-3/4 animate-pulse" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Optimizing...</span>
          </div>
        </div>

        <div className="md:col-span-3 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between overflow-hidden relative group">
           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.05)_0%,transparent_70%)]" />
           <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20 mb-6">
                <Shield className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-neutral-400 max-w-xs leading-relaxed">Bank-grade encryption and SOC2 compliance ready for your most sensitive data.</p>
           </div>
           <div className="mt-8 flex items-center gap-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900 flex items-center justify-center -ml-2 first:ml-0 overflow-hidden">
                  <div className="w-full h-full bg-neutral-700 animate-pulse" />
                </div>
              ))}
              <span className="text-xs text-neutral-500 ml-2">+200 teams trust us</span>
           </div>
        </div>

        <div className="md:col-span-2 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col items-center text-center group hover:bg-neutral-800/50 transition-colors">
            <Globe className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-blue-400 transition-colors" />
            <h4 className="text-lg font-bold text-white mb-2">Global Edge</h4>
            <p className="text-sm text-neutral-500">Deploy anywhere instantly.</p>
        </div>

        <div className="md:col-span-2 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col items-center text-center group hover:bg-neutral-800/50 transition-colors">
            <Cpu className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-violet-400 transition-colors" />
            <h4 className="text-lg font-bold text-white mb-2">AI Ready</h4>
            <p className="text-sm text-neutral-500">Built-in vector support.</p>
        </div>

        <div className="md:col-span-2 rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col items-center text-center group hover:bg-neutral-800/50 transition-colors">
            <Sparkles className="w-8 h-8 text-neutral-400 mb-6 group-hover:text-amber-400 transition-colors" />
            <h4 className="text-lg font-bold text-white mb-2">Magical UX</h4>
            <p className="text-sm text-neutral-500">Designed for developers.</p>
        </div>
      </div>
    </div>
  )
}`
  },
  "pricing-table": {
    title: "Enterprise Pricing",
    description: "A conversion-optimized comparison table with monthly/yearly billing toggles, feature highlights, and plan-specific tags.",
    component: PricingTable,
    code: `"use client"
import React, { useState } from "react"
import { Check, X, ShieldCheck, Zap } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for hobbyists and side projects.",
    features: ["Up to 3 projects", "500 monthly requests", "Community support", "Basic analytics"],
    notIncluded: ["Custom domains", "Team collaboration", "Advanced security"],
    highlight: false
  },
  {
    name: "Pro",
    price: "29",
    description: "The standard for growing teams and startups.",
    features: ["Unlimited projects", "10,000 monthly requests", "Priority support", "Advanced analytics", "Custom domains", "Team seats (up to 5)"],
    notIncluded: ["Whitelabeling", "Dedicated account manager"],
    highlight: true,
    tag: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Control, scale, and security for large companies.",
    features: ["Unlimited everything", "Dedicated infrastructure", "24/7 Phone support", "SOC2 compliance", "SSO/SAML", "Custom SLA"],
    notIncluded: [],
    highlight: false
  }
]

export function PricingTable() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="w-full py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Simple Pricing.</h2>
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={\`text-sm \${billing === "monthly" ? "text-white" : "text-neutral-500"}\`}>Monthly</span>
          <button 
            onClick={() => setBilling(b => b === "monthly" ? "yearly" : "monthly")}
            className="w-12 h-6 rounded-full bg-neutral-800 border border-white/10 relative p-1 transition-colors hover:border-blue-500/50"
          >
             <div className={\`w-4 h-4 rounded-full bg-blue-500 transition-all \${billing === "yearly" ? "translate-x-6" : "translate-x-0"}\`} />
          </button>
          <span className={\`text-sm \${billing === "yearly" ? "text-white" : "text-neutral-500"}\`}>Yearly <span className="text-emerald-400 font-bold ml-1 text-xs">-20%</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className={\`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 \${plan.highlight ? "bg-neutral-900 border-blue-500/30 shadow-2xl shadow-blue-500/10 scale-105 z-10" : "bg-neutral-950 border-white/5 hover:border-white/20"}\`}>
            {plan.tag && (
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg shadow-blue-500/40">
                {plan.tag}
              </div>
            )}
            
            <div className="mb-8">
              <span className="text-neutral-400 text-sm font-medium">{plan.name}</span>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-5xl font-bold text-white tracking-tighter">
                   {plan.price !== "Custom" && "$"}
                   {billing === "yearly" && plan.price !== "Custom" ? Math.floor(parseInt(plan.price) * 0.8) : plan.price}
                </span>
                {plan.price !== "Custom" && <span className="text-neutral-500 text-lg">/mo</span>}
              </div>
              <p className="text-neutral-500 text-sm mt-4 leading-relaxed">{plan.description}</p>
            </div>

            <button className={\`w-full py-3 rounded-xl font-bold text-sm transition-all mb-8 \${plan.highlight ? "bg-white text-black hover:bg-neutral-200" : "bg-neutral-900 text-white hover:bg-neutral-800 border border-white/5"}\`}>
               {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button>

            <div className="space-y-4 flex-1">
               {plan.features.map(f => (
                 <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-sm text-neutral-300">{f}</span>
                 </div>
               ))}
               {plan.notIncluded.map(f => (
                 <div key={f} className="flex items-start gap-3 opacity-40">
                    <X className="w-5 h-5 text-neutral-500 shrink-0" />
                    <span className="text-sm text-neutral-500">{f}</span>
                 </div>
               ))}
            </div>

            {plan.highlight && (
               <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="w-5 h-5 text-blue-400" />
                     <span className="text-xs text-neutral-400 font-medium">99.9% Slatisfaction SLA</span>
                  </div>
               </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}`
  },
  "api-quickstart": {
    title: "Developer API Quickstart",
    description: "A developer-focused section with a multi-language code switcher, line numbering, and step-by-step installation instructions.",
    component: ApiQuickstart,
    code: `"use client"
import React, { useState } from "react"
import { Copy, Check, Terminal, Code2, Globe2, Puzzle } from "lucide-react"

const languages = [
  { name: "Node.js", icon: Code2, code: \`const vibe = require('vibe-ui')\\n\\nconst client = vibe.createClient({\\n  apiKey: 'VIBE_SEC_4321'\\n})\\n\\nawait client.deploy({\\n  project: 'my-vibe-app',\\n  edge: true\\n})\` },
  { name: "Python", icon: Terminal, code: \`import vibeui\\n\\nclient = vibeui.Client(\\n    api_key='VIBE_SEC_4321'\\n)\\n\\nclient.deploy(\\n    project='my-vibe-app',\\n    edge=True\\n)\` },
  { name: "CURL", icon: Globe2, code: \`curl -X POST https://api.vibeui.com/v1/deploy \\\\\\n  -H "Authorization: Bearer VIBE_SEC_4321" \\\\\\n  -d '{\\n    "project": "my-vibe-app",\\n    "edge": true\\n  }'\` }
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
           <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
           <div className="relative bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                 <div className="flex gap-4">
                    {languages.map((lang, i) => (
                      <button 
                        key={lang.name}
                        onClick={() => setActiveLang(i)}
                        className={\`text-xs font-bold uppercase tracking-widest transition-colors \${activeLang === i ? "text-blue-400" : "text-neutral-500 hover:text-white"}\`}
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
                       {languages[activeLang].code.split('\\n').map((line, i) => (
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
}`
  },
  "team-grid": {
    title: "Modern Team Workspace",
    description: "Sophisticated team grid featuring profile cards, role descriptions, and integrated social handles for companies and communities.",
    component: TeamSection,
    code: `"use client"
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
}`
  },
  "workflow-steps": {
    title: "Product Execution Workflow",
    description: "A chronological walkthrough of your product's process, using vertical alignment and visual markers for clarity.",
    component: WorkflowSteps,
    code: `"use client"
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
        <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center group">
            <div className={\`w-32 h-32 rounded-3xl border border-white/5 bg-neutral-900 flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:scale-110 group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]\`}>
                <div className={\`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl \${
                  step.color === 'blue' ? 'bg-blue-500/10' : 
                  step.color === 'violet' ? 'bg-violet-500/10' : 
                  step.color === 'emerald' ? 'bg-emerald-500/10' : 'bg-amber-500/10'
                }\`} />
                <step.icon className={\`w-8 h-8 relative z-10 transition-colors duration-300 \${
                  step.color === 'blue' ? 'text-blue-400' : 
                  step.color === 'violet' ? 'text-violet-400' : 
                  step.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'
                }\`} />
                
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
}`
  }
}
