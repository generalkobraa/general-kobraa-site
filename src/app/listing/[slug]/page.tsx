import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, ExternalLink, MapPin, Calendar, Users, Tag, CheckCircle } from "lucide-react";
import { listings, getListingBySlug, getListingsByCategory, getCategoryBySlug } from "@/data/listings";
import ListingCard from "@/components/ListingCard";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return { title: "Not Found – KOBRAA Directory" };
  return {
    title: `${listing.name} Review & Info – KOBRAA Directory`,
    description: `${listing.tagline}. Read reviews, compare pricing, and learn more about ${listing.name} on KOBRAA Directory.`,
  };
}

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={16}
          className={s <= Math.round(rating) ? "fill-[#f5c518] text-[#f5c518]" : "text-gray-700 fill-gray-700"}
        />
      ))}
    </div>
  );
}

export default async function ListingPage({ params }: Props) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const category = getCategoryBySlug(listing.category);
  const related = getListingsByCategory(listing.category)
    .filter((l) => l.slug !== listing.slug)
    .slice(0, 3);

  const ratingBreakdown = [
    { label: "5 star", pct: 52 },
    { label: "4 star", pct: 28 },
    { label: "3 star", pct: 12 },
    { label: "2 star", pct: 5 },
    { label: "1 star", pct: 3 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
        <span>/</span>
        {category && (
          <>
            <Link href={`/categories/${category.slug}`} className="hover:text-white transition-colors">{category.name}</Link>
            <span>/</span>
          </>
        )}
        <span className="text-white">{listing.name}</span>
      </nav>

      <div className="flex gap-8 flex-col xl:flex-row">
        {/* Main */}
        <div className="flex-1 min-w-0">
          {/* Header card */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              {/* Logo */}
              <div className="logo-placeholder w-20 h-20 rounded-2xl text-xl flex-shrink-0">
                {listing.logo}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h1 className="text-2xl font-black text-white">{listing.name}</h1>
                  {listing.sponsored && <span className="sponsor-badge">Sponsored</span>}
                  {listing.featured && <span className="featured-badge">Featured</span>}
                </div>
                <p className="text-gray-400 mb-3">{listing.tagline}</p>

                {/* Rating */}
                <div className="flex items-center gap-3 flex-wrap">
                  <StarRow rating={listing.rating} />
                  <span className="text-[#f5c518] font-black text-xl">{listing.rating.toFixed(1)}</span>
                  <span className="text-gray-500 text-sm">({listing.reviewCount.toLocaleString()} reviews)</span>
                </div>

                {/* Quick meta */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <MapPin size={13} /> {listing.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Calendar size={13} /> Founded {listing.founded}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Users size={13} /> {listing.employees} employees
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                <a
                  href={listing.affiliateUrl || listing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 justify-center"
                >
                  Visit {listing.name} <ExternalLink size={13} />
                </a>
                <span className="text-center text-emerald-400 text-xs font-semibold">{listing.pricing}</span>
              </div>
            </div>
          </div>

          {/* Ad */}
          <AdBanner format="horizontal" className="mb-6" />

          {/* About */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 mb-6">
            <h2 className="font-black text-white text-lg mb-3">About {listing.name}</h2>
            <p className="text-gray-400 leading-relaxed">{listing.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {listing.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[#1a1a1a] text-gray-400 border border-[#222]"
                >
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Ratings breakdown */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 mb-6">
            <h2 className="font-black text-white text-lg mb-5">Rating Breakdown</h2>
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Big score */}
              <div className="text-center flex-shrink-0">
                <div className="text-6xl font-black kobraa-gradient">{listing.rating.toFixed(1)}</div>
                <StarRow rating={listing.rating} />
                <p className="text-gray-500 text-xs mt-2">{listing.reviewCount.toLocaleString()} reviews</p>
              </div>

              {/* Bars */}
              <div className="flex-1 space-y-2.5">
                {ratingBreakdown.map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span className="text-gray-500 text-xs w-12 flex-shrink-0">{r.label}</span>
                    <div className="flex-1 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="rating-fill h-full rounded-full" style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="text-gray-500 text-xs w-8 text-right">{r.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key features */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 mb-6">
            <h2 className="font-black text-white text-lg mb-4">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {listing.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-gray-400 text-sm">
                  <CheckCircle size={14} className="text-[#f5c518] flex-shrink-0" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Related listings */}
          {related.length > 0 && (
            <div>
              <h2 className="font-black text-white text-lg mb-4">Similar {category?.name} Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.slice(0, 2).map((l) => (
                  <ListingCard key={l.id} listing={l} compact />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="xl:w-[300px] flex-shrink-0 space-y-4">
          {/* Quick info */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-5">
            <h3 className="font-bold text-white text-sm mb-4">Quick Info</h3>
            <div className="space-y-3">
              {[
                { label: "Category", value: listing.subcategory },
                { label: "Pricing", value: listing.pricing },
                { label: "Location", value: listing.location },
                { label: "Founded", value: listing.founded },
                { label: "Team Size", value: listing.employees },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-xs">
                  <span className="text-gray-500">{label}</span>
                  <span className="text-white font-medium text-right max-w-[150px]">{value}</span>
                </div>
              ))}
            </div>
            <a
              href={listing.affiliateUrl || listing.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-2.5 rounded-xl text-sm font-bold text-center block mt-5"
            >
              Visit Official Site ↗
            </a>
          </div>

          {/* Ad */}
          <AdBanner format="rectangle" />

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#1a1200] to-[#2a1f00] border border-[#3a2a00] rounded-2xl p-5">
            <h3 className="font-bold text-white text-sm mb-2">List Your Business</h3>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Get your business in front of millions of buyers on KOBRAA Directory.
            </p>
            <Link href="/submit" className="btn-primary w-full py-2.5 rounded-xl text-sm font-bold text-center block">
              Get Listed Free 🐍
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
