import { useEffect, useState } from 'react';
import './About.css';

export default function About() {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);
  
  const fullText = 'I am a final-year Computer Science undergraduate, specializing in Digital Systems Security and AI & Big Data. I have hands-on experience building production-ready AI systems using LLMs, RAG, and autonomous agents, with a strong focus on privacy-first and enterprise applications.\n\nAs an AI Solutions Engineer, I have supported government tender projects and contributed to the development of AI solutions, bridging technical and business requirements. I have built systems such as a document intelligence chatbot for contract analysis and an AI email agent that automates classification and response workflows.\n\nI enjoy working at the intersection of technology and real-world impact, and I am particularly interested in applying AI to improve productivity, decision-making, and learning systems. I am open to opportunities where I can contribute to innovative AI projects and enterprise solutions.';

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let iteration = 0;
    let interval: number;

    const startDecryption = () => {
      interval = setInterval(() => {
        setDisplayText(fullText.split('').map((char, index) => {
          if (index < iteration) {
            return fullText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));

        if (iteration >= fullText.length) {
          clearInterval(interval);
          setIsDecrypted(true);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isDecrypted) {
          startDecryption();
        }
      });
    }, { threshold: 0.5 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      clearInterval(interval);
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, [fullText, isDecrypted]);

  return (
    <section id="about" className="about-section">
      <div className="section-inner fade-in">
        <h2 className="section-title">About Me</h2>
        <div className="section-underline"></div>
      <p className="encrypted-text">{displayText}</p>
      </div>
    </section>
  );
}

