import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">Lee Ming Xuan</h1>
        <h2 className="hero-title">AI Solutions Engineer · CS Undergraduate</h2>
        <p className="hero-tagline">I build AI systems that actually ship.</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/Lee_Ming_Xuan_CV.pdf" className="btn secondary" download>Download CV</a>
        </div>
        <div className="hero-links">
          <a href="mailto:mingxuanlee111@gmail.com" className="link-icon" aria-label="Email">✉️</a>
          <a href="https://linkedin.com/in/lee-ming-xuan" target="_blank" rel="noopener" className="link-icon" aria-label="LinkedIn">🔗</a>
          <a href="https://github.com/mx1204" target="_blank" rel="noopener" className="link-icon" aria-label="GitHub">💻</a>
        </div>
      </div>
      <div className="hero-bg" />
    </section>
  );
}
