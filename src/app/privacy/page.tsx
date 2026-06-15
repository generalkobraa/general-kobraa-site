import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – KOBRAA Directory",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-black text-white mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>
      <div className="space-y-6 text-gray-400 leading-relaxed text-sm">
        <section>
          <h2 className="text-lg font-bold text-white mb-2">1. Information We Collect</h2>
          <p>We collect information you provide directly (name, email, business details) and automatically (pages visited, device info, IP address) when you use KOBRAA Directory.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">2. How We Use Your Information</h2>
          <p>We use your information to operate and improve KOBRAA Directory, respond to inquiries, send newsletters (with your consent), and display relevant advertising.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">3. Advertising</h2>
          <p>KOBRAA Directory uses Google AdSense and other ad networks to display advertisements. These networks may use cookies and similar technologies to display personalized ads based on your browsing behavior. You can opt out via your browser settings or tools like YourAdChoices.com.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">4. Affiliate Links</h2>
          <p>Some links on KOBRAA Directory are affiliate links. If you click and make a purchase, we may receive a commission at no additional cost to you. This does not affect our editorial rankings.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">5. Cookies</h2>
          <p>We use cookies to analyze traffic, personalize content, and improve user experience. By using our site, you consent to the use of cookies.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-white mb-2">6. Contact</h2>
          <p>Questions? Email us at <a href="mailto:privacy@kobraa.directory" className="text-[#f5c518] hover:underline">privacy@kobraa.directory</a>.</p>
        </section>
      </div>
    </div>
  );
}
