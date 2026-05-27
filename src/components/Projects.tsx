import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Gmail‑Telegram AI Copilot',
      tech: ['Node.js', 'Google APIs', 'Telegram Bot', 'OpenAI'],
      description:
        'Bidirectional AI assistant that reads Gmail threads and replies via Telegram, automating daily email tasks.',
      link: 'https://github.com/mx1204/gmail-telegram-copilot',
    },
    {
      title: 'GrammarLift',
      tech: ['React', 'TypeScript', 'TensorFlow.js', 'Vite'],
      description:
        'Web app that uses a fine‑tuned language model to rewrite user sentences for better grammar and tone.',
      link: 'https://github.com/mx1204/grammalift',
    },
    {
      title: 'SG Tech Pulse Crew',
      tech: ['Next.js', 'MongoDB', 'TailwindCSS', 'Vercel'],
      description:
        'Community platform for Singapore tech meet‑ups, featuring event calendars, member profiles, and live chat.',
      link: 'https://github.com/mx1204/sg-tech-pulse-crew',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner fade-in">
        <h2 className="section-title">Projects</h2>
        <div className="section-underline"></div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card card">
              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="project-description">{p.description}</p>
                <ul className="tech-list">
                  {p.tech.map((t) => (
                    <li key={t} className="badge">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
