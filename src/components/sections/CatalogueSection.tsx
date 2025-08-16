import { motion } from 'framer-motion';

const CatalogueSection = () => {
  const wines = [
    {
      name: "SCARLETT",
      description: "Beetroot wine with a tinge of celery",
      color: "#8B1538",
      gradient: "from-red-900 to-red-700"
    },
    {
      name: "PINECHILL",
      description: "Pineapple wine with a tinge of chilli",
      color: "#FF6B35",
      gradient: "from-orange-600 to-yellow-500"
    },
    {
      name: "CITRINE",
      description: "Orange wine",
      color: "#FFB830",
      gradient: "from-orange-400 to-yellow-400"
    },
    {
      name: "JADEITE",
      description: "Gooseberry wine with a tinge of ginger",
      color: "#4A7C59",
      gradient: "from-green-600 to-green-400"
    },
    {
      name: "CAROTA",
      description: "Carrot wine",
      color: "#FF7F50",
      gradient: "from-orange-500 to-orange-300"
    }
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-hero px-6">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-miluena-bold text-tannin-gold mb-16 text-center"
      >
        OUR COLLECTION
      </motion.h2>

      {/* Grid Layout: 3 on top, 2 on bottom */}
      <div className="max-w-7xl mx-auto">
        {/* Top row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {wines.slice(0, 3).map((wine, index) => (
            <motion.div
              key={wine.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.6,
                type: "spring",  
                stiffness: 300 
              }}
              className="relative group cursor-pointer"
            >
              <div 
                className={`w-72 h-72 rounded-2xl bg-gradient-to-br ${wine.gradient} shadow-elegant 
                           border border-white/10 backdrop-blur-sm overflow-hidden mx-auto`}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -left-20 w-40 h-40 border border-white/20 rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <motion.h3
                      className="text-white font-miluena-bold text-2xl mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {wine.name}
                    </motion.h3>
                    <motion.p
                      className="text-white/80 text-base leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {wine.description}
                    </motion.p>
                  </div>

                  {/* Decorative wine glass icon */}
                  <motion.div
                    className="self-end"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white/60">
                      <path
                        d="M8 2h8v4.5c0 1.38-.56 2.63-1.46 3.54L12 12.58l-2.54-2.54C8.56 9.13 8 7.88 8 6.5V2z"
                        fill="currentColor"
                        opacity="0.7"
                      />
                      <rect x="11" y="12" width="2" height="8" fill="currentColor" opacity="0.7" />
                      <ellipse cx="12" cy="21" rx="3" ry="1" fill="currentColor" opacity="0.7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: wine.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 2 items centered */}
        <div className="flex justify-center gap-8">
          {wines.slice(3, 5).map((wine, index) => (
            <motion.div
              key={wine.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ 
                delay: (index + 3) * 0.2, 
                duration: 0.6,
                type: "spring",  
                stiffness: 300 
              }}
              className="relative group cursor-pointer"
            >
              <div 
                className={`w-72 h-72 rounded-2xl bg-gradient-to-br ${wine.gradient} shadow-elegant 
                           border border-white/10 backdrop-blur-sm overflow-hidden`}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -left-20 w-40 h-40 border border-white/20 rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <motion.h3
                      className="text-white font-miluena-bold text-2xl mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (index + 3) * 0.2 + 0.3 }}
                    >
                      {wine.name}
                    </motion.h3>
                    <motion.p
                      className="text-white/80 text-base leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (index + 3) * 0.2 + 0.5 }}
                    >
                      {wine.description}
                    </motion.p>
                  </div>

                  {/* Decorative wine glass icon */}
                  <motion.div
                    className="self-end"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white/60">
                      <path
                        d="M8 2h8v4.5c0 1.38-.56 2.63-1.46 3.54L12 12.58l-2.54-2.54C8.56 9.13 8 7.88 8 6.5V2z"
                        fill="currentColor"
                        opacity="0.7"
                      />
                      <rect x="11" y="12" width="2" height="8" fill="currentColor" opacity="0.7" />
                      <ellipse cx="12" cy="21" rx="3" ry="1" fill="currentColor" opacity="0.7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: wine.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-foreground/70 text-center mt-12 max-w-2xl"
      >
        Each flavor tells a story of innovation, crafted with precision and passion 
        to deliver an experience beyond the ordinary.
      </motion.p>
    </div>
  );
};

export default CatalogueSection;