import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaWordpressSimple } from 'react-icons/fa';
import woocommerceImg from '../assets/woocommerce.png';
import gameImg from '../assets/game.png';
import agencyImg from '../assets/agency.png';
import mobileImg from '../assets/mobile.png';
import communityImg from '../assets/community.png';

// Original WordPress Projects (Restored)
const wordpressProjects = [
    {
        title: 'Custom WooCommerce Subscription',
        category: 'Plugin Development',
        description: 'A robust plugin to handle complex subscription models, enhancing default WooCommerce capabilities with custom billing cycles.',
        tags: ['PHP', 'WooCommerce', 'React'],
        color: '#7f54b3'
    },
    {
        title: 'Advanced Notification System',
        category: 'System Architecture',
        description: 'Custom notification engine for BuddyBoss, allowing real-time alerts for custom post types and interactions.',
        tags: ['BuddyBoss', 'WebSockets', 'JS'],
        color: '#25cf4b'
    },
    {
        title: 'Headless Corporate Portal',
        category: 'Headless WordPress',
        description: 'Decoupled WordPress backend serving content to a high-performance Next.js frontend.',
        tags: ['Next.js', 'WPGraphQL', 'Tailwind'],
        color: '#61dafb'
    },
    {
        title: 'Digital Agency Portfolio',
        category: 'Theme Development',
        description: 'Custom Elementor-based theme for Shootorder, optimizing for high traffic and lead generation.',
        tags: ['Elementor', 'CSS3', 'GSAP'],
        color: '#ff6b6b'
    }
];

// New React Projects (With Images)
const reactProjects = [
    {
        title: 'Quest for the Pixel Orb',
        category: 'Game Development',
        description: 'A retro-style pixel art adventure game built with React and HTML5 Canvas.',
        tags: ['GameDev', 'Pixel Art', 'Canvas'],
        image: gameImg,
        url: 'https://example.com/pixel-quest'
    },
    {
        title: 'Elite Admin Dashboard',
        category: 'React App',
        description: 'A comprehensive dark-themed admin dashboard with charts and analytics.',
        tags: ['React', 'Recharts', 'UI/UX'],
        image: woocommerceImg,
        url: 'https://example.com/admin-dashboard'
    },
    {
        title: 'Nexus Agency Portal',
        category: 'Landing Page',
        description: 'Modern, high-performance landing page for a leading digital marketing agency.',
        tags: ['GSAP', 'Next.js', 'Framer Motion'],
        image: agencyImg,
        url: 'https://example.com/agency-nexus'
    },
    {
        title: 'FitTrack Pro',
        category: 'Mobile Application',
        description: 'Sleek fitness tracking application with real-time stats and dark mode UI.',
        tags: ['React Native', 'Mobile', 'Health'],
        image: mobileImg,
        url: 'https://example.com/fittrack'
    },
    {
        title: 'Agora Community Hub',
        category: 'Social Platform',
        description: 'Feature-rich community forum with real-time feeds and user profiles.',
        tags: ['Social', 'React', 'Firebase'],
        image: communityImg,
        url: 'https://example.com/agora-hub'
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '6rem 0' }}>
            <div className="container">

                {/* --- WordPress Section --- */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    WordPress <span className="gradient-text">Solutions</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                    {wordpressProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass-card"
                            style={{
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <div style={{
                                height: '200px',
                                background: `linear-gradient(45deg, ${project.color}40, var(--bg-color))`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                borderBottom: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <FaWordpressSimple size={60} color={project.color} style={{ opacity: 0.8 }} />

                                {/* Overlay Effect */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0,0,0,0.7)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backdropFilter: 'blur(3px)'
                                    }}
                                >
                                    <button className="glass-card" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', background: 'var(--primary-color)', border: 'none' }}>
                                        View Details <FaExternalLinkAlt size={12} />
                                    </button>
                                </motion.div>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '0.8rem', color: project.color, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.3 }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', background: 'var(--surface-light)', borderRadius: '15px', color: 'var(--text-secondary)' }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- React Section --- */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    React <span className="gradient-text">Projects</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {reactProjects.map((project, index) => (
                        <motion.a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card"
                            style={{
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                textDecoration: 'none',
                                color: 'inherit',
                                border: '1px solid rgba(255,255,255,0.08)'
                            }}
                        >
                            {/* Image Container with Overlay */}
                            <div style={{
                                height: '250px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    className="project-image"
                                />

                                {/* Hover Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0,0,0,0.6)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backdropFilter: 'blur(2px)'
                                    }}
                                >
                                    <span style={{
                                        padding: '0.8rem 1.5rem',
                                        background: 'var(--primary-color)',
                                        borderRadius: '50px',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'white'
                                    }}>
                                        View Project <FaExternalLinkAlt size={12} />
                                    </span>
                                </motion.div>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--primary-glow)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.3 }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            <style>{`
        .glass-card:hover .project-image {
          transform: scale(1.1);
        }
      `}</style>
        </section>
    );
};

export default Projects;
