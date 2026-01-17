
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, CASE_STUDIES, ICONS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION - Bold & High-Converting */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-8 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" 
            alt="Strategic command center" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/95 to-brand-dark"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center animate-reveal">
            <div className="mb-6 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.4em]">Strategic Advisory for Global Leaders</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-normal text-white leading-[0.85] tracking-tighter text-balance mb-8">
              Architecting <br/>
              <span className="text-brand-gold italic">Market Leadership.</span>
            </h1>
            
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed font-normal text-balance">
                Precision-engineered consulting for enterprises navigating complex global markets. We turn structural challenges into enduring competitive advantages.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact" 
                className="group relative overflow-hidden w-full sm:w-auto px-12 py-5 bg-brand-gold text-brand-dark font-black rounded-xl text-[12px] uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-brand-gold/30 active:scale-95"
              >
                <span className="relative z-10">Book Strategy Session</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-12 py-5 border-2 border-white/20 text-white font-black rounded-xl text-[12px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3 active:scale-95"
              >
                View Capabilities
                <span className="opacity-70 group-hover:translate-x-1 transition-transform">{ICONS.chevronRight}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE CONSULTANCY - Credibility & Mission */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">The LRA Pedigree</h2>
              <h3 className="text-5xl font-serif font-normal text-brand-dark leading-tight">Values that <br/><span className="italic text-brand-blue">Differentiate.</span></h3>
            </div>
            <div className="space-y-6 text-gray-600 text-lg font-normal leading-relaxed">
              <p>
                Founded on the principle of structural integrity, LRA Consulting is a multidisciplinary advisory firm headquartered in Gothenburg, serving as a strategic hub for global market entry and operational excellence.
              </p>
              <p className="border-l-4 border-brand-gold pl-8 italic text-brand-blue/80 py-2">
                "Our purpose is simple: to deliver values that differentiate our clients and create a creative, resilient working world."
              </p>
            </div>
            <div className="flex gap-12 pt-2">
              <div className="space-y-1">
                <div className="text-brand-dark font-black text-xs uppercase tracking-widest">Global Reach</div>
                <div className="text-gray-400 text-sm">EU • UK • USA • APAC</div>
              </div>
              <div className="space-y-1">
                <div className="text-brand-dark font-black text-xs uppercase tracking-widest">Certifications</div>
                <div className="text-gray-400 text-sm">ISO 9001 • Global Compliance</div>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center text-brand-blue font-black text-[11px] uppercase tracking-ultra hover:text-brand-gold transition-colors">
              Our Legacy & Team <span className="ml-4">{ICONS.chevronRight}</span>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture of success" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW - 6 Service Cards */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Strategic Suite</h2>
            <h3 className="text-5xl font-serif font-normal text-brand-dark tracking-tight">Core <span className="italic">Capabilities.</span></h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((s) => (
              <div key={s.id} className="group p-10 bg-white rounded-[3rem] border border-gray-100 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[380px]">
                <div className="w-16 h-16 bg-brand-light text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                  {ICONS[s.icon as keyof typeof ICONS] || ICONS.target}
                </div>
                <div className="flex-grow space-y-4">
                  <h4 className="text-2xl font-bold text-brand-dark font-serif group-hover:text-brand-blue transition-colors leading-tight">{s.title}</h4>
                  <p className="text-gray-500 text-[16px] leading-relaxed font-normal">{s.description}</p>
                </div>
                <div className="pt-6 border-t border-gray-50 mt-6">
                  <Link to="/services" className="inline-flex items-center text-brand-blue font-black text-[10px] uppercase tracking-ultra hover:text-brand-gold transition-colors">
                    Explore Details <span className="ml-3 transition-transform group-hover:translate-x-2">{ICONS.chevronRight}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES & SUCCESS METRICS - Proof of Impact */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Hard Outcomes</h2>
              <h3 className="text-5xl md:text-6xl font-serif font-normal tracking-tight">Proven <span className="italic">Transformations.</span></h3>
            </div>
            <div className="grid grid-cols-2 gap-12 border-l border-white/10 pl-16 hidden lg:grid">
               <div>
                  <div className="text-4xl font-serif font-bold text-brand-gold">$5.2B+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-blue-100/40">Valuation Impact</div>
               </div>
               <div>
                  <div className="text-4xl font-serif font-bold text-brand-gold">15+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-blue-100/40">Industry Sectors</div>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {CASE_STUDIES.map((c) => (
              <div key={c.id} className="group bg-white/5 backdrop-blur-md rounded-[3rem] overflow-hidden border border-white/10 hover:border-brand-gold/30 transition-all duration-700">
                <div className="h-[250px] overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                </div>
                <div className="p-10 space-y-6">
                  <div className="space-y-3">
                    <div className="text-brand-gold font-black text-[10px] uppercase tracking-ultra">{c.category}</div>
                    <h4 className="text-2xl font-serif font-normal leading-tight">{c.title}</h4>
                  </div>
                  <div className="flex justify-between items-end border-t border-white/5 pt-6">
                    {c.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-xl font-serif font-bold text-brand-gold">{m.value}</div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-blue-100/40">{m.label}</div>
                      </div>
                    ))}
                    <Link to="/cases" className="text-[10px] font-black uppercase tracking-ultra text-white hover:text-brand-gold transition-colors">Analysis {ICONS.chevronRight}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US - Differentiators & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 space-y-6">
              <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">The Differentiator</h2>
              <h3 className="text-5xl font-serif font-normal text-brand-dark leading-[0.9] tracking-tighter">Why Global Leaders <span className="italic">Choose LRA.</span></h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Strategy is common. Execution is rare. At LRA, we close the gap with multidisciplinary principal-led advisory.
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-10">
              {[
                { t: 'Multidisciplinary Expertise', d: 'Our principals bring cross-functional experience in finance, law, policy, and technology.' },
                { t: 'Structural Integrity', d: 'We analyze your organization from the foundation up, ensuring growth is built on solid ground.' },
                { t: 'Global Connectivity', d: 'Headquartered in Sweden with access to major financial hubs, we bridge the gap across continents.' },
                { t: 'Ethical Standards', d: 'Lobbying and policy engagement conducted with the highest levels of transparency and integrity.' }
              ].map((item, i) => (
                <div key={i} className="space-y-3 relative group">
                  <div className="w-12 h-px bg-brand-gold group-hover:w-full transition-all duration-500"></div>
                  <h4 className="text-2xl font-serif font-bold text-brand-dark">{item.t}</h4>
                  <p className="text-gray-500 leading-relaxed font-normal">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION - Bold Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-4xl mx-auto space-y-10 relative z-10">
              <h2 className="text-5xl md:text-7xl font-serif font-normal leading-[0.85] tracking-tighter">Ready to <br/><span className="text-brand-gold italic">Architect your Future?</span></h2>
              <p className="text-xl md:text-2xl text-blue-100/70 font-normal leading-relaxed text-balance">
                Initiate a strategic briefing with our principals and discover the values that will differentiate your enterprise.
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-12 py-5 bg-brand-gold text-brand-dark font-black rounded-2xl hover:bg-white transition-all uppercase tracking-ultra text-[14px] shadow-3xl active:scale-95"
              >
                Get Strategic Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
