
import React from 'react';
import { BLOG_POSTS } from '../../constants';

interface BlogProps {
  onBlogSelect: (id: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onBlogSelect }) => {
  return (
    <section id="blog" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Insights & Writing</h2>
            <p className="text-gray-400 text-lg">Exploring digital innovation and growth strategy.</p>
          </div>
          <a href="#" className="hidden md:block text-[#22c55e] font-bold border-b border-[#22c55e] pb-1 hover:text-white hover:border-white transition-all">
            View All Posts
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group bg-[#050505] rounded-3xl overflow-hidden border border-white/5 flex flex-col hover:border-[#22c55e]/20 transition-all duration-300 cursor-pointer"
              onClick={() => onBlogSelect(post.id)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 text-xs text-gray-500 font-bold uppercase tracking-tighter mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-[#22c55e] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-[#22c55e] text-sm font-bold uppercase tracking-wider group-hover:gap-3 gap-2 transition-all">
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
