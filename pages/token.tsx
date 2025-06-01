export default function TokenOverview() {
  return (
    <main className="min-h-screen bg-black text-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">📊 SHIBORA Token Overview</h1>
      <p className="mb-4 text-gray-400">Explore distribution and token activity on Solana</p>

      <div className="grid gap-6 max-w-2xl mx-auto">
        <div className="bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold">Total Supply</h2>
          <p className="text-2xl font-bold mt-2">1,000,000,000 SHRA</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold">Presale Allocation</h2>
          <p className="text-xl">200,000,000 SHRA</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold">GM Wallet</h2>
          <p className="text-sm text-gray-400 break-all">
            4JteCwYkH48tM4LEFNYTigy6vYuQeTPNTPW6TwsSCC2C
          </p>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="https://solscan.io/token/4JteCwYkH48tM4LEFNYTigy6vYuQeTPNTPW6TwsSCC2C"
          target="_blank"
          className="text-cyan-400 hover:underline"
          rel="noopener noreferrer"
        >
          View on Solscan ↗
        </a>
      </div>
    </main>
  );
}
