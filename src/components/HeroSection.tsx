import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Store,
  Key,
  CheckCircle2,
  Lock,
  Wallet,
  MessageSquare,
  Zap,
  Star,
  Users,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenLiveDemo: (mode?: 'owner' | 'customer') => void;
  onOpenFreeTrial: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLiveDemo, onOpenFreeTrial }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#08080C] text-white">
      {/* Background Luxury Salon Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Salon Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080C] via-[#08080C]/85 to-[#08080C]" />
      </div>

      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-amber-500/10 via-yellow-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-amber-500/15 to-yellow-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/10 self-center lg:self-start">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="text-amber-300">🚀 OFFICIAL PUBLIC LAUNCH IS LIVE</span>
              <span className="text-zinc-400 hidden sm:inline">•</span>
              <span className="text-zinc-300 hidden sm:inline">100% Data Isolation Google Apps Script SaaS</span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Stop Losing Customers <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">After Every Visit.</span>
            </h1>

            {/* Sub-Headline & Value Proposition */}
            <h2 className="text-xl sm:text-2xl font-bold text-amber-300">
              Turn Every Walk-in Customer Into a Prepaid Member.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              SalonSarthi helps salons collect prepaid balances, automate repeat bookings, and keep customers coming back—without discounts, spreadsheets, or manual follow-ups.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenFreeTrial}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:brightness-110 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                🟨 Book Free Demo
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onOpenLiveDemo('owner')}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-zinc-100 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all transform hover:-translate-y-0.5"
              >
                ⚪ Watch 2-Minute Demo
              </button>
            </div>

            {/* TRUST BAR */}
            <div className="pt-2">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 text-left">
                TRUSTED RETENTION PLATFORM FOR SALONS
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-zinc-200">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  ✓ <span className="text-zinc-200">Prepaid Wallet</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  ✓ <span className="text-zinc-200">Smart Booking</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  ✓ <span className="text-zinc-200">WhatsApp Retention</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  ✓ <span className="text-zinc-200">Customer Analytics</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  ✓ <span className="text-zinc-200">Works on Mobile</span>
                </span>
              </div>
            </div>

            {/* Live Demo Credentials Box (Reduces Friction) */}
            <div className="mt-2 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 border border-amber-500/30 text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <Zap className="w-3.5 h-3.5 fill-amber-300" />
                  ⚡ Instant Live Demo Credentials (Click To Test):
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-mono font-medium">
                  Live & Ready
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {/* Customer Credentials */}
                <div
                  onClick={() => onOpenLiveDemo('customer')}
                  className="p-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-amber-400/50 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between font-semibold text-zinc-200 mb-1">
                    <span className="flex items-center gap-1.5 text-amber-300 group-hover:underline">
                      <Smartphone className="w-3.5 h-3.5" />
                      👤 Customer Booking App
                    </span>
                    <span className="text-[10px] text-amber-400/80">Launch App →</span>
                  </div>
                  <div className="font-mono text-zinc-400 text-[11px]">
                    Mobile: <span className="text-white font-bold">9811223344</span> | Pass: <span className="text-white font-bold">123456</span>
                  </div>
                </div>

                {/* Owner Credentials */}
                <div
                  onClick={() => onOpenLiveDemo('owner')}
                  className="p-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-amber-400/50 cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between font-semibold text-zinc-200 mb-1">
                    <span className="flex items-center gap-1.5 text-amber-300 group-hover:underline">
                      <Store className="w-3.5 h-3.5" />
                      💈 Owner Admin Portal
                    </span>
                    <span className="text-[10px] text-amber-400/80">Launch Portal →</span>
                  </div>
                  <div className="font-mono text-zinc-400 text-[11px]">
                    Mobile: <span className="text-white font-bold">9876543210</span> | Pass: <span className="text-white font-bold">owner123</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Visual Glassmorphism App Preview */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Glow frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/30 via-yellow-400/20 to-amber-600/30 blur-xl opacity-75"></div>

            <div className="relative rounded-2xl bg-[#0D0E15]/90 border border-amber-500/30 p-5 shadow-2xl backdrop-blur-xl text-left">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-zinc-400">SalonSarthi Engine v3.4</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  LockService Active
                </div>
              </div>

              {/* Live Metric Preview Inside Hero */}
              <div className="space-y-4">
                
                {/* Prepaid Float Widget */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-black/60 border border-amber-500/40">
                  <div className="flex items-center justify-between text-xs text-amber-300 font-medium">
                    <span>Locked Advance Cashflow (Float)</span>
                    <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded text-amber-200">
                      Razorpay Auto-Settled
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-baseline justify-between">
                    <span className="text-2xl font-black text-amber-300 tracking-tight">₹48,250.00</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      ▲ +34% vs last month
                    </span>
                  </div>
                  <div className="mt-2 text-[11px] text-zinc-400">
                    Locked across 42 regular client prepaid wallets
                  </div>
                </div>

                {/* Recent Wallet Topup Alert */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Aarav Mehta topped up ₹3,000</div>
                      <div className="text-[10px] text-zinc-400">+₹450 (15% Recharge Bonus credited)</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium">Just now</span>
                </div>

                {/* 1-Click WhatsApp Retention Broadcast */}
                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-sm">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-200">1-Click WhatsApp Broadcast</div>
                      <div className="text-[10px] text-emerald-300/80">3 Slots filled for 2 PM - 4 PM slot</div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenLiveDemo('owner')}
                    className="px-2.5 py-1 text-[11px] font-bold text-emerald-300 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 rounded-lg transition-all"
                  >
                    Send →
                  </button>
                </div>

                {/* Interactive Demo Launcher Trigger inside right card */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenLiveDemo('owner')}
                    className="w-full py-3 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Click Here to Launch Full Live App Simulator</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
