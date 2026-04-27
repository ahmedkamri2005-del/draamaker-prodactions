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

const ClapperboardIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="16" rx="2" />
        <path d="M7 3v5" />
        <path d="M16 3v5" />
        <path d="M2 8h20" />
        <path d="M7 8l2-5" />
        <path d="M16 8l2-5" />
    </svg>
)

const MapPinIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
    </svg>
)

const DocumentCheckIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
    </svg>
)

const UsersIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-2a5 5 0 0 1 5-5h2" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M13 21v-1.5a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4V21" />
    </svg>
)

const serviceIcons: Record<string, React.ReactNode> = {
    "Line Production": <ClapperboardIcon />,
    "Location Logistics": <MapPinIcon />,
    "Government Permits": <DocumentCheckIcon />,
    "Crews & Vendors": <UsersIcon />,
}

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
                                    {/* SVG Icon */}
                                    <motion.span
                                        initial={false}
                                        animate={{ opacity: activeTab === index ? 1 : 0.3 }}
                                        transition={{ duration: 0.3 }}
                                        className="shrink-0"
                                    >
                                        {serviceIcons[service.title]}
                                    </motion.span>
                                    <h4 className={`text-xl md:text-2xl font-bold tracking-wider transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-gray-600'}`}>
                                        {service.title}
                                    </h4>
                                </div>
                                {/* Underline on active */}
                                {activeTab === index && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute -bottom-2 left-8 right-0 h-[1px] bg-blue-500/30"
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
