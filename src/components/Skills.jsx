import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          entry.target.style.width = width + '%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    barsRef.current.forEach(bar => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header reveal"><span className="section-tag">Expertise</span><h2 className="section-title">Technical Skills</h2></div>
        <div className="skills-layout">
          <div className="skill-bars-section reveal-left">
            <h3 className="skills-sub-title">Proficiency</h3>
            <div className="skill-bar-item">
              <div className="skill-bar-header"><span><i className="fab fa-python"></i> Python</span><span className="skill-pct">90%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="90" style={{ width: '0%' }} ref={el => barsRef.current[0] = el}></div></div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-bar-header"><span><i className="fab fa-js"></i> JavaScript</span><span className="skill-pct">85%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="85" style={{ width: '0%' }} ref={el => barsRef.current[1] = el}></div></div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-bar-header"><span><i className="fab fa-react"></i> React.js</span><span className="skill-pct">80%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="80" style={{ width: '0%' }} ref={el => barsRef.current[2] = el}></div></div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-bar-header"><span><i className="fas fa-bolt"></i> FastAPI</span><span className="skill-pct">78%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="78" style={{ width: '0%' }} ref={el => barsRef.current[3] = el}></div></div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-bar-header"><span><i className="fas fa-database"></i> SQL / PostgreSQL</span><span className="skill-pct">85%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="85" style={{ width: '0%' }} ref={el => barsRef.current[4] = el}></div></div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-bar-header"><span><i className="fas fa-brain"></i> ML / AI</span><span className="skill-pct">75%</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width="75" style={{ width: '0%' }} ref={el => barsRef.current[5] = el}></div></div>
            </div>
          </div>
          <div className="skill-tags-section reveal-right">
            <h3 className="skills-sub-title">Technologies</h3>
            <div className="skills-grid-small">
              <div className="skill-category">
                <div className="category-icon"><i className="fas fa-code"></i></div>
                <h3>Languages</h3>
                <div className="skill-items">
                  <div className="skill-item"><i className="fab fa-python"></i><span>Python</span></div>
                  <div className="skill-item"><i className="fab fa-java"></i><span>Java</span></div>
                  <div className="skill-item"><i className="fas fa-code"></i><span>C++</span></div>
                  <div className="skill-item"><i className="fab fa-php"></i><span>PHP</span></div>
                </div>
              </div>
              <div className="skill-category">
                <div className="category-icon"><i className="fas fa-globe"></i></div>
                <h3>Web Dev</h3>
                <div className="skill-items">
                  <div className="skill-item"><i className="fab fa-react"></i><span>React.js</span></div>
                  <div className="skill-item"><i className="fas fa-bolt"></i><span>FastAPI</span></div>
                  <div className="skill-item"><i className="fas fa-wind"></i><span>Tailwind</span></div>
                  <div className="skill-item"><i className="fab fa-js"></i><span>JavaScript</span></div>
                </div>
              </div>
              <div className="skill-category">
                <div className="category-icon"><i className="fas fa-tools"></i></div>
                <h3>Tools &amp; DB</h3>
                <div className="skill-items">
                  <div className="skill-item"><i className="fas fa-database"></i><span>PostgreSQL</span></div>
                  <div className="skill-item"><i className="fas fa-database"></i><span>MySQL</span></div>
                  <div className="skill-item"><i className="fab fa-git-alt"></i><span>Git</span></div>
                  <div className="skill-item"><i className="fas fa-key"></i><span>JWT</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
