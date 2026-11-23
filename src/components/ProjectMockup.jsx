import React from 'react';
import { 
  Play, 
  Search, 
  Music, 
  Film, 
  Car, 
  Activity, 
  Calendar, 
  Sparkles, 
  Flame, 
  Star, 
  ShieldCheck, 
  ShoppingBag,
  Volume2,
  ExternalLink,
  Plane,
  HeartPulse,
  Radio,
  Globe,
  BookOpen,
  Heart,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function ProjectMockup({ projectId }) {
  // 1. ANIMESHIKLAR OLAMI (https://animeshiklar.onrender.com)
  if (projectId === 'animeshiklar') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-black via-zinc-950 to-pink-950/40 p-4 relative overflow-hidden border border-pink-500/25 flex flex-col justify-between group-hover:border-pink-500/50 transition-colors">
        {/* Top bar */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 text-xs font-mono text-pink-300 font-semibold">
            <Film className="w-3.5 h-3.5 text-pink-400" />
            <span>ANIMESHIKLAR OLAMI</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Render • Live
          </span>
        </div>

        {/* Center Anime Cards Layout */}
        <div className="grid grid-cols-3 gap-2 my-auto z-10">
          {[
            { name: 'Naruto', bg: 'from-orange-900/60 to-red-950/70', badge: 'O\'zbekcha' },
            { name: 'Jujutsu', bg: 'from-purple-900/60 to-indigo-950/70', badge: 'HD 1080p' },
            { name: 'Bleach', bg: 'from-pink-900/60 to-purple-950/70', badge: 'Top 1' }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`h-20 rounded-xl bg-gradient-to-b ${item.bg} border border-white/10 p-2 flex flex-col justify-end relative overflow-hidden shadow-md`}
            >
              <div className="w-5 h-5 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center absolute top-1.5 right-1.5 text-pink-300">
                <Play className="w-2.5 h-2.5 fill-pink-300" />
              </div>
              <span className="text-[10px] font-bold text-white truncate">{item.name}</span>
              <span className="text-[8px] font-mono text-pink-200/80">{item.badge}</span>
            </div>
          ))}
        </div>

        {/* Bottom tags */}
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5 z-10">
          <span className="text-pink-300">animeshiklar.onrender.com</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <Globe className="w-3 h-3" /> Online
          </span>
        </div>

        <div className="absolute -left-6 -top-6 w-36 h-36 bg-pink-600/20 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // 2. QUTQAR — AQLLI XAVFSIZLIK TIZIMI (https://qutqar-loyihasi.onrender.com)
  if (projectId === 'qutqar-loyihasi') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-black via-zinc-950 to-emerald-950/40 p-4 relative overflow-hidden border border-emerald-500/25 flex flex-col justify-between group-hover:border-emerald-500/50 transition-colors">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-950 border border-emerald-400 flex items-center justify-center text-emerald-300 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-white">QUTQAR TIZIMI</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Render • Live
          </span>
        </div>

        {/* Radar & Safety Alert Center */}
        <div className="my-auto p-3 rounded-xl bg-obsidian-900/90 border border-emerald-500/30 flex items-center justify-between shadow-lg z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 relative">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">SOS & Tezkor Yordam</div>
              <div className="text-[10px] font-mono text-emerald-400">Aqlli xavfsizlik protokollari</div>
            </div>
          </div>
          <div className="text-right">
            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
              FAOL
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5 z-10">
          <span className="text-emerald-300">qutqar-loyihasi.onrender.com</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <Globe className="w-3 h-3" /> Online
          </span>
        </div>

        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-emerald-600/15 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // 3. AIORAPORT — AVIATSIYA PORTALI (https://aioraport.onrender.com)
  if (projectId === 'aioraport') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-black via-zinc-950 to-blue-950/40 p-4 relative overflow-hidden border border-blue-500/25 flex flex-col justify-between group-hover:border-blue-500/50 transition-colors">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-950 border border-blue-400 flex items-center justify-center text-blue-300 shadow-sm">
              <Plane className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-white">AIROPORT PORTAL</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Render • Live
          </span>
        </div>

        {/* Flight Tracker Mock Card */}
        <div className="my-auto rounded-xl bg-obsidian-900/90 border border-blue-500/30 p-2.5 flex items-center justify-between shadow-lg z-10">
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>TAS</span>
              <Plane className="w-3 h-3 text-blue-400" />
              <span>IST</span>
            </div>
            <div className="text-[10px] font-mono text-blue-300 mt-0.5">HY-271 • Parvozda</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-mono font-bold text-white">10:45</div>
            <div className="text-[9px] font-mono text-emerald-400">O'z vaqtida</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5 z-10">
          <span className="text-blue-300">aioraport.onrender.com</span>
          <span className="text-blue-400 flex items-center gap-1">
            <Globe className="w-3 h-3" /> Online
          </span>
        </div>

        <div className="absolute right-0 top-0 w-36 h-36 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // 4. STRAY KIDS INTERACTIVE MEMORY (https://straykids-memory.onrender.com)
  if (projectId === 'stray-kids-platform' || projectId === 'straykids-memory') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-black via-zinc-950 to-red-950/40 p-4 relative overflow-hidden border border-red-500/25 flex flex-col justify-between group-hover:border-red-500/50 transition-colors">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-bold">
              SKZ // STAY MEMORY
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Render • Live
          </span>
        </div>

        <div className="relative flex flex-col items-center justify-center my-auto z-10">
          <div className="w-14 h-14 rounded-2xl bg-red-950/80 border border-red-500/50 flex items-center justify-center text-red-400 shadow-xl shadow-red-950/60 group-hover:scale-110 transition-transform">
            <Music className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-white mt-2 tracking-tight">YOU MAKE STRAY KIDS STAY</span>
          <div className="flex items-center gap-1 mt-1.5">
            {[4, 12, 8, 16, 22, 14, 18, 10, 24, 16, 8, 14, 20].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-red-500/70 rounded-full"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5 z-10">
          <span className="text-red-300">straykids-memory.onrender.com</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <Globe className="w-3 h-3" /> Online
          </span>
        </div>

        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // 5. LUNARA — QALB KUNDALIGI (https://girls-life-book.onrender.com)
  if (projectId === 'girls-life-book') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-black via-zinc-950 to-purple-950/40 p-4 relative overflow-hidden border border-purple-500/25 flex flex-col justify-between group-hover:border-purple-500/50 transition-colors">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-purple-950 border border-purple-400 flex items-center justify-center text-purple-300 shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-white">LUNARA KUNDALIGI</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Render • Live
          </span>
        </div>

        <div className="my-auto p-3 rounded-xl bg-obsidian-900/90 border border-purple-500/30 flex items-center justify-between shadow-lg z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/50 flex items-center justify-center text-purple-300">
              <Heart className="w-4 h-4 fill-purple-400/40 text-purple-300" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Qalb Xotiralari & Orzular</div>
              <div className="text-[10px] font-mono text-purple-300">Estetik hayot kitobi • Maxfiy</div>
            </div>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono font-medium">
              ✨ Lunara
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5 z-10">
          <span className="text-purple-300">girls-life-book.onrender.com</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <Globe className="w-3 h-3" /> Online
          </span>
        </div>

        <div className="absolute -left-6 -bottom-6 w-36 h-36 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // 6. ONLAYN TEST PLATFORMASI (https://onlayn-test-njcq.onrender.com)
  if (projectId === 'onlayn-test') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-black via-zinc-950 to-sky-950/40 p-4 relative overflow-hidden border border-sky-500/25 flex flex-col justify-between group-hover:border-sky-500/50 transition-colors">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-sky-950 border border-sky-400 flex items-center justify-center text-sky-300 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-white">ONLAYN TEST</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Render • Live
          </span>
        </div>

        <div className="my-auto p-3 rounded-xl bg-obsidian-900/90 border border-sky-500/30 flex items-center justify-between shadow-lg z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-950/80 border border-sky-500/50 flex items-center justify-center text-sky-300">
              <Clock className="w-4 h-4 text-sky-300" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Interaktiv Imtihon & Baholash</div>
              <div className="text-[10px] font-mono text-sky-300">Real vaqt taymeri • Lahzalik ball</div>
            </div>
          </div>
          <div className="text-right">
            <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-mono font-medium">
              100% Ball
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5 z-10">
          <span className="text-sky-300">onlayn-test-njcq.onrender.com</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <Globe className="w-3 h-3" /> Online
          </span>
        </div>

        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-sky-600/15 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // 5. DENTAL CLUB CLINIC
  if (projectId === 'dental-club-website') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-black via-zinc-950 to-cyan-950/40 p-4 relative overflow-hidden border border-cyan-500/20 flex flex-col justify-between group-hover:border-cyan-500/40 transition-colors">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-white">DentalClub Modern</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            Verified Clinic
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-auto z-10">
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[10px] font-mono text-cyan-300">Service 01</div>
            <div className="text-xs font-bold text-white mt-0.5">Estetik Xizmatlar</div>
            <div className="text-[9px] text-slate-400">Digital smile design</div>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[10px] font-mono text-cyan-300">Service 02</div>
            <div className="text-xs font-bold text-white mt-0.5">Implantatsiya</div>
            <div className="text-[9px] text-slate-400">Zamonaviy jarrohlik</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5 z-10">
          <span>Qabulga Yozilish Tizimi</span>
          <span className="text-cyan-400">Video Hero UI</span>
        </div>

        <div className="absolute -left-6 bottom-0 w-36 h-36 bg-cyan-600/15 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // 6. CAR MARKET BOT
  return (
    <div className="w-full h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-black via-zinc-950 to-amber-950/40 p-4 relative overflow-hidden border border-amber-500/20 flex flex-col justify-between group-hover:border-amber-500/40 transition-colors">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <Car className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold text-white">AutoVault Showroom</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
          <ShoppingBag className="w-3 h-3" /> Savat Dvigateli
        </div>
      </div>

      <div className="my-auto p-3 rounded-xl bg-obsidian-900/90 border border-amber-500/30 flex items-center justify-between shadow-lg z-10">
        <div>
          <div className="text-xs font-bold text-white">Apex GT Electric</div>
          <div className="text-[10px] font-mono text-amber-400">Dual Motor AWD</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono font-bold text-white">2.8s</div>
          <div className="text-[9px] font-mono text-slate-400">0-100 km/h</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5 z-10">
        <span>Savat • Yetkazish • Bot UI</span>
        <span className="text-amber-400">Jarayonda</span>
      </div>

      <div className="absolute right-0 bottom-0 w-36 h-36 bg-amber-600/15 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}
