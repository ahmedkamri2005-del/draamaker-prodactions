'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../../components/layout/Footer';

// --- Types & Data ---
const HERO_IMAGES = [
  '/pics.of.dmp/home/Studios.&.Built.Environments.webp',
  '/all pic/Atlas Studios/IMG_6681.JPG',
  '/all pic/Egyptian Sets/DSCN5380.JPG',
  '/all pic/Jerusalem set/IMG_0150.jpg'
];

const FACILITIES = [
  {
    title: "High-Tech Soundstages",
    text: "We provide access to state-of-the-art facilities trusted by global networks and streaming giants. Featuring fully equipped green screen soundstages, specialized production workshops, and versatile spaces, we offer an uncompromising technical environment for blockbusters of any scale.",
    images: [
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s1.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s2.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s3.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s4.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s5.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s6.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s7.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s8.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s9.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s10.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s11.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s12.webp',
      '/Backlots & Sound Stages/studio/High-Tech Soundstages/h.t.s13.webp'
    ]
  },
  {
    title: "Legendary Desert Studios",
    text: "We facilitate shoots in some of the most iconic film infrastructures globally. Nestled in authentic desert landscapes, these vast environments provide a massive, controlled footprint for your production, offering seamless logistical support for massive crew sizes.",
    images: [
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d1.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d2.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d3.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d4.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d5.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d6.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d7.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d8.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d9.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d11.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d12.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d13.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d14.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d15.webp',
      '/Backlots & Sound Stages/studio/Legendary.Desert.Studios/l.d16.webp'
    ]
  },
  {
    title: "Integrated Production Hubs",
    text: "We offer access to world-class production environments built to exact international standards. These comprehensive hubs include dedicated projection rooms, extensive backlots, and full operational support for major studio features, allowing for a seamless workflow.",
    images: [
      '/Backlots & Sound Stages/studio/Integrated Production Hubs/oasis.webp',
      '/Backlots & Sound Stages/studio/Integrated Production Hubs/oasis1.webp',
      '/Backlots & Sound Stages/studio/Integrated Production Hubs/oasis2.webp',
      '/Backlots & Sound Stages/studio/Integrated Production Hubs/oasis3.webp',
      '/Backlots & Sound Stages/studio/Integrated Production Hubs/oasis4.webp',
      '/Backlots & Sound Stages/studio/Integrated Production Hubs/oasis7.webp',
      '/Backlots & Sound Stages/studio/Integrated Production Hubs/oasis8.webp'
    ]
  }
];

const BACKLOTS = [
  {
    id: 'roman',
    label: "Classical & Roman",
    desc: "A majestic reconstruction of classical architecture. From grand amphitheatres to patrician villas, ready for epic narratives.",
    images: [
      '/Backlots & Sound Stages/sets/clasical.roman/roman1.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman2.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman3.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman4.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman5.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman7.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman8.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman9.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman10.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman11.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman12.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman13.webp',
      '/Backlots & Sound Stages/sets/clasical.roman/roman14.webp'
    ]
  },
  {
    id: 'middle-eastern',
    label: "Middle Eastern & Biblical",
    desc: "Incredibly detailed ancient cities. Authentic stone facades and grand plazas perfect for historical blockbusters.",
    images: [
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r1.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r2.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r3.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r4.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r7.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r8.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r9.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r10.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r11.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r12.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r13.webp',
      '/Backlots & Sound Stages/sets/Middle Eastern.Biblical/j.r14.webp'
    ]
  },
  {
    id: 'egyptian',
    label: "Ancient Egyptian",
    desc: "Step back to the era of pharaohs. Towering columns, monumental statues, and intricate hieroglyphic details.",
    images: [
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy1.webp',
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy2.webp',
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy3.webp',
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy4.webp',
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy7.webp',
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy8.webp',
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy9.webp',
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy10.webp',
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy11.webp',
      '/Backlots & Sound Stages/sets/Ancient Egyptian/egy12.webp'
    ]
  },
  {
    id: 'fabrication',
    label: "Custom Fabrication",
    desc: "Access specialized, highly-controlled indoor workshops tailored for intricate prop-building and custom set construction.",
    images: [
      '/Backlots & Sound Stages/sets/Custom Fabrication/art.webp',
      '/Backlots & Sound Stages/sets/Custom Fabrication/art1.webp',
      '/Backlots & Sound Stages/sets/Custom Fabrication/art2.webp',
      '/Backlots & Sound Stages/sets/Custom Fabrication/art3.webp',
      '/Backlots & Sound Stages/sets/Custom Fabrication/art4.webp',
      '/Backlots & Sound Stages/sets/Custom Fabrication/art7.webp',
      '/Backlots & Sound Stages/sets/Custom Fabrication/art8.webp',
      '/Backlots & Sound Stages/sets/Custom Fabrication/art9.webp',
      '/Backlots & Sound Stages/sets/Custom Fabrication/art10.webp',
      '/Backlots & Sound Stages/sets/Custom Fabrication/art11.webp'
    ]
  }
];

