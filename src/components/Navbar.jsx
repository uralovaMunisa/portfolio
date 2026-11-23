import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  Volume2, 
  VolumeX, 
  Send, 
  Sparkles, 
  Atom, 
  ArrowRight,
  Globe 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/sound';

export default function Navbar({ onOpenPalette, isSoundOn, onToggleSound }) {
  const { lang, toggleLang, data } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: data.nav.about, href: '#about' },
    { label: data.nav.skills, href: '#skills' },
    { label: data.nav.projects, href: '#projects' },
    { label: data.nav.journey, href: '#journey' },
    { label: data.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    sounds.playClick();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel border-white/10 shadow-2xl shadow-black/80 py-2.5 px-4 sm:px-6'
            : 'bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-purple-600 to-blue-500 p-[1px] shadow-lg shadow-purple-600/30 group-hover:shadow-purple-500/50 transition-all">
              <div className="w-full h-full bg-obsidian-900 rounded-[11px] flex items-center justify-center">
                <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300 text-sm">
                  MU
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-slate-100 group-hover:text-violet-300 transition-colors text-sm sm:text-base leading-tight">
                {data.personal.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 leading-tight">
                {data.personal.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-obsidian-900/60 p-1 rounded-xl border border-white/5">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-violet-600/30 text-white border border-violet-500/40 shadow-sm shadow-violet-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Actions: Language Switcher, Command Palette, Sound Toggle, CTA */}
          <div className="flex items-center gap-2">
            {/* Language Switcher Pill */}
            <button
              onClick={() => {
                sounds.playClick();
                toggleLang();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-900/90 hover:bg-violet-950/80 border border-violet-500/30 text-xs font-mono text-slate-200 transition-all shadow-sm group"
              title={lang === 'uz' ? "Switch to English" : "O'zbek tiliga o'tish"}
            >
              <Globe className="w-3.5 h-3.5 text-violet-400 group-hover:rotate-45 transition-transform" />
              <span className="font-bold text-violet-300 uppercase">
                {lang === 'uz' ? 'OʻZB' : 'ENG'}
              </span>
            </button>

            {/* Quick Command Trigger */}
            <button
              onClick={() => {
                sounds.playClick();
                onOpenPalette();
              }}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-obsidian-900/80 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-colors"
              title="Open Command Palette (Ctrl+K / ⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-violet-400" />
              <span className="hidden lg:inline text-[11px] font-mono text-slate-400">
                {data.nav.search}
              </span>
              <kbd className="hidden sm:inline text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-slate-400 border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                if (onToggleSound) onToggleSound();
              }}
              className={`p-2 rounded-xl border transition-colors ${
                isSoundOn
                  ? 'bg-violet-600/20 border-violet-500/40 text-violet-300'
                  : 'bg-obsidian-900/80 hover:bg-white/10 border-white/10 text-slate-400 hover:text-slate-200'
              }`}
              title={isSoundOn ? (lang === 'uz' ? 'Ovoz yoqilgan' : 'Sound enabled') : (lang === 'uz' ? 'Ovoz o\'chirilgan' : 'Sound muted')}
            >
              {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-medium transition-all shadow-md shadow-violet-600/30 hover:shadow-violet-600/50"
            >
              <span>{data.nav.getInTouch}</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-xl bg-obsidian-900/80 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1 pb-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-white/5 flex items-center justify-between px-2">
              <button
                onClick={() => {
                  sounds.playClick();
                  toggleLang();
                }}
                className="text-xs text-violet-400 font-mono flex items-center gap-1 font-semibold"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === 'uz' ? "Til: O'zbekcha (O'zgartirish)" : "Lang: English (Switch)"}</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="text-xs text-violet-400 font-medium hover:underline"
              >
                {data.nav.getInTouch} →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
