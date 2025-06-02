export default function TokenOverview() {
  return (
    <main className="min-h-screen bg-black text-white p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">SHRA Token Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Token Details</h2>
          <ul className="space-y-1 text-sm">
            <li><strong>Name:</strong> SHIBORA AI</li>
            <li><strong>Symbol:</strong> SHRA</li>
            <li><strong>Supply:</strong> 1,000,000,000 SHRA</li>
            <li><strong>Network:</strong> Solana</li>
            <li><strong>Decimals:</strong> 9</li>
            <li><strong>Address:</strong> <code>2dC3KyEFtnjGm5SEdqJAYQvWaWDtpGC6jVnYof1supGC6V</code></li>
          </ul>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Token Allocation</h2>
          <ul className="space-y-1 text-sm">
            <li>Presale: 200,000,000 (20%)</li>
            <li>Liquidity Pool: 100,000,000 (10%)</li>
            <li>Community Growth: 200,000,000 (20%)</li>
            <li>Dev Fund: 100,000,000 (10%)</li>
            <li>Trade Reserve: 350,000,000 (35%)</li>
            <li>Reserve Vault: 50,000,000 (5%)</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm opacity-60">
        Last updated: June 2025
      </div>
    </main>
  );
}
