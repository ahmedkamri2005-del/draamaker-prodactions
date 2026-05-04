'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Footer from '../../components/layout/Footer';

const getEmbedUrl = (url?: string) => {
  if (!url) return "";
  
  // Vimeo Parser
  if (url.includes("vimeo.com")) {
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return `https://player.vimeo.com/video/${videoId}?autoplay=1&color=00AEEF&title=0&byline=0`;
  }
  
  // YouTube Parser
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let videoId = "";
    if (url.includes("v=")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  }
  
  return url;
};

// ─── Film Data ────────────────────────────────────────────────────────────────
const FILMS = [
  // --- VIMEO LINKS (Client's Original Links) ---
  { id: 1, title: "Aazaan", type: "Feature Film", role: 'Moroccan Production Partner', image: "/works/Aazaan.png", videoUrl: "https://vimeo.com/75757690" },
  { id: 2, title: "Pegasus", type: "Feature Film", role: 'Moroccan Production Partner', image: "/works/pegase.jpg", videoUrl: "https://vimeo.com/73678951" },
  { id: 3, title: "Midnight Fly", type: "Feature Film", role: 'Production & Locations', image: "/works/midnight-fly.png", videoUrl: "https://vimeo.com/81383338" },
  { id: 4, title: "Emir", type: "Drama Series", role: 'Full Service Production', image: "/works/Emir.jpg", videoUrl: "https://vimeo.com/74614447" },
  { id: 5, title: "Agent Vinod", type: "Feature Film", role: 'Moroccan Production Partner', image: "/works/agent-vinod.jpg", videoUrl: "https://vimeo.com/75757811" },
  { id: 6, title: "Daag", type: "Feature Film", role: 'Moroccan Production Partner', image: "/works/DAAG.jpg", videoUrl: "https://vimeo.com/74729871" },

  // --- YOUTUBE LINKS (Official Trailers based on the posters) ---
  { id: 7, title: "Dirty Angels", type: "Feature Film", role: 'Full Service Production', image: "/works/dirty-angels.png", videoUrl: "https://www.youtube.com/watch?v=LxKbF-ydvhg" },
  { id: 8, title: "The Walk", type: "Feature Film", role: 'Moroccan Production Partner', image: "/works/the-walk.png", videoUrl: "https://www.youtube.com/watch?v=eKSeSX-dzso" },
  { id: 9, title: "Black Angel", type: "Short Film", role: 'Location & Logistics', image: "/works/black.angel.jpg", videoUrl: "https://www.youtube.com/watch?v=dIE_56C9z4k" },
  { id: 10, title: "Clash of the Gods", type: "TV Series", role: 'Location Scouting & Crew', image: "/works/clash.of.the.god.jpg", videoUrl: "https://www.youtube.com/watch?v=e7tXg6E66Xo" },
  { id: 11, title: "Flirt", type: "Feature Film", role: 'Production Services', image: "/works/Flirt.png", videoUrl: "https://www.youtube.com/watch?v=msOnGTQtA9E" },
  { id: 12, title: "Okuotoko (Million Dollar Man)", type: "Feature Film", role: 'Full Service Production', image: "/works/okuotoko.jpg", videoUrl: "https://www.youtube.com/watch?v=7uM00O5tN9Q" },
  { id: 13, title: "Garden of Aden", type: "Feature Film", role: 'Full Service Production', image: "/works/garden-of-aden.png", videoUrl: "https://www.youtube.com/watch?v=Xpu5Ld0S8-Y" },
  { id: 14, title: "CIA Confidential", type: "Documentary", role: 'Location & Logistics', image: "/works/CIA CONFIDENTIAL.jpg", videoUrl: "https://www.youtube.com/watch?v=5z6eG3B0R_E" }
];

// ─── Poster Card ──────────────────────────────────────────────────────────────
function PosterCard({ film, onOpenVideo }: { film: typeof FILMS[number], onOpenVideo: (url: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' as const }}
      className="relative aspect-[2/3] overflow-hidden rounded-sm bg-zinc-950 group cursor-pointer"
      onClick={() => onOpenVideo(film.videoUrl!)}
    >
      {/* Poster Image — object-contain so full poster is always visible */}
      <Image
        src={film.image}
        alt={`${film.title} ${film.type} Poster`}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Default — subtle bottom vignette always visible */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out" />

      {/* Hover Content — slides up from bottom */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
        <span className="text-[#00AEEF] text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
          {film.type}
        </span>
        <h3 className="text-white font-serif text-xl md:text-2xl uppercase leading-tight tracking-wide mb-3">
          {film.title}
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-4 h-px bg-[#00AEEF]" />
          <span className="text-zinc-400 text-[11px] uppercase tracking-wider">
            {film.role}
          </span>
        </div>
      </div>

      {/* Corner accent on hover */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function CreditsClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="bg-black text-zinc-400 min-h-screen font-sans selection:bg-[#00AEEF] selection:text-black overflow-x-hidden">

      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10">
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white text-5xl font-light hover:text-[#00AEEF] transition-colors z-[110]"
            >
              &times;
            </button>
            
            {/* Video Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            >
              <iframe 
                src={getEmbedUrl(activeVideo)} 
                className="absolute top-0 left-0 w-full h-full border-0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen 
              ></iframe>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── BACK LINK ─────────────────────────────────────────────────────── */}
      <Link
        href="/"
        className="fixed top-24 md:top-32 left-6 md:left-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:-translate-x-2 transition-all duration-300 z-50 mix-blend-difference"
      >
        <span>&larr;</span> Back to Home
      </Link>

      {/* ═══════════════════════════════════════════════════════════════════════
          01. HERO — VIDEO BACKGROUND
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
        {/* Background Video — Vimeo */}
        <div className="absolute inset-0 z-0 bg-black">
          <iframe
            src="https://player.vimeo.com/video/1189137794?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="absolute top-1/2 left-1/2 w-[300vw] h-[110vh] md:w-[120vw] md:h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            title="credits-hero"
          />

          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Hero Content */}
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

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="text-base md:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed"
          >
            Explore the worlds we&apos;ve helped build for global studios.
          </motion.p>
        </motion.div>

        {/* Bottom fade into page */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          03. POSTER GRID
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center gap-6"
          >
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              {FILMS.length} Productions
            </span>
            <div className="h-px flex-1 bg-zinc-800" />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {FILMS.map((film) => (
              <PosterCard key={film.id} film={film} onOpenVideo={(url) => setActiveVideo(url)} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          04. FOOTER CTA
      ═══════════════════════════════════════════════════════════════════════ */}
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
