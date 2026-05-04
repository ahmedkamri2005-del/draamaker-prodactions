'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

// --- Comprehensive Studio Data ---
const studiosData: Record<string, { 
  title: string; 
  description: string; 
  videoSrc: string; 
  images: string[];
  specs: { label: string; value: string }[];
  quote: string;
}> = {
  "atlas-studios": {
    title: "ATLAS STUDIOS",
    description: "The crown jewel of Moroccan filmmaking infrastructure. Spanning vast acreage, it offers limitless possibilities for massive set constructions and provides ready-made historical environments for epic productions. Established in Ouarzazate, it has served as the filming site for dozens of major international productions including Gladiator, Kingdom of Heaven, and Game of Thrones.",
    videoSrc: "/studios/studio.webm",
    specs: [
      { label: "Total Area", value: "30,000+ m²" },
      { label: "Location", value: "Ouarzazate, Morocco" },
      { label: "Facilities", value: "Soundstages, Workshops, Stables" },
      { label: "Notable Credits", value: "Gladiator, The Mummy, Game of Thrones" }
    ],
    quote: "A cinematic sandbox of unprecedented scale. From ancient empires to sprawling fantasy worlds, Atlas Studios provides the canvas and the infrastructure to build the unimaginable.",
    images: [
      "/all pic/Atlas Studios/IMG_0328.JPG",
      "/all pic/Atlas Studios/IMG_6677.JPG",
      "/all pic/Atlas Studios/IMG_6681.JPG",
      "/all pic/Atlas Studios/IMG_6696.JPG",
      "/all pic/Atlas Studios/IMG_6709.JPG",
      "/all pic/Atlas Studios/IMG_9259.JPG",
      "/all pic/Atlas Studios/IMG_9260.JPG",
      "/all pic/Atlas Studios/IMG_9266.JPG",
      "/all pic/Atlas Studios/IMG_9270.JPG",
      "/all pic/Atlas Studios/IMG_9301.JPG",
    ]
  },
  "jerusalem-set": {
    title: "THE JERUSALEM SET",
    description: "Originally constructed for Ridley Scott's 'Kingdom of Heaven', the Jerusalem set is one of the most iconic and detailed standing sets in the world. It features sprawling stone facades, grand city gates, and intricate interior spaces that recreate the 12th-century holy city with breathtaking authenticity.",
    videoSrc: "/studios/studio.webm",
    specs: [
      { label: "Type", value: "Permanent Standing Set" },
      { label: "Period", value: "Medieval / Biblical" },
      { label: "Key Features", value: "City Walls, Grand Plaza, Church Interriors" },
      { label: "Build Time", value: "6 Months Original Construction" }
    ],
    quote: "Step into the 12th-century. With towering stone facades and authentic architectural detailing, this sprawling standing set breathes monumental life into historical and biblical epics.",
    images: [
      "/all pic/Jerusalem set/IMG_0007.jpg",
      "/all pic/Jerusalem set/IMG_0020.jpg",
      "/all pic/Jerusalem set/IMG_0036.jpeg",
      "/all pic/Jerusalem set/IMG_0053.jpeg",
      "/all pic/Jerusalem set/IMG_0059.jpg",
      "/all pic/Jerusalem set/IMG_0069.jpg",
      "/all pic/Jerusalem set/IMG_0088.jpg",
      "/all pic/Jerusalem set/IMG_0102.jpg",
      "/all pic/Jerusalem set/IMG_0107.jpg",
      "/all pic/Jerusalem set/IMG_0119.jpeg",
      "/all pic/Jerusalem set/IMG_0127.jpg",
      "/all pic/Jerusalem set/IMG_0150.jpg",
    ]
  },
  "egyptian-sets": {
    title: "THE EGYPTIAN SETS",
    description: "Our Egyptian sets provide a monumental backdrop for pharaonic narratives. Featuring towering columns, oversized statues of deities, and hand-carved hieroglyphics, these backlots offer a scale and detail that transports viewers back 3,000 years into the past.",
    videoSrc: "/studios/studio.webm",
    specs: [
      { label: "Style", value: "Ancient Egyptian" },
      { label: "Height", value: "Up to 15m Columns" },
      { label: "Atmosphere", value: "Imperial / Sacred" },
      { label: "Flexibility", value: "Modular Set Pieces Available" }
    ],
    quote: "A monumental tribute to the pharaohs. With towering columns and intricate hieroglyphics, this set transports your production three millennia into the past with uncompromising scale.",
    images: [
      "/all pic/Egyptian Sets/DSCN5374.JPG",
      "/all pic/Egyptian Sets/DSCN5379.JPG",
      "/all pic/Egyptian Sets/DSCN5380.JPG",
      "/all pic/Egyptian Sets/DSCN5383.JPG",
      "/all pic/Egyptian Sets/DSCN5492.JPG",
      "/all pic/Egyptian Sets/DSCN5494.JPG",
      "/all pic/Egyptian Sets/DSCN5515.JPG",
      "/all pic/Egyptian Sets/DSCN5534.JPG",
      "/all pic/Egyptian Sets/DSCN5547.JPG",
      "/all pic/Egyptian Sets/DSCN5564.JPG",
    ]
  },
  "roman-set": {
    title: "THE ROMAN SET",
    description: "A majestic reconstruction of classical Roman architecture. From grand amphitheatres to patrician villas, this expansive set captures the grandeur and scale of the Roman Empire, ready to serve as the epicenter for gladiatorial epics and historical dramas.",
    videoSrc: "/studios/studio.webm",
    specs: [
      { label: "Style", value: "Classical Roman / Greco-Roman" },
      { label: "Elements", value: "Amphitheatre, Forum, Villas" },
      { label: "Durability", value: "Reinforced Plaster & Concrete" },
      { label: "Recent Projects", value: "Various Historical Series" }
    ],
    quote: "The grandeur of the Empire, reconstructed. From patrician villas to grand amphitheatres, this expansive environment offers a spectacular, battle-ready stage for classical epics.",
    images: [
      "/all pic/Roman Set/P1010033.JPG",
      "/all pic/Roman Set/P1010037.JPG",
      "/all pic/Roman Set/P1010038.JPG",
      "/all pic/Roman Set/P1010039.JPG",
      "/all pic/Roman Set/P1010043.JPG",
      "/all pic/Roman Set/P1010045.JPG",
      "/all pic/Roman Set/P1010047.JPG",
      "/all pic/Roman Set/P1010049.JPG",
      "/all pic/Roman Set/P1010050.JPG",
      "/all pic/Roman Set/P1010092.JPG",
      "/all pic/Roman Set/P1010094.JPG",
      "/all pic/Roman Set/P1010097.JPG",
      "/all pic/Roman Set/P1010101.JPG",
    ]
  },
  "artisanat-studio": {
    title: "ARTISANAT STUDIO",
    description: "The heart of our custom construction and prop-making capabilities. Artisanat Studio provides high-clearance workspace for master carvers, plasterers, and set decorators. It's here that the intricate details that define a production's visual world are born.",
    videoSrc: "/studios/studio.webm",
    specs: [
      { label: "Type", value: "Production Workshop" },
      { label: "Workforce", value: "Access to 200+ Local Artisans" },
      { label: "Capabilities", value: "Plaster, Wood, Metal, Textile" },
      { label: "Access", value: "Large-Scale Truck Loading" }
    ],
    quote: "Where the visual world is forged. Our high-clearance workshops and master artisans provide the specialized capabilities necessary to bring the most intricate production designs to life.",
    images: [
      "/all pic/Artisanat Studio/DSCN5401.JPG",
      "/all pic/Artisanat Studio/DSCN5402.JPG",
      "/all pic/Artisanat Studio/DSCN5405.JPG",
      "/all pic/Artisanat Studio/DSCN5409.JPG",
      "/all pic/Artisanat Studio/DSCN5410.JPG",
      "/all pic/Artisanat Studio/DSCN5414.JPG",
      "/all pic/Artisanat Studio/DSCN5415.JPG",
      "/all pic/Artisanat Studio/IMG_0486.JPG",
      "/all pic/Artisanat Studio/IMG_0496.JPG",
      "/all pic/Artisanat Studio/IMG_0499.JPG",
      "/all pic/Artisanat Studio/IMG_0501.JPG",
      "/all pic/Artisanat Studio/IMG_0506.JPG",
      "/all pic/Artisanat Studio/IMG_0507.JPG",
      "/all pic/Artisanat Studio/IMG_0509.JPG",
      "/all pic/Artisanat Studio/IMG_0514.JPG",
    ]
  },
  "marrakech-studio": {
    title: "MARRAKECH <br /> STUDIO",
    description: "Located just 35 minutes from the beating heart of Marrakech, our premier Marrakech Studio is a state-of-the-art facility trusted by global giants. It features a fully equipped 800m² green screen soundstage, specialized production workshops, and versatile historical sets.",
    videoSrc: "/studios/studio.webm",
    specs: [
      { label: "Total Area", value: "800m² Green Screen + Expansive Backlots" },
      { label: "Location", value: "Marrakech, Morocco" },
      { label: "Facilities", value: "Soundstages, Costume/Prop Workshops, SFX Rooms" },
      { label: "Notable Credits", value: "Netflix, MBC, Starzplay, Fox Nation" }
    ],
    quote: "A comprehensive cinematic hub. We provide a massive green screen soundstage and state-of-the-art facilities capable of seamless collaboration with tier-one international productions.",
    images: [
      "/studios/DSC01201-1024x683.jpg",
      "/studios/WhatsApp-Image-2024-01-27-at-15.38.41-1024x768.jpeg",
      "/studios/WhatsApp-Image-2024-01-27-at-15.38.49-1-1024x574.jpeg",
      "/studios/WhatsApp-Image-2024-01-27-at-15.39.43-1-1-1024x768.jpeg",
      "/studios/duclie11 - Copy.jpeg",
      "/studios/dulcie 2 - Copy.jpeg",
      "/studios/dulcie 7 - Copy.jpeg",
      "/studios/WhatsApp-Image-2024-01-27-at-15.35.18-1-e1738861424497-1024x586.jpeg",
    ]
  }
};

