import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero_right from './pages/Home/Hero_right';
import About from './pages/About/About';
import SkillsSection from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTransitioning = useRef(false);
  const touchStart = useRef(null);
  const pages = ["/", "/about", "/skills" , "/contact"];

  useEffect(() => {
    const handleNavigation = (direction) => {
      if (isTransitioning.current) return;
      const currentIndex = pages.indexOf(location.pathname);

      if (direction === 'next' && currentIndex < pages.length - 1) {
        isTransitioning.current = true;
        navigate(pages[currentIndex + 1]);
      } else if (direction === 'prev' && currentIndex > 0) {
        isTransitioning.current = true;
        navigate(pages[currentIndex - 1]);
      }

      setTimeout(() => { isTransitioning.current = false; }, 1000);
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 50) {
        handleNavigation(e.deltaY > 0 ? 'next' : 'prev');
      }
    };

    const handleTouchStart = (e) => {
      touchStart.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!touchStart.current) return;
      const touchEnd = e.changedTouches[0].clientY;
      const distance = touchStart.current - touchEnd;

      if (Math.abs(distance) > 50) {
        handleNavigation(distance > 0 ? 'next' : 'prev');
      }
      touchStart.current = null;
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [location.pathname, navigate]);

  return (
    <div style={{ background: "#030c17", width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.8 }}>
              <Hero_right />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.8 }}>
              <About />
            </motion.div>
          } />
          <Route path="/skills" element={
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.8 }}>
              <SkillsSection />
            </motion.div>
          } />
        <Route path="/contact" element={
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.8 }}>
              <Contact />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;