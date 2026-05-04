'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import QuoteModal from '../../components/QuoteModal';

// --- Types ---
interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
}

interface Category {
  id: string;
  title: string;
  services: Service[];
}

// --- Placeholder Data ---
const categories: Category[] = [
  {
    id: "production-logistics",
    title: "PRODUCTION LOGISTICS",
    services: [
      {
        number: "01",
        title: "Permits, Government Relations & Official Liaison",
        description: "We maintain strong relationships with the CCM (Centre Cinématographique Marocain / Moroccan Cinematographic Centre, the government entity responsible for issuing shooting permits in Morocco), regional governorates, the Royal Gendarmerie, the Royal Moroccan Army, municipal authorities, the Ministry of Communication, and other key institutions. Our team facilitates permits for heritage sites, military environments, aerial operations, road closures, crowd work, and sensitive locations, while also supporting official liaison with the Ministry of Foreign Affairs for visa-related matters when required.",
        image: "/pics.of.dmp/servises/services1.webp"
      },
      {
        number: "02",
        title: "Customs Clearance",
        description: "We manage customs clearance for temporary or permanent import and export of production equipment through Morocco’s major ports and airports, working strictly with trusted local transit agents.",
        image: "/pics.of.dmp/servises/seervices2.webp"
      },
      {
        number: "03",
        title: "Location Management & Scouting",
        description: "Our extensive location database covers every major environment category in Morocco, supported by active scouting whenever required. We manage surveys, landowner negotiations, location agreements, permissions, access, and all on-day location logistics.",
        image: "/pics.of.dmp/servises/services3.webp"
      },
      {
        number: "04",
        title: "Transport & Unit Logistics",
        description: "We coordinate full unit movement at any production scale, including vehicles, drivers, convoy logistics, equipment transport, trailers, and base camp operations. Our fleet solutions range from limousines and executive vehicles to 4x4s, vans, trucks, and specialized production transport.",
        image: "/pics.of.dmp/servises/services4.webp"
      },
      {
        number: "05",
        title: "Security",
        description: "We provide scalable security solutions for base camps, equipment, location perimeters, talent protection, crowd control, and overnight unit security.",
        image: "/pics.of.dmp/servises/services5.webp"
      }
    ]
  },
  {
    id: "equipment-gear",
    title: "EQUIPMENT & CAMERA GEAR",
    services: [
      {
        number: "06",
        title: "Equipment, Lighting, Grip & Camera Support",
        description: "We offer state-of-the-art lighting, grip, camera support, rigging, and light-control equipment for productions of all scales, with a technical approach designed to meet the expectations of the most demanding Directors of Photography. Our full inventory is available through our dedicated Dreamaker Equipment catalogue, allowing clients to review the complete range and select the package best suited to their production needs.",
        image: "/pics.of.dmp/servises/services6.webp"
      }
    ]
  },
  {
    id: "studios-environments",
    title: "STUDIOS & BUILT ENVIRONMENTS",
    services: [
      {
        number: "07",
        title: "Studios, Sound Stages & Backlots",
        description: "We help clients choose the most suitable studio, backlot, or built-environment solution for their production. This includes access to full-specification sound stages in the Ouarzazate region and greater Casablanca area, as well as established backlots featuring Egyptian streets, medieval fortress exteriors, Middle Eastern urban settings, military green zones, Mesopotamian environments, and Roman sets.",
        image: "/pics.of.dmp/servises/services7.webp"
      },
      {
        number: "08",
        title: "Set Construction, Props & Costumes",
        description: "We can coordinate custom set builds with experienced local art departments and provide access to major props and costume warehouses in Marrakech and Ouarzazate, with period-specific props and costumes available for rental, adaptation, or custom manufacture according to each project’s creative needs.",
        image: "/pics.of.dmp/servises/services8.webp"
      }
    ]
  },
  {
    id: "talent-crew",
    title: "TALENT, CREW & SUPPORT",
    services: [
      {
        number: "09",
        title: "Crew Sourcing & Management",
        description: "Morocco offers a deep and experienced multilingual crew pool across all principal departments. We source, manage, and integrate local technicians seamlessly with international HODs to meet the highest production standards.",
        image: "/pics.of.dmp/servises/services9.webp"
      },
      {
        number: "10",
        title: "Casting & Extras",
        description: "We support large-scale casting and crowd work through established agency relationships, enabling rapid deployment of Moroccan, African, European, Middle Eastern, and Western profiles across Morocco’s major cities.",
        image: "/pics.of.dmp/servises/services10.webp"
      },
      {
        number: "11",
        title: "Accommodation & Talent Management",
        description: "We maintain strong relationships with hotels, riads, villas, and private properties across Morocco, securing preferential negotiated rates and managing all advance logistics for cast, crew, and talent.",
        image: "/pics.of.dmp/servises/services11.webp"
      },
      {
        number: "12",
        title: "Catering",
        description: "We consider catering one of the most important departments at Dreamaker Productions because good food has a direct impact on crew morale, energy, and performance on set. Our in-house catering service provides delicious Moroccan and international meals for full production units, prepared to international standards by our own experienced chefs. We pay close attention to all dietary requirements, including vegetarian, vegan, gluten-free, allergy-sensitive, and other specific needs.",
        image: "/pics.of.dmp/servises/services12.webp"
      },
      {
        number: "13",
        title: "Production Accounting & Rebate Documentation",
        description: "Our highly experienced production accounting crew provides accurate local cost tracking, budget follow-up, supplier payment coordination, financial reporting, and rebate documentation support. Familiar with international production accounting workflows, including EP SmartAccounting and Vista / Global Vista, they integrate smoothly with studio, network, and international finance teams while maintaining clear, reliable, and production-ready reporting throughout the entire project.",
        image: "/pics.of.dmp/servises/services13.webp"
      }
    ]
  }
];

