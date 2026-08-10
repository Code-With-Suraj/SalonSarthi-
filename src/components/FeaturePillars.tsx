import React, { useState } from 'react';
import {
  Wallet,
  Calendar,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  XCircle,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Send,
  Lock,
  Clock,
  UserCheck,
  Copy,
  Check,
} from 'lucide-react';
import { InteractiveBonusCalculator } from './InteractiveBonusCalculator';
import { WHATSAPP_TEMPLATES, INITIAL_SERVICES, UPSELL_ADDONS, INITIAL_LEDGER } from '../data/mockData';

interface FeaturePillarsProps {
  onOpenLiveDemo: (mode?: 'real' | 'owner' | 'customer') => void;
}

export const FeaturePillars: React.FC<FeaturePillarsProps> = ({ onOpenLiveDemo }) => {
  const [activeTab, setActiveTab] = useState<'pillar1' | 'pillar2' | 'pillar3' | 'pillar4'>('pillar1');

  // WhatsApp template selector state
  const [selectedWaTemplate, setSelectedWaTemplate] = useState(WHATSAPP_TEMPLATES[0]);
  const [waCustomerName, setWaCustomerName] = useState('Aarav Mehta');
  const [copiedLink, setCopiedLink] = useState(false);

  // Generate real WhatsApp link
  const generatedMessage = selectedWaTemplate.message
    .replace('{CustomerName}', waCustomerName)
    .replace('{SalonName}', 'Glamour Studio Salon')
    .replace('{TimeSlot}', '04:00 PM - 05:00 PM')
    .replace('{BonusPercent}', '15')
    .replace('{DaysInactive}', '30')
    .replace('{StylistName}', 'Rahul Sharma')
    .replace('{BookingLink}', 'https://salonsarthi.app/book/glamour-studio')
    .replace('{RechargeLink}', 'https://salonsarthi.app/wallet/recharge')
    .replace('{SpecialOfferLink}', 'https://salonsarthi.app/claim/welcome250')
    .replace('{VIPLink}', 'https://salonsarthi.app/vip/reserve');

  const whatsappDeepLink = `https://wa.me/919811223344?text=${encodeURIComponent(generatedMessage)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="features" className="py-20 bg-[#08080C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - SECTION 4 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            All-In-One Salon Retention System
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            One Platform. <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              Everything That Increases Repeat Revenue.
            </span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Replace fragmented booking calendars, paper diaries, and manual follow-ups with an automated prepaid customer engine.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-2 rounded-2xl bg-white/[0.03] border border-white/10 mb-10">
          
          <button
            onClick={() => setActiveTab('pillar1')}
            className={`p-3.5 rounded-xl text-left transition-all flex items-center gap-3 ${
              activeTab === 'pillar1'
                ? 'bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 border border-amber-500/40 text-amber-300 shadow-lg'
                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className={`p-2 rounded-lg ${activeTab === 'pillar1' ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-zinc-400'}`}>
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold">Pillar 1: Prepaid Wallet</div>
              <div className="text-[10px] text-zinc-400 hidden sm:block">Bonus & Advance Float</div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('pillar2')}
            className={`p-3.5 rounded-xl text-left transition-all flex items-center gap-3 ${
              activeTab === 'pillar2'
                ? 'bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 border border-amber-500/40 text-amber-300 shadow-lg'
                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className={`p-2 rounded-lg ${activeTab === 'pillar2' ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-zinc-400'}`}>
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold">Pillar 2: Slot Booking</div>
              <div className="text-[10px] text-zinc-400 hidden sm:block">+35% AOV Upsell Engine</div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('pillar3')}
            className={`p-3.5 rounded-xl text-left transition-all flex items-center gap-3 ${
              activeTab === 'pillar3'
                ? 'bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 border border-amber-500/40 text-amber-300 shadow-lg'
                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className={`p-2 rounded-lg ${activeTab === 'pillar3' ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-zinc-400'}`}>
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold">Pillar 3: WhatsApp Hub</div>
              <div className="text-[10px] text-zinc-400 hidden sm:block">1-Click Deep Links</div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('pillar4')}
            className={`p-3.5 rounded-xl text-left transition-all flex items-center gap-3 ${
              activeTab === 'pillar4'
                ? 'bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 border border-amber-500/40 text-amber-300 shadow-lg'
                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className={`p-2 rounded-lg ${activeTab === 'pillar4' ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-zinc-400'}`}>
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold">Pillar 4: Ledger & BI</div>
              <div className="text-[10px] text-zinc-400 hidden sm:block">Audit-Proof Ledger</div>
            </div>
          </button>

        </div>

        {/* Pillar 1 Content */}
        {activeTab === 'pillar1' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 lg:p-8 rounded-3xl bg-white/[0.02] border border-amber-500/20">
              <div className="max-w-3xl">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">💳 Pillar 1 Value Proposition</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  "Discount Mat Do — Upfront Balance Extra Do!"
                </h3>
                <p className="mt-2 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Simple discounts salon ka profit kam karte hain, lekin <span className="text-amber-300 font-bold">Prepaid Recharge Bonuses</span> customers ko hamesha ke liye aapke salon se baandhte hain.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-amber-400 font-bold text-sm mb-1">Flat + % Bonus</div>
                  <p className="text-xs text-zinc-400">Configure Flat Cash Bonus (e.g., +₹100) + Percentage Bonus (e.g., +10%) dynamically.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-amber-400 font-bold text-sm mb-1">Prepaid Packs</div>
                  <p className="text-xs text-zinc-400">Starter, VIP, & Platinum recharge packs (Pay ₹1,000 → Get ₹1,150 balance).</p>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-amber-400 font-bold text-sm mb-1">Razorpay Direct</div>
                  <p className="text-xs text-zinc-400">Razorpay Live Payment Gateway integration for instant customer top-ups 24/7.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-amber-400 font-bold text-sm mb-1">300% LTV Boost</div>
                  <p className="text-xs text-zinc-400">Boosts customer lifetime value (LTV) by locking money directly in your salon.</p>
                </div>
              </div>
            </div>

            {/* Embedded Standalone Bonus Calculator */}
            <InteractiveBonusCalculator />
          </div>
        )}

        {/* Pillar 2 Content */}
        {activeTab === 'pillar2' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 lg:p-8 rounded-3xl bg-white/[0.02] border border-amber-500/20">
              <div className="max-w-3xl">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">📅 Pillar 2 Value Proposition</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  "Zero Overbooking, Max Ticket Size!"
                </h3>
                <p className="mt-2 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Customers 30 seconds mein mobile app se real-time available staff slot select karke booking kar sakte hain without waiting in phone queues.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <Lock className="w-4 h-4" />
                    Concurrency LockService
                  </div>
                  <p className="text-xs text-zinc-400">Google Apps Script LockService prevents double-booking during peak hours.</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                    <TrendingUp className="w-4 h-4" />
                    Smart Upsell Add-ons
                  </div>
                  <p className="text-xs text-zinc-400">Suggest Detan Face Pack / Beard Scrub with Haircuts to boost Average Order Value by 35%.</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-1">
                    <Clock className="w-4 h-4" />
                    Lunch & Staff Filters
                  </div>
                  <p className="text-xs text-zinc-400">Real-time slot management with automatic lunch break & staff shifts control.</p>
                </div>
              </div>
            </div>

            {/* Smart Upsell Preview Box */}
            <div className="p-6 rounded-2xl bg-[#0D0E15] border border-amber-500/30">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Live Smart Upsell Add-On Recommendation Preview
                  </h4>
                  <p className="text-xs text-zinc-400">This popup appears inside customer app before slot confirmation</p>
                </div>
                <button
                  onClick={() => onOpenLiveDemo('customer')}
                  className="px-3 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20"
                >
                  Test in Customer App →
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {UPSELL_ADDONS.map((addon) => (
                  <div key={addon.id} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
                        {addon.badge}
                      </div>
                      <div className="text-sm font-bold text-white">{addon.name}</div>
                      <p className="text-xs text-zinc-400 mt-1">{addon.description}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-amber-300 font-extrabold text-sm font-mono">+₹{addon.price}</span>
                        <span className="text-zinc-500 text-xs line-through ml-1 font-mono">₹{addon.originalPrice}</span>
                      </div>
                      <button
                        onClick={() => onOpenLiveDemo('customer')}
                        className="px-2.5 py-1 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-lg"
                      >
                        + Add-On
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pillar 3 Content */}
        {activeTab === 'pillar3' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 lg:p-8 rounded-3xl bg-white/[0.02] border border-amber-500/20">
              <div className="max-w-3xl">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">💬 Pillar 3 Value Proposition</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  "Bina Costly API Ads Ke Direct WhatsApp Outreach!"
                </h3>
                <p className="mt-2 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Kundli-ready customer segmentations ke saath direct WhatsApp deep links (wa.me) click karke message bhejein without third-party API costs or ban risk.
                </p>
              </div>

              {/* Template Selector & Tester */}
              <div className="mt-8 grid lg:grid-cols-12 gap-6">
                
                {/* Template List */}
                <div className="lg:col-span-5 space-y-2.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block mb-2">
                    Select Kundli-Ready Template:
                  </label>
                  {WHATSAPP_TEMPLATES.map((tmpl) => (
                    <div
                      key={tmpl.id}
                      onClick={() => setSelectedWaTemplate(tmpl)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedWaTemplate.id === tmpl.id
                          ? 'bg-emerald-950/40 border-emerald-500/60 text-white shadow-lg'
                          : 'bg-black/40 border-white/10 hover:border-emerald-500/30 text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs text-emerald-300">{tmpl.title}</span>
                        <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300 border border-emerald-500/30">
                          {tmpl.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 line-clamp-2">{tmpl.message}</p>
                    </div>
                  ))}
                </div>

                {/* Generated WhatsApp Preview & Action */}
                <div className="lg:col-span-7 p-5 rounded-2xl bg-[#0D0E15] border border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                        <MessageSquare className="w-4 h-4" />
                        Official WhatsApp Message Preview
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-zinc-400">Test Client:</span>
                        <input
                          type="text"
                          value={waCustomerName}
                          onChange={(e) => setWaCustomerName(e.target.value)}
                          className="bg-black/60 border border-white/15 px-2 py-1 rounded text-xs text-amber-300 font-bold w-28"
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0B141A] border border-emerald-900 font-sans text-xs text-zinc-200 whitespace-pre-wrap leading-relaxed shadow-inner">
                      {generatedMessage}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={copyToClipboard}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-zinc-200 flex items-center justify-center gap-1.5 transition-all"
                    >
                      {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                      {copiedLink ? 'Copied Message!' : 'Copy Text'}
                    </button>

                    <a
                      href={whatsappDeepLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      Test Send via WhatsApp App (wa.me)
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* Pillar 4 Content */}
        {activeTab === 'pillar4' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 lg:p-8 rounded-3xl bg-white/[0.02] border border-amber-500/20">
              <div className="max-w-3xl">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">📊 Pillar 4 Value Proposition</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  "Real-Time Financial Clarity in Your Pocket!"
                </h3>
                <p className="mt-2 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Ek single owner dashboard par revenue, staff appointments, aur prepaid customer float balance manage karein.
                </p>
              </div>

              {/* Live Double-Entry Ledger Inspector */}
              <div className="mt-8 p-6 rounded-2xl bg-[#0D0E15] border border-amber-500/30">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      Audit-Proof Double-Entry Ledger Passbook
                    </h4>
                    <p className="text-xs text-zinc-400">Timestamped credit, debit, and balance after calculations</p>
                  </div>

                  <button
                    onClick={() => onOpenLiveDemo('owner')}
                    className="px-3.5 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20"
                  >
                    Open Owner Passbook →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 text-zinc-400 text-[11px]">
                        <th className="pb-3 font-semibold">TIMESTAMP</th>
                        <th className="pb-3 font-semibold">CUSTOMER</th>
                        <th className="pb-3 font-semibold">ENTRY TYPE</th>
                        <th className="pb-3 font-semibold text-right">AMOUNT</th>
                        <th className="pb-3 font-semibold text-right">BALANCE AFTER</th>
                        <th className="pb-3 font-semibold">REF ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-zinc-300">
                      {INITIAL_LEDGER.map((entry) => (
                        <tr key={entry.id} className="hover:bg-white/[0.02]">
                          <td className="py-3 font-sans text-zinc-400 text-[11px]">{entry.timestamp}</td>
                          <td className="py-3 font-sans font-bold text-white">{entry.customerName}</td>
                          <td className="py-3">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                entry.type === 'CREDIT_RECHARGE'
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                  : entry.type === 'DEBIT_BOOKING'
                                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              }`}
                            >
                              {entry.type}
                            </span>
                          </td>
                          <td
                            className={`py-3 text-right font-bold ${
                              entry.type === 'CREDIT_RECHARGE' ? 'text-emerald-400' : 'text-red-400'
                            }`}
                          >
                            {entry.type === 'CREDIT_RECHARGE' ? '+' : '-'}₹{entry.amount}
                          </td>
                          <td className="py-3 text-right font-bold text-amber-300">
                            ₹{entry.balanceAfter}
                          </td>
                          <td className="py-3 text-zinc-500 text-[10px]">{entry.referenceId}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: What Makes SalonSarthi Different? */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              The SalonSarthi Advantage
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              What Makes SalonSarthi Different?
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base">
              Traditional salon tools manage appointments. SalonSarthi creates repeat customers and locks future revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Other Software */}
            <div className="p-6 sm:p-8 rounded-3xl bg-red-950/20 border border-red-500/30 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-red-500/20 mb-6">
                  <h3 className="text-xl font-bold text-red-400 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-400" />
                    Other Software
                  </h3>
                  <span className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full font-mono font-semibold">
                    Legacy Tools
                  </span>
                </div>

                <ul className="space-y-4 text-sm sm:text-base font-medium text-red-200">
                  <li className="flex items-center gap-3">
                    <span className="text-red-400 font-bold">•</span>
                    Manages bookings
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-400 font-bold">•</span>
                    Stores customer data
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-red-400 font-bold">•</span>
                    Generates reports
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-red-500/20 text-xs font-mono text-red-300/80">
                ⚠️ Outcome: High customer churn, no advance cashflow guarantee.
              </div>
            </div>

            {/* SalonSarthi */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-emerald-950/40 to-black border border-emerald-500/50 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-emerald-500/10">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-500/30 mb-6">
                  <h3 className="text-xl font-bold text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    SalonSarthi
                  </h3>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-mono font-bold">
                    Prepaid Retention Engine
                  </span>
                </div>

                <ul className="space-y-4 text-sm sm:text-base font-bold text-white">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✅</span>
                    Creates repeat customers
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✅</span>
                    Locks future revenue
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✅</span>
                    Builds prepaid membership
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✅</span>
                    Increases customer lifetime value
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-500/30 text-xs font-mono text-emerald-300 font-semibold flex items-center justify-between">
                <span>⚡ Outcome: 300% Advance Cashflow Growth</span>
                <button
                  onClick={() => onOpenLiveDemo('owner')}
                  className="text-amber-300 hover:underline flex items-center gap-1 font-bold"
                >
                  Test Demo →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
