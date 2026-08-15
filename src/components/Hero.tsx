/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Phone, Zap, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onScheduleClick: () => void;
  onServicesClick: (filter?: 'residential' | 'commercial') => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick, onServicesClick }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-50 pt-8 pb-16 md:py-24">
      {/* Decorative Background Grid/Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 self-start bg-red-50 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-red-100/80 mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>Fully Licensed, Bonded & Insured Electricians</span>
            </motion.div>

            {/* Display Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-bold text-4xl sm:text-5xl lg:text-[48px] leading-tight tracking-tight text-zinc-900"
              style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
            >
              Friendly, Reliable <span className="text-red-600 relative">Electrical Help</span> — Just a Call or Message Away
            </motion.h1>

            {/* Subheading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl"
            >
              Have a question about your electrical system? Need a quote? Experiencing an issue and want a licensed electrician to take a look?
              <br />
              <span className="font-medium text-zinc-900">The team at KMT Electric is here to help</span> — with honest answers, fair pricing, and a focus on safety. We respond quickly, explain your options clearly, and make scheduling simple.
            </motion.p>

            {/* Quick Benefits Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg"
            >
              {[
                'Honest Upfront Pricing',
                'Same-Day Response Rate',
                '100% Satisfaction Guarantee',
                'Local Columbus Experts',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-red-600" fill="currentColor" />
                  </span>
                  <span className="text-sm font-semibold text-zinc-800">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Primary & Secondary Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                id="hero-schedule-btn"
                onClick={onScheduleClick}
                className="bg-red-600 hover:bg-red-700 text-white font-sans text-base font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
              >
                Schedule Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="tel:6148164982"
                className="bg-white border border-neutral-200 hover:border-red-600 text-zinc-900 hover:text-red-600 font-sans text-base font-bold px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-red-600" />
                (614) 816-4982
              </a>
            </motion.div>

            {/* Quick stats / Ratings */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 pt-8 border-t border-neutral-200/60 flex items-center gap-6"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="ml-2 font-bold text-zinc-900 text-sm">5.0 Star Rated</span>
              </div>
              <div className="text-zinc-400 text-xs font-semibold">|</div>
              <div className="text-zinc-600 text-sm">
                Hundreds of happy homeowners in Columbus
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Image with overlapping design elements */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-auto"
            >
              {/* Main Photo: Our beautiful modern house with architectural lighting */}
              <img
                src="/src/assets/images/home_lighting_hero_1782677391324.jpg"
                alt="Beautiful home exterior lighting design by KMT Electric"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Black Gradient Overlay on the photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-zinc-900 text-white rounded-xl p-4 shadow-xl border border-zinc-800 flex items-center gap-3 max-w-[240px]"
            >
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">Fast Troubleshooting</p>
                <p className="text-sm font-bold text-white">Diagnostics & Repairs</p>
              </div>
            </motion.div>

            {/* Service Area Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-red-600 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-lg rotate-3"
            >
              Columbus, OH & Suburbs
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
