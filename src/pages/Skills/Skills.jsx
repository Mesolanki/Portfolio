import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';

const skillsData = [
    { name: 'HTML', level: 95, detail: 'Semantic & SEO-driven structure' },
    { name: 'CSS', level: 90, detail: 'Advanced layouts, Flexbox & Grid' },
    { name: 'JavaScript', level: 85, detail: 'ES6+, DOM manipulation & Async' },
    { name: 'React', level: 90, detail: 'Hooks, State Management & SPAs' },
    { name: 'JAVA', level: 90, detail: 'OOPs, Logic & Backend Architecture' },
    { name: 'Android Studio', level: 80, detail: 'Mobile App Lifecycle & UI' }
];

const SkillsSection = () => {
    return (
        <section className="skills-section">
            <div className="skills-layout">
                <div className="skills-left">
                    <div className="brand-label">
                        <span>EXPERTISE</span>
                        <div className="dot-line"></div>
                        <span>TECH STACK</span>
                    </div>
                    <h2 className="skills-main-title">CORE <br /> ABILITIES</h2>
                </div>
                <div className="skills-right">
                    <div className="skills-grid">
                        {skillsData.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="skill-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="card-top">
                                    <span className="skill-index">0{index + 1}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <h3 className="card-title">{skill.name}</h3>
                                <p className="card-detail">{skill.detail}</p>
                                <div className="card-progress-bar">
                                    <motion.div
                                        className="bar-fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;