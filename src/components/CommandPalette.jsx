import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Layers, 
  Send, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  ExternalLink, 
  X,
  Compass,
  Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/sound';

export default function CommandPalette({ isOpen, onClose, onSelectProject, isSoundOn, onToggleSound }) {
  const { data, lang, toggleLang } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  // Dynamic Navigation Items
  const navigationItems = [
    { 
      id: 'nav-about', 
      title: data.nav.about, 
      subtitle: data.about.philosophyTitle, 
      section: 'about', 
      category: lang === 'uz' ? 'Navigatsiya' : 'Navigation', 
      icon: Sparkles 
    },
    { 
      id: 'nav-skills', 
      title: data.nav.skills, 
      subtitle: 'React.js, JavaScript, HTML5, CSS3, Vite', 
      section: 'skills', 
      category: lang === 'uz' ? 'Navigatsiya' : 'Navigation', 
      icon: Code2 
    },
    { 
      id: 'nav-projects', 
      title: data.nav.projects, 
      subtitle: 'Animeshiklar, QUTQAR, Stray Kids, Lunara, Test...', 
      section: 'projects', 
      category: lang === 'uz' ? 'Navigatsiya' : 'Navigation', 
      icon: Layers 
    },
    { 
      id: 'nav-journey', 
      title: data.nav.journey, 
      subtitle: data.journey.subtitle, 
      section: 'journey', 
      category: lang === 'uz' ? 'Navigatsiya' : 'Navigation', 
      icon: Compass 
    },
    { 
      id: 'nav-contact', 
      title: data.nav.contact, 
      subtitle: data.contact.heading, 
      section: 'contact', 
      category: lang === 'uz' ? 'Navigatsiya' : 'Navigation', 
      icon: Send 
    },
  ];

  const projectItems = data.projects.items.map((p) => ({
    id: `project-${p.id}`,
    title: p.title,
    subtitle: `${p.category} • ${p.status}`,
    project: p,
    category: lang === 'uz' ? 'Loyihalar' : 'Projects',
    icon: Layers,
  }));

  const actionItems = [
    {
      id: 'action-toggle-lang',
      title: lang === 'uz' ? "Tilni almashtirish (English ga o'tish)" : "Switch Language (to O'zbekcha)",
      subtitle: lang === 'uz' ? "Current: O'zbek tili" : "Current: English",
      action: 'toggle-lang',
      category: lang === 'uz' ? 'Amallar' : 'Actions',
      icon: Globe,
    },
    {
      id: 'action-copy-email',
      title: data.contact.copyEmail,
      subtitle: data.contact.email,
      action: 'copy-email',
      category: lang === 'uz' ? 'Amallar' : 'Actions',
      icon: Copy,
    },
    {
      id: 'action-toggle-sound',
      title: isSoundOn 
        ? (lang === 'uz' ? 'Interfeys ovozini o\'chirish' : 'Mute Interface Sound')
        : (lang === 'uz' ? 'Interfeys ovozini yoqish' : 'Enable Interface Sound Effects'),
      subtitle: lang === 'uz' ? 'Web Audio sintezi' : 'Synthesized Web Audio clicks & chimes',
      action: 'toggle-sound',
      category: lang === 'uz' ? 'Amallar' : 'Actions',
      icon: isSoundOn ? VolumeX : Volume2,
    },
    {
      id: 'action-github',
      title: 'GitHub Profil',
      subtitle: 'github.com/munisaurallova',
      url: data.contact.socials.find(s => s.name === 'GitHub')?.url || 'https://github.com/munisaurallova',
      category: lang === 'uz' ? 'Havolalar' : 'External',
      icon: ExternalLink,
    }
  ];

  const allItems = [...navigationItems, ...projectItems, ...actionItems];

  const filtered = query.trim() === '' 
    ? allItems 
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          executeItem(filtered[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  const executeItem = (item) => {
    sounds.playClick();
    if (item.section) {
      const el = document.getElementById(item.section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      onClose();
    } else if (item.project) {
      if (onSelectProject) {
        onSelectProject(item.project);
      }
      onClose();
    } else if (item.action === 'toggle-lang') {
      toggleLang();
      sounds.playSuccess();
      onClose();
    } else if (item.action === 'copy-email') {
      navigator.clipboard.writeText(data.contact.email);
      setCopied(true);
      sounds.playSuccess();
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1200);
    } else if (item.action === 'toggle-sound') {
      if (onToggleSound) onToggleSound();
      onClose();
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose} 
      />

      <div className="relative w-full max-w-xl rounded-2xl glass-panel-elevated border border-violet-500/30 overflow-hidden shadow-2xl shadow-purple-950/70 transform transition-all duration-300 animate-in fade-in zoom-in-95">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-violet-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={data.nav.searchPlaceholder}
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
            ESC
          </span>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-slate-400 text-sm">
              {lang === 'uz' ? 'Hech qanday ma\'lumot topilmadi' : 'No matching items found'}
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon || Sparkles;
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => executeItem(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-violet-600/25 border border-violet-500/40 text-white'
                      : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-violet-500 text-white shadow-md shadow-violet-500/30'
                          : 'bg-white/5 text-violet-400'
                      }`}
                    >
                      {item.action === 'copy-email' && copied ? (
                        <Check className="w-4 h-4 text-emerald-300" />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.category && (
                          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400 truncate">
                        {item.action === 'copy-email' && copied ? data.contact.copiedEmail : item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-violet-400 translate-x-1' : 'text-slate-500 opacity-0'
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts info */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ {lang === 'uz' ? 'Harakat' : 'Navigate'}</span>
            <span>↵ {lang === 'uz' ? 'Tanlash' : 'Select'}</span>
          </div>
          <span>Munisa Uralova • Portfolio</span>
        </div>
      </div>
    </div>
  );
}
