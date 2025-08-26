import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CatalogueSection from './sections/CatalogueSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

const ScrollingWebsite = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'catalogue', 'experience', 'contact'];
      let currentSection = 0;
      let minDistance = Infinity;
      
      sections.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 2);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = index;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen relative">
        <AboutSection />
      </section>

      {/* Catalogue Section */}
      <section id="catalogue" className="relative">
        <CatalogueSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen relative">
        <ExperienceSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen relative">
        <ContactSection />
      </section>
    </div>
  );
};

export default ScrollingWebsite;
