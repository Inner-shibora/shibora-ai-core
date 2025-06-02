'use client';

import { useEffect, useState } from 'react';
import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import {
  useWallet
} from '@solana/wallet-adapter-react';
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction
} from '@solana/web3.js';

export default function BuySection() {
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');
  const connection = new Connection('https://api.mainnet-beta.solana.com');

  const GM_WALLET = new PublicKey('4JteCwYkH48tM4LEFNYTigy6vYuQeTPNTPW6TwsSCC2C');

  const handleBuy = async () => {
    if (!publicKey) {
      setStatus('❌ Wallet not connected.');
      return;
    }

    try {
      const lamports = amount * 1e6; // USDC decimals
      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: GM_WALLET,
          lamports: lamports,
        })
      );

      setStatus('⏳ Sending transaction...');
      const signature = await sendTransaction(tx, connection);
      await connection.confirmTransaction(signature, 'confirmed');
      setStatus(`✅ Success! TX: ${signature}`);
    } catch (err) {
      console.error(err);
      setStatus('❌ Transaction failed.');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Buy SHRA Token</h2>

      <div className="flex flex-col items-center gap-4">
        <WalletMultiButton />

        <input
          type="number"
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          placeholder="Amount in USDC"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button
          onClick={handleBuy}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
        >
          Buy SHRA
        </button>

        <p className="text-sm mt-2 text-yellow-400">{status}</p>
      </div>
    </div>
  );
}
