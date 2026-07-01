import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-wrap">
      <div className="notfound-bg" />
      <motion.div
        className="notfound-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="notfound-404"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-desc">
          Looks like this page got lost in cyberspace. Let's get you back home.
        </p>
        <div className="notfound-actions">
          <button className="btn-primary" onClick={() => navigate('/')}>
            <FiHome size={16} /> Go Home
          </button>
          <button className="btn-outline" onClick={() => navigate(-1)}>
            <FiArrowLeft size={16} /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
