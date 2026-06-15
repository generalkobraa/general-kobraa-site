import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – KOBRAA Directory",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-black text-white mb-2">Terms of Use</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>
      <div className="space-y-6 text-gray-400 leading-relaxed text-sm">
        <section>
          <h2 className="text-lg font-bold text-white mb-2">1. Acceptance of Terms</h2>
          <p>By accessing KOBRAA Directory, you agree to these Terms of Use. If you do not agree, please do not use the site.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">2. Use of the Service</h2>
          <p>KOBRAA Directory is provided for informational purposes only. You may not use the service for any unlawful purpose or in any way that violates these terms.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">3. Listings & Reviews</h2>
          <p>Business listings and reviews are submitted by users and third parties. KOBRAA does not endorse or guarantee the accuracy of any listing. We reserve the right to remove any listing that violates our guidelines.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">4. Intellectual Property</h2>
          <p>All content on KOBRAA Directory, unless otherwise noted, is the property of KOBRAA and protected by applicable copyright laws.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">5. Limitation of Liability</h2>
          <p>KOBRAA Directory is not liable for any damages arising from your use of the service or reliance on any listed business or service.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">6. Contact</h2>
          <p>Questions? Email <a href="mailto:legal@kobraa.directory" className="text-[#f5c518] hover:underline">legal@kobraa.directory</a>.</p>
        </section>
      </div>
    </div>
  );
}
