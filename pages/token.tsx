// pages/token.tsx
export default function TokenOverview() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold">💠 SHRA Token Overview</h1>

      <div className="max-w-3xl w-full space-y-4">
        <p className="text-gray-300">
          SHRA is the native token of Shibora AI, empowering a decentralized, philosophical AI ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
          <div>
            <span className="text-white">Token Name:</span> SHIBORA AI
          </div>
          <div>
            <span className="text-white">Symbol:</span> SHRA
          </div>
          <div>
            <span className="text-white">Total Supply:</span> 1,000,000,000 SHRA
          </div>
          <div>
            <span className="text-white">Network:</span> Solana
          </div>
          <div>
            <span className="text-white">Explorer:</span>{' '}
            <a
              href="https://solscan.io/token/SHRA_TOKEN_ADDRESS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              View on Solscan
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 mt-6 text-gray-400 text-sm">
          SHRA fuels the AI interactions, ecosystem rewards, and community governance across all Shibora platforms.
        </div>
      </div>
    </div>
  );
}
