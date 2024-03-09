import React, { useState, useEffect } from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import LogoMarquee from "./components/LogoMarquee";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Resume from "./components/Resume";

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  const lerp = (start, end, factor) => start + (end - start) * factor;

  useEffect(() => {
    const updatePosition = (e) => {
      setTargetPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  useEffect(() => {
    const moveSpotlight = () => {
      setPosition(prev => ({
        x: lerp(prev.x, targetPosition.x, 0.1),
        y: lerp(prev.y, targetPosition.y, 0.1),
      }));

      requestAnimationFrame(moveSpotlight);
    };

    requestAnimationFrame(moveSpotlight);
  }, [targetPosition]);

  const backgroundStyle = {
    background: `radial-gradient(circle 400px at ${position.x}px ${position.y}px, rgba(51, 161, 201,0.08) 0%, rgba(0,0,0,0.20) 80%)`,
  };

  return (

    <div className="flex flex-col spotlight spotlight" style={backgroundStyle}>
      <Navbar />
      <Hero />
      <Projects />
      <LogoMarquee />
      <About />
      <Resume />
      <Skills />
      <Qualifications />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
