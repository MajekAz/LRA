
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants.tsx';

const SuccessContact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-brand-light px-6">
      <div className="max-w-2xl w-full bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-gray-100 text-center space-y-8 animate-reveal">
        <div className="w-24 h-24 bg-brand-gold text-brand-dark rounded-full flex items-center justify-center mx-auto shadow-2xl ring-[12px] ring-brand-gold/10">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <div className="space-y-4">
          <div className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Dossier Received</div>
          <h1 className="text-5xl font-serif font-normal text-brand-dark tracking-tight">Transmission <span className="italic">Successful.</span></h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Your strategic inquiry has been logged into our secure triage system. A Managing Principal will review your parameters and reach out within one business cycle.
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-10 py-5 bg-brand-dark text-white font-black rounded-2xl hover:bg-brand-blue transition-all uppercase tracking-ultra text-[11px]"
          >
            Return to Portal
          </Link>
          <Link 
            to="/blog" 
            className="px-10 py-5 border-2 border-brand-light text-brand-dark font-black rounded-2xl hover:bg-brand-light transition-all uppercase tracking-ultra text-[11px]"
          >
            Explore Insights
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessContact;
