
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TEAM, ICONS } from '../constants.tsx';

const About: React.FC = () => {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setImageError(prev => ({ ...prev, [name]: true }));
  };

  const getAvatar = (name: string, img: string) => {
    if (imageError[name]) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=004E82&color=F7B516&size=800&bold=true`;
    }
    return img;
  };

  return (
    <div className="pt-24 flex flex-col overflow-x-hidden">
      {/* 1. COMPANY INTRODUCTION - Story, Purpose, Vision */}
      <section className="relative py-12 md:py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Corporate architecture" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-dark"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-reveal text-center">
            <div className="inline-flex items-center space-x-6 justify-center">
              <span className="text-brand-gold font-extrabold uppercase tracking-ultra text-[11px]">The LRA Story</span>
              <span className="h-px w-12 bg-brand-gold/30"></span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-normal text-white leading-[0.85] tracking-tighter">
              Values that <br/>
              <span className="text-brand-gold italic">Differentiate.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto opacity-90">
              Founded on the principle of structural integrity, LRA Strategy & Management is a multidisciplinary advisory hub designed to navigate the complexities of global market entry and operational performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-2 justify-center">
              <div className="space-y-2 text-center sm:text-left">
                <div className="text-brand-gold font-serif text-3xl">Our Vision</div>
                <p className="text-blue-100/60 text-sm max-w-xs mx-auto sm:mx-0">To be the primary catalyst for organizations seeking resilient and creative differentiation in a fast-changing world.</p>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="text-brand-gold font-serif text-3xl">Our Purpose</div>
                <p className="text-blue-100/60 text-sm max-w-xs mx-auto sm:mx-0">To provide the context and meaning for high-impact work that fulfills stakeholder promises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & CORE VALUES - Structured Grid */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 sticky top-32">
              <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Our Conviction</h2>
              <h3 className="text-5xl font-serif font-normal text-brand-dark tracking-tight leading-tight">
                Sustainable Growth through <br/><span className="italic text-brand-blue">Ethical Excellence.</span>
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                We believe that a collaborative society thrives when economic growth is all-inclusive and reasonably sustainable. This conviction guides every briefing, audit, and strategy we deliver.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { t: 'Differentiation', d: 'We avoid generic solutions, focusing instead on the unique structural levers that set your organization apart.', i: ICONS.target },
                { t: 'Structural Integrity', d: 'Growth without a solid foundation is risk. We ensure your fiscal and legal structures are audit-proof.', i: ICONS.shield },
                { t: 'Creative Innovation', d: 'We invest heavily in our colleagues and creativity to unlock non-obvious market solutions.', i: ICONS.activity },
                { t: 'Transparent Lobbying', d: 'Policy engagement conducted with the highest levels of integrity and ethical standards.', i: ICONS.users }
              ].map((value, idx) => (
                <div key={idx} className="p-8 bg-brand-light rounded-[3rem] border border-gray-100 space-y-6 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="text-brand-blue group-hover:text-brand-gold transition-colors">{value.i}</div>
                  <h4 className="text-2xl font-serif font-bold text-brand-dark">{value.t}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP TEAM - Principals & Bios */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">The Strategists</h2>
            <h3 className="text-5xl md:text-7xl font-serif font-normal text-brand-dark tracking-tight">The <span className="italic">Principals.</span></h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">A multidisciplinary team combining decades of experience in finance, law, and international management.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {TEAM.map((member, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl bg-brand-dark/10 mb-6 border-4 border-white">
                  <img 
                    src={getAvatar(member.name, member.img)} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                    alt={member.name} 
                    onError={() => handleImageError(member.name)}
                  />
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-serif font-bold text-brand-dark">{member.name}</h4>
                  <p className="text-brand-gold font-black text-[10px] uppercase tracking-ultra">{member.role}</p>
                  <p className="text-gray-500 text-sm pt-2 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH - Methodology */}
      <section className="py-16 bg-brand-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">The LRA Framework</h2>
                <h3 className="text-5xl md:text-7xl font-serif font-normal leading-tight tracking-tight">The Architecture of <span className="italic">Execution.</span></h3>
              </div>
              <div className="space-y-8">
                {[
                  { n: '01', t: 'Structural Discovery', d: 'We begin with a clinical audit of your current legal, fiscal, and operational status to map hidden risks.' },
                  { n: '02', t: 'Strategic Mapping', d: 'Designing a roadmap that aligns organizational goals with complex market realities and regulatory landscapes.' },
                  { n: '03', t: 'Principal-Led Deployment', d: 'Our multidisciplinary teams work alongside you to execute the strategy with precision and agility.' },
                  { n: '04', t: 'Outcome Optimization', d: 'Continuous monitoring and iterative refinement to ensure long-term sustainable differentiation.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="text-5xl font-serif text-white/10 group-hover:text-brand-gold transition-colors duration-500 shrink-0">{step.n}</div>
                    <div className="space-y-2">
                      <h5 className="text-xl font-bold font-serif">{step.t}</h5>
                      <p className="text-blue-100/50 leading-relaxed max-w-md">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
               <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 relative">
                 <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-40" alt="Strategy Planning" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
               </div>
               <div className="absolute -bottom-6 -right-6 bg-brand-gold p-10 rounded-[3rem] shadow-2xl text-brand-dark max-w-xs">
                  <p className="text-xl font-serif italic">"We don't solve problems; we redefine them for better outcomes."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MID-PAGE CTA - Strategic Engagement */}
      <section className="py-16 bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-gold rounded-[4rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="space-y-4 text-center lg:text-left relative z-10 max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-serif font-normal text-brand-dark tracking-tight leading-tight">Ready to redefine your <br/><span className="italic">organizational trajectory?</span></h3>
              <p className="text-brand-dark/70 text-lg font-medium">Partner with our principals for a deep structural transformation.</p>
            </div>
            <Link 
              to="/contact" 
              className="px-12 py-5 bg-brand-dark text-white font-black rounded-2xl hover:bg-brand-blue transition-all uppercase tracking-ultra text-[12px] shadow-2xl relative z-10 whitespace-nowrap active:scale-95"
            >
              Consult with a Principal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
