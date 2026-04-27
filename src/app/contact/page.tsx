'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Footer from '../../components/layout/Footer'
import BackHome from '../../components/ui/BackHome'

const panelTransition = { duration: 0.5, ease: 'easeOut' as const }

export default function ContactPage() {
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
        'w-full bg-transparent border-b border-black/20 py-3 text-black font-borscha text-sm tracking-wider placeholder:text-black/30 focus:outline-none focus:border-black transition-colors duration-300'
    const labelClass = 'font-borscha text-[10px] tracking-[0.3em] uppercase text-black/40 mb-1 block'

    return (
        <>
            <BackHome />
            <div className="relative min-h-screen overflow-hidden border-t border-black/10">
                {/* Split Screen Container */}
                <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden">

                    {/* === LEFT SIDE: BLACK — Office Details === */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={panelTransition}
                        className="w-full lg:w-1/2 bg-black flex flex-col justify-center px-10 md:px-20 py-32 lg:py-0 min-h-[50vh] lg:min-h-screen"
                    >
                        {/* Label */}
                        <p className="font-borscha text-[10px] tracking-[0.35em] uppercase text-white/30 mb-12">
                            Dreamaker Productions
                        </p>

                        {/* Heading */}
                        <h1 className="font-borscha font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-16 uppercase">
                            Get In<br />Touch
                        </h1>

                        {/* Office Info */}
                        <div className="space-y-10">
                            <div>
                                <p className="font-borscha text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2">
                                    Office
                                </p>
                                <p className="font-borscha text-white/80 text-base leading-relaxed">
                                    115 Rue de la Yougoslavie<br />
                                    Marrakech, Morocco
                                </p>
                            </div>
                            <div>
                                <p className="font-borscha text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2">
                                    Phone
                                </p>
                                <a
                                    href="tel:+212661257326"
                                    className="font-borscha text-white/80 text-base hover:text-white transition-colors duration-300"
                                >
                                    +212 661 257 326
                                </a>
                            </div>
                            <div>
                                <p className="font-borscha text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2">
                                    Email
                                </p>
                                <a
                                    href="mailto:contact@dreamakerproductions.com"
                                    className="font-borscha text-white/80 text-sm hover:text-white transition-colors duration-300"
                                >
                                    contact@dreamakerproductions.com
                                </a>
                            </div>
                        </div>

                        {/* Decorative line */}
                        <div className="mt-20 w-16 h-px bg-white/10" />
                    </motion.div>

                    {/* === RIGHT SIDE: WHITE — Contact Form === */}
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={panelTransition}
                        className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-10 md:px-20 py-24 lg:py-0 min-h-[50vh] lg:min-h-screen"
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <h2 className="font-borscha font-bold text-4xl text-black mb-4 uppercase">Thank You</h2>
                                <p className="font-borscha text-black/50 tracking-wider text-sm">
                                    We'll be in touch shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <>
                                {/* Label */}
                                <p className="font-borscha text-[10px] tracking-[0.35em] uppercase text-black/30 mb-12">
                                    Send a Message
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-10">
                                    {/* Name */}
                                    <div>
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
                                    <div>
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
                                    <div>
                                        <label className={labelClass}>Project Type</label>
                                        <select
                                            id="contact-project-type"
                                            required
                                            value={formData.projectType}
                                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                            className={`${inputClass} cursor-pointer appearance-none`}
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
                                    <div>
                                        <label className={labelClass}>Message</label>
                                        <textarea
                                            id="contact-message"
                                            required
                                            rows={4}
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
                                        className="w-full bg-black text-white font-borscha font-bold text-sm tracking-[0.3em] uppercase py-4 hover:bg-black/80 transition-colors duration-300"
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    )
}
