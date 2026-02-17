
import React from 'react';

interface TournamentLobbyProps {
  onJoinGame: () => void;
}

const TournamentLobby: React.FC<TournamentLobbyProps> = ({ onJoinGame }) => {
  return (
    <div className="p-4 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-chess-brown">Lobby</h1>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[10px] font-bold text-chess-brown/40 uppercase tracking-widest">1,240 Online</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-6 border-b border-chess-brown/10 overflow-x-auto no-scrollbar">
        {['All', 'High Stakes', 'Freerolls', 'My Games'].map((tab, i) => (
          <button key={tab} className={`pb-3 text-sm font-bold tracking-tight border-b-2 transition-colors ${i === 0 ? 'border-primary text-primary' : 'border-transparent text-chess-brown/40'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Featured Event Card */}
      <div className="relative overflow-hidden rounded-2xl border border-chess-brown/5 bg-white shadow-sm group">
        <div className="h-40 bg-chess-brown overflow-hidden relative">
          <img src="https://picsum.photos/seed/chess2/800/400" alt="Event" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-chess-brown to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Featured Event</span>
          </div>
        </div>
        <div className="p-6 relative -mt-10">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-black text-chess-brown">$2,000 Grand Championship</h2>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-sm">payments</span>
              <span className="text-xs font-bold">Entry: $20.00</span>
            </div>
            <div className="flex items-center gap-2 text-chess-brown/40">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span className="text-xs font-bold">Starts in 1h 12m</span>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="space-y-1">
              <div className="h-1.5 w-32 bg-chess-brown/10 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-primary"></div>
              </div>
              <p className="text-[9px] font-bold text-chess-brown/40 uppercase">5/20 Players</p>
            </div>
            <button 
              onClick={onJoinGame}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </div>

      {/* List Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold uppercase tracking-widest text-chess-brown/60">Upcoming Tournaments</h3>
          <button className="text-xs font-bold text-primary">Sort By Stake</button>
        </div>
        <div className="space-y-3">
          {[
            { title: '$500 Pro League', entry: '$5.00', time: '10m', players: '88/100', elo: '1600+' },
            { title: '$50 Blitz Casual', entry: '$1.00', time: '25m', players: '12/50', elo: 'Any' },
            { title: '$100 Freeroll', entry: 'Free', time: '1h', players: '240/1000', elo: 'Any' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-5 bg-white border border-chess-brown/5 rounded-2xl hover:bg-chess-cream/50 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-orange-600 flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-xs">timer</span> Starts in {item.time}
                  </span>
                </div>
                <h4 className="text-lg font-black text-chess-brown">{item.title}</h4>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">Entry: {item.entry}</span>
                  <span className="text-[10px] font-bold text-chess-brown/40 uppercase tracking-widest">{item.players} Joined</span>
                </div>
              </div>
              <button 
                onClick={onJoinGame}
                className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-xl transition-all active:scale-95"
              >
                <span className="material-symbols-outlined block">play_arrow</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TournamentLobby;
