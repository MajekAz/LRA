
import React from 'react';
import { ICONS } from '../constants.tsx';
import Logo from './Logo.tsx';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="space-y-6">
          <div className="flex flex-col">
            <Logo variant="light" />
          </div>
          <p className="text-blue-100/60 max-w-xs text-sm leading-relaxed">
            Empowering visionary enterprises with strategic clarity and operational excellence. 
            Trusted by global leaders to deliver values that differentiate.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-brand-gold">Explore</h4>
          <ul className="space-y-4 text-blue-100/60 text-sm">
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Our Legacy</Link></li>
            <li><Link to="/services" className="hover:text-brand-gold transition-colors">Strategic Capabilities</Link></li>
            <li><Link to="/cases" className="hover:text-brand-gold transition-colors">Success Briefings</Link></li>
            <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Insights & Analysis</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Our Principals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-brand-gold">Expertise</h4>
          <ul className="space-y-4 text-blue-100/60 text-sm">
            <li><Link to="/services#management" className="hover:text-brand-gold transition-colors">Global Management</Link></li>
            <li><Link to="/services#compliance" className="hover:text-brand-gold transition-colors">Tax & Legal Compliance</Link></li>
            <li><Link to="/services#risk" className="hover:text-brand-gold transition-colors">Risk & Policy Mapping</Link></li>
            <li><Link to="/services#international" className="hover:text-brand-gold transition-colors">Business Internationalization</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-brand-gold">Contact</h4>
          <ul className="space-y-4 text-blue-100/60 text-sm">
            <li className="flex items-center space-x-3">
              <span className="text-brand-gold">{ICONS.mail}</span>
              <span>info@lraconsulting.net</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-brand-gold">{ICONS.phone}</span>
              <span>+46 (0) 317 880 351</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-brand-gold">{ICONS.mapPin}</span>
              <span>Gothenburg • London</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-blue-100/30">
        <p>© 2025 LRA Consulting. Values that Differentiate You.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
