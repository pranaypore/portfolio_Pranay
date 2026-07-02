import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram, FiMapPin,
         FiCopy, FiCheck, FiExternalLink, FiSend, FiLoader } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import './Contact.css';

const contactCards = [
  { icon: FiMail, label: 'Email', value: 'porepranay552@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=porepranay552@gmail.com', color: '#EA4335', copyable: true, link: true },
  { icon: FiPhone, label: 'Phone', value: '+91 7741066582', href: 'tel:+917741066582', color: '#10b981', copyable: true },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/pranaypore', href: 'https://github.com/pranaypore', color: '#f1f5f9', link: true },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/pranay-pore-baba04376', href: 'https://linkedin.com/in/pranay-pore-baba04376', color: '#0A66C2', link: true },
  { icon: FiInstagram, label: 'Instagram', value: '@pranay_pore', href: 'https://instagram.com/pranay_pore', color: '#E1306C', link: true },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+91 7741066582', href: 'https://wa.me/917741066582', color: '#25D366', link: true },
  { icon: FiMapPin, label: 'Location', value: 'Pune, Maharashtra, India', color: '#f59e0b', copyable: false },
];

const ContactCard = ({ card, index, visible }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(card.value);
    setCopied(true);
    toast.success(`${card.label} copied!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="contact-card glass-card"
      style={{ '--card-color': card.color }}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <div className="contact-card-icon">
        <card.icon size={24} />
      </div>
      <div className="contact-card-info">
        <span className="contact-card-label">{card.label}</span>
        <span className="contact-card-value">{card.value}</span>
      </div>
      <div className="contact-card-actions">
        {card.copyable && (
          <button className="icon-action-btn" onClick={handleCopy} aria-label="Copy">
            {copied ? <FiCheck size={15} /> : <FiCopy size={15} />}
          </button>
        )}
        {card.href && (
          <a href={card.href} target={card.link ? '_blank' : undefined} rel="noreferrer"
            className="icon-action-btn" aria-label={`Open ${card.label}`}>
            <FiExternalLink size={15} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleMailtoFallback = () => {
    const toEmail = 'porepranay552@gmail.com';
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}`;
    const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const isPlaceholder = (val) => !val || val.includes('YOUR_') || val.trim() === '';

    if (isPlaceholder(serviceId) || isPlaceholder(templateId) || isPlaceholder(publicKey)) {
      console.warn('EmailJS environment variables are not configured. Falling back to email client...');
      toast.error('Form service not configured. Opening your mail client...');
      setTimeout(() => {
        handleMailtoFallback();
      }, 1000);
      setSending(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setSent(true);
      toast.success("Message sent! I'll get back to you soon 🚀");
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      toast.error('Failed to send. Opening your mail client...');
      setTimeout(() => {
        handleMailtoFallback();
      }, 1000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Available for freelance work, full-time positions, and collaborations.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Cards */}
          <div className="contact-cards-wrap">
            <div className="contact-cards">
              {contactCards.map((card, i) => (
                <ContactCard key={card.label} card={card} index={i} visible={inView} />
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            className="contact-form-wrap glass-card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {sent ? (
              <div className="form-success">
                <motion.div
                  className="success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  🚀
                </motion.div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
                <h3 className="form-title">Send a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name *</label>
                    <input id="contact-name" type="text" name="name" placeholder="Your full name"
                      value={form.name} onChange={handleChange}
                      className={errors.name ? 'error' : ''} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email *</label>
                    <input id="contact-email" type="email" name="email" placeholder="your@email.com"
                      value={form.email} onChange={handleChange}
                      className={errors.email ? 'error' : ''} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone</label>
                    <input id="contact-phone" type="tel" name="phone" placeholder="+91 ..."
                      value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject *</label>
                    <input id="contact-subject" type="text" name="subject" placeholder="How can I help?"
                      value={form.subject} onChange={handleChange}
                      className={errors.subject ? 'error' : ''} />
                    {errors.subject && <span className="form-error">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea id="contact-message" name="message" placeholder="Tell me about your project..."
                    rows={5} value={form.message} onChange={handleChange}
                    className={errors.message ? 'error' : ''} />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary submit-btn" disabled={sending}>
                  {sending ? (
                    <><FiLoader size={16} className="spin" /> Sending...</>
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
