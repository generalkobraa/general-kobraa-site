import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Filter } from "lucide-react";
import { categories, getCategoryBySlug, getListingsByCategory } from "@/data/listings";
import ListingCard from "@/components/ListingCard";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found – KOBRAA Directory" };
  return {
    title: `${category.name} – KOBRAA Directory`,
    description: `Find the best ${category.name} businesses and services on KOBRAA Directory. Compare reviews, ratings, and pricing.`,
  };
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const catListings = getListingsByCategory(slug);
  const sponsored = catListings.filter((l) => l.sponsored);
  const regular = catListings.filter((l) => !l.sponsored);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
        <span>/</span>
        <span className="text-white">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-[#111] border border-[#222]">
            {category.icon}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-white">{category.name}</h1>
            <p className="text-gray-500 text-sm mt-0.5">{category.listingCount} listings</p>
          </div>
        </div>
        <Link href="/submit" className="btn-primary px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap self-start md:self-auto">
          + Add Your Business
        </Link>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 max-w-2xl">{category.description}</p>

      {/* Subcategory pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="text-xs px-3 py-1.5 rounded-full bg-[#f5c518] text-black font-semibold">All</button>
        {category.subcategories.map((sub) => (
          <button
            key={sub}
            className="text-xs px-3 py-1.5 rounded-full bg-[#111] border border-[#222] text-gray-400 hover:text-white hover:border-[#f5c518] transition-all"
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Ad */}
      <AdBanner format="horizontal" className="mb-8" />

      <div className="flex gap-8">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Sponsored */}
          {sponsored.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="sponsor-badge">Sponsored</span> Top Picks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sponsored.map((l) => (
                  <ListingCard key={l.id} listing={l} />
                ))}
              </div>
            </div>
          )}

          {/* All listings */}
          {regular.length > 0 ? (
            <div>
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                All {category.name} Listings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {regular.map((l) => (
                  <ListingCard key={l.id} listing={l} />
                ))}
              </div>
            </div>
          ) : catListings.length === 0 ? (
            <div className="text-center py-16 bg-[#111] rounded-2xl border border-[#1e1e1e]">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-bold text-white mb-2">No listings yet</h3>
              <p className="text-gray-500 text-sm mb-5">Be the first to list your business in {category.name}!</p>
              <Link href="/submit" className="btn-primary px-6 py-2.5 rounded-xl text-sm font-bold inline-block">
                Add Your Business
              </Link>
            </div>
          ) : null}
        </div>

        {/* Sidebar ad */}
        <div className="hidden xl:flex flex-col gap-4 w-[300px] flex-shrink-0">
          <AdBanner format="rectangle" />
          <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5">
            <h3 className="font-bold text-white text-sm mb-2">List Your Business</h3>
            <p className="text-gray-500 text-xs mb-4">Reach millions of buyers searching for {category.name} services.</p>
            <Link href="/submit" className="btn-primary w-full py-2.5 rounded-lg text-sm font-bold text-center block">
              Get Listed Free
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom ad */}
      <AdBanner format="horizontal" className="mt-10" />
    </div>
  );
}
