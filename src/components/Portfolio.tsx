
import React, { useState } from 'react';
import { PROJECTS } from '../../constants';

interface PortfolioProps {
  onProjectSelect: (id: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectSelect }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Selected Work</h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Exploring the synergy between high-performance design and strategic marketing through real-world case studies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-[#22c55e] text-black' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => onProjectSelect(project.id)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-[#111] mb-8 aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <span className="text-white text-sm font-bold tracking-widest uppercase bg-[#22c55e] px-4 py-1 rounded-full">
                    View Project
                  </span>
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#22c55e] text-sm font-bold tracking-wider uppercase">{project.role}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="text-gray-500 text-sm font-medium">{project.focus}</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-[#22c55e] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.overview}
                </p>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                  <p className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Key Impact</p>
                  <blockquote className="text-gray-300 italic border-l-2 border-[#22c55e] pl-4">
                    "{project.impact}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
