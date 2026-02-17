
import React from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: View.DASHBOARD, label: 'Home', icon: 'home' },
    { id: View.PLAY, label: 'Play', icon: 'sports_esports' },
    { id: View.LEADERBOARD, label: 'Ranking', icon: 'analytics' },
    { id: View.WALLET, label: 'Wallet', icon: 'account_balance_wallet' },
    { id: View.PROFILE, label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 max-w-2xl w-full bg-white border-t border-chess-brown/10 flex justify-around items-center px-4 pt-2 pb-6 z-40">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            currentView === item.id ? 'text-primary' : 'text-chess-brown/40'
          }`}
        >
          <span className={`material-symbols-outlined ${currentView === item.id ? 'fill-[1]' : ''}`}>
            {item.icon}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-widest`}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
