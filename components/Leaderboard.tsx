
import React from 'react';

const Leaderboard: React.FC = () => {
  const topPlayers = [
    { name: 'MagnusC', elo: 2850, avatar: 'https://picsum.photos/seed/p1/100', gm: true, payout: '$25,800', rank: 1 },
    { name: 'Hikaru_N', elo: 2820, avatar: 'https://picsum.photos/seed/p2/100', gm: true, payout: '$12,450', rank: 2 },
    { name: 'FabianoC', elo: 2810, avatar: 'https://picsum.photos/seed/p3/100', gm: true, payout: '$8,200', rank: 3 }
  ];

  return (
    <div className="p-4 space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-chess-brown">Global Rankings</h1>
        <button className="p-2 hover:bg-chess-brown/5 rounded-full">
          <span className="material-symbols-outlined text-chess-brown">search</span>
        </button>
      </div>

      {/* Time Toggle */}
      <div className="flex bg-chess-brown/5 p-1 rounded-2xl">
        {['Bullet', 'Blitz', 'Rapid'].map((type, i) => (
          <button key={type} className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${i === 1 ? 'bg-white shadow-sm text-chess-brown' : 'text-chess-brown/40'}`}>
            {type}
          </button>
        ))}
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-4 py-8 h-64">
        {/* 2nd */}
        <div className="flex flex-col items-center flex-1">
          <div className="relative mb-3">
            <img src={topPlayers[1].avatar} alt="" className="size-16 rounded-full border-4 border-slate-300 shadow-lg" />
            <div className="absolute -bottom-1 -right-1 size-6 bg-slate-300 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">2</div>
          </div>
          <span className="text-xs font-bold">{topPlayers[1].name}</span>
          <span className="text-[10px] font-bold text-primary">GM</span>
          <span className="text-xs font-medium text-chess-brown/40">{topPlayers[1].payout}</span>
        </div>
        {/* 1st */}
        <div className="flex flex-col items-center flex-1 -translate-y-4">
          <div className="relative mb-4">
            <span className="material-symbols-outlined text-yellow-500 text-3xl absolute -top-10 left-1/2 -translate-x-1/2">workspace_premium</span>
            <img src={topPlayers[0].avatar} alt="" className="size-24 rounded-full border-4 border-yellow-500 shadow-2xl" />
            <div className="absolute -bottom-1 -right-1 size-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">1</div>
          </div>
          <span className="text-sm font-black">{topPlayers[0].name}</span>
          <span className="text-xs font-bold text-primary">GM</span>
          <span className="text-sm font-bold text-chess-brown">{topPlayers[0].payout}</span>
        </div>
        {/* 3rd */}
        <div className="flex flex-col items-center flex-1">
          <div className="relative mb-3">
            <img src={topPlayers[2].avatar} alt="" className="size-16 rounded-full border-4 border-amber-600/50 shadow-lg" />
            <div className="absolute -bottom-1 -right-1 size-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">3</div>
          </div>
          <span className="text-xs font-bold">{topPlayers[2].name}</span>
          <span className="text-[10px] font-bold text-primary">GM</span>
          <span className="text-xs font-medium text-chess-brown/40">{topPlayers[2].payout}</span>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-chess-brown/40 px-4">
          <span className="w-10">#</span>
          <span className="flex-1">Player</span>
          <span className="w-20 text-right">ELO</span>
          <span className="w-20 text-right">Win %</span>
        </div>
        <div className="space-y-2">
          {[4, 5, 6, 7, 8].map((rank) => (
            <div key={rank} className="flex items-center p-4 bg-white border border-chess-brown/5 rounded-2xl hover:bg-chess-cream transition-colors group">
              <span className="w-10 text-sm font-bold text-chess-brown/20 group-hover:text-primary">{rank}</span>
              <div className="flex-1 flex items-center gap-3">
                <img src={`https://picsum.photos/seed/p${rank}/100`} alt="" className="size-10 rounded-full" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold">Player_{rank}</span>
                    <span className="text-[9px] font-bold bg-primary/10 text-primary px-1 rounded">GM</span>
                  </div>
                  <p className="text-[10px] text-chess-brown/40 uppercase font-bold tracking-widest">Global</p>
                </div>
              </div>
              <span className="w-20 text-right text-sm font-bold">2700</span>
              <span className="w-20 text-right text-sm font-medium text-green-600">62%</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Floating Row */}
      <div className="sticky bottom-4 left-0 right-0 z-10 px-4 pt-10">
        <div className="bg-chess-brown text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between border border-white/10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src="https://picsum.photos/seed/me/100" alt="" className="size-10 rounded-full border border-primary" />
              <div className="absolute -top-1 -left-1 bg-primary text-[8px] font-black px-1.5 py-0.5 rounded-full border border-chess-brown">#1,429</div>
            </div>
            <div>
              <p className="text-xs font-bold">You (ChessMaster88)</p>
              <p className="text-[10px] text-white/50">ELO: 1845 • Win: 52%</p>
            </div>
          </div>
          <button className="bg-primary text-white text-[10px] font-black px-4 py-2 rounded-xl active:scale-95 transition-all">
            CHALLENGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
