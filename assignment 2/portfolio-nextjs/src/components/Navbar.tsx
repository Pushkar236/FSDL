'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light-theme');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const stored = localStorage.getItem('theme') || 'light-theme';
    setTheme(stored);
    document.body.className = stored;

    // Scroll spy for active nav link
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 200) {
          current = section.getAttribute('id') || 'home';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          aria-label="Go to home section"
        >
          Portfolio
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`} role="menubar">
          <li role="none">
            <a
              role="menuitem"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('home'); } }}
              tabIndex={0}
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Home
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('about'); } }}
              tabIndex={0}
              aria-current={activeSection === 'about' ? 'page' : undefined}
            >
              About
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('skills'); } }}
              tabIndex={0}
              aria-current={activeSection === 'skills' ? 'page' : undefined}
            >
              Skills
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('projects'); } }}
              tabIndex={0}
              aria-current={activeSection === 'projects' ? 'page' : undefined}
            >
              Projects
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection('contact'); } }}
              tabIndex={0}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Contact
            </a>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            id="themeToggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark-theme' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark-theme'}
            title={theme === 'dark-theme' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={theme === 'dark-theme' ? 'bi bi-sun-fill' : 'bi bi-moon-fill'} aria-hidden="true"></i>
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation"
          >
            <i className={mobileMenuOpen ? 'bi bi-x' : 'bi bi-list'} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
