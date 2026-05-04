'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface LocationCategory {
  id: string;
  category: string;
  title: string;
  desc: string;
  images: { src: string; alt: string }[];
}

interface Props {
  data: LocationCategory[];
}

// ─── image columns rendered inside the horizontal track ──────────────────────
// Each "panel" is a vertical column that contains 2-3 images of varied heights.
// We build one panel per category (4 images split into 2-3 stacked rows).
const IMAGE_COLUMN_CONFIGS = [
  // column 0 – wide, two big images stacked
  {
    widthClass: 'w-[38vw]',
    rows: [
      { heightClass: 'h-[55%]', idx: 0 },
      { heightClass: 'h-[45%]', idx: 1 },
    ],
  },
  // column 1 – narrower, one tall image
  {
    widthClass: 'w-[28vw]',
    rows: [{ heightClass: 'h-full', idx: 0 }],
  },
  // column 2 – medium, three short images
  {
    widthClass: 'w-[34vw]',
    rows: [
      { heightClass: 'h-[40%]', idx: 1 },
      { heightClass: 'h-[35%]', idx: 2 },
      { heightClass: 'h-[25%]', idx: 3 },
    ],
  },
  // column 3 – wide, two
  {
    widthClass: 'w-[42vw]',
    rows: [
      { heightClass: 'h-[60%]', idx: 2 },
      { heightClass: 'h-[40%]', idx: 3 },
    ],
  },
];

export default function LocationDynamicLookbook({ data }: Props) {
  const mainWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const textSlidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!mainWrapperRef.current || !trackRef.current) return;

    const wrapper = mainWrapperRef.current;
    const track = trackRef.current;

    // ── MAIN HORIZONTAL SCROLL ─────────────────────────────────────────────
    const scrollTween = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        end: () => '+=' + track.scrollWidth,
        invalidateOnRefresh: true,
      },
    });

    // ── TEXT CROSSFADE LINKED TO SCROLL PROGRESS ──────────────────────────
    // Each slide occupies an equal share of the total scroll distance.
    const slides = textSlidesRef.current.filter(Boolean) as HTMLDivElement[];
    const totalSlides = slides.length;

    if (totalSlides > 0 && scrollTween.scrollTrigger) {
      const st = scrollTween.scrollTrigger;

      slides.forEach((slide, i) => {
        const start = i / totalSlides;
        const end = (i + 1) / totalSlides;
        const midIn = start + 0.05;
        const midOut = end - 0.05;

        // Set initial opacity for all slides (first one visible, rest hidden)
        gsap.set(slide, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 40 });

        // Fade IN
        ScrollTrigger.create({
          trigger: wrapper,
          start: () => `top+=${st.start + (st.end - st.start) * midIn}px top`,
          end: () => `top+=${st.start + (st.end - st.start) * (midIn + 0.04)}px top`,
          scrub: true,
          onUpdate: (self) => {
            if (i > 0) {
              gsap.set(slide, { opacity: self.progress, y: 40 - 40 * self.progress });
            }
          },
        });

        // Fade OUT (except last slide)
        if (i < totalSlides - 1) {
          ScrollTrigger.create({
            trigger: wrapper,
            start: () => `top+=${st.start + (st.end - st.start) * midOut}px top`,
            end: () => `top+=${st.start + (st.end - st.start) * (midOut + 0.04)}px top`,
            scrub: true,
            onUpdate: (self) => {
              gsap.set(slide, { opacity: 1 - self.progress, y: -40 * self.progress });
            },
          });
        }
      });
    }
  }, { scope: mainWrapperRef });

  return (
    /* ── PINNED WRAPPER ─────────────────────────────────────────────────── */
    <div
      ref={mainWrapperRef}
      className="relative h-screen w-full overflow-hidden bg-[#F4F4F0]"
    >

      {/* ── FLOATING TEXT (FOREGROUND) ────────────────────────────────────── */}
      <div className="absolute top-0 left-0 h-full w-full md:w-[42%] flex flex-col justify-center px-12 md:px-20 pointer-events-none z-50">
        {/* Subtle gradient veil so text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F4F0]/90 via-[#F4F4F0]/60 to-transparent" />

        {/* Text slides stacked on top of each other */}
        <div className="relative">
          {data.map((cat, i) => (
            <div
              key={cat.id}
              ref={(el) => { textSlidesRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col justify-center"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              {/* Category label */}
              <span className="text-[#00AEEF] text-[10px] font-bold uppercase tracking-[0.6em] mb-6 block">
                {cat.category}
              </span>

              {/* Large serif title */}
              <h2 className="text-[clamp(3rem,8vw,7rem)] font-serif font-bold leading-[0.88] uppercase tracking-tighter text-[#1A1A1A] mb-8">
                {cat.title.split(' ').map((word, wi) =>
                  wi % 2 === 1
                    ? <span key={wi} className="block italic font-medium text-[#1A1A1A]/20">{word}</span>
                    : <span key={wi} className="block">{word}</span>
                )}
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed font-medium text-[#1A1A1A]/60 italic border-l-2 border-[#1A1A1A]/10 pl-6 max-w-xs">
                {cat.desc}
              </p>

              {/* Counter */}
              <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/25">
                <span className="w-8 h-[1px] bg-current" />
                <span>0{i + 1} / 0{data.length}</span>
              </div>
            </div>
          ))}

          {/* Spacer so the absolute children have a parent height */}
          <div className="invisible pointer-events-none">
            <span className="text-[clamp(3rem,8vw,7rem)] font-serif leading-[0.88] block opacity-0">
              {data[0]?.title}
            </span>
            <p className="text-lg max-w-xs opacity-0">{data[0]?.desc}</p>
          </div>
        </div>

        {/* Bottom brand label */}
        <div className="absolute bottom-12 left-12 md:left-20 flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/25">
          <span className="w-8 h-[1px] bg-current" />
          <span>Locations Lookbook · Dreamaker</span>
        </div>
      </div>

      {/* ── HORIZONTAL TRACK (BACKGROUND IMAGES) ─────────────────────────── */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-stretch w-max py-16 z-10"
        style={{ paddingLeft: '45vw', paddingRight: '20vw' }}
      >
        {data.map((cat, catIdx) => {
          // Pick a column config that cycles through 4 layouts
          const columnLayout = IMAGE_COLUMN_CONFIGS[catIdx % IMAGE_COLUMN_CONFIGS.length];

          return (
            <div
              key={cat.id}
              className={`flex-shrink-0 ${columnLayout.widthClass} h-full flex flex-col gap-4 mx-3`}
            >
              {columnLayout.rows.map((row) => {
                const img = cat.images[row.idx % cat.images.length];
                return (
                  <div
                    key={row.idx}
                    className={`relative overflow-hidden flex-shrink-0 ${row.heightClass} border border-black/8 bg-[#E8E8E4]`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80vw, 40vw"
                    />
                    {/* Subtle frame overlay */}
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
                    {/* Frame number badge */}
                    <span className="absolute top-3 right-3 text-[7px] font-bold text-white/60 uppercase tracking-widest z-10">
                      {String(catIdx + 1).padStart(2, '0')} · {String(row.idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Extra spacer column so the last image clears the viewport */}
        <div className="flex-shrink-0 w-[10vw] h-full" aria-hidden />
      </div>

      {/* ── SCROLL PROGRESS DOTS (right edge) ───────────────────────────── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 pointer-events-none">
        {data.map((_, i) => (
          <div key={i} className="w-[2px] h-8 bg-black/10 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-[#00AEEF]/40 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
