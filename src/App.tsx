/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQComponent } from './components/FAQ';
import { Blog } from './components/Blog';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedServiceTitle, setSelectedServiceTitle] = useState('');
  const [serviceFilter, setServiceFilter] = useState<'all' | 'residential' | 'commercial'>('all');

  // Smooth scroll and navigation callback
  const handleNavigate = (sectionId: string, filter?: 'residential' | 'commercial') => {
    if (filter) {
      setServiceFilter(filter);
    } else if (sectionId !== 'services') {
      // Keep 'all' for other clicks unless explicit
    }

    const elementMap: Record<string, string> = {
      hero: 'hero-section',
      services: 'services-section',
      about: 'about-section',
      blog: 'blog-section',
      faq: 'faq-section',
      contact: 'contact-section',
    };

    const targetId = elementMap[sectionId] || sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  const handleScheduleForService = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
    handleNavigate('contact');
  };

  // Section intersection observer to update activeState on scroll
  useEffect(() => {
    const sectionIds = ['hero-section', 'services-section', 'about-section', 'blog-section', 'faq-section', 'contact-section'];
    const sectionMap: Record<string, string> = {
      'hero-section': 'hero',
      'services-section': 'services',
      'about-section': 'about',
      'blog-section': 'blog',
      'faq-section': 'faq',
      'contact-section': 'contact',
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionMap[id]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans select-none antialiased">
      {/* Top sticky header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero landing space */}
      <div id="hero-section">
        <Hero
          onScheduleClick={() => handleNavigate('contact')}
          onServicesClick={(filter) => handleNavigate('services', filter)}
        />
      </div>

      {/* Services and installations section */}
      <Services
        initialFilter={serviceFilter}
        onScheduleForService={handleScheduleForService}
      />

      {/* About KMT Electric, team and service area details */}
      <About />

      {/* Customer testimonials board with rating additions */}
      <Testimonials />

      {/* FAQs with categories accordion */}
      <FAQComponent />

      {/* Blog & safety resources panel */}
      <Blog />

      {/* Contact & booking form scheduler */}
      <ContactForm selectedServiceTitle={selectedServiceTitle} />

      {/* Custom interactive footer with brand socials */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
