import React from 'react';
import { motion } from 'framer-motion';
import { FaBirthdayCake, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Hero_img from '../../assets/Images/Hero.jpg';
import Resume from '../../assets/Files/Resume.pdf';
import './about.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ clipPath: "inset(100% 0 0 0)" }}
                        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className="image-frame">
                            <img src={Hero_img} alt="Mihir Solanki" />
                            <div className="frame-decoration"></div>
                        </div>
                    </motion.div>

                    <div className="about-info-content">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">THE ARCHITECT</span>
                            <h2 className="about-title">MIHIR SOLANKI</h2>
                            <p className="about-bio">
                                FullStack Developer and UI Architect. I build digital experiences
                                that combine technical precision with creative design.
                            </p>

                            <div className="details-card">
                                <div className="detail-item">
                                    <FaBirthdayCake className="detail-icon" />
                                    <span>FEB 05, 2007</span>
                                </div>
                                <div className="detail-item">
                                    <FaEnvelope className="detail-icon" />
                                    <span>mesolanki855@gmail.com</span>
                                </div>
                                <div className="detail-item">
                                    <FaPhoneAlt className="detail-icon" />
                                    <span>+91 91060-92009</span>
                                </div>
                            </div>

                            <motion.div
                                className="about-actions"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href={Resume} download="Mihir_Solanki_CV.pdf" className="download-btn">
                                    <span className="btn-text">DOWNLOAD CV</span>
                                    <span className="btn-arrow">↓</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;