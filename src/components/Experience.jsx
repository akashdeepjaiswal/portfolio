import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const currentExp = experienceData[activeTab];

  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02 / Work History</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">Leading frontend architecture and building high-impact web products</p>
        </div>

        <div className="exp-tabs-layout reveal">
          {/* Company Selector Sidebar */}
          <div className="exp-tabs-sidebar">
            {experienceData.map((exp, idx) => (
              <button
                key={idx}
                className={`exp-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <div className="exp-tab-indicator"></div>
                <div className="exp-tab-text">
                  <span className="exp-tab-company">{exp.company}</span>
                  <span className="exp-tab-role">{exp.role}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Company Detail Panel */}
          <div className="exp-detail-panel">
            <div className="exp-panel-header">
              <div>
                <h3 className="exp-role-title">{currentExp.role}</h3>
                <h4 className="exp-company-name">@ {currentExp.company}</h4>
              </div>
              <div className="exp-meta-badge">
                <span className="exp-date-pill">{currentExp.date}</span>
                <span className="exp-location-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {currentExp.location}
                </span>
              </div>
            </div>

            {/* Key Impact Metric Badges */}
            {currentExp.highlights && (
              <div className="exp-highlights-grid">
                {currentExp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="exp-metric-card" data-tooltip={item.desc}>
                    <span className="exp-metric-badge">{item.badge}</span>
                    {item.desc && <span className="exp-metric-desc">{item.desc}</span>}
                  </div>
                ))}
              </div>
            )}

            {/* Bullet Points */}
            <ul className="exp-bullets-list">
              {currentExp.points.map((pt, pIdx) => (
                <li key={pIdx}>
                  <span className="bullet-icon">✦</span>
                  <span className="bullet-text">{pt}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="exp-tags-wrapper">
              <span className="tags-label">Tech & Skills:</span>
              <div className="exp-tags-list">
                {currentExp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-emerald">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
