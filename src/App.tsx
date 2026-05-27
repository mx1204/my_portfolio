import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import Terminal from './components/Terminal';

function App() {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // Custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);

    const trails: HTMLElement[] = [];
    const trailCount = 5;

    for (let i = 0; i < trailCount; i++) {
      const t = document.createElement('div');
      t.className = 'cursor-trail';
      t.style.opacity = (0.5 - i * 0.1).toString();
      document.body.appendChild(t);
      trails.push(t);
    }

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.left = cursorX - 10 + 'px';
      cursor.style.top = cursorY - 10 + 'px';

      trails.forEach((t, i) => {
        const delay = (i + 1) * 0.05;
        const x = cursorX - 4 + (mouseX - cursorX) * delay;
        const y = cursorY - 4 + (mouseY - cursorY) * delay;
        t.style.left = x + 'px';
        t.style.top = y + 'px';
      });

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      document.body.removeChild(cursor);
      document.body.removeChild(trail);
      trails.forEach(t => document.body.removeChild(t));
    };
  }, []);

  return (
    <>
      <Background3D />
      <NavBar />
      <main id="main-content">
        <Hero />
        <Terminal />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
