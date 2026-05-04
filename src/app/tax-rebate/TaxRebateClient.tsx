'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../components/layout/Footer';

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const eligibleProjects = [
  'Feature-length films',
  'Television series & TV films',
  'Docufictions & documentaries',
  'Long-form fiction for streaming & internet',
];

const processSteps = [
  {
    number: '01',
    title: 'THE REQUEST',
    text: 'Submit project details, planned duration, estimated Moroccan spend, and requested rebate amount.',
  },
  {
    number: '02',
    title: 'APPROVAL',
    text: 'CCM reviews within 30 days. A 5% deposit of the requested rebate is required to lock in your funds.',
  },
  {
    number: '03',
    title: 'TIMELINE',
    text: '6 months to commence production. 12 months to complete the shoot. 3 months post-wrap to submit accounts.',
  },
  {
    number: '04',
    title: 'REIMBURSEMENT',
    text: 'Once final audited accounts are approved, the 20% cash rebate is typically disbursed within 6 months.',
  },
];

const commitments = [
  {
    label: 'Credits',
    text: 'Include the acknowledgment: "This film has benefitted from production support from the Kingdom of Morocco" or display the CCM logo.',
  },
  {
    label: 'Local Compliance',
    text: 'Ensure all Moroccan technicians, crew, and suppliers are paid in full before submitting the final rebate claim.',
  },
  {
    label: 'Cultural Rights',
    text: 'Release non-commercial Moroccan cultural usage rights 1 year after worldwide release of the production.',
  },
  {
    label: 'Archives',
    text: 'Provide a final copy of the work to the CCM and authorize the use of brief extracts for promotional purposes.',
  },
];

