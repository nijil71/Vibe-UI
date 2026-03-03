export default function Loading() {
    return (
        <main className="min-h-screen bg-background pt-32">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <div className="h-12 w-80 bg-white/5 rounded-2xl animate-pulse mx-auto mb-6" />
                <div className="h-5 w-96 bg-white/5 rounded-lg animate-pulse mx-auto" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="rounded-3xl border border-white/10 bg-neutral-900/50 p-8">
                            <div className="h-40 rounded-2xl bg-white/5 animate-pulse mb-8" />
                            <div className="h-6 w-3/4 bg-white/5 rounded-lg animate-pulse mb-3" />
                            <div className="h-4 w-full bg-white/5 rounded-lg animate-pulse mb-2" />
                            <div className="h-4 w-5/6 bg-white/5 rounded-lg animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
