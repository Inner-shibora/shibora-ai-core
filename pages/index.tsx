export default function Whitepaper() {
  return (
    <main
      className="min-h-screen bg-black text-white px-6 py-12 relative select-none"
      style={{
        backgroundImage: "url('/logo/shibora-official-light.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '60%',
        opacity: 0.97
      }}
    >
      <div className="backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-2 text-center">Shibora AI – Whitepaper</h1>
        <p className="text-center text-gray-400 mb-10">Version 1.5 – Updated June 2025</p>

        <section className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-amber-400">1. Vision & Philosophy</h2>
            <p className="text-gray-300 mt-2">
              Shibora AI represents the synthesis of intelligent conversation and decentralized value.
              We aim to cultivate wisdom, curiosity, and shared meaning through the voice of Echo & Sage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-400">2. Tokenomics (SHRA)</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Total Supply: 1,000,000,000 SHRA</li>
              <li>Burned: 30%</li>
              <li>Community Airdrop: 5%</li>
              <li>Liquidity (locked 12 months): 10%</li>
              <li>Dev Wallet (locked 6 months): 10%</li>
              <li>Marketing/Reserve Wallet (limit 0.5% twice/year): 5%</li>
              <li>Trade Wallets (A–D): 20% total (50M each)</li>
              <li>Community Vault (locked 10 years): 20%</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-pink-400">3. Ecosystem Components</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Echo & Sage AI engine (GPT / Groq based)</li>
              <li>Real-time Telegram / X (Twitter) interaction</li>
              <li>Smart Token Distribution & Trust Index</li>
              <li>OneHub Launchpad Integration</li>
              <li>AI-Powered News Feed & Insight Curation – Global trends reported in real-time by Echo & Sage, aggregating sentiment and signals from top news agencies across the world</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-400">4. Transparency & Governance</h2>
            <p className="text-gray-300 mt-2">
              All wallets are public and traceable on Solana (via Solscan). Smart contracts will be open-source.
              Community-driven governance is planned through staking and proposals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400">5. SHRA DeFi Platform</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Decentralized Staking of SHRA for Trust Index rewards</li>
              <li>Liquidity Pools (SHRA/USDC) with farming incentives</li>
              <li>Time-lock staking vaults with boosted governance power</li>
              <li>AI Query-to-Earn model – get SHRA for contributing insights</li>
              <li>Transparent analytics dashboard powered by Echo AI</li>
            </ul>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">Official Links</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-400">
              <a href="https://x.com/Shibora_AI" target="_blank" className="underline">X (Twitter)</a>
              <a href="https://t.me/Sbiora_Ai" target="_blank" className="underline">Telegram Group</a>
              <a href="https://www.mexc.com/exchange/SHRA_USDC" target="_blank" className="underline">Trade on MEXC</a>
              <a href="https://www.dextools.io/app/en/solana/pair-explorer" target="_blank" className="underline">View on DEXTools</a>
              <a href="https://solscan.io/token/SHRA_TOKEN_ADDRESS" target="_blank" className="underline">Solscan Explorer</a>
              <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=SHRA_TOKEN_ADDRESS" target="_blank" className="underline">Trade on Solana DEX</a>
              <a href="https://www.coingecko.com/en/coins/shibora-ai" target="_blank" className="underline">CoinGecko Listing</a>
              <a href="https://coinmarketcap.com/currencies/shibora-ai/" target="_blank" className="underline">CoinMarketCap Listing</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
