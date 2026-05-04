'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MasonryGrid = ({ images, title }: { images: string[]; title: string }) => {
  const patterns = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <div className="max-w-[100rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px] grid-flow-dense">
      {images.map((src, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden rounded-xl bg-gray-200 group ${patterns[index % patterns.length]} shadow-sm hover:shadow-2xl transition-all duration-500`}
        >
          <Image
            src={src}
            alt={`${title} Gallery Image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default function OasisStudiosPage() {
  const images = [
    "/all pic/Fint/Fint.jpg",
    "/all pic/Fint/DSCN3972.JPG",
    "/all pic/Fint/DSCN3975.JPG",
    "/all pic/Fint/DSCN3976.JPG",
    "/all pic/Fint/DSCN3980.JPG",
    "/all pic/Fint/DSCN3983.JPG",
    "/all pic/Fint/DSCN3984.JPG",
    "/all pic/Fint/DSCN3985.JPG",
    "/all pic/Fint/DSCN3986.JPG",
    "/all pic/Fint/DSCN3987.JPG",
  ];

  return (
    <main className="bg-[#F4F4F0] min-h-screen overflow-x-hidden selection:bg-black selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-end">
        <Link 
          href="/studios" 
          className="absolute top-24 left-6 md:left-16 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:-translate-x-2 transition-all duration-300 z-50"
        >
          <span>&larr;</span> Back to Studios
        </Link>

        {/* Video Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/all pic/Fint/Fint.jpg"
            alt="Oasis Studios Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* Pure dark overlay for readability (NO white gradients) */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Hero Content (Left Aligned) */}
        <div className="relative z-20 w-full px-6 md:px-16 lg:px-24 pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl text-left"
          >
            <span className="block text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Studio Feature
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white uppercase leading-[0.9] tracking-tighter mb-8">
              OASIS <br /> STUDIOS
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 font-sans font-medium max-w-2xl leading-relaxed">
              Spanning 17 hectares just above the stunning Fint Oasis near Ouarzazate, Oasis Studios provides a world-class production environment built to exact international standards, blending natural beauty with high-end infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SPECIFICATIONS SECTION */}
      <section className="w-full bg-[#F4F4F0] py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-start">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm uppercase tracking-[0.4em] font-extrabold text-black/40 mb-8">
              Technical Specifications
            </h2>
            <div className="space-y-8">
              <div className="border-b border-black/10 pb-4">
                <span className="block text-[10px] uppercase tracking-widest text-black/30 mb-2">Total Area</span>
                <span className="block text-lg font-serif font-bold text-black">17 Hectares (170,000 m²)</span>
              </div>
              <div className="border-b border-black/10 pb-4">
                <span className="block text-[10px] uppercase tracking-widest text-black/30 mb-2">Location</span>
                <span className="block text-lg font-serif font-bold text-black">Fint Oasis, Ouarzazate, Morocco</span>
              </div>
              <div className="border-b border-black/10 pb-4">
                <span className="block text-[10px] uppercase tracking-widest text-black/30 mb-2">Facilities</span>
                <span className="block text-lg font-serif font-bold text-black">Expansive Backlots, Projection Rooms, Production Offices</span>
              </div>
              <div className="border-b border-black/10 pb-4">
                <span className="block text-[10px] uppercase tracking-widest text-black/30 mb-2">Expertise</span>
                <span className="block text-lg font-serif font-bold text-black">Highly qualified crews for US, UK, & French productions</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-col items-end pt-32">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-black/80 italic leading-snug w-full max-w-4xl">
              "A comprehensive cinematic hub nestled in nature. We provide highly qualified technical crews capable of seamless collaboration with foreign productions, ensuring your project meets the highest global standards from prep to wrap."
            </p>
            <button className="mt-10 whitespace-nowrap px-10 py-5 bg-[#00AEEF] text-white uppercase text-xs font-bold tracking-wider hover:bg-[#009ED8] hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Request Availability
            </button>
          </div>
        </div>
      </section>

      {/* 3. MASONRY GALLERY */}
      <section className="w-full bg-[#F4F4F0] pb-24 md:pb-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto mb-16 px-4">
          <h2 className="text-xs uppercase tracking-[0.5em] font-extrabold text-black/30 mb-4">
            Visual Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-black uppercase">
            Set Environment
          </h3>
        </div>

        <MasonryGrid images={images} title="Oasis Studios" />
      </section>

      {/* CTA FOOTER */}
      <section className="w-full py-24 md:py-32 bg-[#1A1A1A] flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tight mb-8">
          Ready to Scout?
        </h2>
        <p className="max-w-xl text-gray-400 font-sans font-medium text-sm md:text-base leading-relaxed mb-12">
          Contact our studio management team to schedule a physical tour of Oasis Studios or to discuss your specific construction requirements.
        </p>
        <button className="px-10 py-4 border border-white/30 text-white bg-transparent uppercase font-sans font-extrabold text-xs tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-500">
          Book a Studio Tour
        </button>
      </section>
      
    </main>
  );
}
