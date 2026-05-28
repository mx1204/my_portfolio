import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const taglines = ['I build AI systems that actually ship.', 'I design intelligent solutions at scale.', 'I turn data into actionable insights.'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentTagline = taglines[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTagline.length) {
          setDisplayText(currentTagline.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTagline.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">Lee Ming Xuan</h1>
        <h2 className="hero-title">AI Solutions Engineer · CS Undergraduate</h2>
        <p className="hero-tagline">{displayText}<span className="cursor">|</span></p>
        <div className="hero-ctas">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/Lee_Ming_Xuan_CV.pdf" className="btn secondary" download>Download CV</a>
        </div>
        <div className="contact-box">
          <a href="mailto:mingxuanlee111@gmail.com" className="contact-link">
            <span className="contact-icon">✉️</span>
            <span className="contact-label">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/mxlee0101/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">�</span>
            <span className="contact-label">LinkedIn</span>
          </a>
          <a href="https://github.com/mx1204" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="contact-icon">💻</span>
            <span className="contact-label">GitHub</span>
          </a>
        </div>
      </div>
      <div className="hero-bg" />
    </section>
  );
}
