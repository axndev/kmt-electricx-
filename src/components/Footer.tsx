/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Logo';
import { Phone, Facebook, Instagram, Youtube, HelpCircle, FileText, MapPin, Mail, ArrowUp } from 'lucide-react';

// Custom X icon representing Twitter
const XIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

interface FooterProps {
  onNavigate: (section: string, filter?: 'residential' | 'commercial') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-neutral-400 border-t border-zinc-900 pt-16 pb-12 relative z-10">
      
      {/* Scroll to top floating style button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={handleScrollTop}
          className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 focus:outline-none cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-zinc-900">
          
          {/* Column 1: Brand & Details */}
          <div className="md:col-span-4 space-y-6">
            <Logo variant="dark" />
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Friendly, reliable electrical help for your home and business. 
              Our team responds quickly, explains options clearly, and focuses entirely on safety and honest pricing.
            </p>

            <div className="space-y-3.5 text-sm">
              <a
                href="tel:6148164982"
                className="flex items-center gap-2.5 font-bold text-white hover:text-red-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                (614) 816-4982
              </a>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                Columbus, OH & surrounding suburbs
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="Twitter X"
              >
                <XIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-white text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('services', 'residential')}
                  className="hover:text-white transition-colors block text-left"
                >
                  Residential Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'commercial')}
                  className="hover:text-white transition-colors block text-left"
                >
                  Commercial Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors block text-left"
                >
                  Lighting & Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors block text-left"
                >
                  Generators & EV Chargers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="font-sans font-bold text-white text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors block text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors block text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors block text-left"
                >
                  Latest Blog
                </button>
              </li>
              <li>
                <a
                  href="mailto:Copaskeegan9@gmail.com"
                  className="hover:text-white transition-colors block text-left"
                >
                  Support Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="font-sans font-bold text-white text-sm tracking-wider uppercase">
              Resources
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors block text-left"
                >
                  Service FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors block text-left"
                >
                  Electrical Safety Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors block text-left"
                >
                  Quotes Calculator
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Credentials */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} KMT Electric. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <span>Columbus, OH Licensed #OH-98412</span>
            <span>Safety Code Compliant (NEC)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
