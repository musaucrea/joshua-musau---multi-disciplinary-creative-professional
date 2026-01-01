
import React from 'react';
import { PROJECTS } from '../../constants';
import Footer from './Footer';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) return null;

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
            Back to Home
          </button>
          <div className="text-xl font-display font-bold tracking-tighter">
            JOSHUA<span className="text-[#22c55e]">.</span>MUSAU
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold uppercase tracking-widest border border-[#22c55e]/20">
                {project.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 font-medium">{project.role}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </header>

          <div className="relative rounded-[3rem] overflow-hidden mb-20 aspect-video group">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale-0 scale-100 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <section>
                <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-[#22c55e]"></span>
                  Project Scope & Tasks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.tasks.map((task, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></div>
                      </div>
                      <p className="text-gray-300">{task}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-[#22c55e]"></span>
                  The Impact
                </h2>
                <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#111] to-[#050505] border border-[#22c55e]/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-8xl text-[#22c55e]/5 font-display font-black">IMPACT</div>
                  <p className="text-2xl text-white leading-relaxed italic relative z-10">
                    "{project.impact}"
                  </p>
                </div>
              </section>
            </div>

            <aside className="space-y-12">
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Focus</h3>
                <p className="text-lg text-white font-medium">{project.focus}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Date</h3>
                <p className="text-lg text-white font-medium">2023 — 2024</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Client</h3>
                <p className="text-lg text-white font-medium">{project.title.split(' ')[0]}</p>
              </div>
              <div className="pt-8 border-t border-white/5">
                <button className="w-full py-4 bg-[#22c55e] text-black font-bold rounded-2xl hover:scale-[1.02] transition-transform active:scale-95">
                  Launch Case Study
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer onHomeClick={onBack} />
    </div>
  );
};

export default ProjectDetail;
