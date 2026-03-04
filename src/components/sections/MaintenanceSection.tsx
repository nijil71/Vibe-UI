"use client"
import React, { useEffect, useState } from "react"
import { Hammer, Bell, Clock, Cpu } from "lucide-react"

export function MaintenanceSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 2,
        minutes: 45,
        seconds: 30
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev
                if (seconds > 0) seconds--
                else {
                    seconds = 59
                    if (minutes > 0) minutes--
                    else {
                        minutes = 59
                        if (hours > 0) hours--
                        else {
                            hours = 23
                            if (days > 0) days--
                        }
                    }
                }
                return { days, hours, minutes, seconds }
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-6 bg-neutral-950">
            <div className="max-w-2xl w-full mx-auto relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-blue/10 blur-[150px] pointer-events-none rounded-full" />

                <div className="bg-neutral-900 border border-white/10 rounded-[3rem] p-12 relative overflow-hidden text-center shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 w-64 h-64 bg-gradient-to-bl from-amber-500/20 to-transparent blur-2xl pointer-events-none" />

                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-amber-500/10 border border-amber-500/20 mb-8 relative">
                        <div className="absolute inset-0 bg-amber-400 opacity-20 animate-ping rounded-3xl" />
                        <Hammer className="w-12 h-12 text-amber-400" />
                        <div className="absolute -bottom-2 -right-2 p-2 bg-neutral-900 rounded-full border border-white/10">
                            <Cpu className="w-4 h-4 text-blue-400" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Under Maintenance</h2>
                    <p className="text-neutral-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                        We are currently upgrading our infrastructure to serve you better. We'll be back online shortly. Thank you for your patience!
                    </p>

                    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Mins", value: timeLeft.minutes },
                            { label: "Secs", value: timeLeft.seconds }
                        ].map((t, i) => (
                            <div key={i} className="bg-neutral-950 p-4 rounded-2xl border border-white/5 shadow-inner">
                                <span className="block text-3xl font-black text-white text-center tabular-nums">
                                    {t.value.toString().padStart(2, '0')}
                                </span>
                                <span className="block text-xs font-bold text-neutral-500 text-center uppercase tracking-widest mt-2">{t.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-neutral-200 transition-colors w-full sm:w-auto mt-4">
                            <Bell className="w-4 h-4" />
                            Notify me
                        </button>
                        <button className="px-8 py-4 rounded-full bg-neutral-800 text-white font-bold flex items-center gap-2 border border-white/10 hover:bg-neutral-700 transition-colors w-full sm:w-auto mt-4 sm:mt-0">
                            <Clock className="w-4 h-4" />
                            Check Status Page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
