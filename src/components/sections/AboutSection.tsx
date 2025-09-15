import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import TanninLogo3D from '../TanninLogo3D';

const AboutSection = () => {
  const infoPoints = [
    {
      title: "Break the rules",
      description: "Wine doesn't have to mean grapes. We're rewriting the definition. We are unchained from traditional winemaking. Our freedom allows us to create elegant, revolutionary drinks from the bounty of nature, celebrating innovation and forging a new legacy for fermented beverage",
      mobileDescription: "Wine doesn't have to mean grapes. We're rewriting the definition."
    },
    {
      title: "Flavor innovation",
      description: "A spectrum of modern, global palates crafted from fruits, roots, and botanicals. Our beverages are a symphony of global flavors. We craft a spectrum of tastes from exotic fruits, earthy roots, and botanicals to create a sophisticated and surprising journey for the modern palate.",
      mobileDescription: "A spectrum of modern, global palates crafted from fruits, roots, and botanicals."
    },
    {
      title: "Wellness meets indulgence",
      description: "Ingredients that not only taste unique but also bring natural health benefits. We believe that indulgence should never come at the expense of well-being. This principle is at the heart of our mission to merge wellness with indulgence. We carefully select our ingredients not just for their exceptional taste, but also for the natural health benefits they provide. From antioxidants in berries to the calming properties of certain herbs, each element is chosen with purpose. We are offering a product that can be enjoyed without compromise—a drink that not only delights the senses but also nourishes the body.",
      mobileDescription: "Ingredients that not only taste unique but also bring natural health benefits."
    }
  ];

  return (
    <div className="h-auto min-h-screen flex flex-col items-center justify-center relative bg-gradient-about overflow-hidden">
      <div className="w-full h-full p-6 md:p-12 lg:p-24 flex flex-col items-center justify-between">

        {/* Top Section - Why we exist */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-8 sm:mb-12 mt-8 sm:mt-12"
        >
          <h2 className="text-3xl md:text-5xl font-miluena-bold text-tannin-gold mb-4">
            Why we exist
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-6 md:gap-12 flex-grow">

          {/* Info Pointers (left/top) */}
          <div className="flex flex-col space-y-6 md:space-y-12 w-full md:w-1/3">
            {infoPoints.slice(0, 2).map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                className="bg-card/80 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-tannin-gold/20 shadow-elegant"
              >
                <h3 className="text-tannin-gold font-miluena-bold text-lg sm:text-xl mb-2">
                  {point.title}
                </h3>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed hidden md:block">
                  {point.description}
                </p>
                <p className="text-foreground/80 text-sm leading-relaxed md:hidden">
                  {point.mobileDescription}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Central 3D Logo */}
          <div className="w-full md:w-1/3 flex items-center justify-center h-full">
            <div className="w-48 h-48 sm:h-64 md:h-80 md:w-full max-w-xs sm:max-w-sm">
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
          </div>

          {/* Info Pointer (right/bottom) */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-end mt-6 md:mt-0">
            {infoPoints.slice(2, 3).map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-card/80 backdrop-blur-md rounded-xl p-4 sm:p-6 max-w-xs border border-tannin-gold/20 shadow-elegant"
              >
                <h3 className="text-tannin-gold font-miluena-bold text-lg sm:text-xl mb-2">
                  {point.title}
                </h3>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed hidden md:block">
                  {point.description}
                </p>
                <p className="text-foreground/80 text-sm leading-relaxed md:hidden">
                  {point.mobileDescription}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center md:text-right mt-8 sm:mt-12 mb-8 sm:mb-12 px-4"
        >
          <p className="text-tannin-gold/90 font-miluena text-sm sm:text-base md:text-xl leading-relaxed">
            tannin is not just wine. It is a reinvention of what wine can be.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;