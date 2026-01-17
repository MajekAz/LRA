
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants.tsx';

const Terms: React.FC = () => {
  return (
    <div className="pt-24 flex flex-col bg-white">
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6 animate-reveal">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full">
            <span className="text-brand-gold font-black text-[10px] uppercase tracking-ultra">Regulatory Framework</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-normal text-white leading-tight tracking-tighter">
            Terms of <span className="text-brand-gold italic">Service.</span>
          </h1>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-lg font-normal">
            Effective Date: May 20, 2025. These terms govern the professional relationship and digital interaction between LRA Consulting and our esteemed clients.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-brand max-w-none space-y-12">
            
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing this website and engaging with LRA Strategy & Management (referred to as "LRA", "we", "us"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our digital portals.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">2. Professional Services</h2>
              <p className="text-gray-600 leading-relaxed">
                The information provided on this website is for general informational purposes and does not constitute formal professional advice. Formal engagement of LRA’s consultancy services is subject to a separate, signed Master Service Agreement (MSA) or Statement of Work (SOW).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content, including but not limited to the "LRA Strategy" logo, "Values that Differentiate You" tagline, strategic frameworks, insights, and digital design, are the exclusive property of LRA Strategy & Management. Reproduction, distribution, or unauthorized use of our intellectual assets is strictly prohibited under international copyright laws.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">4. User Conduct</h2>
              <p className="text-gray-600 leading-relaxed">
                Users of our portal agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Submit fraudulent information via our "Engagement Portals" or "Briefing Signups".</li>
                <li>Attempt to bypass security protocols or scrape data from our insights library.</li>
                <li>Use our research for competitive industrial espionage or non-ethical purposes.</li>
              </ul>
            </div>

            <div className="space-y-4 text-brand-dark bg-brand-light p-8 rounded-[3rem] border border-gray-100">
              <h2 className="text-2xl font-serif font-bold mb-4 italic">Corporate Liability</h2>
              <p className="text-sm leading-relaxed mb-6">
                LRA Consulting shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our digital platforms. While we strive for surgical precision in our research, market conditions are inherently volatile.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">5. Third-Party Interactions</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to external regulatory bodies or industry partners. LRA is not responsible for the content, privacy policies, or practices of third-party organizations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">6. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms are governed by and construed in accordance with the laws of Sweden. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Gothenburg, Sweden.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">7. Amendments</h2>
              <p className="text-gray-600 leading-relaxed">
                LRA reserves the right to modify these terms at any time to reflect changes in our professional practices or legal requirements. Continued use of the site after such changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                For legal inquiries regarding these terms, please reach out to our legal department:
              </p>
              <div className="mt-6 p-8 rounded-[2.5rem] bg-brand-dark text-white space-y-2">
                <p className="font-bold text-brand-gold">LRA Legal & Governance</p>
                <p className="text-blue-100/60 text-sm">Odinsgatan 13, Gothenburg</p>
                <p className="text-blue-100/60 text-sm">Sweden</p>
                <p className="text-blue-100/60 text-sm">Email: legal@lraconsulting.net</p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-gray-100 text-center">
             <Link to="/" className="inline-block px-12 py-5 bg-brand-gold text-brand-dark font-black rounded-2xl hover:bg-brand-dark hover:text-white transition-all uppercase tracking-ultra text-[11px] shadow-2xl">
               Back to Home
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
