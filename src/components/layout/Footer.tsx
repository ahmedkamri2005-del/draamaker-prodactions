'use client'

import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

/* ─── Custom Vimeo icon (lucide doesn't include one) ─── */
const VimeoIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.161 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.119-4.1-1.68-6.15-.653-2.333-1.306-3.499-1.959-3.499-.187 0-.746.373-1.68 1.12L1.385 7.63c1.026-.932 2.053-1.865 3.078-2.798 1.493-1.306 2.52-1.96 3.08-1.96 1.68 0 2.613 1.213 2.799 3.638.28 3.826.56 5.74.84 5.74.186 0 .653-.56 1.4-1.68 1.026-1.492 1.586-2.612 1.68-3.358.186-1.493-.374-2.24-1.68-2.24-.467 0-.934.093-1.4.28 1.12-3.639 3.172-5.459 6.158-5.459 2.146 0 3.079 1.493 2.799 4.479z"/>
    </svg>
)

/* ─── Navigation data ─── */
const exploreLinks = [
    { label: 'Locations', href: '/locations' },
    { label: 'Studios & Backlots', href: '/studios' },
    { label: 'Production Assets', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

const socialLinks = [
    { label: 'Instagram', icon: <Instagram size={20} strokeWidth={1.5} />, href: 'https://www.instagram.com/dreamaker_prod' },
    { label: 'Vimeo', icon: <VimeoIcon size={18} />, href: 'https://vimeo.com/dreamakerproductions' },
    { label: 'LinkedIn', icon: <Linkedin size={20} strokeWidth={1.5} />, href: 'https://www.linkedin.com/company/dreamaker-productions/?originalSubdomain=ma' },
]

/* ─── Component ─── */
const Footer = () => {
    return (
        <footer className="relative bg-black text-zinc-400 overflow-hidden">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 w-full h-px bg-zinc-800/50" />

            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:pt-20 lg:pb-16 flex flex-col gap-10 md:block">
                
                {/* ── Main Layout — Mobile: Stack, Desktop: Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-left">

                    {/* Block 1 — Brand (Always left aligned) */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <Image
                                src="/logos/dmp.white.png"
                                alt="Dreamaker Productions - Morocco Film Services"
                                width={200}
                                height={64}
                                className="h-14 lg:h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                            />
                        </Link>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[280px]">
                            Transforming ambitious visions into powerful screen realities across Morocco.
                        </p>
                    </div>

                    {/* Block 2 — Grid for Explore & Socials on Mobile */}
                    <div className="grid grid-cols-2 md:contents gap-4">
                        {/* Column 1: Explore */}
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                                Explore
                            </h4>
                            <nav className="flex flex-col gap-3">
                                {exploreLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-zinc-400 text-[13px] font-medium transition-colors duration-300 hover:text-[#00AEEF] w-fit"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Column 2: Follow Us */}
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                                Follow Us
                            </h4>
                            <div className="flex items-center gap-5">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="text-zinc-400 transition-all duration-300 hover:text-[#00AEEF] hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Block 3 — Contact (Moved to next row/column) */}
                    <div className="space-y-5">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-3 text-[13px] font-medium">
                            <a
                                href="mailto:contact@dreamakerproductions.com"
                                className="text-[#00AEEF] transition-colors duration-300 hover:text-white w-fit"
                            >
                                contact@dreamakerproductions.com
                            </a>
                            <a
                                href="tel:+212661257326"
                                className="text-zinc-400 transition-colors duration-300 hover:text-white w-fit"
                            >
                                +212 661 257 326
                            </a>
                            <p className="text-zinc-500 leading-relaxed">
                                115 Rue de la Yougoslavie, Apt. 9,<br />
                                Marrakech 40000, Morocco
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Block 4 — Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-6 pb-24 md:pb-8 border-t border-zinc-800">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[9px] tracking-[0.2em] text-zinc-600 font-bold uppercase">
                    <p>© 2026 Dreamaker Productions. All Rights Reserved.</p>
                    <Link
                        href="/privacy"
                        className="transition-colors duration-300 hover:text-[#00AEEF]"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
