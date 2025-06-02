// pages/whitepaper.tsx
export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">📜 SHIBORA AI – Whitepaper</h1>
      <p className="text-gray-400 text-center">
        Explore our vision, tokenomics, roadmap, and the philosophy behind SHRA.
      </p>
      <iframe
        src="/whitepaper.pdf"
        className="w-full max-w-4xl h-[80vh] rounded-xl shadow-lg border border-gray-700"
      ></iframe>
    </div>
  );
}
