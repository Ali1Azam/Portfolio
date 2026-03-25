import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const roles = ['Data Scientist', 'Full-Stack Web Developer', 'Software Engineer', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);
    return () => clearTimeout(ticker);
  }, [currentRole, isDeleting]);

  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setCurrentRole(isDeleting 
      ? fullText.substring(0, currentRole.length - 1) 
      : fullText.substring(0, currentRole.length + 1)
    );

    setTypingSpeed(isDeleting ? 40 : 80);

    if (!isDeleting && currentRole === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentRole === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(400);
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-img-wrapper">
            <div className="hero-img-ring">
              <div className="hero-img-crop">
                <img src="/profile.jpg" alt="Md Ali Azam" className="hero-img" />
              </div>
            </div>
          </div>

          <h1 className="hero-name">Md Ali <span className="neon-text">Azam</span></h1>
          <h2 className="hero-role">
            {currentRole}<span className="cursor">|</span>
          </h2>

          <p className="hero-desc">
            Welcome to my digital playground! I am a Computer Science student with a dual passion for 
            extracting meaningful insights through Data Science and building robust applications 
            as a Web Developer. I love solving complex problems at the intersection of data and software.
          </p>

          <div className="hero-tags">
            {['Python', 'C++', 'Java', 'Data Science', 'Pandas', 'HTML/CSS', 'MERN Stack'].map(tag => (
              <span key={tag} className="hero-tag">{tag}</span>
            ))}
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-neon"><i className="fas fa-rocket"></i> View My Work</a>
            <a href="/assets/CV_Md_Ali_Azam.pdf" download="CV_Md_Ali_Azam.pdf" className="btn btn-cv"><i className="fas fa-download"></i> Download CV</a>
            <a href="#contact" className="btn btn-outline"><i className="fas fa-paper-plane"></i> Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
