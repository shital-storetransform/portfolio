import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWordpress, FaReact, FaCode, FaCogs, FaPlug, FaShoppingCart, FaDatabase, FaServer } from 'react-icons/fa';

const skills = [
    { name: 'BuddyBoss', icon: <FaWordpress />, level: 'Advanced' },
    { name: 'JetEngine', icon: <FaCogs />, level: 'Advanced' },
    { name: 'Elementor', icon: <FaCode />, level: 'Expert' },
    { name: 'WooCommerce', icon: <FaShoppingCart />, level: 'Expert' },
    { name: 'Gravity Forms', icon: <FaCogs />, level: 'Advanced' },
    { name: 'Headless WP', icon: <FaPlug />, level: 'Intermediate' },
    { name: 'React.js', icon: <FaReact />, level: 'Intermediate' },
    { name: 'Plugin Dev', icon: <FaCode />, level: 'Advanced' },
];

const SpotlightCard = ({ children }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="glass-card"
            style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '2.5rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.5rem',
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(30,30,30,0.4)'
            }}
        >
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(109, 40, 217, 0.4), transparent 40%)`,
                    transition: 'opacity 0.15s ease',
                }}
            />

            {/* Border Glow */}
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: '-1px',
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(147, 51, 234, 0.5), transparent 40%)`,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    transition: 'opacity 0.15s ease',
                    zIndex: 1
                }}
            />

            <div style={{ zIndex: 2, position: 'relative' }}>
                {children}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '8rem 0', background: 'var(--surface-color)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    Technical <span className="gradient-text">Expertise</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard>
                                <div style={{
                                    fontSize: '3rem',
                                    color: 'var(--text-primary)',
                                    marginBottom: '0.5rem',
                                    filter: 'drop-shadow(0 0 10px rgba(109,40,217,0.5))'
                                }}>
                                    {skill.icon}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{skill.name}</h3>
                                <span style={{
                                    fontSize: '0.85rem',
                                    padding: '0.5rem 1.2rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '50px',
                                    color: 'var(--text-secondary)',
                                    letterSpacing: '0.5px'
                                }}>
                                    {skill.level}
                                </span>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
