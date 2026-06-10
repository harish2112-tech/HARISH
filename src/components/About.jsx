import React, { useEffect, useRef } from 'react';

const About = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute('data-target');
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;

          const updateCount = () => {
            current += step;
            if (current < target) {
              counter.innerText = Math.floor(current) + suffix;
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = target + suffix;
            }
          };
          updateCount();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    countersRef.current.forEach(c => {
      if (c) observer.observe(c);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Objective</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text reveal-left">
            <p>I am a <strong>Software Engineer</strong> with a robust foundation in OOP, SQL, and Frontend development. I have a proven ability to design, build, and deploy dynamic applications using <strong>Python and JavaScript</strong>.</p>
            <p>Seeking to leverage expertise in <strong>API integration and system architecture</strong> to deliver scalable solutions in a collaborative engineering team.</p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number counter" data-target="3" ref={el => countersRef.current[0] = el}>0</span>
                <span className="stat-label">Internships</span>
              </div>
              <div className="stat-item">
                <span className="stat-number counter" data-target="5" data-suffix="+" ref={el => countersRef.current[1] = el}>0</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number counter" data-target="10" data-suffix="+" ref={el => countersRef.current[2] = el}>0</span>
                <span className="stat-label">Awards</span>
              </div>
            </div>
            <div className="strength-tags">
              <span className="strength-tag"><i className="fas fa-microchip"></i> Technology Adaptability</span>
              <span className="strength-tag"><i className="fas fa-users"></i> Cross-functional Collaboration</span>
              <span className="strength-tag"><i className="fas fa-book-open"></i> Continuous Learner</span>
            </div>
          </div>
          <div className="info-card reveal-right">
            <div className="info-item"><i className="fas fa-graduation-cap"></i><span>MCA (CGPA: 7.95) &amp; BCA (CGPA: 7.4)</span></div>
            <div className="info-item"><i className="fas fa-envelope"></i><span>abiharish2112@gmail.com</span></div>
            <div className="info-item"><i className="fas fa-phone"></i><span>+91 9597677542</span></div>
            <div className="info-item"><i className="fas fa-globe"></i><span>English, Tamil</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
