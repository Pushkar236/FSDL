export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <p style={{ marginBottom: '0.5rem' }}>
          &copy; 2025 Tanushka Patil. All rights reserved.
        </p>
        <div className="footer-socials">
          <a href="https://github.com" title="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com" title="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://twitter.com" title="Twitter">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
