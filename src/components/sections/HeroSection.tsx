'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const videos = [
    "/videos/11.mp4",
    "/videos/aerial-ait-ben-haddou-morocco-2025-12-17-03-40-43-utc.webm",
    "/videos/intricate-moroccan-interior-with-vibrant-lighting-2026-01-28-05-40-24-utc.webm",
    "/videos/ait-ben-haddou-in-morocco-2025-12-17-18-44-20-utc.webm"
]

const HeroSection = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }

    return (
        <section className="relative w-full h-screen overflow-hidden m-0 p-0">
            {/* Background Video Loop with Cross-fade */}
            <div className="absolute inset-0 -z-20 scale-110 pointer-events-none">
                <AnimatePresence mode="popLayout">
                    <motion.video
                        key={currentVideoIndex}
                        src={videos[currentVideoIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>

            {/* Hidden Pre-loader for the next video */}
            <video
                src={videos[(currentVideoIndex + 1) % videos.length]}
                preload="auto"
                muted
                className="hidden"
            />

            {/* Overlay for legibility */}
            <div className="absolute inset-0 bg-black/30 -z-10"></div>

            {/* Absolute positioning to touch the bottom */}
            <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-0 w-full px-6 md:px-24 z-20 flex flex-col items-start text-left">
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className="text-[40px] md:text-[60px] mb-4 font-serif text-white max-w-2xl leading-[1.1] drop-shadow-2xl"
                >
                    With over 26 years of excellence and an Emmy Award-winning legacy.
                </motion.h1>

                {/* Body Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                    className="text-sm md:text-xl text-gray-100 max-w-[85%] md:max-w-2xl font-medium"
                >
                    Dreamaker Productions is the definitive gateway to international filmmaking in Morocco. We blend local mastery with uncompromising global standards
                </motion.p>
            </div>

            {/* Animated Bottom-Right Arrow */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1.1 }}
                className="absolute bottom-12 right-6 md:bottom-16 md:right-24 z-30 flex flex-col items-end"
            >
                <motion.a
                    href="#discover"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex flex-col items-end group cursor-pointer"
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white mb-2 transition-all duration-300 ease-in-out group-hover:text-[#0ea5e9] group-hover:scale-110 origin-right">
                        DISCOVER
                    </span>
                    <div className="text-white transition-all duration-300 ease-in-out group-hover:text-[#0ea5e9] group-hover:scale-110">
                        <ArrowRight size={28} strokeWidth={1.5} />
                    </div>
                </motion.a>
            </motion.div>
        </section>
    )
}

export default HeroSection
