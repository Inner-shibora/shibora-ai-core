// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-black border-b border-gray-800 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-white">
        SHIBORA AI
      </Link>

      <div className="flex gap-4 text-sm text-gray-300">
        <Link href="/ask">Ask AI</Link>
        <Link href="/token">Token</Link>
        <Link href="/whitepaper">Whitepaper</Link>
        <Link href="/roadmap">Roadmap</Link>
        <Link href="/trust">Trust</Link>
        <Link href="/partners">Partners</Link>
      </div>
    </nav>
  );
}
