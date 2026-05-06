'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../../components/layout/Footer';

// --- DATA ---
const categories = ["All", "Feature Films", "TV", "Commercials", "Music Video"];

const projects = [
  { id: 1, title: "Aazaan", category: "Feature Films", role: 'Moroccan Production Partner', image: "/works/posters/aazaan.png", videoUrl: "/videos/Feature/aazaan.webm" },
  { id: 2, title: "Pegasus", category: "Feature Films", role: 'Moroccan Production Partner', image: "/works/posters/pegase.jpg", videoUrl: "/videos/Feature/pegasus.webm" },
  { id: 3, title: "Midnight Fly", category: "Feature Films", role: 'Production & Locations', image: "/works/posters/midnight-fly.png", videoUrl: "/videos/Feature/midnight-fly.webm" },
  { id: 4, title: "Emir", category: "Feature Films", role: 'Full Service Production', image: "/works/posters/emir.jpg", videoUrl: "/videos/Feature/emir.webm" },
  { id: 5, title: "Agent Vinod", category: "Feature Films", role: 'Moroccan Production Partner', image: "/works/posters/agent-vinod.jpg", videoUrl: "/videos/Feature/agent-vinod.webm" },
  { id: 6, title: "Daag", category: "TV", role: 'Moroccan Production Partner', image: "/works/posters/daag.jpg", videoUrl: "/works/tv/dag.webm" },
  { id: 7, title: "Dirty Angels", category: "Feature Films", role: 'Full Service Production', image: "/works/posters/dirty-angels.png", videoUrl: "/videos/Feature/dirty-angels.webm" },
  { id: 8, title: "The Walk", category: "Feature Films", role: 'Moroccan Production Partner', image: "/works/posters/the-walk.png", videoUrl: "/videos/Feature/the-walk.webm" },
  { id: 9, title: "Black Angel", category: "Feature Films", role: 'Location & Logistics', image: "/works/posters/black-angel.jpg", videoUrl: "/videos/Feature/black-angel.webm" },
  { id: 10, title: "Clash of the Gods", category: "TV", role: 'Location Scouting & Crew', image: "/works/posters/clash-of-the-gods.jpg", videoUrl: "/works/tv/dag.webm" },
  { id: 11, title: "Flirt", category: "Feature Films", role: 'Production Services', image: "/works/posters/flirt.png", videoUrl: "/videos/Feature/flirt.webm" },
  { id: 12, title: "Okuotoko", category: "Feature Films", role: 'Full Service Production', image: "/works/posters/okuotoko.jpg", videoUrl: "/videos/Feature/okuotoko.webm" },
  { id: 13, title: "Garden of Aden", category: "Feature Films", role: 'Full Service Production', image: "/works/posters/garden-of-aden.png", videoUrl: "/videos/Feature/garden-of-aden.webm" },
  { id: 14, title: "CIA Confidential", category: "TV", role: 'Location & Logistics', image: "/works/posters/cia-confidential.jpg", videoUrl: "/works/tv/cia-confidential.webm" },

  // --- TV ---
  { id: 15, title: "Egypt Underworld", category: "TV", role: 'Production Support', image: "/works/egypt-underworld.png", videoUrl: "/works/tv/egypt-underworld.webm" },
  { id: 16, title: "Kingdom of David", category: "TV", role: 'Locations & Logistics', image: "/works/kingdom-of-david.jpg", videoUrl: "/works/tv/kingdom-of-david.webm" },
  { id: 17, title: "Lets Shop", category: "TV", role: 'Production Services', image: "/works/lets-shop.jpg", videoUrl: "/works/tv/lets-shop.webm" },
  { id: 18, title: "Stranded with Peter", category: "TV", role: 'Local Fixer', image: "/works/stranded-with-peter.jpg", videoUrl: "/works/tv/stranded-with-peter.webm" },
  { id: 19, title: "The Battle of Tripoli", category: "TV", role: 'Production Logistics', image: "/works/the-battle-of-tripoli.jpg", videoUrl: "/works/tv/the-battle-of-tripoli.webm" },

  // --- COMMERCIALS ---
  { id: 20, title: "Airtel", category: "Commercials", role: 'Production Services', image: "/works/airtel.jpg", videoUrl: "/works/commercial/airtel.webm" },
  { id: 21, title: "Bajaj", category: "Commercials", role: 'Production Support', image: "/works/bajaj.jpg", videoUrl: "/works/commercial/bajaj.webm" },
  { id: 22, title: "Baloise Assurance", category: "Commercials", role: 'Locations & Scouting', image: "/works/baloise-assurance.jpg", videoUrl: "/works/commercial/baloise-assurance.webm" },
  { id: 23, title: "BMW", category: "Commercials", role: 'Full Service Production', image: "/works/bmw.png", videoUrl: "/works/commercial/bmw.webm" },
  { id: 24, title: "COMVIQ", category: "Commercials", role: 'Production Services', image: "/works/comviq.jpg", videoUrl: "/works/commercial/comviq.webm" },
  { id: 25, title: "FIFA", category: "Commercials", role: 'Locations & Logistics', image: "/works/fifa-anti-discrimination.png", videoUrl: "/works/commercial/fifa-anti-discrimination.webm" },
  { id: 26, title: "Grand Prix", category: "Commercials", role: 'Production Services', image: "/works/grand-prix-de-larc-de-triomphe.jpg", videoUrl: "/works/commercial/grand-prix-de-larc-de-triomphe.webm" },
  { id: 27, title: "Honda", category: "Commercials", role: 'Full Service Production', image: "/works/honda.png", videoUrl: "/works/commercial/honda.webm" },
  { id: 28, title: "Hugo Boss", category: "Commercials", role: 'Production Support', image: "/works/hugo-boss.png", videoUrl: "/works/commercial/hugo-boss.webm" },
  { id: 29, title: "Life Platinum", category: "Commercials", role: 'Locations & Logistics', image: "/works/life-platinum.jpg", videoUrl: "/works/commercial/life-platinum.webm" },
  { id: 30, title: "Livon Silk Oil", category: "Commercials", role: 'Production Services', image: "/works/livon-silk-oil.jpg", videoUrl: "/works/commercial/livon-silk-oil.webm" },
  { id: 31, title: "The Pyramids", category: "Commercials", role: 'Locations & Scouting', image: "/works/the-pyramids---amf-hd.jpg", videoUrl: "/works/commercial/the-pyramids---amf-hd.webm" },
  { id: 32, title: "Tine Piano", category: "Commercials", role: 'Production Support', image: "/works/tine-piano.jpg", videoUrl: "/works/commercial/tine-piano.webm" },
  { id: 33, title: "Toro", category: "Commercials", role: 'Full Service Production', image: "/works/toro.jpg", videoUrl: "/works/commercial/toro.webm" },
  { id: 34, title: "TUI", category: "Commercials", role: 'Production Services', image: "/works/tui.jpg", videoUrl: "/works/commercial/tui.mp4" },
  { id: 35, title: "Ulala Mango", category: "Commercials", role: 'Locations & Logistics', image: "/works/ulala-mango.jpg", videoUrl: "/works/commercial/ulala-mango.webm" },

  // --- MUSIC VIDEO ---
  { id: 36, title: "Despina Vandi", category: "Music Video", role: 'Production Services', image: "/works/despina-vandi.jpg", videoUrl: "/works/music/despina-vandi.webm" }
];

