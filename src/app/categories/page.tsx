import { categories } from "@/data/listings";
import CategoryCard from "@/components/CategoryCard";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Categories – KOBRAA Directory",
  description: "Browse all business categories on KOBRAA Directory. Find the best software, finance, health, marketing, legal, and more.",
};

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
          All <span className="kobraa-gradient">Categories</span>
        </h1>
        <p className="text-gray-500">
          Browse {categories.length} categories and discover thousands of top-rated businesses
        </p>
      </div>

      {/* Ad */}
      <AdBanner format="horizontal" className="mb-8" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>

      {/* Bottom ad */}
      <AdBanner format="horizontal" className="mt-10" />
    </div>
  );
}
