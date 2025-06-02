import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16 space-y-10">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Shibora Logo"
        className="w-24 h-24 md:w-32 md:h-32"
      />

      {/* Main Question */}
      <h1 className="text-2xl md:text-4xl font-semibold text-center">
        What is the nature of existence?
      </h1>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link href="/ask">
          <button className="bg-white text-black px-6 py-2 rounded-2xl font-semibold hover:bg-gray-300 transition">
            Ask AI
          </button>
        </Link>
        <Link href="https://raydium.io/swap/?input=sol&output=shra" target="_blank">
          <button className="border border-white px-6 py-2 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
            Buy SHRA with SOL
          </button>
        </Link>
        <Link href="https://raydium.io/swap/?input=usdc&output=shra" target="_blank">
          <button className="border border-white px-6 py-2 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
            Buy SHRA with USDC
          </button>
        </Link>
      </div>

      {/* Echo x Sage Dialogue (Placeholder) */}
      <div className="max-w-2xl text-center italic text-gray-400">
        "Echo: The stars don’t speak, but I hear them."
        <br />
        "Sage: Only those who listen beyond sound truly hear."
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 pt-10 text-sm text-gray-400">
        <Link href="/token" className="hover:underline">Token Overview</Link>
        <Link href="/whitepaper" className="hover:underline">Whitepaper</Link>
        <Link href="/trust" className="hover:underline">Trust Index</Link>
        <a href="https://twitter.com/Shibora_ai" target="_blank" className="hover:underline">Twitter</a>
        <a href="https://t.me/Sbiora_Ai" target="_blank" className="hover:underline">Telegram</a>
      </div>

      {/* Tokenomics Section */}
      <div className="pt-16 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">SHRA Tokenomics</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          SHRA Token is distributed across Presale, Community Growth, Dev Funds, Liquidity, and Reserves. Designed to fuel an AI-powered ecosystem.
        </p>
        <Link href="/token">
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-2xl font-semibold hover:bg-gray-300 transition">
            View Full Tokenomics
          </button>
        </Link>
      </div>

      {/* Airdrop Section */}
      <div className="pt-20 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Airdrop Campaign</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          +50% Bonus SHRA for all buyers during the presale period. All tokens will be distributed via airdrop on <span className="text-white font-bold">June 6, 2025</span>.
        </p>
        <p className="text-sm text-gray-500 mt-2">Follow our Telegram for claim instructions.</p>
        <a href="https://t.me/Sbiora_Ai" target="_blank">
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-2xl font-semibold hover:bg-gray-300 transition">
            Join Telegram
          </button>
        </a>
      </div>

      {/* Partners Section */}
      <div className="pt-20 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Official Partners</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Strategic partners helping shape the future of decentralized AI.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/partners/shiba-boom.png" alt="Partner 1" className="h-12" />
          <img src="/partners/partner-2.png" alt="Partner 2" className="h-12" />
          <img src="/partners/partner-3.png" alt="Partner 3" className="h-12" />
        </div>
      </div>
    </main>
  );
}
