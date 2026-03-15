import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState } from 'react';
import './About.css';

const TECH_CATEGORIES = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['HTML/CSS', 'JavaScript', 'Python', 'SQL']
  },
  {
    title: 'Frameworks',
    icon: '⚡',
    skills: ['React.js', 'FastAPI']
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Postman']
  }
];

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => setAnimate(true), 200);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <section className="about section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className={`about-content fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
          <div className="tech-groups-container">
            {TECH_CATEGORIES.map((category, catIndex) => (
              <div 
                className={`tech-category ${animate ? 'animate' : ''}`} 
                key={category.title}
                style={{ transitionDelay: `${catIndex * 150}ms` }}
              >
                <div className="tech-category-header">
                  <span className="tech-category-icon">{category.icon}</span>
                  <h3 className="tech-category-title">{category.title}</h3>
                </div>
                <div className="tech-stack-grid">
                  {category.skills.map((tech, index) => (
                    <span
                      className="tech-item"
                      key={tech}
                      style={{ animationDelay: `${(catIndex * 150) + (index * 50)}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
