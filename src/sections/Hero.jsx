import React from 'react';
import { 
  ArrowRight, 
  Send, 
  MapPin, 
  Sparkles, 
  ChevronDown, 
  Code2, 
  Layers, 
  Atom 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import HeroVisual from '../components/HeroVisual';
import { sounds } from '../utils/sound';

export default function Hero({ onOpenPalette }) {
  const { data } = useLanguage();
  const { hero, personal } = data;

  const scrollToProjects = (e) => {
    e.preventDefault();
    sounds.playClick();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    sounds.playClick();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Typography, Philosophy, CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Status & Location Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-900/80 border border-violet-500/20 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono text-slate-300">
              {personal.status}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-violet-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-violet-400" />
              {personal.location}
            </span>
          </div>

          {/* Headings */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
              {hero.greeting}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-blue-400">
                {hero.name}
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-slate-200 tracking-tight leading-snug">
              {hero.title}
            </h2>
          </div>

          {/* Narrative Lead */}
          <p className="text-base sm:text-lg text-slate-300/90 max-w-xl leading-relaxed font-light">
            {hero.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-medium text-sm flex items-center gap-2.5 shadow-xl shadow-purple-950/60 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-6 py-3.5 rounded-2xl glass-panel hover:bg-white/10 text-slate-200 font-medium text-sm flex items-center gap-2 border border-white/15 hover:border-violet-500/40 transition-all hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 text-violet-400" />
              <span>{hero.secondaryCta}</span>
            </a>
          </div>

          {/* Quick Tech Ribbon */}
          <div className="pt-4 flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-400">
            <span className="text-slate-500 uppercase tracking-widest text-[10px] mr-1">
              {hero.toolkitFocus}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <Atom className="w-3.5 h-3.5 text-violet-400" /> React.js
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
              JavaScript
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
              HTML5 & CSS3
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
              Vite
            </span>
          </div>
        </div>

        {/* Right Column: Hero Visual Generative 3D Orb / Crest */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>

      {/* Smooth scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-violet-300 transition-colors pointer-events-auto">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            sounds.playClick();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 group"
          title={hero.scrollExplore}
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-violet-300 transition-colors">
            {hero.scrollExplore}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-violet-400" />
        </a>
      </div>
    </section>
  );
}
