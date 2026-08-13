import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04 / Featured Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Highlights of personal engineering applications and full-stack projects</p>
        </div>

        <div className="bento-projects-grid">
          {projectsData.map((project, idx) => {
            const isFeatured = idx === 0 || idx === 1;
            return (
              <div
                key={idx}
                className={`bento-card reveal ${isFeatured ? 'bento-featured' : 'bento-compact'}`}
                style={{ '--stagger': idx }}
              >
                <div className="bento-card-glow"></div>
                <div className="bento-header">
                  <span className="bento-num">{project.number}</span>
                  <span className="bento-badge">{project.subtitle}</span>
                </div>

                <div className="bento-body">
                  <h3 className="bento-title">{project.title}</h3>
                  <p className="bento-desc">{project.desc}</p>
                </div>

                <div className="bento-footer">
                  <div className="bento-tech-list">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="bento-tech-pill">{t}</span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-link-btn"
                      aria-label="View source code"
                      data-tooltip="View GitHub Code"
                    >
                      <span>Code</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
