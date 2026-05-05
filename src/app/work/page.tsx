'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import BackHome from '../../components/ui/BackHome'

const movies = [
    { title: "THE WALK", description: "In 1974, high-wire artist Philippe Petit recruits a team of people to help him realize his dream: to walk the immense void between the World Trade Center towers.", file: "the-walk.png", trailerUrl: "https://www.youtube.com/embed/eKSeSX-dzso?autoplay=1" },
    { title: "AGENT VINOD", description: "A series of seemingly unconnected events across the globe leads to Agent Vinod undertaking a globe-trotting mission to discover the truth.", file: "agent-vinod.jpg", trailerUrl: "https://www.youtube.com/embed/tF2B2DkH8k0?autoplay=1" },
    { title: "DIRTY ANGELS", description: "During the 2021 U.S. withdrawal from Afghanistan, a group of female soldiers is sent back in to rescue a group of kidnapped teenagers.", file: "dirty-angels.png", trailerUrl: "https://www.youtube.com/embed/Sml-wsN65mI?autoplay=1" },
    { title: "CLASH OF THE GODS", description: "An epic documentary series exploring the ancient myths and the real-life historical events that may have inspired them.", file: "clash.of.the.god.jpg", trailerUrl: "https://www.youtube.com/embed/gL2-1dC1Fvc?autoplay=1" },
    { title: "AAZAAN", description: "An army officer working for RAW gets drawn into the murky world of espionage, only to find his younger brother is a suspected terrorist.", file: "Aazaan.png", trailerUrl: "https://www.youtube.com/embed/tOGvOPGa3PQ?autoplay=1" },
    { title: "OKUOTOKO", description: "A man who is deeply in debt suddenly wins the lottery, but his best friend disappears with the money, leading him on a quest to discover the true value of wealth.", file: "okuotoko.jpg", trailerUrl: "https://www.youtube.com/embed/mJXZhsVbK7s?autoplay=1&list=RDmJXZhsVbK7s&start_radio=1" },
    { title: "PEGASE", description: "A haunting and visually stunning psychological drama by Moroccan director Mohamed Mouftakir.", file: "pegase.jpg", trailerUrl: "https://www.youtube.com/embed/9KceWSXryDQ?autoplay=1" },
    { title: "BLACK ANGEL", description: "A gripping tale of mystery and survival.", file: "black.angel.jpg", trailerUrl: "https://www.youtube.com/embed/dIE_56C9z4k?autoplay=1" },
    { title: "CIA CONFIDENTIAL", description: "An inside look at the most secretive intelligence operations.", file: "CIA CONFIDENTIAL.jpg", trailerUrl: "https://www.youtube.com/embed/rJQt4YIiZMg?autoplay=1" },
    { title: "EMIR", description: "A spectacular musical drama about a nanny working in a royal household.", file: "Emir.jpg", trailerUrl: "https://www.youtube.com/embed/_iUI6Vwf4sw?autoplay=1" },
    { title: "FLIRT", description: "A romantic drama exploring the complexities of relationships across different cities.", file: "Flirt.png", trailerUrl: "https://www.youtube.com/embed/msOnGTQtA9E?autoplay=1" },
    { title: "GARDEN OF ADEN", description: "A beautifully shot cinematic journey into human resilience.", file: "garden-of-aden.png", trailerUrl: "https://www.youtube.com/embed/yz-O4ZEqCPA?autoplay=1" },
    { title: "MIDNIGHT FLY", description: "A suspenseful thriller set against the neon lights of a restless city.", file: "midnight-fly.png", trailerUrl: "https://www.youtube.com/embed/iH5D3aDEips?autoplay=1" },
    { title: "DAAG", description: "An intense story of revenge, justice, and unyielding determination.", file: "DAAG.jpg", trailerUrl: "https://www.youtube.com/embed/2pjy6031Dvk?autoplay=1" }
];

