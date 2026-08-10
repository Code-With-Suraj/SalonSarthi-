import React from 'react';
import { ArrowRight, Phone, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface CallToActionProps {
  onOpenFreeTrial: () => void;
  onOpenLiveDemo: (mode?: 'owner' | 'customer') => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenFreeTrial, onOpenLiveDemo }) => {
  return (
    <>
      {/* Footer CTA Banner Section */}
      <section className="py-20 bg-gradient-to-b from-[#08080C] via-[#0E0F18] to-[#08080C] border-t border-amber-500/30 text-white relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80"
            alt="Salon Experience Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080C] via-[#08080C]/80 to-[#08080C]" />
        </div>

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-amber-500/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <span className="text-base">👑</span>
            Ready To Lock Your Salon's Future Revenue?
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Stop Chasing Customers. <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              Start Owning Future Revenue.
            </span>
          </h2>

          <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
            Get your salon setup on SalonSarthi in less than 5 minutes. Collect prepaid balances & automate repeat bookings.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenFreeTrial}
              className="w-full sm:w-auto px-9 py-4.5 rounded-xl font-black text-base text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:brightness-110 shadow-2xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
            >
              🟨 Book Free Demo
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            <button
              onClick={() => onOpenLiveDemo('owner')}
              className="w-full sm:w-auto px-7 py-4.5 rounded-xl font-bold text-base text-zinc-100 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              ⚪ Watch 2-Minute Demo
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              No Credit Card Required
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Data Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              7-Day Money Back Guarantee
            </span>
          </div>

        </div>
      </section>

      {/* Sticky Mobile / Desktop Quick Bar at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#0D0E15]/95 border-t border-amber-500/30 backdrop-blur-xl py-3 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          <div className="hidden md:flex items-center gap-3 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-bold text-amber-300">SalonSarthi Live:</span>
            <span className="text-zinc-300">Google Apps Script & Sheets Powered • ₹0 Hosting Cost</span>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <button
              onClick={() => onOpenLiveDemo('owner')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/15 transition-all flex items-center gap-1.5"
            >
              👀 Test App Demo
            </button>

            <button
              onClick={onOpenFreeTrial}
              className="flex-1 md:flex-none px-5 py-2.5 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
            >
              🚀 Claim 14-Day Free Access
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};
