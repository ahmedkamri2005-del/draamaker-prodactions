'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Footer from '../../../components/layout/Footer';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BacklotsPage() {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalTriggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!horizontalSectionRef.current || !horizontalTriggerRef.current) return;

    const totalWidth = horizontalSectionRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const xMove = -(totalWidth - viewportWidth);

    gsap.to(horizontalSectionRef.current, {
      x: xMove,
      ease: "none",
      scrollTrigger: {
        trigger: horizontalTriggerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: horizontalTriggerRef });

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-[#00AEEF] selection:text-white">
      
      {/* 00. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-start overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            src="/studios/studio.webm"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="relative z-20 w-full px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <span className="block text-[#00AEEF] text-xs font-bold uppercase tracking-[0.4em] mb-6">
              Infrastructure & Scale
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white uppercase leading-[0.9] tracking-tighter mb-10">
              THE EPICENTER OF <br />
              CINEMATIC CREATION
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/80 font-sans font-medium leading-relaxed">
              From massive acoustically-treated sound stages to sprawling permanent backlots that recreate ancient worlds. Dreamaker Productions provides the infrastructure and technical expertise to build and capture your most ambitious visions in a controlled environment.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#00AEEF] to-transparent" />
        </div>
      </section>

      {/* 01. STANDING SETS & PERMANENT BACKLOTS (Horizontal Slider) */}
      <section ref={horizontalTriggerRef} className="relative bg-black overflow-hidden border-t border-white/5">
        <div 
          ref={horizontalSectionRef} 
          className="h-screen flex items-center flex-nowrap will-change-transform"
          style={{ width: 'max-content' }}
        >
          {/* Intro Slide */}
          <div className="w-screen h-screen flex flex-col justify-center px-8 md:px-24 flex-shrink-0">
            <h2 className="text-sm uppercase tracking-[0.5em] font-extrabold text-[#00AEEF] mb-8">
              Permanent Standing Sets
            </h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white uppercase mb-8 max-w-4xl leading-tight">
              A World Built <br /> For Authenticity
            </h3>
            <div className="max-w-xl space-y-6">
              <p className="text-lg md:text-xl text-white/60 font-sans leading-relaxed italic">
                "Morocco is world-renowned for its colossal standing sets that offer unmatched scale and authenticity."
              </p>
              <p className="text-sm md:text-base text-white/40 font-sans uppercase tracking-widest font-bold border-l-2 border-[#00AEEF] pl-6">
                These 'ready-to-shoot' environments significantly reduce construction budgets and lead times.
              </p>
            </div>
          </div>

          {/* Slide 1: Jerusalem */}
          <div className="h-screen w-[85vw] md:w-[75vw] flex items-center justify-center px-8 md:px-16 flex-shrink-0">
            <div className="relative w-full aspect-[21/9] group overflow-hidden rounded-sm">
              <Image 
                src="/studios/koh2 - Copy.jpg" 
                alt="Jerusalem Set" 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-8 left-8 text-left translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-[#00AEEF] text-[10px] font-bold uppercase tracking-widest mb-2 block">Iconic Backlot</span>
                <h4 className="text-2xl font-serif text-white uppercase italic">Jerusalem Set — The Hills Have Eyes</h4>
              </div>
            </div>
          </div>

          {/* Slide 2: Rome/Egypt */}
          <div className="h-screen w-[85vw] md:w-[75vw] flex items-center justify-center px-8 md:px-16 flex-shrink-0">
            <div className="relative w-full aspect-[21/9] group overflow-hidden rounded-sm">
              <Image 
                src="/studios/DSC01174-1024x683.jpg" 
                alt="Ancient Egypt Set" 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-8 left-8 text-left translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-[#00AEEF] text-[10px] font-bold uppercase tracking-widest mb-2 block">Monumental Backlot</span>
                <h4 className="text-2xl font-serif text-white uppercase italic">Ancient Egypt — CLA Studios</h4>
              </div>
            </div>
          </div>

          {/* Slide 3: Gas Heaven */}
          <div className="h-screen w-[85vw] md:w-[75vw] flex items-center justify-center px-8 md:px-16 flex-shrink-0">
            <div className="relative w-full aspect-[21/9] group overflow-hidden rounded-sm">
              <Image 
                src="/studios/koh7 - Copy.jpg" 
                alt="Gas Heaven Set" 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-8 left-8 text-left translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-[#00AEEF] text-[10px] font-bold uppercase tracking-widest mb-2 block">Cult Classic</span>
                <h4 className="text-2xl font-serif text-white uppercase italic">Gas Heaven — Standing Set</h4>
              </div>
            </div>
          </div>

          {/* End Slide */}
          <div className="w-[40vw] h-screen flex items-center justify-center flex-shrink-0">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:border-[#00AEEF] transition-colors duration-500">
                <div className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold group-hover:text-white transition-colors duration-500">End of Backlots</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. SOUND STAGES (Split Screen) */}
      <section className="w-full flex flex-col md:flex-row items-stretch bg-black overflow-hidden">
        {/* Left: Image (60%) */}
        <div className="w-full md:w-[60%] h-[50vh] md:h-screen relative overflow-hidden">
          <Image 
            src="/studios/DSC01172-1024x683.jpg" 
            alt="Colossal Sound Stage" 
            fill 
            className="object-cover grayscale brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
          {/* Subtle scale indicator (tiny human figure logic via text overlay if not in pic) */}
          <div className="absolute bottom-12 right-12 border border-white/20 p-4 backdrop-blur-sm">
            <span className="text-[8px] uppercase tracking-widest text-white/50 block mb-1">Scale Check</span>
            <span className="text-[10px] text-white font-bold">15M CLEARANCE HEIGHT</span>
          </div>
        </div>

        {/* Right: Content (40%) */}
        <div className="w-full md:w-[40%] flex flex-col justify-center p-10 md:p-20 bg-zinc-950">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm uppercase tracking-[0.5em] font-extrabold text-[#00AEEF] mb-10">
              Sound Stages
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white uppercase leading-tight mb-8">
              World-Class <br /> Facilities
            </h3>
            <p className="text-white/60 font-sans text-lg leading-relaxed mb-12 italic">
              "For total control over lighting, sound, and atmosphere, we offer access to Morocco’s premier sound stages, including the iconic facilities at Atlas Studios."
            </p>
            
            <ul className="space-y-6">
              {[
                "Fully equipped with heavy-duty grids",
                "Silent air conditioning systems",
                "Massive elephant doors for easy access",
                "High-standard acoustic treatment"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm font-sans font-bold uppercase tracking-widest text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[#00AEEF] mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 03. ARTISANAT & CUSTOM CONSTRUCTION */}
      <section className="w-full bg-black py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h2 className="text-sm uppercase tracking-[0.5em] font-extrabold text-[#00AEEF] mb-10">
              Bespoke Construction
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white uppercase leading-tight mb-10">
              Bespoke Set <br /> Construction & <br /> Workshops
            </h3>
            <p className="text-xl text-white/70 font-sans leading-relaxed">
              Through our 'Artisanat' workshops, we collaborate with Morocco’s finest craftsmen—experts in traditional plaster, wood, and stone techniques that are increasingly rare elsewhere.
            </p>
          </div>

          {/* Texture Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "/studios/moodboard/artisanat-1.jpg", label: "Traditional Plaster (Tadelakt)" },
              { src: "/studios/moodboard/artisanat-2.jpg", label: "Hand-Carved Cedar Detail" },
              { src: "/studios/moodboard/artisanat-3.jpg", label: "Stone Carving Textures" },
              { src: "/studios/moodboard/artisanat-4.jpg", label: "Custom Metal Scaffolding" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative aspect-square group overflow-hidden border border-white/5"
              >
                <Image 
                  src={item.src} 
                  alt={item.label} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white leading-tight">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. CALL TO ACTION */}
      <section className="w-full py-40 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00AEEF]/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white uppercase tracking-tight mb-8">
            Ready to build <br /> your world?
          </h2>
          <p className="max-w-xl mx-auto text-white/50 font-sans font-medium text-sm md:text-base leading-relaxed mb-16">
            Contact us for availability, technical floor plans, and custom construction quotes for our backlots and sound stages.
          </p>
          <button onClick={() => window.dispatchEvent(new Event('openQuoteModal'))}
            className="inline-block px-12 py-5 border border-[#00AEEF] text-[#00AEEF] uppercase font-sans font-extrabold text-xs tracking-[0.4em] hover:bg-[#00AEEF] hover:text-white transition-all duration-500"
          >
            INQUIRE ABOUT STUDIOS
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
