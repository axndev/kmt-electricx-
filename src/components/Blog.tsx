/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { ArrowLeft, Clock, User, Tag, Calendar, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Blog: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const activePost = BLOG_POSTS.find((p) => p.id === selectedPostId);

  const handleBack = () => {
    setSelectedPostId(null);
    // Smooth scroll back to blog section top
    const blogSec = document.getElementById('blog-section');
    if (blogSec) {
      blogSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-neutral-50 py-16 md:py-24" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!activePost ? (
            /* BLOG LISTING VIEW */
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-red-600 font-bold tracking-wider uppercase text-xs">Resources & Advice</span>
                <h2
                  className="text-3xl sm:text-4xl font-sans font-bold text-zinc-900 mt-2 tracking-tight"
                  style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
                >
                  Electrical Safety & Energy Tips
                </h2>
                <p className="mt-4 text-zinc-600 text-base sm:text-lg">
                  Learn from our licensed experts. Get answers, save on your utility bills, and ensure your home wiring stays fully compliant.
                </p>
              </div>

              {/* Grid of Posts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    id={`blog-article-card-${post.id}`}
                    onClick={() => setSelectedPostId(post.id)}
                    className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer group"
                  >
                    {/* Visual Cover Header */}
                    <div className="bg-zinc-950 p-6 flex flex-col justify-between h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-radial-gradient from-zinc-800 to-zinc-950 opacity-90" />
                      
                      {/* Decorative glowing lines */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600" />
                      
                      <div className="relative z-10">
                        <span className="inline-flex items-center gap-1 bg-red-600/25 border border-red-500/35 text-red-400 font-bold text-[10px] uppercase px-2.5 py-1 rounded-full">
                          <Tag className="w-2.5 h-2.5" />
                          {post.category}
                        </span>
                      </div>

                      <div className="relative z-10 mt-auto">
                        <h3 className="font-sans font-bold text-white text-base sm:text-lg line-clamp-2 group-hover:text-red-400 transition-colors">
                          {post.title}
                        </h3>
                      </div>
                    </div>

                    {/* Excerpt and meta */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between border-t border-neutral-100 pt-4 mt-auto">
                        <span className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-red-500" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold">
                          <Clock className="w-3.5 h-3.5 text-red-500" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ) : (
            /* BLOG FULL READING VIEW */
            <motion.div
              key="post"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-lg"
            >
              {/* Back CTA */}
              <button
                id="blog-back-btn"
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-red-600 font-sans font-semibold text-sm transition-colors mb-8 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all resources
              </button>

              {/* Post Header */}
              <div className="space-y-4 border-b border-neutral-200 pb-6 mb-8">
                <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 text-xs font-bold px-3.5 py-1.5 rounded-full border border-red-100/60 uppercase">
                  {activePost.category}
                </span>
                
                <h1
                  className="font-sans font-bold text-2xl sm:text-4xl text-zinc-900 tracking-tight leading-tight"
                  style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
                >
                  {activePost.title}
                </h1>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-zinc-500 text-xs sm:text-sm font-semibold pt-2">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-red-600" />
                    By {activePost.author} (KMT Electric Team)
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-red-600" />
                    {activePost.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-red-600" />
                    {activePost.readTime}
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="prose prose-red max-w-none text-zinc-700 text-sm sm:text-base leading-relaxed space-y-6">
                {activePost.content.split('\n\n').map((paragraph, index) => {
                  // Basic header rendering if lines start with # or markdown bullets
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3
                        key={index}
                        className="font-sans font-bold text-lg sm:text-xl text-zinc-900 pt-4"
                        style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
                      >
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('* ')) {
                    return (
                      <ul key={index} className="list-disc pl-5 space-y-2">
                        {paragraph.split('\n').map((li, liIdx) => (
                          <li key={liIdx} className="font-medium">
                            {li.replace('* ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <ol key={index} className="list-decimal pl-5 space-y-3">
                        {paragraph.split('\n').map((li, liIdx) => {
                          const cleanLi = li.replace(/^\d+\.\s*/, '');
                          return (
                            <li key={liIdx} className="font-medium">
                              {cleanLi}
                            </li>
                          );
                        })}
                      </ol>
                    );
                  }
                  // Render standard paragraph with basic bold parsing **text**
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={index} className="font-medium">
                      {parts.map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={partIdx} className="text-zinc-950 font-bold">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>

              {/* Reading Footer with action */}
              <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                    KC
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-zinc-900 text-sm">Keegan Copas</h4>
                    <p className="text-xs text-zinc-500 font-semibold">Founder & Lead Electrician, KMT Electric</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }}
                    className="inline-flex items-center gap-1.5 border border-neutral-200 hover:border-red-600 text-zinc-600 hover:text-red-600 font-bold text-xs py-2 px-4 rounded-lg transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    Share Post
                  </button>
                  <button
                    onClick={handleBack}
                    className="bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-xs py-2 px-4 rounded-lg transition-colors"
                  >
                    All Tips
                  </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
