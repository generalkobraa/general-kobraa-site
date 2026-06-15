import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KOBRAA Directory – Discover Top Businesses, Tools & Services",
  description:
    "KOBRAA Directory is your trusted resource for finding the best software, services, and businesses across every industry. Compare reviews, ratings, and pricing.",
  keywords: "business directory, software reviews, top services, best tools, company listings",
  openGraph: {
    title: "KOBRAA Directory",
    description: "Find the best businesses, tools, and services. Rated & reviewed.",
    type: "website",
    url: "https://kobraa.directory",
    siteName: "KOBRAA Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOBRAA Directory",
    description: "Find the best businesses, tools, and services. Rated & reviewed.",
  },
  robots: "index, follow",
  metadataBase: new URL("https://kobraa.directory"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "KOBRAA Directory",
              url: "https://kobraa.directory",
              description: "Find the best businesses, tools, and services across every industry.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://kobraa.directory/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
