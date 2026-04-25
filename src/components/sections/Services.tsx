'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const servicesData = [
    {
        title: "Line Production",
        description: "Comprehensive line production management from start to finish.",
        image: "/studios/dulcie 2 - Copy.jpeg"
    },
    {
        title: "Location Logistics",
        description: "Elite location scouting and seamless logistical operations.",
        image: "/studios/dulcie 3 - Copy.jpeg"
    },
    {
        title: "Government Permits",
        description: "Direct government liaison for all necessary filming permits.",
        image: "/studios/DSC00c511-1-1024x683.png"
    },
    {
        title: "Crews & Vendors",
        description: "Professional sourcing of world-class technical crews and equipment vendors.",
        image: "/studios/DSC00506-1-1024x689.jpg"
    }
]

const Services = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section id="services" className="relative w-full bg-black text-white py-12 md:py-24 px-8 lg:px-16 m-0 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Column (Navigation) */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">OUR SERVICES</h3>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">End-to-End Solutions.</h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                            From prep to wrap, our team handles the complex production reality so you can focus entirely on the cinematic art.
                        </p>
                    </div>

                    {/* Vertical Tabs List */}
                    <nav className="flex flex-col gap-6">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveTab(index)}
                                className="group relative cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    {/* Active Indicator (Dot) */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            scale: activeTab === index ? 1 : 0,
                                            opacity: activeTab === index ? 1 : 0
                                        }}
                                        className="w-2 h-2 rounded-full bg-blue-500"
                                    />
                                    <h4 className={`text-xl md:text-2xl font-bold tracking-wider transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-gray-600'}`}>
                                        {service.title}
                                    </h4>
                                </div>
                                {/* Underline on active */}
                                {activeTab === index && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute -bottom-2 left-6 right-0 h-[1px] bg-blue-500/30"
                                    />
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Right Column (Dynamic Reveal) */}
                <div className="space-y-8 lg:mt-12">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-white/5 shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                src={servicesData[activeTab].image}
                                alt={servicesData[activeTab].title}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Synchronized Description Area */}
                    <div className="min-h-[100px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-gray-400 text-lg leading-relaxed font-sans font-light">
                                    {servicesData[activeTab].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services
