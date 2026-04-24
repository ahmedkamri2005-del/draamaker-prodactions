'use client'

import { motion } from 'framer-motion'
import Reveal from '../Reveal'

const projects = [
    {
        title: "The Silent Echo",
        category: "Commercial",
        image: "/works/emir.webp"
    },
    {
        title: "Midnight Fly",
        category: "Documentary",
        image: "/works/midnight-fly.png"
    },
    {
        title: "Garden of Aden",
        category: "Cinematic Narrative",
        image: "/works/garden-of-aden.png"
    },
    {
        title: "Desert Chronicles",
        category: "Short Film",
        image: "/projects/desert-natgeo.jpg"
    }
]

const FeaturedWork = () => {
    return (
        <section id="work" className="bg-foreground py-32 px-10">
            <div className="max-w-[1800px] mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <Reveal>
                        <h2 className="text-white font-serif text-6xl md:text-8xl uppercase leading-[0.8]">
                            FEATURED <br />
                            <span className="text-gold">WORK</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="text-white/40 text-sm tracking-[0.2em] uppercase max-w-xs mb-4">
                            A selection of our most prestigious productions across the globe.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-0 overflow-hidden">
                    {projects.map((project, index) => (
                        <Reveal key={index} width="100%">
                            <div className="relative aspect-[16/10] overflow-hidden group cursor-pointer">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-2"
                                    >
                                        <p className="text-gold text-[10px] tracking-[0.3em] font-bold uppercase">{project.category}</p>
                                        <h3 className="text-white font-serif text-4xl uppercase">{project.title}</h3>
                                        <div className="w-12 h-[1px] bg-white/40 mt-4" />
                                    </motion.div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Reveal>
                        <button className="px-12 py-5 border border-white/20 text-white text-[12px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
                            View All Projects
                        </button>
                    </Reveal>
                </div>

            </div>
        </section>
    )
}

export default FeaturedWork
