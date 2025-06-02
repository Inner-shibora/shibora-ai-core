// pages/partners.tsx
export default function PartnersPage() {
  const partners = [
    {
      name: "SHIBA BOOM",
      wallet: "HLDr1xY9rPK9arAUTTUghP3JJ7zMcqgwN54XfPTm1nv8",
      tokens: "500,000 SHRA",
      verified: true,
    },
    {
      name: "พาร์ทเนอร์รายที่ 2",
      wallet: "Xw3rUeGzB6gVbMJhGHw29HnuyT4eRAKi17ujPnBzVJ6a",
      tokens: "500,000 SHRA",
      verified: true,
    },
    {
      name: "พาร์ทเนอร์รายที่ 3",
      wallet: "6FSEWgr8dj1rYYTjjkFMsrT23WJ9vN8PbDDSpPwNWzPG",
      tokens: "300,000 SHRA",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">🤝 Official Partners – SHIBORA AI</h1>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-gray-900/60 p-5 rounded-xl border border-gray-700 shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
            <p className="text-sm text-gray-400 mb-1">
              💼 Wallet:{" "}
              <a
                href={`https://solscan.io/account/${partner.wallet}`}
                className="text-blue-400 underline"
                target="_blank"
              >
                {partner.wallet.slice(0, 6)}...{partner.wallet.slice(-4)}
              </a>
            </p>
            <p className="text-sm text-gray-400">🎁 Allocation: {partner.tokens}</p>
            {partner.verified && (
              <span className="mt-2 inline-block text-green-400 text-xs bg-green-800/30 px-2 py-1 rounded-full">
                ✅ Verified
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
