'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import BackHome from '../../components/ui/BackHome'

export default function TaxRebatePage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <BackHome />
            <section className="max-w-5xl mx-auto px-8 py-8 md:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <p className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">Morocco Film</p>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                        Tax Rebate Programme
                    </h1>
                    <p className="text-gray-600 text-xl max-w-2xl leading-relaxed mb-12">
                        Morocco offers one of the most competitive film incentive programmes in Africa and the MENA region —
                        with a cash rebate of up to <span className="text-black font-semibold">30%</span> on qualifying production expenditures.
                        Dreamaker Productions guides international productions through the full application process from start to finish.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            { stat: '30%', label: 'Cash Rebate on Qualifying Spend' },
                            { stat: '€500K+', label: 'Minimum Production Budget' },
                            { stat: '100%', label: 'Managed Application Process' },
                        ].map((item) => (
                            <motion.div
                                key={item.stat}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="border-t-2 border-blue-500 pt-6"
                            >
                                <p className="text-4xl font-serif font-bold mb-2">{item.stat}</p>
                                <p className="text-gray-500 text-sm tracking-wide">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-blue-500 transition-colors duration-300"
                    >
                        Get in Touch
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </section>
        </main>
    )
}
