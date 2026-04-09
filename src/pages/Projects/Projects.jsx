import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './projects.css';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = [
        {
            id: "01",
            title: "FOOD DELIVERY UI",
            category: "ANDROID / JAVA",
            desc: "A high-fidelity food delivery interface featuring dark mode, OTP systems, and advanced UI/UX architecture.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: "02",
            title: "E-COMMERCE ENGINE",
            category: "REACT / JSON",
            desc: "Full-stack product management system with complex filtering, sorting, and large-scale hardware datasets.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: "03",
            title: "WEATHER ARCHITECT",
            category: "JAVASCRIPT / API",
            desc: "Precision weather monitoring application using real-time API integration and minimalist data visualization.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80"
        }
    ];

    const nextProject = () => setActiveIndex((prev) => (prev + 1) % projects.length);
    const prevProject = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <section className="projects-fullscreen">
            <div className="blueprint-overlay"></div>
            
            <div className="vertical-label">PROJECT SHOWCASE _ 2026</div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeIndex}
                    className="project-display"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="project-bg-text">{projects[activeIndex].id}</div>
                    
                    <div className="project-grid-main">
                        <div className="project-visual-side">
                            <motion.div 
                                className="main-image-frame"
                                initial={{ scale: 1.2, filter: "grayscale(1)" }}
                                animate={{ scale: 1, filter: "grayscale(0.5)" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                <img src={projects[activeIndex].image} alt={projects[activeIndex].title} />
                                <div className="accent-border"></div>
                            </motion.div>
                        </div>

                        <div className="project-info-side">
                            <motion.span 
                                className="project-number"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {projects[activeIndex].id} / 03
                            </motion.span>
                            
                            <motion.h2 
                                className="display-title"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {projects[activeIndex].title}
                            </motion.h2>

                            <motion.p 
                                className="display-desc"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {projects[activeIndex].desc}
                            </motion.p>

                            <div className="display-actions">
                                <a href="https://github.com/Mesolanki?tab=repositories" className="nav-icon-btn"><FaGithub /></a>
                                <a href="https://github.com/Mesolanki?tab=repositories" className="nav-icon-btn"><FaExternalLinkAlt /></a>
                                <span className="cat-tag">{projects[activeIndex].category}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="slider-controls">
                <button onClick={prevProject} className="ctrl-btn"><FaChevronLeft /></button>
                <div className="progress-bar">
                    <div 
                        className="progress-fill" 
                        style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
                    ></div>
                </div>
                <button onClick={nextProject} className="ctrl-btn"><FaChevronRight /></button>
            </div>
        </section>
    );
};

export default Projects;