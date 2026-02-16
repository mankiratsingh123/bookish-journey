import React from 'react';

function About() {
  const tools = [
    "Adobe Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "CapCut",
    "Photoshop"
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">ABOUT</h2>
          <div className="about-text">
            <p className="lead">
              I edit stories that keep people watching.
            </p>
            <p>
              With a background in BCA and a passion for visual storytelling, I specialize in 
              long-form YouTube & short-form content that combines narrative pacing with engaging visuals. 
              Currently working with <strong>Shark Numbers</strong>, creating educational content 
              that makes finance accessible and entertaining.
            </p>
            <p>
              My approach focuses on rhythm, emotion, and retention—every cut serves the story, 
              every transition has purpose, and every frame is intentional.
            </p>
          </div>

          <div className="tools-section">
            <h3>Tools & Skills</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="tool-tag"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Hours Edited</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Views Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
