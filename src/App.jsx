import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Custom Cursor / Glow Effect */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '1px solid var(--primary-glow)',
          transform: `translate(${mousePosition.x - 15}px, ${mousePosition.y - 15}px)`,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transition: 'transform 0.1s ease-out',
          boxShadow: '0 0 20px var(--primary-glow)'
        }}
        className="cursor-glow"
      />

      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