// --- COMPONENTS ---

function PosterCard({ project, onOpenVideo }: { project: typeof projects[number], onOpenVideo: (url: string) => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="relative aspect-[2/3] overflow-hidden rounded-sm bg-zinc-950 group cursor-pointer"
      onClick={() => onOpenVideo(project.videoUrl)}
    >
      <Image
        src={project.image}
        alt={`${project.title} Poster`}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out" />

      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
        <span className="text-[#00AEEF] text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
          {project.category}
        </span>
        <h3 className="text-white font-serif text-xl md:text-2xl uppercase leading-tight tracking-wide mb-3">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-4 h-px bg-[#00AEEF]" />
          <span className="text-zinc-400 text-[11px] uppercase tracking-wider">
            {project.role}
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function CreditsClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="bg-black text-zinc-400 min-h-screen font-sans selection:bg-[#00AEEF] selection:text-black overflow-x-hidden">

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white text-5xl font-light hover:text-[#00AEEF] transition-colors z-[110]"
            >
              &times;
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            >
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain bg-black outline-none"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Back Link */}
      <Link
        href="/"
        className="fixed top-24 md:top-32 left-6 md:left-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:-translate-x-2 transition-all duration-300 z-50 mix-blend-difference"
      >
        <span>&larr;</span> Back to Home
      </Link>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1189137794?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            title="credits-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' as const }}
          className="relative z-20 max-w-4xl mx-auto pt-32 pb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="block text-[#00AEEF] text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold mb-6"
          >
            Dreamaker Productions — Filmography
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white uppercase tracking-widest leading-none mb-8"
          >
            FEATURED
            <br />
            <span className="italic font-medium tracking-[0.05em]">CREDITS</span>
          </motion.h1>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20" />
      </section>

      {/* Grid & Filters */}
      <section className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  activeCategory === cat ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00AEEF]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center gap-6"
          >
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              {filteredProjects.length} {activeCategory} Productions
            </span>
            <div className="h-px flex-1 bg-zinc-800" />
          </motion.div>

          {/* Animated Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <PosterCard 
                  key={project.id} 
                  project={project} 
                  onOpenVideo={(url) => setActiveVideo(url)} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-24 md:py-36 px-6 bg-zinc-950 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(0,174,239,0.07),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' as const }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <span className="text-[#00AEEF] text-[10px] tracking-[0.5em] uppercase font-bold block mb-6">
            Your Project, Next
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tighter leading-[0.9] mb-8">
            WRITE YOUR
            <br />
            <span className="italic font-medium text-zinc-300">STORY IN MOROCCO</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-12">
            From casting to completion, our team is built to serve the world&apos;s
            most ambitious productions in the Kingdom of Morocco.
          </p>
          <button onClick={() => window.dispatchEvent(new Event('openQuoteModal'))}
            className="relative inline-block px-12 py-5 bg-[#00AEEF] text-black text-[11px] font-black tracking-[0.3em] uppercase overflow-hidden group transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,174,239,0.5)] hover:bg-[#009ED8]"
          >
            <span className="relative z-10">START YOUR PRODUCTION</span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-20deg] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
