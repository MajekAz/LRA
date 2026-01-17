
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ICONS, BLOG_POSTS } from '../constants.tsx';

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [subStatus, setSubStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const categories = ['All', 'Strategy', 'Operations', 'Leadership', 'Finance'];

  const filteredPosts = activeFilter === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeFilter);

  const featuredPosts = BLOG_POSTS.filter(post => post.featured);

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

  const handleFilterClick = (cat: string) => {
    if (cat === 'All') {
      setActiveFilter('All');
    } else {
      navigate(`/blog/category/${cat}`);
    }
  };

  return (
    <div className="pt-24 flex flex-col overflow-x-hidden">
      {/* SECTION 1: BLOG HERO */}
      <section className="relative py-20 md:py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Corporate perspective" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/50 to-brand-dark"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8 animate-reveal">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-brand-gold font-black text-[10px] uppercase tracking-ultra">Thought Leadership</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white leading-[0.85] tracking-tighter">
            Strategic <br/>
            <span className="text-brand-gold italic">Insights.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed opacity-80 text-balance">
            Clinical analysis and multidisciplinary foresight to help global leaders navigate market disruption and structural change.
          </p>
        </div>
      </section>

      {/* SECTION 2: FEATURED ARTICLES */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Curated Briefings</h2>
              <h3 className="text-5xl font-serif font-normal text-brand-dark tracking-tight">The <span className="italic">Principal's Choice.</span></h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {featuredPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer block">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl mb-8 border border-gray-50">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={post.title} />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-brand-dark font-black text-[9px] uppercase tracking-widest shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] font-black uppercase tracking-ultra text-gray-400">{post.date} • By {post.author}</div>
                  <h4 className="text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-blue transition-colors leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 text-base leading-relaxed line-clamp-2 font-normal opacity-90">{post.summary}</p>
                  <div className="pt-4">
                    <span className="inline-flex items-center text-brand-blue font-black text-[10px] uppercase tracking-ultra group-hover:text-brand-gold transition-colors">
                      Read Analysis <span className="ml-3 group-hover:translate-x-2 transition-transform">{ICONS.chevronRight}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CATEGORY FILTERS */}
      <section className="py-10 bg-brand-light sticky top-20 z-30 shadow-sm overflow-x-auto no-scrollbar border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-center space-x-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-8 py-3 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all whitespace-nowrap ${
                activeFilter === cat 
                ? 'bg-brand-gold text-brand-dark shadow-xl scale-105' 
                : 'bg-white text-brand-dark border border-gray-100 hover:bg-brand-gold/10'
              }`}
            >
              {cat === 'All' ? 'Latest' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 4: LATEST INSIGHTS GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post) => (
              <article key={post.id} className="flex flex-col group border-b border-gray-100 pb-12">
                <div className="flex justify-between items-center mb-6">
                  <Link to={`/blog/category/${post.category}`} className="px-3 py-1 bg-brand-blue/5 text-brand-blue font-black text-[9px] uppercase tracking-widest rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors">
                    {post.category}
                  </Link>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-gold transition-colors mb-4 leading-tight">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-normal opacity-90">{post.summary}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-[10px] font-black text-brand-blue">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/60">{post.author}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-brand-blue hover:text-brand-gold transition-colors">
                    {ICONS.chevronRight}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-serif italic text-xl">No insights currently available in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: NEWSLETTER SUBSCRIPTION */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-gray-100 text-center space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="space-y-4 relative z-10">
              <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">The Weekly Briefing</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-normal text-brand-dark tracking-tight leading-tight">
                Market Disruption, <br/><span className="italic">Direct to Inbox.</span>
              </h3>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-normal">
                Join 15,000+ executives receiving clinical analysis of global trends and structural strategy.
              </p>
            </div>

            {subStatus === 'success' ? (
              <div className="relative z-10 p-8 bg-green-50 rounded-3xl border border-green-100 max-w-lg mx-auto animate-reveal">
                <p className="text-green-800 font-bold font-serif text-xl">Briefing Subscription Confirmed.</p>
                <p className="text-green-600 mt-2 text-sm">Welcome to LRA Insights. Our next principal briefing will arrive on Monday.</p>
              </div>
            ) : (
              <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 relative z-10" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Work Email" 
                  required
                  className="flex-1 px-8 py-5 rounded-2xl bg-brand-light border-2 border-transparent focus:border-brand-gold outline-none transition-all font-medium placeholder:text-gray-400"
                />
                <button 
                  disabled={subStatus === 'submitting'}
                  className={`px-10 py-5 text-white font-black rounded-2xl transition-all uppercase tracking-ultra text-[11px] shadow-2xl active:scale-95 whitespace-nowrap ${subStatus === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-dark hover:bg-brand-blue'}`}
                >
                  {subStatus === 'submitting' ? 'Processing...' : 'Subscribe Now'}
                </button>
              </form>
            )}
            
            {subStatus === 'error' && (
               <p className="text-red-500 font-bold text-xs uppercase tracking-widest relative z-10">Submission error. Please verify your email.</p>
            )}
            
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest relative z-10">
              Privileged Insights • Unsubscribe Anytime • Data Protected
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA BANNER */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.85] tracking-tighter text-balance">
            Ready to Translate <br/>Insight into <span className="text-brand-gold italic">Impact?</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100/60 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            Consult with our principals to apply these insights to your specific organizational challenges.
          </p>
          <div className="pt-6">
            <Link 
              to="/contact" 
              className="px-14 py-6 bg-brand-gold text-brand-dark font-black rounded-2xl hover:bg-white transition-all uppercase tracking-ultra text-[12px] shadow-3xl active:scale-95 inline-block"
            >
              Initiate Strategic Audit
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="currentColor" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Blog;
