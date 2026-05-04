'use client'

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

const FeaturedServices = () => {
    return (
        <section className="w-full lg:h-screen bg-white py-6 lg:py-0 flex items-center px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* SECTION HEADER */}
                <div className="flex flex-col items-center mb-6 lg:mb-8">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-2 text-center"
                    >
                        OUR CORE CAPABILITIES
                    </motion.h2>
                </div>

                {/* CINEMATIC GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {featuredData.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group flex flex-col"
                        >
                            {/* IMAGE CONTAINER */}
                            <div className="relative aspect-video overflow-hidden mb-3 rounded-none bg-gray-100">
                                <motion.img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-none group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>

                            {/* CONTENT */}
                            <div className="space-y-1">
                                <h3 className="text-xl lg:text-2xl font-serif font-bold text-black leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 font-sans text-sm lg:text-base leading-relaxed font-medium">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA BUTTON */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center mt-6 lg:mt-8"
                >
                    <Link 
                        href="/services" 
                        className="bg-[#009ED8] text-white px-8 py-3 rounded-none text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#008cc0] hover:scale-105 active:scale-95"
                    >
                        EXPLORE FULL PRODUCTION SLATE ⟶
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default FeaturedServices
