import React, { useState, useEffect } from 'react';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const fullText = 'Mankirat Singh';
  const typingSpeed = 30; // Faster typing
  const deletingSpeed = 30; // Faster deleting
  const pauseTime = 5000; // Longer pause at end

  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullText;
      
      if (!isDeleting && displayText === currentText) {
        // Pause at end before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
      
      if (isDeleting && displayText === '') {
        // Start typing again
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        return;
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      
      setTimeout(() => {
        if (isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }
      }, speed);
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <section className="hero">
      <div className="hero-grain"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">
            {displayText}
            <span className="cursor">|</span>
          </span>
          <span className="hero-subtitle">Video Editor & Storyteller</span>
        </h1>
        <p className="hero-tagline">
          Crafting narratives that captivate.<br/>
          Specializing in long-form YouTube content.
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn-primary">View My Work</a>
        </div>
      </div>
      
      <div className="hero-video-bg">
        <div className="video-placeholder">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JeBQsk6cjpQ?autoplay=1&mute=1&controls=0&loop=1&playlist=JeBQsk6cjpQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ opacity: 0.15 }}
          ></iframe>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
}

export default Hero;