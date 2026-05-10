'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface LocationData {
  id: string;
  title: string;
  desc: string;
  category: string;
  images: { src: string; alt: string; aspect: string }[];
}

export default function LocationHorizontalScroll({ data }: { data: LocationData }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalWidth = section.scrollWidth;
    const viewportWidth = window.innerWidth;
    const xMove = -(totalWidth - viewportWidth);

    const pin = gsap.to(section, {
      x: xMove,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.kill();
    };
  }, { scope: triggerRef });

  return (
    <section ref={triggerRef} className="relative overflow-hidden bg-[#F4F4F0]">
      <div 
        ref={sectionRef} 
        className="h-screen flex items-center flex-nowrap will-change-transform text-[#1A1A1A]"
        style={{ width: 'max-content' }}
      >
        {/* 1. INTRO VIEWPORT (100vw) */}
        <div className="w-screen h-screen flex border-r border-black/10 flex-shrink-0">
          {/* Left Side: Massive Title */}
          <div className="w-1/2 h-full flex flex-col justify-end p-12 md:p-20 border-r border-black/10">
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-[0.4em] mb-6 block">
              {data.category}
            </span>
            <h2 className="text-7xl md:text-[10rem] font-serif font-bold leading-[0.8] uppercase tracking-tighter">
              {data.title.split(' ')[0]} <br />
              <span className="italic font-medium text-black/20">{data.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          
          {/* Right Side: Description Box */}
          <div className="w-1/2 h-full flex items-center justify-center p-12 md:p-24 bg-white/50">
            <div className="max-w-md border border-black/10 p-10 md:p-16 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-black/20" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-black/20" />
              
              <p className="text-lg md:text-xl leading-relaxed font-sans font-medium text-black/70 italic">
                "{data.desc}"
              </p>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black/20" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-black/40">Locations Lookbook // 0{data.id === 'sahara' ? 1 : 2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. IMAGE TRACK (Vertical Columns with Spacing) */}
        
        {/* Column 1: Feature Image */}
        <div className="h-screen w-[40vw] flex items-center justify-center p-12 md:p-24 border-r border-black/10">
          <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden group">
            <Image
              src={data.images[0].src}
              alt={data.images[0].alt}
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Column 2: Stacked Duo */}
        <div className="h-screen w-[60vw] flex flex-row gap-12 p-12 md:p-24 border-r border-black/10 bg-white/30">
          <div className="w-1/2 h-[60%] self-start relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <Image src={data.images[1].src} alt={data.images[1].alt} fill className="object-cover" />
          </div>
          <div className="w-1/2 h-[60%] self-end relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <Image src={data.images[2].src} alt={data.images[2].alt} fill className="object-cover" />
          </div>
        </div>

        {/* Column 3: Minimalist Wide */}
        <div className="h-screen w-[50vw] flex items-center justify-center p-20 md:p-40 border-r border-black/10">
          <div className="relative w-full aspect-video grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
            <Image src={data.images[3].src} alt={data.images[3].alt} fill className="object-cover" />
          </div>
        </div>

        {/* Column 4: Tall & Narrow */}
        <div className="h-screen w-[35vw] flex items-center justify-center p-12 md:p-24 border-r border-black/10 bg-white/50">
          <div className="relative w-full h-[80%] grayscale hover:grayscale-0 transition-all duration-1000">
            <Image src={data.images[4].src} alt={data.images[4].alt} fill className="object-cover" />
          </div>
        </div>

        {/* OUTRO / TRANSITION */}
        <div className="w-[30vw] h-screen flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center">
                <div className="w-2 h-2 bg-black/20 rounded-full animate-pulse" />
            </div>
        </div>
      </div>
    </section>
  );
}
