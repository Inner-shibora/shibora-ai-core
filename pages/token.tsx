import Head from 'next/head'

export default function Token() {
  return (
    <>
      <Head>
        <title>SHRA Token – Shibora AI</title>
        <meta name="description" content="Explore the Tokenomics of SHRA – the fuel of Shibora AI" />
      </Head>

      {/* 🔥 Hero Section เริ่มตรงนี้ */}
      <section className="h-screen bg-black text-white flex flex-col justify-center items-center px-6 text-center">
        <img
          src="/shra-logo.png"
          alt="SHRA Token Logo"
          className="w-24 h-24 mb-6 opacity-90"
        />

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
          SHRA Token – Fueling Shibora AI
        </h1>

        <p className="text-lg text-gray-400 mt-6 max-w-xl">
          Discover the power behind Shibora's ecosystem.<br />
          SHRA is not just a token — it’s your gateway to a conscious AI future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/whitepaper"
            className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
          >
            📄 Read Whitepaper
          </a>

          <a
            href="/claim"
            className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition"
          >
            🎯 Claim SHRA
          </a>
        </div>
      </section>
      {/* 🔥 Hero Section จบตรงนี้ */}

      {/* 👇 ด้านล่างนี้เป็นส่วน Tokenomics ต่อ */}
      <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          SHRA Tokenomics
        </h2>
        {/* ...เนื้อหาอื่นๆ ของ Token... */}
      </main>
    </>
  )
}
