import { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useScrollAnimation';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a className="navbar-logo" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar-logo-bracket">&lt;</span>
          Jasmeet
          <span className="navbar-logo-bracket">/&gt;</span>
        </a>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              className={`navbar-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleClick(id)}
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
