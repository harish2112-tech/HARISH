import React from 'react';

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-header reveal"><span className="section-tag">Success Stories</span><h2 className="section-title">Achievements</h2></div>
        <div className="achievements-grid">
          <div className="achievement-category reveal"><h3><i className="fas fa-flask"></i> Research &amp; Innovation</h3><ul><li><strong>National Conference Presenter:</strong> Research on "Blockchain and AI-Powered False News Reduction" at SRM.</li><li><strong>Winner, SPIKE-2K24:</strong> Secured 1st place in Debugging competition at Bharath Institute.</li><li><strong>Statistical Tools:</strong> Participated in SPSS, R &amp; MATLAB workshop at SRM college.</li></ul></div>
          <div className="achievement-category reveal"><h3><i className="fas fa-award"></i> Academic &amp; Honors</h3><ul><li><strong>Memorial Scholarship:</strong> Awarded "Most Vibrant Student of Computer Applications" (22-23).</li><li><strong>Youth Parliament:</strong> Represented youth interests at District Level Neighbourhood Youth Parliament.</li><li><strong>Python Practical Demo:</strong> Certified by Wikitechy for AI Machine Learning session.</li></ul></div>
          <div className="achievement-category reveal"><h3><i className="fas fa-palette"></i> Creative &amp; Wellness</h3><ul><li><strong>1st Place, Photography:</strong> National Wild Life Week contest at St. Joseph's.</li><li><strong>2nd Place, Group Dance:</strong> J-Spree 2022 cultural meet.</li><li><strong>Gold Certificate, Yogathon:</strong> Completed 108 rounds of Surya Namaskar.</li></ul></div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
