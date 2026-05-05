import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Subtle background number */}
      <span className="absolute text-[30vw] font-serif font-black text-white/[0.02] select-none pointer-events-none leading-none">
        404
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-lg">
        <span className="text-[#00AEEF] text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold block mb-8">
          Page Not Found
        </span>

        <h1 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter leading-[0.9] mb-6">
          Lost in the
          <br />
          <span className="italic font-medium text-zinc-400">Desert</span>
        </h1>

        <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-12 max-w-md mx-auto">
          The scene you&apos;re looking for doesn&apos;t exist in our reel.
          Let&apos;s get you back on set.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-10 py-4 bg-[#00AEEF] text-white font-extrabold text-xs tracking-[0.2em] uppercase hover:bg-[#009ED8] hover:shadow-[0_0_20px_rgba(0,174,239,0.3)] transition-all duration-300 rounded-sm border-none"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 border border-white/20 text-white font-extrabold text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 rounded-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent" />
    </main>
  );
}
