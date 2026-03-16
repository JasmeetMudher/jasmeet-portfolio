import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const TECH_ICONS = [
  { name: 'HTML5', image: `${import.meta.env.BASE_URL}skills/html.png` },
  { name: 'CSS3', image: `${import.meta.env.BASE_URL}skills/css-3.png` },
  { name: 'JavaScript', image: `${import.meta.env.BASE_URL}skills/js.png` },
  { name: 'Python', image: `${import.meta.env.BASE_URL}skills/python.png` },
  { name: 'React.js', image: `${import.meta.env.BASE_URL}skills/react.png` },
  { name: 'FastAPI', image: `${import.meta.env.BASE_URL}skills/FastAPI.png` },
  { name: 'SQL', image: `${import.meta.env.BASE_URL}skills/SQL.png` },
  { name: 'Git', image: `${import.meta.env.BASE_URL}skills/git.png` },
  { name: 'GitHub', image: `${import.meta.env.BASE_URL}skills/github.png` },
  { name: 'Postman', image: `${import.meta.env.BASE_URL}skills/postman.png` },
];

const SKILL_POINTS = [
  'Build dynamic frontends using React and modern JavaScript.',
  'Design and deploy secure REST APIs with FastAPI',
  'Structure optimized relational databases.',
];

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className={`skills-content fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="skills-icons">
            {TECH_ICONS.map(({ name, image }) => (
              <div className="skill-icon" key={name}>
                <img src={image} alt={name} />
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
