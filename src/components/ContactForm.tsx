/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Lead } from '../types';
import { Phone, Mail, Clock, CalendarCheck, CheckCircle2, Trash2, Calendar, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  selectedServiceTitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedServiceTitle = '' }) => {
  // Booking leads state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [serviceType, setServiceType] = useState('installations');
  const [name, setName] = useState('Marie Curie');
  const [phone, setPhone] = useState('(555) 555-5555');
  const [email, setEmail] = useState('marie.curie@example.com');
  const [zip, setZip] = useState('55555');
  const [message, setMessage] = useState('');
  
  // Custom Scheduling Fields
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (8:00 AM – 12:00 PM)');
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeLead, setActiveLead] = useState<Lead | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem('kmt_electric_leads');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Lead[];
        setLeads(parsed);
        if (parsed.length > 0) {
          // Keep the latest active lead shown
          const active = parsed.find((l) => l.status !== 'cancelled') || parsed[0];
          setActiveLead(active);
        }
      } catch (e) {
        console.error(e);
      }
    }
    
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  // Watch selectedServiceTitle to update form
  useEffect(() => {
    if (selectedServiceTitle) {
      setMessage(`Hi, I would like to schedule or get a quote for: ${selectedServiceTitle}.`);
      // Focus the form
      const formEl = document.getElementById('contact-form-anchor');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !zip) return;

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name,
      phone,
      email,
      zip,
      message,
      serviceType: serviceType,
      status: 'confirmed',
      scheduledDate: preferredDate,
      scheduledTime: preferredTime,
      createdAt: new Date().toLocaleString(),
    };

    const updatedLeads = [newLead, ...leads];
    setLeads(updatedLeads);
    localStorage.setItem('kmt_electric_leads', JSON.stringify(updatedLeads));
    setActiveLead(newLead);
    setIsSuccess(true);

    // Reset form fields (except name/phone for easier simulation)
    setMessage('');
  };

  const handleCancelBooking = (leadId: string) => {
    const updated = leads.map((l) => {
      if (l.id === leadId) {
        return { ...l, status: 'cancelled' as const };
      }
      return l;
    });
    setLeads(updated);
    localStorage.setItem('kmt_electric_leads', JSON.stringify(updated));
    const active = updated.find((l) => l.id === leadId);
    if (active) {
      setActiveLead(active);
    }
  };

  return (
    <section className="bg-neutral-50 py-16 md:py-24" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-form-anchor">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold tracking-wider uppercase text-xs">Get in Touch</span>
          <h2
            className="text-3xl sm:text-4xl font-sans font-bold text-zinc-900 mt-2 tracking-tight"
            style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
          >
            Contact Us - KMT Electric
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg">
            Let us know how we can help you today. Fill out the contact or scheduling form — we’ll get back to you quickly with answers or a direct quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3
              className="text-2xl font-sans font-bold text-zinc-900"
              style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
            >
              Contact Information
            </h3>
            
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We respond quickly, explain your options clearly, and make scheduling simple.
              Get premium quality electrical help with transparent pricing.
            </p>

            {/* Quick stats / contacts details */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <a
                href="tel:6148164982"
                className="block p-5 bg-white border border-neutral-200 hover:border-red-600 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Call Us Directly</p>
                    <p className="text-lg font-extrabold text-zinc-950 mt-0.5 group-hover:text-red-600 transition-colors">
                      (614) 816-4982
                    </p>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:Copaskeegan9@gmail.com"
                className="block p-5 bg-white border border-neutral-200 hover:border-red-600 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email Our Team</p>
                    <p className="text-base sm:text-lg font-extrabold text-zinc-950 mt-0.5 break-all group-hover:text-red-600 transition-colors">
                      Copaskeegan9@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              {/* Hours Card */}
              <div className="p-5 bg-white border border-neutral-200 rounded-2xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Service Hours</p>
                  <p className="text-sm font-extrabold text-zinc-950 mt-0.5">
                    Monday–Friday: 8:00 AM – 6:00 PM
                  </p>
                  <p className="text-xs text-red-600 font-semibold mt-0.5">
                    Emergency dispatcher available.
                  </p>
                </div>
              </div>

            </div>

            {/* Simulated Live Bookings Board (if any are saved) */}
            {activeLead && (
              <div className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="font-sans font-bold text-sm tracking-wider uppercase text-zinc-400">
                    Your Scheduled Service
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                    activeLead.status === 'confirmed'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                  }`}>
                    {activeLead.status}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Calendar className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="font-medium text-white">{activeLead.scheduledDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Clock className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{activeLead.scheduledTime}</span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-300 pt-2 border-t border-zinc-900">
                    <div className="text-xs text-zinc-400">
                      <p className="font-semibold text-zinc-200">Name: <span className="font-medium text-zinc-300">{activeLead.name}</span></p>
                      <p className="font-semibold text-zinc-200">ZIP Code: <span className="font-medium text-zinc-300">{activeLead.zip}</span></p>
                      <p className="font-semibold text-zinc-200">Status: <span className="font-medium text-zinc-300">A representative will confirm your booking shortly.</span></p>
                    </div>
                  </div>
                </div>

                {activeLead.status === 'confirmed' && (
                  <button
                    onClick={() => handleCancelBooking(activeLead.id)}
                    className="w-full mt-4 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white font-bold text-xs py-2.5 rounded-xl transition-all border border-red-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Cancel Appointment
                  </button>
                )}
              </div>
            )}

          </div>

          {/* Right Column: Contact & Scheduling Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 p-6 sm:p-10 shadow-sm relative">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3
                    className="font-sans font-bold text-2xl text-zinc-900"
                    style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
                  >
                    Service Scheduled Successfully!
                  </h3>
                  <p className="text-zinc-600 text-sm sm:text-base max-w-md leading-relaxed">
                    Thank you, <span className="font-bold text-zinc-900">{name}</span>. 
                    We have received your service request for <span className="font-bold text-zinc-900">{preferredDate}</span> during the <span className="font-bold text-zinc-900">{preferredTime}</span>. 
                    An electrician will contact you shortly at <span className="font-bold text-zinc-900">{phone}</span> to confirm arrival time.
                  </p>
                  
                  <div className="mt-8 p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-left text-xs max-w-sm w-full space-y-1.5">
                    <p className="font-bold text-zinc-800">Booking Reference: #KMT-{Math.floor(100000 + Math.random() * 900000)}</p>
                    <p className="text-zinc-500">Service Hours: Mon-Fri, 8:00 AM - 6:00 PM</p>
                    <p className="text-zinc-500">Contact: (614) 816-4982 | Copaskeegan9@gmail.com</p>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
                  >
                    Schedule Another Service
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">Service You Can Trust!</h3>
                    <p className="text-xs text-zinc-500 mt-1">Let us know how we can help you today.</p>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* First & Last Name */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                        First & Last Name*
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Marie Curie"
                        className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-semibold text-zinc-900"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 555-5555"
                        className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-semibold text-zinc-900"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="marie.curie@example.com"
                        className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-semibold text-zinc-900"
                      />
                    </div>

                    {/* ZIP/Postal Code */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                        ZIP/Postal Code*
                      </label>
                      <input
                        type="text"
                        required
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        placeholder="55555"
                        className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-semibold text-zinc-900"
                      />
                    </div>

                  </div>

                  {/* Service Type & Date Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                        Service Needed
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-semibold text-zinc-900"
                      >
                        <option value="installations">Electrical Installations</option>
                        <option value="lighting">Lighting & Design</option>
                        <option value="panel-upgrades">Panel Upgrades</option>
                        <option value="commercial">Commercial Electrical</option>
                        <option value="repairs">Troubleshooting & Repair</option>
                        <option value="other">Other / General Help</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-semibold text-zinc-900"
                      />
                    </div>

                  </div>

                  {/* Preferred Time Window */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      Preferred Arrival Window
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'Morning (8:00 AM – 12:00 PM)',
                        'Afternoon (12:00 PM – 4:00 PM)',
                        'Late Afternoon (4:00 PM – 6:00 PM)',
                      ].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setPreferredTime(time)}
                          className={`p-3 text-xs rounded-xl font-semibold border transition-all text-center ${
                            preferredTime === time
                              ? 'bg-red-50 border-red-500 text-red-700 shadow-sm'
                              : 'bg-neutral-50 border-neutral-200 text-zinc-600 hover:bg-neutral-100'
                          }`}
                        >
                          {time.split(' ')[0]}
                          <span className="block text-[9px] font-medium text-zinc-400 mt-1">
                            {time.split(' ').slice(1).join(' ')}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message/Comments */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-semibold text-zinc-900"
                    />
                  </div>

                  {/* Warning Notice */}
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 flex gap-2 text-amber-800 text-[11px] leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      For immediate response for safety-related emergency issues (sparking, main breaker failures, or outages), please call us directly at <strong>(614) 816-4982</strong>.
                    </span>
                  </div>

                  {/* Submit CTA */}
                  <div>
                    <button
                      type="submit"
                      id="contact-form-submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-sans text-base font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CalendarCheck className="w-5 h-5" />
                      Schedule Service
                    </button>
                  </div>

                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
