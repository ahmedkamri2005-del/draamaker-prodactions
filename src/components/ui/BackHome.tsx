import Link from 'next/link';

export default function BackHome() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-4 z-10 relative">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black hover:-translate-x-2 transition-all duration-300"
            >
                <span>&larr;</span> Back to Home
            </Link>
        </div>
    );
}
