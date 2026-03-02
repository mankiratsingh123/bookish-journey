
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container-simple">
        <div className="contact-content">
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
              <div>
                <span className="link-label">Email</span>
                <span className="link-value">mankiratmanchanda24@gmail.com</span>
              </div>
            </a>
            
            <a href="https://www.youtube.com/@Mankirat_Singh_24" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M23 12C23 5.925 18.075 1 12 1S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor"/>
              </svg>
              <div>
                <span className="link-label">YouTube</span>
                <span className="link-value">@Mankirat_Singh_24</span>
              </div>
            </a>
            
            <a href="https://www.instagram.com/mankiii_1/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
              <div>
                <span className="link-label">Instagram</span>
                <span className="link-value">@mankiii_1</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/mankirat-singh-767229277/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <span className="link-label">LinkedIn</span>
                <span className="link-value">Mankirat Singh</span>
              </div>
            </a>
          </div>

          <div className="cta-button-group">
            <a href="mailto:mankiratmanchanda24@gmail.com" className="btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Mankirat Singh. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;