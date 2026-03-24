import React from 'react';

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="section">
      <div className="container">
        <h2 className="section-heading fade-up">
          <i className="fas fa-users"></i> <span className="neon-text">Extracurricular</span>
        </h2>
        <div className="heading-line"></div>

        <div className="photo-entry-grid">
          <div className="photo-entry-card fade-up">
            <div className="photo-entry-img-wrap">
              <img src="/assets/extracurricular/event-manager.jpg" alt="Arambh Club Event Manager" className="photo-entry-img" />
            </div>
            <div className="photo-entry-body">
              <div className="photo-entry-top">
                <span className="photo-entry-type">LEADERSHIP</span>
                <span className="photo-entry-date"><i className="fas fa-calendar-alt"></i> Since Feb 2025</span>
              </div>
              <h3 className="photo-entry-title">Event Manager</h3>
              <p className="photo-entry-org">
                <i className="fas fa-building"></i> Arambh Club, Division of Student Organization
              </p>
            </div>
          </div>

          <div className="photo-entry-card fade-up">
            <div className="photo-entry-img-wrap">
              <img src="/assets/extracurricular/vice-president.jpg" alt="Zillion Team Vice President" className="photo-entry-img" />
            </div>
            <div className="photo-entry-body">
              <div className="photo-entry-top">
                <span className="photo-entry-type">LEADERSHIP</span>
                <span className="photo-entry-date"><i className="fas fa-calendar-alt"></i> Feb 2024 – May 2025</span>
              </div>
              <h3 className="photo-entry-title">Vice-President</h3>
              <p className="photo-entry-org">
                <i className="fas fa-building"></i> Zillion Team L&T Club, Centre of Professional Enhancement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
