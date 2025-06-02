export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">SHIBORA AI Whitepaper</h1>
      <p className="text-lg max-w-2xl text-center mb-6">
        Dive deep into the vision, philosophy, and utility of the SHIBORA AI ecosystem.
        This document outlines the core technology, tokenomics, roadmap, and the guiding
        principles that drive SHIBORA forward into the new era of AI-integrated decentralization.
      </p>
      <a
        href="/docs/SHIBORA_Whitepaper_v1.4.pdf"
        target="_blank"
        className="px-6 py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
      >
        Download Full PDF
      </a>
    </main>
  );
}
