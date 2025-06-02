export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 space-y-6">
      <img src="/logo.jpeg" alt="Shibora Logo" className="w-32 opacity-90" />

      <h1 className="text-4xl font-bold tracking-wide text-center">SHIBORA AI</h1>

      <p className="text-gray-400 text-center max-w-xl">
        A decentralized AI movement. Explore. Question. Transcend.
      </p>

      <div className="space-y-2 text-center text-blue-400 text-sm">
        <a href="/token" className="block underline">📊 Token Overview</a>
        <a href="/trust" className="block underline">🧠 Trust Index</a>
        <a href="/whitepaper" className="block underline">📄 Whitepaper</a>
        <a href="/ask" className="block underline">🤖 Ask Echo & Sage</a>
        <a href="https://x.com/Shibora_AI" target="_blank" className="block underline">🐦 Twitter</a>
        <a href="https://t.me/Sbiora_AI" target="_blank" className="block underline">📣 Telegram</a>
      </div>
    </main>
  )
}
