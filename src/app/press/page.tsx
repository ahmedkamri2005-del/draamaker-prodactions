'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import BackHome from '../../components/ui/BackHome'

export default function PressPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <BackHome />
            <section className="max-w-5xl mx-auto px-8 py-8 md:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <p className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">Media</p>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                        Press
                    </h1>
                    <p className="text-gray-600 text-xl max-w-2xl leading-relaxed mb-12">
                        For press inquiries, interview requests, or media assets, please get in touch with our team directly.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-blue-500 transition-colors duration-300"
                    >
                        Contact Us
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </section>
        </main>
    )
}
