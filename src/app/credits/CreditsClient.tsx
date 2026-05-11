'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../../components/layout/Footer';

// --- DATA ---
const creditsData = [
  // TYPE: POSTER (Real Movie/TV Posters)
  { id: 1, type: 'poster', category: 'Movies', title: 'The Garden of Aden', service: 'Full Service Production', imagePath: '/works/posters/garden-of-aden.png', videoUrl: '/videos/Feature/garden-of-aden.webm' },
  { id: 2, type: 'poster', category: 'TV', title: 'CIA Confidential', service: 'Locations & Logistics', imagePath: '/works/posters/cia-confidential.jpg', videoUrl: 'https://www.youtube.com/embed/0dF29Bg20a8' },
  { id: 3, type: 'poster', category: 'Movies', title: 'Azzan', service: 'Moroccan Production Partner', imagePath: '/works/posters/aazaan.png', videoUrl: 'https://player.vimeo.com/video/75757690?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 4, type: 'poster', category: 'Movies', title: 'Pegasus', service: 'Moroccan Production Partner', imagePath: '/works/posters/pegase.jpg', videoUrl: 'https://player.vimeo.com/video/73678951?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 5, type: 'poster', category: 'Movies', title: 'Midnight Fly', service: 'Production & Locations', imagePath: '/works/posters/midnight-fly.png', videoUrl: 'https://player.vimeo.com/video/81383338?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 6, type: 'poster', category: 'Movies', title: 'Emir', service: 'Full Service Production', imagePath: '/works/posters/emir.jpg', videoUrl: 'https://www.youtube.com/embed/_iUI6Vwf4sw' },
  { id: 7, type: 'poster', category: 'Movies', title: 'Agent Vinod', service: 'Moroccan Production Partner', imagePath: '/works/posters/agent-vinod.jpg', videoUrl: 'https://player.vimeo.com/video/75757811?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 8, type: 'poster', category: 'TV', title: 'Daag', service: 'Moroccan Production Partner', imagePath: '/works/posters/daag.jpg', videoUrl: 'https://player.vimeo.com/video/74729871?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 9, type: 'poster', category: 'Movies', title: 'Dirty Angels', service: 'Full Service Production', imagePath: '/works/posters/dirty-angels.png', videoUrl: 'https://www.youtube.com/embed/YBwoSa3n8Yc' },
  { id: 10, type: 'poster', category: 'Movies', title: 'The Walk', service: 'Moroccan Production Partner', imagePath: '/works/posters/the-walk.png', videoUrl: 'https://www.youtube.com/embed/4eQdoP7aRk4' },
  { id: 11, type: 'poster', category: 'Movies', title: 'Black Angel', service: 'Location & Logistics', imagePath: '/works/posters/black-angel.jpg', videoUrl: 'https://www.youtube.com/embed/dIE_56C9z4k' },
  { id: 12, type: 'poster', category: 'TV', title: 'Clash of the Gods', service: 'Location Scouting & Crew', imagePath: '/works/posters/clash-of-the-gods.jpg', videoUrl: 'https://player.vimeo.com/video/73394982?h=f0a1ba5147' },
  { id: 13, type: 'poster', category: 'Movies', title: 'Flirt', service: 'Production Services', imagePath: '/works/posters/flirt.png', videoUrl: 'https://www.youtube.com/embed/msOnGTQtA9E' },
  { id: 14, type: 'poster', category: 'Movies', title: 'Okuotoko', service: 'Full Service Production', imagePath: '/works/posters/okuotoko.jpg', videoUrl: 'https://www.youtube.com/embed/gw_G8IKw6dA' },
  { id: 27, type: 'poster', category: 'TV', title: 'Kingdom of David', service: 'Production Services', imagePath: '/works/posters/kingdom.webp', videoUrl: 'https://player.vimeo.com/video/74823824?badge=0&autopause=0&player_id=0&app_id=58479' },

  // TYPE: LOGO-POSTER (Brands & Networks)
  { id: 15, type: 'logo-poster', category: 'TV', title: 'National Geographic', service: 'Production Logistics', logoPath: '/clients/NATIONALGEOGRAPHIC.png', videoUrl: 'https://player.vimeo.com/video/73395201?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 16, type: 'logo-poster', category: 'TV', title: 'History Channel', service: 'Production Support', logoPath: '/works/logo/NATIONALGEOGRAPHIC.png', videoUrl: 'https://player.vimeo.com/video/73395048?h=545a256bad' },
  { id: 17, type: 'logo-poster', category: 'Commercials', title: 'BMW', service: 'Full Service Production', logoPath: '/works/logo/bmw.svg', videoUrl: 'https://player.vimeo.com/video/153900606?h=6a9189553e' },
  { id: 18, type: 'logo-poster', category: 'Commercials', title: 'FIFA', service: 'Locations & Logistics', logoPath: '/works/logo/fifaapproved_newlogo.jpg', videoUrl: 'https://player.vimeo.com/video/74216401?h=891b478be7' },
  { id: 19, type: 'logo-poster', category: 'Commercials', title: 'Honda', service: 'Full Service Production', logoPath: '/works/logo/honda.png', videoUrl: 'https://player.vimeo.com/video/67670234?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 20, type: 'logo-poster', category: 'Commercials', title: 'Airtel', service: 'Production Support', logoPath: '/works/logo/airtel.jpeg', videoUrl: 'https://player.vimeo.com/video/67669045?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 21, type: 'logo-poster', category: 'TV', title: 'Netflix - Cooked', service: 'Production Services', logoPath: '/clients/netflix.png', videoUrl: 'https://player.vimeo.com/video/154862129?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 22, type: 'logo-poster', category: 'Commercials', title: 'Bajaj', service: 'Production Support', logoPath: '/works/logo/newBajajlogo.webp', videoUrl: 'https://player.vimeo.com/video/67669216?h=3bbb55f7f0' },
  { id: 23, type: 'logo-poster', category: 'Commercials', title: 'Hugo Boss', service: 'Production Support', logoPath: '/clients/3.png', videoUrl: 'https://player.vimeo.com/video/153925079?h=34fbfbff15' },
  { id: 24, type: 'logo-poster', category: 'Commercials', title: 'TUI', service: 'Production Services', logoPath: '/works/logo/Untitled (9).png', videoUrl: 'https://player.vimeo.com/video/153907298?h=770c9bb9ac' },

  { id: 29, type: 'logo-poster', category: 'Music Video', title: 'FUJI', service: 'Production Services', logoPath: '/works/logo/logo.music.jpg', videoUrl: '/works/music/despina-vandi.webm' },
  { id: 30, type: 'logo-poster', category: 'Commercials', title: 'The Pyramids', service: 'Production Services', logoPath: '/works/logo/amf-logo.svg', videoUrl: 'https://player.vimeo.com/video/169683333?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 31, type: 'logo-poster', category: 'Commercials', title: 'Bâloise', service: 'Production Support', logoPath: '/works/logo/brand.gif', videoUrl: 'https://player.vimeo.com/video/154871597?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 32, type: 'logo-poster', category: 'Commercials', title: 'Toro', service: 'Full Service Production', logoPath: '/works/logo/logo.png', videoUrl: 'https://player.vimeo.com/video/154879644?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 33, type: 'logo-poster', category: 'Commercials', title: 'Livon Silk Oil', service: 'Production Support', logoPath: '/works/logo/new-logo-pink.webp', videoUrl: 'https://player.vimeo.com/video/153907005?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 34, type: 'logo-poster', category: 'Commercials', title: 'Mango', service: 'Production Support', logoPath: '/works/logo/Mango-logo.png', videoUrl: 'https://player.vimeo.com/video/153911251?badge=0&autopause=0&player_id=0&app_id=58479' },
  { id: 35, type: 'logo-poster', category: 'TV', title: 'Let Me Shop', service: 'Production Services', logoPath: '/works/logo/Untitled (8).png', videoUrl: 'https://player.vimeo.com/video/73678926?h=bcb5955886' }
];

const categories = ["All", "Movies", "TV", "Commercials", "Music Video"];

// --- COMPONENTS ---

function CreditCard({ project, onOpenVideo }: { project: typeof creditsData[number], onOpenVideo: (url: string) => void }) {
  const isLogoPoster = project.type === 'logo-poster';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative aspect-[2/3] overflow-hidden rounded-sm bg-[#0a0a0a] group cursor-pointer border border-white/5"
      onClick={() => onOpenVideo(project.videoUrl)}
    >
      {/* Category Tag */}
      <div className="absolute top-4 left-4 z-30">
        <span className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] text-[#00AEEF]">
          {project.category}
        </span>
      </div>

      {isLogoPoster ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]">
          <div className="relative w-3/5 aspect-square flex items-center justify-center">
            <Image
              src={project.logoPath || ''}
              alt={`${project.title} Logo`}
              fill
              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              style={['Hugo Boss', 'FUJI', 'Mango'].includes(project.title) ? { 
                filter: 'grayscale(1) invert(1) brightness(1.8)',
                mixBlendMode: 'screen'
              } : {}}
            />
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center px-4">
            <p className="text-[9px] text-zinc-500 font-bold tracking-[0.3em] uppercase">
              {project.service}
            </p>
          </div>
        </div>
      ) : (
        <>
          <Image
            src={project.imagePath || ''}
            alt={`${project.title} Poster`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Default Title Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 flex flex-col justify-end p-4">
            <h3 className="text-white font-serif text-sm uppercase tracking-wider mb-1">
              {project.title}
            </h3>
            <span className="text-[#00AEEF] text-[8px] font-bold uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          {/* Detailed Info on Hover */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <h3 className="text-white font-serif text-2xl uppercase leading-tight tracking-wide mb-3">
              {project.title}
            </h3>
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-px bg-[#00AEEF]" />
              <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-[0.3em]">
                {project.service}
              </span>
              <div className="mt-4 px-4 py-2 border border-white/20 text-white text-[8px] font-bold tracking-widest hover:bg-white hover:text-black transition-colors">
                WATCH TRAILER
              </div>
            </div>
          </div>
        </>
      )}

      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#00AEEF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}


export default function CreditsClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryPriority: Record<string, number> = {
    'Movies': 1,
    'TV': 2,
    'Commercials': 3,
    'Music Video': 4
  };

  const filteredProjects = [...creditsData]
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      // First sort by category priority
      const prioA = categoryPriority[a.category] || 99;
      const prioB = categoryPriority[b.category] || 99;
      if (prioA !== prioB) return prioA - prioB;
      // Then sort by title
      return a.title.localeCompare(b.title);
    });

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
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            >
              {activeVideo.includes('youtube.com') || activeVideo.includes('vimeo.com') ? (
                <iframe
                  src={activeVideo}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              ) : (
                <video 
                  src={activeVideo} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain bg-black outline-none"
                />
              )}
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
            Dreamaker Productions — Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white uppercase tracking-widest leading-none mb-8"
          >
            GLOBAL
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
              {activeCategory === 'All' ? 'Complete Portfolio' : `${filteredProjects.length} ${activeCategory} Productions`}
            </span>
            <div className="h-px flex-1 bg-zinc-800" />
          </motion.div>

          {/* Animated Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 md:p-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <CreditCard 
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
