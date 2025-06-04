// ✅ index.tsx (วางทับใน /pages/index.tsx ได้เลย)
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shibora AI</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">What is the nature of existence?</h1>
        <p className="mt-4 text-gray-400">Echo & Sage invite you to explore with AI</p>
        <div className="mt-8 flex gap-4">
          <a href="/ask" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">🔍 Ask AI</a>
          <a href="/token" className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black">💠 View SHRA Token</a>
        </div>
      </main>
    </>
  );
}
