import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with form services like Formspree, EmailJS, or Netlify Forms
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">LET'S WORK TOGETHER</h2>
          <p className="contact-tagline">
            Looking for an editor who understands pacing, storytelling, and viewer retention? 
            Let's create something memorable.
          </p>
          
          <div className="contact-methods">
            <a href="mailto:mankiratmanchanda24@gmail.com" className="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.5296 13.6839 12.4704 13.6839 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              mankiratmanchanda24@gmail.com
            </a>
            
            <a href="https://www.youtube.com/@Mankirat_Singh_24" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M23 12C23 5.925 18.075 1 12 1S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor"/>
              </svg>
              YouTube
            </a>
            
            <a href="https://www.instagram.com/mankiii_1/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2026 Mankirt Singh. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;
