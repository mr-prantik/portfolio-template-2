import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <h2 className="footer-heading">Shall we?</h2>
      <p className="footer-text">
        Based in France, I work with English and French-speaking teams to create accessible digital experiences and adopt inclusive practices. Want to work together?
      </p>
      <a href="mailto:you@example.com" className="footer-button">✉ Email me</a>
      <div className="footer-links">
        <a href="#">Newsletter</a>
        <a href="#">LinkedIn</a>
        <a href="#">Medium</a>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} prantikmahata. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

