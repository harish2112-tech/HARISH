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

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header reveal"><span className="section-tag">Portfolio</span><h2 className="section-title">Academic Projects</h2></div>
        <div className="projects-grid">
          <Tilt className="project-card reveal tilt-card" options={defaultOptions}>
            <div className="project-image">
              <div className="project-placeholder"><i className="fas fa-film"></i></div>
              <div className="project-overlay"><a href="#" className="overlay-btn"><i className="fab fa-github"></i> Code</a></div>
            </div>
            <div className="project-content">
              <div className="project-tags"><span className="tag">PHP</span><span className="tag">MySQL</span><span className="tag">JS</span></div>
              <h3>Movie Review Website (Filmic)</h3>
              <p>A comprehensive media review platform utilizing PHP and MySQL. Features a responsive UI with custom dynamic forms for reviews.</p>
              <ul className="project-features">
                <li><i className="fas fa-check"></i> Full-Stack Architecture</li>
                <li><i className="fas fa-check"></i> Relational Data Management</li>
                <li><i className="fas fa-check"></i> Responsive Front-End</li>
              </ul>
            </div>
          </Tilt>
          <Tilt className="project-card reveal tilt-card" options={defaultOptions}>
            <div className="project-image">
              <div className="project-placeholder deepfake" style={{background: 'var(--gradient-1)'}}><i className="fas fa-brain"></i></div>
              <div className="project-overlay"><a href="#" className="overlay-btn"><i className="fab fa-github"></i> Code</a></div>
            </div>
            <div className="project-content">
              <div className="project-tags"><span className="tag">Python</span><span className="tag">ViTs</span><span className="tag">VidTIMIT</span></div>
              <h3>Deepfake Detection Framework</h3>
              <p>AI-driven detection framework using Vision Transformers to identify tampered facial videos and security gaps in GAN manipulations.</p>
              <ul className="project-features">
                <li><i className="fas fa-check"></i> Vision Transformer Integration</li>
                <li><i className="fas fa-check"></i> Global Context Analysis</li>
                <li><i className="fas fa-check"></i> GAN Vulnerability Assessment</li>
              </ul>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Projects;
