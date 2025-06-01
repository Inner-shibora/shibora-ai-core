import dynamic from "next/dynamic";
const BuySection = dynamic(() => import("../components/BuySection"), { ssr: false });

export default function PresalePage() {
  return (
    <main className="min-h-screen bg-black text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">SHRA Presale</h1>
      <BuySection />
    </main>
  );
}
