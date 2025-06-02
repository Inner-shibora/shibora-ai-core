export default function Token() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">SHRA Token Overview</h1>

      <section className="max-w-3xl mx-auto space-y-6">
        <p>
          SHRA is the native token of the Shibora AI ecosystem. It powers community growth,
          liquidity, development, and transparency. Below is the current token allocation:
        </p>

        <ul className="list-disc list-inside text-gray-300">
          <li>Presale: 20% (200,000,000 SHRA)</li>
          <li>Community Growth: 20%</li>
          <li>Development: 10%</li>
          <li>Liquidity: 10%</li>
          <li>Reserves: 40%</li>
        </ul>

        <p>
          SHRA is deployed on Solana with transparent wallets. View on <a
            href="https://solscan.io/token/SHRA-TOKEN-ADDRESS"
            target="_blank"
            className="underline text-blue-400"
          >Solscan</a>.
        </p>
      </section>
    </main>
  );
}
