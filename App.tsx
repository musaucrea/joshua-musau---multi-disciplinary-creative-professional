
import React, { useState, useEffect } from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Services from './src/components/Services';
import Portfolio from './src/components/Portfolio';
import Skills from './src/components/Skills';
import Blog from './src/components/Blog';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import ProjectDetail from './src/components/ProjectDetail';
import BlogDetail from './src/components/BlogDetail';
import AIAssistant from './src/components/AIAssistant';

type View = { type: 'home' } | { type: 'project'; id: string } | { type: 'blog'; id: string };

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [view, setView] = useState<View>({ type: 'home' });

  useEffect(() => {
    if (view.type !== 'home') {
      window.scrollTo(0, 0);
      return;
    }

    const observerOptions = {
      root: null,
      threshold: 0.3,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [view]);

  const navigateToHome = () => setView({ type: 'home' });

  if (view.type === 'project') {
    return <ProjectDetail projectId={view.id} onBack={navigateToHome} />;
  }

  if (view.type === 'blog') {
    return <BlogDetail blogId={view.id} onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#22c55e] selection:text-black">
      <Header activeSection={activeSection} onHomeClick={navigateToHome} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio onProjectSelect={(id) => setView({ type: 'project', id })} />
        <Skills />
        <Blog onBlogSelect={(id) => setView({ type: 'blog', id })} />
        <Contact />
      </main>
      <Footer onHomeClick={navigateToHome} />
      <AIAssistant />
    </div>
  );
};

export default App;
