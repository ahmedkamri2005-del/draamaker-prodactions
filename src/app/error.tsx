'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-white font-serif text-4xl mb-6">Something went wrong!</h2>
      <p className="text-zinc-500 mb-10 max-w-md">
        We encountered an unexpected error. Please try refreshing the page or return home.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#00AEEF] text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-[#009ED8] transition-all"
        >
          Try again
        </button>
        <a
          href="/"
          className="border border-white/20 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
