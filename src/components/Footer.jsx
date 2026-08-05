import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#hero" className="footer-logo" data-tooltip="Back to Top">
            <span className="logo-bracket">&lt;</span>AJ<span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-text">Designed & Built by Akashdeep Jaiswal</p>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
