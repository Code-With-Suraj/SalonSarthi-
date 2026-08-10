import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, ArrowRight, Zap, Star, ShieldAlert } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

interface PricingSectionProps {
  onOpenFreeTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenFreeTrial }) => {
  return (
    <section id="pricing" className="py-20 bg-[#08080C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            🏷️ Transparent Pricing — Zero Hidden Fees
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Choose The Right Growth Plan For Your Salon
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Zero per-transaction charges, zero commissions. Keep 100% of your revenue and prepaid float.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-7 rounded-3xl flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-amber-950/60 via-[#0D0E15] to-[#0D0E15] border-2 border-amber-500/80 shadow-2xl shadow-amber-500/10 scale-105 z-10'
                  : 'bg-white/[0.02] border border-white/10 hover:border-amber-500/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black text-white">{plan.name}</h3>
                  {plan.savePercentage && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                      {plan.savePercentage}
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-amber-300 font-mono">
                      ₹{plan.priceMonthly.toLocaleString()}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono border border-amber-500/20 font-bold">
                      {plan.durationDays} Days Validity
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-2">
                    Effective: <span className="text-emerald-400 font-bold">₹{plan.priceEffectiveMonthly}/month</span> ({plan.billingPeriodLabel})
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={onOpenFreeTrial}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                  }`}
                >
                  Claim 14-Day Free Access
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/15 border border-amber-500/40 text-center flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/40">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-amber-300">
                🔥 Special Launch Guarantee: 7-Day 100% Money Back Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                Agar 7 din mein aapko customer retention badhta hua na dikhe, full 100% refund without questions asked!
              </p>
            </div>
          </div>

          <button
            onClick={onOpenFreeTrial}
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110 transition-all"
          >
            Start Risk-Free Trial
          </button>
        </div>

      </div>
    </section>
  );
};
