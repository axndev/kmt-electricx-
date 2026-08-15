/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial, FAQ, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'installations',
    title: 'Electrical Installations',
    description: 'Ceiling fans, smoke detectors, smart light fixtures, generators, and electric vehicle chargers.',
    category: 'residential',
    icon: 'Wrench',
    details: [
      'Ceiling fan assembly and mounting',
      'Interconnected smoke and carbon monoxide detector systems',
      'Whole-home backup standby generators',
      'Level 2 EV charging station installations',
      'Solar panels and sustainable power hookups',
      'Smart home switches and outlet integrations'
    ]
  },
  {
    id: 'lighting',
    title: 'Lighting Installation & Design',
    description: 'Expert indoor architectural lighting and outdoor landscape designs to make your space warm, comfortable, and secure.',
    category: 'both',
    icon: 'Lightbulb',
    details: [
      'Recessed LED ceiling lights (pot lights)',
      'Under-cabinet and ambient cove lighting',
      'Chandelier and pendant hanging installations',
      'Landscape, path, and security floodlights',
      'Dimmers and smart lighting automation controls'
    ]
  },
  {
    id: 'panel-upgrades',
    title: 'Panel Upgrades & Smart Breakers',
    description: 'Safely increase your home power capacity to support modern appliances, AC units, and high energy demands.',
    category: 'residential',
    icon: 'Cpu',
    details: [
      '100 Amp to 200 Amp service upgrades',
      'Fuse-to-breaker box modernizations',
      'Dedicated circuits for heavy appliances (dryers, hot tubs, HVAC)',
      'Sub-panel installations for garages or additions',
      'Arc-Fault (AFCI) and Ground-Fault (GFCI) safety breakers'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Electrical Services',
    description: 'Tailored electrical solutions to keep your business powered, compliant, and operating at maximum efficiency.',
    category: 'commercial',
    icon: 'Briefcase',
    details: [
      'Office, retail, and warehouse lighting retrofits',
      'Commercial grade three-phase power systems',
      'Dedicated circuits for manufacturing and kitchen equipment',
      'Tenant improvements and workspace build-outs',
      'Safety, compliance, and preventative maintenance audits'
    ]
  },
  {
    id: 'repairs',
    title: 'Troubleshooting & Repairs',
    description: 'Quick, thorough diagnostics to identify and resolve issues like flickering lights, buzzing panels, or dead outlets.',
    category: 'both',
    icon: 'ShieldAlert',
    details: [
      'Faulty outlet, switch, and GFCI replacement',
      'Short-circuit tracing and wire repairs',
      'Overloaded circuit diagnostics',
      'Restoration of power to dead circuits',
      'Code violation corrections and safety upgrades'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'James',
    designation: 'Homeowner',
    text: 'Fast, friendly, and professional. Problem solved in one visit',
    rating: 5,
    date: 'June 12, 2026'
  },
  {
    id: 't2',
    name: 'Frank',
    designation: 'Business Owner',
    text: 'Great pricing and clean installation — highly recommended!',
    rating: 5,
    date: 'May 28, 2026'
  },
  {
    id: 't3',
    name: 'Lawrence',
    designation: 'Property Manager',
    text: 'Great pricing and clean installation — highly recommended!',
    rating: 5,
    date: 'May 10, 2026'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'q1',
    question: 'Is it safe to do my own electrical repairs?',
    answer: 'No, doing your own electrical repairs is highly risky. Beyond immediate risks of shock or electrocution, incorrect wiring is a major cause of home fires. Additionally, most electrical work requires municipal permits and inspections to maintain code compliance and home insurance validity. Hiring a licensed electrician like KMT Electric ensures the work is done safely, legally, and to code.',
    category: 'safety'
  },
  {
    id: 'q2',
    question: 'How do I know if my electrical panel needs an upgrade?',
    answer: 'You should consider an upgrade if you experience: frequent breaker trips, flickering or dimming lights when major appliances turn on, the need to unplug one appliance to use another, clicking/buzzing noises from your electrical panel, or if your property still uses an outdated fuse box or panels from manufacturers with known safety recalls (like Federal Pacific or Zinsco).',
    category: 'service'
  },
  {
    id: 'q3',
    question: 'What should I do in an electrical emergency?',
    answer: 'If you see sparks, smell burning plastic or fishy odors near outlets, hear loud buzzing from the panel, or experience a sudden partial power loss, turn off the main breaker if it is safe to reach, evacuate the area if there is an immediate fire threat, and call us immediately at (614) 816-4982. For active electrical fires, evacuate immediately and call 911.',
    category: 'safety'
  },
  {
    id: 'q4',
    question: 'What are your service hours and service area?',
    answer: 'Our standard service hours are Monday–Friday from 8:00 AM to 6:00 PM. However, we do offer emergency diagnostics and repair calls outside these hours. We are proudly based in Columbus, OH, and service the entire Columbus metropolitan area including surrounding suburbs like Dublin, Westerville, Gahanna, and Grove City.',
    category: 'general'
  },
  {
    id: 'q5',
    question: 'How much does an EV Charger or Generator installation cost?',
    answer: 'Pricing depends on factors like your existing panel capacity, the distance from your panel to the garage/mounting site, and the specific equipment chosen. KMT Electric is dedicated to clear, honest pricing. We provide straightforward, free, zero-obligation upfront estimates before any physical work begins.',
    category: 'pricing'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog1',
    title: '5 Signs Your Home Needs an Electrical Panel Upgrade',
    excerpt: 'Is your home keeping up with your modern power demands? Learn the warning signs that indicate your breaker panel is overloaded and needs a safe upgrade.',
    category: 'Safety & Panel Upgrades',
    date: 'June 24, 2026',
    readTime: '4 min read',
    author: 'Keegan Copas',
    content: `Modern homes have significantly higher electrical loads than they did 20 or 30 years ago. With central AC units, hot tubs, electric vehicles, multiple smart gadgets, and high-performance kitchen appliances, older 100-amp panels are being pushed to their absolute limits. 

Here are the five most common signs that your panel is struggling and requires a professional upgrade to a modern 200-amp service:

1. **Flickering or Dimming Lights**: If your lights briefly flicker or dim when your air conditioner kicks on or when you use a high-draw appliance like a microwave or vacuum, it means your circuits are experiencing a voltage drop due to sudden demand.
2. **Breakers That Frequently Trip**: Circuit breakers are safety devices designed to cut power when a circuit is overloaded. If you find yourself resetting breakers multiple times a month, your electrical load is exceeding what your current panel can handle.
3. **Warm Outlets, Switches, or Breaker Panel**: If any part of your electrical system feels warm to the touch, or you smell a faint "burning wire" odor, turn off the power immediately. This is a critical indicator of loose connections or overloaded wires which can spark a house fire.
4. **Outdated Fuse Boxes**: If your home still uses a fuse box rather than modern circuit breakers, it is highly recommended to upgrade. Fuses are not designed for modern loads, and many insurance companies will refuse coverage or charge premium rates for homes with active fuse boxes.
5. **No Space for Expansion**: If your breaker box is completely full (no empty slots) and you are planning to add an EV charger, central AC, or finish a basement, you'll need to upgrade to a larger panel with more space to split the loads safely.

At KMT Electric, we make the panel upgrade process simple, handling all local permits and utility coordination for a seamless transition. Call us at (614) 816-4982 for a free assessment!`
  },
  {
    id: 'blog2',
    title: 'Level 1 vs. Level 2 EV Chargers: What is Best for You?',
    excerpt: 'Thinking about buying an electric vehicle? Learn the crucial differences between standard outlet charging and a dedicated Level 2 home charging station.',
    category: 'EV Chargers',
    date: 'May 15, 2026',
    readTime: '5 min read',
    author: 'Keegan Copas',
    content: `Purchasing an electric vehicle (EV) is an exciting milestone, but it also brings up an important question: **How are you going to charge it at home?**

Most EVs come with a standard "Level 1" charger that plugs directly into a standard 120-volt household outlet. While convenient, this charging method has major limitations compared to a professionally installed "Level 2" dedicated home charging station. Let's break down the differences to help you decide.

### Level 1 Charging: The Slow and Steady Approach
Level 1 charging uses a standard 120V outlet (the same plug you use for lamps and phone chargers).
* **Speed**: Adds about **3 to 5 miles of range per hour** of charging.
* **Full Charge Time**: It can take 20 to 40+ hours to fully charge a modern long-range EV from empty.
* **Best For**: Drivers with short daily commutes (under 30 miles) who have 10-12 hours of uninterrupted plug-in time every single night.
* **Cost**: Free (no electrical work needed, assuming your outlet is in good condition).

### Level 2 Charging: The Fast, Convenient Standard
Level 2 charging uses a 240-volt circuit—similar to what an electric dryer or oven uses—and requires a dedicated charging station.
* **Speed**: Adds about **25 to 45 miles of range per hour**, depending on the charger's amperage.
* **Full Charge Time**: Fully charges most vehicles in **4 to 8 hours** (easily overnight).
* **Best For**: Almost all EV owners. It provides peace of mind that your vehicle will always be ready for spontaneous trips, road emergencies, or long daily commutes.
* **Cost**: Requires a licensed electrician to install a dedicated 240V circuit and mount the charger safely.

### Why Professional Installation is Crucial for Level 2
A Level 2 charger draws a continuous, heavy electrical load for several hours. This is one of the highest loads a residential electrical system can experience. 
* **Panel Capacity**: We must perform a load calculation to ensure your electrical service can handle the additional 30 to 50 Amps without overloading.
* **Safe Wiring**: Heavy gauge copper wire and a high-quality industrial-grade outlet or a direct hardwire installation are required to prevent overheating and fire risks.
* **Smart Placement**: We work with you to locate the charger in your garage or driveway in a spot that is highly accessible and weather-resistant.

Contact KMT Electric at (614) 816-4982 to get a quote for a professional Level 2 charger installation. We ensure your home is ready for the future of transportation!`
  },
  {
    id: 'blog3',
    title: 'Why Smoke Detectors Expire (And What You Need to Know)',
    excerpt: 'Do you know when your home smoke alarms were manufactured? Learn why these lifesaving devices expire and how to test and maintain them.',
    category: 'Safety',
    date: 'April 02, 2026',
    readTime: '3 min read',
    author: 'Keegan Copas',
    content: `Most homeowners know they need to change the batteries in their smoke detectors once or twice a year. However, very few realize that the **entire smoke detector device itself has an expiration date** and must be replaced every 10 years.

Smoke detectors are your home's first line of defense. Understanding how they work and keeping them updated is one of the easiest ways to protect your family.

### Why Do Smoke Detectors Expire?
The sensors inside smoke alarms degrade over time due to dust, grease, air moisture, and chemical breakdown of the electronic components. 
* **Reduced Sensitivity**: An expired alarm may fail to detect smoke or take significantly longer to trigger, giving your family less time to escape safely.
* **Frequent False Alarms**: As the sensors degrade, they are more prone to malfunctioning and chirping or sounding alarms without any smoke present.
* **The 10-Year Rule**: Both the National Fire Protection Association (NFPA) and manufacturers state that all smoke alarms (both battery-operated and hardwired) should be completely replaced **10 years from their manufacture date** (not from the date of purchase or installation).

### How to Check the Expiration Date
1. Remove the smoke detector from its mounting bracket with a quick twist.
2. Look at the back of the device.
3. Find the **Date of Manufacture** (stamped directly onto the plastic or printed on a label). If it was made more than 10 years ago (or if there is no date label at all), replace it immediately.

### Hardwired vs. Battery Alarms: The KMT Recommendation
Many modern homes feature **hardwired smoke detectors**. These alarms run on your home's main electrical system and have a battery backup in case of power outages.
* **Interconnected Safety**: The greatest benefit of hardwired systems is that they are interconnected. If a smoke detector in the basement senses fire, **all alarms in the entire house will sound** simultaneously. This is a critical safety feature, especially when sleeping.
* **New 10-Year Sealed Batteries**: If you have battery-powered alarms, we highly recommend upgrading to units with **10-year sealed lithium batteries**. You will never have to worry about the annoying midnight "low battery" chirping again!

Our team at KMT Electric can inspect your home's alarms, replace aged units, and install fully interconnected fire and carbon monoxide safety systems. Call us at (614) 816-4982 to schedule your peace of mind.`
  }
];
