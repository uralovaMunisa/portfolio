import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Play, 
  Pause, 
  Search, 
  Calendar, 
  Car, 
  Music, 
  Film, 
  Smile, 
  Volume2, 
  Check, 
  ArrowRight,
  Globe,
  Radio,
  Plane,
  ShieldCheck,
  AlertTriangle,
  Heart,
  Clock
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { sounds } from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  const { data, lang } = useLanguage();
  const { modal } = data;
  const [activeTab, setActiveTab] = useState('overview');
  
  // Interactive Simulator States
  // 1. Stray Kids Simulator
  const [skzPlaying, setSkzPlaying] = useState(false);
  const [selectedMember, setSelectedMember] = useState('Felix');
  
  // 2. Animeshiklar Simulator
  const [selectedGenre, setSelectedGenre] = useState('Barchasi');
  
  // 3. Qutqar Simulator
  const [sosActivated, setSosActivated] = useState(false);
  const [sosStep, setSosStep] = useState(1);

  // 4. Airoport Simulator
  const [flightQuery, setFlightQuery] = useState('');
  
  // 5. Dental Club Simulator
  const [dentalService, setDentalService] = useState('Estetik Stomatologiya');
  const [dentalConfirmed, setDentalConfirmed] = useState(false);
  
  // 6. Car Market Simulator
  const [cartCount, setCartCount] = useState(0);
  const [cartAdded, setCartAdded] = useState(false);

  // 7. Lunara Simulator
  const [diaryMood, setDiaryMood] = useState('Ilhomlangan');
  const [diarySaved, setDiarySaved] = useState(false);

  // 8. Onlayn Test Simulator
  const [quizSelected, setQuizSelected] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);

  useEffect(() => {
    sounds.playModalOpen();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const skzMembers = [
    { name: 'Bang Chan', role: 'Lider / Produser', color: '#ef4444' },
    { name: 'Felix', role: 'Dancer / Bass Vokal', color: '#8b5cf6' },
    { name: 'Hyunjin', role: 'Asosiy Raqqos / Vizual', color: '#ec4899' },
    { name: 'Han', role: 'Rep / Vokalist', color: '#3b82f6' },
    { name: 'Lee Know', role: 'Raqs Sardori / Vokal', color: '#10b981' },
    { name: 'Changbin', role: 'Asosiy Rapper', color: '#f59e0b' },
  ];

  const animeList = [
    { title: 'Naruto Shippuden', genre: 'Shonen', score: '9.2', episodes: '500 qism' },
    { title: 'Jujutsu Kaisen', genre: 'Jangari', score: '9.0', episodes: '24 qism' },
    { title: 'Attack on Titan', genre: 'Drama', score: '9.4', episodes: '87 qism' },
    { title: 'Bleach: TYBW', genre: 'Shonen', score: '9.1', episodes: '26 qism' },
  ];

  const flights = [
    { flight: 'HY-271', from: 'Toshkent (TAS)', to: 'Istanbul (IST)', time: '10:45', status: 'Reysda' },
    { flight: 'HY-053', from: 'Toshkent (TAS)', to: 'Dubay (DXB)', time: '12:20', status: 'Qo\'ndi' },
    { flight: 'TK-369', from: 'Istanbul (IST)', to: 'Toshkent (TAS)', time: '14:10', status: 'Kutilmoqda' },
    { flight: 'FZ-768', from: 'Dubay (DXB)', to: 'Samarqand (SKD)', time: '16:30', status: 'Reysda' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl glass-panel-elevated border border-white/10 shadow-2xl shadow-purple-950/80 overflow-hidden z-10 animate-in fade-in zoom-in-95">
        {/* Header Ribbon with Project Gradient */}
        <div className={`p-6 bg-gradient-to-r ${project.gradient} border-b border-white/10 relative`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white font-semibold">
                  {project.category}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-obsidian-950/80 border border-white/10 text-emerald-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
                {project.isLive && (
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <Globe className="w-3 h-3" /> Render Live
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-slate-200/90 mt-1">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-2 rounded-2xl bg-black/40 hover:bg-black/70 border border-white/15 text-slate-300 hover:text-white transition-all shrink-0"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-5 pt-3 border-t border-white/15 overflow-x-auto">
            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('overview');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-slate-950 shadow-md font-semibold'
                  : 'bg-black/30 text-white/80 hover:bg-black/50 hover:text-white'
              }`}
            >
              {modal.overview}
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('features');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'features'
                  ? 'bg-white text-slate-950 shadow-md font-semibold'
                  : 'bg-black/30 text-white/80 hover:bg-black/50 hover:text-white'
              }`}
            >
              {modal.features}
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('interactive');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                activeTab === 'interactive'
                  ? 'bg-white text-slate-950 shadow-md font-semibold'
                  : 'bg-black/30 text-white/80 hover:bg-black/50 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{modal.interactive}</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in">
              {/* If project is live, show a prominent quick launcher */}
              {project.isLive && project.liveUrl && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
                  <div>
                    <div className="text-xs font-mono uppercase text-emerald-300 font-bold flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      <span>{lang === 'uz' ? 'Jonli Sayt Internetda Ishga Tushirilgan' : 'Live Website Deployed on Internet'}</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 font-mono">
                      {project.liveUrl}
                    </div>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playSuccess()}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/30 transition-all shrink-0"
                  >
                    <span>{modal.liveSiteBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Concept Narrative */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                  {modal.conceptTitle}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.concept}
                </p>
              </div>

              {/* Design Philosophy */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  {modal.designTitle}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mt-1">
                  {project.designPhilosophy}
                </p>
              </div>

              {/* Implementation Note */}
              <div className="p-4 rounded-2xl bg-violet-950/30 border border-violet-500/20">
                <h3 className="text-xs font-mono uppercase tracking-widest text-violet-300 mb-1 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-violet-300" />
                  {modal.implTitle}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mt-1">
                  {project.implementationNote}
                </p>
              </div>

              {/* Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-obsidian-900 border border-white/10 text-center">
                    <div className="text-xs font-mono text-slate-400">{lang === 'uz' ? 'Masshtab' : 'Scale'}</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{project.metrics.screens}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-obsidian-900 border border-white/10 text-center">
                    <div className="text-xs font-mono text-slate-400">{lang === 'uz' ? 'Komponentlar' : 'Components'}</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{project.metrics.components}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-obsidian-900 border border-white/10 text-center">
                    <div className="text-xs font-mono text-slate-400">{lang === 'uz' ? 'Asosiy Yo\'nalish' : 'Focus'}</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{project.metrics.focus}</div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                  {lang === 'uz' ? 'Qo\'llanilgan Texnologiyalar' : 'Technologies Utilized'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-xs font-mono uppercase tracking-widest text-violet-400">
                {lang === 'uz' ? 'Loyiha Imkoniyatlari & Xususiyatlari' : 'Functional & Interactive Capabilities'}
              </h3>
              <div className="space-y-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/20 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'interactive' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-violet-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {modal.interactiveHint}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {lang === 'uz' ? 'Interaktiv rejim' : 'Interactive mode'}
                </span>
              </div>

              {/* Simulation: ANIMESHIKLAR OLAMI */}
              {project.id === 'animeshiklar' && (
                <div className="p-5 rounded-2xl bg-obsidian-900 border border-pink-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Film className="w-5 h-5 text-pink-400" />
                      <span className="text-sm font-semibold text-white">Animeshiklar Olami — Mini Pleer</span>
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-pink-400 hover:underline flex items-center gap-1"
                      >
                        <span>Saytga o'tish</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {animeList.map((anime) => (
                      <div
                        key={anime.title}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-white">{anime.title}</div>
                          <div className="text-[10px] text-pink-300 font-mono mt-0.5">
                            {anime.genre} • {anime.episodes}
                          </div>
                        </div>
                        <div className="text-xs font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                          ★ {anime.score}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-pink-950/30 border border-pink-500/20 text-xs text-slate-300 flex items-center justify-between">
                    <span>Render orqali to'liq anime tomosha qiling:</span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-semibold text-[11px] transition-colors"
                    >
                      Tomosha qilish →
                    </a>
                  </div>
                </div>
              )}

              {/* Simulation: QUTQAR */}
              {project.id === 'qutqar-loyihasi' && (
                <div className="p-5 rounded-2xl bg-obsidian-900 border border-emerald-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-semibold text-white">QUTQAR — Aqlli Xavfsizlik Paneli</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                      Tizim Onlayn
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                    <p className="text-xs text-slate-200">
                      {sosActivated 
                        ? "Tezkor ogohlantirish yuborildi! Qutqaruv xizmati bilan aloqa o'rnatilmoqda..."
                        : "Favqulodda holatda SOS tugmasini bosing:"}
                    </p>

                    <button
                      onClick={() => {
                        sounds.playSuccess();
                        setSosActivated(!sosActivated);
                      }}
                      className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg ${
                        sosActivated
                          ? 'bg-red-600 text-white shadow-red-600/50 animate-pulse'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/40'
                      }`}
                    >
                      {sosActivated ? 'SOS BEKOR QILISH' : 'SOS SIGNALINI YUBORISH'}
                    </button>
                  </div>

                  <div className="text-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Qutqar loyihasini Render-da to'liq ochish</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Simulation: AIORAPORT */}
              {project.id === 'aioraport' && (
                <div className="p-5 rounded-2xl bg-obsidian-900 border border-blue-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Plane className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-semibold text-white">Airoport — Parvozlar Doskasi</span>
                    </div>
                    <span className="text-xs font-mono text-blue-300">Toshkent Xalqaro Aeroporti</span>
                  </div>

                  <div className="space-y-2">
                    {flights.map((f) => (
                      <div
                        key={f.flight}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-blue-300 font-mono">{f.flight}</span>
                          <span className="text-xs text-slate-300">{f.from} → {f.to}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-white">{f.time}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/30">
                            {f.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Airoport portalini Render-da to'liq ko'rish</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Simulation: Stray Kids Player */}
              {(project.id === 'stray-kids-platform' || project.id === 'straykids-memory') && (
                <div className="p-5 rounded-2xl bg-obsidian-900 border border-red-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Music className="w-5 h-5 text-red-500 animate-pulse" />
                      <span className="text-sm font-semibold text-white">Stray Kids — Chk Chk Boom</span>
                    </div>
                    <button
                      onClick={() => {
                        sounds.playClick();
                        setSkzPlaying(!skzPlaying);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      {skzPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{skzPlaying ? 'To\'xtatish' : 'Musiqani tinglash'}</span>
                    </button>
                  </div>

                  {skzPlaying && (
                    <div className="flex items-center justify-center gap-1 h-6">
                      {[12, 24, 18, 8, 22, 14, 28, 10, 20, 16, 26, 12].map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-gradient-to-t from-red-600 to-amber-400 rounded-full animate-bounce"
                          style={{
                            height: `${h}px`,
                            animationDuration: `${0.4 + (i % 5) * 0.15}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs font-mono text-slate-400 mb-2">Guruh a'zolari profili:</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {skzMembers.map((m) => (
                        <button
                          key={m.name}
                          onClick={() => {
                            sounds.playClick();
                            setSelectedMember(m.name);
                          }}
                          className={`p-2.5 rounded-xl text-left border transition-all ${
                            selectedMember === m.name
                              ? 'bg-red-950/60 border-red-500 text-white shadow-md shadow-red-900/30'
                              : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          <div className="text-xs font-semibold">{m.name}</div>
                          <div className="text-[10px] text-slate-400 truncate">{m.role}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Simulation: Lunara (Girls Life Book) */}
              {project.id === 'girls-life-book' && (
                <div className="p-5 rounded-2xl bg-obsidian-900 border border-purple-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-purple-400 fill-purple-400/40" />
                      <span className="text-sm font-semibold text-white">Lunara — Qalb kundaligi & Xotira simulyatori</span>
                    </div>
                    {diarySaved && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Saqlandi!
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-1.5">Bugungi kayfiyatingizni tanlang:</div>
                    <div className="flex flex-wrap gap-2">
                      {['Ilhomlangan ✨', 'Baxtli 🌸', 'Xotirjam 🌙', 'Ijodkor 🎨'].map((mood) => (
                        <button
                          key={mood}
                          onClick={() => {
                            sounds.playClick();
                            setDiaryMood(mood);
                            setDiarySaved(false);
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            diaryMood === mood
                              ? 'bg-purple-950/70 border-purple-400 text-purple-200 shadow-md shadow-purple-900/30'
                              : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {mood}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20">
                    <div className="text-[11px] font-mono text-purple-300 mb-1">Kundalik xotira satri:</div>
                    <p className="text-xs text-slate-200 italic leading-relaxed">
                      "{diaryMood.includes('Ilhomlangan') ? 'Har bir orzu — bu haqiqatga aylanishni kutayotgan kelajak nuri.' : diaryMood.includes('Baxtli') ? 'Kichik quvonchlar butun hayotimizni go\'zallashtiradi.' : diaryMood.includes('Xotirjam') ? 'Qalb sokinligi — eng katta boylik va yangi kuch manbai.' : 'Yangi g\'oyalar va ijod bilan bugun ajoyib kun bo\'ladi.'}"
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      sounds.playSuccess();
                      setDiarySaved(true);
                      setTimeout(() => setDiarySaved(false), 2500);
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-950/50"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{diarySaved ? 'Xotira Qalb Daftariga Saqlandi!' : 'Qalb Daftariga Muhrlash'}</span>
                  </button>
                </div>
              )}

              {/* Simulation: Onlayn Test */}
              {project.id === 'onlayn-test' && (
                <div className="p-5 rounded-2xl bg-obsidian-900 border border-sky-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-400 animate-pulse" />
                      <span className="text-sm font-semibold text-white">Interaktiv Test Sinovi (React & Web)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-sky-950/80 border border-sky-500/40 text-[11px] font-mono text-sky-300">
                      Vaqt: 09:45
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[11px] font-mono text-sky-300 mb-1">1-Savol:</div>
                    <div className="text-xs font-semibold text-white">
                      React-da funksional komponent ichida holat (state) yaratish uchun qaysi hook ishlatiladi?
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: 'A', text: 'useState', correct: true },
                      { id: 'B', text: 'useEffect', correct: false },
                      { id: 'C', text: 'useContext', correct: false },
                      { id: 'D', text: 'useMemo', correct: false }
                    ].map((opt) => {
                      const isChosen = quizSelected === opt.id;
                      let btnStyle = 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10';
                      if (quizAnswered) {
                        if (opt.correct) {
                          btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold';
                        } else if (isChosen) {
                          btnStyle = 'bg-red-950/80 border-red-500 text-red-200';
                        }
                      } else if (isChosen) {
                        btnStyle = 'bg-sky-950/80 border-sky-400 text-sky-200';
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => {
                            sounds.playClick();
                            setQuizSelected(opt.id);
                            setQuizAnswered(true);
                            if (opt.correct) {
                              sounds.playSuccess();
                            }
                          }}
                          className={`p-2.5 rounded-xl text-left border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span><strong className="font-mono mr-1.5">{opt.id})</strong> {opt.text}</span>
                          {quizAnswered && opt.correct && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>

                  {quizAnswered && (
                    <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs">
                      <span className="text-emerald-300 font-medium">
                        {quizSelected === 'A' ? 'Ajoyib! To\'g\'ri javob: useState (+10 ball)' : 'To\'g\'ri javob: A) useState'}
                      </span>
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setQuizSelected(null);
                          setQuizAnswered(false);
                        }}
                        className="text-[11px] font-mono text-slate-300 hover:text-white underline ml-2"
                      >
                        Qayta sinash
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Simulation: Dental Club */}
              {project.id === 'dental-club-website' && (
                <div className="p-5 rounded-2xl bg-obsidian-900 border border-cyan-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold text-slate-200">Muolaja turini tanlang:</div>
                    {dentalConfirmed && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Qabul tasdiqlandi!
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {['Estetik Stomatologiya', 'Ortodontiya & Breket', 'Tishlarni Oqartirish', 'Implantatsiya'].map((svc) => (
                      <button
                        key={svc}
                        onClick={() => {
                          sounds.playClick();
                          setDentalService(svc);
                          setDentalConfirmed(false);
                        }}
                        className={`p-2.5 rounded-xl text-left border text-xs font-medium transition-all ${
                          dentalService === svc
                            ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200'
                            : 'bg-white/5 border-white/5 text-slate-300'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      sounds.playSuccess();
                      setDentalConfirmed(true);
                    }}
                    className="w-full py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{dentalService} uchun qabulga yozilish</span>
                  </button>
                </div>
              )}

              {/* Simulation: Car Marketplace */}
              {project.id === 'car-market-bot' && (
                <div className="p-5 rounded-2xl bg-obsidian-900 border border-amber-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">Apex GT Electric Sport</div>
                      <div className="text-xs text-amber-400 font-mono">0-100 km/soat: 2.8s • 650 Ot kuchi</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-slate-400">Savatdagi modellar</div>
                      <div className="text-base font-bold text-amber-300">{cartCount}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        sounds.playClick();
                        setCartCount(prev => prev + 1);
                        setCartAdded(true);
                        setTimeout(() => setCartAdded(false), 1200);
                      }}
                      className="flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Car className="w-4 h-4" />
                      <span>{cartAdded ? 'Savatga qo\'shildi!' : 'Avtomobilni Buyurtma Qilish'}</span>
                    </button>
                    {cartCount > 0 && (
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setCartCount(0);
                        }}
                        className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-400 hover:text-slate-200"
                      >
                        Tozalash
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 px-6 bg-obsidian-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400">
            Munisa Uralova • Portfolio
          </div>
          <div className="flex items-center gap-2">
            {project.isLive && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playSuccess()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors shadow-md"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{modal.liveSiteBtn}</span>
              </a>
            )}
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{modal.sourceBtn}</span>
            </a>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="px-4 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium transition-colors"
            >
              {modal.closeBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
