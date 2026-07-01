import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  FiGithub, FiLinkedin, FiInstagram, FiMail, FiPhone,
  FiDownload, FiArrowRight, FiMessageCircle
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import ProfilePhoto from '../../assets/ProfilePhoto.jpg';
import ResumeFile from '../../assets/Resume.pdf';
import './Hero.css';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/pranaypore', label: 'GitHub', color: '#f1f5f9' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/pranay-pore-baba04376', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FiInstagram, href: 'https://instagram.com/pranay_pore', label: 'Instagram', color: '#E1306C' },
  { icon: FiMail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=porepranay552@gmail.com', label: 'Gmail', color: '#EA4335' },
  { icon: FiPhone, href: 'tel:+917741066582', label: 'Phone', color: '#10b981' },
  { icon: FaWhatsapp, href: 'https://wa.me/917741066582', label: 'WhatsApp', color: '#25D366' },
];

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <ParticleBackground />

      {/* Grid Lines */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-container">
        {/* Left — Text Content */}
        <div className="hero-content">
          {/* Greeting */}
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="greeting-badge">
              <span className="greeting-dot" />
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm
            <br />
            <span className="hero-name">Pranay Pore</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            className="hero-typing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <span className="typing-prefix">{'>'} </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'FastAPI Developer', 2000,
                'React Developer', 2000,
                'React Native Developer', 2000,
                'Android Developer', 2000,
                'Python Developer', 2000,
                'Backend Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Building <strong>scalable full-stack applications</strong> with FastAPI, React,
            React Native & PostgreSQL. Passionate about clean architecture, performance,
            and premium user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="btn-primary hero-btn">
              <FiDownload size={16} />
              View Resume
            </a>
            <button className="btn-outline hero-btn" onClick={() => scrollTo('projects')}>
              View Projects
              <FiArrowRight size={16} />
            </button>
            <button className="btn-outline hero-btn hero-hire" onClick={() => scrollTo('contact')}>
              <FiMessageCircle size={16} />
              Hire Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="socials-label">Connect:</span>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="social-icon-btn"
                aria-label={s.label}
                title={s.label}
                style={{ '--social-color': s.color }}
              >
                <s.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Profile Photo */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="profile-ring profile-ring-outer" />
          <div className="profile-ring profile-ring-inner" />
          <div className="profile-photo-wrap">
            <div className="profile-photo">
              <img src={ProfilePhoto} alt="Pranay Pore" />
            </div>
          </div>

          {/* Floating Badge 1 */}
          <motion.div
            className="float-badge badge-1"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="badge-icon">⚡</span>
            <div>
              <p className="badge-value">5+</p>
              <p className="badge-label">Major Projects</p>
            </div>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div
            className="float-badge badge-2"
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="badge-icon">🚀</span>
            <div>
              <p className="badge-value">20+</p>
              <p className="badge-label">Tech Stack</p>
            </div>
          </motion.div>

          {/* Floating Badge 3 */}
          <motion.div
            className="float-badge badge-3"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="badge-icon">🎓</span>
            <div>
              <p className="badge-value">B.Tech</p>
              <p className="badge-label">CSE</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
