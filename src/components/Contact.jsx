import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header reveal"><span className="section-tag">Get In Touch</span><h2 className="section-title">Contact Me</h2></div>
        <div className="contact-content">
          <div className="contact-info reveal-left">
            <p>I'm currently looking for new opportunities. Let's build something amazing together!</p>
            <div className="contact-cards">
              <div className="contact-card"><i className="fas fa-envelope"></i><div><h4>Email</h4><a href="mailto:abiharish2112@gmail.com">abiharish2112@gmail.com</a></div></div>
              <div className="contact-card"><i className="fas fa-phone"></i><div><h4>Phone</h4><a href="tel:+919597677542">+91 9597677542</a></div></div>
              <div className="contact-card"><i className="fab fa-linkedin-in"></i><div><h4>LinkedIn</h4><a href="https://linkedin.com/in/harish-d-0212a9373" target="_blank" rel="noopener noreferrer">linkedin.com/in/harish-d-0212a9373</a></div></div>
            </div>
          </div>
          <form className="contact-form reveal-right" id="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group floating-label">
              <input type="text" id="f-name" placeholder=" " required />
              <label htmlFor="f-name">Your Name</label>
            </div>
            <div className="form-group floating-label">
              <input type="email" id="f-email" placeholder=" " required />
              <label htmlFor="f-email">Your Email</label>
            </div>
            <div className="form-group floating-label">
              <input type="text" id="f-subject" placeholder=" " required />
              <label htmlFor="f-subject">Subject</label>
            </div>
            <div className="form-group floating-label">
              <textarea id="f-message" rows="5" placeholder=" " required></textarea>
              <label htmlFor="f-message">Your Message</label>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              <span>Send Message</span><i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
