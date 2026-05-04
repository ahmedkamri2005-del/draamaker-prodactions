'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const TeamVision = () => {
    return (
        <section id="vision" className="relative w-full min-h-screen lg:h-screen bg-white pt-12 pb-32 lg:py-0 flex items-center lg:items-start lg:pt-32 px-6 lg:px-16 overflow-x-hidden">
            <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-center">
                
                {/* ASYMMETRIC IMAGE CLUSTER (Left Side - Col 1-7) */}
                <div className="lg:col-span-7 relative flex items-center justify-center order-1 lg:order-1 mt-4 lg:mt-0 px-4 lg:px-0">
                    {/* MAIN IMAGE (Staff) */}
                    <div className="relative w-full lg:w-[115%] aspect-video z-10 lg:-translate-x-4">
                        <motion.img 
                            initial={{ opacity: 0, scale: 1.05 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            src="/images/dreamaker-dreamaker-productions-on-set.png" 
                            alt="Staff"
                            className="w-full h-full object-cover shadow-2xl"
                        />
                    </div>
                    
                    {/* TOP IMAGE (Fouad Clipping) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20, y: -20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="absolute top-[-20%] lg:top-[-20%] right-[-2%] lg:right-[-8%] w-[45%] lg:w-[50%] aspect-video z-20"
                    >
                        <img 
                            src="/images/WhatsApp Image 2026-04-29 at 17.16.32.jpeg" 
                            alt="Leadership"
                            className="w-full h-full object-cover shadow-2xl"
                        />
                    </motion.div>

                    {/* BOTTOM IMAGE (About Us) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-[-30%] lg:bottom-[-30%] left-[2%] lg:left-[0%] w-[45%] lg:w-[50%] aspect-video z-30"
                    >
                        <img 
                            src="/images/about.us.jpeg" 
                            alt="Team"
                            className="w-full h-full object-cover shadow-2xl"
                        />
                    </motion.div>
                </div>

                {/* TEXT STRUCTURE (Right Side - Col 8-12) */}
                <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-12 order-2 lg:order-2">
                    {/* TITLE */}
                    <motion.h2 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-2 -ml-3 md:-ml-6"
                    >
                        OUR VISION
                    </motion.h2>

                    <div className="flex flex-col gap-5">
                        {/* PARAGRAPH 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <p className="text-sm md:text-base text-gray-900 leading-tight font-sans">
                                Founded in 1999, Dreamaker Productions has grown into one of Morocco’s most trusted gateways for international filmmaking, combining world-class production standards with a deep understanding of the country’s artistic, cultural, and logistical landscape.
                            </p>
                        </motion.div>

                        {/* PARAGRAPH 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-sm md:text-base text-gray-900 leading-tight font-sans">
                                For more than two decades, we have helped leading international clients transform ambitious creative visions into powerful screen realities, while opening Morocco’s doors to the world as a destination of extraordinary landscapes, rich heritage, and unmatched visual diversity.
                            </p>
                        </motion.div>

                        {/* PARAGRAPH 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <p className="text-sm md:text-base text-gray-900 leading-tight font-sans">
                                Led by Fouad 'Fred' Challa, a Moroccan producer educated in the United States and a UCLA graduate, Dreamaker brings a rare blend of global perspective, local authority, and cinematic instinct to every project. Dreamaker is a creative partner, a cultural bridge, and a proud ambassador of Morocco’s place on the global cinematic stage.
                            </p>
                        </motion.div>
                    </div>

                    {/* CTA BUTTON */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex justify-center lg:justify-start pt-2"
                    >
                        <Link 
                            href="/about" 
                            className="inline-block bg-[#00AEEF] text-white px-16 py-4 rounded-sm uppercase font-extrabold tracking-widest text-xs transition-all duration-300 hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] border-none text-center"
                        >
                            Beyond the Lens
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default TeamVision
