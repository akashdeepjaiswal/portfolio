import React from 'react';
import { skillsData, secondarySkills } from '../data/portfolioData';

export default function Skills() {
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
            <div key={idx} className="skill-icon-card reveal" data-tooltip={skill.tooltip}>
              <img src={skill.icon} alt={skill.name} width="48" height="48" loading="lazy" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="skills-extra reveal">
          {secondarySkills.map((item, idx) => (
            <span key={idx} className="extra-tag">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
