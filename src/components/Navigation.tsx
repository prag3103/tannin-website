import { motion } from 'framer-motion';
import logo from '../assets/image_1-removebg-preview.png';

interface NavigationProps {
  activeSection: number;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const navItems = ['hero', 'about', 'catalogue', 'experience', 'contact'];
  const displayNames = ['Home', 'About', 'Catalogue', 'Experience', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Tannin Logo" 
            className="h-16 md:h-24 w-auto" // Adjusted logo size for mobile
          />
        </div>

        <div className="bg-tannin-gold/10 backdrop-blur-md rounded-full px-4 py-3 border border-tannin-gold/20">
          <div className="flex items-center space-x-4 sm:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative px-2 sm:px-4 py-2 rounded-full font-miluena text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeSection === index
                    ? 'text-tannin-gold bg-tannin-gold/20'
                    : 'text-foreground hover:text-tannin-gold hover:bg-tannin-gold/10'
                }`}
              >
                {displayNames[index]}
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

        {/* Removed the fixed-width spacer */}
      </div>
    </motion.nav>
  );
};

export default Navigation;
