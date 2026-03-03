export default function Loading() {
    return (
        <div className="min-h-screen pt-24 pb-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="h-4 w-40 bg-white/5 rounded-lg animate-pulse mb-8" />
                <div className="h-12 w-96 bg-white/5 rounded-2xl animate-pulse mb-4" />
                <div className="h-5 w-80 bg-white/5 rounded-lg animate-pulse mb-12" />

                <div className="flex gap-4 mb-8 border-b border-white/5 pb-4">
                    <div className="h-8 w-24 bg-white/5 rounded-lg animate-pulse" />
                    <div className="h-8 w-20 bg-white/5 rounded-lg animate-pulse" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="rounded-[32px] border border-white/10 bg-[#0d0d0d] overflow-hidden">
                    <div className="flex items-center px-6 py-4 bg-white/5 border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                        </div>
                    </div>
                    <div className="w-full h-[500px] md:h-[800px] bg-neutral-950 flex items-center justify-center">
                        <div className="w-full max-w-md space-y-4 px-12">
                            <div className="h-8 bg-white/5 rounded-xl animate-pulse w-3/4" />
                            <div className="h-4 bg-white/5 rounded-lg animate-pulse w-full" />
                            <div className="h-4 bg-white/5 rounded-lg animate-pulse w-5/6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
