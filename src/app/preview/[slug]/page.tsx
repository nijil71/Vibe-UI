import { COMPONENTS } from "@/data/components"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return Object.keys(COMPONENTS).map((slug) => ({ slug }))
}

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const componentData = COMPONENTS[slug as keyof typeof COMPONENTS]

    if (!componentData) {
        notFound()
    }

    const Component = componentData.component

    return (
        <div className="min-h-screen relative bg-neutral-950 overflow-x-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="relative z-10 w-full py-12 px-4 sm:px-6">
                <Component />
            </div>
        </div>
    )
}
