
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, ICONS } from '../constants.tsx';

const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What is LRA's typical engagement model?", a: "We operate on a principal-led model, meaning your project is overseen directly by a Managing Partner. We offer both project-based mandates for specific goals and long-term advisory retainers for continuous strategic support." },
    { q: "How do you ensure confidentiality in sensitive market entries?", a: "Data security and legal privilege are at the core of our operations. We utilize encrypted document management systems and strict NDAs to protect your intellectual property and strategic intentions." },
    { q: "Can you assist with cross-border tax compliance?", a: "Yes. Our fiscal advisory team specializes in international tax frameworks, ensuring your operations remain compliant across multiple jurisdictions while optimizing for efficiency." },
    { q: "What industries do you specialize in?", a: "Our expertise spans high-growth tech, logistics and supply chain, energy, and international trade. We are particularly adept at helping firms navigate complex regulatory environments." },
    { q: "How do you measure the success of a consulting mandate?", a: "Before any engagement, we define clear KPIs—whether it's a 15% reduction in operational friction, successful entity registration within a set timeframe, or a comprehensive risk map delivery." },
    { q: "Do you provide on-site support for international setups?", a: "Yes, we have a physical presence in Gothenburg and strategic hubs in London and New York, allowing us to provide both remote strategy and on-the-ground operational support." },
    { q: "What makes LRA different from 'Big Four' firms?", a: "We provide high-touch, multidisciplinary expertise without the bureaucratic overhead. Our advice is agile, creative, and delivered directly by seasoned principals, not junior associates." },
    { q: "How can we initiate a strategic audit?", a: "You can book a preliminary briefing through our contact portal. We will conduct a high-level assessment of your current challenges and provide a tailored proposal within 48 hours." }
  ];

  return (
    <div className="pt-24 flex flex-col overflow-x-hidden">
      {/* SECTION 1: SERVICES OVERVIEW - High-level positioning */}
      <section className="relative py-20 md:py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Corporate strategy meeting" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8 animate-reveal">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
            <span className="text-brand-gold font-black text-[10px] uppercase tracking-ultra">Our Capabilities</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white leading-[0.85] tracking-tighter">
            Architecting <br/>
            <span className="text-brand-gold italic">Enduring Value.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed opacity-80 text-balance">
            LRA delivers a multidisciplinary framework designed to navigate the complexities of global business. From structural discovery to market dominance, we build the foundations of your success.
          </p>
        </div>
      </section>

      {/* SECTION 2: SERVICE CATEGORY 1 - Organizational Architecture */}
      <section id="management" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Strategy & Growth</h2>
              <h3 className="text-5xl font-serif font-normal text-brand-dark leading-tight tracking-tight">
                Organizational <br/><span className="italic text-brand-blue">Architecture.</span>
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                We transform organizational potential into high-performance reality. Our consultants analyze your internal structures to eliminate friction and align leadership with global market opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { t: "Management Frameworks", d: "Custom operational blueprints for scaling teams." },
                  { t: "Growth Strategy", d: "Data-backed roadmaps for revenue and market expansion." },
                  { t: "Leadership Alignment", d: "Ensuring stakeholders move in singular strategic direction." },
                  { t: "Operational Audit", d: "Clinical assessment of internal workflows and efficiency." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="font-bold text-brand-dark font-serif text-xl">{item.t}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center text-brand-blue font-black text-[11px] uppercase tracking-ultra hover:text-brand-gold transition-colors pt-6">
                Optimize My Organization <span className="ml-4">{ICONS.chevronRight}</span>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Strategic Planning" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICE CATEGORY 2 - The Regulatory Shield */}
      <section id="compliance" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" alt="Legal and Compliance" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Governance & Compliance</h2>
              <h3 className="text-5xl font-serif font-normal text-brand-dark leading-tight tracking-tight">
                The Regulatory <br/><span className="italic text-brand-blue">Shield.</span>
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Protecting your assets through meticulous fiscal planning and legal adherence. We navigate the bureaucratic hurdles of global expansion so you can focus on core innovation.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "International Tax Optimization & Compliance",
                  "Cross-Border Legal Framework Advisory",
                  "Digital Document Control & Archiving",
                  "Entity Incorporation & Corporate Governance"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-brand-dark font-medium">
                    <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xs">✓</span>
                    {text}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center py-5 px-10 bg-brand-dark text-white font-black text-[11px] uppercase tracking-ultra rounded-2xl hover:bg-brand-blue transition-all shadow-xl active:scale-95">
                Protect My Assets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICE CATEGORY 3 - Intelligence & Impact */}
      <section id="risk" className="py-24 bg-brand-dark text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Intelligence & Risk</h2>
                <h3 className="text-5xl font-serif font-normal leading-tight tracking-tight">
                  Market <span className="italic">Foresight.</span>
                </h3>
              </div>
              <p className="text-blue-100/60 text-lg leading-relaxed max-w-xl">
                Information is not insight. We provide deep-layer intelligence on market trends, competitor movements, and geopolitical risks, allowing for precision market entry.
              </p>
              <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-10">
                <div>
                  <div className="text-4xl font-serif font-bold text-brand-gold">98%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-blue-100/40">Risk Mitigation Success</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold text-brand-gold">500+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-blue-100/40">Global Market Briefings</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { t: "Market Mapping", i: "target", d: "Identifying high-potential entry points in volatile sectors." },
                { t: "Risk Analysis", i: "shield", d: "Mapping political, financial, and structural threats." },
                { t: "Ethical Lobbying", i: "users", d: "Bridging the gap between private interest and public policy." },
                { t: "Feasibility Studies", i: "activity", d: "Quantifying the viability of new business units." }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 space-y-4 hover:border-brand-gold/50 transition-all group">
                  <div className="text-brand-gold group-hover:scale-110 transition-transform duration-500">
                    {ICONS[card.i as keyof typeof ICONS]}
                  </div>
                  <h4 className="text-xl font-bold font-serif">{card.t}</h4>
                  <p className="text-blue-100/40 text-sm leading-relaxed">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRY EXPERTISE - Sectors served */}
      <section id="international" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Vertical Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-serif font-normal text-brand-dark tracking-tighter">Sectors we <span className="italic text-brand-blue">Master.</span></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {[
              { n: "Fintech & Banking", img: "https://images.unsplash.com/photo-1550565118-3d1428df4a7f?auto=format&fit=crop&q=80&w=400" },
              { n: "Logistics & Trade", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" },
              { n: "Energy & Infrastructure", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400" },
              { n: "Public Sector", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400" },
              { n: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" }
            ].map((sector, i) => (
              <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100">
                <img src={sector.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={sector.n} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-serif font-bold text-lg leading-tight">{sector.n}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ SECTION - Trust and Detail */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Protocol & Clarity</h2>
            <h3 className="text-5xl font-serif font-normal text-brand-dark tracking-tight">Strategic <span className="italic">Insights FAQ.</span></h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden transition-all duration-500">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className={`text-xl font-bold font-serif transition-colors ${openFaq === i ? 'text-brand-gold' : 'text-brand-dark group-hover:text-brand-blue'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all ${openFaq === i ? 'rotate-180 bg-brand-gold border-brand-gold text-brand-dark' : 'text-gray-400 group-hover:border-brand-blue group-hover:text-brand-blue'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <p className="text-gray-500 text-lg leading-relaxed font-normal opacity-90 border-t border-gray-50 pt-6">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center pt-8">
            <p className="text-gray-400 font-medium mb-8">Have a more specific structural challenge?</p>
            <Link to="/contact" className="px-14 py-6 bg-brand-gold text-brand-dark font-black rounded-2xl hover:bg-brand-dark hover:text-white transition-all uppercase tracking-ultra text-[12px] shadow-2xl active:scale-95">
              Initiate Principal Briefing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
