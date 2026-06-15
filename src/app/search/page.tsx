"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { searchListings } from "@/data/listings";
import ListingCard from "@/components/ListingCard";
import AdBanner from "@/components/AdBanner";

function SearchResults() {
  const params = useSearchParams();
  const query = params.get("q") || "";
  const results = query ? searchListings(query) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-black text-white mb-1">
          {query ? (
            <>Search results for "<span className="kobraa-gradient">{query}</span>"</>
          ) : (
            <span className="kobraa-gradient">Search KOBRAA Directory</span>
          )}
        </h1>
        {query && (
          <p className="text-gray-500 text-sm">{results.length} result{results.length !== 1 ? "s" : ""} found</p>
        )}
      </div>

      {/* Search form */}
      <form className="flex gap-2 mb-8 max-w-xl" action="/search" method="get">
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search businesses, tools, services..."
            className="search-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
          />
        </div>
        <button type="submit" className="btn-primary px-5 py-3 rounded-xl text-sm font-bold">Search</button>
      </form>

      <AdBanner format="horizontal" className="mb-8" />

      {/* Results */}
      {query && results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-16 bg-[#111] rounded-2xl border border-[#1e1e1e]">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="font-bold text-white text-lg mb-2">No results for "{query}"</h3>
          <p className="text-gray-500 text-sm mb-5">Try a different search term, or browse by category.</p>
          <Link href="/categories" className="btn-primary px-6 py-2.5 rounded-xl text-sm font-bold inline-block">
            Browse Categories
          </Link>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🐍</div>
          <h3 className="font-bold text-white text-lg mb-2">Search the KOBRAA Directory</h3>
          <p className="text-gray-500 text-sm">Enter a keyword to find businesses, tools, and services.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-gray-500">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
