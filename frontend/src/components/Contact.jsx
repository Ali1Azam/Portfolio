import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-heading fade-up">Contact <span className="neon-text">Us</span></h2>
        <div className="heading-line"></div>

        <div className="contact-content fade-up">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h3 className="contact-sub-heading">Get in Touch</h3>
            <p className="contact-desc">Feel free to reach out to me for any questions, opportunities, or just to say hi!</p>
            <div className="contact-grid">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdaliazam122@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon-box"><i className="fas fa-envelope"></i></div>
                <span className="contact-label">Email</span>
                <strong>mdaliazam122@gmail.com</strong>
              </a>
              <a href="tel:+919102955140" className="contact-card">
                <div className="contact-icon-box"><i className="fas fa-phone"></i></div>
                <span className="contact-label">Phone</span>
                <strong>+91-9102955140</strong>
              </a>
              <a href="https://linkedin.com/in/md-ali-azam" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon-box"><i className="fab fa-linkedin-in"></i></div>
                <span className="contact-label">LinkedIn</span>
                <strong>LinkedIn Profile</strong>
              </a>
              <a href="https://github.com/Ali1Azam" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon-box"><i className="fab fa-github"></i></div>
                <span className="contact-label">GitHub</span>
                <strong>github.com/Ali1Azam</strong>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-wrapper glass-card">
            <h3 className="contact-sub-heading">Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-neon" disabled={status.type === 'loading'}>
                {status.type === 'loading' ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane"></i>
              </button>
              
              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
