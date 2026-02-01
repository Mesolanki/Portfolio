import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react'; // Icons
import Hero_img from '../../assets/Images/M.jpg';
import './Hero_right.css';

const Hero_right = () => {
  return (
    <section className='hero-section'>
      <div className="dot-grid-bg"></div>
      <div className="bg-watermark">CREATIVE</div>

      <div className="hero-container">
        <div className="hero-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="brand-label"
          >
            <span className="gold-accent">EST. 2007</span>
            <div className="gradient-line"></div>
            <span>PORTFOLIO</span>
          </motion.div>

          <div className="headline-main">
            <h2 className="greeting-glitch" data-text="HELLO, I'M">HELLO, I'M</h2>
            <h1 className="name-title">
              MIHIR <span className="outline-text">SOLANKI</span>
            </h1>
            
            <div className="type-box">
              <TypeAnimation
                sequence={['FullStack Developer', 2000, 'System Architect', 2000, 'UI/UX Innovator', 2000]}
                wrapper="span"
                repeat={Infinity}
                className="typing-text"
              />
            </div>
          </div>

          <div className="detail-glass-card">
            <p>Crafting digital excellence through clean code and intuitive design systems.</p>
            <div className="tech-pills">
              <span>React</span>
              <span>Node.js</span>
              <span>HTML-CSS</span>
            </div>
          </div>

          <div className="action-row">
            <motion.button whileHover={{ scale: 1.05 }} className='explore-btn'>
              VIEW PROJECTS <ExternalLink size={18} />
            </motion.button>
            
            <div className="social-icon-group">
              <a href="https://www.linkedin.com/in/mihir-solanki-2007/" className="s-icon"><Linkedin size={20} /></a>
              <a href="https://twitter.com/Mesolanki1" className="s-icon"><Twitter size={20} /></a>
              <a href="https://github.com/Mesolanki" className="s-icon"><Github size={20} /></a>
              <a href="https://www.instagram.com/mihir._.solanki_2007/" className="s-icon"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <motion.div 
          className="hero-right" 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        >
          <div className="image-frame">
            <img src={Hero_img} alt="Mihir" className="main-hero-img" />
            <div className="glitch-overlay"></div>
            <div className="corner-tl"></div>
            <div className="corner-br"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero_right;