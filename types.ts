
export enum View {
  DASHBOARD = 'DASHBOARD',
  PLAY = 'PLAY',
  LEADERBOARD = 'LEADERBOARD',
  WALLET = 'WALLET',
  PROFILE = 'PROFILE',
  ANALYSIS = 'ANALYSIS'
}

export interface Player {
  id: string;
  username: string;
  elo: number;
  rank?: number;
  avatar: string;
  isGM?: boolean;
  status: 'online' | 'offline' | 'idle' | 'in-game';
}

export interface MatchResult {
  opponent: string;
  outcome: 'win' | 'loss' | 'draw';
  payout: number;
  eloChange: number;
  date: string;
}

export interface Tournament {
  id: string;
  title: string;
  prizePool: number;
  entryFee: number;
  startTime: string;
  playersJoined: number;
  maxPlayers: number;
  type: 'Blitz' | 'Rapid' | 'Bullet';
}
