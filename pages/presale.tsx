export default function PresalePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">🪙 SHIBORA Presale</h1>
      <p className="mb-6">Get +50% Bonus SHRA by purchasing with USDC now.</p>

      <div className="bg-gray-800 p-6 rounded-xl max-w-md mx-auto">
        <input
          type="number"
          placeholder="Enter amount in USDC"
          className="w-full p-3 rounded-lg text-black mb-4"
        />
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold w-full">
          💸 Buy SHRA
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Connected wallet will be checked and tokens sent after validation.
        </p>
      </div>
    </main>
  );
}
