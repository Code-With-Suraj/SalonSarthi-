import React from 'react';
import { XCircle, CheckCircle, ArrowRight, ShieldAlert, Sparkles, RefreshCw, Wallet, Gift, CalendarCheck, RotateCcw, CreditCard } from 'lucide-react';

interface ProblemSolutionProps {
  onOpenLiveDemo: (mode?: 'owner' | 'customer') => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenLiveDemo }) => {
  const retentionLoopSteps = [
    {
      step: '1',
      title: 'Customer Recharges',
      desc: 'Topups prepaid wallet online via UPI or cash',
      icon: <Wallet className="w-5 h-5 text-amber-300" />,
      color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-300',
    },
    {
      step: '2',
      title: 'Gets Bonus',
      desc: 'Instant cashback bonus credited to wallet',
      icon: <Gift className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300',
    },
    {
      step: '3',
      title: 'Books Instantly',
      desc: 'Selects stylist & slot in 30 seconds',
      icon: <CalendarCheck className="w-5 h-5 text-blue-400" />,
      color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-300',
    },
    {
      step: '4',
      title: 'Returns Automatically',
      desc: 'Walks in for appointment without friction',
      icon: <RotateCcw className="w-5 h-5 text-purple-400" />,
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-300',
    },
    {
      step: '5',
      title: 'Uses Prepaid Balance',
      desc: '1-Tap instant checkout using wallet balance',
      icon: <CreditCard className="w-5 h-5 text-yellow-300" />,
      color: 'from-yellow-500/20 to-amber-500/10 border-yellow-500/30 text-yellow-300',
    },
    {
      step: '6',
      title: 'Recharges Again',
      desc: 'Re-ups wallet balance before leaving',
      icon: <RefreshCw className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300',
    },
  ];

  return (
    <section id="comparison" className="py-20 bg-[#08080C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 2: Problem & Shift */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            The High Cost of Lost Customers
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
            Every Empty Chair Is <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-red-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
              Lost Revenue.
            </span>
          </h2>

          <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#14151F] to-[#0D0E15] border border-white/10 shadow-2xl space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              <p>
                Most salons spend thousands acquiring new customers.
              </p>
              <p className="text-red-300 font-bold border-l-2 border-red-500 pl-4 py-0.5">
                Then lose them after one haircut.
              </p>
              <p className="font-semibold text-white">
                SalonSarthi changes that.
              </p>
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 font-extrabold text-base sm:text-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Instead of hoping customers return…</span>
                <span className="text-amber-300 underline underline-offset-4">You collect their next visit today.</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500/20 via-amber-500/20 to-yellow-500/20 blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Salon Interior & Styling Station"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-end p-5">
                  <div className="text-xs font-mono font-bold text-amber-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30">
                    💈 Turn Walk-ins into Prepaid Members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: The Retention Loop */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Automated Customer Flywheel
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Your Customer Doesn't Leave Empty. <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                They Leave With A Balance.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-mono uppercase tracking-widest">
              A RETENTION LOOP. NOT ANOTHER BOOKING APP.
            </p>
          </div>

          {/* Retention Loop Visual Step Cards (Bento style grid) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {retentionLoopSteps.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl bg-gradient-to-b ${item.color} border flex flex-col justify-between hover:scale-105 transition-all group shadow-lg`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-6 h-6 rounded-full bg-black/40 text-amber-300 font-mono text-xs font-black flex items-center justify-center border border-white/10">
                      {item.step}
                    </span>
                    <div className="p-1.5 rounded-lg bg-black/40 border border-white/10">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-extrabold text-xs sm:text-sm text-white leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-300/90 leading-tight">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-end">
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Tagline Box */}
          <div className="mt-8 text-center">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 border border-amber-500/30 text-amber-300 font-extrabold text-sm sm:text-base">
              🔄 A retention loop. Not another booking app.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
