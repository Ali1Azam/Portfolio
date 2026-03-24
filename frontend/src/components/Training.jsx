import React from 'react';

const Training = () => {
  return (
    <section id="training" className="section">
      <div className="container">
        <h2 className="section-heading fade-up">
          <i className="fas fa-chalkboard-teacher"></i> <span className="neon-text">Training</span>
        </h2>
        <div className="heading-line"></div>

        <div className="photo-entry-grid">
          <div className="photo-entry-card fade-up">
            <div className="photo-entry-img-wrap">
              <img src="/assets/training/dsa-cipher.jpg" alt="Data Structures Algorithms Training Certificate" className="photo-entry-img" />
            </div>
            <div className="photo-entry-body">
              <div className="photo-entry-top">
                <span className="photo-entry-type">TRAINING</span>
                <span className="photo-entry-date"><i className="fas fa-calendar-alt"></i> Jun 2023 – Jul 2024</span>
              </div>
              <h3 className="photo-entry-title">Data Structures Algorithms Training</h3>
              <p className="photo-entry-org"><i className="fas fa-building"></i> Cipher Schools</p>
              <ul className="photo-entry-bullets">
                <li>Gained hands-on experience in implementing core algorithms such as sorting, searching, recursion, and basic problem-solving patterns</li>
                <li>Practiced competitive programming concepts by optimizing time and space complexity, improving logical thinking</li>
                <li>Learned and applied STL along with key data structures including arrays, linked lists, stacks, queues, trees, and graphs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
