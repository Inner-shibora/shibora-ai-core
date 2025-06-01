'use client';
import { useEffect, useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useWallet, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Connection, clusterApiUrl, Transaction, SystemProgram } from '@solana/web3.js';

export default function BuySection() {
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = useState(10); // USDC amount
  const [status, setStatus] = useState('');
  const connection = new Connection(clusterApiUrl('devnet'));

  const GM_WALLET = new PublicKey('4JteCwYkH48tM4LEFNYTigy6vYuQeTPNTPW6TwsSCC2C');

  const handleBuy = async () => {
    if (!publicKey) {
      setStatus('🚫 Wallet not connected.');
      return;
    }

    try {
      const lamports = amount * 1e6; // 6 decimals for USDC
      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: GM_WALLET,
          lamports: lamports,
        })
      );

      const signature = await sendTransaction(tx, connection);
      setStatus('⏳ Waiting for confirmation...');
      await connection.confirmTransaction(signature, 'confirmed');
      setStatus(`✅ Success! TX: ${signature}`);
    } catch (err) {
      console.error(err);
      setStatus('❌ Transaction failed.');
    }
  };

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-md max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Buy SHRA Token</h2>
      <div className="mb-4">
        <WalletMultiButton />
      </div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 mb-4"
        placeholder="Enter USDC amount"
      />
      <button
        onClick={handleBuy}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        Buy Now
      </button>
      <p className="mt-4 text-sm text-gray-400">{status}</p>
    </div>
  );
}
