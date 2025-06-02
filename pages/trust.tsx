// pages/trust.tsx
export default function TrustIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold text-center">🔍 Trust Index – Shibora AI</h1>

      <p className="text-gray-400 max-w-2xl text-center">
        Trust is earned through transparency. Below is a breakdown of all critical components publicly verifiable by anyone.
      </p>

      <div className="w-full max-w-3xl space-y-6">
        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h2 className="text-lg font-semibold mb-2">📦 Token Allocation</h2>
          <p className="text-sm text-gray-300">View all wallets and token splits clearly.</p>
          <a
            href="https://shibora-ai.xyz/token"
            target="_blank"
            className="text-blue-400 underline text-sm"
          >
            View Token Overview
          </a>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h2 className="text-lg font-semibold mb-2">🔗 Contract & Explorer</h2>
          <p className="text-sm text-gray-300">Token contract is deployed on Solana with fixed supply.</p>
          <a
            href="https://solscan.io/token/SHRA_TOKEN_ADDRESS"
            target="_blank"
            className="text-blue-400 underline text-sm"
          >
            View on Solscan
          </a>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h2 className="text-lg font-semibold mb-2">📜 Whitepaper & Philosophy</h2>
          <p className="text-sm text-gray-300">All guiding principles, AI vision, and token mechanics are open to the public.</p>
          <a
            href="/whitepaper"
            className="text-blue-400 underline text-sm"
          >
            Read Whitepaper
          </a>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
          <h2 className="text-lg font-semibold mb-2">🤝 Partners & Audit Trail</h2>
          <p className="text-sm text-gray-300">Public logs of partner confirmations and official allocations.</p>
          <a
            href="/partners"
            className="text-blue-400 underline text-sm"
          >
            View Partner Section
          </a>
        </div>
      </div>
    </div>
  );
}
