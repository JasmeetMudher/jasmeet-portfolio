import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Mental Health Sentiment Analysis Platform',
    description: 'Developed a comprehensive Machine Learning system to detect and classify mental health sentiments. Fine-tuned a RoBERTa transformer model (75.1% accuracy), engineered a real-time Gradio API, and built a full-stack React/JavaScript UI with Supabase for real-time data persistence.',
    icon: '🧠',
    tags: ['Python', 'RoBERTa', 'React', 'JavaScript', 'Supabase', 'Gradio'],
    liveUrl: '#',
    githubUrl: 'https://github.com/JasmeetMudher/Mental-Health-Detection',
  },
  {
    title: 'Sustainable Artisan E-commerce Platform',
    description: 'Developed a full-stack e-commerce marketplace using the Laravel framework to connect Kenyan artisans with global consumers. Implemented a Role-Based Access Control (RBAC) system with secure authentication, engineered core business modules (Product Management, Order Lifecycle, Payment Processing), and utilized OOAD for scalable system diagrams. Managed the project lifecycle using Agile/Scrum methodologies.',
    icon: '🛍️',
    tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Agile/Scrum'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Drug-Dispensary Management System',
    description: 'Developed a full-stack MIS to digitize prescriptions. Architected a Role-Based Access Control (RBAC) system for Admins, Dispensaries, and Pharmacies. Designed a MySQL schema for complex health data relationships and engineered a PHP mechanism for "Prescription Locking".',
    icon: '💊',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    liveUrl: '#',
    githubUrl: 'https://github.com/JasmeetMudher/Drug-Dispensary',
  },
  {
    title: 'Meteor Escape: 3D Survival Game',
    description: 'Developed an interactive 3D survival game featuring real-time aircraft movement and procedural meteor generation. Engineered custom collision detection, dynamic difficulty scaling algorithms, and Tween-based animations. Optimized rendering performance for consistent frame rates across WebGL browsers.',
    icon: '☄️',
    tags: ['JavaScript', 'Three.js', 'WebGL', 'TweenMax.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/JasmeetMudher/ComputerGraphicsProject',
  },
  {
    title: 'Distributed Load Balancer with Consistent Hashing',
    description: 'Engineered a Dockerized Distributed Load Balancer using consistent hashing (512 slots) to efficiently route traffic to backend replicas. Developed dynamic scaling via RESTful APIs and a heartbeat monitoring system for automated recovery. Leveraged Docker Compose for portable Linux deployment and visualized 10K request performance with Matplotlib.',
    icon: '⚖️',
    tags: ['Python', 'Docker', 'Flask', 'Linux'],
    liveUrl: '#',
    githubUrl: 'https://github.com/JasmeetMudher/distributed-load-balancer',
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className={`projects-grid stagger-children ${isVisible ? 'visible' : ''}`} ref={ref}>
          {PROJECTS.map(({ title, description, icon, tags, liveUrl, githubUrl }) => (
            <div className="project-card" key={title}>
              <div className="project-card-header">
                <span className="project-card-icon">{icon}</span>
                <div className="project-card-links">
                  <a href={githubUrl} className="project-card-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={liveUrl} className="project-card-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="project-card-title">{title}</h3>
              <p className="project-card-description">{description}</p>
              <div className="project-card-tags">
                {tags.map((tag) => (
                  <span className="project-card-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
