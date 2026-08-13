import React, { useRef } from 'react';
import { skillsData, secondarySkills } from '../data/portfolioData';

export default function Skills() {
  const cardRefs = useRef([]);

  const handleCardMove = (e, idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    card.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-8px)`;
    card.style.boxShadow = `0 20px 40px rgba(56,189,248,0.25), ${x * -1}px ${y * -1}px 20px rgba(168,85,247,0.15)`;
  };

  const handleCardLeave = (idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)';
    card.style.boxShadow = '';
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 / Skills</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="skills-icon-grid">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="skill-icon-card reveal"
              data-tooltip={skill.tooltip}
              ref={el => cardRefs.current[idx] = el}
              onMouseMove={(e) => handleCardMove(e, idx)}
              onMouseLeave={() => handleCardLeave(idx)}
              style={{ transitionProperty: 'box-shadow, background, border-color' }}
            >
              <div className="skill-icon-shine"></div>
              <img src={skill.icon} alt={skill.name} width="48" height="48" loading="lazy" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="skills-extra reveal">
          {secondarySkills.map((item, idx) => (
            <span
              key={idx}
              className="extra-tag"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
