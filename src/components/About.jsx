import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const details = [
    {
      title: "Experience",
      value: "6 Years in Web Engineering",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      title: "Current Role",
      value: "Senior Software Engineer (Frontend) @ Jubilant Foodworks",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    {
      title: "Specialization",
      value: "React.js, Vue.js, Frontend Architecture, PWAs",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01 / Background</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="about-grid-modern">
          <div className="about-bio-box reveal">
            {personalInfo.about.map((paragraph, idx) => (
              <p key={idx} className="about-bio-p">{paragraph}</p>
            ))}
          </div>

          <div className="about-cards-column reveal">
            {details.map((item, idx) => (
              <div key={idx} className="detail-card">
                <div className="detail-icon-glow">{item.icon}</div>
                <div className="detail-content">
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
