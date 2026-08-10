import React, { useState } from 'react';
import {
  Gift,
  Sparkles,
  TrendingUp,
  Zap,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Layers,
  Crown,
  Scissors,
  Flame,
  Tag,
  Copy,
  Check,
  Smartphone,
  ChevronRight,
  Percent
} from 'lucide-react';

interface SmartPackagesSectionProps {
  onOpenLiveDemo?: (mode?: 'owner' | 'customer') => void;
  onOpenFreeTrial?: () => void;
}

const SAMPLE_PACKAGES = [
  {
    id: 'pkg-1',
    category: '👰 Bridal & Pre-Bridal',
    badge: 'High Value • 80% Margin',
    title: 'Royal Bridal Glow Combo',
    services: ['Gold Radiance Facial', 'Loreal Hair Spa', 'Deluxe Pedicure & Manicure', 'Full Arms & Legs Waxing'],
    originalPrice: 4800,
    packagePrice: 3299,
    savings: '₹1,501 (31% OFF)',
    whatsappPreview: '👑 *Royal Bridal Glow Package*\nFacial + Hair Spa + Mani-Pedi + Waxing\nSpecial Package Price: *₹3,299* (Save ₹1,501!)\n\nLimited bridal slots this week.\n👉 *Book Instant Slot:* https://salonsarthi.app/pkg/bridal-glow',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pkg-2',
    category: '🧔 Men\'s Grooming Combos',
    badge: 'Popular • Quick Turnaround',
    title: 'Executive Grooming Combo',
    services: ['Haircut & Wash', 'Beard Styling & Steam', 'De-Tan Face Pack', '15-min Head Massage'],
    originalPrice: 1450,
    packagePrice: 899,
    savings: '₹551 (38% OFF)',
    whatsappPreview: '🧔 *Executive Men\'s Combo*\nHaircut + Beard Styling + Face Pack + Head Massage\nSpecial Price: *₹899* (Reg. ₹1,450)\n\n⚡ Instant 1-Tap Booking:\n👉 *Claim Offer:* https://salonsarthi.app/pkg/mens-combo',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pkg-3',
    category: '🌧️ Seasonal & Monsoon Offers',
    badge: 'High Demand',
    title: 'Monsoon Glow & Care Package',
    services: ['O3+ Brightening Facial', 'Anti-Frizz Hair Spa', 'Deep Conditioning'],
    originalPrice: 2600,
    packagePrice: 1499,
    savings: '₹1,101 (42% OFF)',
    whatsappPreview: '🌧️ *Monsoon Glow Package*\nO3+ Facial + Anti-Frizz Spa + Deep Conditioning\nSpecial Price: *₹1,499* (Save ₹1,101)\n\nBeat the humidity in style!\n👉 *Book Appointment Today:* https://salonsarthi.app/pkg/monsoon-glow',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pkg-4',
    category: '✨ Monthly Grooming',
    badge: 'Repeat Retention Engine',
    title: 'Monthly Essentials Club',
    services: ['Haircut', 'Root Touchup / Shave', 'Threading / Beard Trim', 'Express Clean-up'],
    originalPrice: 1800,
    packagePrice: 1199,
    savings: '₹601 (33% OFF)',
    whatsappPreview: '✨ *Monthly Essentials Club Package*\nKeep your monthly maintenance effortless for *₹1,199* only.\n\n👉 *Recharge Wallet & Book:* https://salonsarthi.app/pkg/monthly-club',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80'
  }
];

