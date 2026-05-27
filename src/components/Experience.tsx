import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      company: 'AI Research Lab, SIM‑UOW',
      role: 'Research Assistant',
      dates: 'Jan 2024 – Present',
      description: 'Developed AI‑powered data pipelines and prototype LLM‑based tutoring systems, publishing 2 papers in conference venues.'
    },
    {
      company: 'Stealth Startup',
      role: 'Full‑Stack Engineer (Intern)',
      dates: 'Jun 2023 – Dec 2023',
      description: 'Built a SaaS analytics dashboard with React, Node.js, and Docker, improving client data visibility by 40%.'
    },
    {
      company: 'National University of Singapore',
      role: 'Security Analyst (Part‑time)',
      dates: 'Sep 2022 – May 2023',
      description: 'Conducted penetration testing and authored internal security hardening guides for campus web services.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <div className="section-underline"></div>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <h3>{exp.role} @ {exp.company}</h3>
              <p className="timeframe">{exp.dates}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
