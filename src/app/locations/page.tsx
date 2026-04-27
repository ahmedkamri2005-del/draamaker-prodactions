'use client'

import { motion } from 'framer-motion'
import BackHome from '../../components/ui/BackHome'

const categories = [
    {
        number: '01',
        title: 'CITIES',
        locations: [
            { name: 'Marrakech Medina', src: '/locali/marrakech3.webp' },
            { name: 'Casablanca', src: '/locali/casa.jpg' },
            { name: 'Chefchaouen', src: '/locali/Chefchaouen.jpg' },
        ],
    },
    {
        number: '02',
        title: 'MOUNTAINS',
        locations: [
            { name: 'High Atlas', src: '/locali/atlas-Mountains-in-Morocco.webp' },
            { name: 'Dades Gorge', src: '/locali/dreamaker-locations-2.jpg' },
            { name: 'Toubkal', src: '/locali/atlas-mountains.jpg' },
        ],
    },
    {
        number: '03',
        title: 'LAKES & OASIS',
        locations: [
            { name: 'Bin El Ouidane', src: '/locali/lake.png' },
            { name: 'Fint Oasis', src: '/locali/lakes2.jpg' },
            { name: 'Lalla Takerkoust', src: '/locali/lakes.jpg' },
        ],
    },
    {
        number: '04',
        title: 'DESERT & DUNES',
        locations: [
            { name: 'Merzouga', src: '/locali/merzouga-maroc.jpeg' },
            { name: 'Agafay', src: '/locali/ourzazat.png' },
            { name: 'Zagora', src: '/locali/merzouga.jpg' },
        ],
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' as const, delay: i * 0.1 },
    }),
}

export default function LocationsPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <BackHome />

            {/* Hero */}
            <section className="pt-8 pb-16 px-8 md:px-16 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <p className="text-blue-500 text-sm font-bold tracking-[0.25em] uppercase mb-4">
                        Morocco Film
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] mb-6 max-w-4xl">
                        Filming Locations
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                        From ancient medinas to the Sahara desert, explore Morocco's diverse
                        cinematic landscapes.
                    </p>
                </motion.div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 max-w-7xl mx-auto px-8 md:px-16" />

            {/* Category sections */}
            {categories.map((cat, catIdx) => (
                <section
                    key={cat.number}
                    className="py-20 px-8 md:px-16 max-w-7xl mx-auto"
                >
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="flex items-baseline gap-5 mb-10"
                    >
                        <span className="text-blue-500 font-mono text-sm font-bold tracking-widest">
                            {cat.number}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase">
                            {cat.title}
                        </h2>
                        <div className="flex-1 h-px bg-gray-200 ml-4" />
                    </motion.div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cat.locations.map((loc, locIdx) => (
                            <motion.div
                                key={loc.name}
                                custom={locIdx}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="group relative overflow-hidden bg-gray-100 cursor-pointer"
                            >
                                {/* Image */}
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={loc.src}
                                        alt={loc.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                {/* Label */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <p className="text-white text-base font-bold tracking-[0.1em] uppercase">
                                        {loc.name}
                                    </p>
                                    <motion.div
                                        className="h-[2px] bg-blue-500 mt-2"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '40px' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + locIdx * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            ))}

            {/* Bottom CTA */}
            <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto border-t border-gray-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                            Need a specific location?
                        </h3>
                        <p className="text-gray-500">Our scouts know every corner of Morocco.</p>
                    </div>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-blue-500 transition-colors duration-300 shrink-0"
                    >
                        Talk to a Scout
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </section>

        </main>
    )
}
