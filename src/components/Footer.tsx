import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Lee Ming Xuan. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:mingxuanlee111@gmail.com">mingxuanlee111@gmail.com</a>
          <a href="https://linkedin.com/in/lee-ming-xuan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/mx1204" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
