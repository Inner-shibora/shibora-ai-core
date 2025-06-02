import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-10">
      <img
        src="/logo-shibora.png"
        alt="Shibora Logo"
        className="w-32 h-32"
      />

      <h1 className="text-3xl md:text-5xl text-center font-bold max-w-2xl">
        What is the nature of existence?
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="https://jup.ag/swap/SOL-SHRA"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition"
        >
          Buy SHRA on DEX
        </a>

        <Link
          href="/ask"
          className="border border-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition"
        >
          Ask AI
        </Link>
      </div>

      <div className="text-center text-sm mt-10 space-y-2">
        <p>📄 <Link href="/token" className="underline">Token Overview</Link></p>
        <p>📜 <Link href="/whitepaper" className="underline">Whitepaper</Link></p>
        <p>🐦 <a href="https://twitter.com/Shibora_ai" className="underline" target="_blank">Twitter</a> → <a href="https://jup.ag/swap/SOL-SHRA" className="text-green-400 underline" target="_blank">Buy SHRA</a></p>
        <p>💬 <a href="https://t.me/Sbiora_Ai" className="underline" target="_blank">Telegram</a> → <a href="https://jup.ag/swap/SOL-SHRA" className="text-green-400 underline" target="_blank">Buy SHRA</a></p>
        <p>📊 <Link href="/trust" className="underline">Trust Index</Link></p>
        <p>🧠 <Link href="/echo" className="underline">Echo x Sage Conversations</Link></p>
      </div>
    </main>
  );
}
