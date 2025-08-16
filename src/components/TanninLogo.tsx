import { motion } from 'framer-motion';

interface TanninLogoProps {
  size?: number;
  className?: string;
}

const TanninLogo = ({ size = 60, className = "" }: TanninLogoProps) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="wine-bottle-float"
      >
        {/* Hexagonal background */}
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D1A01B" />
            <stop offset="50%" stopColor="#E6B84A" />
            <stop offset="100%" stopColor="#D1A01B" />
          </linearGradient>
        </defs>
        
        <polygon
          points="50,5 85,25 85,75 50,95 15,75 15,25"
          fill="url(#hexGradient)"
          className="shadow-glow"
        />
        
        {/* Wine glass silhouette */}
        <path
          d="M35 30 L35 45 Q35 55 42 60 L42 75 L58 75 L58 60 Q65 55 65 45 L65 30 Z M32 25 L68 25 L68 30 L32 30 Z"
          fill="#26084F"
          opacity="0.9"
        />
        
        {/* Stem */}
        <rect x="47" y="75" width="6" height="15" fill="#26084F" opacity="0.9" />
        
        {/* Base */}
        <ellipse cx="50" cy="92" rx="12" ry="3" fill="#26084F" opacity="0.9" />
      </svg>
      
      <motion.div 
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-tannin-gold font-miluena text-xs font-bold tracking-wider">
          tannin
        </span>
      </motion.div>
    </motion.div>
  );
};

export default TanninLogo;