import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>SHIBORA AI Core</title>
        <meta name="description" content="Presale and Airdrop for SHIBORA Token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white text-center p-10">
        <h1 className="text-5xl font-extrabold mb-6">👁️ SHIBORA AI</h1>
        <p className="text-lg text-gray-300 mb-10">
          Welcome to the official launchpad for SHRA – Shibora Token.<br />
          Launch, Presale, Airdrop, and Powered Blockchain Innovation.
        </p>

        <div className="grid gap-4 max-w-sm mx-auto">
          <Link href="/presale">
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl text-white font-semibold text-lg">
              🪙 Join Presale
            </button>
          </Link>
          <Link href="/claim">
            <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl text-white font-semibold text-lg">
              🎁 Claim Airdrop
            </button>
          </Link>
          <Link href="/token">
            <button className="w-full border border-gray-500 hover:bg-gray-700 py-3 rounded-xl text-gray-300 font-semibold text-lg">
              📊 Token Overview
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
