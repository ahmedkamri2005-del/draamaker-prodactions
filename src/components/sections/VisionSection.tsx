'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

/* ─── Data ─── */
const capabilities = [
    {
        num: '01',
        title: 'Shooting Permits & Locations',
        desc: 'We cover every major environment category in Morocco with active scouting. Our team secures all necessary government permits, including aerial operations and sensitive locations, ensuring a seamless workflow.',
        image: '/pics.of.dmp/home/shouting.locations.webp',
    },
    {
        num: '02',
        title: 'Equipment & Camera Gear',
        desc: 'We offer state-of-the-art lighting, grip, and camera support for productions of all scales. Our full premium inventory is available strictly through our dedicated Dreamaker Equipment catalogue.',
        image: '/pics.of.dmp/home/Equipment.Camera.Gear.webp',
    },
    {
        num: '03',
        title: 'Studios & Built Environments',
        desc: 'We provide access to full-specification sound stages and established backlots—including Egyptian, Roman, and medieval sets—along with custom set construction to suit your creative needs.',
        image: '/pics.of.dmp/home/Studios.&.Built.Environments.webp',
    },
]

/* ─── Framer Motion helpers ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: i * 0.15 },
    }),
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
        opacity: 1,
        transition: { duration: 1, ease: 'easeOut' as const, delay: i * 0.1 },
    }),
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const, delay: i * 0.18 },
    }),
}

/* ─── Component ─── */
const VisionSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    // Subtle parallax for the accent line
    const accentWidth = useTransform(scrollYProgress, [0, 0.3], ['0%', '100%'])

    return (
        <>
            {/* ═══════════════════════════════════════════════
                PART 1 — OUR VISION (Editorial Split Layout)
               ═══════════════════════════════════════════════ */}
            <section
                ref={sectionRef}
                className="relative w-full bg-zinc-950 py-12 lg:py-16 px-6 lg:px-16 overflow-hidden"
            >
                {/* Subtle grain overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                        {/* ── Left Column (40%) — Sticky ── */}
                        <div className="w-full lg:w-[40%]">
                            <div className="lg:sticky lg:top-32">
                                {/* Title */}
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-80px' }}
                                    className="mb-6 text-center lg:text-left flex flex-col items-center lg:items-start"
                                >
                                    <span className="text-[#00AEEF] text-xs font-bold tracking-[0.35em] uppercase block mb-4">
                                        Who We Are
                                    </span>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.9]">
                                        Our
                                        <br />
                                        Vision
                                    </h2>
                                    {/* Sky Blue accent line */}
                                    <motion.div
                                        style={{ width: accentWidth }}
                                        className="h-[2px] bg-gradient-to-r from-[#00AEEF] to-transparent mt-6 max-w-[120px]"
                                    />
                                </motion.div>

                                {/* Cinematic image */}
                                <motion.div
                                    variants={scaleIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-80px' }}
                                    className="relative aspect-video lg:aspect-[4/3] max-h-[45vh] overflow-hidden group rounded-sm shadow-xl mx-auto lg:mx-0"
                                >
                                    <img
                                        src="/pics.of.dmp/home/our.vesion.webp"
                                        alt="Behind the scenes — Dreamaker Productions on set"
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                    />
                                    {/* Subtle gradient overlay removed at user request */}
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#00AEEF]/40 via-[#00AEEF]/20 to-transparent" />
                                </motion.div>
                            </div>
                        </div>

                        {/* ── Right Column (60%) — Editorial paragraphs ── */}
                        <div className="w-full lg:w-[60%] flex flex-col justify-center">
                            <div className="flex flex-col gap-3 lg:gap-4 lg:pl-8">
                                {/* Unified Paragraph */}
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-60px' }}
                                    custom={0}
                                >
                                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 text-center lg:text-left">
                                        <span className="text-[#00AEEF]/20 text-7xl lg:text-8xl font-black leading-none select-none -mt-3 hidden lg:block">
                                            "
                                        </span>
                                        <p className="text-white/90 text-base md:text-lg lg:text-xl font-medium leading-normal lg:leading-[1.6] m-0">
                                            Founded in 1999, Dreamaker Productions has grown into one of Morocco&apos;s most trusted gateways for international filmmaking, combining world-class production standards with a deep understanding of the country&apos;s artistic, cultural, and logistical landscape. Led by Fouad &ldquo;Fred&rdquo; Challa, a Moroccan producer educated in the United States and a UCLA graduate, Dreamaker brings a rare blend of global perspective, local authority, and cinematic instinct to every project. For more than two decades, the company has helped leading international clients transform ambitious creative visions into powerful screen realities, while opening Morocco&apos;s doors to the world as a destination of extraordinary landscapes, rich heritage, and unmatched visual diversity. More than a production service company, Dreamaker is a creative partner, a cultural bridge, and a proud ambassador of Morocco&apos;s place on the global cinematic stage.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* CTA */}
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={3}
                                    className="pt-4 flex justify-center lg:justify-start lg:pl-16"
                                >
                                    <Link
                                        href="/about"
                                        className="inline-block bg-[#00AEEF] text-white px-10 py-4 rounded-sm text-xs font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] text-center border-none"
                                    >
                                        LEARN MORE ABOUT US
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                PART 2 — CORE CAPABILITIES (Numbered Grid)
               ═══════════════════════════════════════════════ */}
            <section className="relative w-full bg-zinc-950 py-12 lg:py-16 px-6 lg:px-16 overflow-hidden">
                {/* Top border accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* ── Section header ── */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="text-center mb-8 lg:mb-12"
                    >
                        <span className="text-[#00AEEF] text-xs font-bold tracking-[0.35em] uppercase block mb-4">
                            Beyond the Lens
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                            Our Core
                            <br />
                            Capabilities
                        </h2>
                    </motion.div>

                    {/* ── Grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {capabilities.map((item, index) => (
                            <motion.div
                                key={item.num}
                                variants={scaleIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                custom={index}
                                className="group relative h-full"
                            >
                                {/* Card */}
                                <div className="relative flex flex-col h-full overflow-hidden rounded-sm bg-zinc-900/50 border border-white/[0.04] transition-all duration-500 hover:border-[#00AEEF]/20 hover:bg-zinc-900/80">
                                    {/* Image */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                                        />


                                        {/* Large background number */}
                                        <span className="absolute top-2 right-4 text-[4rem] md:text-[5rem] lg:text-[6rem] font-black text-white/[0.06] leading-none select-none pointer-events-none transition-colors duration-500 group-hover:text-[#00AEEF]/[0.10]">
                                            {item.num}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-5 lg:p-6 flex-1">
                                        {/* Accent line */}
                                        <div className="w-8 h-[2px] bg-[#00AEEF]/40 mb-5 transition-all duration-500 group-hover:w-12 group-hover:bg-[#00AEEF]" />

                                        <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-tight mb-3 transition-colors duration-300 group-hover:text-[#00AEEF]">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/50 text-sm md:text-[0.9rem] font-medium leading-relaxed transition-colors duration-300 group-hover:text-white/70">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* ── Footer CTA ── */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex justify-center mt-10 lg:mt-12"
                    >
                        <Link
                            href="/services"
                            className="inline-block bg-[#00AEEF] text-white px-10 py-4 rounded-sm text-xs font-extrabold tracking-widest uppercase transition-all duration-300 hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] text-center border-none"
                        >
                            VIEW ALL SERVICES
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default VisionSection
