import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Store, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessDemoLaunch: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose, onSuccessDemoLaunch }) => {
  const [salonName, setSalonName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [ownerCity, setOwnerCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!salonName || !ownerPhone) {
      alert('Please fill salon name and phone number');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0D0E15] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">
                Start Your 14-Day Free Trial
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                No credit card required • Instant Google Apps Script SaaS Setup
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-zinc-300 block mb-1">Salon / Parlour Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Looks Salon / Natural Touch Spa"
                    value={salonName}
                    onChange={(e) => setSalonName(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-white font-medium pl-9"
                  />
                  <Store className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="font-bold text-zinc-300 block mb-1">Owner Mobile Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={ownerPhone}
                  onChange={(e) => setOwnerPhone(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-white font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-zinc-300 block mb-1">City / Location</label>
                <input
                  type="text"
                  placeholder="e.g. New Delhi / Mumbai / Bengaluru"
                  value={ownerCity}
                  onChange={(e) => setOwnerCity(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 text-white font-medium"
                />
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200">
                🔒 <span className="font-bold">100% Single-Tenant Data Isolation:</span> Your salon data is hosted securely on your private Google Cloud/Workspace instance.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Deploying Private Google Apps Script...</span>
                ) : (
                  <>
                    <span>🔥 Claim 14-Day Free Access Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-4 py-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-black text-white">
              Welcome aboard, {salonName}! 🎉
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Your dedicated single-tenant SalonSarthi instance has been provisioned. You can now log into the owner portal and start accepting prepaid wallet topups!
            </p>

            <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-amber-300">
              Demo Credentials Assigned: <br />
              <strong>Mobile: {ownerPhone || '9876543210'}</strong> | Pass: <strong>owner123</strong>
            </div>

            <button
              onClick={() => {
                onClose();
                onSuccessDemoLaunch();
              }}
              className="w-full py-3 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:brightness-110 flex items-center justify-center gap-2"
            >
              Launch Live App Demo Now →
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
