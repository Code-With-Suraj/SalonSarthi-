import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050508] border-t border-amber-500/20 text-zinc-400 py-12 pb-24 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black flex items-center justify-center text-base">
                S
              </div>
              <span className="text-lg font-black text-white">SalonSarthi</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              India's #1 Customer Retention, Prepaid Wallet & WhatsApp Booking SaaS for Premium Salons, Spas & Beauty Parlours.
            </p>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-[11px] text-zinc-300">
              👑 Built on Google Apps Script & Sheets Infrastructure • 100% Data Ownership
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Product Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-amber-300 transition-colors">Core Features</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">Recharge Bonus Calculator</a></li>
              <li><a href="#comparison" className="hover:text-amber-300 transition-colors">Problem vs Solution</a></li>
              <li><a href="#pricing" className="hover:text-amber-300 transition-colors">Pricing Plans</a></li>
              <li><a href="#faq" className="hover:text-amber-300 transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Col 3: Target Audience */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Built For</h4>
            <ul className="space-y-2">
              <li>Premium Unisex Salons</li>
              <li>Beauty Parlours & Hair Studios</li>
              <li>Luxury Day Spas & Wellness Clinics</li>
              <li>Barbershops & Beard Lounges</li>
              <li>Nail & Lash Extension Bars</li>
            </ul>
          </div>

          {/* Col 4: Official Contact */}
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-3">Contact & Support</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href="tel:+918851666208" className="hover:text-amber-300">+91 8851666208</a>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href="mailto:suraj.gasdeveloper@gmail.com" className="hover:text-amber-300 transition-colors">suraj.gasdeveloper@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>New Delhi / NCR, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} SalonSarthi SaaS. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Razorpay Integration Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
