export default function Marketplace() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Buy SHRA on Raydium</h1>
      <a
        href="https://raydium.io/swap/?input=USDC&output=SHRA"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-6 py-3 rounded-xl font-bold"
      >
        🌐 Trade Now
      </a>
    </div>
  )
}
