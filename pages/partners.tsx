const partners = [
  {
    name: "Partner #1",
    wallet: "HLDr1x...",
    solscan: "https://solscan.io/account/HLDr1x...",
  },
  {
    name: "Partner #2",
    wallet: "6FSEWg...",
    solscan: "https://solscan.io/account/6FSEWg...",
  },
]

export default function Partners() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Our Partners</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {partners.map((p, i) => (
          <div key={i} className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-2">{p.name}</h2>
            <p className="text-sm break-all text-gray-400">{p.wallet}</p>
            <a href={p.solscan} target="_blank" className="text-blue-400 underline">View on Solscan</a>
          </div>
        ))}
      </div>
    </div>
  )
}
