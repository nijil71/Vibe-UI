import { DashboardStats } from "@/components/sections/DashboardStats"
import { BentoFeatures } from "@/components/sections/BentoFeatures"
import { PricingTable } from "@/components/sections/PricingTable"
import { ApiQuickstart } from "@/components/sections/ApiQuickstart"
import { TeamSection } from "@/components/sections/TeamSection"
import { WorkflowSteps } from "@/components/sections/WorkflowSteps"
import { Testimonials } from "@/components/sections/Testimonials"
import { SecuritySection } from "@/components/sections/SecuritySection"
import { InfraSection } from "@/components/sections/InfraSection"
import { GlobalDistribution } from "@/components/sections/GlobalDistribution"
import { IntegrationsSection } from "@/components/sections/IntegrationsSection"
import { BlogLayout } from "@/components/sections/BlogLayout"
import { FaqSection } from "@/components/sections/FaqSection"
import { StatsWall } from "@/components/sections/StatsWall"
import { NewsletterSection } from "@/components/sections/NewsletterSection"
import { CtaSection } from "@/components/sections/CtaSection"

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
  },
  "testimonials": {
    title: "Testimonial Wall",
    description: "Social proof section with refined avatars, star ratings, and floating feedback cards. Perfect for building trust and credibility.",
    component: Testimonials,
    code: `"use client"
import React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Senior Engineer at Vercel",
    content: "The attention to detail in these sections is insane. We've integrated the dashboard stats into our internal tools and it saved us weeks of development time.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    name: "Sarah Chen",
    role: "Product Designer at Figma",
    content: "Finally, a UI library that doesn't look like a generic template. The spacing, typography, and motion feel premium and high-end.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahC"
  },
  {
    name: "James Wilson",
    role: "CTO at Stripe",
    content: "Implementation was a breeze. The code is clean, modular, and easy to extend. It's now our go-to for rapid prototyping.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  }
]

export function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-6">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6">
          <Quote className="w-6 h-6 text-blue-400" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Trusted by experts.</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          See what world-class engineers and designers are saying about VibeUI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-neutral-900 border border-white/5 relative group hover:border-blue-500/30 transition-all"
          >
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-blue-500 text-blue-500" />
              ))}
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
              "\${t.content}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-neutral-500 text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}`
  },
  "security": {
    title: "Security & Compliance",
    description: "Trust-building section detailing data protection, global compliance standards, and infrastructure security protocols.",
    component: SecuritySection,
    code: `"use client"
import React from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileCheck, CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "SOC2 Type II Certified",
    desc: "Rigorous independent audits of our security, availability, and confidentiality.",
    icon: FileCheck,
    color: "blue"
  },
  {
    title: "AES-256 Encryption",
    desc: "Data is encrypted at rest and in transit using industry-standard protocols.",
    icon: Lock,
    color: "violet"
  },
  {
    title: "RBAC Controls",
    desc: "Granular access controls to ensure only authorized personnel have access.",
    icon: Eye,
    color: "emerald"
  }
]

export function SecuritySection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Security you can <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">depend on.</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed max-w-lg">
            We take security seriously. Our infrastructure is built from the ground up to protect your most sensitive data.
          </p>

          <div className="space-y-4">
            {["GDPR & CCPA Compliant", "99.99% Uptime SLA", "24/7 Security Monitoring"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-white/80 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 gap-6 relative">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-3xl bg-neutral-900/50 border border-white/5 backdrop-blur-xl flex gap-6 items-center hover:bg-neutral-800/50 transition-all"
              >
                <div className={\`p-4 rounded-2xl bg-neutral-950 border border-white/5 group-hover:border-\${f.color}-500/30 transition-all\`}>
                  <f.icon className={\`w-6 h-6 text-\${f.color}-400\`} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
                  <p className="text-neutral-500 text-sm max-w-xs">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}`
  },
  "infra": {
    title: "System Infrastructure",
    description: "Multi-point technical breakdown of your cloud infrastructure, showing distribution, latency, and hardware specs.",
    component: InfraSection,
    code: `"use client"
import React from "react"
import { motion } from "framer-motion"
import { Cpu, Database, Cloud, Zap, Server, Network } from "lucide-react"

export function InfraSection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-6">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">Infrastructure</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        {[
          { label: "Edge Compute", value: "300+", sub: "Regional Nodes", icon: Cloud },
          { label: "Database", value: "Vector", sub: "Built-in Support", icon: Database },
          { label: "CPU Power", value: "Nitro", sub: "Hardware Acceleration", icon: Cpu },
          { label: "Latency", value: "<50ms", sub: "Global Average", icon: Zap },
          { label: "Reliability", value: "99.99%", sub: "Guaranteed Uptime", icon: Server },
          { label: "Network", value: "Tier 1", sub: "Fibre Backbone", icon: Network },
        ].map((item, i) => (
          <div key={i} className="bg-neutral-950 p-12 group hover:bg-neutral-900 transition-colors">
            <div className="mb-8 p-3 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-all">
              <item.icon className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors" />
            </div>
            <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest mb-2">{item.label}</p>
            <h3 className="text-4xl font-black text-white mb-2 tracking-tight group-hover:text-blue-500 transition-colors">{item.value}</h3>
            <p className="text-neutral-600 text-sm font-medium">{item.sub}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-12 rounded-3xl bg-blue-600/5 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <div className="relative z-10">
          <h4 className="text-2xl font-bold text-white mb-2">Ready to scale?</h4>
          <p className="text-blue-400/60 font-medium">Join 2,000+ companies building on our network.</p>
        </div>
        <button className="relative z-10 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
          Get Started Now
        </button>
      </div>
    </div>
  )
}`
  },
  "global-edge": {
    title: "Global Distribution",
    description: "Interactive globe and map visualization showcasing regional presence, network live-sync, and edge computing nodes.",
    component: GlobalDistribution,
    code: `"use client"
import React from "react"
import { motion } from "framer-motion"
import { Activity, Globe, MapPin, Zap } from "lucide-react"

export function GlobalDistribution() {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="relative aspect-square rounded-3xl border border-white/5 bg-neutral-900/50 p-12 overflow-hidden flex items-center justify-center">
             <Globe className="w-64 h-64 text-white/5 animate-spin-slow" />
             {[
               { t: "10%", l: "20%", d: 0.2 },
               { t: "40%", l: "70%", d: 0.5 },
               { t: "60%", l: "30%", d: 0.8 },
               { t: "20%", l: "80%", d: 1.1 },
               { t: "80%", l: "60%", d: 1.4 },
             ].map((pos, i) => (
               <motion.div
                 key={i}
                 initial={{ scale: 0, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ delay: pos.d, duration: 0.5 }}
                 className="absolute"
                 style={{ top: pos.t, left: pos.l }}
               >
                 <div className="relative">
                   <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                   <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-neutral-900 z-10 relative" />
                 </div>
               </motion.div>
             ))}
             <div className="absolute bottom-12 left-12 p-4 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-xs font-bold text-white uppercase tracking-widest">Network Live</span>
                </div>
             </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest mb-8">
             Edge Network
           </div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Zero latency, <br />worldwide.</h2>
           <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
             Our Tier-1 network spans across 30+ countries and 5 continents, bringing your content closer to your users than ever before.
           </p>
           <div className="grid grid-cols-2 gap-8">
              <div>
                 <Activity className="w-6 h-6 text-blue-400 mb-4" />
                 <h4 className="text-white font-bold mb-2">High Availability</h4>
                 <p className="text-neutral-500 text-sm">Automated failover and redundancy at every layer of the stack.</p>
              </div>
              <div>
                 <Zap className="w-6 h-6 text-amber-400 mb-4" />
                 <h4 className="text-white font-bold mb-2">Instant Purge</h4>
                 <p className="text-neutral-500 text-sm">Global cache invalidation in less than 300 milliseconds.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}`
  },
  "integrations": {
    title: "Product Integrations Hub",
    description: "Cloud connection hub for mapping your stack's ecosystem, featuring interactive app nodes and ecosystem sync visualization.",
    component: IntegrationsSection,
    code: `"use client"
import React from "react"
import { motion } from "framer-motion"
import { Zap, Github, Slack, Figma, Database, MessageSquare, Plus } from "lucide-react"

const integrations = [
  { name: "GitHub", icon: Github, color: "white" },
  { name: "Slack", icon: Slack, color: "blue" },
  { name: "Figma", icon: Figma, color: "violet" },
  { name: "PostgreSQL", icon: Database, color: "emerald" },
  { name: "Discord", icon: MessageSquare, color: "indigo" },
  { name: "Automation", icon: Zap, color: "amber" },
]

export function IntegrationsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-6 overflow-hidden">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Fits right in.</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          Connect your existing workflow with hundreds of native integrations and a powerful developer API.
        </p>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           <div className="w-[800px] h-[800px] rounded-full border border-white/20 scale-75" />
           <div className="absolute w-[600px] h-[600px] rounded-full border border-white/20" />
           <div className="absolute w-[400px] h-[400px] rounded-full border border-white/20" />
        </div>
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
          {integrations.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-4 text-center cursor-pointer"
            >
              <div className={\`w-20 h-20 rounded-3xl bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:bg-neutral-800 transition-all group-hover:border-blue-500/30 group-hover:-translate-y-2\`}>
                 <app.icon className={\`w-8 h-8 text-neutral-400 group-hover:text-blue-500 transition-colors\`} />
              </div>
              <div>
                <span className="text-white font-bold block text-sm">{app.name}</span>
                <span className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Connect</span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="p-4 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6">
             <Plus className="w-6 h-6 text-blue-400" />
          </div>
          <p className="text-neutral-500 font-medium">And 200+ more available in our marketplace.</p>
        </motion.div>
      </div>
    </div>
  )
}`
  },
  "blog-post": {
    title: "Engineering Blog Post",
    description: "Highly readable blog content structure with typography-first design, code highlighting, and metadata displays.",
    component: BlogLayout,
    code: `"use client"
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
               <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{post.category}</span>
               </div>
            </div>
            <div className="flex gap-6 mb-6">
               <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium"><User className="w-3.5 h-3.5" /> {post.author}</div>
               <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium"><Calendar className="w-3.5 h-3.5" /> {post.date}</div>
               <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium"><Clock className="w-3.5 h-3.5" /> {post.time}</div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors leading-tight">{post.title}</h3>
            <p className="text-neutral-500 leading-relaxed mb-8 max-w-xl">Discover the journey and technical challenges we overcame while building the world's fastest web infrastructure.</p>
            <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
               Read Article <ArrowRight className="w-3 h-3 text-blue-500" />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}`
  },
  "faq": {
    title: "Interactive FAQ",
    description: "Smooth accordion-based section for common user inquiries. Features beautiful animations and a clean, modern layout.",
    component: FaqSection,
    code: `"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "How does the consumption-based pricing work?",
        answer: "We bill exactly for what you use. Each project gets a generous free tier, and once exceeded, you're charged per 1,000 requests. There are no hidden fees or monthly minimums on the basic plan."
    },
    {
        question: "Can I migrate my existing infrastructure to Vibe UI?",
        answer: "Yes! We provide built-in migration tools for AWS, Vercel, and Netlify. Our dedicated support team can also assist with custom architecture shifts for enterprise clients."
    },
    {
        question: "What kind of support do you offer for developers?",
        answer: "Every user has access to our community Discord and extensive documentation. Pro and Enterprise users get dedicated Slack channels and prioritized ticket response times under 2 hours."
    },
    {
        question: "Is there a limit to how many projects I can create?",
        answer: "On the Starter plan, you can have up to 3 active projects. Pro and Enterprise tiers offer unlimited project creation with granular team permissions."
    }
]

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className="w-full max-w-4xl mx-auto py-24 px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Got Questions?</h2>
                <p className="text-neutral-400 text-lg">
                    Everything you need to know about our platform and how to get started.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div 
                        key={i} 
                        className={cn(
                            "rounded-3xl border transition-all duration-300 overflow-hidden",
                            openIndex === i ? "bg-neutral-900 border-white/10" : "bg-neutral-950 border-white/5 hover:border-white/10"
                        )}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                        >
                            <span className={cn(
                                "text-lg font-bold transition-colors",
                                openIndex === i ? "text-white" : "text-neutral-400 group-hover:text-white"
                            )}>
                                {faq.question}
                            </span>
                            <div className={cn(
                                "p-2 rounded-xl border transition-all",
                                openIndex === i ? "bg-blue-600 border-blue-500 rotate-0" : "bg-white/5 border-white/5 group-hover:border-white/10"
                            )}>
                                {openIndex === i ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-neutral-500" />}
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 md:px-8 pb-8 pt-0">
                                        <p className="text-neutral-500 leading-relaxed text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}`
  },
  "stats-wall": {
    title: "Impact Stats Wall",
    description: "High-impact, metric-heavy section for social proof and celebrating high-level business wins with bold typography.",
    component: StatsWall,
    code: `"use client"
import React from "react"
import { motion } from "framer-motion"
import { Users, Globe2, Zap, Rocket } from "lucide-react"

const stats = [
    { label: "Active Deployments", value: "2.4M", icon: Rocket, color: "blue" },
    { label: "Requests per Day", value: "850M", icon: Zap, color: "amber" },
    { label: "Global Edge Nodes", value: "320+", icon: Globe2, color: "emerald" },
    { label: "Total Developers", value: "140K", icon: Users, color: "violet" },
]

export function StatsWall() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group relative flex flex-col items-center text-center p-10 rounded-[32px] bg-neutral-900 border border-white/5 overflow-hidden"
                    >
                        <div className={\`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-20 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2 \${
                            stat.color === 'blue' ? 'bg-blue-500' :
                            stat.color === 'amber' ? 'bg-amber-500' :
                            stat.color === 'emerald' ? 'bg-emerald-500' : 'bg-violet-500'
                        }\`} />

                        <div className={\`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center border transition-all duration-500 \${
                            stat.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white' :
                            stat.color === 'amber' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white' :
                            stat.color === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white' :
                            'bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white'
                        }\`}>
                            <stat.icon className="w-8 h-8" />
                        </div>

                        <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                            {stat.value}
                        </h3>
                        <p className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}`
  },
  "newsletter": {
    title: "Premium Newsletter",
    description: "Conversion-focused mailing list signup with success states and premium hover effects. Built for audience growth.",
    component: NewsletterSection,
    code: `"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send, Sparkles, CheckCircle2 } from "lucide-react"

export function NewsletterSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        setTimeout(() => setStatus("success"), 1500)
    }

    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="relative rounded-[40px] bg-neutral-900 border border-white/5 p-8 md:p-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest mb-8">
                            <Sparkles className="w-3.5 h-3.5" /> Weekly Insights
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
                            Build faster. <br />Stay inspired.
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-lg leading-relaxed">
                            Join 140,000+ developers getting our weekly digest on UI trends, system architecture, and production-ready components.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {status === "success" ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/20">
                                    <CheckCircle2 className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">You're on the list!</h4>
                                <p className="text-emerald-400/80 font-medium">Welcome to the inner circle of development.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="space-y-4">
                                <div className="relative group">
                                    <input
                                        required
                                        type="email"
                                        placeholder="Enter your work email"
                                        className="w-full px-6 py-5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-lg font-medium"
                                    />
                                    <button
                                        disabled={status === "loading"}
                                        className="absolute right-2.5 top-2.5 bottom-2.5 px-6 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:bg-neutral-200 transition-all disabled:opacity-50"
                                    >
                                        {status === "loading" ? "..." : (
                                            <>
                                                Subscribe <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}`
  },
  "cta": {
    title: "Global CTA Block",
    description: "High-impact final pitch for your landing page with dual action buttons, trust signals, and elegant gradients.",
    component: CtaSection,
    code: `"use client"
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Play } from "lucide-react"

export function CtaSection() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-6 overflow-hidden">
            <div className="relative p-1 px-1 rounded-[48px] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent">
                <div className="relative rounded-[46px] bg-[#0c0c0c] p-8 md:p-20 overflow-hidden text-center flex flex-col items-center">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-10 mx-auto">
                            <Zap className="w-8 h-8 text-black fill-black" />
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                            Ready to ship your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500">best work yet?</span>
                        </h2>

                        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                            Stop wasting time on boilerplate. Get started with our enterprise-grade sections today and focus on what makes your product unique.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-white/5">
                                Start Building <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95">
                                <Play className="w-4 h-4 fill-white" /> Watch Demo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}`
  }
}
