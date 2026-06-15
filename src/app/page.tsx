import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Search, Star } from "lucide-react";
import { categories, getFeaturedListings, listings } from "@/data/listings";
import ListingCard from "@/components/ListingCard";
import CategoryCard from "@/components/CategoryCard";
import AdBanner from "@/components/AdBanner";

export default function HomePage() {
  const featured = getFeaturedListings().slice(0, 6);
  const topRated = [...listings].sort((a, b) => b.rating - a.rating).slice(0, 4);

  const stats = [
    { label: "Listed Businesses", value: "12,400+" },
    { label: "Verified Reviews", value: "200K+" },
    { label: "Monthly Visitors", value: "2.4M+" },
    { label: "Categories", value: "50+" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="hero-bg py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1a1200] border border-[#3a2a00] rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f5c518] animate-pulse" />
            <span className="text-[#f5c518] text-xs font-semibold">The #1 Trusted Business Directory</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Find the Best <span className="kobraa-gradient">Businesses</span>,<br />
            Tools & Services
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            KOBRAA Directory connects you with the world's top-rated companies. Compare real reviews, pricing, and features — then make your move.
          </p>

          {/* Search bar */}
          <form
            className="flex gap-2 max-w-xl mx-auto mb-8"
            action="/search"
            method="get"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input
                type="text"
                name="q"
                placeholder="Search businesses, tools, services..."
                className="search-input w-full pl-10 pr-4 py-3.5 rounded-xl text-sm"
              />
            </div>
            <button type="submit" className="btn-primary px-6 py-3.5 rounded-xl text-sm font-bold whitespace-nowrap">
              Search
            </button>
          </form>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-2">
            {["Software", "Finance", "Marketing", "Health", "Legal", "eCommerce"].map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${tag.toLowerCase()}`}
                className="text-xs px-3 py-1.5 rounded-full bg-[#111] border border-[#222] text-gray-400 hover:text-[#f5c518] hover:border-[#f5c518] transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black kobraa-gradient">{stat.value}</div>
                <div className="text-gray-500 text-xs mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP AD BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdBanner format="horizontal" />
      </div>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white">Browse <span className="kobraa-gradient">Categories</span></h2>
            <p className="text-gray-500 text-sm mt-1">Explore businesses across every industry</p>
          </div>
          <Link href="/categories" className="btn-outline px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1">
            All Categories <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="bg-[#0d0d0d] border-y border-[#1a1a1a] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                ⭐ <span className="kobraa-gradient">Featured</span> Listings
              </h2>
              <p className="text-gray-500 text-sm mt-1">Top-ranked businesses trusted by millions</p>
            </div>
            <Link href="/categories" className="btn-outline px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* MID AD BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdBanner format="horizontal" label="Sponsored" />
      </div>

      {/* TOP RATED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              🏆 Top Rated <span className="kobraa-gradient">This Week</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">Highest rated by real users</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topRated.map((listing, i) => (
            <div key={listing.id} className="flex items-stretch gap-4">
              <div className="flex items-center justify-center w-8 flex-shrink-0">
                <span className="text-2xl font-black" style={{ color: i === 0 ? "#f5c518" : i === 1 ? "#aaaaaa" : i === 2 ? "#cd7f32" : "#444" }}>
                  {i + 1}
                </span>
              </div>
              <div className="flex-1">
                <ListingCard listing={listing} compact />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY KOBRAA */}
      <section className="bg-[#0d0d0d] border-y border-[#1a1a1a] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-2">
            Why Trust <span className="kobraa-gradient">KOBRAA</span>?
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">We do the research. You make the decision.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                title: "Verified Reviews",
                desc: "Every review is verified and authentic. We screen for fake reviews to give you real, trustworthy insights.",
              },
              {
                icon: "⚡",
                title: "Always Up-to-Date",
                desc: "Our team constantly updates listings, pricing, and features so you always have the latest information.",
              },
              {
                icon: "🛡️",
                title: "100% Independent",
                desc: "Our editorial rankings are never paid for. Sponsored listings are always clearly marked so you can browse with confidence.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM AD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdBanner format="horizontal" />
      </div>

      {/* NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1200 0%, #2a1f00 50%, #1a1200 100%)", border: "1px solid #3a2a00" }}>
          <div className="px-8 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              🐍 Stay Ahead of the <span className="kobraa-gradient">Game</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6">Get weekly roundups of the top new listings, deals, and industry insights.</p>
            <form className="flex gap-2 max-w-md mx-auto" action="/subscribe" method="get">
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="search-input flex-1 px-4 py-3 rounded-xl text-sm"
              />
              <button type="submit" className="btn-primary px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap">
                Subscribe Free
              </button>
            </form>
            <p className="text-gray-600 text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
