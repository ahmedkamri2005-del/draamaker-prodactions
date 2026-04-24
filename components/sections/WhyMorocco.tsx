'use client'

import { motion } from 'framer-motion'

const WhyMorocco = () => {
    return (
        <section id="locations" className="relative bg-gray-50 py-12 md:py-16 lg:py-24 px-6 lg:px-16 w-full m-0">
            <div className="max-w-7xl mx-auto">
                {/* Text Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h3 className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 text-center">Why Morocco</h3>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black leading-tight mb-6 text-center">A Land of Infinite Possibilities.</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center mb-16">
                        From golden dunes and snow-capped mountains to historic medinas and modern cityscapes. Morocco offers a diverse, world-class backdrop for any cinematic vision.
                    </p>
                </motion.div>

                {/* The Location Gallery (Masonry-style Grid) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]"
                >
                    {/* Image 1 (Large/Span 2) */}
                    <div className="col-span-1 md:col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
                        <img src="/locali/marrakeche1.jpg" alt="Marrakech" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest uppercase text-sm drop-shadow-md z-10 transition-transform duration-500 group-hover:-translate-y-1">Marrakech</span>
                    </div>

                    {/* Image 2 */}
                    <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group">
                        <img src="/locali/Chefchaouen.jpg" alt="Chefchaouen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                        <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest uppercase text-xs drop-shadow-md z-10 transition-transform duration-500 group-hover:-translate-y-1">Chefchaouen</span>
                    </div>

                    {/* Image 3 */}
                    <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden group">
                        <img src="/locali/merzouga.jpg" alt="Merzouga Dunes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                        <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest uppercase text-xs drop-shadow-md z-10 transition-transform duration-500 group-hover:-translate-y-1">Merzouga</span>
                    </div>

                    {/* Image 4 */}
                    <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group">
                        <img src="/locali/ourzazat.png" alt="Ouarzazate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                        <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest uppercase text-xs drop-shadow-md z-10 transition-transform duration-500 group-hover:-translate-y-1">Ouarzazate</span>
                    </div>

                    {/* Image 5 */}
                    <div className="col-span-1 md:col-span-2 row-span-1 relative rounded-xl overflow-hidden group">
                        <img src="/locali/atlas-mountains.jpg" alt="Atlas Mountains" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
                        <span className="absolute bottom-4 left-4 text-white font-bold tracking-widest uppercase text-xs drop-shadow-md z-10 transition-transform duration-500 group-hover:-translate-y-1">Atlas Mountains</span>
                    </div>

                    {/* Explore All Link Card */}
                    <a href="/locations" className="col-span-1 row-span-1 bg-black rounded-xl flex flex-col justify-center items-center group cursor-pointer p-8 transition-transform duration-500 hover:scale-[1.02]">
                        <span className="text-white text-lg font-bold tracking-widest uppercase text-center mb-4">Explore All Locations</span>
                        <span className="text-[#0ea5e9] text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyMorocco
