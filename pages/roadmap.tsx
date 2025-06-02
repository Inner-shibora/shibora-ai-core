// pages/roadmap.tsx
export default function RoadmapPage() {
  const phases = [
    {
      title: 'Phase 1 – Genesis',
      points: [
        'Idea & Vision Design',
        'Whitepaper Draft v1.0',
        'Mint SHRA Token on Solana',
        'Launch Website + Branding',
      ],
    },
    {
      title: 'Phase 2 – Expansion',
      points: [
        'Airdrop to Community',
        'Presale Phase Completion',
        'Listing on DEX (Raydium / Jupiter)',
        'Community Building via Echo x Sage',
      ],
    },
    {
      title: 'Phase 3 – Awareness',
      points: [
        'Trust Index Integration',
        'Partner Onboarding',
        'Launch OneHub Presale System',
        'AI Public Showcase (Telegram + X)',
      ],
    },
    {
      title: 'Phase 4 – Long Term',
      points: [
        'DAO & Governance',
        'AI Marketplace Deployment',
        'Shibora Chain Exploration',
        'CMC / CoinGecko Listing',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">🛸 Roadmap – Shibora AI</h1>

      <div className="w-full max-w-4xl space-y-10">
        {phases.map((phase, index) => (
          <div key={index} className="bg-gray-900/50 p-6 rounded-xl shadow border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">{phase.title}</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {phase.points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
