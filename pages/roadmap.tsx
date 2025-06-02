import Head from 'next/head'

export default function ShiboraRoadmap() {
  return (
    <>
      <Head>
        <title>SHIBORA AI – Roadmap 2025</title>
        <meta name="description" content="Explore the SHIBORA AI 2025 Roadmap – from Launch to Governance" />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">🧭 SHIBORA AI – Roadmap 2025</h1>

        <div className="space-y-6 border-l-4 border-yellow-500 pl-6 max-w-4xl mx-auto">
          <section>
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Q2 – Launch Phase</h2>
            <ul className="list-disc ml-6 text-gray-300">
              <li>SHRA Token minting on Solana</li>
              <li>Launch official website & whitepaper v1.5</li>
              <li>Community growth via X & Telegram</li>
              <li>Airdrop 5% scheduled release begins</li>
              <li>Open trading on Solana DEX</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Q3 – Expansion Phase</h2>
            <ul className="list-disc ml-6 text-gray-300">
              <li>SHRA DeFi platform (staking + utility)</li>
              <li>AI-powered news by Echo & Sage</li>
              <li>Partner onboarding and token allocation</li>
              <li>Trust Index full dashboard release</li>
              <li>CMC / CoinGecko listing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Q4 – Maturity Phase</h2>
            <ul className="list-disc ml-6 text-gray-300">
              <li>Governance setup for vault & reserve</li>
              <li>Multi-chain strategy + long-term vault</li>
              <li>Launch mobile dApp for the community</li>
              <li>Grow ecosystem across AI + DeFi + Media</li>
              <li>Begin roadmap planning for 2026</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
