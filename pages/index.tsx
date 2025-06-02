export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 space-y-6">
      <img src="/logo.jpeg" alt="Shibora Logo" className="w-32 opacity-90" />
      <h1 className="text-3xl font-bold tracking-wide">SHIBORA AI</h1>
      <p className="text-gray-400 text-center max-w-md">
        A decentralized AI movement. Explore. Question. Transcend.
      </p>

      <div className="space-y-2 text-center text-blue-400 text-sm">
        <a href="/dex" className="block underline">🔁 Trade on DEX</a>
        <a href="/whitepaper" className="block underline">📄 Whitepaper</a>
        <a href="/token" className="block underline">📊 Token Overview</a>
        <a href="/trust" className="block underline">🛡 Trust Index</a>
        <a href="https://x.com/Shibora_AI" target="_blank" className="block underline">🐦 Twitter</a>
        <a href="https://t.me/Sbiora_Ai" target="_blank" className="block underline">📣 Telegram</a>
      </div>
    </main>
  );
}
