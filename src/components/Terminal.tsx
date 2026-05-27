import './Terminal.css';

export default function Terminal() {
  const commands = [
    { prompt: '$', text: 'npm install @tensorflow/tfjs' },
    { prompt: '$', text: 'npm run dev' },
    { prompt: '$', text: 'git add .' },
    { prompt: '$', text: 'git commit -m "feat: add AI model"' },
    { prompt: '$', text: 'git push origin main' },
    { prompt: '>', text: '✓ Deployment successful' },
  ];

  return (
    <div className="terminal-container fade-in">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
        <div className="terminal-title">workflow.sh</div>
      </div>
      <div className="terminal-body">
        {commands.map((cmd, index) => (
          <div key={index} className="terminal-line">
            <span className="terminal-prompt">{cmd.prompt}</span>
            <span className="terminal-text">{cmd.text}</span>
          </div>
        ))}
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cursor">_</span>
        </div>
      </div>
    </div>
  );
}
