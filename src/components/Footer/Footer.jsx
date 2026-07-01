import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const footerLinks = {
  navigation: [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ],
  services: [
    'Full Stack Development',
    'Backend API Development',
    'React / React Native',
    'FastAPI Development',
    'Database Design',
    'Docker Deployment',
  ],
};

const socials = [
  { icon: FiGithub, href: 'https://github.com/pranaypore', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/pranay-pore-baba04376', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://instagram.com/pranay_pore', label: 'Instagram' },
  { icon: FiMail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=porepranay552@gmail.com', label: 'Email' },
  { icon: FaWhatsapp, href: 'https://wa.me/917741066582', label: 'WhatsApp' },
];

const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="container footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">PP</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">
            Building scalable full-stack applications with passion and precision.
          </p>
          <div className="footer-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label={s.label}
                title={s.label}
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul>
            {footerLinks.navigation.map(link => (
              <li key={link.id}>
                <button
                  className="footer-link"
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul>
            {footerLinks.services.map(s => (
              <li key={s}>
                <span className="footer-service">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul>
            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=porepranay552@gmail.com" target="_blank" rel="noreferrer" className="footer-link">
                porepranay552@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+917741066582" className="footer-link">
                +91 7741066582
              </a>
            </li>
            <li>
              <span className="footer-service">Pune, Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} Pranay Pore. Made with{' '}
            <FiHeart size={13} className="footer-heart" />{' '}
            using React & Vite
          </p>
          <button
            className="back-to-top"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
