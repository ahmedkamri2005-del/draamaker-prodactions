import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const linkStyle = "font-borscha text-[15px] font-bold tracking-[0.25em] text-black uppercase hover:text-[#0ea5e9] transition-colors duration-300 ease-in-out"
    const mobileLinkStyle = "font-borscha text-xl font-bold tracking-[0.25em] text-black uppercase hover:text-[#0ea5e9] transition-colors duration-300 ease-in-out block py-4"

    const leftLinkVariants: Variants = {
        hidden: { opacity: 0, scale: 0.5, x: 80 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    }

    const rightLinkVariants: Variants = {
        hidden: { opacity: 0, scale: 0.5, x: -80 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white py-5 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-3 items-center w-full">

                {/* Left side: Clustered links (Hidden on Mobile) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2, staggerDirection: -1 } }
                    }}
                    className="hidden lg:flex justify-end gap-12 pr-10"
                >
                    <motion.a variants={leftLinkVariants} href="/locations" className={linkStyle}>LOCALIZATION</motion.a>
                    <motion.a variants={leftLinkVariants} href="/services" className={linkStyle}>SERVICE</motion.a>
                    <motion.a variants={leftLinkVariants} href="/work" className={linkStyle}>WORK</motion.a>
                </motion.div>

                {/* Mobile Empty Spacer Left -> Preserves perfect center rendering in grid-cols-3 */}
                <div className="lg:hidden flex"></div>

                {/* Center: Logo */}
                <div className="flex justify-center relative z-50 bg-white md:px-2">
                    <a href="/" className="block">
                        <img
                            src="/logos/dreamakerLogo.png"
                            alt="Dreamaker Productions"
                            className="h-10 md:h-12"
                        />
                    </a>
                </div>

                {/* Right side: Clustered links (Hidden on Mobile) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                    }}
                    className="hidden lg:flex justify-start gap-12 pl-10"
                >
                    <motion.a variants={rightLinkVariants} href="/about" className={linkStyle}>ABOUT</motion.a>
                    <motion.a variants={rightLinkVariants} href="/rebate" className={linkStyle}>REBATE</motion.a>
                    <motion.a variants={rightLinkVariants} href="/contact" className={linkStyle}>CONTACT</motion.a>
                </motion.div>

                {/* Mobile Hamburger Touch Area */}
                <div className="flex lg:hidden justify-end z-50">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu" className="p-2">
                        {isMobileMenuOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-[100%] left-0 w-full bg-white shadow-lg lg:hidden flex flex-col items-center py-6 border-t border-gray-100 z-40"
                    >
                        <a href="/locations" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>LOCALIZATION</a>
                        <a href="/services" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>SERVICE</a>
                        <a href="/work" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>WORK</a>
                        <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>ABOUT</a>
                        <a href="/rebate" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>REBATE</a>
                        <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkStyle}>CONTACT</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
