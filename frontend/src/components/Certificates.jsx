import React from 'react';

const Certificates = () => {
  const certificatesData = [
    {
      title: 'Introduction to Machine Learning',
      org: 'NPTEL',
      date: 'Oct 2025',
      image: '/assets/certificates/nptel-ml.png'
    },
    {
      title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
      org: 'Infosys',
      date: 'Sep 2025',
      image: '/assets/certificates/infosys-prompt-eng.png'
    },
    {
      title: 'Computational Theory: Language Principle & Finite Automata Theory',
      org: 'Infosys',
      date: 'Aug 2025',
      image: '/assets/certificates/infosys-comp-theory.png'
    },
    {
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      org: 'Infosys',
      date: 'Aug 2025',
      image: '/assets/certificates/infosys-gen-ai.png'
    },
    {
      title: 'Master Generative AI & Generative AI tools (ChatGPT & more)',
      org: 'Udemy',
      date: 'Dec 2025',
      image: '/assets/certificates/udemy-gen-ai.png'
    },
    {
      title: 'Responsive Web Design Developer Certification',
      org: 'freeCodeCamp',
      date: 'Oct 2023',
      image: '/assets/certificates/fcc-responsive-web-design.jpg'
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      org: 'Google via Coursera',
      date: 'Sep 2024',
      image: '/assets/certificates/google-bits-bytes.jpg'
    },
    {
      title: 'Digital Systems: From Logic Gates to Processors',
      org: 'UAB via Coursera',
      date: 'Nov 2024',
      image: '/assets/certificates/uab-digital-systems.jpg'
    },
    {
      title: 'Packet Switching Networks and Algorithms',
      org: 'University of Colorado via Coursera',
      date: 'Nov 2024',
      image: '/assets/certificates/cu-packet-switching.jpg'
    },
    {
      title: 'Peer-to-Peer Protocols and Local Area Networks',
      org: 'University of Colorado via Coursera',
      date: 'Nov 2024',
      image: '/assets/certificates/cu-peer-to-peer.jpg'
    },
    {
      title: 'TCP/IP and Advanced Topics',
      org: 'University of Colorado via Coursera',
      date: 'Nov 2024',
      image: '/assets/certificates/cu-tcp-ip.jpg'
    },
    {
      title: 'Computer Communications Specialization',
      org: 'University of Colorado via Coursera',
      date: 'Nov 2024',
      image: '/assets/certificates/cu-comp-comm.jpg'
    },
    {
      title: 'Fundamentals of Network Communication',
      org: 'University of Colorado via Coursera',
      date: 'Oct 2024',
      image: '/assets/certificates/cu-fundamentals.jpg'
    }
  ];

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-heading fade-up">
          <i className="fas fa-award"></i> <span className="neon-text">Certificates</span>
        </h2>
        <div className="heading-line"></div>

        <div className="cert-grid">
          {certificatesData.map((cert, i) => (
            <div key={i} className="cert-card fade-up">
              <div className="cert-img-wrap">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.org}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
