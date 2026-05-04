'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../components/layout/Footer';

// --- Types ---
interface Location {
  id: string;
  category: string;
  title: string;
  desc: string;
  coverImage: string;
}

// --- Data ---
const LOCATIONS: Location[] = [
  {
    id: 'sahara.desert',
    category: 'THE DESERT',
    title: 'The Sahara Desert',
    desc: "Morocco's legendary dunes shift from lunar basalt to golden sea-like waves. This otherworldly landscape provides a timeless backdrop for sci-fi epics and period dramas.",
    coverImage: '/pics.of.dmp/Locations/sahara.desert/sahara1.webp',
  },
  {
    id: 'Kasbahs',
    category: 'HISTORIC SITES',
    title: 'Kasbahs & Ruins',
    desc: "Centuries-old clay citadels and Roman-era ruins double perfectly for Biblical, Mesopotamian, and Ancient Egyptian settings.",
    coverImage: '/pics.of.dmp/Locations/Kasbahs/kasbah1.JPG',
  },
  {
    id: 'cities.medina',
    category: 'URBAN LANDSCAPES',
    title: 'Medinas & Cities',
    desc: "From the labyrinthine blue streets of Chefchaouen to the bustling ochre souks of Marrakech. Unsurpassed in texture and color.",
    coverImage: '/pics.of.dmp/Locations/cities.medina/medina1.webp',
  },
  {
    id: 'Atlas.mountaine',
    category: 'NATURAL WONDERS',
    title: 'Atlas Mountains',
    desc: "Snowcapped peaks and vertiginous gorges. The High Atlas offers a variety of alpine and Mediterranean micro-climates.",
    coverImage: '/pics.of.dmp/Locations/Atlas.mountaine/atlas1.webp',
  },
  {
    id: 'Wild.athlantique',
    category: 'ATLANTIC COAST',
    title: 'Wild Atlantic Shores',
    desc: "Dramatic cliffs and historic ramparts. These locations are perfect for period naval dramas and rugged coastal adventures.",
    coverImage: '/pics.of.dmp/Locations/Wild.athlantique/wild1.webp',
  },
  {
    id: 'Epic.roades',
    category: 'CINEMATIC PASSES',
    title: 'Epic Roads & Canyons',
    desc: "Winding mountain passes and vertical walls of Todra Gorge. The premier choice for automotive commercials and chase sequences.",
    coverImage: '/pics.of.dmp/Locations/Epic.roades/Roads1.webp',
  },
  {
    id: 'Caves',
    category: 'RUGGED TERRAINS',
    title: 'Caves & Steppes',
    desc: "Limestone caves and prehistoric rock formations offer unique, subterranean textures for sci-fi and fantasy productions.",
    coverImage: '/pics.of.dmp/Locations/Caves/cave1.webp',
  },
];

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export default function LocationsPage() {
  return (
    <main className="bg-black text-zinc-400 min-h-screen font-sans selection:bg-[#00AEEF] selection:text-white overflow-x-hidden">
      
      {/* ── BACK LINK ──────────────────────────────────────────────────── */}
      <Link
        href="/"
        className="fixed top-24 md:top-32 left-6 md:left-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:-translate-x-2 transition-all duration-300 z-50 mix-blend-difference"
      >
        <span>&larr;</span> Back to Home
      </Link>

      {/* ── HERO SECTION ───────────────────────────────────────────────── */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <iframe
            src="https://player.vimeo.com/video/1188941106?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
            className="absolute top-1/2 left-1/2 w-[300vw] h-[110vh] md:w-[120vw] md:h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-100"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="locations.back"
          ></iframe>
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          className="relative z-10 max-w-5xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          <span className="text-[#00AEEF] text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6 block">
            The Moroccan Canvas
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white uppercase leading-[0.9] tracking-tighter mb-8">
            Infinite <br />
            <span className="italic font-medium">Scenery</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed">
            From shifting golden dunes to snow-capped peaks and ancient citadels. 
            Morocco is not just a location; it's a thousand worlds in one.
          </p>
        </motion.div>
      </section>

      {/* ── LOCATIONS GALLERY ─────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-40">
          {LOCATIONS.map((loc, idx) => (
            <motion.div
              layout
              key={loc.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col group ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900 group shadow-2xl">
                <img 
                  src={loc.coverImage} 
                  alt={loc.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                
                {/* Category Badge */}
                <div className="absolute top-8 left-8 z-10">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10">
                    {loc.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 md:mt-12 space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-tight">
                  {loc.title}
                </h2>
                <p className="text-zinc-500 text-base md:text-lg max-w-md leading-relaxed">
                  {loc.desc}
                </p>
                <div className="pt-4">
                  <Link 
                    href={`/locations/${loc.id}`}
                    className="inline-block px-8 py-3 bg-[#00AEEF] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] transition-all duration-300"
                  >
                    VIEW GALLERY
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SCENIC CALL TO ACTION ─────────────────────────────────────── */}
      <section className="bg-zinc-950 py-24 md:py-40 flex flex-col items-center justify-center text-center border-t border-white/5 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white uppercase tracking-tighter mb-8">
            UNSEEN <span className="italic font-medium">BEYOND</span> LIMITS.
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Our scouting team covers every hidden corner of the Kingdom. 
            Tell us your vision, we will find the setting.
          </p>
          <button onClick={() => window.dispatchEvent(new Event('openQuoteModal'))}
            className="px-12 py-5 bg-[#00AEEF] text-white font-extrabold text-sm tracking-[0.2em] uppercase hover:bg-[#009ED8] transition-all duration-300 rounded-sm inline-block"
          >
            GET A QUOTE
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