/* Infinite horizontal marquee logos background */
const allLogos = [
    '/clients/0.png', '/clients/1.png', '/clients/2.png', '/clients/3.png', '/clients/4.png', '/clients/7.png', '/clients/8.png', '/clients/9.png', '/clients/history_logo.png', '/clients/NATIONALGEOGRAPHIC.png', '/clients/netflix.png', '/clients/so-it-goes-productions-1.png',
    '/clients2/Untitled (1).png', '/clients2/Untitled (2).png', '/clients2/Untitled (3).png', '/clients2/Untitled (4).png', '/clients2/Untitled (5).png', '/clients2/Untitled (6).png', '/clients2/Untitled (7).png', '/clients2/Untitled (8).png', '/clients2/Untitled (9).png', '/clients2/Untitled (10).png', '/clients2/Untitled (11).png', '/clients2/Untitled.png',
]
const displayLogos = [...allLogos, ...allLogos, ...allLogos]

export default function WorkPage() {
    const [activeTrailer, setActiveTrailer] = useState<string | null>(null)

    return (
        <main className="bg-black text-white min-h-screen pb-20 overflow-hidden relative">
            <BackHome />

            {/* Animated logos background */}
            <div className="fixed inset-0 z-0 flex flex-col justify-around overflow-hidden pointer-events-none select-none">
                {Array.from({ length: 8 }).map((_, row) => (
                    <div
                        key={row}
                        className="flex flex-row items-center w-max"
                        style={{
                            animation: `marquee-${row % 2 === 0 ? 'left' : 'right'} ${100 + row * 15}s linear infinite`,
                        }}
                    >
                        {displayLogos.map((logo, i) => {
                            const isColored = logo === '/clients/9.png'
                            return (
                                <Image
                                    key={`${row}-${i}`}
                                    src={logo}
                                    alt={`${logo.split('/').pop()?.split('.')[0]} partner logo`}
                                    width={120}
                                    height={56}
                                    className={`h-12 md:h-14 w-auto object-contain mx-8 opacity-5 ${isColored ? '' : 'brightness-0 invert'}`}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee-left {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>

            {/* Page heading */}
            <div className="relative z-10 text-center mb-24 px-6">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-borscha text-xs tracking-[0.5em] uppercase text-white/30 mb-6"
                >
                    Selected Credits
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' as const }}
                    className="font-borscha text-5xl md:text-7xl font-black uppercase tracking-tight"
                >
                    Our Work
                </motion.h1>
            </div>

            {/* Film rows */}
            <div className="relative z-10 flex flex-col gap-28 px-6 md:px-16">
                {movies.map((movie, i) => {
                    const isEven = i % 2 === 0
                    return (
                        <motion.div
                            key={movie.file}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: 'easeOut' as const }}
                            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}
                        >
                            {/* Poster */}
                            <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                                <Image
                                    src={`/works/${movie.file}`}
                                    alt={`${movie.title} movie poster`}
                                    width={500}
                                    height={750}
                                    className="w-full h-auto max-h-[75vh] object-contain drop-shadow-2xl rounded-md"
                                />
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center px-8">
                                <p className="font-borscha text-xs tracking-[0.4em] uppercase text-white/30 mb-4">
                                    {String(i + 1).padStart(2, '0')} / {String(movies.length).padStart(2, '0')}
                                </p>
                                <h2 className="font-borscha text-5xl font-bold uppercase mb-6 text-white leading-tight">
                                    {movie.title}
                                </h2>
                                <div className="w-10 h-px bg-white/20 mb-6" />
                                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                                    {movie.description}
                                </p>
                                {movie.trailerUrl && (
                                    <button
                                        onClick={() => setActiveTrailer(movie.trailerUrl)}
                                        className="mt-8 flex w-max items-center gap-4 text-white uppercase tracking-widest text-sm font-bold hover:text-gray-400 transition-colors group cursor-pointer"
                                    >
                                        WATCH TRAILER
                                        <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Bottom spacing */}
            <div className="h-24" />

            {/* Video Modal */}
            <AnimatePresence>
                {activeTrailer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                        onClick={() => setActiveTrailer(null)}
                    >
                        <button className="absolute top-8 right-8 md:right-12 text-white hover:text-gray-400 z-[101] flex items-center gap-2 font-bold tracking-widest cursor-pointer">
                            CLOSE X
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={activeTrailer}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    )
}
