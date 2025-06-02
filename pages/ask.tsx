export default function Ask() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Ask Echo & Sage</h1>
      <p className="text-center text-gray-400 max-w-xl mb-8">
        What is the nature of existence?
      </p>
      <textarea
        className="w-full max-w-lg p-4 text-black rounded-lg"
        rows={4}
        placeholder="Ask your question..."
      />
      <button className="mt-4 px-6 py-2 bg-white text-black rounded-xl font-semibold">Ask</button>
    </div>
  )
}