// --- Components ---

const HeroSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" as const }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGES[index]}
            alt="Studios Hero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
    </div>
  );
};

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm group bg-zinc-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image src={images[current]} alt="Facility" fill className="object-cover" />
        </motion.div>
      </AnimatePresence>
      
      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <button onClick={prev} className="p-2 bg-black/50 backdrop-blur-md text-white hover:bg-[#00AEEF] transition-colors rounded-full">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="p-2 bg-black/50 backdrop-blur-md text-white hover:bg-[#00AEEF] transition-colors rounded-full">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-[#00AEEF] w-4' : 'bg-white/30'}`} />
        ))}
      </div>
    </div>
  );
};

export default function StudiosPage() {
  const [activeTab, setActiveTab] = useState(BACKLOTS[0]);

  return (
    <main className="bg-black text-zinc-400 min-h-screen font-sans selection:bg-[#00AEEF] selection:text-white overflow-x-hidden">
      
      {/* ── BACK LINK ──────────────────────────────────────────────────── */}
      <Link
        href="/"
        className="fixed top-24 md:top-32 left-6 md:left-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:-translate-x-2 transition-all duration-300 z-50 mix-blend-difference"
      >
        <span>&larr;</span> Back to Home
      </Link>

      {/* ── 01. HERO SECTION ───────────────────────────────────────────── */}
      <section className="relative h-screen w-full flex flex-col justify-end items-center text-center px-6 pb-32 md:pb-52 overflow-hidden">
        <HeroSlideshow />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          className="relative z-20 max-w-6xl"
        >
          <span className="text-[#00AEEF] text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold mb-8 block">
            Scale & Infrastructure
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white uppercase leading-[0.9] tracking-tighter">
            World-Class Scale <br />
            <span className="italic font-medium">& Infrastructure</span>
          </h1>
        </motion.div>
      </section>

      {/* ── 02. SECTION: SOUNDSTAGES & FACILITIES ────────────────────── */}
      <section className="py-24 md:py-48 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24 md:space-y-48">
            {FACILITIES.map((fac, idx) => (
              <motion.div 
                key={fac.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
              >
                <div className="w-full md:w-3/5">
                  <ImageCarousel images={fac.images} />
                </div>
                <div className="w-full md:w-2/5 space-y-6">
                  <h3 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-tight italic">
                    {fac.title}
                  </h3>
                  <div className="w-16 h-[1px] bg-[#00AEEF]" />
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {fac.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03. ESTABLISHED BACKLOTS (TABBED GALLERY) ───────────────── */}
      <section className="py-24 md:py-48 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[#00AEEF] text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block">Immersive Environments</span>
            <h2 className="text-3xl md:text-6xl font-serif text-white uppercase tracking-tighter leading-none mb-12">
              Established Backlots <br />
              <span className="italic font-medium">& Standing Sets</span>
            </h2>

            {/* TABS */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-white/10 pb-8">
              {BACKLOTS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                    activeTab.id === tab.id ? 'text-[#00AEEF]' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {tab.label}
                  {activeTab.id === tab.id && (
                    <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00AEEF]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed italic">
                  "{activeTab.desc}"
                </p>
              </div>

              <Masonry
                breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
                className="flex w-auto -ml-6"
                columnClassName="pl-6 bg-clip-padding space-y-6"
              >
                {activeTab.images.map((src, i) => (
                  <motion.div
                    key={src}
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-sm bg-zinc-900 group"
                  >
                    <img src={src} alt={activeTab.label} className="w-full h-auto object-cover" />
                  </motion.div>
                ))}
              </Masonry>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 04. FOOTER CTA ────────────────────────────────────────────── */}
      <section className="py-32 md:py-60 bg-zinc-950 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <span className="text-[#00AEEF] text-[10px] tracking-[0.5em] uppercase font-bold mb-8 block">Inquiry & Access</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white uppercase leading-[0.9] tracking-tighter mb-10">
            Ready to build <br />
            <span className="italic font-medium">Your World?</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Contact our management team to check stage availability, schedule a scout, or discuss your custom set construction needs.
          </p>
          <button onClick={() => window.dispatchEvent(new Event('openQuoteModal'))}
            className="px-12 py-5 bg-[#00AEEF] text-white font-extrabold text-[11px] tracking-[0.3em] uppercase hover:bg-[#009ED8] hover:shadow-[0_0_30px_rgba(0,174,239,0.4)] transition-all duration-500 rounded-sm inline-block"
          >
            Contact Us For Availability
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
