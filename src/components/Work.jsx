import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Cinematic Biography: The Rise of a Visionary ",
    client: "N/A",
    category: "personal",
    thumbnail: "https://img.youtube.com/vi/JeBQsk6cjpQ/maxresdefault.jpg", // Replace with actual video ID
    videoId: "JeBQsk6cjpQ", // Replace with actual video ID
    description: "A narrative-driven short film exploring the origin story of Elon Musk. This edit focuses on emotional storytelling, using color grading and sound design to transition from a nostalgic, struggling childhood to a high-tech, triumphant present."
  },
  {
    id: 2,
    title: "Dynamic Product Showcase - Coffee Brand Commercial Concept",
    client: "N/A",
    category: "personal",
    thumbnail: "https://img.youtube.com/vi/oS8uz2jmpdE/maxresdefault.jpg",
    videoId: "oS8uz2jmpdE",
    description: "A high-energy motion graphics spec ad focused on the Food & Beverage industry. This project demonstrates the use of dynamic rhythm and kinetic typography to create an engaging social media commercial."
  },
   {
    id: 3,
    title: "Viral Shorts: Viral TikTok and YouTube Shorts and instagram reels edit",
    client: "personal",
    category: "shorts",
    thumbnail: "https://img.youtube.com/vi/Uz_aXvSsY3w/maxresdefault.jpg",
    videoId: "Uz_aXvSsY3w",
    description: "Made a series of 10+ vertical shorts for TikTok, Instagram Reels, and YouTube Shorts, focusing on viral trends and rapid pacing. This project highlights my ability to create engaging content optimized for mobile viewing and social media algorithms."
  },
  {
    id: 4,
    title: "Co-Editor: TuriX AI Software Review",
    client: "Shark Numbers",
    category: "youtube",
    thumbnail: "https://img.youtube.com/vi/zgdFHr7LhPk/maxresdefault.jpg",
    videoId: "zgdFHr7LhPk",
    description: "Collaborated with a post-production team to deliver a polished tech review for the channel Shark Numbers (Ivan KV). This project required a seamless blend of talking head footage, screen recordings, and motion graphics to explain complex automation concepts."
  },
  {
    id: 5,
    title: "Viral News & Commentary Series (10+ Shorts)",
    client: "Rohit Discord Client",
    category: "youtube",
    thumbnail: "https://img.youtube.com/vi/knnQUa0BDvY/maxresdefault.jpg",
    videoId: "knnQUa0BDvY",
    description: "One example from a series of 10+ vertical shorts produced for a repeat client sourced via Discord. This project focused on the YouTuber News niche, requiring rapid turnaround times to capitalize on trending topics (e.g., Dream/Minecraft controversy)."
  },
  {
    id: 6,
    title: "High-Retention Documentary Style: Space & Science Explainer",
    client: "Upwork Client Fahim",
    category: "client",
    thumbnail: "https://img.youtube.com/vi/7McTOUgTcfo/hqdefault.jpg",
    videoId: "7McTOUgTcfo",
    description: "A fast-paced, documentary-style edit designed for high viewer retention on YouTube. This project demonstrates my ability to transform a voiceover script into a visually rich narrative using a mix of stock footage, 3D assets, and visual humor."
  }
];

function Work() {
  const [filter, setFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="work-section">
      <div className="section-header">
        <h2 className="section-title">SELECTED WORK</h2>
        <div className="filter-tabs">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'youtube' ? 'active' : ''} 
            onClick={() => setFilter('youtube')}
          >
            YouTube
          </button>
          <button 
            className={filter === 'client' ? 'active' : ''} 
            onClick={() => setFilter('client')}
          >
            Client Work
          </button>
          <button 
            className={filter === 'personal' ? 'active' : ''} 
            onClick={() => setFilter('personal')}
          >
            Personal
          </button>
          <button 
            className={filter === 'shorts' ? 'active' : ''} 
            onClick={() => setFilter('shorts')}
          >
            Instagram/TikTok/YouTube Shorts
          </button>
        </div>
      </div>

      <div className="work-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedVideo(project)}
          >
            <div className="project-thumbnail">
              <img src={project.thumbnail} alt={project.title} />
              <div className="play-overlay">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2"/>
                  <path d="M23 18L42 30L23 42V18Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="client-name">{project.client}</p>
              <p className="project-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="modal-info">
              <h3>{selectedVideo.title}</h3>
              <p className="client-name">{selectedVideo.client}</p>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Work;
