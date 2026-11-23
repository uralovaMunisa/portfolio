import React, { useState } from 'react';
import { 
  Compass, 
  Lightbulb, 
  FileCode, 
  Code2, 
  Atom, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/sound';

export default function Journey() {
  const { data } = useLanguage();
  const { journey } = data;
  const [activeStep, setActiveStep] = useState(journey.milestones[journey.milestones.length - 1].stage);

  const iconMap = {
    Lightbulb: Lightbulb,
    FileCode: FileCode,
    Code2: Code2,
    Atom: Atom,
    Rocket: Rocket,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-mono text-violet-300">
            <Compass className="w-3.5 h-3.5" />
            <span>{journey.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            {journey.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl font-light">
            {journey.subtitle}
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="relative">
          {/* Central Vertical Spine Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-violet-600/40 via-purple-600/40 to-blue-600/40" />

          {/* Timeline Nodes */}
          <div className="space-y-8 lg:space-y-12">
            {journey.milestones.map((step, index) => {
              const Icon = iconMap[step.icon] || Code2;
              const isEven = index % 2 === 0;
              const isActive = activeStep === step.stage;

              return (
                <div
                  key={step.stage}
                  onClick={() => {
                    sounds.playClick();
                    setActiveStep(step.stage);
                  }}
                  className={`relative flex flex-col lg:flex-row items-center cursor-pointer transition-all duration-300 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card (Half Width) */}
                  <div className={`w-full lg:w-[46%] ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div
                      className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 ${
                        isActive
                          ? 'glass-panel-elevated border-violet-500/50 shadow-2xl shadow-purple-950/50 scale-[1.01]'
                          : 'glass-panel-subtle border-white/5 hover:border-violet-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-violet-300">
                          {step.stage}-bosqich
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-white">
                        {step.title}
                      </h3>
                      <h4 className="text-xs font-mono text-violet-400 mt-0.5">
                        {step.subtitle}
                      </h4>

                      <p className="text-sm text-slate-300 font-light leading-relaxed mt-3">
                        {step.description}
                      </p>

                      {/* Associated Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Beacon (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl items-center justify-center transition-all duration-300 z-10 shadow-lg bg-obsidian-900 border border-white/10">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/50 scale-110'
                          : 'bg-white/5 text-violet-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Empty Spacer for other half */}
                  <div className="hidden lg:block w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="p-8 rounded-3xl glass-panel-elevated border border-violet-500/30 text-center space-y-3 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-blue-600/10 pointer-events-none" />
          <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
            {journey.currentTrajectory}
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {journey.trajectoryTitle}
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {journey.trajectoryDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
