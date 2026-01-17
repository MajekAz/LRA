
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants.tsx';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lra_cookie_consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'all' | 'essential') => {
    localStorage.setItem('lra_cookie_consent', type);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] flex justify-center animate-reveal">
      <div className="max-w-5xl w-full bg-brand-dark/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex items-start gap-6 max-w-2xl text-center md:text-left">
          <div className="hidden md:flex w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-serif text-xl font-bold">Privacy Protocol</h4>
            <p className="text-blue-100/60 text-sm leading-relaxed">
              We use strategic cookies to optimize your experience and analyze our portal's traffic. By clicking "Accept All", you consent to our multidisciplinary data processing as outlined in our <Link to="/privacy" className="text-brand-gold underline hover:text-white transition-colors">Privacy Policy</Link>.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <button 
            onClick={() => handleConsent('essential')}
            className="w-full sm:w-auto px-8 py-4 text-white/60 hover:text-white font-black text-[10px] uppercase tracking-ultra transition-all"
          >
            Reject All
          </button>
          <button 
            onClick={() => handleConsent('all')}
            className="w-full sm:w-auto px-10 py-4 bg-brand-gold text-brand-dark font-black text-[11px] uppercase tracking-ultra rounded-xl hover:bg-white transition-all shadow-xl active:scale-95 whitespace-nowrap"
          >
            Accept All
          </button>
          <button className="md:hidden text-[9px] font-black uppercase tracking-widest text-white/30">
            Manage Preferences
          </button>
        </div>
        
        {/* Close Button for quick dismissal */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-6 text-white/20 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
