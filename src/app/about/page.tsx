'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import QuoteModal from '../../components/QuoteModal';
import Footer from '../../components/layout/Footer';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' as const } }
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' as const } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' as const } }
};

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-black text-zinc-400 min-h-screen font-sans selection:bg-[#00AEEF] selection:text-white overflow-x-hidden">
      
      {/* Floating Back Link */}
      <Link
        href="/"
        className="absolute md:fixed top-28 md:top-32 left-6 md:left-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:-translate-x-2 transition-all duration-300 z-40 mix-blend-difference text-white/50 hover:text-white"
      >
        <span>&larr;</span> Back to Home
      </Link>

      {/* 01. THE HERO (Typographic Impact) */}
      <section className="bg-black min-h-[50vh] flex items-center justify-center text-center px-6 md:px-10 relative overflow-hidden pt-44 md:pt-40 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="max-w-6xl relative z-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase leading-tight tracking-tight">
            THE BRIDGE BETWEEN GLOBAL VISION AND MOROCCAN REALITY.
          </h1>
        </motion.div>
      </section>

      {/* 02. THE FOUNDER (Split Layout - Optimized for height) */}
      <section className="bg-black py-12 md:py-16 lg:py-20 px-6 lg:px-12 min-h-[70vh] lg:min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Side: Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full aspect-[4/5] md:max-h-[60vh] rounded-sm overflow-hidden relative group mx-auto"
          >
            <img src="/pics.of.dmp/about.us/FRED.webp" alt="Fred Challa" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 lg:space-y-8"
          >
            <span className="text-[#00AEEF] text-xs md:text-sm tracking-[0.5em] uppercase font-bold">
              EAST MEETS WEST
            </span>
            <div className="space-y-4 lg:space-y-6 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              <p>
                Led by Fouad “Fred” Challa, Dreamaker Productions brings a rare blend of global perspective and local authority to every project. Fred grew up in Morocco before moving to the US at eighteen to pursue his education, graduating from the prestigious UCLA Film School.
              </p>
              <p>
                Spending over 15 years in the US, he built a robust network in the international film community. Returning to Morocco, his vision was clear: to create a production company that could seamlessly bridge the American working mentality with the local system.
              </p>
              <p>
                Today, Fred and his team stand as the definitive gateway for international filmmakers seeking to capture the unparalleled beauty and scale of Morocco, without ever compromising on standard or safety.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. THE ACCOLADES (Optimized Layout) */}
      <section className="bg-zinc-950 py-12 md:py-16 lg:py-20 px-6 lg:px-12 border-t border-white/5 overflow-hidden min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Newspaper Clipping Image (Smaller and fully visible) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-[500px] mx-auto aspect-[4/3] bg-zinc-900 border border-white/5 p-2 md:p-3 transform -rotate-1 shadow-2xl relative"
          >
            <div className="w-full h-full relative overflow-hidden border border-white/10 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] bg-zinc-950">
               <img src="/pics.of.dmp/about.us/JOURNAL.webp" alt="Newspaper clipping" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Right Side: Text (Compact and centered) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 lg:space-y-6"
          >
            <span className="text-[#00AEEF] text-xs md:text-sm tracking-[0.5em] uppercase font-bold">
              RECOGNIZED WORLDWIDE
            </span>
            <p className="text-xl md:text-2xl lg:text-3xl font-serif text-white italic leading-relaxed max-w-[90%] mx-auto md:mx-0">
              "Our commitment to excellence has been recognized on the highest stages... win an Emmy Award... feature film Pegasus Grand Prize at FESPACO... screening at the MoMA in New York."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 04. THE GEAR (Full-Width Technical) */}
      <section className="bg-black py-16 md:py-20 lg:py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 md:mb-12 text-center md:text-left">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-[#00AEEF] text-xs md:text-sm tracking-[0.5em] uppercase font-bold block mb-4">
                    NO COMPROMISES ON GEAR
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white uppercase tracking-tighter">
                    UNCOMPROMISING STANDARDS
                </h2>
            </motion.div>
        </div>
        
        {/* Full Width Image */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full aspect-video md:aspect-[21/9] relative overflow-hidden bg-zinc-900 border-y border-white/5 group"
        >
            <img src="/pics.of.dmp/about.us/TheConnection.webp" alt="High-end technical equipment" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-12 text-center">
            <motion.p 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-lg md:text-xl leading-relaxed"
            >
                Recognizing that world-class projects require world-class tools, we invested heavily in top-tier equipment. By partnering with leading international manufacturers, we brought the first professional dollies to Morocco. Today, our inventory boasts modern lighting, SkyPanels, LED systems, and the complete ARRI M series.
            </motion.p>
        </div>
      </section>

      {/* 05. THE VIDEO (High-Impact Media) */}
      <section className="bg-black relative border-t border-white/5 py-12 md:py-16 lg:py-20 flex justify-center px-6">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-5xl aspect-[4/3] relative overflow-hidden bg-black group shadow-2xl"
        >
            <iframe 
                src="https://player.vimeo.com/video/1188922590?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                className="absolute inset-0 w-full h-full"
                title="Fred Challa Interview"
            ></iframe>
        </motion.div>
      </section>

      {/* 06. THE AUTHORITY (Marrakech Film Commission) */}
      <section className="bg-black py-16 md:py-20 lg:py-24 px-6 lg:px-12 flex flex-col items-center justify-center text-center border-t border-white/5 relative overflow-hidden">
        {/* Subtle Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
           <span className="text-[20vw] md:text-[15vw] font-serif uppercase tracking-tighter text-white select-none">AUTHORITY</span>
        </div>
        
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl relative z-10"
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-serif text-white italic leading-relaxed">
            In 2015, Fred Challa was appointed President of the Marrakech Film Commission. Through this role and every project at Dreamaker, we continue to offer global cinema professionals a reliable partner for efficiency, expertise, and absolute cinematic excellence.
          </p>
        </motion.div>
      </section>

      {/* 07. FOOTER CTA (Minimalist - Compact) */}
      <section className="bg-zinc-950 py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center text-center border-t border-white/5 px-6">
        <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-tight mb-8"
        >
            FROM SCRIPT TO SCREEN.
        </motion.h2>
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
            <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#00AEEF] text-white font-extrabold text-xs tracking-[0.2em] uppercase hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.2)] transition-all duration-300 rounded-sm border-none"
            >
                GET A QUOTE
            </button>
        </motion.div>
      </section>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </main>
  );
}
