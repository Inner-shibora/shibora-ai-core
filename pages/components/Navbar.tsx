import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full backdrop-blur bg-black/80 border-b border-white/10 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
          SHIBORA<span className="text-purple-400"> AI</span>
        </Link>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <li><Link href="/" className="hover:text-white transition">Home</Link></li>
          <li><Link href="/token" className="hover:text-white transition">Token</Link></li>
          <li><Link href="/whitepaper" className="hover:text-white transition">Whitepaper</Link></li>
          <li><Link href="/ask" className="hover:text-white transition">Ask AI</Link></li>
          <li><Link href="/claim" className="hover:text-white transition">Claim</Link></li>
        </ul>
      </nav>
    </header>
  )
}
