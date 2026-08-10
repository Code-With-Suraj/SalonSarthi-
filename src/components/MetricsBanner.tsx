import React from 'react';
import { IndianRupee, RotateCcw, Zap, ShieldCheck, Award } from 'lucide-react';

export const MetricsBanner: React.FC = () => {
  return (
    <section className="bg-[#0B0C12] border-y border-amber-500/20 py-10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Title */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400/90 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            🚀 OFFICIAL PUBLIC LAUNCH — LIVE ACROSS INDIA
          </p>
          <h2 className="text-lg sm:text-2xl font-extrabold text-white mt-1">
            "Designed for Indian Salons & Spas to build <span className="text-amber-300">₹45,000+</span> in average monthly advance prepaid float."
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Metric 1 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-amber-500/20 hover:border-amber-500/40 transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
              <IndianRupee className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              ₹45,000+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">
              Avg. Advance Float Collected
            </div>
            <div className="text-[11px] text-zinc-400 mt-0.5">
              per salon monthly in advance cash
            </div>
          </div>

          {/* Metric 2 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-amber-500/20 hover:border-amber-500/40 transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              78%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">
              Repeat Visit Rate Achieved
            </div>
            <div className="text-[11px] text-zinc-400 mt-0.5">
              within 60 days via wallet locks
            </div>
          </div>

          {/* Metric 3 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-amber-500/20 hover:border-amber-500/40 transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 fill-blue-400/20" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-blue-400">
              ⚡ 30 Sec
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">
              Instant Online Booking
            </div>
            <div className="text-[11px] text-zinc-400 mt-0.5">
              frictionless client experience
            </div>
          </div>

          {/* Metric 4 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-amber-500/20 hover:border-amber-500/40 transition-all text-center group">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-300">
              🔒 100%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">
              Audit-Proof Security
            </div>
            <div className="text-[11px] text-zinc-400 mt-0.5">
              Double-entry ledger passbook
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
