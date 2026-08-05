import React, { useEffect, useState } from 'react';
import { personalInfo, statsData } from '../data/portfolioData';

export default function Hero() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCounts((prev) =>
        prev.map((current, idx) => {
          const target = statsData[idx].number;
          const step = Math.ceil(target / steps);
          if (current < target) {
            return Math.min(current + step, target);
          }
          return target;
        })
      );
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="status-dot"></span>
            {personalInfo.badge}
          </div>

          <h1 className="hero-name animate-fade-up delay-1">
            Akashdeep<br />
            <span className="gradient-text">Jaiswal</span>
          </h1>

          <p className="hero-title animate-fade-up delay-2">{personalInfo.title}</p>

          <p className="hero-summary animate-fade-up delay-3">
            Senior Frontend Engineer with <strong>5+ years</strong> of experience building scalable web applications
            using Vue.js, React.js, and JavaScript. Skilled in performance optimization, PWAs, and frontend architecture,
            with experience delivering high-impact features for <strong>Domino's India</strong>.
          </p>

          <div className="hero-cta animate-fade-up delay-4">
            <a href="#contact" className="btn btn-primary" data-tooltip="Send an email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get in Touch
            </a>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              data-tooltip="Open GitHub Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              data-tooltip="Open LinkedIn Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image-container animate-fade-up delay-2">
          <div className="profile-card">
            <img src="./images/profile.jpg" alt="Akashdeep Jaiswal" className="profile-img" loading="eager" />
            <div className="profile-floating-badge badge-1">
              <span className="badge-icon">🍕</span>
              <span className="badge-text">Domino's PWA Lead</span>
            </div>
            <div className="profile-floating-badge badge-2">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">85+ Lighthouse Score</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats-wrapper animate-fade-up delay-5">
        <div className="container">
          <div className="hero-stats">
            {statsData.map((stat, idx) => (
              <div key={idx} className="stat">
                <span className="stat-number">{counts[idx]}</span>
                {stat.suffix && (
                  <span className={stat.suffix === '+' ? 'stat-plus' : 'stat-percent'}>{stat.suffix}</span>
                )}
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
