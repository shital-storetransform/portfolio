import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import InteractiveAvatar from './InteractiveAvatar';

const Hero = () => {
    return (
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '100px 0 50px 0' }}>
            {/* Background Elements - Made Responsive */}
            <div className="hero-bg-blob" style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--primary-color)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%' }} />
            <div className="hero-bg-blob" style={{ position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px', background: 'var(--secondary-color)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%' }} />

            <div className="container hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap-reverse', gap: '4rem', zIndex: 1, width: '100%' }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                    style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column' }}
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}
                    >
                        Hi, I'm <span style={{ color: '#fff' }}>Shital Kasar</span>
                    </motion.h2>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
                        Senior <span className="gradient-text">WordPress Developer</span>
                    </h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <FaMapMarkerAlt />
                        <span>Kolhapur, Maharashtra, India</span>
                    </div>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px' }}>
                        Transforming ideas into robust digital experiences. Specializing in high-performance WordPress sites, WooCommerce, and Headless React applications with 2+ years of professional excellence.
                    </p>

                    <div className="hero-buttons" style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                            <FaGithub size={20} /> GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                            padding: '0.8rem 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--primary-color)',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '1rem',
                            fontWeight: 600,
                            boxShadow: '0 4px 15px rgba(109, 40, 217, 0.4)',
                            cursor: 'pointer'
                        }}>
                            <FaLinkedin size={20} /> LinkedIn
                        </a>
                    </div>
                </motion.div>

                {/* Hero Image / Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        minWidth: '280px'
                    }}
                >
                    {/* Width/Height wrapper for positioning */}
                    <div className="avatar-container" style={{ position: 'relative', width: '350px', height: '350px' }}>

                        {/* Avatar Container - Circular Mask */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--surface-light), var(--bg-color))',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid var(--primary-color)',
                            boxShadow: '0 0 50px rgba(109, 40, 217, 0.3)',
                            overflow: 'hidden' // Keeps the avatar inside the circle
                        }}>
                            <InteractiveAvatar />
                        </div>

                        {/* Floating Badges - Outside the mask so they don't get cut off */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="glass-card"
                            style={{ position: 'absolute', top: '10%', right: '-10%', padding: '0.5rem 1rem', whiteSpace: 'nowrap', zIndex: 10 }}
                        >
                            <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>2+ Years Exp.</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                            className="glass-card"
                            style={{ position: 'absolute', bottom: '15%', left: '-10%', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', zIndex: 10 }}
                        >
                            <span style={{ width: '10px', height: '10px', background: '#00ff00', borderRadius: '50%', boxShadow: '0 0 10px #00ff00' }}></span>
                            <span style={{ fontSize: '0.8rem' }}>Open for Work</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
