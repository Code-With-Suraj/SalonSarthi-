import React, { useState } from 'react';
import { Sparkles, Phone, ArrowRight, PlayCircle, ShieldCheck, Gift } from 'lucide-react';

interface NavbarProps {
  onOpenLiveDemo: (mode?: 'real' | 'owner' | 'customer') => void;
  onOpenFreeTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLiveDemo, onOpenFreeTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Launch Announcement Ribbon */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 px-4 py-2 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-md">
        <span className="flex items-center gap-1.5 bg-black/80 text-amber-300 px-2 py-0.5 rounded-full text-[11px] font-mono border border-amber-400/50 uppercase tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          LAUNCH LIVE NOW
        </span>
        <span className="truncate">
          🚀 <strong className="underline underline-offset-2">SalonSarthi Official Public Launch:</strong> Claim 14-Day Free Trial • Zero Setup Fees!
        </span>
        <button
          onClick={onOpenFreeTrial}
          className="hidden sm:inline-flex items-center gap-1 bg-slate-950 text-amber-300 hover:text-white px-2.5 py-0.5 rounded-md text-xs font-bold transition-all ml-2 border border-amber-400/40"
        >
          Claim Access →
        </button>
      </div>

      <nav className="sticky top-0 z-40 bg-[#08080C]/90 backdrop-blur-xl border-b border-amber-500/20 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 p-[1px] shadow-lg shadow-amber-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-[#0D0E15] rounded-[11px] flex items-center justify-center">
                <span className="text-xl font-black bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                  S
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                  SalonSarthi
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  SaaS
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium hidden sm:block">
                Prepaid Wallet & WhatsApp Retention
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a href="#packages" className="hover:text-amber-300 transition-colors flex items-center gap-1 font-bold text-amber-300">
              <Gift className="w-3.5 h-3.5 text-amber-400" />
              Smart Packages
            </a>
            <a href="#features" className="hover:text-amber-300 transition-colors">
              Features
            </a>
            <a href="#calculator" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Bonus Calculator
            </a>
            <a href="#comparison" className="hover:text-amber-300 transition-colors">
              Why Us
            </a>
            <a href="#pricing" className="hover:text-amber-300 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-amber-300 transition-colors">
              FAQ
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918851666208"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300/90 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 8851666208
            </a>

            <button
              onClick={() => onOpenLiveDemo('owner')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all shadow-sm"
            >
              <PlayCircle className="w-4 h-4 text-amber-400" />
              Live Demo
            </button>

            <button
              onClick={onOpenFreeTrial}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:brightness-110 rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              Start Free Trial
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenLiveDemo('owner')}
              className="px-2.5 py-1.5 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:bg-white/5 border border-white/10"
              aria-label="Toggle Navigation"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-amber-400 rounded-full"></span>
                <span className="w-full h-0.5 bg-amber-400 rounded-full"></span>
                <span className="w-full h-0.5 bg-amber-400 rounded-full"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 flex flex-col gap-3 text-sm">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-white/5"
            >
              Core Features
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Recharge Bonus Calculator</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                Interactive
              </span>
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-white/5"
            >
              Problem vs Solution
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-white/5"
            >
              Pricing & Subscription
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-zinc-300 hover:bg-white/5"
            >
              FAQ
            </a>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreeTrial();
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-xl"
              >
                🔥 Start 14-Day Free Trial
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLiveDemo('customer');
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-zinc-200 bg-white/5 border border-white/15 rounded-xl"
              >
                👀 View Customer & Owner Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};
