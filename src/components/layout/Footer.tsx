import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter, PlayCircle } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 md:py-24 px-6 lg:px-16 m-0 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">

                {/* Column 1: About */}
                <div className="space-y-6">
                    <div className="relative -ml-6 lg:-ml-16 bg-white py-3 md:py-4 pl-12 md:pl-16 pr-6 md:pr-8 inline-block rounded-r-full shadow-xl">
                        <img src="/logos/dreamakerLogo.png" alt="Logo" className="h-8 md:h-10 object-contain" />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs px-6 lg:px-0">
                        Global visionary in cinematic storytelling, crafting epic masterpieces that redefine industry standards.
                    </p>
                </div>

                {/* Mobile: 2nd & 3rd grouped in grid */}
                <div className="grid grid-cols-2 md:grid-cols-1 md:contents gap-8 md:gap-0">
                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/40 font-bold">Navigation</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm tracking-wide">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#work" className="hover:text-blue-400 transition-colors">WORK</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">ABOUT</a></li>
                            <li><a href="#locations" className="hover:text-blue-400 transition-colors">LOCATIONS</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Social */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/40 font-bold">Connect</h4>
                        <div className="flex gap-4 md:gap-6 pt-1">
                            <a href="#" className="text-white/60 hover:text-blue-400 transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="text-white/60 hover:text-blue-400 transition-all duration-300 transform hover:scale-110" aria-label="Vimeo">
                                <PlayCircle size={20} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="text-white/60 hover:text-blue-400 transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                                <Linkedin size={20} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Column 4: Contact */}
                <div className="space-y-4 md:space-y-6">
                    <h4 className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/40 font-bold">Contact</h4>
                    <p className="text-xs md:text-sm text-white/60 leading-relaxed space-y-1">
                        <span className="block">contact@dreamakerproductions.com</span>
                        <span className="block">+212 661 257 326</span>
                        <span className="block text-[10px] md:text-xs">115 Rue de la Yougoslavie, Marrakech</span>
                    </p>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-white/30">
                <p>© 2024 Dreamaker Productions. All Rights Reserved.</p>
                <p>Crafted for Excellence.</p>
            </div>
        </footer>
    )
}

export default Footer
