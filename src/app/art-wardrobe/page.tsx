'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../../components/layout/Footer';

const armorImages = [
  "/Art & Wardrobe Assets/armor/armor-01.webp",
  "/Art & Wardrobe Assets/armor/armor-05.webp",
  "/Art & Wardrobe Assets/armor/armor-06.webp",
  "/Art & Wardrobe Assets/armor/armor-08.webp",
  "/Art & Wardrobe Assets/armor/armor-11.webp",
  "/Art & Wardrobe Assets/armor/armor-14.webp",
  "/Art & Wardrobe Assets/armor/armor-15.webp",
  "/Art & Wardrobe Assets/armor/armor-16.webp",
  "/Art & Wardrobe Assets/armor/armor-19.webp",
  "/Art & Wardrobe Assets/armor/armor-25.webp"
];

const costumesImages = [
  "/Art & Wardrobe Assets/armor/costume-03.webp",
  "/Art & Wardrobe Assets/armor/costume-04.webp",
  "/Art & Wardrobe Assets/armor/costume-05.webp",
  "/Art & Wardrobe Assets/armor/costume-06.webp",
  "/Art & Wardrobe Assets/armor/costume-07.webp",
  "/Art & Wardrobe Assets/armor/costume-08.webp",
  "/Art & Wardrobe Assets/armor/costume-09.webp",
  "/Art & Wardrobe Assets/armor/costume-11.webp",
  "/Art & Wardrobe Assets/custumes/cust1.webp",
  "/Art & Wardrobe Assets/custumes/cust2.webp",
  "/Art & Wardrobe Assets/custumes/cust3.webp",
  "/Art & Wardrobe Assets/custumes/cust4.webp",
  "/Art & Wardrobe Assets/custumes/cust7.webp",
  "/Art & Wardrobe Assets/custumes/cust8.webp",
  "/Art & Wardrobe Assets/custumes/cust9.webp",
  "/Art & Wardrobe Assets/custumes/cust10.webp",
  "/Art & Wardrobe Assets/custumes/cust11.webp",
  "/Art & Wardrobe Assets/custumes/cust12.webp"
];

const egyptianImages = [
  "/Art & Wardrobe Assets/egypt.gurl/jrl1.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl2.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl3.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl4.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl7.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl8.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl9.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl10.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl11.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl12.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl13.webp",
  "/Art & Wardrobe Assets/egypt.gurl/jrl14.webp"
];

const militaryImages = [
  "/Art & Wardrobe Assets/army/army1.webp",
  "/Art & Wardrobe Assets/army/army2.webp",
  "/Art & Wardrobe Assets/army/army3.webp",
  "/Art & Wardrobe Assets/army/army4.webp",
  "/Art & Wardrobe Assets/army/army7.webp",
  "/Art & Wardrobe Assets/army/army8.webp",
  "/Art & Wardrobe Assets/army/army9.webp",
  "/Art & Wardrobe Assets/army/army10.webp",
  "/Art & Wardrobe Assets/army/army11.webp",
  "/Art & Wardrobe Assets/army/army12.webp",
  "/logistic/dreamaker-soldiers.jpg",
  "/logistic/dreamaker-soldier-action.jpg"
];

const categories = [
  {
    id: "armor",
    title: "Armor & Battle Gear",
    description: "From rugged leather tunics and chainmail to intricately crafted chest pieces, our armory is equipped to outfit entire legions. Perfect for historical epics, medieval fantasy, and intense battle sequences.",
    images: armorImages,
    link: "/art-wardrobe/armor"
  },
  {
    id: "costumes",
    title: "Cinematic Costumes & Garments",
    description: "Drape your cast in historical authenticity. Our vast wardrobe includes everything from flowing ancient robes and traditional Moroccan attire to iconic plumed Roman helmets, meticulously tailored for period accuracy.",
    images: costumesImages,
    link: "/art-wardrobe/costumes"
  },
  {
    id: "egyptian",
    title: "Egyptian Jewelry & Props",
    description: "The devil is in the details. Discover a treasure trove of authentic Egyptian necklaces, golden amulets, and ornate bracelets that bring the majestic and opulent world of the Pharaohs to the big screen.",
    images: egyptianImages,
    link: "/art-wardrobe/egyptian-jewelry"
  },
  {
    id: "military",
    title: "Modern Military & Tactical Gear",
    description: "From modern infantry units to specialized tactical forces, our wardrobe and logistics departments provide combat-ready authenticity. We supply complete military uniforms, tactical vests, weaponry props, and even heavy armored transport vehicles, ensuring your modern warfare sequences are fully equipped and incredibly realistic.",
    images: militaryImages,
    link: "/art-wardrobe/military",
    autoFade: true
  }
];

