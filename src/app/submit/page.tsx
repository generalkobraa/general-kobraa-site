"use client";

import { useState } from "react";
import { CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";

const plans = [
  {
    name: "Free Listing",
    price: "$0",
    period: "forever",
    highlight: false,
    features: [
      "Basic business profile",
      "1 category listing",
      "Contact information",
      "Business description",
      "Website link",
    ],
    cta: "Get Listed Free",
  },
  {
    name: "Featured",
    price: "$49",
    period: "/month",
    highlight: true,
    features: [
      "Everything in Free",
      "Featured badge & top placement",
      "3 category listings",
      "Logo & media gallery",
      "Priority support",
      "Analytics dashboard",
      "Lead capture form",
    ],
    cta: "Start Featured Listing",
  },
  {
    name: "Sponsored",
    price: "$149",
    period: "/month",
    highlight: false,
    features: [
      "Everything in Featured",
      "SPONSORED badge (top of results)",
      "Unlimited categories",
      "Homepage spotlight",
      "Newsletter feature",
      "Social media promotion",
      "Dedicated account manager",
    ],
    cta: "Get Sponsored Placement",
  },
];

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: "",
    website: "",
    category: "",
    description: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">🐍</div>
        <h1 className="text-3xl font-black text-white mb-3">You're on the list!</h1>
        <p className="text-gray-400 mb-6">
          Thanks for submitting <strong className="text-white">{form.businessName}</strong>! Our team will review your listing within 24–48 hours and notify you at {form.email}.
        </p>
        <a href="/" className="btn-primary px-8 py-3 rounded-xl text-sm font-bold inline-block">
          Back to KOBRAA Directory
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          List Your Business on <span className="kobraa-gradient">KOBRAA</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join thousands of businesses reaching millions of active buyers every month. Get discovered, rated, and chosen.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { icon: <TrendingUp size={20} />, title: "2.4M+ Monthly Visitors", desc: "Massive reach to buyers actively searching for your services." },
          { icon: <Shield size={20} />, title: "Trusted & Verified", desc: "KOBRAA verified badge builds trust with potential customers." },
          { icon: <Zap size={20} />, title: "Live in 24 Hours", desc: "Fast approval and your listing goes live quickly." },
        ].map((b) => (
          <div key={b.title} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 text-center">
            <div className="text-[#f5c518] mb-2 flex justify-center">{b.icon}</div>
            <h3 className="font-bold text-white text-sm mb-1">{b.title}</h3>
            <p className="text-gray-500 text-xs">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing plans */}
      <div className="mb-12">
        <h2 className="text-xl font-black text-white text-center mb-6">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border transition-all ${
                plan.highlight
                  ? "border-[#f5c518] bg-gradient-to-b from-[#1a1200] to-[#111]"
                  : "border-[#1e1e1e] bg-[#111]"
              }`}
            >
              {plan.highlight && (
                <div className="text-center mb-3">
                  <span className="sponsor-badge">Most Popular</span>
                </div>
              )}
              <h3 className="font-black text-white text-lg">{plan.name}</h3>
              <div className="flex items-baseline gap-1 my-2">
                <span className="text-3xl font-black kobraa-gradient">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6 mt-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-400 text-sm">
                    <CheckCircle size={13} className="text-[#f5c518] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById("submit-form")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${
                  plan.highlight ? "btn-primary" : "btn-outline"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Submit form */}
      <div id="submit-form" className="max-w-2xl mx-auto bg-[#111] border border-[#1e1e1e] rounded-2xl p-8">
        <h2 className="font-black text-white text-xl mb-6">Submit Your Business</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Business Name *</label>
              <input
                type="text"
                required
                placeholder="ACME Corp"
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                className="search-input w-full px-4 py-2.5 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Website URL *</label>
              <input
                type="url"
                required
                placeholder="https://yourbusiness.com"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="search-input w-full px-4 py-2.5 rounded-lg text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Category *</label>
              <select
                required
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="search-input w-full px-4 py-2.5 rounded-lg text-sm bg-[#111] appearance-none"
              >
                <option value="">Select category...</option>
                <option>Software &amp; Tools</option>
                <option>Finance &amp; Investing</option>
                <option>Health &amp; Wellness</option>
                <option>Marketing &amp; Agencies</option>
                <option>Education &amp; Training</option>
                <option>Legal &amp; Professional</option>
                <option>eCommerce &amp; Retail</option>
                <option>Real Estate</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Location</label>
              <input
                type="text"
                placeholder="City, State / Remote"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="search-input w-full px-4 py-2.5 rounded-lg text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Business Description *</label>
            <textarea
              required
              rows={4}
              placeholder="Describe your business, what you offer, and why customers should choose you..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="search-input w-full px-4 py-2.5 rounded-lg text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Contact Email *</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="search-input w-full px-4 py-2.5 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Phone (optional)</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="search-input w-full px-4 py-2.5 rounded-lg text-sm"
              />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full py-3.5 rounded-xl text-sm font-black">
            🐍 Submit My Business — It's Free
          </button>
          <p className="text-gray-600 text-xs text-center">
            By submitting, you agree to our <a href="/terms" className="text-[#f5c518] hover:underline">Terms</a> and <a href="/privacy" className="text-[#f5c518] hover:underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
