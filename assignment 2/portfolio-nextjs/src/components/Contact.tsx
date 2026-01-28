'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [toast, setToast] = useState<{ message: string; type: string } | null>(null);

  const showToast = (message: string, type: string) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      showToast('Please enter your name', 'error');
      return;
    }
    if (!formData.email.trim()) {
      showToast('Please enter your email', 'error');
      return;
    }
    if (!isValidEmail(formData.email)) {
      showToast('Please enter a valid email', 'error');
      return;
    }
    if (!formData.message.trim()) {
      showToast('Please enter a message', 'error');
      return;
    }

    console.log('Contact form data:', formData);
    showToast('Message sent! (simulated)', 'success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <p className="section-subtitle">
          I&apos;m open to freelance projects, collaborations, and full-time roles. Tell me about your project and let&apos;s discuss how we can build something great together.
        </p>

        <div className="contact-grid">
          <div className="contact-form-card">
            <h4>Send a message</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-input"
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h4>Let&apos;s Connect</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Want to collaborate? I&apos;m available for new projects. Send a message or reach me through the details below.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">tanushkapatil2412@gmail.com</div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <h6 style={{ marginBottom: '0.5rem', color: 'var(--text)' }}>Connect with me</h6>
            <div className="social-icons">
              <a href="#" className="social-icon-link" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="social-icon-link" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:john.doe@example.com" className="social-icon-link" title="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 600,
            zIndex: 9999,
            backgroundColor: toast.type === 'success' ? '#28a745' : '#dc3545',
            animation: 'slideIn 0.3s ease-out',
          }}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
}
