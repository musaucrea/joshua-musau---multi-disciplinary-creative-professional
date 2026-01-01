
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#22c55e]/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-[3rem] p-12 md:p-20 border border-white/5">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Let’s Build Something <br />
                <span className="text-[#22c55e]">Impactful.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                Have a project, product, or campaign in mind? Let’s collaborate and turn your ideas into powerful digital experiences.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:joshuanguku7@gmail.com" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#22c55e]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#22c55e]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Me</p>
                    <p className="text-xl text-white font-medium">joshuanguku7@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#22c55e]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Location</p>
                    <p className="text-xl text-white font-medium">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-[#22c55e] text-black font-bold py-5 rounded-2xl hover:scale-[1.02] transition-transform active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
