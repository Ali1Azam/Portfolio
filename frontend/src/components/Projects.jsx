import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      type: 'MERN STACK',
      date: '2025',
      title: 'Full-Stack MERN Web Application',
      org: 'Personal Project',
      bullets: [
        'Built a full-stack web application using MongoDB, Express.js, React, and Node.js (MERN stack)',
        'Implemented RESTful API endpoints with Express.js and MongoDB for CRUD operations and data management',
        'Designed a responsive, dynamic frontend with React featuring component-based architecture and state management'
      ],
      techs: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API'],
      link: 'https://github.com/AliAzam',
      image: '/assets/projects/project1-mern.png'
    },
    {
      type: 'DATA ANALYSIS',
      date: 'Apr 2025',
      title: 'Pollution Data Analysis using Excel',
      org: 'Personal Project',
      bullets: [
        'Developed an Excel-based project to analyze and visualize air quality data focusing on pollutants like PM2.5 and PM10',
        'Cleaned and transformed AQI datasets using pivot tables, charts, and conditional formatting to uncover seasonal and geographic patterns',
        'Applied trendlines and moving averages to forecast pollution levels and support data-driven environmental insights'
      ],
      techs: ['Microsoft Excel', 'Data Cleaning', 'Data Visualization'],
      link: 'https://github.com/AliAzam',
      image: '/assets/projects/project2-excel.png'
    },
    {
      type: 'DATA ANALYSIS',
      date: 'Apr 2025',
      title: 'Static Public Transport Analysis of Delhi using GTFS Data',
      org: 'Personal Project',
      bullets: [
        'Created a data analysis project using GTFS datasets to explore Delhi\'s public transport network and identify operational patterns',
        'Performed EDA to examine route popularity, stop density, trip durations, and weekday service distributions',
        'Applied data cleaning, feature extraction, and visualization techniques using Python, NumPy, Pandas, Matplotlib, and Seaborn'
      ],
      techs: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      link: 'https://github.com/AliAzam',
      image: '/assets/projects/project3-gtfs.jpg'
    },
    {
      type: 'WEB DEVELOPMENT',
      date: 'Oct 2023',
      title: 'Drought Awareness Website',
      org: 'Personal Project',
      bullets: [
        'Developed an informative web platform on drought awareness using HTML and CSS, with responsive design and structured layouts',
        'Created visually appealing sections with animations, icons, and organized content to explain drought causes, impacts, and prevention',
        'Enhanced usability through intuitive navigation, clean typography, and mobile-friendly design for seamless cross-device access'
      ],
      techs: ['HTML', 'CSS', 'Responsive Design'],
      link: 'https://github.com/AliAzam',
      image: '/assets/projects/project4-drought.png'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-heading fade-up">Featured <span className="neon-text">Projects</span></h2>
        <div className="heading-line"></div>

        <div className="projects-grid">
          {projectsData.map((project, i) => (
            <div key={i} className="project-card fade-up">
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-body">
                <div className="project-top">
                  <span className="project-type">{project.type}</span>
                  <span className="project-date">{project.date}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-org">{project.org}</p>
                <ul className="project-bullets">
                  {project.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
                <div className="project-techs">
                  {project.techs.map((tech, j) => (
                    <span key={j}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <i className="fab fa-github"></i> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
