export default function AskPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Ask SHIBORA AI</h1>
      <p className="text-lg max-w-xl text-center mb-10">
        Type your philosophical question or doubt, and our AI Sage will respond.
      </p>
      <input
        className="px-4 py-2 w-80 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring"
        placeholder="What is the nature of reality?"
      />
      <button className="mt-4 px-6 py-2 rounded bg-blue-600 hover:bg-blue-700">
        Ask
      </button>
    </main>
  );
}
