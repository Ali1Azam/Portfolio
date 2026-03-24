import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-heading fade-up">About <span className="neon-text">Me</span></h2>
        <div className="heading-line"></div>

        <div className="about-grid fade-up">
          {/* Left Sidebar */}
          <div className="about-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title"><i className="fas fa-bolt"></i> Quick Facts</h3>
              <div className="fact-item">
                <div className="fact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="fact-info">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">Punjab, India</span>
                </div>
              </div>
              <div className="fact-item">
                <div className="fact-icon"><i className="fas fa-graduation-cap"></i></div>
                <div className="fact-info">
                  <span className="fact-label">Education</span>
                  <span className="fact-value">B.Tech in Computer Science</span>
                </div>
              </div>
              <div className="fact-item">
                <div className="fact-icon"><i className="fas fa-laptop-code"></i></div>
                <div className="fact-info">
                  <span className="fact-label">Focus</span>
                  <span className="fact-value">Data Science & Web Dev</span>
                </div>
              </div>
            </div>
            
            <div className="sidebar-card">
              <h3 className="sidebar-title"><i className="fas fa-heart"></i> When I'm Not Coding</h3>
              <div className="hobby-item"><span className="hobby-icon">📊</span> Exploring Datasets</div>
              <div className="hobby-item"><span className="hobby-icon">📚</span> Reading</div>
              <div className="hobby-item"><span className="hobby-icon">🎵</span> Music</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-main">
            <div className="about-block">
              <h3 className="about-block-title neon-text">My Journey</h3>
              <p>Hello! I'm <span className="neon-text fw-600">Md Ali Azam</span>, a passionate Computer Science student dedicated to bridging the gap between data insights and software engineering.</p>
              <p>My journey in tech has cultivated a balanced expertise in both Data Science and Full-Stack Web Development. On the data side, I specialize in analyzing real-world datasets using Python, Pandas, and Matplotlib. On the development side, I build dynamic, responsive applications using the MERN stack.</p>
              <p>I constantly hone my problem-solving skills through competitive programming on platforms like LeetCode, ensuring that my code is as efficient as it is impactful.</p>
            </div>
            <div className="about-block">
              <h3 className="about-block-title neon-text">My Approach</h3>
              <p>I believe in creating technology solutions that are not just functional but meaningful. Every line of code I write aims to solve real problems and generate actionable insights. I value clean analysis, collaborative development, and continuous learning as the foundations of great work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
