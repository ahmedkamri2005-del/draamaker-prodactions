'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const linkStyle = "font-borscha text-[15px] font-bold tracking-[0.25em] text-black uppercase hover:opacity-60 transition-opacity duration-300 ease-in-out"
    const mobileLinkStyle = "font-borscha text-xl font-bold tracking-[0.25em] text-black uppercase hover:text-[#0ea5e9] transition-colors duration-300 ease-in-out block py-4"

    const leftLinkVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5 + (i * 0.1),
                duration: 0.8,
                ease: "easeOut" as const
            }
        })
    }

    const rightLinkVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5 + (i * 0.1),
                duration: 0.8,
                ease: "easeOut" as const
            }
        })
    }

    return (
        <nav className="fixed top-0 left-0 w-full h-20 bg-white z-50 flex items-center justify-between px-4 shadow-sm">
            <div className="w-full flex items-center">

                {/* Left side: Links */}
                <div className="flex-1 hidden lg:flex justify-end gap-x-6 pr-8">
                    <motion.div custom={3} initial="hidden" animate="visible" variants={leftLinkVariants}>
                        <Link href="/locations" className={linkStyle}>LOCATIONS</Link>
                    </motion.div>
                    <motion.div custom={2} initial="hidden" animate="visible" variants={leftLinkVariants}>
                        <Link href="/press" className={linkStyle}>PRESS</Link>
                    </motion.div>
                    <motion.div custom={1} initial="hidden" animate="visible" variants={leftLinkVariants}>
                        <Link href="/work" className={linkStyle}>WORK</Link>
                    </motion.div>
                    <motion.div custom={0} initial="hidden" animate="visible" variants={leftLinkVariants}>
                        <Link href="/tax-rebate" className={linkStyle}>TAX REBATE</Link>
                    </motion.div>
                </div>

                {/* Center: Logo */}
                <div className="flex-none flex justify-center items-center">
                    <Link href="/" className="block">
                        <img
                            src="/LOGO11.svg"
                            alt="Dreamaker Productions"
                            className="h-12 md:h-16 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Right side: Links */}
                <div className="flex-1 hidden lg:flex justify-start gap-x-6 pl-8">
                    <motion.div custom={0} initial="hidden" animate="visible" variants={rightLinkVariants}>
                        <Link href="/about" className={linkStyle}>ABOUT</Link>
                    </motion.div>
                    <motion.div custom={1} initial="hidden" animate="visible" variants={rightLinkVariants}>
                        <Link href="/studios" className={linkStyle}>SETS</Link>
                    </motion.div>
                    <motion.div custom={2} initial="hidden" animate="visible" variants={rightLinkVariants}>
                        <Link href="/services" className={linkStyle}>SERVICES</Link>
                    </motion.div>
                    <motion.div custom={3} initial="hidden" animate="visible" variants={rightLinkVariants}>
                        <Link href="/contact" className={linkStyle}>CONTACT</Link>
                    </motion.div>
                </div>

                {/* Mobile Hamburger */}
                <div className="flex-1 flex lg:hidden justify-end">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu" className="p-2">
                        {isMobileMenuOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-[100%] left-0 w-full bg-white shadow-lg lg:hidden flex flex-col items-center py-6 border-t border-gray-100 z-40"
                    >
                        <Link href="/locations" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>LOCATIONS</Link>
                        <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>SERVICES</Link>
                        <Link href="/work" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>WORK</Link>
                        <Link href="/tax-rebate" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>TAX REBATE</Link>
                        <Link href="/press" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>PRESS</Link>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>ABOUT</Link>
                        <Link href="/studios" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>SETS</Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>CONTACT</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
