# 🐍 KOBRAA Directory

> The #1 Trusted Business & Services Directory — Built to Generate Ad Revenue

## 🚀 Live Site
Deploys automatically to GitHub Pages via GitHub Actions.

## 💰 Revenue Streams

| Source | Method |
|--------|--------|
| **Google AdSense** | Display ads (header, sidebar, in-content) — activate by adding publisher ID to `layout.tsx` |
| **Featured Listings** | $49/mo — businesses pay for top placement & badge |
| **Sponsored Listings** | $149/mo — top-of-category SPONSORED placement |
| **Affiliate Links** | Commission on clicks to Shopify, HubSpot, BetterHelp, Udemy, Ahrefs, etc. |
| **Newsletter Sponsorship** | $299/issue to email list |
| **Homepage Spotlight** | $499/mo |

## 🛠️ Tech Stack
- **Next.js 14** (App Router + Static Export)
- **TypeScript**
- **Tailwind CSS**
- **GitHub Pages** (free hosting)
- **GitHub Actions** (auto-deploy on push)

## 🔧 Setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Creates /out static export
```

## 💡 Activating Google AdSense

1. Sign up at [adsense.google.com](https://adsense.google.com)
2. Add your site and get your **Publisher ID** (`ca-pub-XXXXXXXXXXXXXXXX`)
3. Uncomment the AdSense script tag in `src/app/layout.tsx`
4. Replace the `AdBanner` component placeholder with real `<ins>` tags
5. Deploy — start earning!

## 📂 Project Structure

```
src/
├── app/              # Pages (Next.js App Router)
│   ├── page.tsx      # Homepage
│   ├── categories/   # Category browser
│   ├── listing/      # Individual listing detail
│   ├── search/       # Search results
│   ├── submit/       # Submit a listing (monetization)
│   ├── about/        # About page
│   ├── advertise/    # Advertise page (ad sales)
│   ├── privacy/      # Privacy policy (required for AdSense)
│   └── terms/        # Terms of use
├── components/       # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AdBanner.tsx  # ← Activate AdSense here
│   ├── ListingCard.tsx
│   └── CategoryCard.tsx
└── data/
    └── listings.ts   # All listing & category data
```

## 📈 Scaling Strategy

1. **Phase 1 (Now)**: Activate AdSense, grow organic traffic via SEO
2. **Phase 2**: Outreach to businesses for paid Featured/Sponsored listings
3. **Phase 3**: Add user accounts, write reviews, build newsletter list
4. **Phase 4**: Expand to 500+ listings per category, launch vertical sub-directories

---

Built with 🐍 by KOBRAA Directory
