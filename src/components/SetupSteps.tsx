import React from 'react';
import { UserPlus, Scissors, Share2, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface SetupStepsProps {
  onOpenFreeTrial: () => void;
}

export const SetupSteps: React.FC<SetupStepsProps> = ({ onOpenFreeTrial }) => {
  const steps = [
    {
      num: '01',
      time: '2 Mins',
      title: 'Sign Up & Choose Plan',
      desc: 'Apna salon name, logo aur address daalein. Direct payouts ke liye apna Razorpay Key ID paste karein.',
      icon: UserPlus,
      color: 'from-amber-400 to-yellow-500',
    },
    {
      num: '02',
      time: '2 Mins',
      title: 'Add Services & Staff',
      desc: 'Apne Hair Cut, Facial, Spa services, prices, aur staff shifts & lunch break timings set karein.',
      icon: Scissors,
      color: 'from-yellow-400 to-amber-600',
    },
    {
      num: '03',
      time: '1 Min',
      title: 'Share Link & Collect Advance',
      desc: 'Customer booking web-app link apne Instagram Bio, Google My Business, aur WhatsApp Status par lagayein!',
      icon: Share2,
      color: 'from-emerald-400 to-teal-500',
    },
  ];

  return (
    <section className="py-20 bg-[#0B0C12] border-y border-amber-500/20 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Simple 3-Step Setup (Zero Tech Hassle)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            5 Minute Mein Apna Salon Digital & Advance Cash Ready Banayein
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Koi complex coding, app store approval, ya expensive server infrastructure ki zarurat nahi.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-amber-400/40 font-mono group-hover:text-amber-400 transition-colors">
                      {step.num}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {step.time}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-semibold text-amber-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2" />
                  Instant Activation
                </div>
              </div>
            );
          })}

        </div>

        {/* Setup Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenFreeTrial}
            className="px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:brightness-110 shadow-xl shadow-amber-500/20 transition-all inline-flex items-center gap-2"
          >
            🔥 Launch Your Salon Setup Now (Takes 5 Mins)
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
