import { useState, useEffect, lazy, Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';
import Cursor from './components/Cursor/Cursor';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Pranay Pore | Full Stack Developer</title>
        <meta name="description" content="Pranay Pore — Full Stack Developer specializing in FastAPI, React, React Native, PostgreSQL, and Docker. Building scalable enterprise applications from Pune, India." />
        <meta name="keywords" content="Pranay Pore, Full Stack Developer, FastAPI Developer, React Developer, React Native, PostgreSQL, Docker, Python, Portfolio, Pune India" />
        <meta name="author" content="Pranay Pore" />
        <meta property="og:title" content="Pranay Pore | Full Stack Developer" />
        <meta property="og:description" content="Building scalable full-stack applications with FastAPI, React, React Native & PostgreSQL." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pranaypore.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pranay Pore | Full Stack Developer" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="canonical" href="https://pranaypore.dev" />
      </Helmet>

      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Cursor />
          <ScrollProgress />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#0d1117',
                color: '#f1f5f9',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '12px',
                fontFamily: "'Inter', sans-serif",
              },
              success: {
                iconTheme: { primary: '#6366f1', secondary: '#fff' },
              },
            }}
          />
        </>
      )}
    </HelmetProvider>
  );
};

export default App;
