import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="logo footer-logo">MA<span className="accent">Portfolio</span></a>
        <p className="footer-quote">"Building solutions through code, data, and continuous learning."</p>
        <div className="footer-socials">
          <a href="https://github.com/AliAzam" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/md-ali-azam" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="mailto:mdaliazam122@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
        </div>
        <div className="footer-line"></div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Md Ali Azam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
