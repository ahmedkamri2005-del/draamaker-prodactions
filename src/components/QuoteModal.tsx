'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Production Logistics',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          setFormData({ name: '', email: '', service: 'Production Logistics', description: '' });
        }, 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-serif text-white mb-2 uppercase tracking-wide">
                Start Your Project
              </h2>
              <p className="text-zinc-400 text-xs mb-6 font-medium">
                Tell us about your vision. We'll get back to you within 24 hours.
              </p>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={56} className="text-[#00AEEF] mb-6" />
                  <h3 className="text-lg text-white font-bold tracking-widest uppercase mb-2">Message Received</h3>
                  <p className="text-zinc-400 text-sm">Our team will be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#00AEEF] transition-colors text-sm placeholder:text-zinc-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#00AEEF] transition-colors text-sm placeholder:text-zinc-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Service Type</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#00AEEF] transition-colors appearance-none text-sm"
                    >
                      <option>Production Logistics</option>
                      <option>Equipment</option>
                      <option>Studios</option>
                      <option>Talent/Crew</option>
                      <option>General</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">Project Description</label>
                    <textarea 
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#00AEEF] transition-colors resize-none text-sm placeholder:text-zinc-600"
                      placeholder="Tell us a bit about your production..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00AEEF] text-white font-extrabold text-xs tracking-widest uppercase py-3.5 rounded-sm hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2 border-none"
                  >
                    {isSubmitting ? 'SENDING...' : 'GET A QUOTE'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