export const SmartPackagesSection: React.FC<SmartPackagesSectionProps> = ({
  onOpenLiveDemo,
  onOpenFreeTrial
}) => {
  const [selectedPkg, setSelectedPkg] = useState(SAMPLE_PACKAGES[1]);
  const [copiedMsg, setCopiedMsg] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2000);
  };

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-[#08080C] via-[#0E0F18] to-[#08080C] text-white relative overflow-hidden border-t border-b border-amber-500/20">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Gift className="w-4 h-4 text-amber-400" />
            New Feature • High Order Value Generator
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            🎁 Sell More with <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              Smart Salon Packages
            </span>
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Customers ko sirf ek service book karne ka option mat dijiye. <strong className="text-amber-300 font-semibold">SalonSarthi ke Package Offers se multiple services ko ek attractive combo mein bundle karke higher-value bookings generate karein.</strong>
          </p>
        </div>

        {/* Value Comparison: Single Service vs High Value Combo */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 border border-amber-500/30 mb-14 shadow-2xl">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-5 text-center md:text-left">
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-1">
                ❌ Traditional Old Way
              </span>
              <h3 className="text-xl font-extrabold text-zinc-300">Selling Individual Services</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Customer comes for a single haircut and leaves after paying a low ticket size.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-black/50 border border-red-500/30 text-center">
                <span className="text-xs text-zinc-400 block">Single Haircut Ticket</span>
                <span className="text-3xl font-black text-red-400">₹300</span>
                <span className="text-[11px] text-zinc-400 block mt-1">Low Average Order Value (AOV)</span>
              </div>
            </div>

            <div className="md:col-span-2 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center font-black text-lg my-2">
                VS
              </div>
              <span className="text-[11px] font-mono text-amber-300 font-bold uppercase tracking-wider">
                +233% Bill Boost
              </span>
            </div>

            <div className="md:col-span-5 text-center md:text-left">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                🚀 SalonSarthi Smart Package
              </span>
              <h3 className="text-xl font-extrabold text-white">Selling High-Value Combos</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Bundle Haircut + Beard Styling + Facial + Head Massage into a irresistible offer.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-600/10 border border-amber-400/50 text-center shadow-lg">
                <span className="text-xs text-amber-300 font-bold block">Executive Grooming Combo</span>
                <span className="text-3xl font-black text-amber-300">₹999</span>
                <span className="text-[11px] text-emerald-400 font-bold block mt-1">✓ Higher Order Value • Max Customer Satisfaction</span>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Package Categories & Live Simulator */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Package Cards Selector */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Popular Package Categories
              </h3>
              <span className="text-xs text-amber-300/80 font-mono">Click to preview offer</span>
            </div>

            <div className="space-y-3">
              {SAMPLE_PACKAGES.map((pkg) => {
                const isSelected = selectedPkg.id === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPkg(pkg)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 border-amber-500/50 shadow-xl scale-[1.01]'
                        : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-amber-300">{pkg.category}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-200 border border-amber-500/30">
                            {pkg.badge}
                          </span>
                        </div>
                        <h4 className="text-base font-extrabold text-white">{pkg.title}</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-zinc-400 line-through block">₹{pkg.originalPrice}</span>
                        <span className="text-lg font-black text-amber-300">₹{pkg.packagePrice}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {pkg.services.map((svc, idx) => (
                        <span key={idx} className="text-[11px] bg-black/40 border border-white/10 px-2.5 py-0.5 rounded-md text-zinc-300">
                          ✓ {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Package Preview & WhatsApp Campaign Simulation */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#14151F] to-[#0D0E15] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-zinc-200">Live Customer WhatsApp Promo</span>
              </div>
              <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                WhatsApp Hub Integrated
              </span>
            </div>

            {/* Package Hero Preview */}
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[16/9] border border-white/10">
              <img
                src={selectedPkg.image}
                alt={selectedPkg.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-xs font-mono font-bold text-amber-300 bg-black/80 px-2.5 py-1 rounded-md w-fit mb-1 border border-amber-500/30">
                  {selectedPkg.category}
                </span>
                <h3 className="text-xl font-black text-white">{selectedPkg.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-2xl font-black text-amber-300">₹{selectedPkg.packagePrice}</span>
                  <span className="text-sm text-zinc-400 line-through">₹{selectedPkg.originalPrice}</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                    {selectedPkg.savings}
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated WhatsApp Chat Bubble */}
            <div className="p-4 rounded-2xl bg-[#0B141A] border border-emerald-500/30 text-xs font-sans space-y-2 mb-6 shadow-inner">
              <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-emerald-500/20 pb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Automated WhatsApp Campaign Message</span>
              </div>
              <pre className="text-zinc-200 whitespace-pre-wrap font-sans text-xs leading-relaxed">
                {selectedPkg.whatsappPreview}
              </pre>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleCopy(selectedPkg.whatsappPreview)}
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-zinc-200 flex items-center justify-center gap-2 transition-all"
              >
                {copiedMsg ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-400" />
                    Copy Promo Text
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  const url = `https://wa.me/?text=${encodeURIComponent(selectedPkg.whatsappPreview)}`;
                  window.open(url, '_blank');
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-xs font-bold text-slate-950 flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Send via WhatsApp
              </button>
            </div>

          </div>

        </div>

        {/* Feature Pillars Grid: Revenue Engine Flow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center font-bold mb-3">
              1
            </div>
            <h4 className="text-base font-extrabold text-white mb-1">Build Custom Packages</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Combine services, set custom prices, show original vs package discount, and add highlights.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center font-bold mb-3">
              2
            </div>
            <h4 className="text-base font-extrabold text-white mb-1">Increase Bill Value</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Guide customers from a ₹300 single haircut to a ₹999 complete grooming experience effortlessly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center font-bold mb-3">
              3
            </div>
            <h4 className="text-base font-extrabold text-white mb-1">One-Tap Booking</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Customers browse, compare, and book entire packages in 10 seconds without selecting individual items.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center font-bold mb-3">
              4
            </div>
            <h4 className="text-base font-extrabold text-white mb-1">WhatsApp Promotion</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Promote packages for monsoon, pre-bridal, or slow weekday slots directly on WhatsApp.
            </p>
          </div>
        </div>

        {/* Ecosystem Flow Ribbon */}
        <div className="p-6 rounded-2xl bg-black/60 border border-amber-500/30 text-center space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
            🎯 Built For Revenue, Not Just Appointment Booking
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-zinc-200">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Individual Services</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Smart Add-ons</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
            <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">Combo Packages</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Prepaid Wallet</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">1-Tap Booking</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
            <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">WhatsApp Retention</span>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenFreeTrial}
            className="w-full sm:w-auto px-8 py-4 text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:brightness-110 rounded-2xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            Start Selling Packages Today (14-Day Free Trial)
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onOpenLiveDemo?.('owner')}
            className="w-full sm:w-auto px-6 py-4 text-sm font-bold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl transition-all"
          >
            See Demo Package Setup →
          </button>
        </div>

      </div>
    </section>
  );
};
