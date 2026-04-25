'use client'

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const localisations = [
    { city: "MARRAKECH", img: "/locali/marrakeche1.jpg", desc: "The red city, where history meets luxury production." },
    { city: "MERZOUGA", img: "/locali/merzouga.jpg", desc: "Infinite dunes and the most cinematic desert light in the world." },
    { city: "FES", img: "/locali/fes3.jpg", desc: "The world's largest car-free urban area, a labyrinth of textures." },
    { city: "OUARZAZATE", img: "/locali/ouarzazate-web.jpg", desc: "The Hollywood of Africa. Iconic studios and desert fortresses." },
    { city: "CHEFCHAOUEN", img: "/locali/Chefchaouen.jpg", desc: "The blue pearl. Unique aesthetic for artistic storytelling." },
    { city: "RABAT", img: "/locali/rabat-morocco.jpeg", desc: "Modern architectural marvels blended with royal history." },
    { city: "ATLAS MOUNTAINS", img: "/locali/atlas-mountains-in-morocco.webp", desc: "Rugged peaks and authentic Berber villages." },
    { city: "CASABLANCA", img: "/locali/casa.jpg", desc: "A mix of Art Deco legacy and futuristic urban vibes." }
];

export default function LocalisationPage() {
    return (
        <main className="min-h-screen bg-white text-black relative pt-32 pb-24">
            {/* BACK HOME LINK */}
            <Link href="/" className="fixed top-24 left-8 z-[60] mix-blend-difference text-white/50 hover:text-white transition-all flex items-center gap-2 text-xs tracking-[0.2em] uppercase">
                <ArrowLeft size={16} /> BACK HOME
            </Link>

            {/* HERO TITLE */}
            <div className="px-12 mb-24">
                <h1 className="text-[10vw] font-black uppercase leading-none font-borscha tracking-tighter">
                    FILM IN <br /> MOROCCO
                </h1>
                <p className="text-xl text-gray-500 uppercase tracking-widest mt-4">
                    A world of landscapes in one single destination.
                </p>
            </div>

            {/* MASONRY GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-6 md:px-12">
                {localisations.map((loc, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''}`}>
                        <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden group cursor-crosshair">
                            <img
                                src={loc.img}
                                alt={loc.city}
                                className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700 ease-in-out"
                            />
                        </div>
                        <div className="mt-3 md:mt-6">
                            <h2 className="font-bold text-4xl uppercase font-borscha tracking-tight">{loc.city}</h2>
                            <p className="text-gray-600 mt-2 text-lg max-w-sm">{loc.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
