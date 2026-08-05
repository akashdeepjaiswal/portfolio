import React from 'react';
import { educationData, certsData, awardsData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05 / Education & Achievements</span>
          <h2 className="section-title">
            Education, Certifications & <span className="gradient-text">Awards</span>
          </h2>
        </div>

        <div className="education-grid">
          {/* Column 1: Education */}
          <div className="edu-column">
            <h3 className="edu-column-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            {educationData.map((edu, idx) => (
              <div key={idx} className="edu-card reveal">
                <div className="edu-year">{edu.year}</div>
                <h4>{edu.title}</h4>
                <p className="edu-institution">{edu.institution}</p>
                {edu.grade && <span className="edu-grade">{edu.grade}</span>}
              </div>
            ))}
          </div>

          {/* Column 2: Certifications & Awards */}
          <div className="edu-column">
            <h3 className="edu-column-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                <line x1="4" y1="22" x2="4" y2="15"/>
              </svg>
              Training & Certifications
            </h3>
            {certsData.map((cert, idx) => (
              <div key={idx} className="edu-card reveal">
                <div className="edu-year">{cert.year}</div>
                <h4>{cert.title}</h4>
                <p className="edu-institution">{cert.institution}</p>
                {cert.desc && <span className="edu-grade">{cert.desc}</span>}
              </div>
            ))}

            <h3 className="edu-column-title" style={{ marginTop: '2.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Academic Awards
            </h3>
            {awardsData.map((award, idx) => (
              <div key={idx} className="edu-card reveal">
                <h4>{award.title}</h4>
                <p className="edu-institution">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
