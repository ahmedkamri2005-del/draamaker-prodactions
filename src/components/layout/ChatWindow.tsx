'use client'

import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, User } from 'lucide-react'
import { useChat } from '@ai-sdk/react'

const ChatWindow = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
    })
    
    const scrollRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Auto scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isLoading])

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                    exit={{ opacity: 0, y: 100, scale: 0.9, x: 50 }}
                    className="fixed bottom-20 right-4 md:bottom-24 md:right-8 w-[85vw] max-w-[320px] md:w-80 h-[450px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[101] flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="p-4 border-b border-white/5 flex justify-between items-center bg-blue-600/5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shadow-lg overflow-hidden border border-white/5">
                                <img src="/favicon.svg" alt="AI Silhouette" className="w-full h-full object-contain scale-125" />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold tracking-widest uppercase">AI DREAMAKER</h3>
                                <div className="flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[9px] text-white/40 uppercase tracking-tighter">Online</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                            <X size={18} className="text-white/60" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 opacity-40">
                                <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
                                    <img src="/favicon.svg" alt="Silhouette" className="w-full h-full object-contain" />
                                </div>
                                <p className="text-xs font-medium leading-relaxed max-w-[180px]">
                                    Greetings. I am your Senior Production Consultant at Dreamaker. How can I assist with your next project?
                                </p>
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <motion.div
                                key={msg.id || i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                            >
                                {msg.role === 'assistant' && (
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden border border-white/5">
                                        <img src="/favicon.svg" alt="AI Silhouette" className="w-full h-full object-contain scale-125" />
                                    </div>
                                )}
                                <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${msg.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-br-none font-medium'
                                    : 'bg-white/5 text-white/80 rounded-bl-none font-medium border border-white/5'
                                    }`}>
                                    {msg.content}
                                </div>
                                {msg.role === 'user' && (
                                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                                        <User size={11} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                        {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/5">
                                    <img src="/favicon.svg" alt="AI Silhouette" className="w-full h-full object-contain animate-pulse scale-125" />
                                </div>
                                <div className="bg-white/5 p-3 rounded-xl rounded-bl-none border border-white/5">
                                    <Loader2 size={12} className="animate-spin text-blue-400" />
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/5 bg-black/40">
                        <form onSubmit={handleSubmit} className="relative flex items-center">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Message..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-xs font-medium focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:hover:bg-blue-600"
                            >
                                <Send size={14} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ChatWindow
