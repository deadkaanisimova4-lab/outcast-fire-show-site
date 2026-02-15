import { useEffect, useRef } from 'react';

interface FireDividerProps {
  variant?: 'wave' | 'flame' | 'spark';
  className?: string;
}

const FireDivider = ({ variant = 'wave', className = '' }: FireDividerProps) => {
  if (variant === 'flame') {
    return (
      <div className={`relative h-24 overflow-hidden ${className}`}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <defs>
            <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(348, 83%, 47%)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(16, 100%, 50%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(348, 83%, 47%)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M0,60 C120,20 240,100 360,50 C480,0 600,80 720,40 C840,0 960,90 1080,50 C1200,10 1320,70 1440,40 L1440,120 L0,120 Z" fill="url(#fireGrad)" className="animate-fire-wave" />
          <path d="M0,80 C160,40 320,100 480,60 C640,20 800,90 960,60 C1120,30 1280,80 1440,50 L1440,120 L0,120 Z" fill="url(#fireGrad)" opacity="0.5" className="animate-fire-wave-slow" />
        </svg>
      </div>
    );
  }

  if (variant === 'spark') {
    return (
      <div className={`relative h-16 flex items-center justify-center ${className}`}>
        <div className="w-full max-w-4xl flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative h-20 overflow-hidden ${className}`}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(348, 83%, 47%)" stopOpacity="0.3" />
            <stop offset="30%" stopColor="hsl(45, 100%, 51%)" stopOpacity="0.2" />
            <stop offset="70%" stopColor="hsl(16, 100%, 50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(348, 83%, 47%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" fill="url(#waveGrad)" className="animate-fire-wave" />
      </svg>
    </div>
  );
};

export default FireDivider;
