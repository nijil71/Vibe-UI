import { Github } from 'lucide-react'
export default function Footer() {
    return (
    <footer className="w-full py-16 md:py-20 px-6 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6 font-display">vibeui</h3>
            <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
              Production-ready UI sections for modern product teams.
              Built with precision, designed for performance.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/nijil71/Vibe-UI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:border-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-neutral-600 text-[10px] uppercase tracking-widest font-bold text-center md:text-left">
          <p>© 2026 VIBE UI INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            {/* <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a> */}
            {/* <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a> */}
          </div>
        </div>
      </footer>
    )
}

