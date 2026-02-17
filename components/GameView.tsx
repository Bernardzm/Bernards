
import React, { useState, useEffect } from 'react';
import ChessBoard from './ChessBoard';

interface GameViewProps {
  onBack: () => void;
}

const GameView: React.FC<GameViewProps> = ({ onBack }) => {
  const [opponentTime, setOpponentTime] = useState(180); // 3:00 in seconds
  const [playerTime, setPlayerTime] = useState(180);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlayerTurn) {
        setPlayerTime(t => Math.max(0, t - 1));
      } else {
        setOpponentTime(t => Math.max(0, t - 1));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlayerTurn]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-full flex flex-col bg-chess-cream p-4 space-y-4 animate-in fade-in duration-300">
      {/* Game Header */}
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="p-2 hover:bg-chess-brown/5 rounded-full transition-colors">
          <span className="material-symbols-outlined text-chess-brown">arrow_back</span>
        </button>
        <div className="text-center">
          <h1 className="text-sm font-bold tracking-tight">Magnus Carlsen vs You</h1>
          <p className="text-[10px] text-primary font-bold uppercase tracking-widest tracking-widest">$100.00 Stake</p>
        </div>
        <button className="p-2 hover:bg-chess-brown/5 rounded-full transition-colors">
          <span className="material-symbols-outlined text-chess-brown">settings</span>
        </button>
      </div>

      {/* Opponent Info */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-chess-brown/5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="https://picsum.photos/seed/magnus/100" alt="Magnus" className="size-12 rounded-full border-2 border-chess-brown/10" />
            <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">Magnus_C</span>
              <span className="bg-chess-brown text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">GM</span>
            </div>
            <p className="text-xs text-chess-brown/40">ELO: 2850</p>
          </div>
        </div>
        <div className="bg-chess-brown text-white px-5 py-2.5 rounded-xl font-mono text-2xl font-black">
          {formatTime(opponentTime)}
        </div>
      </div>

      {/* The Board */}
      <div className="flex-1 flex items-center justify-center py-4">
        <ChessBoard />
      </div>

      {/* Move History Strip */}
      <div className="bg-white border border-chess-brown/5 rounded-xl p-3 flex items-center gap-3 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-bold text-chess-brown/40 uppercase tracking-widest shrink-0">Moves:</span>
        <div className="flex gap-2">
          {['1. e4 e5', '2. Nf3 Nc6', '3. Bb5 a6', '4. Ba4 ...'].map((move, i) => (
            <div key={i} className={`shrink-0 px-3 py-1 rounded text-xs font-bold ${i === 3 ? 'bg-primary text-white' : 'bg-chess-brown/5 text-chess-brown/60'}`}>
              {move}
            </div>
          ))}
        </div>
      </div>

      {/* Player Info */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border-2 border-primary shadow-xl ring-4 ring-primary/10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="https://picsum.photos/seed/me/100" alt="You" className="size-12 rounded-full border-2 border-primary/20" />
            <div className="absolute -bottom-2 -left-2 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg">YOU</div>
          </div>
          <div>
            <h4 className="font-bold text-sm">ChessMaster88</h4>
            <p className="text-xs text-primary font-bold">ELO: 1850</p>
          </div>
        </div>
        <div className="bg-primary text-white px-5 py-2.5 rounded-xl font-mono text-2xl font-black">
          {formatTime(playerTime)}
        </div>
      </div>

      {/* Game Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-chess-brown/10 text-chess-brown font-bold hover:bg-chess-brown/5 transition-colors">
          <span className="material-symbols-outlined">handshake</span>
          Offer Draw
        </button>
        <button className="flex items-center justify-center gap-2 py-4 rounded-xl bg-red-50 text-red-600 border-2 border-red-100 font-bold hover:bg-red-100 transition-colors">
          <span className="material-symbols-outlined">flag</span>
          Resign
        </button>
      </div>
    </div>
  );
};

export default GameView;
