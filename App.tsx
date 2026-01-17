
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import CookieBanner from './components/CookieBanner.tsx';
import WhatsAppChat from './components/WhatsAppChat.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import SuccessContact from './pages/SuccessContact.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import Blog from './pages/Blog.tsx';
import BlogCategory from './pages/BlogCategory.tsx';
import BlogPost from './pages/BlogPost.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';

/**
 * Handles scrolling logic for the app.
 * Automatically scrolls to the top on page changes,
 * or scrolls to a specific ID if a hash is present in the URL.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollManager />
      <div className="min-h-screen flex flex-col font-sans selection:bg-brand-gold selection:text-brand-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/category/:categoryName" element={<BlogCategory />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success-contact" element={<SuccessContact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <WhatsAppChat />
      </div>
    </HashRouter>
  );
};

export default App;
