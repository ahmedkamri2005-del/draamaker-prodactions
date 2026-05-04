'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Footer from '../../components/layout/Footer'

const panelTransition = { duration: 0.5, ease: 'easeOut' as const }

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const inputClass =
        'w-full bg-transparent border-b border-gray-300 py-2 text-black text-sm tracking-wider placeholder:text-black/30 focus:outline-none focus:border-black transition-colors duration-300'
    const labelClass = 'text-[10px] tracking-[0.3em] uppercase text-black/40 mb-1 block'

    return (
        <div className="min-h-screen w-full flex flex-col bg-white">
            {/* Split Screen Section */}
            <div className="flex-1 flex flex-col lg:flex-row mt-[80px] min-h-[calc(100vh-80px)]">
                {/* === LEFT SIDE: BLACK — Office Details === */}
                <motion.div
                    initial={{ x: '-10%' }}
                    animate={{ x: 0 }}
                    transition={panelTransition}
                    className="w-full lg:w-1/2 bg-black text-white flex flex-col justify-center px-10 md:px-16 xl:px-24 py-20 lg:py-0"
                >
                    {/* Back Home Link */}
                    <Link href="/" className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors duration-300 mb-8 flex items-center gap-2 w-fit">
                        <span>&larr;</span> Back Home
                    </Link>

                    {/* Heading */}
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-12 uppercase">
                        Get In<br />Touch
                    </h1>

                    {/* Office Info */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2">
                                Office
                            </p>
                            <p className="text-white/80 text-base leading-relaxed">
                                115 Rue de la Yougoslavie<br />
                                Marrakech, Morocco
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2">
                                Phone
                            </p>
                            <a
                                href="tel:+212661257326"
                                className="text-white/80 text-base hover:text-[#00AEEF] transition-colors duration-300"
                            >
                                +212 661 257 326
                            </a>
                        </div>
                        <div>
                            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2">
                                Email
                            </p>
                            <a
                                href="mailto:contact@dreamakerproductions.com"
                                className="text-white/80 text-sm hover:text-[#00AEEF] transition-colors duration-300"
                            >
                                contact@dreamakerproductions.com
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* === RIGHT SIDE: WHITE — Contact Form === */}
                <motion.div
                    initial={{ x: '10%' }}
                    animate={{ x: 0 }}
                    transition={panelTransition}
                    className="w-full lg:w-1/2 bg-white text-black flex flex-col justify-center px-10 md:px-16 xl:px-24 py-20 lg:py-0"
                >
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h2 className="font-serif text-4xl text-black mb-4 uppercase">Thank You</h2>
                            <p className="text-black/50 tracking-wider text-sm">
                                We'll be in touch shortly.
                            </p>
                        </motion.div>
                    ) : (
                        <>
                            {/* Label */}
                            <p className="text-[10px] tracking-[0.35em] uppercase text-black/30 mb-8 mt-4 lg:mt-0">
                                Send a Message
                            </p>

                            <form onSubmit={handleSubmit} className="w-full">
                                {/* Name */}
                                <div className="mb-6">
                                    <label className={labelClass}>Name</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={inputClass}
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-6">
                                    <label className={labelClass}>Email</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={inputClass}
                                    />
                                </div>

                                {/* Project Type */}
                                <div className="mb-6">
                                    <label className={labelClass}>Project Type</label>
                                    <select
                                        id="contact-project-type"
                                        required
                                        value={formData.projectType}
                                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                        className={`${inputClass} cursor-pointer appearance-none bg-transparent rounded-none`}
                                    >
                                        <option value="" disabled>Select a project type</option>
                                        <option value="film">Feature Film</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="documentary">Documentary</option>
                                        <option value="tv">TV / Series</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="mb-8">
                                    <label className={labelClass}>Message</label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={3}
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                {/* Submit */}
                                <motion.button
                                    id="contact-submit"
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-[#00AEEF] text-white px-8 py-3 w-fit uppercase text-[11px] font-black tracking-[0.3em] hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] transition-all duration-300 border-none rounded-sm"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </>
                    )}
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}
