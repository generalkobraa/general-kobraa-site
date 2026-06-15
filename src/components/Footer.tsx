import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Browse",
      links: [
        { label: "All Categories", href: "/categories" },
        { label: "Software & Tools", href: "/categories/software-tools" },
        { label: "Finance & Investing", href: "/categories/finance-investing" },
        { label: "Health & Wellness", href: "/categories/health-wellness" },
        { label: "Marketing & Agencies", href: "/categories/marketing-agencies" },
      ],
    },
    {
      title: "Discover",
      links: [
        { label: "Education & Training", href: "/categories/education-training" },
        { label: "Legal & Professional", href: "/categories/legal-services" },
        { label: "eCommerce & Retail", href: "/categories/ecommerce-retail" },
        { label: "Real Estate", href: "/categories/real-estate" },
        { label: "Featured Listings", href: "/categories" },
      ],
    },
    {
      title: "KOBRAA",
      links: [
        { label: "Submit a Listing", href: "/submit" },
        { label: "About Us", href: "/about" },
        { label: "Advertise With Us", href: "/advertise" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[#1a1a1a] bg-[#050505]">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#1a1200] via-[#2a1f00] to-[#1a1200] border-b border-[#2a2000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-1">
              Grow Your Business with <span className="kobraa-gradient">KOBRAA</span>
            </h3>
            <p className="text-gray-400 text-sm">Get your business listed in front of millions of buyers actively searching for your services.</p>
          </div>
          <Link
            href="/submit"
            className="btn-primary px-7 py-3 rounded-xl text-sm font-black whitespace-nowrap flex-shrink-0"
          >
            🐍 List Your Business Free
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f5c518, #ff9500)" }}>
                <span className="text-black font-black text-sm">K</span>
              </div>
              <span className="font-black text-xl tracking-widest kobraa-gradient">KOBRAA</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              The most powerful business directory online. Discover top-rated companies, compare services, and make smarter decisions.
            </p>
            <div className="flex gap-3 mt-5">
              {["𝕏", "in", "📘", "📸"].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#f5c518] cursor-pointer transition-all text-xs"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-[#f5c518] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {year} KOBRAA Directory. All rights reserved. Some links are affiliate links — we may earn a commission at no extra cost to you.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-xs">🔒 Secure & Trusted</span>
            <span className="text-gray-600 text-xs">⭐ 200k+ Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
