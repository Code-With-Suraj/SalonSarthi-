import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircleQuestion } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0B0C12] border-t border-amber-500/20 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-amber-400" />
            High-Converting FAQ Section
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions By Salon Owners
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base">
            Everything you need to know about setup, server costs, Razorpay payouts, and WhatsApp security.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-amber-400">Q{idx + 1}:</span>
                    {item.question.replace(/^Q\d+:\s*/, '')}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 text-amber-400 transition-transform ${isOpen ? 'rotate-180 bg-amber-500/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-medium">
                      <span className="text-emerald-400 font-bold mr-1.5">Ans:</span>
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Support Prompt */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center text-xs text-zinc-400 flex flex-wrap items-center justify-center gap-3">
          <span>Have more questions? Talk directly to our salon SaaS expert:</span>
          <a href="tel:+918851666208" className="text-amber-300 font-bold hover:underline">
            📞 +91 8851666208
          </a>
          <span>•</span>
          <a href="mailto:suraj.gasdeveloper@gmail.com" className="text-amber-300 font-bold hover:underline">
            ✉️ suraj.gasdeveloper@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
};
