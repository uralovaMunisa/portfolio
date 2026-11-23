import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track hover on interactables
    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor="pointer"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  // Smooth lerp for outer ring
  useEffect(() => {
    let animId;
    const lerp = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-violet-400 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-sm shadow-violet-500/80"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isClicking ? 0.6 : 1})`,
        }}
      />

      {/* Trailing smooth magnetic ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-violet-400/40 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-violet-500/10 border-violet-400/80 backdrop-blur-[1px] shadow-lg shadow-violet-500/20'
            : isClicking
            ? 'w-6 h-6 border-violet-300'
            : 'w-8 h-8'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 16)}px, ${
            trailingPos.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      />
    </div>
  );
}

