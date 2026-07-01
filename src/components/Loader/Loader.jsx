import { useEffect, useRef } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const progressRef = useRef(null);
  const loaderRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    let count = 0;
    const duration = 2200;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      count = Math.min(count + increment, 100);
      if (progressRef.current) {
        progressRef.current.style.width = `${count}%`;
      }
      if (countRef.current) {
        countRef.current.textContent = `${Math.floor(count)}%`;
      }
      if (count >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          loaderRef.current?.classList.add('fade-out');
          setTimeout(() => onComplete?.(), 600);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader-wrap" aria-label="Loading">
      <div className="loader-bg" />
      <div className="loader-content">
        <div className="loader-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">PP</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="loader-tagline">Building something premium...</p>
        <div className="loader-bar-wrap">
          <div ref={progressRef} className="loader-bar" />
        </div>
        <span ref={countRef} className="loader-count">0%</span>
      </div>
      <div className="loader-grid" />
    </div>
  );
};

export default Loader;
