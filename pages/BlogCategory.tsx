
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, ICONS } from '../constants.tsx';

const BlogCategory: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  // Normalize category name for matching (e.g., "Strategy" vs "strategy")
  const currentCategory = categoryName || 'All';

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = post.category.toLowerCase() === currentCategory.toLowerCase();
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [currentCategory, searchQuery]);

  return (
    <div className="pt-24 flex flex-col min-h-screen bg-white">
      {/* 1. CATEGORY HERO */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="space-y-6 animate-reveal">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-ultra text-white/40 mb-10">
              <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <span className="text-white/20">/</span>
              <Link to="/blog" className="hover:text-brand-gold transition-colors">Insights</Link>
              <span className="text-white/20">/</span>
              <span className="text-brand-gold">{currentCategory}</span>
            </nav>

            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-serif font-normal text-white leading-tight tracking-tighter capitalize">
                {currentCategory} <span className="text-brand-gold italic">Briefings.</span>
              </h1>
              <p className="text-blue-100/60 max-w-2xl text-lg font-normal">
                Specialized analysis and principal-led research focused on {currentCategory.toLowerCase()} within the global industrial landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & CONTROLS */}
      <section className="py-12 bg-brand-light border-b border-gray-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl relative group">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-gold group-focus-within:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder={`Search within ${currentCategory}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-5 bg-white border-2 border-transparent focus:border-brand-gold rounded-[2rem] outline-none shadow-sm font-medium transition-all text-brand-dark"
            />
          </div>
        </div>
      </section>

      {/* 3. POSTS GRID */}
      <section className="py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredPosts.map((post) => (
                <article key={post.id} className="flex flex-col group animate-reveal">
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-[2.5rem] shadow-lg mb-8 aspect-[16/10] relative border border-gray-50">
                    <img 
                      src={post.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      alt={post.title} 
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all"></div>
                  </Link>
                  <div className="space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-ultra text-gray-400">
                      {post.date} • By {post.author}
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-blue transition-colors leading-tight">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-normal">
                      {post.summary}
                    </p>
                    <div className="pt-4 border-t border-gray-50">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="inline-flex items-center text-brand-blue font-black text-[10px] uppercase tracking-ultra hover:text-brand-gold transition-colors"
                      >
                        Access Briefing <span className="ml-3 group-hover:translate-x-2 transition-transform">{ICONS.chevronRight}</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 space-y-6">
              <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mx-auto text-brand-gold/40">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif font-normal text-brand-dark">No matching insights found.</h3>
              <p className="text-gray-500 max-w-sm mx-auto">Try refining your search terms or return to the main insights portal.</p>
              <Link to="/blog" className="inline-block mt-4 text-brand-blue font-black text-[10px] uppercase tracking-ultra hover:text-brand-gold transition-colors underline underline-offset-8">
                View All Insights
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 4. CTA FOOTER */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
           <div className="inline-flex items-center space-x-6 justify-center">
              <span className="h-px w-10 bg-brand-gold/30"></span>
              <span className="text-brand-gold font-black uppercase tracking-ultra text-[11px]">Direct Engagement</span>
              <span className="h-px w-10 bg-brand-gold/30"></span>
            </div>
          <h2 className="text-4xl md:text-6xl font-serif font-normal text-brand-dark tracking-tighter">
            Need a clinical audit of your <br/><span className="italic text-brand-blue uppercase">{currentCategory}</span> structure?
          </h2>
          <Link to="/contact" className="inline-block px-12 py-5 bg-brand-dark text-white font-black rounded-2xl hover:bg-brand-blue transition-all uppercase tracking-ultra text-[13px] shadow-3xl active:scale-95">
            Book Principal Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogCategory;
