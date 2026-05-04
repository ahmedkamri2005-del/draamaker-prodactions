'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import QuoteModal from '../QuoteModal'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
    const pathname = usePathname()
    const isContactPage = pathname === '/contact'
    const isWhiteNav = isScrolled || isContactPage

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        const openQuoteModal = () => setIsQuoteModalOpen(true)
        
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('openQuoteModal', openQuoteModal)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('openQuoteModal', openQuoteModal)
        }
    }, [])

    const linkStyle = `text-sm font-extrabold tracking-widest uppercase transition-colors duration-300 flex items-center gap-1 ${
        isWhiteNav ? 'text-black hover:text-[#009ED8]' : 'text-white hover:text-[#009ED8]'
    }`
    
    const dropdownLinkStyle = `text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 py-3 px-2 text-white hover:text-white/80 hover:bg-white/10 flex items-center justify-between`

    const mobileLinkStyle = `text-lg font-extrabold tracking-widest uppercase transition-colors duration-300 block py-4 ${
        isWhiteNav ? 'text-black hover:text-[#00AEEF]' : 'text-white hover:text-[#00AEEF]'
    }`

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Locations", href: "/locations" },
        { 
            label: "Studios & Assets", 
            href: "#",
            subLinks: [
                { label: "Backlots & Sound Stages", href: "/studios" },
                { label: "Art & Wardrobe Assets", href: "/art-wardrobe" },
            ]
        },
        { label: "Tax Rebate", href: "/tax-rebate" },
        { label: "Credits", href: "/credits" }
    ]

    return (
        <nav className={`fixed top-0 w-full h-20 z-50 flex items-center justify-between px-6 lg:px-12 transition-all duration-300 ${
            isWhiteNav 
                ? 'bg-white shadow-sm border-b border-gray-100 py-4' 
                : 'bg-transparent border-b border-transparent py-6'
        }`}>
            {/* Left side: Logo */}
            <div className="flex-none">
                <Link href="/" className="relative block h-14 md:h-20 w-48 md:w-64">
                    <img 
                        src="/logos/dmp.white.png" 
                        alt="Dreamaker Productions" 
                        className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-500 ${
                            isWhiteNav ? 'opacity-0' : 'opacity-100'
                        }`} 
                    />
                    <img 
                        src="/logos/dmp.black .png" 
                        alt="Dreamaker Productions" 
                        className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-500 ${
                            isWhiteNav ? 'opacity-100' : 'opacity-0'
                        }`} 
                    />
                </Link>
            </div>

            {/* Center: Desktop Links */}
            <div className="hidden lg:flex items-center gap-x-8 h-full">
                {navLinks.map((link) => (
                    <div 
                        key={link.label} 
                        className="relative h-full flex items-center group"
                        onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        {link.subLinks ? (
                            <div className="flex items-center gap-1 cursor-pointer">
                                <span className={linkStyle}>
                                    {link.label}
                                </span>
                                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''} ${isWhiteNav ? 'text-black' : 'text-white'}`} />
                                
                                <AnimatePresence>
                                    {activeDropdown === link.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 w-64 bg-[#00AEEF] p-2 shadow-2xl border border-[#00AEEF]/20 rounded-sm"
                                        >
                                            <div className="flex flex-col">
                                                {link.subLinks.map((sub) => (
                                                    <Link 
                                                        key={sub.href} 
                                                        href={sub.href} 
                                                        className={dropdownLinkStyle}
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {sub.label}
                                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link href={link.href} className={linkStyle}>
                                {link.label}
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            {/* Far Right: Contact */}
            <div className="hidden lg:flex items-center gap-x-6 h-full">
                <div className={`h-8 border-l transition-colors duration-300 ${isWhiteNav ? 'border-gray-200' : 'border-white/20'}`}></div>
                <Link href="/contact" className={linkStyle}>
                    Contact
                </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu" className="p-2">
                    {isMobileMenuOpen ? (
                        <X size={28} className={isWhiteNav ? 'text-black' : 'text-white'} />
                    ) : (
                        <Menu size={28} className={isWhiteNav ? 'text-black' : 'text-white'} />
                    )}
                </button>
            </div>

            <AnimatePresence mode="wait">
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col z-[100] overflow-y-auto px-8 py-20"
                    >
                        {/* Header Area */}
                        <div className="flex justify-between items-center mb-12">
                             <img src="/logos/dmp.white.png" alt="Logo" className="h-10 w-auto object-contain" />
                             <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white/50 hover:text-white transition-colors">
                                 <X size={32} strokeWidth={1.5} />
                             </button>
                        </div>

                        {/* Navigation Links - Cinematic Layout */}
                        <div className="flex flex-col gap-y-0">
                            {navLinks.map((link, i) => (
                                <motion.div 
                                    key={link.label} 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                                    className="w-full border-b border-white/5"
                                >
                                    {link.subLinks ? (
                                        <div className="flex flex-col">
                                            <button 
                                                onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                                                className="text-3xl font-black uppercase tracking-tighter text-white py-5 flex items-center justify-between w-full"
                                            >
                                                {link.label}
                                                <ChevronDown size={24} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-[#00AEEF]' : 'text-white/20'}`} />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === link.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="flex flex-col pl-4 border-l-2 border-[#00AEEF] mb-6 overflow-hidden"
                                                    >
                                                        {link.subLinks.map((sub) => (
                                                            <Link 
                                                                key={sub.href} 
                                                                href={sub.href} 
                                                                onClick={() => setIsMobileMenuOpen(false)} 
                                                                className="text-sm font-bold uppercase tracking-widest py-3 text-zinc-400 hover:text-white transition-colors"
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link 
                                            href={link.href} 
                                            onClick={() => setIsMobileMenuOpen(false)} 
                                            className="text-3xl font-black uppercase tracking-tighter text-white py-5 block hover:text-[#00AEEF] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                            
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                            >
                                <Link 
                                    href="/contact" 
                                    onClick={() => setIsMobileMenuOpen(false)} 
                                    className="text-3xl font-black uppercase tracking-tighter text-white py-5 block hover:text-[#00AEEF] transition-colors"
                                >
                                    Contact
                                </Link>
                            </motion.div>
                        </div>

                        {/* Social Footer */}
                        <div className="mt-auto pt-16 flex flex-col gap-6">
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-600">Connect with us</span>
                            <div className="flex gap-x-8">
                                <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-[#00AEEF] transition-colors">Instagram</a>
                                <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-[#00AEEF] transition-colors">Vimeo</a>
                                <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-[#00AEEF] transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </nav>
    )
}

export default Navbar
