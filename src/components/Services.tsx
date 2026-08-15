/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onScheduleForService: (serviceTitle: string) => void;
  initialFilter?: 'residential' | 'commercial' | 'all';
}

export const Services: React.FC<ServicesProps> = ({ onScheduleForService, initialFilter = 'all' }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>(initialFilter);
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('installations');

  // Sync prop changes
  React.useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  const filteredServices = SERVICES.filter((service) => {
    if (filter === 'all') return true;
    return service.category === filter || service.category === 'both';
  });

  // Dynamic Icon Renderer
  const renderIcon = (iconName: string, className: string = 'w-6 h-6 text-red-600') => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <LucideIcons.Wrench className={className} />;
  };

  return (
    <section className="bg-white py-16 md:py-24" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold tracking-wider uppercase text-xs">Our Expertise</span>
          <h2
            className="text-3xl sm:text-4xl font-sans font-bold text-zinc-900 mt-2 tracking-tight"
            style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
          >
            Professional Electrical Solutions
          </h2>
          <p className="mt-4 text-zinc-600 text-lg">
            Whether you need a quick repair, custom lighting design, or heavy-duty power upgrades,
            KMT Electric delivers clean, safe, and honest work.
          </p>

          {/* Filtering Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-neutral-100 rounded-xl border border-neutral-200">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`service-tab-${tab.id}`}
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all relative ${
                  filter === tab.id
                    ? 'text-zinc-900 shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {filter === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Layout - Interactive Master-Detail Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Master List (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {filteredServices.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onClick={() => setExpandedServiceId(service.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 ${
                    isExpanded
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-lg scale-[1.02]'
                      : 'bg-neutral-50 hover:bg-neutral-100/70 border-neutral-200 text-zinc-900'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${isExpanded ? 'bg-zinc-800' : 'bg-white shadow-sm border border-neutral-100'}`}>
                    {renderIcon(service.icon, isExpanded ? 'w-6 h-6 text-red-500' : 'w-6 h-6 text-red-600')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-sans font-bold text-base sm:text-lg leading-tight">
                        {service.title}
                      </h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase shrink-0 ${
                        isExpanded ? 'bg-red-600/30 text-red-400' : 'bg-red-50 text-red-600'
                      }`}>
                        {service.category === 'both' ? 'Both' : service.category}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm mt-1.5 line-clamp-2 ${isExpanded ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {service.description}
                    </p>
                    
                    {/* View Details Mobile Only helper */}
                    <span className="inline-flex lg:hidden items-center gap-1 text-xs font-bold text-red-500 mt-3 group-hover:underline">
                      View full checklist &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail Panel (Right) */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 rounded-3xl p-6 sm:p-8 sticky top-32">
            <AnimatePresence mode="wait">
              {(() => {
                const activeService = SERVICES.find((s) => s.id === expandedServiceId) || SERVICES[0];
                return (
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-red-100 rounded-xl text-red-600">
                          {renderIcon(activeService.icon, 'w-6 h-6')}
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-xl sm:text-2xl text-zinc-900">
                            {activeService.title}
                          </h4>
                          <span className="text-xs font-semibold text-zinc-500 capitalize">
                            Category: {activeService.category === 'both' ? 'Residential & Commercial' : activeService.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
                        {activeService.description}
                      </p>

                      <h5 className="font-sans font-bold text-sm text-zinc-900 tracking-wider uppercase mt-8 mb-4">
                        What We Frequently Install & Service:
                      </h5>

                      {/* Checklist Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {activeService.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-neutral-200/60"
                          >
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-600 mt-0.5">
                              <LucideIcons.Check className="w-3.5 h-3.5" strokeWidth={3} />
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-zinc-800">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-zinc-500 font-semibold">
                        <LucideIcons.ShieldCheck className="w-4 h-4 text-emerald-600" />
                        100% Upfront Pricing & Warranty
                      </div>
                      <button
                        id={`service-schedule-cta-${activeService.id}`}
                        onClick={() => onScheduleForService(activeService.title)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        Book {activeService.title}
                        <LucideIcons.ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

        </div>

        {/* Generous secondary segment for specific installations */}
        <div className="mt-16 bg-zinc-950 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
                Need specialized upgrades like Generators or Solar?
              </h3>
              <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                No electrical installation is too big or small for KMT Electric. Our teams routinely install items like whole-home generators, electric vehicle chargers, and solar panels. These types of upgrades provide a priceless level of peace of mind and security during emergencies that can cause power outages.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <button
                id="services-upgrade-cta"
                onClick={() => onScheduleForService('Specialized Equipment (Generator/EV/Solar)')}
                className="w-full md:w-auto bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all text-center cursor-pointer"
              >
                Get Specialized Quote
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
