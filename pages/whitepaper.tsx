// 🧼 ชั่วคราว: เอา Solana Wallet ออก เพื่อให้ Build ผ่าน
import '@/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
