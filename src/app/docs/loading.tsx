export default function Loading() {
    return (
        <div className="flex min-h-screen bg-black">
            <aside className="fixed left-0 top-[64px] bottom-0 w-64 border-r border-white/5 bg-neutral-950/50 hidden lg:block p-6 space-y-6">
                <div className="h-8 w-full bg-white/5 rounded-lg animate-pulse" />
                <div className="space-y-3">
                    <div className="h-3 w-20 bg-white/5 rounded animate-pulse" />
                    <div className="h-8 w-full bg-white/5 rounded-lg animate-pulse" />
                    <div className="h-8 w-full bg-white/5 rounded-lg animate-pulse" />
                </div>
            </aside>
            <main className="flex-1 lg:pl-64 pt-[64px]">
                <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16 space-y-8">
                    <div className="h-10 w-64 bg-white/5 rounded-2xl animate-pulse" />
                    <div className="h-5 w-full bg-white/5 rounded-lg animate-pulse" />
                    <div className="h-5 w-5/6 bg-white/5 rounded-lg animate-pulse" />
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="h-32 bg-white/5 rounded-3xl animate-pulse" />
                        <div className="h-32 bg-white/5 rounded-3xl animate-pulse" />
                    </div>
                </div>
            </main>
        </div>
    )
}
