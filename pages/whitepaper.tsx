// 🧼 ชั่วคราว: เอา Solana Wallet ออก เพื่อให้ Build ผ่าน
import '@/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Shibora Whitepaper</h1>
      <iframe
        src="/whitepaper/Shibora-Whitepaper-v1.5.pdf"
        className="w-full max-w-5xl h-[80vh] border rounded-xl"
      ></iframe>
    </div>
  )
}
