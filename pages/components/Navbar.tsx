// components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md border-b">
      <div className="text-xl font-bold">Shibora AI</div>
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/ask">Ask AI</Link></li>
        <li><Link href="/token">Token</Link></li>
        <li><Link href="/whitepaper">Whitepaper</Link></li>
        <li><Link href="/roadmap">Roadmap</Link></li>
        <li><Link href="/trust">Trust Index</Link></li>
        <li><Link href="/partners">Partners</Link></li>
      </ul>
    </nav>
  )
}
