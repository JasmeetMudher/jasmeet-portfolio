import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-greeting">
            Hi all, I'm Jasmeet Singh<span className="hero-emoji">👋</span>
          </h1>
          <p className="hero-tagline">
            A passionate <span className="highlight">Fullstack Developer</span> 🚀 having
            an experience of building Web applications with
            JavaScript / React / FastAPI / Python and some other cool
            libraries and frameworks.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#" className="btn btn-outline">See My Resume</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-container">
            <img src="/jasmeet.jpg" alt="Jasmeet" />
          </div>
        </div>
      </div>
    </section>
  );
}
