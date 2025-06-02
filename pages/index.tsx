export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <img src="/logo.jpeg" alt="Shibora Logo" width={100} className="mb-4" />
      <h1 className="text-3xl font-bold mb-2">SHIBORA AI</h1>
      <p className="text-gray-400 mb-6">
        The AI That Questions Everything – Now Live on DEX. Join the Movement.
      </p>

      <div className="space-y-3 text-blue-400 text-sm">
        <a href="/dex" className="block underline">🔁 Trade on DEX</a>
        <a href="/whitepaper" className="block underline">📄 View Whitepaper</a>
        <a href="/token" className="block underline">📊 Token Overview</a>
        <a href="/trust" className="block underline">🛡 Trust Index</a>
        <a href="https://x.com/Shibora_AI" className="block underline" target="_blank">🐦 Twitter</a>
        <a href="https://t.me/Sbiora_Ai" className="block underline" target="_blank">📣 Telegram</a>
      </div>
    </main>
  );
}
