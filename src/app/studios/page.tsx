'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import BackHome from '../../components/ui/BackHome'

/* ─────────────────────────── Asset lists ─────────────────────────── */

const studioImages = [
    '/studios/DSC00506-1-1024x689.jpg',
    '/studios/DSC00c511-1-1024x683.png',
    '/studios/DSC01172-1024x683.jpg',
    '/studios/DSC01173-1024x683.jpg',
    '/studios/DSC01174-1024x683.jpg',
    '/studios/DSC01201-1024x683.jpg',
    '/studios/WhatsApp-Image-2024-01-27-at-15.34.20.jpeg',
    '/studios/WhatsApp-Image-2024-01-27-at-15.34.21-3-1024x779.jpeg',
    '/studios/WhatsApp-Image-2024-01-27-at-15.35.18-1-e1738861424497-1024x586.jpeg',
    '/studios/WhatsApp-Image-2024-01-27-at-15.35.19-1-1024x768.jpeg',
    '/studios/WhatsApp-Image-2024-01-27-at-15.38.41-1024x768.jpeg',
    '/studios/WhatsApp-Image-2024-01-27-at-15.38.49-1-1024x574.jpeg',
    '/studios/WhatsApp-Image-2024-01-27-at-15.39.43-1-1-1024x768.jpeg',
]

// Each entry: [src, colSpan, rowSpan]  → creates the irregular masonry feel
const masonryLayout: [string, string, string][] = [
    [studioImages[0], 'col-span-2', 'row-span-2'],
    [studioImages[1], 'col-span-1', 'row-span-1'],
    [studioImages[2], 'col-span-1', 'row-span-1'],
    [studioImages[3], 'col-span-1', 'row-span-2'],
    [studioImages[4], 'col-span-2', 'row-span-1'],
    [studioImages[5], 'col-span-1', 'row-span-1'],
    [studioImages[6], 'col-span-2', 'row-span-1'],
    [studioImages[7], 'col-span-1', 'row-span-2'],
    [studioImages[8], 'col-span-1', 'row-span-1'],
    [studioImages[9], 'col-span-2', 'row-span-1'],
    [studioImages[10], 'col-span-1', 'row-span-1'],
    [studioImages[11], 'col-span-1', 'row-span-1'],
    [studioImages[12], 'col-span-2', 'row-span-1'],
]

const costumeImages = [
    '/armor/costume-01.png', '/armor/costume-02.png', '/armor/costume-03.png',
    '/armor/costume-04.png', '/armor/costume-05.png', '/armor/costume-06.png',
    '/armor/costume-07.png', '/armor/costume-08.png', '/armor/costume-09.png',
    '/armor/costume-11.png', '/armor/costume-13.png', '/armor/costume-15.png',
    '/armor/costume-16.png', '/armor/costume-17.png', '/armor/costume-18.png',
    '/armor/costume-19.png', '/armor/costume-23.png',
]

const armorImages = [
    '/armor/armor-01.png', '/armor/armor-05.png', '/armor/armor-06.png',
    '/armor/armor-08.png', '/armor/armor-11.png', '/armor/armor-14.png',
    '/armor/armor-15.png', '/armor/armor-16.png', '/armor/armor-19.png',
    '/armor/armor-25.png',
]

const studioVideos = [
    { title: "DREAMAKER SHOWREEL", src: "/videos/showreel.mp4" },
    { title: "DIRTY ANGELS - BTS", src: "/videos/dirty.angel.mp4" },
    { title: "STUDIO OPERATIONS", src: "/videos/video1.webm" }
];

/* ─────────────────────────── Infinite Marquee ─────────────────────── */
// Duplicates items 3× so the loop is seamless at any screen width

