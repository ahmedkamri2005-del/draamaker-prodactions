'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, Bot, User } from 'lucide-react'

interface Message {
    role: 'user' | 'assistant' | 'system'
    content: string
}

const SYSTEM_PROMPT = `You are an expert producer for Dreamaker Productions. Respond INSTANTLY. Do not use filler words like "Certainly" or "I understand". Go straight to the point in 2 short sentences using info from the catalog. Efficiency is your priority.
Emphasize "Visual Sophistication" and "Attention to Detail". 
Focus on the 30% Cash Rebate in Morocco as the key commercial advantage.
Primary language: English (but always respond in the language used by the interlocutor).`

const ChatWindow = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async () => {
        if (!input.trim() || isLoading) return

        const userMessage: Message = { role: 'user', content: input }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "meta/llama-3.1-70b-instruct",
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...messages,
                        userMessage
                    ],
                    temperature: 0.2,
                    top_p: 0.7,
                    max_tokens: 1024,
                    stream: true
                })
            })

            if (!response.body) throw new Error("No response body")

            const reader = response.body.getReader()
            const decoder = new TextDecoder()
            let assistantContent = ""

            setMessages(prev => [...prev, { role: 'assistant', content: "" }])

            while (true) {
                const { done, value } = await reader.read()
                if (done) break

                const chunk = decoder.decode(value)
                const lines = chunk.split('\n')

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const jsonStr = line.replace('data: ', '').trim()
                        if (jsonStr === '[DONE]') break
                        try {
                            const json = JSON.parse(jsonStr)
                            const delta = json.choices[0].delta?.content || ""
                            assistantContent += delta
                            setMessages(prev => {
                                const newMessages = [...prev]
                                if (newMessages.length > 0) {
                                    newMessages[newMessages.length - 1].content = assistantContent
                                }
                                return newMessages
                            })
                        } catch (e) {
                            // Incomplete chunk
                        }
                    }
                }
            }
        } catch (error) {
            console.error("Chat Error:", error)
            setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error. Please try again or contact us directly." }])
        } finally {
            setIsLoading(false)
        }
    }

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
                                key={i}
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
                        {isLoading && (
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
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Message..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-xs font-medium focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:hover:bg-blue-600"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ChatWindow
