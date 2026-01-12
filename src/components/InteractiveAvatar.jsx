import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const InteractiveAvatar = () => {
    // Mouse position state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Get center of screen/window to normalize looking direction
            const { innerWidth, innerHeight } = window;
            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;

            // Calculate offset from center
            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Map mouse position to pupil movement range
    // Range: -10px to 10px movement
    const pupilX = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-8, 8]);
    const pupilY = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [-8, 8]);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%' }}
            >
                {/* Hair Back */}
                <path d="M40 80C30 120 40 160 50 180H150C160 160 170 120 160 80C160 40 130 10 100 10C70 10 40 40 40 80Z" fill="#3E2723" />

                {/* Face Shape */}
                <path d="M50 80C50 140 70 170 100 170C130 170 150 140 150 80C150 40 130 30 100 30C70 30 50 40 50 80Z" fill="#FFECB3" />

                {/* Hair Bangs */}
                <path d="M40 80C40 40 70 20 100 20C130 20 160 40 160 80C160 70 140 50 100 50C60 50 40 70 40 80Z" fill="#3D2622" />

                {/* Left Eye Container */}
                <g transform="translate(75, 95)">
                    {/* Eye White */}
                    <circle cx="0" cy="0" r="12" fill="white" stroke="#3E2723" strokeWidth="1" />
                    {/* Pupil Group - Moves based on mouse */}
                    <motion.g style={{ x: pupilX, y: pupilY }}>
                        <circle cx="0" cy="0" r="6" fill="#4A148C" />
                        <circle cx="2" cy="-2" r="2" fill="white" opacity="0.8" />
                    </motion.g>
                    {/* Eye Lashes */}
                    <path d="M-10 -8 Q0 -15 10 -8" stroke="#3E2723" strokeWidth="2" fill="none" />
                </g>

                {/* Right Eye Container */}
                <g transform="translate(125, 95)">
                    {/* Eye White */}
                    <circle cx="0" cy="0" r="12" fill="white" stroke="#3E2723" strokeWidth="1" />
                    {/* Pupil Group - Moves based on mouse */}
                    <motion.g style={{ x: pupilX, y: pupilY }}>
                        <circle cx="0" cy="0" r="6" fill="#4A148C" />
                        <circle cx="2" cy="-2" r="2" fill="white" opacity="0.8" />
                    </motion.g>
                    {/* Eye Lashes */}
                    <path d="M-10 -8 Q0 -15 10 -8" stroke="#3E2723" strokeWidth="2" fill="none" />
                </g>

                {/* Mouth */}
                <path d="M92 135 Q100 145 108 135" stroke="#E57373" strokeWidth="3" strokeLinecap="round" fill="none" />

                {/* Blush */}
                <circle cx="65" cy="120" r="6" fill="#FFCDD2" opacity="0.6" />
                <circle cx="135" cy="120" r="6" fill="#FFCDD2" opacity="0.6" />
            </svg>
        </div>
    );
};

export default InteractiveAvatar;
