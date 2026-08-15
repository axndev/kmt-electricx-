/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'residential' | 'commercial' | 'both';
  icon: string; // Name of Lucide icon
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  designation?: string;
  date?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'service' | 'safety' | 'pricing';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  zip: string;
  message: string;
  serviceType: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  scheduledDate?: string;
  scheduledTime?: string;
  createdAt: string;
}
