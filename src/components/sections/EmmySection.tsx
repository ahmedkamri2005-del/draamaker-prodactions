import { motion } from 'framer-motion'
import Reveal from '../Reveal'

const EmmySection = () => {
    return (
        <section id="awards" className="bg-white py-12 md:py-16 lg:py-24 px-6 lg:px-16 overflow-hidden m-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: Floating Trophy */}
                <div className="relative flex justify-center items-center h-[500px]">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotateY: [0, 10, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="z-10"
                    >
                        <div className="relative">
                            {/* Using a placeholder for Emmy Trophy if no image found, but let's try to find an award image */}
                            <img
                                src="/emmy-trophy.png"
                                alt="Emmy Award"
                                className="w-[450px] md:w-[600px] h-auto object-contain drop-shadow-[0_40px_100px_rgba(212,175,55,0.2)] mb-8"
                            />
                            {/* Lens Flare / Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-10" />
                        </div>
                    </motion.div>

                    {/* Accent text behind trophy */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                        <span className="text-[20rem] font-serif text-black uppercase">EMMY</span>
                    </div>
                </div>

                {/* Right: Typography */}
                <div className="space-y-12">
                    <Reveal>
                        <h2 className="text-[12px] tracking-[0.5em] text-blue-600 uppercase font-bold">Global Recognition</h2>
                    </Reveal>
                    <Reveal>
                        <h3 className="text-5xl md:text-8xl font-serif text-black uppercase leading-[0.8] tracking-tighter">
                            EMMY² <br />
                            AWARD <br />
                            <span className="text-gray-200">WINNER</span>
                        </h3>
                    </Reveal>
                    <div className="grid grid-cols-2 gap-10 py-10 border-t border-black/10">
                        <Reveal>
                            <div className="space-y-2">
                                <p className="text-3xl font-serif text-foreground">2X</p>
                                <p className="text-[10px] tracking-widest text-foreground/40 uppercase font-bold">Outstanding Cinematography</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="space-y-2">
                                <p className="text-3xl font-serif text-foreground">5X</p>
                                <p className="text-[10px] tracking-widest text-foreground/40 uppercase font-bold">Best Visual Effects</p>
                            </div>
                        </Reveal>
                    </div>
                    <Reveal>
                        <p className="text-foreground/50 text-sm leading-relaxed max-w-md">
                            Acknowledged by the Academy for exceptional technical prowess and creative innovation in production and post-production excellence.
                        </p>
                    </Reveal>
                </div>

            </div>
        </section>
    )
}

export default EmmySection
