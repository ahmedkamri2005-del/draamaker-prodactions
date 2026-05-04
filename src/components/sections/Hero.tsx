'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                src="/videos/11.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-20"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/30 -z-10"></div>

            <div className="absolute bottom-0 left-0 w-full px-8 md:px-20 z-20 flex flex-col items-start text-left">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white/70 uppercase tracking-[0.4em] text-[10px] mb-6"
                >
                    [ COMPANY PROFILE ] MOROCCO
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] drop-shadow-2xl"
                >
                    With over 26 years of excellence and an Emmy Award-winning legacy.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-100 mt-6 max-w-2xl font-medium"
                >
                    Dreamaker Productions is the definitive gateway to international filmmaking in Morocco. We blend local mastery with uncompromising global standards.
                </motion.p>

                <motion.a
                    href="#work"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center gap-4 mt-8 group"
                >
                    <span className="text-xs text-white tracking-[0.3em] font-medium uppercase group-hover:opacity-70 transition-opacity">
                        VISIT OUR WORK
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                        <ArrowDown size={14} className="text-white" />
                    </div>
                </motion.a>
            </div>

            {/* Aesthetic Detail: Subtle Bottom Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-0 left-8 md:left-20 right-8 md:right-20 h-[1px] bg-white/10 origin-left"
            />
        </section>
    )
}

export default Hero
