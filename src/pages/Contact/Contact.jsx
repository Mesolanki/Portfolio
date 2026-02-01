import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_8oxegfu',
            'template_bg043dy',
            form.current,
            '0AittFodda38_BH9w'
        )
            .then(() => {
                setStatus({ type: 'success', message: 'COMMUNICATION ESTABLISHED' });
                e.target.reset();
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            }, () => {
                setStatus({ type: 'error', message: 'CONNECTION FAILURE' });
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">03 // CONTACT</span>
                        <h2 className="contact-title">SYSTEMS<br />INTERFACE</h2>
                        <div className="contact-details">
                            <div className="detail-box">
                                <FaEnvelope className="detail-icon" />
                                <span>mesolanki855@gmail.com</span>
                            </div>
                            <div className="detail-box">
                                <FaPhoneAlt className="detail-icon" />
                                <span>+91 91060-92009</span>
                            </div>
                            <div className="detail-box">
                                <FaMapMarkerAlt className="detail-icon" />
                                <span>GUJARAT, INDIA</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail} className="architect-form">
                            <div className="input-row">
                                <div className="field-wrapper">
                                    <input type="text" name="user_name" placeholder="IDENTIFIER" required />
                                    <div className="focus-line"></div>
                                </div>
                                <div className="field-wrapper">
                                    <input type="email" name="user_email" placeholder="ENCRYPTED EMAIL" required />
                                    <div className="focus-line"></div>
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <input type="text" name="subject" placeholder="TRANSMISSION SUBJECT" required />
                                <div className="focus-line"></div>
                            </div>
                            <div className="field-wrapper">
                                <textarea name="message" rows="4" placeholder="MESSAGE DATA" required></textarea>
                                <div className="focus-line"></div>
                            </div>

                            <motion.button
                                type="submit"
                                className="architect-btn"
                                whileHover={{ letterSpacing: '6px' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="btn-glitch">INITIATE SEND</span>
                                <FaPaperPlane className="btn-icon" />
                            </motion.button>
                        </form>

                        <AnimatePresence>
                            {status.message && (
                                <motion.div
                                    className={`status-notification ${status.type}`}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                >
                                    {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
                                    <span>{status.message}</span>
                                    <div className="scan-line"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
