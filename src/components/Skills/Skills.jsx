import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import './Skills.css';

const SkillBar = ({ skill, index, visible }) => (
  <motion.div
    className="skill-item"
    initial={{ opacity: 0, x: -20 }}
    animate={visible ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <div className="skill-info">
      <div className="skill-icon-name">
        <skill.icon size={18} color={skill.color} />
        <span className="skill-name">{skill.name}</span>
      </div>
      <span className="skill-percent">{skill.level}%</span>
    </div>
    <div className="skill-bar-bg">
      <motion.div
        className="skill-bar-fill"
        style={{ background: skill.color }}
        initial={{ width: 0 }}
        animate={visible ? { width: `${skill.level}%` } : {}}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.06, ease: 'easeOut' }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const displayed = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            A comprehensive set of technologies I use to build scalable full-stack applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="skills-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.icon}</span> {cat.title.split(' ')[0]}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="skills-grid">
          <AnimatePresence mode="wait">
            {displayed.map((cat, ci) => (
              <motion.div
                key={cat.id}
                className="skill-category-card glass-card"
                style={{ '--cat-color': cat.color }}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.4, delay: ci * 0.08 }}
              >
                <div className="cat-header">
                  <span className="cat-icon">{cat.icon}</span>
                  <h3 className="cat-title">{cat.title}</h3>
                  <span className="cat-count">{cat.skills.length}</span>
                </div>
                <div className="cat-divider" style={{ background: cat.gradient }} />
                <div className="skill-list">
                  {cat.skills.map((skill, si) => (
                    <SkillBar key={skill.name} skill={skill} index={si} visible={inView} />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
