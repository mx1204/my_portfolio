import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      company: 'AIPILOT PTE. LTD.',
      role: 'AI Solutions Engineer',
      dates: 'Jan 2026 – Present',
      location: 'Singapore',
      description: [
        'Supported government tender processes by preparing technical documentation, AI solution proposals, and compliance materials, including independently managing a government tender end-to-end with a successful project value in the five- to six-digit revenue range.',
        'Collaborated in the design and implementation of AI solutions, contributing to system architecture, workflows, and deployment.',
        'Participated in client-facing discussions and internal planning, aligning technical capabilities with business requirements; represented the company in the Win in Suzhou · Create & Win the Future 2026 Global Entrepreneurship Competition and achieved the Excellence Award.'
      ]
    },
    {
      company: 'SIMGE (SIM Global Education)',
      role: 'Cluster Leader',
      dates: 'Dec 2025 – Jan 2026',
      location: 'Singapore',
      description: [
        'Led and coordinated a cluster of student consultants, setting priorities, tracking deliverables, and ensuring alignment with organizational objectives.',
        'Acted as the primary liaison between internal teams and stakeholders, streamlining communication and improving execution efficiency.'
      ]
    },
    {
      company: 'SIMGE (SIM Global Education)',
      role: 'Business Development Officer',
      dates: 'Sep 2025 – Dec 2025',
      location: 'Singapore',
      description: [
        'Supported student learning and engagement initiatives through market research, data analysis, and coordination with corporate partners.',
        'Initiated and built an automated web-based data dashboard (Python) to replace manual reporting workflows, converting raw .csv/.xlsx inputs into interactive insights and reducing analysis time by over 50%, enabling faster, data-driven decisions on career workshops.'
      ]
    },
    {
      company: 'Hua Xing International Business (Singapore)',
      role: 'Co-Founder',
      dates: 'May 2024 – Mar 2025',
      location: 'Singapore',
      description: [
        'Launched Hua Xing International Business with zero initial revenue and grew operations to over 20 inbound tours/month, serving tour groups of 20–40 pax.',
        'Built internal data processes to improve operational efficiency, including semi-automated cost breakdowns and margin analysis.',
        'Developed strong cross-functional skills by aligning logistics, finance, and marketing efforts to support business growth.'
      ]
    },
    {
      company: 'Singapore Army',
      role: 'Artillery - Leadership Trainee | Distinguished Honour Graduate',
      dates: 'Feb 2020 – Feb 2022',
      location: 'Singapore',
      description: [
        'Selected for a 6-month leadership course and graduated as a Distinguished Honour Graduate, ranking among the top performers.',
        'Trained in team leadership, mission planning, and high-pressure decision-making in both field and academic settings.',
        'Demonstrated initiative, resilience, and adaptability. Skills now applied to academic and professional settings.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-inner slide-in-right">
        <h2 className="section-title">Experience</h2>
        <div className="section-underline"></div>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <h3>{exp.role} @ {exp.company}</h3>
              <p className="timeframe">{exp.dates} • {exp.location}</p>
              {Array.isArray(exp.description) ? (
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
