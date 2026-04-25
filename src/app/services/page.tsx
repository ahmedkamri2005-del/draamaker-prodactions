'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BackHome from '../../components/ui/BackHome';

const services = [
    {
        title: "LOCATION SCOUTING",
        desc: "Morocco is a cinematic treasure, and we hold the map. With over 26 years of on-the-ground experience, our scouting team discovers the most breathtaking and authentic backdrops—from the high peaks of the Atlas Mountains to the untouched dunes of the Sahara. We don't just find locations; we negotiate permits, manage local relations, and ensure every frame matches your creative vision.",
        img: "/images/dreamaker-planning-3.jpg"
    },
    {
        title: "LINE PRODUCTION",
        desc: "Precision, transparency, and Hollywood-grade standards. We handle the backbone of your production, managing complex budgets, elite local crews, and high-stakes logistics. Dreamaker bridges the gap between international requirements and local resources, ensuring a seamless workflow from pre-production to the final wrap. We make sure your shoot runs like clockwork, regardless of scale.",
        img: "/studios/dulcie 7 - Copy.jpeg"
    },
    {
        title: "SET CONSTRUCTION",
        desc: "Our master craftsmen don't just build sets; they build worlds. From ancient Roman arenas to modern high-tech interiors, we specialize in high-detail scenic construction. Using a mix of traditional Moroccan craftsmanship and modern engineering, our sets are immersive, historically accurate, and built to withstand the rigors of a professional film shoot.",
        img: "/studios/DSC00506-1-1024x689.jpg"
    },
    {
        title: "LOGISTICS & EQUIPMENT",
        desc: "Moving mountains is part of the job. We provide direct access to the latest cinematic technology—camera packages, lighting rigs, and specialized grip gear. Beyond equipment, we manage the most challenging logistics: international shipping, customs clearance, and high-end transport for cast and crew across Morocco's toughest terrains.",
        img: "/logistic/dreamaker-armored-vehicle.jpg"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-white text-black min-h-screen font-sans overflow-x-hidden pt-24 md:pt-32">
            <BackHome />
            <div className="flex flex-col w-full">
                <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-none p-12 mt-20 font-borscha">SERVICES</h1>
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`min-h-[80vh] flex flex-col items-center justify-center py-16 md:py-12 gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            <div className={`flex flex-col justify-center p-6 md:p-16 lg:p-24 w-full md:w-1/2 relative ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                <span className="text-[10rem] opacity-5 absolute -top-20 -left-10 font-black z-0 font-sans">
                                    0{index + 1}
                                </span>
                                <h2 className="text-7xl font-bold mb-6 relative z-10 uppercase tracking-tighter leading-none" style={{ fontFamily: "Inter, sans-serif" }}>
                                    {service.title.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h2>
                                <p className="max-w-2xl text-lg leading-relaxed text-gray-700 relative z-10 font-sans">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Image Area */}
                            <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] overflow-hidden relative group">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover w-full h-full shadow-lg transition-transform duration-700 md:group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.section>
                    );
                })}
            </div>
        </main>
    );
}
