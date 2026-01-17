
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS, ICONS } from '../constants.tsx';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-24 flex flex-col bg-white">
      {/* SECTION 1: ARTICLE HERO */}
      <section className="relative min-h-[60vh] flex items-end py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={post.image} 
            className="w-full h-full object-cover" 
            alt={post.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full animate-reveal">
          <div className="space-y-8 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center text-brand-gold font-black text-[10px] uppercase tracking-ultra hover:text-white transition-colors group">
              <span className="mr-4 rotate-180 group-hover:-translate-x-2 transition-transform">{ICONS.chevronRight}</span> Back to Insights
            </Link>
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <span className="px-4 py-1.5 bg-brand-gold text-brand-dark font-black text-[10px] uppercase tracking-ultra rounded-full">
                  {post.category}
                </span>
                <span className="text-white/60 font-black text-[10px] uppercase tracking-ultra">
                  {post.date}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-white leading-[0.9] tracking-tighter">
                {post.title}
              </h1>
            </div>
            <div className="flex items-center gap-4 pt-4">
               <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center font-black text-brand-dark shadow-xl ring-4 ring-white/10">
                 {post.author.charAt(0)}
               </div>
               <div>
                 <div className="text-white font-bold text-lg">{post.author}</div>
                 <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">LRA Principal Contributor</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ARTICLE CONTENT */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          {/* Sidebar / Reading Controls */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-40 space-y-12">
              <div className="space-y-6">
                <div className="text-[10px] font-black uppercase tracking-ultra text-gray-400">Share</div>
                <div className="flex flex-col gap-4">
                  {[1,2,3].map(i => (
                    <button key={i} className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-blue hover:bg-brand-gold hover:text-brand-dark transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Reading Column */}
          <main className="lg:col-span-8 lg:col-start-3">
            <article className="prose prose-xl prose-brand max-w-none">
              <div 
                className="text-gray-600 font-normal leading-relaxed font-sans text-xl md:text-2xl space-y-10"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Author Section */}
            <div className="mt-32 p-12 bg-brand-light rounded-[3rem] border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
               <div className="w-32 h-32 rounded-[2rem] overflow-hidden shrink-0 shadow-xl border-4 border-white">
                 <img src="https://ui-avatars.com/api/?name=Author&background=004E82&color=F7B516&size=400&bold=true" className="w-full h-full object-cover" alt={post.author} />
               </div>
               <div className="space-y-4 text-center md:text-left">
                 <h4 className="text-2xl font-serif font-bold text-brand-dark">About {post.author}</h4>
                 <p className="text-gray-500 font-normal leading-relaxed italic">
                   A Senior Principal at LRA Strategy & Management, specializing in multidisciplinary frameworks for high-growth enterprises. With over 15 years of experience in global market mapping, {post.author.split(' ')[0]} provides the context and clarity needed for enduring differentiation.
                 </p>
               </div>
            </div>
          </main>
        </div>
      </section>

      {/* SECTION 3: RELATED ARTICLES */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Continue Reading</h2>
            <h3 className="text-5xl font-serif font-normal tracking-tight">Further <span className="italic">Principal Insights.</span></h3>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {relatedPosts.map(p => (
              <Link to={`/blog/${p.id}`} key={p.id} className="group relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl block">
                <img src={p.image} className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000" alt={p.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 space-y-4">
                  <div className="text-brand-gold font-black text-[10px] uppercase tracking-ultra">{p.category}</div>
                  <h4 className="text-3xl font-serif font-bold text-white leading-tight">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA FOOTER */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif font-normal text-brand-dark leading-[0.85] tracking-tighter">
            Translate this insight <br/>into <span className="text-brand-blue italic">Structural Action.</span>
          </h2>
          <Link to="/contact" className="inline-block px-12 py-5 bg-brand-gold text-brand-dark font-black rounded-2xl hover:bg-brand-dark hover:text-white transition-all uppercase tracking-ultra text-[13px] shadow-3xl active:scale-95">
            Book Briefing with a Principal
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
