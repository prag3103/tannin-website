import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/image_1-removebg-preview.png';

interface NavigationProps {
  activeSection: number;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Catalogue', 'Experience', 'Contact'];

  const scrollToSection = (index: number) => {
    const targetPosition = index * window.innerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    setIsOpen(false); // close menu on selection (mobile)
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 bg-transparent"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo (bigger on mobile, same on larger screens) */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Tannin Logo" 
            className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto" 
          />
        </div>

        {/* Desktop Menu (restored pill-style background) */}
        <div className="hidden md:flex items-center bg-tannin-gold/20 backdrop-blur-md rounded-full px-8 py-3 shadow-md">
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className={`relative px-4 py-2 rounded-full font-miluena text-base font-medium transition-all duration-300 ${
                  activeSection === index
                    ? 'text-tannin-gold bg-tannin-gold/30'
                    : 'text-foreground hover:text-tannin-gold hover:bg-tannin-gold/20'
                }`}
              >
                {item}
                {activeSection === index && (
                  <motion.div
                    className="absolute inset-0 bg-tannin-gold/20 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-tannin-gold focus:outline-none"
          >
            {isOpen ? (
              // Close (X) icon
              <svg 
                className="w-7 h-7" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon
              <svg 
                className="w-7 h-7" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Spacer for balance (desktop only) */}
        <div className="hidden md:block w-10" />
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-3 bg-background/95 rounded-lg border border-tannin-gold/20 p-3 absolute right-4 top-full w-44 shadow-lg"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === index
                    ? 'text-tannin-gold bg-tannin-gold/20'
                    : 'text-foreground hover:text-tannin-gold hover:bg-tannin-gold/10'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
