import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, DollarSign, Wallet, ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveBonusCalculator: React.FC = () => {
  const [rechargeAmount, setRechargeAmount] = useState<number>(2000);
  const [flatBonus, setFlatBonus] = useState<number>(100);
  const [percentBonus, setPercentBonus] = useState<number>(10);

  // Calculations
  const calculatedPercentBonus = Math.round((rechargeAmount * percentBonus) / 100);
  const totalBonusAmount = flatBonus + calculatedPercentBonus;
  const totalCustomerWalletBalance = rechargeAmount + totalBonusAmount;
  const effectiveBonusPercentage = Math.round((totalBonusAmount / rechargeAmount) * 100);

  // Trigger celebratory confetti on recalculation
  const handleCalculateClick = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F5D061', '#E5A93C', '#10B981'],
    });
  };

  const presetPacks = [
    { name: 'Starter Pack', pay: 1000, flat: 50, percent: 5 },
    { name: 'VIP Gold Pack', pay: 2500, flat: 150, percent: 12 },
    { name: 'Royal Platinum', pay: 5000, flat: 300, percent: 15 },
  ];

  return (
    <div id="calculator" className="p-6 lg:p-8 rounded-3xl bg-[#0D0E15] border border-amber-500/30 shadow-2xl relative overflow-hidden">
      
      {/* SECTION 6: Imagine This Header & Narrative Callout */}
      <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/15 border border-amber-500/30 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Section 6: Imagine This
        </div>
        
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
          Imagine This
        </h2>

        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-2 text-base sm:text-lg text-zinc-200">
            <div className="flex items-center gap-3 font-mono font-bold text-amber-300 text-xl sm:text-2xl">
              <span>100 regular customers</span>
              <span>×</span>
              <span>Average recharge ₹3,000</span>
            </div>
            <p className="text-zinc-300">
              That's <span className="text-amber-300 font-extrabold text-2xl sm:text-3xl font-mono underline">₹3,00,000</span> already inside your business.
            </p>
            <p className="text-sm sm:text-base text-zinc-300 font-medium">
              Before the next haircut happens.
            </p>
          </div>

          <div className="md:col-span-5 p-4 rounded-xl bg-black/60 border border-amber-500/30 text-center">
            <div className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold mb-1">
              THE PREPAID ADVANTAGE
            </div>
            <div className="text-base sm:text-lg font-black text-white">
              "That's the power of prepaid retention."
            </div>
          </div>
        </div>
      </div>

      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Interactive Tool
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Prepaid Recharge Bonus & Locked Cashflow Calculator
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            See how much advance float you lock vs how much value customer receives.
          </p>
        </div>

        {/* Preset Packs Quick Select */}
        <div className="flex flex-wrap gap-2">
          {presetPacks.map((pack) => (
            <button
              key={pack.name}
              onClick={() => {
                setRechargeAmount(pack.pay);
                setFlatBonus(pack.flat);
                setPercentBonus(pack.percent);
                handleCalculateClick();
              }}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-amber-300 transition-all hover:border-amber-400"
            >
              {pack.name} (₹{pack.pay.toLocaleString()})
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 pt-6 items-center">
        
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Slider 1: Customer Pay Amount */}
          <div>
            <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-zinc-200 mb-2">
              <label>1. Customer Top-Up Amount (Pay Amount):</label>
              <span className="text-amber-300 text-base font-black font-mono">
                ₹{rechargeAmount.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="10000"
              step="500"
              value={rechargeAmount}
              onChange={(e) => setRechargeAmount(Number(e.target.value))}
              className="w-full accent-amber-400 bg-zinc-800 rounded-lg h-2.5 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
              <span>₹500</span>
              <span>₹2,500</span>
              <span>₹5,000</span>
              <span>₹10,000</span>
            </div>
          </div>

          {/* Slider 2: Flat Cash Bonus */}
          <div>
            <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-zinc-200 mb-2">
              <label>2. Flat Bonus Cash (+₹):</label>
              <span className="text-amber-300 text-base font-black font-mono">
                +₹{flatBonus}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="500"
              step="25"
              value={flatBonus}
              onChange={(e) => setFlatBonus(Number(e.target.value))}
              className="w-full accent-amber-400 bg-zinc-800 rounded-lg h-2.5 cursor-pointer"
            />
          </div>

          {/* Slider 3: Percentage Bonus */}
          <div>
            <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-zinc-200 mb-2">
              <label>3. Percentage Bonus (+%):</label>
              <span className="text-amber-300 text-base font-black font-mono">
                +{percentBonus}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="2"
              value={percentBonus}
              onChange={(e) => setPercentBonus(Number(e.target.value))}
              className="w-full accent-amber-400 bg-zinc-800 rounded-lg h-2.5 cursor-pointer"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
            💡 <span className="font-bold">Pro Tip:</span> Instead of giving 20% flat discount on services (which cuts current cash), giving 15% wallet bonus locks future visits while collecting 100% upfront cashflow today!
          </div>

        </div>

        {/* Live Computed Output Column */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/60 via-black to-zinc-900 border border-amber-500/40 shadow-xl relative overflow-hidden">
            
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400 pb-3 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <Wallet className="w-4 h-4 text-amber-400" />
                Live Customer Passbook Preview
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] border border-emerald-500/30">
                 razorpay Instant Settle
              </span>
            </div>

            {/* Main Result Numbers */}
            <div className="my-5 grid grid-cols-2 gap-4 text-center">
              
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[11px] text-zinc-400 font-medium">Salon Bank Upfront Cash</div>
                <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                  ₹{rechargeAmount.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-300/80 mt-0.5">
                  Locked in Salon Float
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div className="text-[11px] text-amber-300 font-medium">Customer Wallet Credit</div>
                <div className="text-2xl font-black text-amber-300 font-mono mt-1">
                  ₹{totalCustomerWalletBalance.toLocaleString()}
                </div>
                <div className="text-[10px] text-amber-400 mt-0.5">
                  (+₹{totalBonusAmount} Extra Free Balance)
                </div>
              </div>

            </div>

            {/* Breakdown details */}
            <div className="space-y-2 text-xs text-zinc-300 bg-black/40 p-3.5 rounded-xl border border-white/5 font-mono">
              <div className="flex justify-between">
                <span>Direct Cash Paid:</span>
                <span className="font-bold text-white">₹{rechargeAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Flat Cash Bonus:</span>
                <span className="font-bold text-amber-400">+₹{flatBonus}</span>
              </div>
              <div className="flex justify-between">
                <span>Percentage Bonus ({percentBonus}%):</span>
                <span className="font-bold text-amber-400">+₹{calculatedPercentBonus}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between font-extrabold text-sm text-emerald-400">
                <span>Effective Value Boost:</span>
                <span>+{effectiveBonusPercentage}% Extra Perk</span>
              </div>
            </div>

            <button
              onClick={handleCalculateClick}
              className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              Test Wallet Sound & Confetti Animation
              <Sparkles className="w-4 h-4 text-slate-900" />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
