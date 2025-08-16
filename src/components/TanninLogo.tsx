import { motion } from 'framer-motion';

interface TanninLogoProps {
  size?: number;
  className?: string;
}

const TanninLogo = ({ size = 60, className = "" }: TanninLogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
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
          points="50,8 80,26 80,74 50,92 20,74 20,26"
          fill="url(#hexGradient)"
        />
        
        {/* Wine glass silhouette - exact match to reference */}
        <path
          d="M38 32 L38 48 Q38 58 44 62 L44 78 L56 78 L56 62 Q62 58 62 48 L62 32 Z M35 28 L65 28 L65 32 L35 32 Z"
          fill="#26084F"
        />
        
        {/* Stem */}
        <rect x="48" y="78" width="4" height="10" fill="#26084F" />
        
        {/* Base */}
        <ellipse cx="50" cy="90" rx="8" ry="2" fill="#26084F" />
      </svg>
      
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <span className="text-tannin-gold font-miluena text-xs font-bold tracking-wider">
          tannin
        </span>
      </div>
    </div>
  );
};

export default TanninLogo;