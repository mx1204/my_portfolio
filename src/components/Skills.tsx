import './Skills.css';

export default function Skills() {
  const skillGroups = [
    {
      title: 'AI / LLM Engineering',
      items: ['Agentic AI Design', 'Re-Act', 'Plan & Execute', 'Multi-Agent Systems', 'RAG Pipelines', 'LangGraph', 'LangChain', 'LlamaIndex', 'Prompt & Context Engineering', 'LLMs', 'Llama 3', 'Gemini', 'Groq', 'PyTorch']
    },
    {
      title: 'Languages & Backend',
      items: ['Python', 'SQL', 'JavaScript', 'C++', 'FastAPI', 'Uvicorn', 'Google API']
    },
    {
      title: 'Data & Retrieval',
      items: ['ChromaDB', 'Vector Databases', 'Scheduled RAG', 'MongoDB']
    },
    {
      title: 'DevOps & Security',
      items: ['Docker', 'Docker Compose', 'Kubernetes', 'AES-256/RSA Cryptography']
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
