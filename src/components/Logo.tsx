/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'light' | 'dark';
}

export const LogoIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} text-red-600 transition-colors duration-300`}
    >
      {/* Red House Outline */}
      <path
        d="M 18,41 L 50,11 L 82,41 M 24,37 V 85 H 50 M 80,44 V 85 H 68"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Lightbulb outline in the center */}
      <path
        d="M 50,31 C 41,31 37.5,38 37.5,45 C 37.5,51.5 42,55.5 44,59.5 C 44.5,61 44.5,65 44.5,67.5 H 55.5 C 55.5,65 55.5,61 56,59.5 C 58,55.5 62.5,51.5 62.5,45 C 62.5,38 59,31 50,31 Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Screw Thread Base of Lightbulb */}
      <path
        d="M 44.5,72.5 H 55.5 M 46.5,77 H 53.5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Lightning Bolt inside Lightbulb */}
      <path
        d="M 52,38 L 44.5,48.5 H 50 L 47.5,57.5 L 56,47 H 50.5 L 52,38 Z"
        fill="currentColor"
      />

      {/* Electrical Wire & Plug connecting to the base/wall */}
      <path
        d="M 50,81 C 55,81 60,81 61.5,77.5 C 62.5,75 60.5,72 65,72 M 65,68.5 V 75.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Plug Prongs */}
      <path
        d="M 68,70 H 73 M 68,74 H 73"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, variant = 'light' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoIcon className="w-10 h-10 shrink-0" />
      {!iconOnly && (
        <div className="flex flex-col">
          <span
            className={`font-sans font-bold tracking-wider text-xl leading-none uppercase ${
              variant === 'light' ? 'text-zinc-900' : 'text-white'
            }`}
            style={{ fontFamily: '"Outfit", "Space Grotesk", "Inter", sans-serif' }}
          >
            KMT Electric
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-red-600 mt-1">
            Professional & Trusted
          </span>
        </div>
      )}
    </div>
  );
};
