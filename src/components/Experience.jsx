import React from 'react';
import { Tilt } from 'react-tilt';

const defaultOptions = {
	reverse:        false,
	max:            15,
	perspective:    1000,
	scale:          1,
	speed:          400,
	transition:     true,
	axis:           null,
	reset:          true,
	easing:         "cubic-bezier(.03,.98,.52,.99)",
};

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header reveal"><span className="section-tag">Career Path</span><h2 className="section-title">Professional Experience</h2></div>
        <div className="experience-list">
          <Tilt className="experience-item reveal tilt-card" options={defaultOptions}>
            <div className="experience-header">
              <div className="company-info">
                <h3>Infosys Springboard Internship</h3>
                <p>Team Lead &amp; Backend Developer Intern</p>
              </div>
              <div className="experience-meta">
                <span><i className="fas fa-calendar"></i> 02/2026 - 03/2026</span>
                <span><i className="fas fa-map-marker-alt"></i> Chennai</span>
              </div>
            </div>
            <div className="experience-body">
              <p>Project: <strong>"Water Quality Monitor"</strong></p>
              <ul>
                <li><strong>Leadership:</strong> Promoted to Team Lead to oversee milestones and mentor interns on full-stack architecture and environmental data standards.</li>
                <li><strong>Backend &amp; Security:</strong> Built a scalable FastAPI and PostgreSQL backend, implementing JWT authentication for secure citizen and NGO access.</li>
                <li><strong>Frontend &amp; GIS:</strong> Developed interactive React.js/Tailwind dashboards, integrating Leaflet/Google Maps for real-time pollution visualization.</li>
                <li><strong>Data &amp; Alerts:</strong> Architected real-time pipelines for Government APIs and crowdsourced reports, triggering automated predictive safety alerts.</li>
              </ul>
            </div>
            <div className="exp-tech-tags"><span>FastAPI</span><span>PostgreSQL</span><span>React.js</span><span>JWT</span><span>Leaflet</span></div>
          </Tilt>

          <Tilt className="experience-item reveal tilt-card" options={defaultOptions}>
            <div className="experience-header">
              <div className="company-info">
                <h3>Desizntech</h3>
                <p>Intern</p>
              </div>
              <div className="experience-meta">
                <span><i className="fas fa-calendar"></i> 12/2024 - 03/2025</span>
                <span><i className="fas fa-map-marker-alt"></i> Chennai</span>
              </div>
            </div>
            <div className="experience-body">
              <p>Project: <strong>"Deepfake Detection of Tampered Facial Videos Using Vision Transformers (ViTs)"</strong></p>
              <ul>
                <li><strong>Vulnerability Analysis:</strong> Evaluated GAN-based face-swapping manipulations using the VidTIMIT dataset, identifying critical security gaps.</li>
                <li><strong>Vision Transformer (ViT) Integration:</strong> Engineered a detection framework utilizing Vision Transformers to capture global context and fine-grained spatial inconsistencies.</li>
                <li><strong>Detection Optimization:</strong> Enhanced model generalizability against evolving AI-driven media manipulation by leveraging visual quality metrics.</li>
              </ul>
            </div>
            <div className="exp-tech-tags"><span>Python</span><span>Vision Transformers</span><span>GAN</span><span>VidTIMIT</span></div>
          </Tilt>

          <Tilt className="experience-item reveal tilt-card" options={defaultOptions}>
            <div className="experience-header">
              <div className="company-info">
                <h3>Distinct Snow Land</h3>
                <p>Intern</p>
              </div>
              <div className="experience-meta">
                <span><i className="fas fa-calendar"></i> 05/2024 - 06/2024</span>
                <span><i className="fas fa-map-marker-alt"></i> Erode</span>
              </div>
            </div>
            <div className="experience-body">
              <ul>
                <li>Completed an internship in Full Stack Development, gaining hands-on experience in building web applications using front-end technologies (HTML, CSS, JavaScript, modern frameworks).</li>
                <li>Worked with databases for data storage/management and used version control tools to develop, test, and deploy scalable applications.</li>
              </ul>
            </div>
            <div className="exp-tech-tags"><span>HTML/CSS</span><span>JavaScript</span><span>MySQL</span><span>Git</span></div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Experience;
