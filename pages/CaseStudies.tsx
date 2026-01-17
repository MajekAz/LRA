
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, ICONS } from '../constants.tsx';

const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [subStatus, setSubStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const categories = ['All', 'Market Strategy', 'Operations', 'Digital', 'Marketing'];

  const filteredCases = activeFilter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.category === activeFilter);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('subscribe.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setSubStatus('success');
      } else {
        setSubStatus('error');
      }
    } catch (err) {
      setSubStatus('error');
    }
  };

  return (
    <div className="pt-24 min-h-screen flex flex-col">
      {/* 1. Hero Section */}
      <section className="py-12 md:py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal leading-[0.85] tracking-tighter">Proven <br/><span className="text-brand-gold italic">Impact.</span></h1>
          <p className="text-lg md:text-xl text-blue-100/60 font-normal max-w-2xl mx-auto leading-relaxed text-balance">Discover how LRA Consulting transforms ambitious goals into hard metrics across demanding industries.</p>
        </div>
      </section>

      {/* 2. Filter Section */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 flex justify-center space-x-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all whitespace-nowrap ${
                activeFilter === cat 
                ? 'bg-brand-gold text-brand-dark shadow-xl scale-105' 
                : 'bg-brand-light text-brand-dark hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Grid Section */}
      <section className="py-12 md:py-16 bg-brand-light flex-grow">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12">
          {filteredCases.map((c) => (
            <div key={c.id} className="group bg-white rounded-[4rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col border border-gray-100">
              <div className="h-[300px] md:h-[350px] overflow-hidden relative">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 px-5 py-2 bg-brand-gold text-brand-dark font-extrabold text-[11px] uppercase tracking-ultra rounded-full shadow-2xl ring-4 ring-white/10 backdrop-blur-sm">
                  {c.category}
                </div>
              </div>
              <div className="p-8 md:p-12 space-y-8 flex-grow flex flex-col">
                <div className="space-y-3">
                  <div className="text-brand-blue font-black text-[11px] uppercase tracking-ultra">{c.client}</div>
                  <h3 className="text-3xl font-serif font-normal text-brand-dark leading-tight group-hover:text-brand-blue transition-colors tracking-tight">{c.title}</h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed flex-grow font-normal opacity-90">{c.result}</p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  {c.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-3xl font-serif font-bold text-brand-blue group-hover:text-brand-gold transition-colors tracking-tighter">{m.value}</div>
                      <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Methodology Quote */}
      <section className="py-12 md:py-16 bg-white">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h3 className="text-3xl md:text-5xl font-serif font-normal text-brand-dark leading-tight italic tracking-tight text-balance">
              "We don't sell hours. We sell structural transformations that outlive our presence."
            </h3>
            <div className="inline-flex items-center space-x-6">
              <span className="h-px w-10 bg-brand-gold"></span>
              <span className="font-black text-[11px] uppercase tracking-ultra text-brand-gold">The LRA Standard</span>
              <span className="h-px w-10 bg-brand-gold"></span>
            </div>
         </div>
      </section>

      {/* 5. Briefing Signup Section */}
      <section className="py-12 md:py-16 bg-brand-blue text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
               <h3 className="text-3xl md:text-5xl font-serif font-normal tracking-tight">The Strategic Briefing</h3>
               <p className="text-blue-100/70 text-lg font-normal">Join 12,000+ executives receiving our weekly briefing on market disruption.</p>
            </div>
            <div className="w-full max-w-md">
               {subStatus === 'success' ? (
                 <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 animate-reveal">
                    <p className="text-brand-gold font-bold font-serif text-lg leading-tight">Registration Complete.</p>
                    <p className="text-blue-100 mt-1 text-sm">Our insights will be delivered to your inbox shortly.</p>
                 </div>
               ) : (
                 <div className="space-y-4">
                  <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubscribe}>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Work Email" 
                      className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 outline-none focus:border-brand-gold transition-all text-[15px]" 
                    />
                    <button 
                      disabled={subStatus === 'submitting'}
                      className={`px-8 py-4 text-brand-dark font-extrabold rounded-2xl transition-all text-[11px] uppercase tracking-widest shadow-xl active:scale-95 whitespace-nowrap ${subStatus === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-gold hover:bg-white'}`}
                    >
                      {subStatus === 'submitting' ? 'Processing...' : 'Subscribe'}
                    </button>
                  </form>
                  {subStatus === 'error' && (
                    <p className="text-red-300 font-bold text-[10px] uppercase tracking-widest text-center">Submission error. Check email format.</p>
                  )}
                 </div>
               )}
            </div>
         </div>
         <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-16 md:py-24 bg-white">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h3 className="text-5xl md:text-7xl font-serif font-normal leading-[0.9] tracking-tighter">Ready to be our next <br/><span className="italic text-brand-blue">success story?</span></h3>
            <Link to="/contact" className="inline-block px-12 py-5 bg-brand-gold text-brand-dark font-extrabold rounded-2xl hover:bg-brand-dark hover:text-white transition-all uppercase tracking-ultra text-[13px] shadow-2xl active:scale-95">
               Consult with a Principal
            </Link>
         </div>
      </section>
    </div>
  );
};

export default CaseStudies;
