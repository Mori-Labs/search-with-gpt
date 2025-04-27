import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Search with GPT</h3>
          <p>Smarter, Faster Search powered by AI.</p>
        </div>

        <div className="footer-section">
          <h4>Supported Browsers</h4>
          <ul>
            <li>Chrome</li>
            <li>Edge</li>
            <li>Firefox</li>
            <li>Brave</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Extension Guide</li>
            <li>Documentation</li>
            <li>Source Code</li>
            <li>Report a Bug</li>
            <li>Community Forum</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Coming Soon</h4>
          <ul>
            <li>Mobile App Support</li>
            <li>Personalized Search</li>
          </ul>
        </div>

      </div>

      <div className="footer-note">
        <p>Made with ❤️ by the Search with GPT team.</p>
        <p>Open-source and community-driven. <a href="#">Join us!</a></p>
      </div>
    </footer>
  );
};

export default Footer;
