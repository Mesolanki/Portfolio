import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: {
      clipPath: `circle(1200px at 90% 40px)`,
      transition: { type: "spring", stiffness: 20, restDelta: 2 }
    },
    closed: {
      clipPath: "circle(30px at 90% 40px)",
      transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 }
    }
  };

  const listVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const itemVariants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } }
  };

  return (
    <nav className='nav-container'>
      <motion.div 
        className="logo"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
      >
        <img src="/Logo.svg" alt="Logo" />
      </motion.div>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <motion.div 
        className="nav-overlay"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <motion.ul variants={listVariants} className="nav-menu-items">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.li 
              key={item} 
              variants={itemVariants}
              whileHover={{ scale: 1.1, x: 20 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                className='nav-link-large' 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
              >
                <span className="link-number">0{['Home', 'About', 'Skills', 'Projects', 'Contact'].indexOf(item) + 1}</span>
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;