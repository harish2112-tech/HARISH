import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);
  const typeWriterRef = useRef(null);

  useEffect(() => {
    // Particle System
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = 'rgba(99, 102, 241, ' + (Math.random() * 0.3 + 0.1) + ')';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    // Typewriter
    const textElement = typeWriterRef.current;
    if (!textElement) return;
    
    const words = ["Software Engineer", "Full Stack Developer", "AI Enthusiast", "Problem Solver"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };
    timeoutId = setTimeout(type, typeSpeed);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="hero" id="home">
      <canvas id="particle-canvas" ref={canvasRef}></canvas>
      <div className="hero-content container">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Harish D</h1>
          <div className="hero-title-wrapper">
            <span className="hero-title-static">I'm a </span>
            <span className="hero-typewriter" id="typewriter" ref={typeWriterRef}></span>
            <span className="cursor-blink">|</span>
          </div>
          <p className="hero-description">Software Engineer with a robust foundation in OOP, SQL, and Frontend development. Proven ability to design, build, and deploy dynamic applications.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary"><span>View Portfolio</span><i className="fas fa-arrow-right"></i></a>
            <a href="#contact" className="btn btn-secondary"><span>Get In Touch</span></a>
          </div>
          <div className="hero-social">
            <a href="mailto:abiharish2112@gmail.com" className="social-link" data-tooltip="Email"><i className="fas fa-envelope"></i></a>
            <a href="https://linkedin.com/in/harish-d-0212a9373" target="_blank" rel="noopener noreferrer" className="social-link" data-tooltip="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/harish2112-tech" target="_blank" rel="noopener noreferrer" className="social-link" data-tooltip="GitHub"><i className="fab fa-github"></i></a>
            <a href="tel:+919597677542" className="social-link" data-tooltip="Phone"><i className="fas fa-phone"></i></a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-ring ring-1"></div>
            <div className="image-ring ring-2"></div>
            <div className="profile-placeholder"><i className="fas fa-user"></i></div>
          </div>
          <div className="floating-badge badge-1"><i className="fab fa-react"></i><span>React.js</span></div>
          <div className="floating-badge badge-2"><i className="fab fa-python"></i><span>Python</span></div>
          <div className="floating-badge badge-3"><i className="fas fa-database"></i><span>PostgreSQL</span></div>
        </div>
      </div>
      <a href="#about" className="scroll-down-btn">
        <span>Scroll</span>
        <div className="scroll-wheel"></div>
      </a>
    </section>
  );
};

export default Hero;
