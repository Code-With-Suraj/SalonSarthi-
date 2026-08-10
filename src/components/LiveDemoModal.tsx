import React, { useState } from 'react';
import {
  X,
  Store,
  Smartphone,
  Wallet,
  Calendar,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Plus,
  ArrowRight,
  TrendingUp,
  Clock,
  User,
  LogOut,
  Sparkles,
  CreditCard,
  Send,
  RefreshCw,
  ExternalLink,
  Copy,
  Check,
  Globe,
  Key
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  INITIAL_SERVICES,
  UPSELL_ADDONS,
  STAFF_MEMBERS,
  INITIAL_LEDGER,
  INITIAL_WALLETS,
  WHATSAPP_TEMPLATES,
} from '../data/mockData';
import { ServiceItem, UpsellAddon, StaffMember, LedgerEntry, CustomerWallet } from '../types';

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'real' | 'owner' | 'customer';
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ isOpen, onClose, initialMode = 'real' }) => {
  const [activePortal, setActivePortal] = useState<'real' | 'owner' | 'customer'>(initialMode);

  // Real App Credentials
  const REAL_APP_URL = 'https://salonsarthidemo.surajdx.com';
  const REAL_OWNER_ID = '8851666208';
  const REAL_OWNER_PASS = '8520';

  const [copiedId, setCopiedId] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(REAL_OWNER_ID);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleCopyPass = () => {
    navigator.clipboard.writeText(REAL_OWNER_PASS);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2000);
  };

  // Authentication State
  const [isOwnerLoggedIn, setIsOwnerLoggedIn] = useState(true);
  const [ownerPhone, setOwnerPhone] = useState('8851666208');
  const [ownerPass, setOwnerPass] = useState('8520');

  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(true);
  const [customerPhone, setCustomerPhone] = useState('9811223344');
  const [customerPass, setCustomerPass] = useState('123456');

  // App State - Owner
  const [wallets, setWallets] = useState<CustomerWallet[]>(INITIAL_WALLETS);
  const [ledger, setLedger] = useState<LedgerEntry[]>(INITIAL_LEDGER);
  const [staffList, setStaffList] = useState<StaffMember[]>(STAFF_MEMBERS);
  const [ownerTab, setOwnerTab] = useState<'dashboard' | 'ledger' | 'whatsapp' | 'staff' | 'topup'>('dashboard');

  // Owner topup state
  const [topupMobile, setTopupMobile] = useState('9811223344');
  const [topupAmount, setTopupAmount] = useState(2000);
  const [topupFlatBonus, setTopupFlatBonus] = useState(100);
  const [topupPercentBonus, setTopupPercentBonus] = useState(10);

  // App State - Customer
  const [customerWalletBalance, setCustomerWalletBalance] = useState(3450);
  const [customerStep, setCustomerStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(INITIAL_SERVICES[0]);
  const [selectedAddons, setSelectedAddons] = useState<UpsellAddon[]>([UPSELL_ADDONS[0]]);
  const [selectedStaff, setSelectedStaff] = useState<StaffMember>(STAFF_MEMBERS[0]);
  const [selectedSlotTime, setSelectedSlotTime] = useState('04:00 PM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Recharge Modal inside customer app
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [rechargeInput, setRechargeInput] = useState(2000);

  if (!isOpen) return null;

  // Compute total float across wallets
  const totalFloat = wallets.reduce((acc, curr) => acc + curr.mainBalance + curr.rewardBalance, 0);

  // Handle owner manual wallet topup
  const handleOwnerTopup = (e: React.FormEvent) => {
    e.preventDefault();
    const calculatedPercentBonus = Math.round((topupAmount * topupPercentBonus) / 100);
    const totalBonus = topupFlatBonus + calculatedPercentBonus;
    const netCredit = topupAmount + totalBonus;

    const newLedgerEntry: LedgerEntry = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: 'Just Now',
      customerName: `Client (${topupMobile})`,
      type: 'CREDIT_RECHARGE',
      amount: topupAmount,
      bonusAmount: totalBonus,
      balanceAfter: customerWalletBalance + netCredit,
      description: `Manual Owner Topup (Pay ₹${topupAmount} + Bonus ₹${totalBonus})`,
      referenceId: `RZP_${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    };

    setLedger([newLedgerEntry, ...ledger]);
    setCustomerWalletBalance((prev) => prev + netCredit);

    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    alert(`Successfully credited ₹${netCredit} (including ₹${totalBonus} Bonus) to client wallet!`);
  };

  // Handle customer wallet topup inside app
  const handleCustomerRecharge = () => {
    const bonus = Math.round(rechargeInput * 0.15); // 15% bonus
    const totalAdded = rechargeInput + bonus;
    setCustomerWalletBalance((prev) => prev + totalAdded);

    const newEntry: LedgerEntry = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: 'Just Now',
      customerName: 'Aarav Mehta (9811223344)',
      type: 'CREDIT_RECHARGE',
      amount: rechargeInput,
      bonusAmount: bonus,
      balanceAfter: customerWalletBalance + totalAdded,
      description: `Razorpay Topup (Pay ₹${rechargeInput} + 15% Bonus ₹${bonus})`,
      referenceId: `RZP_PAY_${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    };

    setLedger([newEntry, ...ledger]);
    setShowRechargeModal(false);

    confetti({ particleCount: 60, spread: 80, origin: { y: 0.5 } });
  };

  // Handle customer slot booking confirmation
  const handleConfirmBooking = () => {
    if (!selectedService) return;
    const addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
    const totalAmount = selectedService.price + addonsTotal;

    if (customerWalletBalance < totalAmount) {
      alert(`Insufficient wallet balance! Please top up ₹${totalAmount - customerWalletBalance} to complete booking.`);
      setShowRechargeModal(true);
      return;
    }

    setCustomerWalletBalance((prev) => prev - totalAmount);

    const newEntry: LedgerEntry = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: 'Just Now',
      customerName: 'Aarav Mehta (9811223344)',
      type: 'DEBIT_BOOKING',
      amount: totalAmount,
      balanceAfter: customerWalletBalance - totalAmount,
      description: `Slot Booking: ${selectedService.name} with ${selectedStaff.name} at ${selectedSlotTime}`,
      referenceId: `BKG_${Math.floor(100000 + Math.random() * 900000)}`,
    };

    setLedger([newEntry, ...ledger]);
    setBookingConfirmed(true);

    confetti({ particleCount: 80, spread: 100, origin: { y: 0.4 } });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-6xl bg-[#08080C] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[94vh]">
        
        {/* Modal Header */}
        <div className="p-3 sm:p-5 bg-[#0D0E15] border-b border-amber-500/30 flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          {/* Portal Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 overflow-x-auto">
            <button
              onClick={() => setActivePortal('real')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${
                activePortal === 'real'
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'text-amber-300 hover:text-white'
              }`}
            >
              <Globe className="w-4 h-4 text-amber-500" />
              🌐 Real Live Web App (Direct)
            </button>

            <button
              onClick={() => setActivePortal('owner')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${
                activePortal === 'owner'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Store className="w-4 h-4" />
              💈 Owner Portal Simulator
            </button>

            <button
              onClick={() => setActivePortal('customer')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${
                activePortal === 'customer'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              👤 Customer App Simulator
            </button>
          </div>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Area */}
        <div className="p-3 sm:p-6 overflow-y-auto flex-1">
          
          {/* REAL LIVE APP INTERFACE & EMBED */}
          {activePortal === 'real' && (
            <div className="space-y-4">
              
              {/* Login Credentials Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 border border-amber-500/40 shadow-xl">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                        Official Live App Credentials
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      Live SalonSarthi Owner Demo Access
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1">
                      Use these credentials below to log into the real web application (<strong className="text-amber-300 font-mono">salonsarthidemo.surajdx.com</strong>).
                    </p>
                  </div>

                  {/* Credentials Cards with 1-Click Copy */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto">
                    
                    {/* Owner Phone ID Card */}
                    <div className="flex-1 sm:flex-none p-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/40 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] text-zinc-400 uppercase font-mono block">Owner ID / Mobile</span>
                        <span className="text-sm font-black font-mono text-amber-300">{REAL_OWNER_ID}</span>
                      </div>
                      <button
                        onClick={handleCopyId}
                        className="p-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1 transition-all"
                      >
                        {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedId ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    {/* Password Card */}
                    <div className="flex-1 sm:flex-none p-2.5 px-3.5 rounded-xl bg-black/60 border border-amber-500/40 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] text-zinc-400 uppercase font-mono block">Password</span>
                        <span className="text-sm font-black font-mono text-amber-300">{REAL_OWNER_PASS}</span>
                      </div>
                      <button
                        onClick={handleCopyPass}
                        className="p-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1 transition-all"
                      >
                        {copiedPass ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedPass ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    {/* Open in New Tab Button */}
                    <a
                      href={REAL_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3 px-5 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Open Real App in New Tab</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                  </div>

                </div>
              </div>

              {/* Embedded Real App Iframe */}
              <div className="rounded-2xl border border-amber-500/30 bg-black/60 overflow-hidden shadow-2xl relative h-[600px] sm:h-[680px]">
                <div className="p-2.5 bg-[#0D0E15] border-b border-white/10 flex items-center justify-between text-xs text-zinc-400 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-zinc-300 font-bold">{REAL_APP_URL}</span>
                  </div>
                  <a
                    href={REAL_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 hover:underline flex items-center gap-1 font-bold text-[11px]"
                  >
                    <span>Full Screen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <iframe
                  src={REAL_APP_URL}
                  title="SalonSarthi Real App Demo"
                  className="w-full h-[calc(100%-37px)] border-0 bg-white"
                  allow="geolocation; microphone; camera"
                />
              </div>

            </div>
          )}

          {/* OWNER PORTAL SIMULATOR */}
          {activePortal === 'owner' && (
            <div>
              {/* Owner Header & Quick Metrics */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-white">Glamour Studio Owner Dashboard</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      LIVE SIMULATION
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Logged in as: <span className="text-white font-mono font-bold">8851666208</span> (Owner)
                  </p>
                </div>

                {/* Owner Nav Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                  <button
                    onClick={() => setOwnerTab('dashboard')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      ownerTab === 'dashboard' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-zinc-400 hover:bg-white/5'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setOwnerTab('ledger')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      ownerTab === 'ledger' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-zinc-400 hover:bg-white/5'
                    }`}
                  >
                    Passbook Ledger
                  </button>
                  <button
                    onClick={() => setOwnerTab('whatsapp')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      ownerTab === 'whatsapp' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-zinc-400 hover:bg-white/5'
                    }`}
                  >
                    WhatsApp Studio
                  </button>
                  <button
                    onClick={() => setOwnerTab('topup')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      ownerTab === 'topup' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-zinc-400 hover:bg-white/5'
                    }`}
                  >
                    + Issue Topup
                  </button>
                </div>
              </div>

              {/* Owner Tab: Dashboard */}
              {ownerTab === 'dashboard' && (
                <div className="space-y-6">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                      <div className="text-xs text-amber-300 font-bold">Total Prepaid Float Held</div>
                      <div className="text-2xl font-black text-amber-300 font-mono mt-1">₹{totalFloat.toLocaleString()}</div>
                      <div className="text-[10px] text-zinc-400 mt-1">Locked advance cash in bank</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                      <div className="text-xs text-emerald-300 font-bold">60-Day Repeat Visit Rate</div>
                      <div className="text-2xl font-black text-emerald-400 font-mono mt-1">78.4%</div>
                      <div className="text-[10px] text-zinc-400 mt-1">▲ +32% higher than industry</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30">
                      <div className="text-xs text-blue-300 font-bold">Average Order Value (AOV)</div>
                      <div className="text-2xl font-black text-blue-400 font-mono mt-1">₹1,140</div>
                      <div className="text-[10px] text-zinc-400 mt-1">Driven by Smart Upsell Addons</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30">
                      <div className="text-xs text-purple-300 font-bold">LockService Protection</div>
                      <div className="text-2xl font-black text-purple-400 font-mono mt-1">0 Overbooks</div>
                      <div className="text-[10px] text-zinc-400 mt-1">Google Apps Script active</div>
                    </div>
                  </div>

                  {/* Customer Wallets Table */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                    <h4 className="font-bold text-white text-sm mb-3">Prepaid Customer Wallets Directory</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-white/10 text-zinc-400">
                            <th className="pb-2 font-semibold">CUSTOMER</th>
                            <th className="pb-2 font-semibold">MOBILE</th>
                            <th className="pb-2 font-semibold">TIER</th>
                            <th className="pb-2 font-semibold text-right">MAIN BALANCE</th>
                            <th className="pb-2 font-semibold text-right">REWARD BONUS</th>
                            <th className="pb-2 font-semibold text-right">TOTAL FLOAT</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-zinc-300">
                          {wallets.map((w) => (
                            <tr key={w.customerId}>
                              <td className="py-2.5 font-bold text-white">{w.customerName}</td>
                              <td className="py-2.5 font-mono text-zinc-400">{w.mobile}</td>
                              <td className="py-2.5">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                  {w.tier}
                                </span>
                              </td>
                              <td className="py-2.5 text-right font-mono text-white">₹{w.mainBalance}</td>
                              <td className="py-2.5 text-right font-mono text-emerald-400">+₹{w.rewardBalance}</td>
                              <td className="py-2.5 text-right font-mono font-bold text-amber-300">
                                ₹{w.mainBalance + w.rewardBalance}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Owner Tab: Ledger */}
              {ownerTab === 'ledger' && (
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-sm">Double-Entry Ledger Audit Trail</h4>
                    <span className="text-xs text-zinc-400 font-mono">Total Txns: {ledger.length}</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className="border-b border-white/10 text-zinc-400">
                          <th className="pb-2">TIME</th>
                          <th className="pb-2">CLIENT</th>
                          <th className="pb-2">TYPE</th>
                          <th className="pb-2 text-right">AMOUNT</th>
                          <th className="pb-2 text-right">BALANCE AFTER</th>
                          <th className="pb-2">DETAILS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-zinc-300">
                        {ledger.map((e) => (
                          <tr key={e.id}>
                            <td className="py-2.5 text-zinc-400 text-[11px] font-sans">{e.timestamp}</td>
                            <td className="py-2.5 font-bold text-white font-sans">{e.customerName}</td>
                            <td className="py-2.5">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                e.type === 'CREDIT_RECHARGE' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                              }`}>
                                {e.type}
                              </span>
                            </td>
                            <td className={`py-2.5 text-right font-bold ${e.type === 'CREDIT_RECHARGE' ? 'text-emerald-400' : 'text-red-400'}`}>
                              {e.type === 'CREDIT_RECHARGE' ? '+' : '-'}₹{e.amount}
                            </td>
                            <td className="py-2.5 text-right font-bold text-amber-300">₹{e.balanceAfter}</td>
                            <td className="py-2.5 text-zinc-400 text-[11px] font-sans">{e.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Owner Tab: WhatsApp Studio */}
              {ownerTab === 'whatsapp' && (
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <h4 className="font-bold text-white text-sm">1-Click WhatsApp Broadcast Campaign Studio</h4>
                  <p className="text-xs text-zinc-400">
                    Direct click-to-send via wa.me links. Zero server spam risks, 100% deliverability to loyal client base.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {WHATSAPP_TEMPLATES.map((t) => (
                      <div key={t.id} className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-emerald-400 text-xs">{t.title}</span>
                            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                              {t.tag}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-300 whitespace-pre-wrap">{t.message}</p>
                        </div>
                        <a
                          href={`https://wa.me/918851666208?text=${encodeURIComponent(t.message)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 py-2 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Launch WhatsApp Broadcast →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Owner Tab: Issue Manual Topup */}
              {ownerTab === 'topup' && (
                <div className="max-w-lg mx-auto p-6 rounded-2xl bg-[#0D0E15] border border-amber-500/30">
                  <h4 className="font-extrabold text-white text-base mb-1">Issue Direct Wallet Top-Up & Bonus</h4>
                  <p className="text-xs text-zinc-400 mb-4">Manually credit client wallet during counter visits.</p>

                  <form onSubmit={handleOwnerTopup} className="space-y-4 text-xs">
                    <div>
                      <label className="font-bold text-zinc-300 block mb-1">Customer Mobile Number:</label>
                      <input
                        type="text"
                        value={topupMobile}
                        onChange={(e) => setTopupMobile(e.target.value)}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-white font-mono font-bold"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-zinc-300 block mb-1">Topup Amount Received (₹):</label>
                      <input
                        type="number"
                        value={topupAmount}
                        onChange={(e) => setTopupAmount(Number(e.target.value))}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-amber-300 font-mono font-bold"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-zinc-300 block mb-1">Flat Cash Bonus (+₹):</label>
                        <input
                          type="number"
                          value={topupFlatBonus}
                          onChange={(e) => setTopupFlatBonus(Number(e.target.value))}
                          className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-emerald-400 font-mono font-bold"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-zinc-300 block mb-1">Percentage Bonus (%):</label>
                        <input
                          type="number"
                          value={topupPercentBonus}
                          onChange={(e) => setTopupPercentBonus(Number(e.target.value))}
                          className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-emerald-400 font-mono font-bold"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110"
                    >
                      Credit Wallet & Send WhatsApp Receipt
                    </button>
                  </form>
                </div>
              )}

            </div>
          )}

          {/* CUSTOMER APP DEMO */}
          {activePortal === 'customer' && (
            <div className="max-w-md mx-auto">
              
              {/* Phone Frame Simulator Container */}
              <div className="p-5 rounded-3xl bg-[#0D0E15] border-2 border-amber-500/40 shadow-2xl relative text-left">
                
                {/* Simulated Phone Top Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">Glamour Studio App</span>
                    <span className="text-xs font-black text-white">Hi, Aarav Mehta (9811223344)</span>
                  </div>

                  {/* Wallet Balance Widget in Customer App */}
                  <div
                    onClick={() => setShowRechargeModal(true)}
                    className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/40 cursor-pointer hover:bg-amber-500/25 transition-all"
                  >
                    <div className="text-[9px] text-amber-300 font-bold uppercase">Prepaid Wallet</div>
                    <div className="text-sm font-black text-amber-300 font-mono">₹{customerWalletBalance}</div>
                  </div>
                </div>

                {/* Booking Step Progress Indicator */}
                <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400 mb-5">
                  <span className={customerStep === 1 ? 'text-amber-300 underline' : ''}>1. Service</span>
                  <span>→</span>
                  <span className={customerStep === 2 ? 'text-amber-300 underline' : ''}>2. Addons</span>
                  <span>→</span>
                  <span className={customerStep === 3 ? 'text-amber-300 underline' : ''}>3. Slot</span>
                  <span>→</span>
                  <span className={customerStep === 4 ? 'text-amber-300 underline' : ''}>4. Confirm</span>
                </div>

                {/* STEP 1: Select Service */}
                {customerStep === 1 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">Select Salon Service:</h4>
                    {INITIAL_SERVICES.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          selectedService?.id === srv.id
                            ? 'bg-amber-500/15 border-amber-500/60 text-white'
                            : 'bg-black/40 border-white/10 text-zinc-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold text-white">{srv.name}</div>
                          <div className="text-[10px] text-zinc-400">{srv.durationMinutes} mins • {srv.category}</div>
                        </div>
                        <div className="text-xs font-bold text-amber-300 font-mono">₹{srv.price}</div>
                      </div>
                    ))}

                    <button
                      onClick={() => setCustomerStep(2)}
                      className="mt-4 w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110 flex items-center justify-center gap-1.5"
                    >
                      Next: Add-on Upsells →
                    </button>
                  </div>
                )}

                {/* STEP 2: Smart Upsell Addons */}
                {customerStep === 2 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">🔥 Recommended Add-Ons (+35% Value):</h4>
                      <span className="text-[10px] text-zinc-400">Optional</span>
                    </div>

                    {UPSELL_ADDONS.map((add) => {
                      const isSelected = selectedAddons.some((a) => a.id === add.id);
                      return (
                        <div
                          key={add.id}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedAddons(selectedAddons.filter((a) => a.id !== add.id));
                            } else {
                              setSelectedAddons([...selectedAddons, add]);
                            }
                          }}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-emerald-950/40 border-emerald-500/60 text-white'
                              : 'bg-black/40 border-white/10 text-zinc-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-emerald-300">{add.name}</span>
                            <span className="text-xs font-mono font-bold text-emerald-400">+₹{add.price}</span>
                          </div>
                          <p className="text-[10px] text-zinc-400">{add.description}</p>
                        </div>
                      );
                    })}

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => setCustomerStep(1)}
                        className="py-2.5 px-4 rounded-xl bg-white/5 border border-white/15 text-xs text-zinc-300 font-bold"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => setCustomerStep(3)}
                        className="flex-1 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110"
                      >
                        Next: Select Stylist & Slot →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Staff & Time Slot */}
                {customerStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">Select Stylist:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {STAFF_MEMBERS.map((stf) => (
                          <div
                            key={stf.id}
                            onClick={() => setSelectedStaff(stf)}
                            className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                              selectedStaff.id === stf.id ? 'bg-amber-500/20 border-amber-500/60' : 'bg-black/40 border-white/10'
                            }`}
                          >
                            <div className="text-xs font-bold text-white">{stf.name}</div>
                            <div className="text-[10px] text-amber-400 font-mono">⭐ {stf.rating}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">Available Slots Today:</h4>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        {['01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'].map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlotTime(slot)}
                            className={`p-2 rounded-xl border font-mono font-bold transition-all ${
                              selectedSlotTime === slot ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-black/40 border-white/10 text-zinc-300'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => setCustomerStep(2)}
                        className="py-2.5 px-4 rounded-xl bg-white/5 border border-white/15 text-xs text-zinc-300 font-bold"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => setCustomerStep(4)}
                        className="flex-1 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110"
                      >
                        Review Booking →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: Summary & Confirm */}
                {customerStep === 4 && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">Booking Summary:</h4>

                    {bookingConfirmed ? (
                      <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                        <h5 className="font-extrabold text-white text-base">Slot Successfully Locked!</h5>
                        <p className="text-xs text-zinc-300">
                          Appointment confirmed with <span className="text-amber-300 font-bold">{selectedStaff.name}</span> at <span className="text-amber-300 font-bold">{selectedSlotTime}</span>.
                        </p>
                        <div className="p-2.5 rounded-xl bg-black/60 text-[11px] text-emerald-300 font-mono">
                          Payment debited from Prepaid Wallet. Passbook updated!
                        </div>
                        <button
                          onClick={() => {
                            setBookingConfirmed(false);
                            setCustomerStep(1);
                          }}
                          className="w-full py-2.5 rounded-xl bg-white/10 text-xs text-zinc-200 font-bold hover:bg-white/20"
                        >
                          Book Another Slot
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Service:</span>
                            <span className="font-bold text-white">{selectedService?.name}</span>
                          </div>
                          {selectedAddons.map((a) => (
                            <div key={a.id} className="flex justify-between text-emerald-300">
                              <span>Add-on: {a.name}</span>
                              <span className="font-mono">+₹{a.price}</span>
                            </div>
                          ))}
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Stylist:</span>
                            <span className="font-bold text-amber-300">{selectedStaff.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Slot Time:</span>
                            <span className="font-bold text-amber-300 font-mono">{selectedSlotTime}</span>
                          </div>
                          <div className="pt-2 border-t border-white/10 flex justify-between font-extrabold text-sm text-white">
                            <span>Total Payable:</span>
                            <span className="font-mono text-amber-300">
                              ₹{(selectedService?.price || 0) + selectedAddons.reduce((a, c) => a + c.price, 0)}
                            </span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs flex items-center justify-between">
                          <span>Wallet Balance: <strong className="text-amber-300 font-mono">₹{customerWalletBalance}</strong></span>
                          <button
                            onClick={() => setShowRechargeModal(true)}
                            className="text-[11px] text-amber-300 font-bold underline"
                          >
                            + Recharge
                          </button>
                        </div>

                        <button
                          onClick={handleConfirmBooking}
                          className="w-full py-3 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110 shadow-lg shadow-amber-500/20"
                        >
                          🔒 Confirm & Pay from Wallet
                        </button>
                      </>
                    )}
                  </div>
                )}

              </div>

              {/* Simulated Razorpay Topup Modal inside Customer App */}
              {showRechargeModal && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                  <div className="w-full max-w-sm bg-[#0D0E15] border border-amber-500/40 rounded-2xl p-5 text-left space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="font-bold text-sm text-white flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-amber-400" />
                        Razorpay Wallet Recharge
                      </span>
                      <button onClick={() => setShowRechargeModal(false)} className="text-zinc-400 hover:text-white">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-zinc-300">
                      Select Top-Up Amount (Instant 15% Bonus Credited):
                    </div>

                    <div className="grid grid-cols-3 gap-2 font-mono text-xs font-bold">
                      {[1000, 2000, 3000].map((amt) => (
                        <button
                          key={amt}
                          onClick={() => setRechargeInput(amt)}
                          className={`p-2 rounded-xl border ${
                            rechargeInput === amt ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-black/40 border-white/10 text-white'
                          }`}
                        >
                          ₹{amt}
                        </button>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>Payable Today:</span>
                        <span className="font-bold font-mono text-white">₹{rechargeInput}</span>
                      </div>
                      <div className="flex justify-between text-emerald-400">
                        <span>+ 15% Bonus Free:</span>
                        <span className="font-bold font-mono">+₹{Math.round(rechargeInput * 0.15)}</span>
                      </div>
                      <div className="pt-1 border-t border-white/10 flex justify-between font-bold text-amber-300">
                        <span>Net Wallet Balance:</span>
                        <span className="font-mono">₹{rechargeInput + Math.round(rechargeInput * 0.15)}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCustomerRecharge}
                      className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-300 hover:brightness-110"
                    >
                      Pay ₹{rechargeInput} via Razorpay Test Gateway
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
