import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-primary">Tanushka Patil</span>
          </h1>
          <p className="hero-subtitle">
            A passionate full-stack developer and UI/UX enthusiast crafting beautiful, functional digital experiences.
            Specialized in React, Flutter, and modern web technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Download Resume</a>
          </div>

          <div className="social-links">
            <a href="https://github.com" className="social-link" title="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com" className="social-link" title="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:john@example.com" className="social-link" title="Email">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>

        <div className="profile-image-wrapper">
          <Image
            src="/images/pfp.png"
            alt="Profile Photo"
            width={400}
            height={400}
            className="profile-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
