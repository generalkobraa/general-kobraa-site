import Link from "next/link";
import { Star, ExternalLink, MapPin } from "lucide-react";
import type { Listing } from "@/data/listings";

interface ListingCardProps {
  listing: Listing;
  compact?: boolean;
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            className={star <= Math.round(rating) ? "fill-[#f5c518] text-[#f5c518]" : "text-gray-700"}
          />
        ))}
      </div>
      <span className="text-[#f5c518] text-xs font-bold">{rating.toFixed(1)}</span>
      <span className="text-gray-500 text-xs">({count.toLocaleString()})</span>
    </div>
  );
}

export default function ListingCard({ listing, compact = false }: ListingCardProps) {
  return (
    <div className="listing-card bg-[#111] border border-[#1e1e1e] rounded-xl p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="logo-placeholder w-12 h-12 rounded-xl flex-shrink-0">
            {listing.logo}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Link href={`/listing/${listing.slug}`} className="font-bold text-white hover:text-[#f5c518] transition-colors text-sm">
                {listing.name}
              </Link>
              {listing.sponsored && <span className="sponsor-badge">Sponsored</span>}
              {listing.featured && !listing.sponsored && <span className="featured-badge">Featured</span>}
            </div>
            <p className="text-gray-500 text-xs mt-0.5 truncate">{listing.tagline}</p>
          </div>
        </div>
        <a
          href={listing.affiliateUrl || listing.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
        >
          Visit <ExternalLink size={10} />
        </a>
      </div>

      {/* Rating */}
      <StarRating rating={listing.rating} count={listing.reviewCount} />

      {!compact && (
        <>
          {/* Description */}
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{listing.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {listing.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1a1a1a] text-gray-400 border border-[#222]"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}

      {/* Meta */}
      <div className="flex items-center justify-between pt-1 border-t border-[#1a1a1a] mt-auto">
        <div className="flex items-center gap-1 text-gray-600 text-xs">
          <MapPin size={10} />
          <span>{listing.location}</span>
        </div>
        <span className="text-xs font-semibold text-emerald-400">{listing.pricing}</span>
      </div>
    </div>
  );
}
