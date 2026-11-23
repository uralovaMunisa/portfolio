import React from 'react';
import { 
  Sparkles, 
  Target, 
  Heart, 
  Flame, 
  Compass, 
  CheckCircle2, 
  Quote, 
  Code2, 
  Atom, 
  Layers 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { data } = useLanguage();
  const { about } = data;

  const traitIcons = {
    Ambitsiyali: Target,
    Ambitious: Target,
    Ijodkor: Sparkles,
    Creative: Sparkles,
    Qiziquvchan: Compass,
    Curious: Compass,
    "Qat'iyatli": Flame,
    Determined: Flame,
    "Detallarga e'tiborli": Layers,
    "Detail-Oriented": Layers,
    "Rivojlanishga intiluvchi": Heart,
    "Growth-Minded": Heart,
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-mono text-violet-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight max-w-3xl">
            {about.heading}
          </h2>
        </div>

        {/* Philosophy Spotlight Card */}
        <div className="relative rounded-3xl p-8 sm:p-10 glass-panel-elevated border border-violet-500/30 overflow-hidden shadow-2xl shadow-purple-950/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-600/40">
              <Quote className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-violet-300">
                {about.philosophyTitle}
              </span>
              <p className="text-xl sm:text-2xl font-display font-medium text-white italic tracking-tight">
                "{about.philosophy}"
              </p>
            </div>
          </div>
        </div>

        {/* Narrative & Focus Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            {about.bioParagraphs.map((para, i) => (
              <p key={i} className="p-4 rounded-2xl bg-obsidian-900/60 border border-white/5">
                {para}
              </p>
            ))}

            {/* Long-term Goal Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-950/40 to-blue-950/40 border border-violet-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-300">
                <Target className="w-4 h-4 text-violet-400" />
                <span>{about.goalTitle}</span>
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-100">
                {about.goal}
              </p>
            </div>
          </div>

          {/* Interests & Craft Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-violet-400 flex items-center gap-2">
                <Atom className="w-4 h-4" />
                <span>{about.interestsTitle}</span>
              </h3>
              <div className="space-y-2.5">
                {about.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-violet-950/80 border border-violet-500/40 flex items-center justify-center text-violet-300 shrink-0 text-xs font-mono">
                      0{idx + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6 Personal Characteristics Matrix */}
        <div className="space-y-6">
          <div className="flex flex-col items-start space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
              {about.traitsTitle}
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              {about.traitsSubtitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {about.traits.map((trait) => {
              const Icon = traitIcons[trait.label] || Sparkles;
              return (
                <div
                  key={trait.label}
                  className="p-5 rounded-2xl glass-panel-subtle border border-white/5 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-violet-600/20 border border-white/10 group-hover:border-violet-500/40 flex items-center justify-center text-violet-400 mb-3 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-display font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {trait.label}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {trait.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
