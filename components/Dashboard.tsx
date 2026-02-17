
import React from 'react';

interface DashboardProps {
  onPlayNow: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onPlayNow }) => {
  return (
    <div className="p-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2 rounded-xl">
            <span className="material-symbols-outlined">account_balance</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight">Grandmaster Cash</h1>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
          <span className="text-sm font-bold text-primary">$1,250.00</span>
          <span className="material-symbols-outlined text-sm text-primary">add_circle</span>
        </div>
      </div>

      {/* Main CTA */}
      <button 
        onClick={onPlayNow}
        className="w-full bg-primary hover:bg-primary/90 text-white p-6 rounded-2xl flex items-center justify-between shadow-xl shadow-primary/20 transition-all active:scale-95 group"
      >
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-4xl block">play_circle</span>
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-black">Play Now</h2>
            <p className="text-white/80 text-sm">Join a competitive match instantly</p>
          </div>
        </div>
        <span className="material-symbols-outlined text-3xl">chevron_right</span>
      </button>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-chess-cream p-5 rounded-2xl border border-chess-brown/5 space-y-1">
          <p className="text-[10px] font-bold text-chess-brown/40 uppercase tracking-widest">Current Rating</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-chess-brown">1,850</h3>
            <span className="text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded flex items-center mb-1">
              <span className="material-symbols-outlined text-xs">trending_up</span> +12
            </span>
          </div>
        </div>
        <div className="bg-chess-cream p-5 rounded-2xl border border-chess-brown/5 space-y-1">
          <p className="text-[10px] font-bold text-chess-brown/40 uppercase tracking-widest">Global Rank</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-black text-chess-brown">#1,240</h3>
            <span className="text-[10px] font-bold text-chess-brown/40 mb-1">TOP 2%</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold uppercase tracking-widest text-chess-brown/60">Recent Matches</h3>
          <button className="text-xs font-bold text-primary">View All</button>
        </div>
        <div className="space-y-3">
          {[
            { opponent: 'Magnus_C', result: 'Win', stake: '+$10.00', elo: '+12', img: 'https://picsum.photos/seed/m1/100' },
            { opponent: 'HikaruFan_92', result: 'Loss', stake: '-$5.00', elo: '-8', img: 'https://picsum.photos/seed/m2/100' },
            { opponent: 'AnishG', result: 'Draw', stake: '$0.00', elo: '+1', img: 'https://picsum.photos/seed/m3/100' }
          ].map((match, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white border border-chess-brown/5 rounded-2xl hover:bg-chess-cream/50 transition-colors">
              <div className="flex items-center gap-4">
                <img src={match.img} alt={match.opponent} className="size-12 rounded-full border-2 border-chess-brown/10" />
                <div>
                  <h4 className="font-bold text-sm">{match.opponent}</h4>
                  <p className={`text-[10px] font-bold uppercase ${match.result === 'Win' ? 'text-green-600' : match.result === 'Loss' ? 'text-red-600' : 'text-chess-brown/40'}`}>
                    {match.result} • {match.stake}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-sm font-bold ${match.elo.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {match.elo} ELO
                </span>
                <p className="text-[10px] text-chess-brown/40 mt-0.5">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tournament */}
      <section className="space-y-4 pb-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-chess-brown/60 px-1">Upcoming Events</h3>
        <div className="relative overflow-hidden rounded-2xl bg-chess-brown p-6 text-white group cursor-pointer">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-primary/20 border border-primary text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Active Now</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-primary/20 size-16 rounded-xl flex items-center justify-center border border-primary/30">
              <span className="material-symbols-outlined text-4xl text-primary">emoji_events</span>
            </div>
            <div>
              <h4 className="text-xl font-black">Professional Blitz Open</h4>
              <p className="text-white/60 text-sm mt-1">High stakes blitz competition for GMs and aspiring pros.</p>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">payments</span>
                <span className="text-xs font-bold">$5,000 Prize</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                <span className="text-xs font-bold">Starts in 2h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
