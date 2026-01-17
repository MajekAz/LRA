
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.tsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/cases' },
    { name: 'Insights', href: '/blog' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo 
            variant={isScrolled ? 'dark' : (isHome ? 'light' : 'dark')} 
            showTagline={isScrolled} 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:text-brand-gold relative group ${isScrolled ? 'text-brand-blue' : (isHome ? 'text-white' : 'text-brand-blue')}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-10 py-4 bg-brand-gold text-brand-dark font-black text-[11px] uppercase tracking-[0.2em] rounded-xl hover:bg-brand-dark hover:text-white transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-gold/20 active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 rounded-xl bg-white/5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className={`w-6 h-6 ${isScrolled ? 'text-brand-blue' : (isHome ? 'text-white' : 'text-brand-blue')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-2xl shadow-2xl border-t border-gray-100 flex flex-col p-10 space-y-6 animate-reveal">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif font-bold text-brand-blue hover:text-brand-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-5 bg-brand-gold text-brand-dark text-center font-black rounded-2xl uppercase tracking-[0.3em] text-xs shadow-2xl active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