export default function TaxRebateClient() {
  return (
    <main className="bg-black text-zinc-400 min-h-screen font-sans selection:bg-[#00AEEF] selection:text-black overflow-x-hidden">

      {/* ── BACK LINK ───────────────────────────────────────────────────────── */}
      <Link
        href="/"
        className="fixed top-24 md:top-32 left-6 md:left-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:-translate-x-2 transition-all duration-300 z-50 mix-blend-difference"
      >
        <span>&larr;</span> Back to Home
      </Link>

      {/* ═══════════════════════════════════════════════════════════════════════
          01. HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] flex flex-col justify-center items-center text-center px-6 pt-44 pb-32 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-black z-0" />
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.12) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.12) 60px)',
          }}
        />
        {/* Radial blue glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(0,174,239,0.08),transparent)]" />

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.span
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="block text-[#00AEEF] text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold mb-8"
          >
            Kingdom of Morocco — CCM Incentive Programme
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 1, ease: 'easeOut' as const }}
            className="text-5xl md:text-6xl lg:text-8xl font-serif text-white tracking-widest uppercase leading-none mb-8"
          >
            20%
            <br />
            <span className="text-4xl md:text-5xl lg:text-7xl italic font-medium tracking-[0.1em]">
              CASH REBATE
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
            className="text-base md:text-lg text-[#00AEEF] max-w-2xl mx-auto mt-6 leading-relaxed font-medium"
          >
            Maximize your production value. The Kingdom of Morocco offers a highly
            competitive 20% cash rebate on eligible local spend.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="mt-16 flex items-center justify-center gap-6"
          >
            <div className="h-px w-24 bg-[#00AEEF]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
            <div className="h-px w-24 bg-[#00AEEF]/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          02. ELIGIBILITY & REQUIREMENTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">

          {/* Column 1 — Eligible Projects */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
            className="border border-zinc-800 p-10 md:p-14 bg-zinc-950/60 relative overflow-hidden group"
          >
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00AEEF]" />

            <span className="text-[#00AEEF] text-[10px] tracking-[0.4em] uppercase font-bold block mb-6">
              01
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wider mb-10 leading-tight">
              ELIGIBLE PROJECTS
            </h2>

            <ul className="space-y-5">
              {eligibleProjects.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 text-zinc-300 text-sm md:text-base leading-relaxed"
                >
                  <span className="mt-1.5 flex-shrink-0 w-4 h-px bg-[#00AEEF]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2 — Minimum Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
            className="border border-zinc-800 p-10 md:p-14 bg-zinc-950/60 relative overflow-hidden"
          >
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00AEEF]" />

            <span className="text-[#00AEEF] text-[10px] tracking-[0.4em] uppercase font-bold block mb-6">
              02
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wider mb-10 leading-tight">
              MINIMUM REQUIREMENTS
            </h2>

            {/* Nested 2-column metric cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card A */}
              <div className="border border-zinc-700 bg-black p-6 md:p-8 relative overflow-hidden group hover:border-[#00AEEF]/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,174,239,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-4xl md:text-5xl font-serif text-white leading-none mb-3 tracking-tight">
                  10M
                  <span className="text-2xl md:text-3xl text-[#00AEEF] ml-1">MAD</span>
                </p>
                <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed uppercase tracking-wider">
                  Minimum local spend
                  <span className="block text-zinc-600 normal-case tracking-normal mt-1">
                    approx. $1M USD
                  </span>
                </p>
              </div>

              {/* Card B */}
              <div className="border border-zinc-700 bg-black p-6 md:p-8 relative overflow-hidden group hover:border-[#00AEEF]/60 transition-colors duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,174,239,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-4xl md:text-5xl font-serif text-white leading-none mb-3 tracking-tight">
                  18
                  <span className="text-2xl md:text-3xl text-[#00AEEF] ml-1">DAYS</span>
                </p>
                <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed uppercase tracking-wider">
                  Minimum work days
                  <span className="block text-zinc-600 normal-case tracking-normal mt-1">
                    incl. set building
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          03. THE PROCESS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-zinc-950 py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
            className="text-center mb-16"
          >
            <span className="text-[#00AEEF] text-[10px] tracking-[0.5em] uppercase font-bold block mb-4">
              03
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-widest mb-6">
              THE PROCESS
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Dreamaker Productions handles the entire application process with the CCM on your behalf.
            </p>
            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="h-px w-20 bg-[#00AEEF]/30" />
              <div className="w-1 h-1 rounded-full bg-[#00AEEF]" />
              <div className="h-px w-20 bg-[#00AEEF]/30" />
            </div>
          </motion.div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' as const }}
                className="border-t-2 border-[#00AEEF] bg-black p-8 relative group hover:bg-zinc-950 transition-colors duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(0,174,239,0.04),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="text-[#00AEEF]/40 font-serif text-5xl font-bold leading-none block mb-6 select-none">
                  {step.number}
                </span>
                <h3 className="text-white font-bold text-sm tracking-[0.25em] uppercase mb-4">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          04. PRODUCTION COMMITMENTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
            className="mb-14"
          >
            <span className="text-[#00AEEF] text-[10px] tracking-[0.5em] uppercase font-bold block mb-4">
              04
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-widest leading-tight">
              PRODUCTION
              <br />
              <span className="italic font-medium">COMMITMENTS</span>
            </h2>
          </motion.div>

          {/* Commitment List */}
          <div className="divide-y divide-zinc-800/80">
            {commitments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: 'easeOut' as const }}
                className="py-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group"
              >
                <span className="flex-shrink-0 text-[#00AEEF] text-[10px] font-bold tracking-[0.3em] uppercase w-32 group-hover:tracking-[0.4em] transition-all duration-300">
                  {item.label}
                </span>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          05. FOOTER CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-40 px-6 border-t border-white/5 overflow-hidden bg-zinc-950">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(0,174,239,0.07),transparent)]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' as const }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <span className="text-[#00AEEF] text-[10px] tracking-[0.5em] uppercase font-bold block mb-6">
            Let&apos;s Talk Numbers
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white uppercase tracking-tighter leading-[0.9] mb-8">
            LET US HANDLE
            <br />
            <span className="italic font-medium text-zinc-300">THE PAPERWORK</span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-14">
            Focus on the creative. Our production accounting team will manage your
            rebate application and ensure full compliance with the CCM.
          </p>

          <button onClick={() => window.dispatchEvent(new Event('openQuoteModal'))}
            className="relative inline-block px-12 py-5 bg-[#00AEEF] text-black text-[11px] font-black tracking-[0.3em] uppercase overflow-hidden group transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,174,239,0.5)] hover:bg-[#009ED8]"
          >
            <span className="relative z-10">DISCUSS YOUR BUDGET</span>
            {/* Shine effect */}
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-20deg] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
