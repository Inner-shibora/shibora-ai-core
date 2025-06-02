export default function TrustPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">SHIBORA Trust Index</h1>
      <p className="text-lg max-w-2xl text-center mb-6">
        Transparency and credibility are at the core of SHIBORA. Our Trust Index includes real-time wallet activity,
        token distribution history, and proof of reserves.
      </p>
      <ul className="text-left text-md max-w-xl space-y-2">
        <li>• 🔍 <strong>On-chain Data:</strong> All wallets and transactions are publicly verifiable.</li>
        <li>• 📜 <strong>Audit Trail:</strong> Minting, burning, and token movements are logged and immutable.</li>
        <li>• 🔐 <strong>Reserve Vault:</strong> Transparent reserve wallet with locked tokens.</li>
        <li>• 📊 <strong>Live Metrics:</strong> View real-time stats via <a href="https://solscan.io/token/[SHRA_TOKEN_ADDRESS]" className="text-green-400 underline">Solscan</a>.</li>
        <li>• 🤝 <strong>Partner Disclosures:</strong> All partner allocations and deals are disclosed publicly.</li>
      </ul>
    </main>
  );
}
