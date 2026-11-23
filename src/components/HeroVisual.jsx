import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Atom, Code2, Zap, Layers, RefreshCw } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function HeroVisual() {
  const [activeMode, setActiveMode] = useState('generative'); // 'generative' | 'monogram'
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Interactive 3D wireframe generative orb on canvas
  useEffect(() => {
    if (activeMode !== 'generative') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = 420);
    let height = (canvas.height = 420);

    // Generate 3D sphere points
    const points = [];
    const numPoints = 140;
    const radius = 135;

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / numPoints);
      const phi = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
        baseX: radius * Math.sin(theta) * Math.cos(phi),
        baseY: radius * Math.sin(theta) * Math.sin(phi),
        baseZ: radius * Math.cos(theta),
      });
    }

    let rotX = 0;
    let rotY = 0;
    let animationFrame;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse influence
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      rotY += 0.007 + mouseRef.current.x * 0.00008;
      rotX += 0.004 + mouseRef.current.y * 0.00008;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected = [];

      // Center of canvas
      const cx = width / 2;
      const cy = height / 2;

      // Project 3D points to 2D
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate X
        let y2 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        // Perspective projection
        const fov = 340;
        const scale = fov / (fov + z2);
        const x2D = x1 * scale + cx;
        const y2D = y2 * scale + cy;

        projected.push({
          x: x2D,
          y: y2D,
          z: z2,
          scale: scale,
          alpha: (z2 + radius) / (2 * radius),
        });
      }

      // Draw subtle connecting lines between close points
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 1300) {
            const alpha = (1 - Math.sqrt(distSq) / 36) * 0.28 * projected[i].scale;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${Math.max(0, alpha)})`;
            ctx.stroke();
          }
        }
      }

      // Draw point nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const r = Math.max(0.8, 2.2 * p.scale);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);

        if (i % 5 === 0) {
          ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha * 0.9})`;
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 8;
        } else if (i % 7 === 0) {
          ctx.fillStyle = `rgba(236, 72, 153, ${p.alpha * 0.9})`;
          ctx.shadowColor = '#ec4899';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha * 0.9})`;
          ctx.shadowColor = '#a855f7';
          ctx.shadowBlur = 6;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left - rect.width / 2;
      mouseRef.current.targetY = e.clientY - rect.top - rect.height / 2;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, [activeMode]);

  const toggleMode = () => {
    sounds.playClick();
    setActiveMode((prev) => (prev === 'generative' ? 'monogram' : 'generative'));
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Outer Glow Halo */}
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-violet-600/20 via-purple-500/10 to-blue-500/20 blur-3xl -z-10 animate-pulse-slow" />

      {/* Main Container Card */}
      <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-3xl glass-panel p-4 flex flex-col items-center justify-center border border-white/10 shadow-2xl shadow-purple-950/40 group overflow-hidden">
        {/* Subtle Ambient Corner Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-500/20 to-transparent rounded-tr-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-bl-3xl pointer-events-none" />

        {/* Dynamic Mode: Generative 3D Matrix */}
        {activeMode === 'generative' ? (
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <canvas
              ref={canvasRef}
              width={420}
              height={420}
              className="w-full h-full cursor-grab active:cursor-grabbing"
              title="Interactive 3D Generative Orb — Move your cursor to rotate"
            />
            
            {/* Center Core Badge */}
            <div className="absolute pointer-events-none flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl glass-panel-elevated border border-violet-400/30 flex items-center justify-center shadow-lg shadow-purple-500/20 animate-float">
                <Atom className="w-8 h-8 text-violet-400 animate-spin" style={{ animationDuration: '14s' }} />
              </div>
              <span className="mt-3 text-[11px] font-mono uppercase tracking-widest text-violet-300/80 bg-violet-950/60 px-2.5 py-1 rounded-full border border-violet-500/20">
                Interactive Core
              </span>
            </div>
          </div>
        ) : (
          /* Dynamic Mode: Developer Crest / Monogram */
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Orbiting Tech Rings */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: '30s' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-violet-900 border border-violet-400 flex items-center justify-center text-violet-200 shadow-md shadow-violet-500/40">
                <Atom className="w-4 h-4" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-blue-900 border border-blue-400 flex items-center justify-center text-blue-200 shadow-md shadow-blue-500/40">
                <Zap className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-dashed border-purple-400/25 animate-spin" style={{ animationDuration: '22s', animationDirection: 'reverse' }}>
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-900 border border-slate-400 flex items-center justify-center text-slate-200 shadow-md">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-7 h-7 rounded-full bg-pink-900 border border-pink-400 flex items-center justify-center text-pink-200 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Central Crest */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl glass-panel-elevated border border-violet-400/40 flex flex-col items-center justify-center shadow-2xl shadow-purple-900/50">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-violet-400 tracking-tight">
                MU
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 mt-1">
                Munisa Uralova
              </span>
            </div>

            <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/20 text-xs font-mono text-purple-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Frontend Explorer & Craft
            </div>
          </div>
        )}

        {/* Interactive Mode Toggle Badge at bottom */}
        <button
          onClick={toggleMode}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-900/90 hover:bg-violet-950/80 border border-white/10 hover:border-violet-500/40 text-[11px] font-mono text-slate-300 transition-all shadow-md group/btn"
          title="Toggle between Generative Art and Developer Crest"
        >
          <RefreshCw className="w-3 h-3 text-violet-400 group-hover/btn:rotate-180 transition-transform duration-500" />
          <span>{activeMode === 'generative' ? 'View Crest' : 'View Canvas Orb'}</span>
        </button>

        {/* Location & Time Indicator badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-xl bg-obsidian-900/80 border border-white/10 text-[11px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Uzbekistan • Active</span>
        </div>
      </div>

      {/* Floating Meta Pills around visual */}
      <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2 px-3.5 py-2 rounded-2xl glass-panel-elevated border border-violet-500/30 text-xs text-slate-200 shadow-xl shadow-black/60 animate-float">
        <Atom className="w-4 h-4 text-violet-400 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="font-medium">React.js Architecture</span>
      </div>

      <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-2xl glass-panel-elevated border border-blue-500/30 text-xs text-slate-200 shadow-xl shadow-black/60 animate-float" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span className="font-medium">Creative Interactions</span>
      </div>
    </div>
  );
}

