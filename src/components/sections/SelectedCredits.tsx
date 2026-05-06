'use client'

import { motion } from 'framer-motion'

const clientLogos = [
    "/clients/0.png", "/clients/1.png", "/clients/2.png", "/clients/3.png",
    "/clients/4.png", "/clients/7.png", "/clients/8.png", "/clients/9.png",
    "/clients/NATIONALGEOGRAPHIC.png", "/clients/history_logo.png", "/clients/netflix.png", "/clients/so-it-goes-productions-1.png",
    "/clients2/Untitled.png", "/clients2/Untitled (1).png", "/clients2/Untitled (2).png", "/clients2/Untitled (3).png",
    "/clients2/Untitled (4).png", "/clients2/Untitled (5).png", "/clients2/Untitled (6).png", "/clients2/Untitled (7).png",
    "/clients2/Untitled (8).png", "/clients2/Untitled (9).png", "/clients2/Untitled (10).png", "/clients2/Untitled (11).png"
]

const scrollingTrack = [...clientLogos, ...clientLogos]

const SelectedCredits = () => {
    return (
        <section className="bg-black relative overflow-hidden m-0 w-full py-12 md:py-16 lg:py-24">
            {/* Animated Background (The 7 Infinite Ribbons) */}
            <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none flex flex-col justify-evenly overflow-hidden">
                {Array.from({ length: 7 }).map((_, rowIndex) => {
                    const isEven = rowIndex % 2 === 0
                    return (
                        <div key={rowIndex} className="flex whitespace-nowrap overflow-hidden">
                            <motion.div
                                animate={{ x: isEven ? ["0%", "-50%"] : ["-50%", "0%"] }}
                                transition={{ ease: "linear", duration: 70 + (rowIndex * 10), repeat: Infinity }}
                                className="flex gap-16 items-center w-max"
                            >
                                {scrollingTrack.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt="Client Logo"
                                        className="h-8 md:h-12 object-contain filter brightness-0 invert"
                                    />
                                ))}
                            </motion.div>
                        </div>
                    )
                })}
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h3 className="text-blue-500 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-4 text-center">Selected Credits</h3>
                    <h2 className="text-2xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-12 md:mb-16 text-center">Our Global Portfolio.</h2>
                </motion.div>

                {/* Movie Posters Grid */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-8 lg:gap-12 w-full place-items-center">
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        src="/works/posters/dirty-angels.png"
                        alt="Dirty Angels"
                        className="w-full aspect-[2/3] object-cover rounded shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-105 border border-white/10"
                    />
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        src="/works/posters/cia-confidential.jpg"
                        alt="CIA Confidential"
                        className="w-full aspect-[2/3] object-cover rounded shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-105 border border-white/10"
                    />
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        src="/works/posters/black-angel.jpg"
                        alt="Black Angel"
                        className="w-full aspect-[2/3] object-cover rounded shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-105 border border-white/10"
                    />
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        src="/works/posters/pegase.jpg"
                        alt="Pegase"
                        className="w-full aspect-[2/3] object-cover rounded shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-105 border border-white/10"
                    />
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        src="/works/posters/clash-of-the-gods.jpg"
                        alt="Clash of the Gods"
                        className="w-full aspect-[2/3] object-cover rounded shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-105 border border-white/10"
                    />
                </div>

                {/* CTA Link */}
                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    href="/works"
                    className="mt-20 group flex items-center gap-4 text-white font-bold tracking-[0.2em] uppercase text-sm hover:text-blue-500 transition-colors"
                >
                    <span>Explore More Work</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
                </motion.a>
            </div>
        </section>
    )
}

export default SelectedCredits
