import React, { useEffect, useState, useRef } from 'react';
import { personalInfo, statsData } from '../data/portfolioData';

const TYPED_ROLES = [
  'Senior Software Engineer (Frontend)',
  'Domino\'s Web/PWA Lead',
  'React.js & Vue.js Expert',
  'Web Performance Specialist',
  'Frontend Tech Lead'
];

export default function Hero() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [typedText, setTypedText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const cardRef = useRef(null);

  // Stats count animation
  useEffect(() => {
    const duration = 1800;
    const steps = 50;
    const intervalTime = duration / steps;
    const timer = setInterval(() => {
      setCounts((prev) =>
        prev.map((curr, i) => {
          const target = statsData[i].number;
          const step = Math.ceil(target / steps);
          return curr < target ? Math.min(curr + step, target) : target;
        })
      );
    }, intervalTime);
    return () => clearInterval(timer);
  }, []);

  // Typewriter
  useEffect(() => {
    const currentWord = TYPED_ROLES[wordIdx];
    let timeout;
    if (!isDeleting && charIdx < currentWord.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 65);
    } else if (!isDeleting && charIdx === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 35);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setWordIdx((w) => (w + 1) % TYPED_ROLES.length);
    }
    setTypedText(currentWord.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, wordIdx]);

  // 3D card tilt
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = (-y / rect.height) * 12;
      const rotY = (x / rect.width) * 12;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    };
    const handleLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    };
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section className="hero-modern" id="hero">
      {/* Dynamic ambient lighting orbs */}
      <div className="hero-ambient-glow glow-emerald"></div>
      <div className="hero-ambient-glow glow-indigo"></div>

      <div className="container hero-split-container">
        {/* Left Content Column */}
        <div className="hero-left-content">
          <div className="hero-avail-pill animate-fade-up">
            <span className="live-emerald-dot"></span>
            <span>{personalInfo.badge}</span>
          </div>

          <h1 className="hero-main-heading animate-fade-up delay-1">
            Akashdeep <span className="text-emerald-gradient">Jaiswal</span>
          </h1>

          <div className="hero-typewriter-box animate-fade-up delay-2">
            <span className="typed-text">{typedText}</span>
            <span className="type-cursor">|</span>
          </div>

          <p className="hero-lead-text animate-fade-up delay-3">
            Senior Software Engineer (Frontend) with <strong>6 years</strong> of experience building scalable, high-performance web applications at <strong>Domino's India</strong>. Specialized in frontend architecture, PWA development, Lighthouse optimization, and cross-platform experiences.
          </p>

          <div className="hero-cta-group animate-fade-up delay-4">
            <a href="#contact" className="btn-emerald-primary" data-tooltip="Send Email">
              <span>Get in Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slate-outline"
              data-tooltip="GitHub Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slate-outline"
              data-tooltip="LinkedIn Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Key Quick Stats */}
          <div className="hero-quick-stats animate-fade-up delay-5">
            {statsData.map((st, i) => (
              <div key={i} className="quick-stat-item">
                <div className="stat-num-text">
                  <span>{counts[i]}</span>
                  {st.suffix && <span className="stat-suff">{st.suffix}</span>}
                </div>
                <span className="stat-lbl-text">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card Column */}
        <div className="hero-right-showcase animate-fade-up delay-2">
          <div className="hero-profile-card" ref={cardRef}>
            <div className="card-border-glow"></div>
            <img src="./images/profile.jpg" alt="Akashdeep Jaiswal" className="hero-profile-img" />
            
            <div className="hero-floating-pill float-pill-1">
              <span className="pill-emoji">🍕</span>
              <span className="pill-txt">Domino's Web/PWA Lead</span>
            </div>
            
            <div className="hero-floating-pill float-pill-2">
              <span className="pill-emoji">⚡</span>
              <span className="pill-txt">85+ Lighthouse</span>
            </div>

            <div className="hero-floating-pill float-pill-3">
              <span className="pill-emoji">💻</span>
              <span className="pill-txt">React & Vue.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
