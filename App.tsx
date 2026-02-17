
import React, { useState } from 'react';
import { View } from './types';
import Dashboard from './components/Dashboard';
import TournamentLobby from './components/TournamentLobby';
import GameView from './components/GameView';
import Wallet from './components/Wallet';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [isGameActive, setIsGameActive] = useState(false);

  const renderContent = () => {
    if (isGameActive) {
      return <GameView onBack={() => setIsGameActive(false)} />;
    }

    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard onPlayNow={() => setIsGameActive(true)} />;
      case View.PLAY:
        return <TournamentLobby onJoinGame={() => setIsGameActive(true)} />;
      case View.LEADERBOARD:
        return <Leaderboard />;
      case View.WALLET:
        return <Wallet />;
      case View.PROFILE:
        return <Profile />;
      default:
        return <Dashboard onPlayNow={() => setIsGameActive(true)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-20 no-scrollbar">
        {renderContent()}
      </main>
      {!isGameActive && (
        <Navigation currentView={currentView} onNavigate={setCurrentView} />
      )}
    </div>
  );
};

export default App;
