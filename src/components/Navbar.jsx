import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = '';
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => setMenuActive(false)}>
          <span className="logo-text">H</span>arish
        </a>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`} id="nav-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
                onClick={() => setMenuActive(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`hamburger ${menuActive ? 'active' : ''}`}
          id="hamburger"
          onClick={() => setMenuActive(!menuActive)}
        >
          <span className="bar"></span><span className="bar"></span><span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
