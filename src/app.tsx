import React, { useState, useEffect } from 'react';

export default function App() {
  const [gameState, setGameState] = useState<'menu' | 'playing'>('menu');
  const [money, setMoney] = useState(500);
  const [fishCount, setFishCount] = useState(0);

  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-slate-900 text-white select-none overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-slate-800 border-b border-slate-700 z-10">
        <h1 className="text-xl font-bold text-emerald-400">ചൂണ്ടയിട്ടല്ലോ 🎣</h1>
        <div className="flex gap-4 text-sm font-semibold">
          <span className="bg-slate-900 px-3 py-1.5 rounded-full border border-slate-700 text-amber-400">💰 ₹ {money}</span>
          <span className="bg-slate-900 px-3 py-1.5 rounded-full border border-slate-700 text-teal-300">🐟 മീൻ: {fishCount}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative flex items-center justify-center">
        {gameState === 'menu' ? (
          <div className="text-center space-y-6 p-8 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl max-w-md mx-4">
            <h2 className="text-3xl font-extrabold text-emerald-400">കേരള ഫിഷിംഗ് സിമുലേറ്റർ</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              കേരളത്തിലെ പുഴകളിലും കായലുകളിലും ചൂണ്ടയിട്ട് മീൻ പിടിക്കാം! കരിമീനും വരാലും പിടിച്ച് വിറ്റ് പുതിയ ഉപകരണങ്ങൾ വാങ്ങൂ.
            </p>
            <button
              onClick={() => setGameState('playing')}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg rounded-xl transition shadow-lg"
            >
              തുടങ്ങാം (Start Fishing) 🎣
            </button>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-teal-900 to-slate-900 p-6 text-center">
            <div className="space-y-4 bg-slate-800/90 p-8 rounded-2xl border border-slate-700 max-w-md">
              <p className="text-emerald-300 animate-pulse text-lg font-semibold">🌊 ആഹാ! ചൂണ്ട വെള്ളത്തിലേക്ക് എറിഞ്ഞിരിക്കുന്നു...</p>
              <button
                onClick={() => {
                  setFishCount(fishCount + 1);
                  setMoney(money + 450);
                }}
                className="w-full py-3 bg-amber-600 hover:bg-amber-500 font-bold rounded-xl shadow text-white"
              >
                വല വലിക്കുക / മീൻ പിടിക്കുക! 🐟
              </button>
              <button
                onClick={() => setGameState('menu')}
                className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 font-semibold rounded-xl"
              >
                മെനുവിലേക്ക് തിരികെ പോവുക
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="p-2.5 bg-slate-800 text-center text-xs text-slate-400 border-t border-slate-700 z-10">
        Kerala Fishing Life Simulator • Built with Vite, React & Three.js
      </footer>
    </div>
  );
}