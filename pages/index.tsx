import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shibora AI Core</title>
        <meta name="description" content="Presale and Airdrop for SHIBORA Token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          🚀 Welcome to SHIBORA AI
        </h1>
        <p className="text-lg md:text-xl text-center max-w-xl mb-10">
          Your Gateway to Presale, Airdrop, and AI-powered Blockchain Innovation.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/presale"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
          >
            🛒 Join Presale
          </a>
          <a
            href="/claim"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
          >
            🎁 Claim Airdrop
          </a>
          <a
            href="https://t.me/Sbiora_Ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
          >
            💬 Join Telegram
          </a>
        </div>

        <footer className="text-sm text-gray-500 mt-16">
          &copy; {new Date().getFullYear()} SHIBORA – All rights reserved.
        </footer>
      </main>
    </>
  );
}
