/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, Clock, MapPin, Award, Shield, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with stylized grid */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-red-600 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-red-600 rounded-br-xl" />
            
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white aspect-[4/3] lg:aspect-auto">
              <img
                src="/src/assets/images/friendly_electrician_1782677411703.jpg"
                alt="Licensed Electrician from KMT Electric working safely"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-neutral-200 max-w-[200px]">
              <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-sm">★</span>
                ))}
              </div>
              <p className="text-xs font-bold text-zinc-900 leading-tight">
                "Honest Pricing & Top-tier Workmanship"
              </p>
              <p className="text-[10px] text-zinc-500 mt-1 font-semibold">— Frank, Columbus</p>
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7">
            <span className="text-red-600 font-bold tracking-wider uppercase text-xs">About Us</span>
            <h2
              className="text-3xl sm:text-4xl font-sans font-bold text-zinc-900 mt-2 mb-6 tracking-tight"
              style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
            >
              Honest Answers, Fair Pricing, and a Focus on Safety
            </h2>
            
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-8">
              KMT Electric is a premier licensed and insured electrical services provider based in Columbus, Ohio.
              Our mission is to bring high-quality, reliable, and friendly electrical work back to the community.
              We believe in clear explanations, upfront costs, and doing things right the first time so you have complete peace of mind.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-base text-zinc-900">Safety First</h4>
                <p className="text-xs text-zinc-500 leading-normal">
                  All work is performed strictly to NEC national and municipal safety codes. No shortcuts.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-base text-zinc-900">Licensed Experts</h4>
                <p className="text-xs text-zinc-500 leading-normal">
                  Our professional team keeps updated on the newest techniques, from solar to high-speed EV chargers.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-base text-zinc-900">Honest Pricing</h4>
                <p className="text-xs text-zinc-500 leading-normal">
                  No hidden fees, no emergency premium markups, and completely free upfront diagnostics.
                </p>
              </div>
            </div>

            {/* Quick Contact Information Panel */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-zinc-700">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-sm font-semibold">Serving Columbus, OH and all suburbs</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-700">
                  <Clock className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-sm font-semibold">Mon–Fri: 8:00 AM – 6:00 PM (Emergency 24/7)</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <a
                  href="tel:6148164982"
                  className="flex items-center gap-2 font-bold text-lg text-zinc-900 hover:text-red-600 transition-colors"
                >
                  <Phone className="w-5 h-5 text-red-600" />
                  (614) 816-4982
                </a>
                <a
                  href="mailto:Copaskeegan9@gmail.com"
                  className="flex items-center gap-2 text-sm text-zinc-600 hover:text-red-600 font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4 text-red-600" />
                  Copaskeegan9@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
