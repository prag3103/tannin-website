import { motion } from 'framer-motion';
import TanninLogo from '../TanninLogo';

const HeroSection = () => {
  return (
    <div className="h-screen flex items-center justify-center relative bg-gradient-hero">
      {/* Background particles/bubbles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-tannin-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <TanninLogo size={120} className="mx-auto mb-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-miluena-bold text-gradient-gold mb-6"
        >
          tannin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-foreground/80 mb-8 font-light leading-relaxed"
        >
          Reimagining wine for the modern palate
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Where tradition meets innovation. Crafted from nature's finest fruits and vegetables,
          our wines celebrate flavour, wellness, and creativity.
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-tannin-gold/60 text-sm"
          >
            <div className="w-6 h-10 border-2 border-tannin-gold/40 rounded-full mx-auto mb-2">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-tannin-gold/60 rounded-full mx-auto mt-1"
              />
            </div>
            <span className="font-light">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;