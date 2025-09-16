// src/components/sections/ExperienceSection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const ExperienceSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-center bg-gradient-hero px-6 md:h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-miluena-bold mb-8"
          style={{ color: ' #997a00' }}
        >
          EXPERIENCE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto"
        >
          Discover the artistry behind tannin through our immersive journey
        </motion.p>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-elegant bg-gradient-to-br from-tannin-beetroot to-tannin-dark-purple"
        >
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="w-20 h-20 rounded-full bg-tannin-gold/20 backdrop-blur-md border border-tannin-gold/30 flex items-center justify-center transition-all duration-300 group-hover:bg-tannin-gold/30 group-hover:scale-110">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-tannin-gold ml-1"
                >
                  <path
                    d="M8 5v14l11-7z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-tannin-gold/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </div>

          {/* Video overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Video description */}
          <div className="absolute bottom-6 left-6 right-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h3 className="text-white font-miluena-bold text-xl mb-2">
                The Making of Tannin
              </h3>
              <p className="text-white/80 text-sm">
                From concept to bottle: witness the innovation behind every flavor
              </p>
            </motion.div>
          </div>

          {/* Video transition space indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute top-4 right-4 bg-tannin-gold/20 backdrop-blur-md px-3 py-1 rounded-full border border-tannin-gold/30"
          >
            <span className="text-tannin-gold text-xs font-medium">365 📅 17</span>
          </motion.div>
        </motion.div>

        {/* Experience highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          style={{ color: ' #997a00' }}
        >
          {[
            {
              title: "Innovation",
              description: "Pushing boundaries of traditional winemaking",
              icon: "✨"
            },
            {
              title: "Craftsmanship",
              description: "Artisanal approach to every bottle",
              icon: "🎨"
            },
            {
              title: "Sustainability",
              description: "Eco-conscious practices from farm to table",
              icon: "🌱"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className={`font-miluena-bold text-lg mb-2 ${item.title === 'Sustainability' ? 'text-[#cca300]' : 'text-tannin-gold'}`}>
                {item.title}
              </h4>
              <p className="text-foreground/70 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;