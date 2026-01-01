
import React from 'react';
const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e] to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img 
  src="/joshua-new.jpeg"
  alt="Joshua Musau"
  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
/>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              About <span className="text-[#22c55e]">Joshua</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I’m <span className="text-white font-medium">Joshua Musau</span>, a <span className="text-[#22c55e]">Multi-disciplinary Creative Professional</span> based in Nairobi, Kenya, operating at the convergence of design, technology, and strategic growth.
              </p>
              <p>
                My expertise lies in crafting intuitive digital products and executing data-driven marketing strategies that deliver measurable impact. By blending UI/UX design with performance-focused digital campaigns, I ensure that every user interaction is both beautiful and functional.
              </p>
              <p>
                Beyond individual projects, I am the <span className="text-white font-medium">Co-Founder & IT Lead at the Foundations of Tourism Institute (FoTI)</span>, where I lead digital innovation initiatives that empower professionals in the tourism sector through user-centered research platforms.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-white font-display font-bold text-3xl mb-1">5+</p>
                <p className="text-sm uppercase tracking-widest text-[#22c55e]">Years Experience</p>
              </div>
              <div>
                <p className="text-white font-display font-bold text-3xl mb-1">50+</p>
                <p className="text-sm uppercase tracking-widest text-[#22c55e]">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
