'use client'

import { motion } from 'framer-motion'

const locationsData = [
    {
        title: "Marrakech",
        description: "The vibrant red city offers bustling medinas, historic palaces, and incredible textures perfect for an exotic cinematic backdrop.",
        images: [
            "/locali/marrakeche1.jpg",
            "/images/dreamaker-locations-8.jpg",
            "/images/dreamaker-locations-4.jpg"
        ]
    },
    {
        title: "Ouarzazate",
        description: "Known as the Hollywood of Africa, Ouarzazate features sweeping desert landscapes, ancient kasbahs, and massive world-class studios.",
        images: [
            "/locali/ourzazat.png",
            "/images/dreamaker-locations-7.jpg",
            "/images/dreamaker-setup-6.jpg"
        ]
    },
    {
        title: "Sahara / Merzouga",
        description: "Endless oceans of golden sand dunes provide some of the most striking and isolated desert visuals on the planet.",
        images: [
            "/locali/merzouga.jpg",
            "/images/dreamaker-planning-1.jpg",
            "/images/dreamaker-planning-8.jpg"
        ]
    },
    {
        title: "Chefchaouen",
        description: "The blue pearl of Morocco. Its unique color palette and mountainous terrain offer a surreal and breathtaking atmosphere.",
        images: [
            "/locali/Chefchaouen.jpg",
            "/images/dreamaker-setup-2.jpg",
            "/images/dreamaker-production-47.jpg"
        ]
    }
]

export default function LocationsPage() {
    return (
        <div className="min-h-screen text-white selection:bg-white selection:text-black pt-20">
            <section className="w-full bg-white text-black py-16 lg:py-24 overflow-hidden m-0">
                <div className="max-w-7xl mx-auto px-8 md:px-16">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-24"
                    >
                        <h3 className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">Location Database</h3>
                        <h2 className="text-5xl md:text-6xl font-serif text-black leading-tight">Explore the Regions.</h2>
                    </motion.div>

                    {/* Cities Array */}
                    <div className="flex flex-col gap-32">
                        {locationsData.map((city, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="flex flex-col lg:flex-row gap-12 items-center"
                            >
                                {/* Left Side (Text - 35% width) */}
                                <div className="w-full lg:w-[35%]">
                                    <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">{city.title}</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {city.description}
                                    </p>
                                </div>

                                {/* Right Side Hover Image Ribbon (65% width) */}
                                <div className="w-full lg:w-[65%] overflow-hidden group cursor-ew-resize relative rounded-2xl">
                                    {/* The Sliding Track */}
                                    <div className="flex gap-4 transition-transform duration-1000 ease-out lg:group-hover:-translate-x-[45%]">
                                        {city.images.map((img, i) => (
                                            <div key={i} className="w-[85%] lg:w-[55%] flex-shrink-0 aspect-[4/3] rounded-xl overflow-hidden">
                                                <img src={img} alt={`${city.title} imagery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
