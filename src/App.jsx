import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import InteractiveBackground from './components/InteractiveBackground';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import ProjectModal from './components/ProjectModal';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { sounds } from './utils/sound';

function PortfolioMain() {
  const { lang, data } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#/404' || window.location.pathname === '/404') {
      setIs404(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#/404') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sounds.playClick();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSound = () => {
    const nextState = sounds.toggle();
    setIsSoundOn(nextState);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#08080d] z-50 flex flex-col items-center justify-center p-4">
        <div className="relative flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 via-purple-600 to-blue-500 p-[1px] shadow-2xl shadow-purple-600/50 animate-pulse">
            <div className="w-full h-full bg-[#08080d] rounded-[15px] flex items-center justify-center font-display font-bold text-xl text-violet-300">
              MU
            </div>
          </div>

          <div className="text-center space-y-1">
            <div className="text-sm font-display font-semibold text-white tracking-wide">
              {data.personal.name}
            </div>
            <div className="text-xs font-mono text-violet-400">
              {lang === 'uz' ? 'Kreativ portfolio yuklanmoqda...' : 'Initializing Creative Portfolio...'}
            </div>
          </div>

          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-violet-500 to-blue-500 animate-[shimmer_1.5s_infinite]" />
          </div>
        </div>
      </div>
    );
  }

  if (is404) {
    return (
      <div className="min-h-screen bg-obsidian-950 text-slate-100 relative">
        <InteractiveBackground />
        <NotFound onReturnHome={() => {
          window.location.hash = '#hero';
          setIs404(false);
        }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 relative selection:bg-purple-600/40 selection:text-white">
      {/* Dynamic Interactive Background */}
      <InteractiveBackground />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Main Glass Navigation */}
      <Navbar
        onOpenPalette={() => setIsPaletteOpen(true)}
        isSoundOn={isSoundOn}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenPalette={() => setIsPaletteOpen(true)} />
        <About />
        <Skills />
        <Projects onOpenProject={(project) => setSelectedProject(project)} />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Command Palette Modal */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        isSoundOn={isSoundOn}
        onToggleSound={handleToggleSound}
      />

      {/* Interactive Project Details & Simulation Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioMain />
    </LanguageProvider>
  );
}
