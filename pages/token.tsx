import Head from 'next/head'

export default function Token() {
  return (
    <>
      <Head>
        <title>SHRA Token – Shibora AI</title>
        <meta name="description" content="Explore the Tokenomics of SHRA – the fuel of Shibora AI" />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          SHRA – Shibora AI Token
        </h1>

        <p className="text-center max-w-2xl text-gray-300 mb-10">
          SHRA is the utility and governance token powering the Shibora AI ecosystem. It fuels AI development, supports philosophical interactions, and incentivizes community contribution through a fair and transparent tokenomics model.
        </p>

        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">🔢 Total Supply</h2>
            <p>1,000,000,000 SHRA</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">🚀 Circulating Supply</h2>
            <p>200,000,000 SHRA (Presale & Airdrop)</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">💧 Liquidity</h2>
            <p>100,000,000 SHRA on Raydium</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">📦 Reserve</h2>
            <p>300,000,000 SHRA (Locked for Trust Index)</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">📊 Token Distribution</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>20% – Presale & Airdrop</li>
              <li>10% – Liquidity Pool</li>
              <li>30% – Reserve (Locked)</li>
              <li>20% – Community Growth</li>
              <li>10% – Dev & Team</li>
              <li>10% – CEX/DEX Reserves</li>
            </ul>
          </div>
        </section>

        <div className="mt-12 text-center">
          <a
            href="/whitepaper"
            className="inline-block px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            📄 View Full Whitepaper
          </a>
        </div>
      </main>
    </>
  )
}
