'use client'

import { motion } from 'framer-motion'
import BackHome from '../../components/ui/BackHome'

export default function AboutPage() {
    return (
        <main className="bg-white text-black min-h-screen pb-20 overflow-hidden">
            <BackHome />

            {/* --- SECTION 1: Editorial Hero --- */}
            <section className="px-6 text-center">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="font-borscha text-xs tracking-[0.5em] uppercase text-black/30 mb-8"
                >
                    Dreamaker Productions &middot; Est. 1998
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
                    className="font-borscha text-6xl md:text-8xl font-black tracking-tight uppercase leading-none mb-16"
                >
                    The Art of<br />Production.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                    className="w-[90%] mx-auto h-[60vh] overflow-hidden rounded-sm shadow-2xl"
                >
                    <img
                        src="/images/dreamaker-dreamaker-productions-on-set.png"
                        alt="Dreamaker Productions on set"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </section>


            {/* --- SECTION 2: Numbers Grid --- */}
            <section className="border-t border-black/10 mt-24 pt-12 px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: 'easeOut' as const }}
                        className="flex flex-col items-center text-center py-10 md:px-8"
                    >
                        <span className="font-borscha text-7xl md:text-8xl font-black tracking-tight leading-none mb-3">
                            26+
                        </span>
                        <span className="font-borscha text-xs tracking-[0.4em] uppercase text-black/40">
                            Years of Excellence
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: 'easeOut' as const, delay: 0.1 }}
                        className="flex flex-col items-center text-center py-10 md:px-8"
                    >
                        <span className="font-borscha text-7xl md:text-8xl font-black tracking-tight leading-none mb-3">
                            1
                        </span>
                        <img
                            src="/emmy-trophy.png"
                            alt="Emmy Award"
                            className="h-12 w-auto mb-3 opacity-80"
                        />
                        <span className="font-borscha text-xs tracking-[0.4em] uppercase text-black/40">
                            Emmy Award Winner
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: 'easeOut' as const, delay: 0.2 }}
                        className="flex flex-col items-center text-center py-10 md:px-8"
                    >
                        <span className="font-borscha text-7xl md:text-8xl font-black tracking-tight leading-none mb-3">
                            100%
                        </span>
                        <span className="font-borscha text-xs tracking-[0.4em] uppercase text-black/40">
                            Global Standards
                        </span>
                    </motion.div>

                </div>
            </section>


            {/* --- SECTION 3: Story (Asymmetric) --- */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-12 mt-32 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, ease: 'easeOut' as const }}
                    className="h-[80vh] overflow-hidden rounded-sm shadow-xl"
                >
                    <img
                        src="/images/about.us.jpeg"
                        alt="About Dreamaker Productions"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, ease: 'easeOut' as const, delay: 0.15 }}
                    className="py-8"
                >
                    <p className="font-borscha text-sm tracking-[0.4em] uppercase text-black/40 mb-6">
                        Our Legacy
                    </p>
                    <p className="font-borscha text-3xl md:text-4xl leading-relaxed font-bold">
                        Dreamaker Productions is the definitive gateway to international filmmaking in Morocco.
                    </p>
                    <div className="w-12 h-px bg-black/20 my-8" />
                    <p className="text-black/50 text-base md:text-lg leading-relaxed max-w-md">
                        We blend local mastery with uncompromising global standards — delivering
                        cinematic worlds that resonate far beyond the screen.
                    </p>

                    <div className="mt-16 space-y-6">
                        {[
                            "Morocco's premier international production partner",
                            'Full-service studio & location scouting',
                            'In-house costume, armor & props department',
                        ].map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: 'easeOut' as const }}
                                className="flex items-start gap-4"
                            >
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                                <span className="font-borscha text-sm tracking-widest uppercase text-black/60">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.a
                        href="/contact"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' as const }}
                        className="inline-block mt-14 font-borscha uppercase tracking-[0.35em] text-sm border border-black/30 px-12 py-4 hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Work With Us
                    </motion.a>
                </motion.div>

            </section>

        </main>
    )
}