const AutoFadingSlideshow = ({ images, imageFit = "cover" }: { images: string[], imageFit?: "contain" | "cover" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-transparent">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          fill
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === i ? 'opacity-100' : 'opacity-0'} ${imageFit === 'contain' ? 'object-contain p-8 md:p-12' : 'object-cover'}`}
        />
      ))}
    </div>
  );
};

const MarqueeSlider = ({ images, className = "mt-6" }: { images: string[], className?: string }) => (
  <div className={`w-full overflow-hidden flex items-center ${className}`}>
    <div className="flex animate-marquee-slow whitespace-nowrap">
      {[...Array(3)].map((_, groupIdx) => (
        <div key={groupIdx} className="flex items-center">
          {images.map((src, i) => (
            <div 
              key={i} 
              className="relative w-20 h-24 md:w-28 md:h-32 mx-2 md:mx-3 rounded-md overflow-hidden border border-black/10 bg-black/5"
            >
              <Image
                src={src}
                alt={`Thumbnail ${i}`}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const ImageSlider = ({ images, imageFit = "contain", bgColor = "bg-[#E5E0D8]" }: { images: string[], imageFit?: "contain" | "cover", bgColor?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Main Slideshow - Now Full Height */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={images[index]}
              alt={`Slide ${index + 1}`}
              fill
              className={imageFit === 'contain' ? 'object-contain p-4 md:p-8' : 'object-cover'}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Professional Backdrop */}
        <div className={`absolute inset-0 -z-10 ${bgColor}`} />
      </div>

      {/* Floating Bottom Marquee Slider */}
      <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-black/50 to-transparent pt-12 pb-6 px-6 overflow-hidden flex items-center">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {[...Array(3)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center">
              {images.map((src, i) => (
                <div 
                  key={i} 
                  className={`relative w-24 h-32 md:w-28 md:h-36 mx-3 rounded-md overflow-hidden border bg-white/10 backdrop-blur-sm cursor-pointer transition-all duration-500 ${
                    index === i 
                      ? 'border-white ring-1 ring-white scale-105' 
                      : 'border-white/20 opacity-80 hover:border-white hover:opacity-100 hover:scale-105'
                  }`}
                  onClick={() => setIndex(i)}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${i}`}
                    fill
                    className={imageFit === 'contain' ? 'object-contain p-2' : 'object-cover'}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ArtWardrobePage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#00AEEF] selection:text-white">
      {/* ── BACK LINK ──────────────────────────────────────────────────── */}
      <Link
        href="/"
        className="fixed top-24 md:top-32 left-6 md:left-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:-translate-x-2 transition-all duration-300 z-50 mix-blend-difference"
      >
        <span>&larr;</span> Back Home
      </Link>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-end items-center text-center px-6 pb-16 md:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/armor/costume-02.png"
            alt="Cinematic Wardrobe Workshop"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 max-w-6xl mx-auto"
        >
          <span className="text-[#00AEEF] text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold mb-8 block">
            Crafting Authenticity
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white uppercase leading-[0.9] tracking-tighter mb-8">
            The Art of <br />
            <span className="italic font-medium">Cinematic Wardrobe</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 font-sans font-medium leading-relaxed">
            From the heavy leather of battle-worn armor to the intricate gold of Pharaonic jewelry, our wardrobe and art departments hold a massive archive of human history. With thousands of authentic, hand-crafted pieces, we provide the textures that make your characters real.
          </p>
        </motion.div>
      </section>

      {/* 2. ALTERNATING SPLIT SECTIONS */}
      <section className="w-full flex flex-col">
        {categories.map((category, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={category.id} 
              className={`w-full flex flex-col-reverse ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-stretch bg-[#F4F4F0] min-h-screen lg:h-screen`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 h-[60vh] lg:h-full relative overflow-hidden bg-[#E5E0D8]">
                <AutoFadingSlideshow images={category.images!} imageFit="contain" />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 lg:h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 py-16 lg:py-0 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-xl w-full"
                >
                  <h2 className={`font-serif font-bold text-black leading-tight uppercase ${category.id === 'military' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-6xl lg:text-7xl'}`}>
                    {category.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-800 font-sans max-w-lg mt-6 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <MarqueeSlider 
                    images={category.images!} 
                    className={category.id === 'armor' ? "mt-10 md:mt-20" : "mt-6"} 
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section / Transition */}
      <section className="w-full py-32 bg-black flex flex-col items-center justify-center text-center px-6">
          <h3 className="text-3xl md:text-5xl font-serif text-white uppercase mb-8">
            Looking for something specific?
          </h3>
          <p className="max-w-xl text-white/50 font-sans text-sm tracking-widest uppercase mb-12">
            Our archive expands every season. Contact us for custom fabrication or deep-archive searches.
          </p>
          <button onClick={() => window.dispatchEvent(new Event('openQuoteModal'))}
            className="px-12 py-5 bg-[#00AEEF] text-white font-extrabold text-[11px] tracking-[0.3em] uppercase hover:bg-[#009ED8] hover:shadow-[0_0_30px_rgba(0,174,239,0.4)] transition-all duration-500 rounded-sm inline-block"
          >
            Inquire About Art &amp; Wardrobe
          </button>
      </section>

      {/* Marquee Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 20s linear infinite;
          width: max-content;
        }
      `}} />

      <Footer />
    </main>
  );
}
