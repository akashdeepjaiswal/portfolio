import React, { useEffect, useState } from 'react';

export default function Particles({ theme }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const isDark = theme !== 'light';
    const colors = isDark
      ? [
          'rgba(56, 189, 248, 0.45)',
          'rgba(168, 85, 247, 0.4)',
          'rgba(244, 63, 94, 0.35)',
          'rgba(99, 102, 241, 0.4)'
        ]
      : [
          'rgba(37, 99, 235, 0.3)',
          'rgba(124, 58, 237, 0.25)',
          'rgba(219, 39, 119, 0.25)',
          'rgba(14, 165, 233, 0.3)'
        ];

    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.5 + 0.1,
      background: colors[Math.floor(Math.random() * colors.length)]
    }));

    setParticles(generated);
  }, [theme]);

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            background: p.background
          }}
        />
      ))}
    </div>
  );
}