function InfiniteMarquee({
    images,
    speed = 40,
    direction = 'left',
}: {
    images: string[]
    speed?: number
    direction?: 'left' | 'right'
}) {
    // Use a plain CSS animation for silky, no-jank infinite scroll
    const keyframesName = direction === 'left' ? 'marquee-left' : 'marquee-right'

    // Duplicate to fill enough width
    const track = [...images, ...images, ...images]

    return (
        <div className="overflow-hidden w-full">
            <div
                className="flex gap-6 w-max"
                style={{
                    animation: `${keyframesName} ${images.length * (60 / speed)}s linear infinite`,
                }}
            >
                {track.map((src, i) => (
                    <div
                        key={i}
                        className="h-72 w-48 flex-shrink-0 relative group"
                    >
                        <img
                            src={src}
                            alt=""
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_18px_rgba(255,255,255,0.15)]"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ─────────────────────────── Fade-in reveal ─────────────────────────*/
const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: 'easeOut' as const },
    },
}

/* ─────────────────────────── Page ───────────────────────────────────*/
export default function StudiosPage() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <>
            {/* Inject keyframe animations globally for this page */}
            <style>{`
                @keyframes marquee-left {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                @keyframes marquee-right {
                    0%   { transform: translateX(-33.333%); }
                    100% { transform: translateX(0); }
                }
            `}</style>

            <main className="bg-black text-white overflow-x-hidden">
                <BackHome />

                {/* ══════════════════════════════════════
                    SECTION 1 — Full-screen Hero Video
                ══════════════════════════════════════ */}
                <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

                    <video
                        src="/studios/studio.webm"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />

                    {/* Dark vignette + bottom gradient */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black" />

                    {/* Hero title */}
                    <motion.h1
                        initial={{ opacity: 0, letterSpacing: '0.6em' }}
                        animate={{ opacity: 1, letterSpacing: '0.25em' }}
                        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.3 }}
                        className="relative z-20 font-borscha text-5xl md:text-8xl font-bold uppercase text-white text-center tracking-[0.25em] drop-shadow-2xl"
                    >
                        JACARANDA<br />STUDIOS
                    </motion.h1>

                    {/* Subtle scroll hint */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                    >
                        <span className="font-borscha text-xs tracking-[0.3em] text-white/60 uppercase">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent"
                        />
                    </motion.div>
                </section>


                {/* ══════════════════════════════════════
                    SECTION 2 — Story / Description
                ══════════════════════════════════════ */}
                <section className="relative py-32 px-6 md:px-24 max-w-5xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <p className="font-borscha text-xs tracking-[0.4em] uppercase text-white/40 mb-6">
                            Marrakech, Morocco
                        </p>
                        <h2 className="font-borscha text-4xl md:text-6xl font-bold uppercase leading-tight mb-10 tracking-wider">
                            The Ultimate<br />Filming Destination
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl">
                            Nestled in the heart of Morocco, Jacaranda Studios is a world-class production
                            facility designed for international film, television, and commercial productions.
                            With over 3,000 m² of stage space, a dedicated costume and armor department,
                            and an unparalleled creative infrastructure, we offer everything your production demands —
                            under one roof, in one of the world's most visually extraordinary countries.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12"
                    >
                        {[
                            { stat: '3,000 m²', label: 'Stage Space' },
                            { stat: '500+', label: 'Costume Pieces' },
                            { stat: '15+', label: 'Years of Production' },
                        ].map(({ stat, label }) => (
                            <div key={label}>
                                <p className="font-borscha text-5xl font-bold text-white">{stat}</p>
                                <p className="font-borscha text-sm tracking-[0.3em] uppercase text-white/40 mt-2">{label}</p>
                            </div>
                        ))}
                    </motion.div>
                </section>


                {/* ══════════════════════════════════════
                    SECTION 3 — Masonry Gallery
                ══════════════════════════════════════ */}
                <section className="py-8 px-4 md:px-8">
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="font-borscha text-xs tracking-[0.5em] uppercase text-white/30 mb-8 text-center"
                    >
                        The Space
                    </motion.p>

                    <div
                        className="grid gap-3 auto-rows-[180px] md:auto-rows-[200px]"
                        style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
                    >
                        {masonryLayout.map(([src, colSpan, rowSpan], i) => (
                            <motion.div
                                key={i}
                                className={`${colSpan} ${rowSpan} overflow-hidden`}
                                initial={{ opacity: 0, scale: 0.97 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.6, delay: i * 0.04 }}
                            >
                                <img
                                    src={src}
                                    alt=""
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>


                {/* ══════════════════════════════════════
                    SECTION 4 — Costumes & Armor Marquees
                ══════════════════════════════════════ */}
                <section className="py-24 overflow-hidden">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16 px-6"
                    >
                        <p className="font-borscha text-xs tracking-[0.5em] uppercase text-white/30 mb-3">Department</p>
                        <h2 className="font-borscha text-4xl md:text-6xl font-bold uppercase tracking-wider">
                            Costumes &amp; Armor
                        </h2>
                        <p className="text-white/50 mt-6 max-w-xl mx-auto text-base">
                            An in-house wardrobe spanning centuries of cinema history — from ancient empires to
                            contemporary drama.
                        </p>
                    </motion.div>

                    {/* Ribbon 1 — Costumes (moves left) */}
                    <div className="mb-6">
                        <InfiniteMarquee images={costumeImages} speed={35} direction="left" />
                    </div>

                    {/* Ribbon 2 — Armor (moves right) */}
                    <div>
                        <InfiniteMarquee images={armorImages} speed={28} direction="right" />
                    </div>
                </section>


                {/* ══════════════════════════════════════
                    SECTION 5 — Video Gallery
                ══════════════════════════════════════ */}
                <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                        {studioVideos.map((video, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: i * 0.15 }}
                                className="flex flex-col gap-4"
                            >
                                <div
                                    className="w-full aspect-video rounded-xl overflow-hidden bg-white/5 relative group cursor-pointer"
                                    onClick={() => setActiveVideo(video.src)}
                                >
                                    <video
                                        src={video.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-100 md:opacity-80 md:group-hover:opacity-100"
                                    />
                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                                        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center pl-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                <path d="M5 3l14 9-14 9V3z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-borscha text-sm tracking-[0.2em] font-bold text-white uppercase text-center mt-2">
                                    {video.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ══════════════════════════════════════
                    FOOTER CTA
                ══════════════════════════════════════ */}
                <section className="py-32 flex flex-col items-center justify-center border-t border-white/10 px-6 text-center">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="font-borscha text-4xl md:text-6xl font-bold uppercase tracking-wider mb-8"
                    >
                        Book the Studio
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-white/50 text-lg max-w-lg mb-12"
                    >
                        Let&apos;s bring your vision to life. Reach out to our production team and
                        we&apos;ll craft the perfect setup for your project.
                    </motion.p>
                    <motion.a
                        href="/contact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-borscha uppercase tracking-[0.3em] text-sm border border-white/40 px-12 py-5 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Get in Touch
                    </motion.a>
                </section>

            </main>

            {/* Cinematic Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                    onClick={() => setActiveVideo(null)}
                >
                    <button
                        className="absolute top-8 right-8 md:right-12 text-white hover:text-gray-400 z-[101] flex items-center gap-2 font-borscha text-sm font-bold tracking-widest cursor-pointer group"
                        onClick={() => setActiveVideo(null)}
                    >
                        CLOSE <span className="group-hover:rotate-90 transition-transform duration-300 ml-1">X</span>
                    </button>

                    <div className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)] border border-white/10" onClick={(e) => e.stopPropagation()}>
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            className="w-full h-full bg-black shadow-2xl"
                        ></video>
                    </div>
                </div>
            )}
        </>
    )
}
