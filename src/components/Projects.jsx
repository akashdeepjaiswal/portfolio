import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04 / Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={idx} className="project-card reveal">
              <div className="project-number">{project.number}</div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="View source code"
                  data-tooltip="View Code on GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
