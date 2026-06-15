import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertise on KOBRAA Directory",
  description: "Reach 2.4M+ monthly buyers. Advertise your business on KOBRAA Directory.",
};

const adOptions = [
  {
    name: "Banner Ads",
    desc: "Premium ad placements across all pages — header leaderboard, sidebar rectangles, and in-content banners.",
    cpm: "$8–$15 CPM",
    icon: "📢",
  },
  {
    name: "Sponsored Listings",
    desc: "Get the top spot in your category with a SPONSORED badge. Maximum visibility to buyers in your niche.",
    cpm: "$149/mo",
    icon: "⭐",
  },
  {
    name: "Newsletter Sponsorship",
    desc: "Reach our 50K+ email subscribers with a dedicated feature in our weekly industry roundup.",
    cpm: "$299/issue",
    icon: "📧",
  },
  {
    name: "Homepage Spotlight",
    desc: "Premium placement on the KOBRAA homepage — seen by 2.4M+ monthly visitors.",
    cpm: "$499/mo",
    icon: "🏠",
  },
];

export default function AdvertisePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-white mb-3">
          Advertise on <span className="kobraa-gradient">KOBRAA</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Reach 2.4 million monthly buyers who are actively searching for businesses and services just like yours.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: "2.4M+", label: "Monthly Visitors" },
          { value: "50K+", label: "Email Subscribers" },
          { value: "8+", label: "Avg. Pages/Session" },
          { value: "4.2min", label: "Avg. Time on Site" },
        ].map((s) => (
          <div key={s.label} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-4 text-center">
            <div className="text-2xl font-black kobraa-gradient">{s.value}</div>
            <div className="text-gray-500 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Ad options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {adOptions.map((ad) => (
          <div key={ad.name} className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6">
            <div className="text-3xl mb-3">{ad.icon}</div>
            <h3 className="font-black text-white text-lg mb-1">{ad.name}</h3>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed">{ad.desc}</p>
            <span className="text-[#f5c518] font-bold text-sm">{ad.cpm}</span>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-[#1a1200] to-[#2a1f00] border border-[#3a2a00] rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-black text-white mb-2">Ready to Advertise?</h2>
        <p className="text-gray-400 mb-6">Contact our team for a custom advertising package tailored to your goals.</p>
        <a
          href="mailto:ads@kobraa.directory"
          className="btn-primary px-8 py-3 rounded-xl text-sm font-black inline-block"
        >
          Contact Our Ads Team →
        </a>
      </div>
    </div>
  );
}
