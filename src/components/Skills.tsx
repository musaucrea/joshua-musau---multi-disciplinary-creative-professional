
import React from 'react';
import { SKILLS } from '../../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Skills Snapshot</h2>
          <div className="w-20 h-1 bg-[#22c55e] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="text-center md:text-left">
              <h3 className="text-2xl font-display font-bold mb-8 text-[#22c55e] uppercase tracking-widest">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-6 py-3 rounded-2xl bg-[#0a0a0a] border border-white/5 text-gray-300 font-medium hover:border-[#22c55e] hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
