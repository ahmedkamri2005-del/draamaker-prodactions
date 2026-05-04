'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Footer from '../../../components/layout/Footer';

// --- Gallery Data ---
const GALLERY_DATA: Record<string, { title: string; folder: string; count: number; extension: string; prefix: string }> = {
  'sahara.desert': { title: 'The Sahara Desert', folder: 'sahara.desert', count: 7, extension: 'webp', prefix: 'sahara' },
  'Kasbahs': { title: 'Kasbahs & Ruins', folder: 'Kasbahs', count: 13, extension: 'JPG', prefix: 'kasbah' },
  'cities.medina': { title: 'Medinas & Cities', folder: 'cities.medina', count: 14, extension: 'webp', prefix: 'medina' },
  'Atlas.mountaine': { title: 'Atlas Mountains', folder: 'Atlas.mountaine', count: 8, extension: 'webp', prefix: 'atlas' },
  'Wild.athlantique': { title: 'Wild Atlantic Shores', folder: 'Wild.athlantique', count: 11, extension: 'webp', prefix: 'wild' },
  'Epic.roades': { title: 'Epic Roads & Canyons', folder: 'Epic.roades', count: 13, extension: 'webp', prefix: 'Roads' },
  'Caves': { title: 'Caves & Steppes', folder: 'Caves', count: 12, extension: 'webp', prefix: 'cave' },
};

export default function LocationAlbum() {
  const params = useParams();
  const id = params.id as string;
  const album = GALLERY_DATA[id];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!album) return <div className="bg-black min-h-screen flex items-center justify-center text-white">Album not found.</div>;

  // Generate image paths
  const images = Array.from({ length: album.count }).map((_, i) => {
    let filename = `${album.prefix}${i + 1}.${album.extension}`;
    // Fix typo for Kasbah 5
    if (id === 'Kasbahs' && i === 4) filename = 'kasebah5.JPG';
    // Fix extension for Kasbah 10 & 11 (lowercase jpg)
    if (id === 'Kasbahs' && (i === 9 || i === 10)) filename = `kasbah${i + 1}.jpg`;
    
    return `/pics.of.dmp/Locations/${album.folder}/${filename}`;
  });

  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-[#00AEEF] selection:text-white">
      
      {/* ── HEADER ────────────────────────────────────────────────────── */}
      <header className="relative pt-32 md:pt-48 pb-12 md:pb-16 px-6 text-center border-b border-white/5">
        <Link
          href="/locations"
          className="absolute top-24 md:top-32 left-6 md:left-12 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all duration-300"
        >
          <span>&larr;</span> Back to Locations
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[#00AEEF] text-xs tracking-[0.5em] uppercase font-bold mb-4 block">Visual Album</span>
          <h1 className="text-4xl md:text-7xl font-serif uppercase tracking-tighter leading-none">{album.title}</h1>
        </motion.div>
      </header>

      {/* ── GALLERY GRID ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group cursor-zoom-in overflow-hidden rounded-sm bg-zinc-900"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`${album.title} frame ${idx + 1}`}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[10px] font-bold tracking-widest text-white uppercase border border-white/40 px-4 py-2 backdrop-blur-sm">View Frame</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-full"
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              />
              <button 
                className="absolute -top-12 right-0 text-white/50 hover:text-white uppercase text-[10px] font-bold tracking-widest"
                onClick={() => setSelectedImage(null)}
              >
                Close ESC
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
