
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants.tsx';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 flex flex-col bg-white">
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6 animate-reveal">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full">
            <span className="text-brand-gold font-black text-[10px] uppercase tracking-ultra">Legal & Compliance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-normal text-white leading-tight tracking-tighter">
            Privacy <span className="text-brand-gold italic">Policy.</span>
          </h1>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-lg font-normal">
            Last Updated: May 20, 2025. Your trust is our most valuable asset. Learn how LRA Consulting protects and manages your strategic data.
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
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">1. Data We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                As a professional services firm, we collect information that allows us to deliver high-impact consultancy. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Identity Data:</strong> Name, title, and professional credentials.</li>
                <li><strong>Contact Data:</strong> Work email, phone number, and physical office address.</li>
                <li><strong>Professional Data:</strong> Company name, industry sector, and specific structural challenges described in our contact forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and interaction data via our cookies.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">2. How Data is Used</h2>
              <p className="text-gray-600 leading-relaxed">
                LRA Consulting processes your data solely for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>To facilitate principal-led briefings and strategic audits.</li>
                <li>To deliver our weekly "Strategic Insights" newsletter to subscribers.</li>
                <li>To manage and optimize our website performance using analytics tools.</li>
                <li>To comply with international fiscal and legal reporting obligations.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">3. Legal Basis for Processing</h2>
              <p className="text-gray-600 leading-relaxed">
                We process data under the following GDPR legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Consent:</strong> For newsletter subscriptions and contact form inquiries.</li>
                <li><strong>Contract:</strong> Necessary for the performance of a consultancy agreement.</li>
                <li><strong>Legitimate Interests:</strong> To improve our service offerings and ensure the security of our digital portals.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">4. Data Storage & Security</h2>
              <p className="text-gray-600 leading-relaxed">
                Strategic data is stored on encrypted, secure servers located within the European Economic Area (EEA). We retain data only for as long as necessary to fulfill the purposes outlined or as required by Swedish and international law. Once the retention period expires, data is securely deleted or anonymized.
              </p>
            </div>

            <div className="space-y-4 text-brand-dark bg-brand-light p-8 rounded-[3rem] border border-gray-100">
              <h2 className="text-2xl font-serif font-bold mb-4 italic">GDPR & Your Rights</h2>
              <p className="text-sm leading-relaxed mb-6">
                Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, or erase your personal data. You may also object to processing or request data portability.
              </p>
              <Link to="/contact" className="text-xs font-black uppercase tracking-ultra text-brand-blue hover:text-brand-gold transition-colors flex items-center gap-2">
                Exercise Your Rights {ICONS.chevronRight}
              </Link>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">5. Third-Party Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your strategic data. Sharing only occurs with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Service Providers:</strong> Cloud storage (e.g., AWS), email delivery services, and professional analytics tools.</li>
                <li><strong>Legal Authorities:</strong> When required by law to prevent fraud or comply with regulatory audits.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website uses "cookies"—small text files placed on your device. These help us understand which insights are most valuable to our audience. You can manage your cookie preferences through your browser settings at any time.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">7. Children’s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are strictly designed for professional enterprises and adults. We do not knowingly collect information from individuals under the age of 18.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-brand-dark border-b border-gray-100 pb-4">8. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions regarding this policy or our data practices, please contact our Data Protection Officer:
              </p>
              <div className="mt-6 p-8 rounded-[2.5rem] bg-brand-dark text-white space-y-2">
                <p className="font-bold text-brand-gold">LRA Strategy & Management</p>
                <p className="text-blue-100/60 text-sm">Odinsgatan 13, Gothenburg</p>
                <p className="text-blue-100/60 text-sm">SE-411 03, Sweden</p>
                <p className="text-blue-100/60 text-sm">Email: compliance@lraconsulting.net</p>
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

      {/* FOOTER CTA */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-brand-dark">Confidentiality is our foundation.</h2>
          <p className="text-gray-500">Every engagement begins with a mutual non-disclosure agreement to protect your competitive edge.</p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
