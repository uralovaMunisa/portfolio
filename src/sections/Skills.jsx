import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Sparkles,
  Atom,
  FileCode2,
  LayoutTemplate,
  Palette,
  Zap,
  GitBranch,
  Layers,
  Smartphone,
  Check,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/sound';

export default function Skills() {
  const { data } = useLanguage();
  const { skills } = data;
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Atom: Atom,
    FileCode2: FileCode2,
    LayoutTemplate: LayoutTemplate,
    Palette: Palette,
    Terminal: Terminal,
    Zap: Zap,
    GitBranch: GitBranch,
    Layers: Layers,
    Smartphone: Smartphone,
    Sparkles: Sparkles,
  };

  const levelBadgeStyles = {
    Learning: 'bg-amber-950/60 text-amber-300 border-amber-500/30',
    "O'rganmoqdaman": 'bg-amber-950/60 text-amber-300 border-amber-500/30',
    Practicing: 'bg-violet-950/60 text-violet-300 border-violet-500/30',
    Amaliyotda: 'bg-violet-950/60 text-violet-300 border-violet-500/30',
    Developing: 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30',
    Rivojlanmoqda: 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30',
  };

  const displayedCategories = activeCategory === 'all'
    ? skills.categories
    : skills.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-mono text-violet-300">
              <Code2 className="w-3.5 h-3.5" />
              <span>{skills.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              {skills.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-light">
              {skills.subtitle}
            </p>
          </div>

          {/* Transparent Status Note */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 sm:max-w-xs text-xs text-slate-400 space-y-1">
            <div className="font-semibold text-violet-300 font-mono">
              {skills.note.split(':')[0]}:
            </div>
            <p>{skills.note}</p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => {
              sounds.playClick();
              setActiveCategory('all');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${activeCategory === 'all'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 font-semibold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
          >
            {skills.disciplinesLabel}
          </button>
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playClick();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${activeCategory === cat.id
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 font-semibold'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories & Cards Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-violet-400">
                  {category.items.length} {category.items.length === 1 ? 'skill' : 'skills'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  const badgeStyle = levelBadgeStyles[skill.level] || 'bg-white/10 text-white';

                  return (
                    <div
                      key={skill.name}
                      className="p-5 rounded-2xl glass-panel-subtle border border-white/5 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-purple-950/40"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-violet-600/20 border border-white/10 group-hover:border-violet-500/40 flex items-center justify-center text-violet-400 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>

                          <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${badgeStyle}`}>
                            {skill.level}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-display font-semibold text-white group-hover:text-violet-300 transition-colors">
                              {skill.name}
                            </h4>
                          </div>
                          <span className="text-[10px] font-mono text-violet-400 block mt-0.5">
                            {skill.highlight}
                          </span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed font-light">
                          {skill.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>{skills.dailyPractice}</span>
                        <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
