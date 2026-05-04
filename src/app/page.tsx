'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../components/layout/Footer'
import VisionSection from '../components/sections/VisionSection'

const clientLogos = [
    "/clients/0.png", "/clients/1.png", "/clients/2.png", "/clients/3.png",
    "/clients/4.png", "/clients/7.png", "/clients/8.png", "/clients/9.png",
    "/clients/NATIONALGEOGRAPHIC.png", "/clients/history_logo.png", "/clients/netflix.png", "/clients/so-it-goes-productions-1.png",
    "/clients2/Untitled.png", "/clients2/Untitled (1).png", "/clients2/Untitled (2).png", "/clients2/Untitled (3).png",
    "/clients2/Untitled (4).png", "/clients2/Untitled (5).png", "/clients2/Untitled (6).png", "/clients2/Untitled (7).png",
    "/clients2/Untitled (8).png", "/clients2/Untitled (9).png", "/clients2/Untitled (10).png", "/clients2/Untitled (11).png"
]

export default function Home() {
    return (
        <main className="bg-white min-h-screen font-sans selection:bg-[#009ED8] selection:text-white">
            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-screen px-6 lg:px-12 flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden">
                {/* HERO BACKGROUND VIDEO */}
                <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                    <iframe 
                        src="https://player.vimeo.com/video/1188869168?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-[1.35] md:scale-[1.45]"
                        title="backgroun global"
                    ></iframe>
                    <div className="absolute inset-0 bg-black/70" />
                </div>
                
                <div className="w-full max-w-4xl mx-auto relative flex flex-col items-center z-10">
                    
                    {/* 1. THE VIDEO FRAME */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" as const }}
                        className="w-full aspect-[16/7] md:aspect-[21/9] rounded-xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden relative z-0 bg-transparent"
                    >
                        <iframe
                            src="https://player.vimeo.com/video/1188869559?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            className="absolute top-1/2 left-1/2 w-[102%] aspect-video -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            title="video.cader(1)"
                        ></iframe>
                    </motion.div>

                    {/* 2. THE HEADING */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" as const, delay: 0.3 }}
                        className="text-[#009ED8] font-bold text-2xl md:text-3xl uppercase text-center mt-6 z-10 tracking-widest"
                    >
                        SKILLS. EFFICIENCY. ECONOMY
                    </motion.h1>
                </div>

                {/* 3. LOGO MARQUEE */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="w-full max-w-6xl mx-auto overflow-hidden mt-6 relative flex"
                    style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                >
                    <motion.div 
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                        className="flex gap-x-16 items-center flex-nowrap"
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-x-16 items-center flex-nowrap shrink-0">
                                {[
                                    '/clients/netflix.png',
                                    '/clients/NATIONALGEOGRAPHIC.png',
                                    '/clients/history_logo.png',
                                    '/clients/0.png',
                                    '/clients/1.png',
                                    '/clients/2.png',
                                    '/clients/3.png',
                                    '/clients/4.png',
                                    '/clients/7.png',
                                    '/clients/8.png',
                                    '/clients/9.png',
                                    '/clients/so-it-goes-productions-1.png'
                                ].map((src, idx) => (
                                    <img 
                                        key={`${i}-${idx}`} 
                                        src={src} 
                                        alt={`${src.split('/').pop()?.split('.')[0].replace(/[-_]/g, ' ')} Production Partner Logo`} 
                                        className={`w-auto object-contain opacity-80 hover:opacity-100 transition-opacity shrink-0 ${
                                            src === '/clients/9.png' 
                                                ? 'h-12 md:h-16' 
                                                : 'h-8 md:h-10 brightness-0 invert'
                                        }`} 
                                    />
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. VISION & SERVICES PARALLAX SECTION */}
            <VisionSection />

            {/* 4. THE EMMY BADGE */}
            <section className="w-full bg-white pt-8 md:pt-12 pb-8 md:pb-12 px-6 lg:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Left Column (Text) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <span className="text-[#00A1DF] text-sm font-bold tracking-widest uppercase block">
                            Global Recognition
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
                            An Emmy Award-Winning Production & Locations Company.
                        </h2>
                    </motion.div>
                    
                    {/* Right Column (Trophy Image) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-end"
                    >
                        <img 
                            src="/emmy-trophy.png" 
                            alt="Emmy Award" 
                            className="w-full max-w-xl object-contain transition-transform duration-500 ease-out hover:-translate-y-3 hover:scale-110"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 5. LOCATIONS MOODBOARD */}
            <section className="w-full bg-black pt-16 md:pt-24 pb-16 md:pb-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                        {/* Card 1 */}
                        <div className="relative w-full aspect-[3/4] md:min-h-[500px] rounded-sm overflow-hidden group cursor-pointer">
                            <iframe 
                                src="https://player.vimeo.com/video/1188901517?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1" 
                                frameBorder="0" 
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                                className="absolute top-1/2 left-1/2 w-[450%] md:w-[400%] aspect-video -translate-x-1/2 -translate-y-1/2 group-hover:scale-[1.05] transition-transform duration-700 ease-in-out pointer-events-none z-0"
                                title="cities/medinas"
                            ></iframe>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                                <h3 className="text-white font-serif text-3xl md:text-4xl tracking-wide mb-2">Cities & Medinas</h3>
                                <span className="text-[#00AEEF] text-xs font-bold tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    EXPLORE LOCATION &rarr;
                                </span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative w-full aspect-[3/4] md:min-h-[500px] rounded-sm overflow-hidden group cursor-pointer">
                            <iframe 
                                src="https://player.vimeo.com/video/1188901927?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1" 
                                frameBorder="0" 
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                                className="absolute top-1/2 left-1/2 w-[350%] md:w-[250%] aspect-video -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform duration-700 ease-in-out pointer-events-none z-0"
                                title="desert/oasis"
                            ></iframe>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                                <h3 className="text-white font-serif text-3xl md:text-4xl tracking-wide mb-2">Desert & Oasis</h3>
                                <span className="text-[#00AEEF] text-xs font-bold tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    EXPLORE LOCATION &rarr;
                                </span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative w-full aspect-[3/4] md:min-h-[500px] rounded-sm overflow-hidden group cursor-pointer">
                            <iframe 
                                src="https://player.vimeo.com/video/1188900875?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1" 
                                frameBorder="0" 
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                                className="absolute top-1/2 left-1/2 w-[350%] md:w-[250%] aspect-video -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform duration-700 ease-in-out pointer-events-none z-0"
                                title="mountains/gorges"
                            ></iframe>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                                <h3 className="text-white font-serif text-3xl md:text-4xl tracking-wide mb-2">Mountains & Gorges</h3>
                                <span className="text-[#00AEEF] text-xs font-bold tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    EXPLORE LOCATION &rarr;
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <Link 
                        href="/localisation" 
                        className="inline-block bg-[#00AEEF] text-white px-10 py-4 rounded-sm text-xs font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] text-center border-none"
                    >
                        EXPLORE MORE
                    </Link>
                </div>
            </section>

            {/* 6. SELECTED CREDITS */}
            <section className="w-full bg-white pt-16 md:pt-24 pb-24 md:pb-32 relative overflow-hidden">
                {/* Animated Background (5 Infinite Ribbons) - Spans full section height */}
                <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-between py-10 overflow-hidden">
                    {Array.from({ length: 5 }).map((_, rowIndex) => {
                        const isEven = rowIndex % 2 === 0;
                        const duration = 35 + (rowIndex * 7);
                        return (
                            <div key={rowIndex} className="flex whitespace-nowrap overflow-hidden">
                                <motion.div
                                    animate={{ x: isEven ? ["0%", "-50%"] : ["-50%", "0%"] }}
                                    transition={{ ease: "linear", duration: duration, repeat: Infinity }}
                                    className="flex gap-20 md:gap-32 items-center w-max"
                                >
                                    {[...clientLogos, ...clientLogos].map((img, i) => {
                                        const isSpecialLogo = img === "/clients/9.png";
                                        return (
                                            <img
                                                key={i}
                                                src={img}
                                                alt="Client Logo"
                                                className={`h-10 md:h-16 object-contain ${
                                                    isSpecialLogo 
                                                        ? "opacity-[0.4] md:opacity-[0.5]" 
                                                        : "grayscale brightness-0 opacity-[0.06] md:opacity-[0.1]"
                                                }`}
                                            />
                                        );
                                    })}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
                    {/* Title */}
                    <div className="mb-16 md:mb-24 text-center">
                        <h2 className="font-serif text-4xl md:text-6xl text-black font-light tracking-tight relative z-20">
                            NOTABLE CREDITS
                        </h2>
                        <div className="w-24 h-[1px] bg-[#00AEEF] mx-auto mt-6 opacity-40" />
                    </div>
                </div>
                    
                <div className="w-full overflow-hidden mb-20 flex group/marquee relative z-10">
                        <motion.div 
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                            className="flex items-center flex-nowrap"
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex items-center flex-nowrap shrink-0">
                                    {[
                                        { title: 'Dirty Angels', image: '/works/dirty-angels.png' },
                                        { title: 'CIA Confidential', image: '/works/CIA%20CONFIDENTIAL.jpg' },
                                        { title: 'Black Angel', image: '/works/black.angel.jpg' },
                                        { title: 'Pegase', image: '/works/pegase.jpg' },
                                        { title: 'Clash of the Gods', image: '/works/clash.of.the.god.jpg' }
                                    ].map((item, idx) => (
                                        <div 
                                            key={`${i}-${idx}`}
                                            className="w-[45vw] md:w-[25vw] lg:w-[20vw] aspect-[2/3] bg-zinc-900 overflow-hidden relative group shrink-0"
                                        >
                                            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-110 transition-transform duration-700" />
                                            {/* Hover overlay with title */}
                                            <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center pointer-events-none">
                                                <span className="text-white font-serif text-lg tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center px-4">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>


                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
                    <Link 
                        href="/credits" 
                        className="inline-block bg-[#00AEEF] text-white px-10 py-4 rounded-sm text-xs font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] text-center border-none"
                    >
                        VIEW FULL CREDITS
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    )
}
