import React, { useState, useEffect } from 'react';

export default function App() {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'shop'>('menu');
  const [money, setMoney] = useState(500);
  const [inventory, setInventory] = useState<string[]>([]);

  return (
    <div className="w-screen h-screen relative flex flex-col justify-between bg-slate-900 select-none">
      {/* Top Header Bar */}
      <header className="flex justify-between items-center p-4 bg-slate-800/80 backdrop-blur border-b border-slate-700 z-10">
        <h1 className="text-xl font-bold text-emerald-400">ചൂണ്ടയിട്ടല്ലോ (Choondayittallo)</h1>
        <div className="flex gap-4 text-sm">
          <span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700">💰 ₹ {money}</span>
          <span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700">🐟 Fish: {inventory.length}</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative flex items-center justify-center">
        {gameState === 'menu' && (
          <div className="text-center space-y-6 p-8 bg-slate-800/90 border border-slate-700 rounded-2xl shadow-2xl max-w-md mx-4">
            <h2 className="text-3xl font-extrabold text-emerald-400">കേരള ഫിഷിംഗ് സിമുലേറ്റർ</h2>
            <p className="text-slate-300 text-sm">
              Explore Kerala waterways, catch Karimeen and Varaal, upgrade your gear, and build your fishing empire!
            </p>
            <button
              onClick={() => setGameState('playing')}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition shadow-lg"
            >
              തുടങ്ങാം (Start Fishing) 🎣
            </button>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-teal-900 to-slate-900">
            <div className="text-center space-y-4">
              <p className="text-emerald-300 animate-pulse text-lg">🌊 Casting line into the backwaters...</p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setInventory([...inventory, 'കരിമീൻ (Pearl Spot)']);
                    setMoney(money + 450);
                  }}
                  className="px-6 py-2 bg-amber-600 hover:bg-amber-500 font-semibold rounded-lg shadow"
                >
                  Pull Line! (Catch Fish)
                </button>
                <button
                  onClick={() => setGameState('menu')}
                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 font-semibold rounded-lg shadow"
                >
                  Back to Menu
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer / Controls Guide */}
      <footer className="p-3 bg-slate-800/80 text-center text-xs text-slate-400 border-t border-slate-700">
        Kerala Fishing Life Simulator • Built with Vite, React & Three.js
      </footer>
    </div>
  );
}