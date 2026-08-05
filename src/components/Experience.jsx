import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02 / Experience</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="timeline">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="timeline-item reveal">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-date">{exp.date}</span>
                    <span className="timeline-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="timeline-details">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
