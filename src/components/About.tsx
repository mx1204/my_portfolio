import { useEffect, useState } from 'react';
import './About.css';

const fullText = 'I am a final-year Computer Science undergraduate, specializing in Digital Systems Security and AI & Big Data. I have hands-on experience building production-ready AI systems using LLMs, RAG, and autonomous agents, with a strong focus on privacy-first and enterprise applications.\n\nAs an AI Solutions Engineer, I have supported government tender projects and contributed to the development of AI solutions, bridging technical and business requirements. I have built systems such as a document intelligence chatbot for contract analysis and an AI email agent that automates classification and response workflows.\n\nI enjoy working at the intersection of technology and real-world impact, and I am particularly interested in applying AI to improve productivity, decision-making, and learning systems. I am open to opportunities where I can contribute to innovative AI projects and enterprise solutions.';
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getDecryptedFrame(revealedCharacters: number) {
  return fullText.split('').map((character, index) => {
    if (/\s/.test(character)) {
      return character;
    }

    if (index < revealedCharacters) {
      return character;
    }

    return chars[Math.floor(Math.random() * chars.length)];
  }).join('');
}

export default function About() {
  const [displayText, setDisplayText] = useState(() => getDecryptedFrame(0));
  const [isDecrypted, setIsDecrypted] = useState(false);

  useEffect(() => {
    let iteration = 0;
    let interval: number | undefined;

    const startDecryption = () => {
      if (interval) {
        return;
      }

      interval = window.setInterval(() => {
        setDisplayText(getDecryptedFrame(iteration));

        if (iteration >= fullText.length) {
          window.clearInterval(interval);
          setIsDecrypted(true);
        }

        iteration += 0.8;
      }, 15);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isDecrypted) {
          startDecryption();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
      observer.disconnect();
    };
  }, [isDecrypted]);

  return (
    <section id="about" className="about-section">
      <div className="section-inner fade-in">
        <h2 className="section-title">About Me</h2>
        <div className="section-underline"></div>
        <p className="encrypted-text" aria-label={fullText}>
          <span className="encrypted-text__sizer" aria-hidden="true">{fullText}</span>
          <span className="encrypted-text__display" aria-hidden="true">{displayText}</span>
        </p>
      </div>
    </section>
  );
}

