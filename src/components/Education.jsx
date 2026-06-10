import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header reveal"><span className="section-tag">Academics</span><h2 className="section-title">Education</h2></div>
        <div className="timeline">
          <div className="timeline-item reveal-right">
            <div className="timeline-marker"><i className="fas fa-graduation-cap"></i></div>
            <div className="timeline-content">
              <span className="timeline-date">08/2023 - 05/2025</span>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>SRM arts and science college, Kattankulathur</p>
              <div className="grade"><span>CGPA: 7.95</span></div>
            </div>
          </div>
          <div className="timeline-item reveal-right">
            <div className="timeline-marker"><i className="fas fa-graduation-cap"></i></div>
            <div className="timeline-content">
              <span className="timeline-date">06/2020 - 04/2023</span>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>St. Joseph's college of arts and science, Cuddalore</p>
              <div className="grade"><span>CGPA: 7.4</span></div>
            </div>
          </div>
        </div>
        
        <div className="certifications reveal">
          <h3><i className="fas fa-certificate"></i> Certifications</h3>
          <div className="cert-grid">
            <div className="cert-card"><i className="fab fa-google"></i><div><h4>Google IT Automation with Python</h4></div></div>
            <div className="cert-card"><i className="fas fa-cloud"></i><div><h4>Oracle Certified AI Foundations Associate</h4></div></div>
            <div className="cert-card"><i className="fas fa-laptop-code"></i><div><h4>Infosys Springboard: Python &amp; OOP</h4></div></div>
            <div className="cert-card"><i className="fas fa-graduation-cap"></i><div><h4>Diploma in Computer Application (DCA)</h4></div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
