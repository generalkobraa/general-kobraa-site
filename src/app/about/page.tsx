import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About KOBRAA Directory",
  description: "Learn about KOBRAA Directory — the most trusted business and service directory online.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-black text-white mb-2">
        About <span className="kobraa-gradient">KOBRAA</span> Directory
      </h1>
      <p className="text-gray-400 text-lg mb-10 leading-relaxed">
        We exist to help people make smarter decisions about the businesses and services they hire, use, and invest in.
      </p>

      <div className="space-y-8 text-gray-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-black text-white mb-3">Our Mission</h2>
          <p>
            KOBRAA Directory was built on a single belief: everyone deserves access to honest, reliable information when choosing a business or service. We cut through the noise by aggregating verified reviews, transparent pricing, and real company data — all in one place.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-white mb-3">What We Cover</h2>
          <p>
            From software tools and financial services to healthcare providers and real estate platforms, KOBRAA covers over 50 industries and thousands of companies. Whether you're a solo entrepreneur, a growing startup, or an enterprise — KOBRAA helps you find the right fit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-white mb-3">Our Editorial Standards</h2>
          <p>
            Our rankings are never pay-to-play. Sponsored and featured listings are always clearly labeled. Our editorial team independently researches and verifies each listing. We partner with businesses only after they meet our quality standards.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-white mb-3">Advertising & Affiliate Disclosure</h2>
          <p>
            KOBRAA Directory is free to use. We sustain the platform through advertising and affiliate partnerships. When you click certain links and make a purchase or sign up, we may earn a commission — at no extra cost to you. This never influences our editorial rankings or reviews.
          </p>
        </section>

        <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8 text-center mt-10">
          <h3 className="text-xl font-black text-white mb-2">Ready to get listed?</h3>
          <p className="text-gray-500 mb-5">Join thousands of businesses reaching millions of active buyers monthly.</p>
          <Link href="/submit" className="btn-primary px-8 py-3 rounded-xl text-sm font-black inline-block">
            List Your Business Free 🐍
          </Link>
        </div>
      </div>
    </div>
  );
}
