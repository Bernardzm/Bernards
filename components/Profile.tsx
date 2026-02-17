
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="space-y-0 animate-in fade-in duration-500">
      {/* Header Info */}
      <div className="p-8 flex flex-col items-center text-center space-y-4 bg-white border-b border-chess-brown/5">
        <div className="relative">
          <div className="size-32 rounded-full border-4 border-primary/20 p-1">
            <img src="https://picsum.photos/seed/profile/400" alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-lg uppercase tracking-widest">Pro</div>
        </div>
        <div>
          <h2 className="text-2xl font-black text-chess-brown">Grandmaster_V <span className="material-symbols-outlined text-blue-500 align-middle text-xl">verified</span></h2>
          <p className="text-xs font-bold text-chess-brown/40 uppercase tracking-widest mt-1">United States • Member since 2022</p>
        </div>
        <button className="px-8 py-2.5 bg-primary/10 text-primary font-bold text-sm rounded-xl hover:bg-primary/20 transition-all active:scale-95">
          Edit Profile
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-white p-6 rounded-2xl border border-chess-brown/5 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined text-primary">analytics</span>
            <span className="text-[10px] font-bold text-green-600">+2.4%</span>
          </div>
          <p className="text-[10px] font-bold text-chess-brown/40 uppercase tracking-widest">Win Rate</p>
          <h3 className="text-2xl font-black text-chess-brown">64.2%</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-chess-brown/5 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="material-symbols-outlined text-primary">style</span>
            <span className="text-[10px] font-bold text-chess-brown/40">+45</span>
          </div>
          <p className="text-[10px] font-bold text-chess-brown/40 uppercase tracking-widest">Games Played</p>
          <h3 className="text-2xl font-black text-chess-brown">1,240</h3>
        </div>
      </div>

      {/* Achievements */}
      <section className="p-4 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-chess-brown/40 px-1">Recent Achievements</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {[
            { icon: 'military_tech', label: 'Tournament Winner', color: 'bg-amber-100 text-amber-600' },
            { icon: 'local_fire_department', label: '10-Win Streak', color: 'bg-orange-100 text-orange-600' },
            { icon: 'psychology', label: 'Tactics Master', color: 'bg-blue-100 text-blue-600' },
            { icon: 'verified_user', label: 'Verified Pro', color: 'bg-green-100 text-green-600' }
          ].map((badge, i) => (
            <div key={i} className="flex flex-col items-center gap-2 shrink-0 w-24">
              <div className={`${badge.color} size-16 rounded-2xl flex items-center justify-center border border-current opacity-70`}>
                <span className="material-symbols-outlined text-3xl">{badge.icon}</span>
              </div>
              <p className="text-[9px] font-black uppercase text-center leading-tight">{badge.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Account Settings */}
      <section className="p-4 space-y-4 pb-10">
        <h3 className="text-sm font-bold uppercase tracking-widest text-chess-brown/40 px-1">Account & Safety</h3>
        <div className="bg-white rounded-2xl overflow-hidden border border-chess-brown/5 shadow-sm">
          {[
            { label: 'Payment Settings', icon: 'account_balance_wallet' },
            { label: 'Security & 2FA', icon: 'shield' },
            { label: 'Game Preferences', icon: 'settings_suggest' },
            { label: 'Help & Support', icon: 'help' }
          ].map((item, i) => (
            <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-chess-cream/50 transition-colors border-b border-chess-brown/5 last:border-0 group">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-chess-brown/40 group-hover:text-primary transition-colors">{item.icon}</span>
                <span className="text-sm font-bold text-chess-brown">{item.label}</span>
              </div>
              <span className="material-symbols-outlined text-chess-brown/20 group-hover:text-primary transition-colors">chevron_right</span>
            </button>
          ))}
        </div>
        <button className="w-full py-4 text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100 rounded-2xl transition-colors">
          Logout
        </button>
      </section>
    </div>
  );
};

export default Profile;
