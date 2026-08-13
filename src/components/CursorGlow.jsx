import React, { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateTrail = () => {
      if (trailRef.current) {
        trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.08;
        trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.08;
        trailRef.current.style.left = `${trailPos.current.x}px`;
        trailRef.current.style.top = `${trailPos.current.y}px`;
      }
      raf.current = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    raf.current = requestAnimationFrame(animateTrail);

    // Cursor interaction with cards
    const handleMouseEnter = () => {
      if (glowRef.current) glowRef.current.classList.add('cursor-hover');
      if (trailRef.current) trailRef.current.classList.add('cursor-hover');
    };
    const handleMouseLeave = () => {
      if (glowRef.current) glowRef.current.classList.remove('cursor-hover');
      if (trailRef.current) trailRef.current.classList.remove('cursor-hover');
    };
    const interactives = document.querySelectorAll('a, button, .project-card, .contact-card, .skill-icon-card, .timeline-content, .highlight-badge');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} />
      <div className="cursor-trail" ref={trailRef} />
    </>
  );
}
