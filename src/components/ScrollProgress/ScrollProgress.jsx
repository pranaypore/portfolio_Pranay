import { useEffect, useRef } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      if (barRef.current) barRef.current.style.width = `${progress}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress-wrap">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  );
};

export default ScrollProgress;
