// pages/ask.tsx
import { useState } from 'react';

export default function AskPage() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    setLoading(true);
    setResponse(null);

    // 🔁 Mock Response – คุณสามารถเปลี่ยนเป็น API จริงได้ภายหลัง
    setTimeout(() => {
      setResponse(`Sage: The nature of your question reveals the soul's desire to understand itself.`);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Echo & Sage – Ask the AI</h1>

      <input
        type="text"
        placeholder="What is the nature of time?"
        className="w-full max-w-lg px-4 py-2 text-black rounded-lg"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={askAI}
        disabled={!question || loading}
        className="mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 disabled:opacity-50"
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      {response && (
        <div className="mt-6 max-w-xl text-center text-gray-300 italic border-t border-gray-700 pt-4">
          {response}
        </div>
      )}
    </div>
  );
}
