import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaPhoneAlt, FaComments } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer id="contact" style={{ background: 'var(--surface-color)', paddingTop: '4rem', paddingBottom: '2rem', marginTop: '4rem' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Let's Work <span className="gradient-text">Together</span></h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                        I'm currently available for freelance projects and open to full-time opportunities.
                        If you need a high-end WordPress solution or a custom React application, let's talk.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:+919876543210" className="glass-card contact-btn" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '1rem 2.5rem',
                            fontSize: '1.2rem',
                            background: 'linear-gradient(135deg, var(--primary-color), var(--primary-glow))',
                            border: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}>
                            <FaPhoneAlt /> Call Me
                        </a>

                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="glass-card contact-btn" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '1rem 2.5rem',
                            fontSize: '1.2rem',
                            background: 'linear-gradient(135deg, #25D366, #128C7E)',
                            border: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}>
                            <FaComments /> Let's Chat
                        </a>
                    </div>
                    <style>{`
                        @media (max-width: 480px) {
                            .contact-btn {
                                width: 100%;
                                justify-content: center;
                                font-size: 1rem !important;
                                padding: 0.8rem 1rem !important;
                            }
                        }
                    `}</style>
                </motion.div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://github.com" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}><FaGithub /></a>
                        <a href="https://linkedin.com" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}><FaLinkedin /></a>
                    </div>
                    <p style={{ color: '#555', fontSize: '0.8rem' }}>
                        © {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
