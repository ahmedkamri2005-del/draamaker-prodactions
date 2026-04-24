import { motion } from 'framer-motion'
import Reveal from '../Reveal'

const Founder = () => {
    return (
        <section id="founder" className="bg-white py-12 md:py-16 lg:py-24 px-6 lg:px-16 m-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Portrait */}
                <Reveal width="100%">
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 group">
                        <img
                            src="/images/fouad.jpg"
                            alt="Fouad - The Visionary"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' // Fallback
                            }}
                        />
                        {/* Subtle Blue Frame Accent */}
                        <div className="absolute inset-4 border border-blue-500/20 pointer-events-none" />
                    </div>
                </Reveal>

                {/* Right: Bio/Quote */}
                <div className="space-y-10">
                    <Reveal>
                        <h2 className="text-[12px] tracking-[0.5em] text-blue-600 uppercase font-bold">The Visionary</h2>
                    </Reveal>
                    <Reveal>
                        <h3 className="text-5xl md:text-7xl font-serif text-foreground leading-tight">
                            THE FOUNDER: <br /> FOUAD
                        </h3>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl md:text-2xl text-foreground/70 font-serif italic leading-relaxed max-w-xl">
                            "We don't just capture images; we architect dreams into cinematic reality. Every frame is a testament to the pursuit of perfection."
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className="space-y-6">
                            <p className="text-base text-foreground/60 leading-relaxed max-w-lg">
                                Fouad founded Dreamaker Productions with a singular goal: to create a powerhouse of creativity that bridges the gap between raw emotion and high-end technology. With over two decades in the industry, his vision continues to guide every masterpiece we create.
                            </p>
                            <div className="pt-8">
                                <span className="font-serif text-4xl text-foreground/80 tracking-tighter" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                    Fouad
                                </span>
                                <p className="text-[10px] tracking-[0.2em] uppercase text-blue-600 mt-2 font-bold">Founder & CEO</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

            </div>
        </section>
    )
}

export default Founder
