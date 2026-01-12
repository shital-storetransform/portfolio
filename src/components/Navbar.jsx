import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const links = ['Experience', 'Skills', 'Projects', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
            style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'center', paddingTop: '1.5rem', pointerEvents: 'none' }}
        >
            <div
                className="glass-card"
                style={{ pointerEvents: 'auto', padding: '0.75rem 2rem', display: 'flex', gap: '2rem', borderRadius: '50px' }}
            >
                {links.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        style={{ fontWeight: 500, fontSize: '0.9rem' }}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
