'use client'

import { motion } from 'framer-motion'

const servicesData = [
    {
        title: "Shooting Permits",
        description: "Dreamaker Productions scouts and secures ideal locations, obtaining all fire, police and other governmental permits, and coordinates logistics for the completion of production."
    },
    {
        title: "Our Equipment",
        description: "Dreamaker Productions through its sister company MFERS, offers a wide range of filming equipment, all maintained to the highest standards by internationally trained technicians. We feature Scorpio, the latest available L.E.D lights, ARRI M series, Chapman Pee Wee dollies, cranes with three axis hotheads, and much more."
    },
    {
        title: "Hotels & Catering",
        description: "Thanks to our excellent relationships with the majority of hotels throughout Morocco, we will be happy to arrange hotel accommodations for both talents and crew using our heavily discounted negotiated rates."
    },
    {
        title: "Transportation",
        description: "We have reputable transport manpower and resources to facilitate successful shoots in all Moroccan destinations."
    },
    {
        title: "Drone Services",
        description: "Looking for high definition or 4k aerial filming that is easily achievable? Our aerial drone filming services are state of the art."
    },
    {
        title: "Our Experts & Quality Control",
        description: "Our photographers and videographers are here to help before, during, and after the completion of your production. Each piece of equipment is hand inspected, cleaned & packed by our experts on every rental."
    }
]

const Services = () => {
    return (
        <section id="services" className="relative w-full bg-white text-black py-24 px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* SECTION HEADER */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <h3 className="text-[#009ED8] text-xs font-bold tracking-[0.4em] uppercase mb-4">OUR SERVICES</h3>
                    <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight max-w-4xl">
                        Expertise in <span className="italic">Every</span> Production Reality.
                    </h2>
                </motion.div>

                {/* EDITORIAL LIST STRUCTURE */}
                <div className="flex flex-col border-b border-black">
                    {servicesData.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 md:py-16 border-t border-black hover:bg-gray-50 transition-colors duration-300"
                        >
                            {/* LEFT COLUMN: TITLE (1/3 approx) */}
                            <div className="md:col-span-4">
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-black group-hover:text-[#009ED8] transition-colors duration-300 uppercase tracking-tight">
                                    {service.title}
                                </h3>
                            </div>

                            {/* RIGHT COLUMN: DESCRIPTION (2/3 approx) */}
                            <div className="md:col-span-8">
                                <p className="text-lg md:text-xl text-gray-700 font-sans font-medium leading-relaxed max-w-3xl">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services
