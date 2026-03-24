import React from 'react';

const Education = () => {
  const eduData = [
    {
      title: 'Lovely Professional University',
      subtitle: 'Punjab, India',
      date: 'Since August 2023',
      degree: 'Bachelor of Technology – Computer Science & Engineering',
      score: 'CGPA: 6.88'
    },
    {
      title: 'S.S.S.S.S Gurukulam',
      subtitle: 'Jharkhand, India',
      date: 'Mar 2021 – Mar 2022',
      degree: 'Intermediate – PCM',
      score: 'Percentage: 65%'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-heading fade-up">
          <i className="fas fa-graduation-cap"></i> <span className="neon-text">Education</span>
        </h2>
        <div className="heading-line"></div>

        <div className="timeline">
          {eduData.map((edu, i) => (
            <div key={i} className="timeline-item fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{edu.title}</h3>
                    <p className="timeline-subtitle">{edu.subtitle}</p>
                  </div>
                  <span className="timeline-date"><i className="fas fa-calendar-alt"></i> {edu.date}</span>
                </div>
                <p className="timeline-degree">{edu.degree}</p>
                <p className="timeline-score"><i className="fas fa-star"></i> {edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
