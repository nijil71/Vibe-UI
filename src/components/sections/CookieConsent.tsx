"use client"
import React, { useState } from "react"
import { Cookie, X, Check, ArrowRight } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-8 pointer-events-none">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl pointer-events-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />

        <div className="flex items-start gap-5 relative z-10 w-full sm:w-auto">
          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl hidden shrink-0 sm:flex">
            <Cookie className="w-6 h-6 text-accent-blue" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">We value your privacy</h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full sm:w-auto shrink-0 gap-3 relative z-10">
          <button
            onClick={() => setIsVisible(false)}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Accept All
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-800 text-white font-bold border border-white/5 hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
          >
            Manage Preferences
          </button>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-2 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-colors hidden sm:block"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
