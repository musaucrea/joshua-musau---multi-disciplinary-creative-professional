
import React from 'react';
import { SERVICES } from '../../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Services</h2>
          <div className="w-20 h-1 bg-[#22c55e] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#22c55e]/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-6 text-white group-hover:text-[#22c55e] transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
