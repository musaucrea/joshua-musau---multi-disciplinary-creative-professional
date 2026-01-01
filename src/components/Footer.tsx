
import React from 'react';

interface FooterProps {
  onHomeClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHomeClick }) => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                onHomeClick?.();
                window.scrollTo(0, 0);
              }}
              className="text-2xl font-display font-bold tracking-tighter text-white"
            >
              JOSHUA<span className="text-[#22c55e]">.</span>MUSAU
            </a>
            <p className="text-gray-500 mt-2 text-sm">
              Designing Experiences. Driving Growth.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">Behance</a>
            <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">Dribbble</a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Joshua Musau. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
