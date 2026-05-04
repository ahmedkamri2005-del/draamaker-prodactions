'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const featuredData = [
    {
        title: "Shooting Permits & Locations",
        text: "We scout your ideal locations, secure all necessary government, police, and fire permits, and smoothly coordinate the logistics so your production can run without a hitch.",
        image: "/new pic/koh2.jpg"
    },
    {
        title: "Premium Filming Equipment",
        text: "Through our sister company MFERS, we provide top-tier gear maintained by internationally trained technicians. Our arsenal features ARRI M series, Scorpio, Chapman Pee Wee dollies, and the latest L.E.D lighting.",
        image: "/new pic/camera.jpeg"
    },
    {
        title: "Aerial & Drone Services",
        text: "Looking for easily achievable, high-definition or 4K aerial cinematography? Our state-of-the-art drone filming services deliver breathtaking perspectives for your project.",
        image: "/images/services.jpg"
    }
]

const VisionServicesParallax = () => {
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <section className="relative w-full overflow-hidden">
            {/* PARALLAX MASTER CONTAINER */}
            <div 
                className="relative w-full bg-fixed bg-cover bg-center min-h-screen py-12 lg:py-24"
                style={{ backgroundImage: "url('/images/dreamaker-dreamaker-productions-on-set.png')" }}
            >
                {/* GRADIENT OVERLAY (Left to Right) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20 z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
                    
                    {/* PART 1: OUR VISION - SYMMETRIC 100VH SNAP */}
                    <div className="min-h-[50vh] lg:h-screen flex items-center justify-center overflow-hidden py-8 lg:py-20 mb-4 lg:mb-12">
                        <div className="flex flex-row items-stretch lg:grid lg:grid-cols-12 gap-4 lg:gap-16 items-center w-full max-h-full">
                            {/* Left Side: Symmetric Vertical Floating Images */}
                            <div className="w-[40%] lg:col-span-6 flex flex-col items-center justify-center">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center gap-4 lg:gap-6"
                                >
                                    {/* Fouad Image (Reference Frame) */}
                                    <div className="w-full max-w-[320px] lg:max-w-[420px] max-h-[32vh] aspect-[3/2] relative">
                                        <img 
                                            src="/images/WhatsApp Image 2026-04-29 at 17.16.32.jpeg" 
                                            alt="Leadership" 
                                            className="w-full h-full object-cover object-center drop-shadow-2xl"
                                        />
                                    </div>
                                    {/* Cameraman Image (Matched Frame) */}
                                    <div className="w-full max-w-[320px] lg:max-w-[420px] max-h-[32vh] aspect-[3/2] relative">
                                        <img 
                                            src="/images/about.us.jpeg" 
                                            alt="Production" 
                                            className="w-full h-full object-cover object-center drop-shadow-2xl"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Side: Transparent Text Card (Tightened & Centered) */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="w-[60%] lg:col-span-6 bg-white/60 backdrop-blur-md shadow-2xl p-3 lg:py-8 lg:px-12"
                            >
                                <h2 className="text-sm lg:text-3xl font-black uppercase tracking-tighter text-black mb-2 lg:mb-4">
                                    OUR VISION
                                </h2>
                                <div className="space-y-2 lg:space-y-5">
                                    <p className="text-[10px] lg:text-base text-black font-sans font-medium leading-relaxed">
                                        Founded in 1999, Dreamaker Productions has grown into one of Morocco’s most trusted gateways for international filmmaking, combining world-class production standards with a deep understanding of the country’s artistic, cultural, and logistical landscape.
                                    </p>
                                    <p className="text-[10px] lg:text-base text-black font-sans font-medium leading-relaxed">
                                        For more than two decades, we have helped leading international clients transform ambitious creative visions into powerful screen realities, while opening Morocco’s doors to the world as a destination of extraordinary landscapes, rich heritage, and unmatched visual diversity.
                                    </p>
                                    <p className="text-[10px] lg:text-base text-black font-sans font-medium leading-relaxed">
                                        Led by Fouad 'Fred' Challa, a Moroccan producer educated in the United States and a UCLA graduate, Dreamaker brings a rare blend of global perspective, local authority, and cinematic instinct to every project.
                                    </p>
                                    <div className="pt-2 lg:pt-4">
                                        <Link 
                                            href="/about" 
                                            className="bg-[#009ED8] text-white px-3 py-2 lg:px-10 lg:py-3 text-[8px] lg:text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#008cc0] transition-all hover:scale-105 active:scale-95"
                                        >
                                            Beyond the Lens
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* PART 2: OUR CORE CAPABILITIES - 3D CENTER-FOCUSED CAROUSEL (Scaled Down) */}
                    <div className="flex flex-col justify-center items-center pt-4 lg:pt-2 pb-4 lg:pb-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/60 backdrop-blur-md shadow-2xl border border-white/20 pt-6 lg:pt-10 pb-6 lg:pb-12 px-6 lg:px-10 max-w-5xl w-full mx-auto"
                            onMouseLeave={() => setActiveIndex(1)}
                        >
                            <div className="flex flex-col items-center mb-4 lg:mb-6">
                                <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter text-black text-center">
                                    OUR CORE CAPABILITIES
                                </h2>
                            </div>

                            <div className="flex justify-center items-stretch gap-3 md:gap-6 min-h-fit w-full">
                                {featuredData.map((item, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <div 
                                            key={index} 
                                            onMouseEnter={() => setActiveIndex(index)}
                                            onClick={() => setActiveIndex(index)}
                                            className={`
                                                relative flex flex-col transition-all duration-700 ease-in-out cursor-pointer
                                                ${isActive ? 'flex-[2] scale-105 z-20' : 'flex-1 scale-95 z-0'}
                                            `}
                                        >
                                            <div className={`relative aspect-[3/4] md:aspect-video lg:aspect-[16/10] overflow-hidden mb-4 shadow-2xl transition-all duration-700 ${isActive ? 'brightness-100' : 'brightness-50 blur-[2px]'}`}>
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-1000"
                                                />
                                                <div className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                                            </div>
                                            <div className="transition-all duration-500 text-center opacity-100 translate-y-0">
                                                <h3 className="text-sm md:text-lg lg:text-xl font-serif font-black text-black mb-2 uppercase tracking-tight leading-tight">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-900 font-sans text-[9px] md:text-xs font-medium leading-relaxed px-2 line-clamp-3 md:line-clamp-none">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="flex justify-center mt-6 lg:mt-12">
                                <Link 
                                    href="/services" 
                                    className="bg-[#009ED8] text-white px-10 py-3 text-[10px] lg:text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#008cc0] transition-all hover:scale-105 active:scale-95"
                                >
                                    MORE SERVICES
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default VisionServicesParallax
