import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Dreamaker Productions privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-400 pt-32 pb-24 px-6 md:px-12">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white hover:-translate-x-2 transition-all duration-300 mb-16"
      >
        <span>&larr;</span> Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <span className="text-[#00AEEF] text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold block mb-6">
          Legal
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tighter leading-[0.9] mb-12">
          Privacy
          <br />
          <span className="italic font-medium text-zinc-400">Policy</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px w-20 bg-[#00AEEF]/30" />
          <div className="w-1 h-1 rounded-full bg-[#00AEEF]" />
          <div className="h-px w-20 bg-[#00AEEF]/30" />
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4">
              1. Information We Collect
            </h2>
            <p>
              When you contact us through our website forms, AI chat assistant, or quote request modal, we collect the information you provide — including your name, email address, project type, and message content. We do not collect any data beyond what you voluntarily submit.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information you provide solely to respond to your inquiries, prepare production quotes, and communicate about potential projects. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4">
              3. Data Security
            </h2>
            <p>
              We take reasonable measures to protect the personal information submitted through our website. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4">
              4. Cookies &amp; Analytics
            </h2>
            <p>
              Our website may use essential cookies required for basic functionality. We may also use analytics tools to understand how visitors interact with our site in order to improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4">
              5. Third-Party Services
            </h2>
            <p>
              Our website uses third-party services such as Vimeo for video hosting and NVIDIA API for our AI chat assistant. These services have their own privacy policies governing how they handle data.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4">
              6. Contact
            </h2>
            <p>
              If you have any questions regarding this privacy policy or how your data is handled, please contact us at{' '}
              <a
                href="mailto:contact@dreamakerproductions.com"
                className="text-[#00AEEF] hover:text-white transition-colors duration-300"
              >
                contact@dreamakerproductions.com
              </a>.
            </p>
          </section>

          {/* Last Updated */}
          <div className="pt-8 border-t border-white/5">
            <p className="text-zinc-600 text-xs tracking-wider uppercase">
              Last updated: May 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
