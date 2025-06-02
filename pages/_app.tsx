// pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
