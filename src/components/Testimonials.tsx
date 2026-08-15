/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';
import { Star, MessageSquarePlus, Quote, CheckCircle, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewName, setReviewName] = useState('');
  const [reviewDesignation, setReviewDesignation] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewText) return;

    const newTestimonial: Testimonial = {
      id: `t-${Date.now()}`,
      name: reviewName,
      designation: reviewDesignation || 'Verified Client',
      text: reviewText,
      rating: reviewRating,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setIsSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setIsSubmitted(false);
      setReviewName('');
      setReviewDesignation('');
      setReviewText('');
      setReviewRating(5);
    }, 2000);
  };

  return (
    <section className="bg-white py-16 md:py-24" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-red-600 font-bold tracking-wider uppercase text-xs">Customer Reviews</span>
            <h2
              className="text-3xl sm:text-4xl font-sans font-bold text-zinc-900 mt-2 tracking-tight"
              style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
            >
              What Our Customers Say
            </h2>
            <p className="mt-4 text-zinc-600 text-lg max-w-xl">
              We pride ourselves on friendly service, neat work, and clear communication. Read verified reviews from homeowners around Columbus.
            </p>
          </div>
          <button
            id="write-review-btn"
            onClick={() => setShowReviewModal(true)}
            className="self-start md:self-end bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4 text-red-500" />
            Leave a Review
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group"
            >
              {/* Decorative Quote Mark */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-200/80 -z-0 group-hover:scale-110 transition-transform" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-0.5 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'text-neutral-200'}`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 border-t border-neutral-200/60 pt-4 mt-auto relative z-10">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-zinc-900">{t.name}</h4>
                  <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                    {t.designation || 'Verified Customer'}
                  </p>
                  {t.date && <p className="text-[9px] text-zinc-400 mt-0.5">{t.date}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Google Rating Stats Banner */}
        <div className="mt-16 bg-neutral-50 border border-neutral-200 rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold font-sans text-zinc-900">5.0</div>
            <div>
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-zinc-500 uppercase mt-1 tracking-wider">
                Average Rating (Columbus Metro)
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm font-bold text-zinc-800">
              "Great pricing and clean installation — highly recommended!"
            </p>
            <p className="text-xs text-zinc-500 mt-1">— Consistent Feedback Across Columbus</p>
          </div>
        </div>

        {/* Leave a Review Modal */}
        <AnimatePresence>
          {showReviewModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden border border-neutral-100"
              >
                {isSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center gap-4">
                    <CheckCircle className="w-16 h-16 text-emerald-600 animate-bounce" />
                    <h3 className="font-sans font-bold text-2xl text-zinc-900">Thank You!</h3>
                    <p className="text-zinc-600">Your review was added successfully and is now featured below.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-5">
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-100">
                      <h3 className="font-sans font-bold text-xl text-zinc-900">Share Your Experience</h3>
                      <button
                        type="button"
                        onClick={() => setShowReviewModal(false)}
                        className="text-zinc-400 hover:text-zinc-600 p-1"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={reviewName}
                          onChange={(e) => setReviewName(e.target.value)}
                          placeholder="e.g. Marie Curie"
                          className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                          Your Title / Designation (Optional)
                        </label>
                        <input
                          type="text"
                          value={reviewDesignation}
                          onChange={(e) => setReviewDesignation(e.target.value)}
                          placeholder="e.g. Columbus Resident / Homeowner"
                          className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                          Rating
                        </label>
                        <div className="flex items-center gap-1.5">
                          {[1, 2, 3, 4, 5].map((starValue) => (
                            <button
                              key={starValue}
                              type="button"
                              onClick={() => setReviewRating(starValue)}
                              className="text-amber-500 p-0.5"
                            >
                              <Star
                                className={`w-7 h-7 ${
                                  starValue <= reviewRating ? 'fill-current' : 'text-neutral-200'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
                          Your Review *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                          placeholder="What did you love about our service? e.g. Fast response, great communication, tidy job..."
                          className="w-full px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-200 focus:outline-none focus:border-red-600 text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
