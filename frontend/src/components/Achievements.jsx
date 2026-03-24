import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-heading fade-up">Achievements & <span className="neon-text">CP</span></h2>
        <div className="heading-line"></div>

        <div className="achieve-grid">
          <div className="achieve-card fade-up">
            <div className="achieve-icon"><i className="fas fa-trophy"></i></div>
            <h3>DSA Problem Solving</h3>
            <p>Solved <strong>230+</strong> DSA problems across platforms like LeetCode and GeeksforGeeks, strengthening problem-solving and algorithmic thinking skills.</p>
          </div>
          <div className="achieve-card fade-up">
            <div className="achieve-icon"><i className="fas fa-laptop-code"></i></div>
            <h3>Competitive Programming</h3>
            <p>Active on <strong>LeetCode</strong> and <strong>GeeksforGeeks</strong>. Regularly practicing algorithmic problems, Data Structures, and improving logical thinking.</p>
          </div>
          <div className="achieve-card fade-up">
            <div className="achieve-icon"><i className="fas fa-project-diagram"></i></div>
            <h3>Real-World Projects</h3>
            <p>Successfully completed multiple data science projects using real datasets, built analytical dashboards and complex data visualizations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
