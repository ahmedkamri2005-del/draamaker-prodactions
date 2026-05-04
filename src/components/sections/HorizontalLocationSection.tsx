'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface LocationData {
  id: string;
  index: number;       
  total: number;       
  category: string;
  title: string;
  desc: string;
  accentColor?: string; 
  images: { src: string; alt: string }[];
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function HorizontalLocationSection({ location }: { location: LocationData }) {
  const accentColor = location.accentColor ?? '#00AEEF';

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen relative bg-[#F4F4F0] border-b border-black/5 overflow-hidden">
      
      {/* 1. LEFT SIDE (TEXT CONTAINER) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 relative z-20 min-h-[50vh] lg:h-screen">
        
        {/* FROSTED OVERLAY FOR LEGIBILITY */}
        <div className="absolute inset-0 bg-[#F4F4F0]/80 backdrop-blur-sm -z-10"></div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 space-y-6 lg:space-y-10">
          {/* Category label */}
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1A1A1A]/40">
            <div className="w-10 h-[1px]" style={{ backgroundColor: accentColor }} />
            <span>{location.category}</span>
          </div>

          {/* Title */}
          <h2 className="font-sans font-bold uppercase tracking-[0.2em] text-[#1A1A1A] text-3xl md:text-5xl lg:text-6xl leading-[1.1]">
             {location.title.split(' ').map((word, i) => (
               <span key={i} className="block">{word}</span>
             ))}
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg leading-relaxed font-sans font-medium text-[#1A1A1A]/60 max-w-md">
            {location.desc}
          </p>

          {/* Section counter */}
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-extrabold text-[#1A1A1A]/30">
            <span className="block h-[1px] w-12 bg-black/10" />
            <span>
              {String(location.index).padStart(2, '0')} / {String(location.total).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* 2. RIGHT SIDE (IMAGES CONTAINER) */}
      {/* Mobile: Horizontal Swipe | Desktop: Grid 2xN */}
      <div className="w-full lg:w-1/2 flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 px-6 py-12 lg:p-0 lg:grid lg:grid-cols-2 lg:h-screen lg:overflow-y-auto lg:overflow-x-hidden hide-scrollbar scroll-smooth bg-zinc-100">
        {location.images.map((img, idx) => (
          <div 
            key={idx} 
            className="shrink-0 w-[85vw] h-[50vh] lg:w-full lg:h-full lg:aspect-square lg:shrink snap-center relative group overflow-hidden bg-white shadow-xl lg:shadow-none"
          >
            <Image 
              src={img.src} 
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              sizes="(max-width: 1024px) 85vw, 25vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
            
            {/* Image ID Badge */}
            <span className="absolute top-6 right-6 text-[8px] font-bold text-white/50 uppercase tracking-[0.3em] z-10">
              FRAME {String(location.index).padStart(2, '0')}·{String(idx + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      {/* PROGRESS PIPS (Desktop Only) */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-50 pointer-events-none">
        {Array.from({ length: location.total }).map((_, j) => (
          <div
            key={j}
            className={`rounded-full transition-all duration-500 ${j === location.index - 1 ? 'w-[3px] h-8 bg-[#00AEEF]' : 'w-[2px] h-4 bg-black/10'}`}
          />
        ))}
      </div>

    </section>
  );
}

export function LocationSectionDivider({ label }: { label: string }) {
    return (
      <div className="w-full flex items-center justify-between px-12 md:px-20 py-10 bg-[#F4F4F0] border-t border-black/8">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/25">{label}</span>
        <span className="block w-24 h-[1px] bg-black/15" />
      </div>
    );
  }
