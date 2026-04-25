'use client'

import { motion } from 'framer-motion'

const SpecialtyAssets = () => {
    return (
        <section className="bg-black text-white py-12 md:py-16 lg:py-24 px-6 lg:px-16 w-full m-0">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">

                {/* Left Column (Sticky Title Area - 1/3 width) */}
                <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h3 className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">Specialty Assets</h3>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">Action Logistics & Elite Resources.</h2>
                    </motion.div>
                </div>

                {/* Right Column (Scrolling Cards - 2/3 width) */}
                <div className="w-full lg:w-2/3 flex flex-col gap-32">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col"
                    >
                        <img src="/locali/fes.jpg" alt="Authentic Locations" className="w-full aspect-video object-cover rounded-xl mb-8 shadow-2xl" />
                        <h4 className="text-3xl font-serif text-white mb-4">Authentic Worldbuilding</h4>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">Through extensive local sourcing, we provide authentic assets that give period and epic productions a deeply lived-in feel.</p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col"
                    >
                        <img src="/studios/WhatsApp-Image-2024-01-27-at-15.34.20.jpeg" alt="Studio Setup" className="w-full aspect-video object-cover rounded-xl mb-8 shadow-2xl" />
                        <h4 className="text-3xl font-serif text-white mb-4">Controlled Environments</h4>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">When natural landscapes need complementing, we provide access to world-class studio facilities and large-scale architectural builds.</p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col"
                    >
                        <img src="/images/dreamaker-action-logistics.jpg" alt="Action Logistics" className="w-full aspect-video object-cover rounded-xl mb-8 shadow-2xl" />
                        <h4 className="text-3xl font-serif text-white mb-4">High-Impact Operations</h4>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">We coordinate seamlessly with local authorities to secure controlled environments for complex stunts and specialized vehicle operations.</p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col"
                    >
                        <img src="/locali/dreamaker-locations-2.jpg" alt="Elite Resources" className="w-full aspect-video object-cover rounded-xl mb-8 shadow-2xl" />
                        <h4 className="text-3xl font-serif text-white mb-4">Elite Resources</h4>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">From camel units and historical props to military hardware and tactical security, our local network delivers on every demand.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default SpecialtyAssets
