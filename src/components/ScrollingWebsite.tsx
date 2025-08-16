import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from './Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CatalogueSection from './sections/CatalogueSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

const ScrollingWebsite = () => {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();

  // Transform scroll to section progress
  const section1Progress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const section2Progress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const section3Progress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const section4Progress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const section5Progress = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const section = Math.floor(scrolled / viewportHeight);
      setActiveSection(Math.min(section, 4));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} />
      
      {/* Hero Section */}
      <motion.section 
        className="h-screen relative overflow-hidden"
        style={{ opacity: useTransform(section1Progress, [0.8, 1], [1, 0.3]) }}
      >
        <HeroSection />
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="h-screen relative overflow-hidden"
        style={{ 
          opacity: useTransform(section2Progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]),
          y: useTransform(section1Progress, [0, 1], [100, 0])
        }}
      >
        <AboutSection />
      </motion.section>

      {/* Catalogue Section */}
      <motion.section 
        className="h-screen relative overflow-hidden"
        style={{ 
          opacity: useTransform(section3Progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]),
          y: useTransform(section2Progress, [0, 1], [100, 0])
        }}
      >
        <CatalogueSection />
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="h-screen relative overflow-hidden"
        style={{ 
          opacity: useTransform(section4Progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]),
          y: useTransform(section3Progress, [0, 1], [100, 0])
        }}
      >
        <ExperienceSection />
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="h-screen relative overflow-hidden"
        style={{ 
          opacity: useTransform(section5Progress, [0, 0.2], [0, 1]),
          y: useTransform(section4Progress, [0, 1], [100, 0])
        }}
      >
        <ContactSection />
      </motion.section>
    </div>
  );
};

export default ScrollingWebsite;