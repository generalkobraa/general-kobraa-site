"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const nav = [
    { label: "Browse", href: "/categories" },
    { label: "Software & Tools", href: "/categories/software-tools" },
    { label: "Finance", href: "/categories/finance-investing" },
    { label: "Marketing", href: "/categories/marketing-agencies" },
    { label: "Health", href: "/categories/health-wellness" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a1a1a]" style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(12px)" }}>
      {/* Top bar */}
      <div className="bg-[#f5c518] text-black text-center py-1.5 text-xs font-semibold tracking-wide">
        🐍 KOBRAA DIRECTORY — Discover the best businesses, tools &amp; services. Compare. Save. Win.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center glow-gold" style={{ background: "linear-gradient(135deg, #f5c518, #ff9500)" }}>
              <span className="text-black font-black text-sm">K</span>
            </div>
            <div>
              <span className="font-black text-xl tracking-widest kobraa-gradient">KOBRAA</span>
              <span className="text-gray-500 text-xs ml-1.5 font-medium tracking-wider uppercase">Directory</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <Link
              href="/submit"
              className="hidden sm:flex btn-primary px-4 py-2 rounded-lg text-sm font-bold"
            >
              + List Your Business
            </Link>

            {/* Mobile menu */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                }
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                placeholder="Search businesses, tools, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input flex-1 px-4 py-2.5 rounded-lg text-sm"
                autoFocus
              />
              <button type="submit" className="btn-primary px-5 py-2.5 rounded-lg text-sm font-bold">
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#1a1a1a] bg-[#0a0a0a]">
          <div className="px-4 py-4 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2.5 text-gray-300 hover:text-white hover:bg-[#151515] rounded-lg text-sm font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/submit"
              className="block mt-3 btn-primary px-4 py-2.5 rounded-lg text-sm font-bold text-center"
              onClick={() => setMobileOpen(false)}
            >
              + List Your Business
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
