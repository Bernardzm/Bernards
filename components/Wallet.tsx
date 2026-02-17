
import React from 'react';

const Wallet: React.FC = () => {
  return (
    <div className="p-4 space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-chess-brown">Wallet</h1>
        <button className="text-primary font-bold text-sm">History</button>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-br from-primary to-[#b04e0a] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <span className="material-symbols-outlined text-9xl">account_balance_wallet</span>
        </div>
        <div className="relative z-10 space-y-6">
          <div>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Total Balance</p>
            <h2 className="text-5xl font-black tracking-tight">$1,250.00</h2>
          </div>
          <div className="flex gap-10 pt-6 border-t border-white/20">
            <div>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-0.5">Withdrawable</p>
              <p className="text-xl font-bold">$1,100.00</p>
            </div>
            <div>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-0.5">Bonus</p>
              <p className="text-xl font-bold">$150.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">add_circle</span> Deposit
        </button>
        <button className="bg-white border-2 border-primary/20 text-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">upload</span> Withdraw
        </button>
      </div>

      {/* Payment Methods */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-chess-brown/60 px-1">Funding Options</h3>
        <div className="space-y-3">
          {[
            { icon: 'credit_card', label: 'Credit / Debit Card', status: 'Linked' },
            { icon: 'payments', label: 'Bank Transfer (ACH)', status: 'Connected' },
            { icon: 'currency_bitcoin', label: 'Cryptocurrency', status: 'Active' }
          ].map((method, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white border border-chess-brown/5 rounded-2xl hover:bg-chess-cream/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-chess-brown/5 p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-chess-brown/60 group-hover:text-primary">{method.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">{method.label}</h4>
                  <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">{method.status}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-chess-brown/20 group-hover:text-primary">chevron_right</span>
            </div>
          ))}
        </div>
      </section>

      {/* Security Notice */}
      <div className="flex items-center justify-center gap-3 p-4 bg-chess-brown/5 rounded-2xl opacity-60">
        <span className="material-symbols-outlined text-sm">verified_user</span>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">SSL Encrypted Secure Transaction</p>
      </div>
    </div>
  );
};

export default Wallet;
