import './Skills.css';

export default function Skills() {
  const skillGroups = [
    {
      title: 'Languages & Frameworks',
      items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'React', 'Node.js', 'Express', 'Vite', 'HTML5', 'CSS3']
    },
    {
      title: 'AI / ML',
      items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Prompt Engineering']
    },
    {
      title: 'DevOps & Cloud',
      items: ['Docker', 'GitHub Actions', 'AWS (Lambda, S3)']
    },
    {
      title: 'Security',
      items: ['Cryptography', 'OWASP', 'Secure Coding Practices']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-inner slide-in-left">
        <h2 className="section-title">Skills</h2>
        <div className="section-underline"></div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill} className="badge">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
