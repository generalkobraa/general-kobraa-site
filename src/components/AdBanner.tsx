"use client";

interface AdBannerProps {
  slot?: string;
  format?: "horizontal" | "rectangle" | "vertical" | "square";
  className?: string;
  label?: string;
}

/**
 * AdBanner Component
 * 
 * To activate Google AdSense:
 * 1. Add your AdSense script to layout.tsx (see comment there)
 * 2. Replace the placeholder content below with:
 *    <ins className="adsbygoogle"
 *      style={{ display: "block" }}
 *      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *      data-ad-slot={slot}
 *      data-ad-format="auto"
 *      data-full-width-responsive="true"
 *    />
 * 3. Call (adsbygoogle = window.adsbygoogle || []).push({}) in useEffect
 */
export default function AdBanner({ format = "horizontal", className = "", label = "Advertisement" }: AdBannerProps) {
  const dimensions = {
    horizontal: "w-full h-[90px] md:h-[90px]",       // 728x90 leaderboard
    rectangle:  "w-[300px] h-[250px]",               // 300x250 medium rectangle  
    vertical:   "w-[160px] h-[600px]",               // 160x600 wide skyscraper
    square:     "w-full h-[100px]",                  // responsive
  };

  return (
    <div className={`ad-zone ${dimensions[format]} ${className} flex flex-col items-center justify-center bg-[#0d0d0d] cursor-pointer group`}>
      <span className="text-[10px] text-gray-700 uppercase tracking-widest mb-2 font-semibold">{label}</span>
      {/* --- Replace this div with your AdSense <ins> tag --- */}
      <div className="text-center px-4">
        <p className="text-gray-600 text-xs font-medium group-hover:text-gray-500 transition-colors">
          📢 Your Ad Here
        </p>
        <p className="text-gray-700 text-[10px] mt-0.5">
          Reach millions of buyers · <a href="/advertise" className="text-[#f5c518] hover:underline">Learn more</a>
        </p>
      </div>
    </div>
  );
}
