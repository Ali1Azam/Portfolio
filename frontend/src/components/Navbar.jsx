import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 200) current = sec.getAttribute('id');
      });
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#hero" className="logo">MA<span className="accent">Portfolio</span></a>
        <button 
          className="mobile-toggle" 
          id="mobile-toggle" 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <i className={menuActive ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`} id="nav-links">
          {['hero', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'].map(link => (
            <li key={link}>
              <a 
                href={`#${link}`} 
                className={`nav-link ${activeLink === link ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
