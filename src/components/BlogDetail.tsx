
import React from 'react';
import { BLOG_POSTS } from '../../constants';
import Footer from './Footer';

interface BlogDetailProps {
  blogId: string;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogId, onBack }) => {
  const post = BLOG_POSTS.find(p => p.id === blogId);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#22c55e] selection:text-black">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md py-6 border-b border-white/5">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-[#22c55e] transition-colors font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Insights
          </button>
          <div className="text-xl font-display font-bold tracking-tighter">
            JOSHUA<span className="text-[#22c55e]">.</span>MUSAU
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-3xl">
          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="rounded-[2.5rem] overflow-hidden mb-16 aspect-[16/9]">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300 leading-relaxed">
            <p className="text-xl text-white font-medium leading-relaxed">
              {post.excerpt}
            </p>
            <p>
              In today's fast-paced digital landscape, the intersection of design and marketing is more critical than ever. As a UI/UX Designer and Digital Marketer, I've observed that the most successful products aren't just aesthetically pleasing—they're strategically built to guide users toward specific actions while providing immense value.
            </p>
            <h2 className="text-2xl font-display font-bold text-white pt-4">The core principles of engagement</h2>
            <p>
              User psychology plays a massive role in how we interact with interfaces. By understanding cognitive load, visual hierarchy, and the principles of persuasion, we can create experiences that feel natural rather than forced. This is where high-quality design meets high-performance marketing.
            </p>
            <blockquote className="border-l-4 border-[#22c55e] pl-6 py-2 my-8 text-white text-2xl italic font-display">
              "Design is not just what it looks like and feels like. Design is how it works and how it drives results."
            </blockquote>
            <p>
              Whether it's optimizing a landing page for conversions or redesigning a student research platform like FoTI, the goal remains the same: clarity. When a user knows exactly where they are and what they need to do next, the barrier to conversion vanishes.
            </p>
            <p>
              Stay tuned for more deep dives into specific case studies where we've applied these principles to achieve record-breaking growth for our clients.
            </p>
          </div>

          <footer className="mt-20 pt-12 border-t border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#111]">
                  <img 
                    src="joshua.jpg" 
                    alt="Joshua" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100";
                    }}
                  />
                </div>
                <div>
                  <p className="text-white font-bold">Joshua Musau</p>
                  <p className="text-sm text-gray-500">Author & Designer</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[#22c55e] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[#22c55e] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </button>
              </div>
            </div>
          </footer>
        </article>
      </main>

      <Footer onHomeClick={onBack} />
    </div>
  );
};

export default BlogDetail;
