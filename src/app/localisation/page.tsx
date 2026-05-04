'use client'

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const localisations = [
    { title: "Mountains", img: "/images/locations/atlas-mountains.jpg", desc: "Morocco is home to the stunning Atlas Mountains, located in the southwestern region of the country. With its highest peak Toubkal (4,167 km), it separates the Mediterranean and Atlantic coastlines from the Sahara Desert." },
    { title: "Cities & Medinas", img: "/images/locations/medina.jpg", desc: "A medina is the old part of a town or city in Morocco, typically walled and containing narrow streets, fountains, palaces and mosques. Many Medina are car-free as there is not enough space in the alleyways." },
    { title: "Kasbahs", img: "/images/locations/kasbah.jpg", desc: "A Kasbah is a type of medina or citadel in the central part of town, usually built out of clay. It is perfect for filming Biblical, Mesopotamia and Ancient Egyptian scenes." },
    { title: "Desert & Oasis", img: "/images/locations/desert-oasis.jpg", desc: "Morocco offers breathtaking sand and harsh desert sceneries, it doubles from a lunar basaltic landscape to lush, sea like dunes changing colors from orange to gold everyday. An oasis is a fertile green area in a desert region created by a well or spring, offering refuge and relief in hot desert conditions as well as undeniably beautiful lush landscape." },
    { title: "Sea & Coastlines", img: "/images/locations/sea-coastlines.jpg", desc: "Morocco borders the North Atlantic Ocean to the west and the west Mediterranean Sea to the north, with breathtaking coastline, stunning beaches, new and old ports." },
    { title: "Gorges", img: "/images/locations/gorges.jpg", desc: "The Todgha Gorges are a series of limestone river canyons in the eastern part of the High Atlas Mountains near the town of Tinerhir. Both the Todgha and neighbouring Dades Rivers carved out these deep cliff-sided canyons with walls as high as 400 metres. During the dry season the canyon floor has, at the most, a small stream, making the wadi floor easily traversable." },
    { title: "Roman Ruins", img: "/images/locations/roman-ruins.jpg", desc: "Visible from the nearby holy town of Moulay Idriss Zerhoune and from higher points throughout the valley, Volubilis is one of Morocco’s best-preserved Roman ruins, located between the imperial cities of Fez and Meknes on a fertile plain surrounded by wheat fields. Established before the Christian Era when it was part of Mauretania, Volubilis was the administrative center of the kingdom of Mauretania and one of the most remote cities within the Roman Empire, located in the far southwestern region." }
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
                                alt={loc.title}
                                className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700 ease-in-out"
                            />
                        </div>
                        <div className="mt-3 md:mt-6 flex flex-col">
                            <h2 className="font-bold text-4xl uppercase font-borscha tracking-tight mb-4">{loc.title}</h2>
                            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-8">{loc.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
