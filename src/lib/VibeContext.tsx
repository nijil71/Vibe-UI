"use client"
import React, { createContext, useContext, useState, useEffect } from 'react'

type Vibe = 'midnight' | 'emerald' | 'sunset' | 'cobalt'

interface VibeContextType {
    vibe: Vibe
    setVibe: (vibe: Vibe) => void
}

const VibeContext = createContext<VibeContextType | undefined>(undefined)

const themes = {
    midnight: {
        '--color-accent-blue': '#3b82f6',
        '--color-accent-violet': '#8b5cf6',
        '--color-accent-blue-glow': 'rgba(59, 130, 246, 0.5)',
    },
    emerald: {
        '--color-accent-blue': '#10b981',
        '--color-accent-violet': '#059669',
        '--color-accent-blue-glow': 'rgba(16, 185, 129, 0.5)',
    },
    sunset: {
        '--color-accent-blue': '#f59e0b',
        '--color-accent-violet': '#ef4444',
        '--color-accent-blue-glow': 'rgba(245, 158, 11, 0.5)',
    },
    cobalt: {
        '--color-accent-blue': '#2563eb',
        '--color-accent-violet': '#4f46e5',
        '--color-accent-blue-glow': 'rgba(37, 99, 235, 0.5)',
    }
}

export function VibeProvider({ children }: { children: React.ReactNode }) {
    const [vibe, setVibe] = useState<Vibe>('midnight')

    useEffect(() => {
        const root = document.documentElement
        const theme = themes[vibe]
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(key, value)
        })
    }, [vibe])

    return (
        <VibeContext.Provider value={{ vibe, setVibe }}>
            {children}
        </VibeContext.Provider>
    )
}

export const useVibe = () => {
    const context = useContext(VibeContext)
    if (!context) throw new Error('useVibe must be used within a VibeProvider')
    return context
}
