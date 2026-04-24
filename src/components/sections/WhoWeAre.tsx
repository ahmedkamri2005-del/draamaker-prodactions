'use client'

import { motion } from 'framer-motion'

const WhoWeAre = () => {
    return (
        <section id="about" className="relative w-full bg-white text-black py-12 md:py-16 lg:py-24 px-6 lg:px-16 m-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column (Text Content - Catalog Match) */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h3 className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase mb-6">Who We Are</h3>
                    <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif leading-tight mb-8">A Legacy of Excellence since 1999.</h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                        Founded in 1999, Dreamaker Productions is an Emmy Award-winning Moroccan company delivering end-to-end production services for international feature films, series, and commercials.
                    </p>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        We combine local access with international production standards—managing everything from budgets and permits to state-of-the-art equipment and security.
                    </p>
                    <div className="inline-flex items-center gap-3 border border-gray-200 px-6 py-3 rounded-full">
                        <span className="text-blue-600 font-bold">30%</span>
                        <span className="text-xs tracking-widest uppercase font-semibold">Cash Rebate Available</span>
                    </div>
                </motion.div>

                {/* Right Column (Cinematic Image Grid) */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]"
                >
                    <div className="col-span-1 row-span-2 relative rounded-lg overflow-hidden">
                        <img src="/images/dreamaker-setup-2.jpg" alt="Crew on set" className="object-cover w-full h-full" />
                    </div>
                    <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden">
                        <img src="/images/dreamaker-locations-4.jpg" alt="Moroccan location" className="object-cover w-full h-full" />
                    </div>
                    <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden">
                        <img src="/images/dreamaker-setup-6.jpg" alt="Production setup" className="object-cover w-full h-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhoWeAre
