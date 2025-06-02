// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 p-8">
      <img src="/logo.jpeg" alt="Shibora Logo" className="w-40 h-40 rounded-full shadow-lg" />
      <h1 className="text-4xl font-bold text-center">SHIBORA AI – What is the nature of existence?</h1>
      <div className="flex space-x-4">
        <Link href="/ask" className="bg-white text-black px-6 py-3 rounded-xl shadow hover:bg-gray-200">Ask AI</Link>
        <Link href="/claim" className="bg-white text-black px-6 py-3 rounded-xl shadow hover:bg-gray-200">Claim Airdrop</Link>
      </div>
      <div className="mt-6 text-center text-sm text-gray-400 space-y-1">
        <p><Link href="/token">Token Overview</Link> • <Link href="/whitepaper">Whitepaper</Link> • <Link href="/trust">Trust Index</Link></p>
        <p><Link href="/roadmap">Roadmap</Link> • <Link href="/partners">Partners</Link></p>
      </div>
    </div>
  );
}