// --- Components ---

const ServiceRow = ({ 
  service, 
  onHover, 
  onLeave, 
  isOpen, 
  onToggle,
  onInquire
}: { 
  service: Service, 
  onHover: () => void, 
  onLeave: () => void,
  isOpen: boolean,
  onToggle: () => void,
  onInquire: () => void
}) => {
  return (
    <motion.div 
      className="group relative border-b border-gray-800 w-full overflow-hidden transition-colors duration-500 hover:bg-white/[0.02]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Main Content Row */}
      <div 
        className="relative z-10 flex flex-col cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between py-8 px-6 md:px-12">
          <div className="flex items-baseline gap-6 md:gap-12">
            <span className="text-xs md:text-sm font-sans text-gray-500 font-medium">
              {service.number}
            </span>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif tracking-tight uppercase group-hover:translate-x-4 transition-transform duration-500 ease-out">
              {service.title}
            </h3>
          </div>
          
          {/* Thumbnail removed as per instruction */}
          <div className="hidden md:flex items-center gap-4">
             <motion.span 
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="text-gray-600 group-hover:text-white transition-colors duration-300"
             >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
             </motion.span>
          </div>
        </div>

        {/* Expandable Description */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-12 pb-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="md:ml-[80px] max-w-2xl">
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed font-sans font-medium">
                    {service.description}
                  </p>
                  <motion.button 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onInquire();
                    }}
                    className="mt-6 px-6 md:px-5 py-3 md:py-2 w-full md:w-auto bg-[#00AEEF] text-white uppercase text-[10px] md:text-[11px] font-bold tracking-widest rounded-sm hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] border-none transition-all duration-300"
                  >
                    Inquire Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black relative">
      
      {/* Global Background Layer for Full Background Reveal */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {hoveredImage && (
            <motion.div 
              key={hoveredImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={hoveredImage} 
                alt="Background reveal"
                fill
                className="object-cover object-center scale-105"
                priority
              />
              {/* Balanced Dark Overlay for visibility and text legibility - Lighter in the middle to let images pop */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10">
        <Link
          href="/"
          className="absolute top-24 md:top-32 left-6 md:left-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:-translate-x-2 transition-all duration-300 z-50"
        >
          <span>&larr;</span> Back to Home
        </Link>
        
        {/* --- HERO SECTION (FULLSCREEN & IMMERSIVE) --- */}
        <section className="relative min-h-screen w-full flex flex-col justify-start items-center overflow-hidden pt-44 md:pt-52 pb-20">
          
          {/* Fullscreen Video Background */}
          <div className="absolute inset-0 z-0 bg-black">
            <iframe
              src="https://player.vimeo.com/video/1188941343?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
              className="absolute top-1/2 left-1/2 w-[300vw] h-[110vh] md:w-[150vw] md:h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-100"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="vedio services"
            ></iframe>
            
            {/* Enhanced Dark Overlay (Darker at top/bottom for readability) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70 z-10" />
          </div>

          {/* Content Wrapper - Moved towards bottom */}
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight uppercase mb-6">
                All-in-One, <br />
                <span className="italic">Tailor-Made</span> <br />
                Production Services
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="text-sm md:text-lg text-gray-300 leading-relaxed font-sans font-medium">
                From the first recce to the final wrap, Dreamaker Productions provides complete production support across Morocco. Our team manages every operational, logistical, technical, and administrative requirement, ensuring a seamless workflow for international film, television, commercial, music video, and branded-content productions.
              </p>
            </motion.div>
            
          </div>
        </section>

        {/* --- SERVICES INDEX --- */}
        <section className="relative z-20 bg-black/40 backdrop-blur-sm">
          {categories.map((category, catIndex) => (
            <div key={category.id} className="mb-16">
              {/* Category Header */}
              <div className="px-6 md:px-12 py-4 border-y border-gray-800 bg-black/60 sticky top-0 z-20 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                  <h2 className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-500 font-bold">
                    {category.title}
                  </h2>
                  <span className="text-[8px] text-gray-700 font-mono uppercase">
                    SECTION {catIndex + 1} / 4
                  </span>
                </div>
              </div>

              {/* Service Rows */}
              <div className="flex flex-col">
                {category.services.map((service, index) => (
                  <ServiceRow 
                    key={index} 
                    service={service} 
                    onHover={() => setHoveredImage(service.image)}
                    onLeave={() => setHoveredImage(null)}
                    isOpen={openIndex === `${catIndex}-${index}`}
                    onToggle={() => setOpenIndex(openIndex === `${catIndex}-${index}` ? null : `${catIndex}-${index}`)}
                    onInquire={() => setIsModalOpen(true)}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-40 px-6 md:px-12 text-center border-t border-gray-900">
        <h2 className="text-4xl md:text-6xl font-serif uppercase mb-8">Ready to start?</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Contact our team today to discuss your next production in Morocco.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-12 py-4 bg-[#00AEEF] text-white font-bold uppercase tracking-widest rounded-sm hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.4)] transition-all duration-300 border-none"
        >
          Get in Touch
        </button>
      </section>


      </div>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
