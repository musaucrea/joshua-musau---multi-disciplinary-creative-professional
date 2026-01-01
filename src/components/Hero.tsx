
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <p className="text-[#22c55e] font-display font-medium tracking-widest uppercase mb-4 animate-pulse">
            A Multi-disciplinary Creative Professional
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            JOSHUA <br />
            <span className="text-[#22c55e]">MUSAU</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            I bridge the gap between human-centered UI/UX design and high-performance digital marketing to build products that resonate and convert.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto px-8 py-4 bg-[#22c55e] text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Work With Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-[#22c55e] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
