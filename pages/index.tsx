import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white p-8">
      <div className="text-center">
        <img
          src="/logo_shbr.png"
          alt="Shibora Logo"
          className="w-24 h-24 mx-auto mb-6 drop-shadow-xl"
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          SHIBORA AI – Decentralized Intelligence, Redefined.
        </h1>
        <p className="text-md md:text-lg text-indigo-300 mb-6">
          Launch your AI-powered token ecosystem on Solana.<br />
          Empower philosophy, governance, and growth – no coding needed.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
          EXPLORE SHIBORA
        </button>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://t.me/Sbiora_Ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition shadow"
          >
            Telegram
          </a>
          <a
            href="https://x.com/ShiboraAi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition shadow"
          >
            Twitter (X)
          </a>
        </div>
        <p className="text-sm text-indigo-400 mt-4">
          Mint, Govern, and Evolve – SHRA on Solana.
        </p>
      </div>
    </main>
  );
}
