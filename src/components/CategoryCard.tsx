import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/listings";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="category-card bg-[#111] border border-[#1e1e1e] rounded-xl p-5 h-full cursor-pointer group hover:border-[#f5c518] transition-all">
        {/* Icon + count */}
        <div className="flex items-start justify-between mb-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${category.color} bg-opacity-20`}
            style={{ background: "rgba(245,197,24,0.06)", border: "1px solid rgba(245,197,24,0.1)" }}>
            {category.icon}
          </div>
          <span className="text-gray-600 text-xs font-medium">{category.listingCount} listings</span>
        </div>

        {/* Name */}
        <h3 className="font-bold text-white text-sm mb-1 group-hover:text-[#f5c518] transition-colors">
          {category.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
          {category.description}
        </p>

        {/* Subcategories */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {category.subcategories.slice(0, 3).map((sub) => (
            <span
              key={sub}
              className="text-[10px] px-2 py-0.5 rounded-full bg-[#1a1a1a] text-gray-500 border border-[#222]"
            >
              {sub}
            </span>
          ))}
          {category.subcategories.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1a1a1a] text-gray-500 border border-[#222]">
              +{category.subcategories.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1 text-[#f5c518] text-xs font-semibold group-hover:gap-2 transition-all">
          Browse {category.name} <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}
