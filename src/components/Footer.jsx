import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo"><span className="logo-text">H</span>arish</div>
          <p>Software Engineer | Full Stack Developer</p>
          <div className="footer-social">
            <a href="mailto:abiharish2112@gmail.com" className="social-link" data-tooltip="Email"><i className="fas fa-envelope"></i></a>
            <a href="https://linkedin.com/in/harish-d-0212a9373" target="_blank" rel="noopener noreferrer" className="social-link" data-tooltip="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/harish2112-tech" target="_blank" rel="noopener noreferrer" className="social-link" data-tooltip="GitHub"><i className="fab fa-github"></i></a>
            <a href="tel:+919597677542" className="social-link" data-tooltip="Phone"><i className="fas fa-phone"></i></a>
          </div>
        </div>
        <p className="copyright">© 2024 Harish D. All rights reserved. Built with <i className="fas fa-heart" style={{color: '#ef4444'}}></i></p>
      </div>
    </footer>
  );
};

export default Footer;
