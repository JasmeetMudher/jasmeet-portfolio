import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const TECH_ICONS = [
  { name: 'HTML5', emoji: '🌐' },
  { name: 'CSS3', emoji: '🎨' },
  { name: 'JavaScript', emoji: '⚡' },
  { name: 'Python', emoji: '🐍' },
  { name: 'React.js', emoji: '⚛️' },
  { name: 'FastAPI', emoji: '🚀' },
  { name: 'SQL', emoji: '🗄️' },
  { name: 'Git', emoji: '📦' },
  { name: 'GitHub', emoji: '🐙' },
  { name: 'Postman', emoji: '📫' },
];

const SKILL_POINTS = [
  'Build dynamic frontends using React and modern JavaScript.',
  'Design and deploy secure REST APIs with FastAPI and Flask.',
  'Structure optimized relational databases.',
];

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="skills section" id="what-i-do">
      <div className="container">
        <div className={`skills-content fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="skills-icons">
            {TECH_ICONS.map(({ name, emoji }) => (
              <div className="skill-icon" key={name}>
                <span>{emoji}</span>
                <span className="tooltip">{name}</span>
              </div>
            ))}
          </div>

          <div className="skills-description">
            <h2>What I Do</h2>
            {SKILL_POINTS.map((point, i) => (
              <div className="skill-point" key={i}>
                <span className="skill-point-icon">⚡</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
