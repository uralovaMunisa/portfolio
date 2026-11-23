import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system for ambient dust / cosmic sparkles
    const particleCount = Math.min(35, Math.floor(width / 40));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.4 + 0.1,
        color: i % 3 === 0 ? 'rgba(139, 92, 246,' : i % 3 === 1 ? 'rgba(59, 130, 246,' : 'rgba(255, 255, 255,',
      });
    }

    let animationFrame;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian Radial Backdrop */}
      <div className="absolute inset-0 bg-[#08080d]" />

      {/* Atmospheric gradient mesh spotlights */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-purple-900/20 via-violet-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] -left-[10%] w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[65%] -right-[10%] w-[650px] h-[650px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[550px] h-[500px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Subtle dust particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}

