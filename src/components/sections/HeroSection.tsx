'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className="relative w-full bg-white pt-32 pb-20 px-4 md:px-8 flex flex-col items-center justify-center min-h-[90vh]">
            {/* Top Heading */}
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[#009ED8] font-extrabold text-3xl md:text-5xl lg:text-6xl uppercase text-center mb-6 md:mb-10 tracking-wide"
            >
                SKILLS. EFFICIENCY. ECONOMY
            </motion.h1>

            {/* Video Frame */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="w-full max-w-5xl mx-auto aspect-video rounded-2xl shadow-2xl overflow-hidden border border-gray-100 bg-gray-50 relative"
            >
                <video
                    src="/videos/video.cader(1).webm"
                    autoPlay
                    muted={false}
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                />
            </motion.div>
        </section>
    )
}

export default HeroSection
