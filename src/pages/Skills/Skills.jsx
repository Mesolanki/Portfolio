import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaAndroid, 
    FaBootstrap, FaPython 
} from 'react-icons/fa';
import { SiCplusplus, SiSharp, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import './skills.css';

const skillsData = [
    { name: 'HTML', level: 95, icon: <FaHtml5 />, detail: 'Semantic & SEO-driven structure' },
    { name: 'CSS', level: 90, icon: <FaCss3Alt />, detail: 'Advanced layouts & animations' },
    { name: 'JavaScript', level: 85, icon: <FaJs />, detail: 'ES6+ & Async Architecture' },
    { name: 'React', level: 90, icon: <FaReact />, detail: 'State Management & SPAs' },
    { name: 'JAVA', level: 90, icon: <FaJava />, detail: 'OOPs & Logic Architecture' },
    { name: 'Android', level: 80, icon: <FaAndroid />, detail: 'Mobile App Lifecycle & UI' },
    { name: 'Bootstrap', level: 85, icon: <FaBootstrap />, detail: 'Responsive Component Design' },
    { name: 'C / C++', level: 80, icon: <SiCplusplus />, detail: 'Memory Management & DSA' },
    { name: 'C#', level: 70, icon: <SiSharp />, detail: 'Desktop & Game Development' },
    { name: 'MongoDB', level: 75, icon: <SiMongodb />, detail: 'NoSQL Schema Design' },
    { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss />, detail: 'Utility-First Styling' },
    { name: 'Python', level: 80, icon: <FaPython />, detail: 'Data Analysis & Automation' },
];

const SkillsSection = () => {
    return (
        <section className="skills-viewport">
            <div className="blueprint-grid"></div>
            <div className="scanning-line"></div>
            
            <div className="skills-container">
                <div className="skills-header-side">
                    <motion.div 
                        className="header-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="blueprint-tag">SPECIFICATION _ 04</div>
                        <h2 className="massive-title">
                            CORE <span className="outline-text">STACK</span>
                        </h2>
                        <div className="architect-measure">
                            <div className="measure-line"></div>
                            <span className="measure-value">100% PRECISION</span>
                        </div>
                    </motion.div>
                </div>

                <div className="skills-interactive-side">
                    <div className="skills-orbit-grid">
                        {skillsData.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="skill-blueprint-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="card-scanner"></div>
                                <div className="card-header">
                                    <span className="skill-code">SYS_{index + 1}</span>
                                    <div className="skill-icon-box">{skill.icon}</div>
                                </div>
                                
                                <div className="card-body">
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <p className="skill-info">{skill.detail}</p>
                                </div>

                                <div className="card-footer">
                                    <div className="progress-label">
                                        <span>MASTERY</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-outer">
                                        <motion.div 
                                            className="skill-bar-inner"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />
                                    </div>
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