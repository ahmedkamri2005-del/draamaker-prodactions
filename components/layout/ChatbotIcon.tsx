'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import ChatWindow from './ChatWindow'

const ChatbotIcon = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 600) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
                setIsOpen(false) // Close window if scrolled back to top
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        className="fixed bottom-8 right-8 z-[100] mix-blend-difference"
                    >
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`bg-white text-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative ${isOpen ? 'rotate-90' : ''}`}
                            aria-label="Chat with AI"
                        >
                            <MessageCircle size={28} className="text-black" />

                            {/* Tooltip */}
                            {!isOpen && (
                                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] tracking-[0.2em] uppercase py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                                    Chat with AI
                                </div>
                            )}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default ChatbotIcon
