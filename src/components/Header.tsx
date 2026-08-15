/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X, Calendar, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (section: string, filter?: 'residential' | 'commercial') => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Residential', section: 'services', filter: 'residential' as const },
    { label: 'Commercial', section: 'services', filter: 'commercial' as const },
    { label: 'About Us', section: 'about' },
    { label: 'Blog', section: 'blog' },
    { label: 'FAQ', section: 'faq' },
    { label: 'Contact Us', section: 'contact' },
  ];

  const handleItemClick = (section: string, filter?: 'residential' | 'commercial') => {
    onNavigate(section, filter);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Alert Bar with phone and hours */}
      <div className="bg-zinc-950 text-neutral-300 text-xs py-2 px-4 border-b border-zinc-800 flex flex-wrap justify-between items-center gap-2 relative z-50">
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-red-500" />
            Mon–Fri: 8:00 AM – 6:00 PM | <span className="text-red-400 font-semibold">Emergency Services Available</span>
          </span>
        </div>
        <div className="flex items-center gap-5 mx-auto md:mx-0">
          <a
            href="tel:6148164982"
            className="flex items-center gap-1.5 font-bold text-white hover:text-red-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            (614) 816-4982
          </a>
          <span className="hidden sm:inline text-neutral-500">|</span>
          <span className="hidden sm:inline text-neutral-400">Columbus, OH & Metro Area</span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-100 py-3'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick('hero');
            }}
            className="flex-shrink-0"
            id="header-logo-link"
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                id={`desktop-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                onClick={() => handleItemClick(item.section, item.filter)}
                className={`font-sans text-[14px] font-medium tracking-wide transition-colors relative py-1 hover:text-red-600 ${
                  activeSection === item.section
                    ? 'text-red-600 font-semibold'
                    : 'text-zinc-600'
                }`}
              >
                {item.label}
                {activeSection === item.section && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call to Action and Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              id="header-cta-schedule"
              onClick={() => handleItemClick('contact')}
              className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-sans text-sm font-semibold tracking-wide py-2.5 px-5 rounded-lg shadow-sm transition-all hover:shadow-md cursor-pointer group"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Schedule Service
            </button>

            <button
              id="header-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-neutral-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-b border-neutral-100 shadow-inner overflow-hidden absolute top-full left-0 right-0"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navItems.map((item, idx) => (
                  <button
                    key={idx}
                    id={`mobile-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                    onClick={() => handleItemClick(item.section, item.filter)}
                    className={`block w-full text-left py-3 px-4 rounded-lg font-sans text-base font-medium transition-colors ${
                      activeSection === item.section
                        ? 'bg-red-50 text-red-700 font-semibold'
                        : 'text-zinc-700 hover:bg-neutral-50 hover:text-red-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-neutral-100 px-4 flex flex-col gap-3">
                  <a
                    href="tel:6148164982"
                    className="flex items-center justify-center gap-2 bg-zinc-950 text-white py-3 rounded-lg font-bold hover:bg-zinc-900 text-center transition-all"
                  >
                    <Phone className="w-4 h-4 text-red-500" />
                    Call (614) 816-4982
                  </a>
                  <button
                    id="mobile-nav-cta-schedule"
                    onClick={() => handleItemClick('contact')}
                    className="flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 text-center transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Service
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
