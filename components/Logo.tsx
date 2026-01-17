
import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = "", showTagline = true }) => {
  const blueColor = variant === 'light' ? '#FFFFFF' : '#004E82';
  const goldColor = '#F7B516';
  const textColor = variant === 'light' ? '#FFFFFF' : '#004E82';

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg width="50" height="34" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path 
          d="M30 10L55 35L30 60L5 35L30 10Z" 
          stroke={blueColor} 
          strokeWidth="10" 
          fill="none" 
        />
        <path 
          d="M50 10L75 35L50 60L25 35L50 10Z" 
          stroke={goldColor} 
          strokeWidth="10" 
          fill="none" 
        />
        <path 
          d="M70 10L95 35L70 60L45 35L70 10Z" 
          stroke={blueColor} 
          strokeWidth="10" 
          fill="none" 
        />
      </svg>
      <div className="flex flex-col">
        <span 
          className="text-xl font-black tracking-[0.15em] leading-none font-sans uppercase" 
          style={{ color: textColor }}
        >
          LRA Strategy
        </span>
        {showTagline && (
          <span 
            className="text-[9px] font-extrabold tracking-[0.2em] font-sans opacity-60 uppercase mt-1.5" 
            style={{ color: textColor }}
          >
            Management Consulting
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
