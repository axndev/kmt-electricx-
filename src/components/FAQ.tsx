/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQComponent: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('q1');
  const [faqCategory, setFaqCategory] = useState<'all' | 'safety' | 'service' | 'pricing'>('all');

  const filteredFaqs = FAQS.filter((faq) => {
    if (faqCategory === 'all') return true;
    return faq.category === faqCategory;
  });

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 md:py-24" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-600 font-bold tracking-wider uppercase text-xs">Help & Support</span>
          <h2
            className="text-3xl sm:text-4xl font-sans font-bold text-zinc-900 mt-2 tracking-tight"
            style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
          >
            Electrical Repair Service FAQs
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg">
            Find answers to common questions about your home electrical system, electrical safety, installations, and panel upgrades.
          </p>

          {/* FAQ Category Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'safety', label: 'Safety First' },
              { id: 'service', label: 'Our Services' },
              { id: 'pricing', label: 'Pricing & Estimates' },
            ].map((cat) => (
              <button
                key={cat.id}
                id={`faq-category-btn-${cat.id}`}
                onClick={() => {
                  setFaqCategory(cat.id as any);
                  setActiveId(null);
                }}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  faqCategory === cat.id
                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-md'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-zinc-600 border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-50 border-neutral-300 shadow-sm'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-red-600' : 'text-zinc-400'}`} />
                    <span className="font-sans font-bold text-sm sm:text-base text-zinc-900">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-7 h-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-zinc-500 transition-transform ${isOpen ? 'rotate-180 text-red-600 border-red-200' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-neutral-200/60 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions block */}
        <div className="mt-16 bg-red-50/50 border border-red-100 rounded-3xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <h4 className="font-sans font-bold text-zinc-900 text-lg">Still have questions about your electrical system?</h4>
          <p className="text-zinc-600 text-sm mt-2">
            The team at KMT Electric is here to help — with honest answers, fair pricing, and a focus on safety.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="tel:6148164982"
              className="inline-flex items-center gap-2 font-bold text-zinc-900 hover:text-red-600 transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-red-600" />
              (614) 816-4982
            </a>
            <a
              href="mailto:Copaskeegan9@gmail.com"
              className="inline-flex items-center gap-2 font-bold text-zinc-900 hover:text-red-600 transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-red-600" />
              Copaskeegan9@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
