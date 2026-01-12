import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
    {
        role: 'WordPress Developer (Current)',
        company: 'Storetransform',
        location: 'Ahmedabad, Gujarat',
        period: '25th July 2024 - Present',
        description: 'Specializing in WooCommerce subscriptions, custom plugin development, and handling website monthly maintenance. Working with BuddyBoss, JetEngine, and complex integrations.',
    },
    {
        role: 'Web Developer',
        company: 'Shootorder Digital Marketing Agency',
        location: 'Hyderabad, Telangana',
        period: '15th May 2023 - 31st March 2024',
        description: 'Developed and maintained high-traffic websites for agency clients. Gained extensive experience in digital marketing integrations and responsive web development.',
    }
];

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '5rem', textAlign: 'center' }}
                >
                    <span className="gradient-text">Work Experience</span>
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card experience-card"
                            style={{ position: 'relative', borderLeft: '4px solid var(--primary-color)' }}
                        >
                            <style>{`
                                .experience-card {
                                    padding: 3rem;
                                }
                                @media (max-width: 768px) {
                                    .experience-card {
                                        padding: 1.5rem !important;
                                    }
                                }
                            `}</style>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                                <span className="glass-card" style={{ padding: '0.2rem 0.8rem', fontSize: '0.8rem' }}>{exp.period}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-glow)', marginBottom: '0.5rem' }}>
                                <FaBriefcase />
                                <strong>{exp.company}</strong>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                <FaMapMarkerAlt />
                                <span>{exp.location}</span>
                            </div>

                            <p style={{ color: 'var(--text-secondary)' }}>
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
