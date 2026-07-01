import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { timeline, stats } from '../../data/certificates';
import ProfilePhoto from '../../assets/ProfilePhoto.jpg';
import './About.css';

const StatCounter = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (value / duration) * 16;
    const timer = setInterval(() => {
      start = Math.min(start + step, value);
      setCount(Math.floor(start));
      if (start >= value) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-value">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A passionate full-stack developer building enterprise-grade applications
            with modern technologies.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="about-grid">
          {/* Bio */}
          <motion.div
            className="about-bio glass-card"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bio-top">
              <div className="bio-avatar">
                <img src={ProfilePhoto} alt="Pranay Pore" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'50%'}} />
              </div>
              <div>
                <h3 className="bio-name">Pranay Pore</h3>
                <p className="bio-role">Full Stack Developer</p>
                <p className="bio-location">📍 Pune, Maharashtra, India</p>
              </div>
            </div>

            <p className="bio-text">
              I'm a <strong>B.Tech Computer Science Engineering</strong> graduate from Alard University,
              Pune. I specialize in building full-stack applications using <strong>FastAPI</strong>,
              <strong>React</strong>, <strong>React Native</strong>, and <strong>PostgreSQL</strong>.
            </p>
            <p className="bio-text">
              My expertise spans backend API design, mobile development, database architecture,
              and Docker-based deployments. I'm passionate about writing clean, scalable code
              and delivering premium user experiences.
            </p>

            <div className="bio-details">
              <div className="bio-detail">
                <span className="detail-label">🎓 Education</span>
                <span className="detail-value">B.Tech CSE — Alard University</span>
              </div>
              <div className="bio-detail">
                <span className="detail-label">💼 Availability</span>
                <span className="detail-value available">Open to Work</span>
              </div>
              <div className="bio-detail">
                <span className="detail-label">🌐 Languages</span>
                <span className="detail-value">English, Hindi, Marathi</span>
              </div>
            </div>

            <div className="bio-actions">
              <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">
                View Resume
              </a>
              <a href="mailto:porepranay552@gmail.com" className="btn-outline">
                Let's Talk
              </a>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="timeline-title">My Journey</h3>
            <div className="timeline">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`timeline-item timeline-${item.type}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <div className="timeline-dot">
                    <span>{item.icon}</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-heading">{item.title}</h4>
                    <p className="timeline-org">{item.org}</p>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          className="github-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <img
            src="https://github-readme-stats-sigma-five.vercel.app/api?username=pranaypore&show_icons=true&theme=transparent&hide_border=true&text_color=94a3b8&icon_color=6366f1&title_color=6366f1"
            alt="GitHub Stats"
            className="github-stat-img"
            loading="lazy"
          />
          <img
            src="https://streak-stats.demolab.com?user=pranaypore&theme=transparent&hide_border=true&stroke=6366f1&ring=6366f1&fire=ec4899&currStreakLabel=94a3b8&sideLabels=94a3b8"
            alt="GitHub Streak"
            className="github-stat-img"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
