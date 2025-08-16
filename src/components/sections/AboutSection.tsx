import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import TanninLogo3D from '../TanninLogo3D';

const AboutSection = () => {
  const infoPoints = [
    {
      title: "Break the rules",
      description: "Wine doesn't have to mean grapes. We're rewriting the definition.",
      position: { x: -300, y: -100 }
    },
    {
      title: "Flavor innovation",
      description: "A spectrum of modern, global palates crafted from fruits, roots, and botanicals.",
      position: { x: -300, y: 100 }
    },
    {
      title: "Wellness meets indulgence",
      description: "Ingredients that not only taste unique but also bring natural health benefits.",
      position: { x: 300, y: 0 }
    }
  ];

  return (
    <div className="h-screen flex items-center justify-center relative bg-gradient-about overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative w-full h-full">
        {/* Why we exist title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-16 left-8 z-10"
        >
          <h2 className="text-3xl font-miluena-bold text-tannin-gold mb-4">
            Why we exist
          </h2>
        </motion.div>

        {/* Central 3D Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <TanninLogo3D />
              <OrbitControls enableZoom={true} enablePan={false} />
            </Suspense>
          </Canvas>
        </div>

        {/* Information pointers */}
        {infoPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
            className="absolute z-20"
            style={{
              left: `calc(50% + ${point.position.x * 0.8}px)`,
              top: `calc(50% + ${point.position.y * 0.8}px)`,
            }}
          >
            <div className="bg-card/80 backdrop-blur-md rounded-xl p-4 max-w-xs border border-tannin-gold/20 shadow-elegant">
              <h3 className="text-tannin-gold font-miluena-bold text-base mb-2">
                {point.title}
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {point.description}
              </p>
              
              {/* Connecting line */}
              <svg
                className="absolute pointer-events-none"
                style={{
                  left: point.position.x > 0 ? '-160px' : '240px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '160px',
                  height: '2px'
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2={point.position.x > 0 ? '160' : '-160'}
                  y2="0"
                  stroke="rgba(209, 160, 27, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <circle
                  cx={point.position.x > 0 ? '160' : '-160'}
                  cy="0"
                  r="3"
                  fill="#D1A01B"
                />
              </svg>
            </div>
          </motion.div>
        ))}

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-16 right-8 max-w-md z-10"
        >
          <p className="text-tannin-gold/90 font-miluena text-base leading-relaxed">
            tannin is not just wine. It is a reinvention of what wine can be.
          </p>
          <p className="text-foreground/70 mt-3 text-sm leading-relaxed">
            By blending tradition with innovation, reimagining wine through unexpected ingredients 
            that celebrate flavour, wellness, and creativity.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;