// --- Helper Components ---

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

export default function StudioSubPage({ params }: { params: { slug: string } }) {
  const data = studiosData[params.slug];
  
  if (!data) {
    notFound();
  }

  // Get other studios for the footer navigation
  const otherStudios = Object.entries(studiosData)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3);

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
          <video
            src={data.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/studios/studio.webm" type="video/webm" />
          </video>
          {/* Subtle dark overlay for readability */}
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
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white uppercase leading-[0.9] tracking-tighter mb-8"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p className="text-base md:text-lg lg:text-xl text-white/90 font-sans font-medium max-w-2xl leading-relaxed">
              {data.description}
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
              {data.specs.map((spec, i) => (
                <div key={i} className="border-b border-black/10 pb-4">
                  <span className="block text-[10px] uppercase tracking-widest text-black/30 mb-2">{spec.label}</span>
                  <span className="block text-lg font-serif font-bold text-black">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-col items-end pt-32">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-black/80 italic leading-snug w-full max-w-4xl">
              "{data.quote}"
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

        <MasonryGrid images={data.images} title={data.title} />
      </section>

      {/* 4. OTHER STUDIOS NAVIGATION */}
      <section className="w-full py-24 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-sm uppercase tracking-[0.4em] font-extrabold text-black/20 mb-12">
            Explore Other Studios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherStudios.map(([slug, studio]) => (
              <Link key={slug} href={`/studios/${slug}`} className="group block overflow-hidden">
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg bg-gray-100">
                  <Image 
                    src={studio.images[0]} 
                    alt={studio.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {studio.title}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-black/40 group-hover:text-black transition-colors duration-500">
                  View Studio &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="w-full py-24 md:py-32 bg-[#1A1A1A] flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tight mb-8">
          Ready to Scout?
        </h2>
        <p className="max-w-xl text-gray-400 font-sans font-medium text-sm md:text-base leading-relaxed mb-12">
          Contact our studio management team to schedule a physical tour of {data.title.replace(/<br\s*\/?>/gi, " ")} or to discuss your specific construction requirements.
        </p>
        <button className="px-10 py-4 border border-white/30 text-white bg-transparent uppercase font-sans font-extrabold text-xs tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-500">
          Book a Studio Tour
        </button>
      </section>
      
    </main>
  );
}
