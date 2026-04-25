import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackHome() {
    return (
        <Link
            href="/"
            className="fixed top-24 left-8 z-[60] mix-blend-difference text-white/50 hover:text-white transition-all flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans"
        >
            <ArrowLeft className="w-4 h-4" />
            BACK HOME
        </Link>
    );
}
