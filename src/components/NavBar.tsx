import { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <button className="nav-toggle" onClick={toggle} aria-label="Toggle navigation">
        <span className="hamburger"></span>
      </button>
      <ul className={open ? 'nav-links open' : 'nav-links'}>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}
