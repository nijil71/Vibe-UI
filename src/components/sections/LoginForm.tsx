"use client"
import React, { useState } from "react"
import { Mail, Lock, Eye, EyeOff, Github, ArrowRight } from "lucide-react"

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-6 bg-neutral-950 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-violet/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-md">
                {/* Card */}
                <div className="bg-neutral-900/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
                            <Lock className="w-7 h-7 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Welcome back</h2>
                        <p className="text-neutral-500 text-sm">Sign in to your account to continue</p>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                        {[
                            { label: "Google", icon: <GoogleIcon /> },
                            { label: "GitHub", icon: <Github className="w-5 h-5" /> },
                            { label: "Apple", icon: <AppleIcon /> },
                        ].map((provider) => (
                            <button
                                key={provider.label}
                                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <span className="text-neutral-400 group-hover:text-white transition-colors">{provider.icon}</span>
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold">Or continue with email</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* Form */}
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <Mail className="w-4 h-4 text-neutral-500" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-accent-blue/40 transition-all text-sm font-medium"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest">Password</label>
                                <button type="button" className="text-xs text-accent-blue hover:text-blue-300 font-medium transition-colors">
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <Lock className="w-4 h-4 text-neutral-500" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-accent-blue/40 transition-all text-sm font-medium"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-4 flex items-center text-neutral-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-sm hover:from-blue-500 hover:to-violet-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                        >
                            Sign In <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-neutral-500 mt-8">
                        Don&apos;t have an account?{" "}
                        <button className="text-white font-semibold hover:text-accent-blue transition-colors">
                            Create one
                        </button>
                    </p>
                </div>

                {/* Trust signals */}
                <div className="flex items-center justify-center gap-6 mt-8 text-[10px] text-neutral-600 uppercase tracking-[0.15em] font-bold">
                    <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        256-bit SSL
                    </span>
                    <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                        SOC2 Compliant
                    </span>
                </div>
            </div>
        </div>
    )
}

function GoogleIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    )
}

function AppleIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
    )
}
