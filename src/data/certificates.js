// ─── HOW TO ADD MORE CERTIFICATES ──────────────────────────────────────────
//  1. Put the image file in:  src/assets/
//  2. Import it at the top of this file
//  3. Add a new entry in the array below
// ──────────────────────────────────────────────────────────────────────────

import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';
import cert4 from '../assets/cert4.jpg';
import cert5 from '../assets/cert5.jpg';
import cert6 from '../assets/cert6.jpg';

export const certificates = [
  {
    id: 1,
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "TATA / Forage",
    date: "January 5, 2026",
    image: cert1,
    credential: "#",
  },
  {
    id: 2,
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "December 17, 2025",
    image: cert2,
    credential: "https://www.credly.com/badges/a19249d9-d0bf-4c68-a86c-8ea87a6c05a0",
  },
  {
    id: 3,
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA / Forage",
    date: "December 11, 2025",
    image: cert3,
    credential: "#",
  },
  {
    id: 4,
    title: "Certificate of Publication — Obstacle Avoiding Robot",
    issuer: "IRJMETS (International Research Journal)",
    date: "April 11, 2024",
    image: cert4,
    credential: "https://www.irjmets.com",
  },
  {
    id: 5,
    title: "CICS HACKSPRINT v5.0 — Certificate of Achievement",
    issuer: "MMCOE — ISTE SC & ACM SC, Pune",
    date: "2024",
    image: cert5,
    credential: "#",
  },
  {
    id: 6,
    title: "Data Science, AI and Cyber Security & Privacy — Masterclass",
    issuer: "iSTEP / Deakin University (Passed with Distinction)",
    date: "August 7, 2025",
    image: cert6,
    credential: "#",
  },
  // ── ADD MORE BELOW ────────────────────────────────────────────────────────
  // {
  //   id: 7,
  //   title: "Certificate Name",
  //   issuer: "Issuer Name",
  //   date: "Month Year",
  //   image: cert7,   ← import it above first
  //   credential: "https://verify-link.com",
  // },
];

export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Certificates", value: 6, suffix: "+" },
  { label: "GitHub Repos", value: 15, suffix: "+" },
  { label: "Tech Stack", value: 20, suffix: "+" },
];

export const timeline = [
  {
    year: "2021",
    title: "Started B.Tech CSE",
    org: "Alard University, Pune",
    description: "Began Computer Science Engineering with focus on programming fundamentals.",
    type: "education",
    icon: "🎓",
  },
  {
    year: "2022",
    title: "Web Development Journey",
    org: "Self-Learning",
    description: "Started learning HTML, CSS, JavaScript and fell in love with frontend development.",
    type: "milestone",
    icon: "💡",
  },
  {
    year: "2023",
    title: "Python & Backend Development",
    org: "Self-Learning",
    description: "Mastered Python, FastAPI, PostgreSQL and started building full-stack applications.",
    type: "milestone",
    icon: "⚙️",
  },
  {
    year: "2023",
    title: "First Full Stack Project",
    org: "Personal Project",
    description: "Built Employee Management System with React frontend and FastAPI backend.",
    type: "project",
    icon: "🚀",
  },
  {
    year: "2024",
    title: "React Native & Mobile Dev",
    org: "Self-Learning",
    description: "Expanded into mobile development with React Native Expo for cross-platform apps.",
    type: "milestone",
    icon: "📱",
  },
  {
    year: "2024",
    title: "Mining Monitoring System",
    org: "Major Project",
    description: "Led development of enterprise MTPMS — full-stack mining operations platform.",
    type: "project",
    icon: "⛏️",
  },
  {
    year: "2025",
    title: "B.Tech Graduation",
    org: "Alard University, Pune",
    description: "Graduated with B.Tech in Computer Science Engineering.",
    type: "education",
    icon: "🎓",
  },
];
