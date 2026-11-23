import React from 'react';
import { Compass, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/sound';

export default function NotFound({ onReturnHome }) {
  const { data } = useLanguage();
  const { notFound } = data;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center relative z-20">
      <div className="max-w-md w-full p-8 rounded-3xl glass-panel-elevated border border-violet-500/30 space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-violet-950/80 border border-violet-500/40 flex items-center justify-center text-violet-400 mx-auto animate-float">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
            {notFound.badge}
          </span>
          <h1 className="text-3xl font-display font-bold text-white">
            {notFound.title}
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            {notFound.desc}
          </p>
        </div>

        <button
          onClick={() => {
            sounds.playClick();
            if (onReturnHome) onReturnHome();
            else window.location.hash = '#hero';
          }}
          className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-violet-600/30 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>{notFound.returnBtn}</span>
        </button>
      </div>
    </div>
  );
}
