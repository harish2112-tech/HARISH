import React, { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [width, setWidth] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setHidden(true);
              if (onComplete) onComplete();
            }, 600);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div className={`loader ${fadeOut ? 'fade-out' : ''}`} id="loader">
      <div className="loader-content">
        <div className="loader-logo"><span>H</span>arish</div>
        <div className="loader-bar">
          <div className="loader-progress" style={{ width: `${width}%` }}></div>
        </div>
        <p className="loader-text">Loading portfolio...</p>
      </div>
    </div>
  );
};

export default Loader;
