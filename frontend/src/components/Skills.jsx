import React, { useState } from 'react';

const Skills = () => {
  const [filter, setFilter] = useState('all');

  const skillsData = [
    { name: 'C', category: 'programming', icon: 'devicon-c-plain', color: 'blue' },
    { name: 'C++', category: 'programming', icon: 'devicon-cplusplus-plain', color: 'cyan' },
    { name: 'Java', category: 'programming', icon: 'devicon-java-plain', color: 'orange' },
    { name: 'Python', category: 'programming datascience', icon: 'devicon-python-plain', color: 'green' },
    { name: 'Pandas', category: 'datascience', icon: 'devicon-pandas-plain', color: 'purple' },
    { name: 'NumPy', category: 'datascience', icon: 'devicon-numpy-plain', color: 'cyan' },
    { name: 'Matplotlib', category: 'datascience', icon: 'devicon-matplotlib-plain', color: 'magenta' },
    { name: 'Seaborn', category: 'datascience', icon: 'fas fa-chart-pie', color: 'pink' },
    { name: 'HTML', category: 'frontend', icon: 'devicon-html5-plain', color: 'orange' },
    { name: 'CSS', category: 'frontend', icon: 'devicon-css3-plain', color: 'blue' },
    { name: 'JavaScript', category: 'frontend', icon: 'devicon-javascript-plain', color: 'yellow' },
    { name: 'React', category: 'frontend', icon: 'devicon-react-original', color: 'cyan' },
    { name: 'Git & GitHub', category: 'tools', icon: 'devicon-git-plain', color: 'orange' },
    { name: 'Node.js', category: 'tools', icon: 'devicon-nodejs-plain', color: 'green' },
    { name: 'MongoDB', category: 'tools', icon: 'devicon-mongodb-plain', color: 'green' },
    { name: 'Excel', category: 'tools', icon: 'fas fa-file-excel', color: 'green' },
    { name: 'Power BI', category: 'tools', icon: 'fas fa-chart-area', color: 'yellow' },
    { name: 'MySQL', category: 'tools', icon: 'devicon-mysql-plain', color: 'cyan' },
    { name: 'Express.js', category: 'tools', icon: 'devicon-express-original', color: 'purple' }
  ];

  const handleFilter = (cat) => setFilter(cat);

  const formatCategoryText = (catStr) => {
    if (catStr.includes('programming')) return 'Programming';
    if (catStr.includes('datascience')) return 'Data Science';
    if (catStr.includes('frontend')) return 'Frontend';
    return 'Tools';
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-heading fade-up">Technical <span className="neon-text">Arsenal</span></h2>
        <p className="section-sub fade-up">Technologies & tools in my toolkit</p>
        <div className="heading-line"></div>

        <div className="skill-tabs fade-up">
          {['all', 'programming', 'datascience', 'frontend', 'tools'].map(cat => (
            <button 
              key={cat}
              className={`skill-tab ${filter === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat === 'all' ? 'All Skills' : cat === 'datascience' ? 'Data Science' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="skills-grid fade-up">
          {skillsData.filter(s => filter === 'all' || s.category.includes(filter)).map((skill, i) => (
            <div key={i} className="skill-card" data-glow={skill.color}>
              <div className={`skill-icon-wrap ${skill.color}`}>
                <i className={skill.icon}></i>
              </div>
              <div className="skill-name">{skill.name}</div>
              <span className="skill-cat-label">{formatCategoryText(skill.category)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
