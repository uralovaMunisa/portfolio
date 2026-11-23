import React from 'react';
import { ArrowUp, Heart, Atom, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import { sounds } from '../utils/sound';

export default function Footer() {
  const { data, lang } = useLanguage();
  const { footer, contact, personal } = data;

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialMap = {
    GitHub: GithubIcon,
    LinkedIn: LinkedinIcon,
    Telegram: TelegramIcon,
  };

  return (
    <footer className="relative border-t border-white/10 bg-obsidian-950/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Tier: Branding, Quote, Back to top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-blue-500 p-[1px]">
                <div className="w-full h-full bg-obsidian-900 rounded-[7px] flex items-center justify-center font-display font-bold text-xs text-violet-300">
                  MU
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light max-w-sm">
              {footer.quote}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {contact.socials.map((s) => {
              const Icon = socialMap[s.name] || Sparkles;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-500/40 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                  title={s.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-obsidian-900 hover:bg-violet-950 border border-white/10 hover:border-violet-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-md group"
              title={footer.backToTop}
            >
              <span>{footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-violet-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Location, Tech stack pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {footer.copyrightYear} {personal.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-600">{lang === 'uz' ? 'Vositalar:' : 'Built with:'}</span>
            {footer.builtWith.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5 text-[10px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
