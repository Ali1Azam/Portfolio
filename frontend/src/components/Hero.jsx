import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const roles = ['Full-Stack Developer', 'Data Scientist', 'Software Engineer', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [visible, setVisible] = useState(false);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter
  useEffect(() => {
    let ticker = setTimeout(() => handleTyping(), typingSpeed);
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


  const socials = [
    { icon: 'fab fa-github', href: 'https://github.com/Ali1Azam', label: 'GitHub' },
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/md-ali-azam/', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mdaliazam122@gmail.com', label: 'Email' },
    { icon: 'fas fa-code', href: 'https://leetcode.com/u/Azam122/', label: 'LeetCode' },
  ];

  return (
    <section id="hero" className="hero-v2">
      {/* Gradient blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="container hero-v2-inner">
        {/* ── LEFT COLUMN ── */}
        <div className={`hero-left ${visible ? 'hero-anim-in' : ''}`}>
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="hero-v2-name">
            Hi, I'm <br />
            <span className="hero-v2-firstname">Md Ali&nbsp;</span>
            <span className="hero-v2-lastname neon-text">Azam</span>
          </h1>

          {/* Typewriter role */}
          <div className="hero-v2-role-wrap">
            <span className="hero-v2-role-prefix">I am a&nbsp;</span>
            <span className="hero-v2-role">{currentRole}<span className="cursor">|</span></span>
          </div>

          {/* Description */}
          <p className="hero-v2-desc">
            Computer Science student with a dual passion for extracting meaningful insights through
            <strong className="accent"> Data Science</strong> and building robust applications as a
            <strong className="accent"> Full-Stack Developer</strong>. I love solving complex problems
            at the intersection of data and software.
          </p>

          {/* Tech chips */}
          <div className="hero-v2-chips">
            {['Python', 'React', 'Node.js', 'MERN Stack', 'Data Science', 'C++'].map(tag => (
              <span key={tag} className="hero-chip">{tag}</span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hero-v2-cta">
            <a href="#projects" className="btn btn-primary-glow">
              <i className="fas fa-rocket" /> View My Work
            </a>
            <a href="/assets/CV_Md_Ali_Azam.pdf" download="CV_Md_Ali_Azam.pdf" className="btn btn-secondary-glow">
              <i className="fas fa-download" /> Download CV
            </a>
            <a href="#contact" className="btn btn-ghost-glow">
              <i className="fas fa-paper-plane" /> Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div className="hero-socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="hero-social-btn" aria-label={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className={`hero-right ${visible ? 'hero-anim-in-right' : ''}`}>
          {/* Orbital rings + profile image */}
          <div className="hero-orbital-stage">
            {/* Outer decorative orbit */}
            <div className="orbit orbit-xl">
              <div className="orbit-dot orbit-dot-1" />
              <div className="orbit-dot orbit-dot-2" />
            </div>
            <div className="orbit orbit-lg">
              <div className="orbit-dot orbit-dot-3" />
            </div>
            {/* Profile ring */}
            <div className="profile-ring-outer">
              <div className="profile-ring-inner">
                <div className="profile-crop">
                  <img src="/profile.jpg" alt="Md Ali Azam" className="profile-img" />
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div className="floating-badge fb-top-left">
              <i className="fab fa-python" /> Python
            </div>
            <div className="floating-badge fb-top-right">
              <i className="fab fa-react" /> React
            </div>
            <div className="floating-badge fb-bottom-left">
              <i className="fab fa-node-js" /> Node.js
            </div>
            <div className="floating-badge fb-bottom-right">
              <i className="fas fa-brain" /> AI/ML
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
