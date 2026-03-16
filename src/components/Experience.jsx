import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Experience.css';

const EXPERIENCES = [
  {
    role: 'Frontend Developer Intern',
    company: 'Bank of Baroda',
    date: 'Jan 2025 — Mar 2025',
    logo: '💻',
    description: 'Developed and optimized internal web dashboards for processing high-volume financial data. Built responsive, modern UI components to streamline banking operations and collaborated with cross-functional teams to improve overall user experience and application performance.',
    tech: ['React.js', 'JavaScript', 'UI Development', 'Performance Optimization'],
  },
];

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className={`experience-cards stagger-children ${isVisible ? 'visible' : ''}`} ref={ref}>
          {EXPERIENCES.map(({ role, company, date, logo, description, tech }, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-logo">{logo}</div>
              <div className="experience-details">
                <div className="experience-header">
                  <span className="experience-role">{role}</span>
                  <span className="experience-date">{date}</span>
                </div>
                <div className="experience-company">{company}</div>
                <p className="experience-description">{description}</p>
                <div className="experience-tech">
                  {tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
