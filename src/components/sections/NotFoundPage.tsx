"use client"
import React from "react"
import { Home, ArrowLeft, Search } from "lucide-react"

export function NotFoundPage() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-6 bg-neutral-950 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Glitch 404 */}
                <div className="relative mb-8 select-none">
                    <h1
                        className="text-[10rem] md:text-[14rem] font-black text-transparent leading-none tracking-tighter"
                        style={{
                            WebkitTextStroke: "2px rgba(255,255,255,0.1)",
                        }}
                    >
                        404
                    </h1>

                    {/* Glitch layers */}
                    <h1
                        className="absolute inset-0 text-[10rem] md:text-[14rem] font-black text-red-500/30 leading-none tracking-tighter animate-glitch-1"
                        aria-hidden="true"
                    >
                        404
                    </h1>
                    <h1
                        className="absolute inset-0 text-[10rem] md:text-[14rem] font-black text-blue-500/30 leading-none tracking-tighter animate-glitch-2"
                        aria-hidden="true"
                    >
                        404
                    </h1>

                    {/* Scan line effect */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] pointer-events-none" />
                </div>

                {/* Message */}
                <div className="space-y-4 mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                        Page not found
                    </h2>
                    <p className="text-neutral-500 text-lg max-w-md mx-auto leading-relaxed">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all active:scale-95 shadow-xl shadow-white/5">
                        <Home className="w-5 h-5" />
                        Go Home
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {/* Error Code */}
                <div className="mt-16 flex items-center justify-center gap-6 text-[10px] text-neutral-600 uppercase tracking-[0.2em] font-bold">
                    <span>Error 404</span>
                    <div className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span>Resource Not Found</span>
                    <div className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span>vibeui.com</span>
                </div>
            </div>

            {/* CSS for glitch animation */}
            <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-3px, -3px); }
          10% { clip-path: inset(40% 0 30% 0); transform: translate(3px, 0); }
          20% { clip-path: inset(70% 0 5% 0); transform: translate(-3px, 3px); }
          30% { clip-path: inset(10% 0 60% 0); transform: translate(0, -3px); }
          40% { clip-path: inset(80% 0 0% 0); transform: translate(3px, 3px); }
          50% { clip-path: inset(0 0 80% 0); transform: translate(-3px, 0); }
          60% { clip-path: inset(50% 0 20% 0); transform: translate(3px, -3px); }
          70% { clip-path: inset(20% 0 50% 0); transform: translate(0, 3px); }
          80% { clip-path: inset(60% 0 10% 0); transform: translate(-3px, -3px); }
          90% { clip-path: inset(30% 0 40% 0); transform: translate(3px, 0); }
        }
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(95% 0 0 0); transform: translate(3px, 3px); }
          10% { clip-path: inset(20% 0 50% 0); transform: translate(-3px, 0); }
          20% { clip-path: inset(5% 0 70% 0); transform: translate(3px, -3px); }
          30% { clip-path: inset(60% 0 10% 0); transform: translate(0, 3px); }
          40% { clip-path: inset(0% 0 80% 0); transform: translate(-3px, -3px); }
          50% { clip-path: inset(80% 0 0% 0); transform: translate(3px, 0); }
          60% { clip-path: inset(20% 0 50% 0); transform: translate(-3px, 3px); }
          70% { clip-path: inset(50% 0 20% 0); transform: translate(0, -3px); }
          80% { clip-path: inset(10% 0 60% 0); transform: translate(3px, 3px); }
          90% { clip-path: inset(40% 0 30% 0); transform: translate(-3px, 0); }
        }
        :global(.animate-glitch-1) {
          animation: glitch-1 3s infinite linear;
        }
        :global(.animate-glitch-2) {
          animation: glitch-2 3s infinite linear;
          animation-delay: 0.1s;
        }
      `}</style>
        </div>
    )
}
