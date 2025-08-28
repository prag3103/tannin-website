import { motion } from 'framer-motion';
// Import local images using the '@' alias for reliable pathing
import citrineImage from '@/assets/citrine.png';
import carotaImage from '@/assets/carota.png';
import scarlettImage from '@/assets/scarlett.png';
import pinechillImage from '@/assets/pinechill.png';
import jadeiteImage from '@/assets/jadeite.png';

const CatalogueSection = () => {
  // Array of wine data
  const wines = [
    {
      name: "CITRINE",
      description:
        "The sweetest of them all. Bursting with the sun-kissed essence of ripe oranges, Citrine is the most playful and indulgent wine in our collection. Sweet, vibrant, and irresistibly smooth, it delights the palate with layers of citrusy freshness balanced by a honeyed finish. Every sip feels bright and golden — a cheerful celebration in a glass.",
      color: "#FFB830",
      gradient: "from-[#6F5D48] to-[#39322A]",
      image: citrineImage,
      titleColor: '#b53d1b',
    },
    {
      name: "CAROTA",
      description:
        "Carota captures the natural essence of carrots in a glass — a gentle sweetness layered with a soft, earthy bitterness that lingers gracefully on the palate. This delicate balance creates a refreshing and sophisticated wine, offering a truly one-of-a-kind tasting experience.",
      color: "#FF7F50",
      gradient: "from-[#6F5D48] to-[#39322A]",
      image: carotaImage,
      titleColor: '#c86810',
    },
    {
      name: "SCARLETT",
      description:
        "Nothing like you’ve ever tasted before. Bold and unconventional, Scarlet transforms the earthy richness of beetroots into a wine experience unlike any other. Its deep ruby hue mirrors its intensity — a perfect balance of subtle sweetness, gentle earthiness, and a smooth, velvety finish. Each sip surprises the palate, offering layers of flavor both familiar and entirely new.",
      color: "#8B1538",
      gradient: "from-[#6F5D48] to-[#39322A]",
      image: scarlettImage,
      titleColor: '#8b1111',
    },
    {
      name: "PINECHILL",
      description:
        "A tropical spark with a fiery twist. Juicy, golden pineapples bring a burst of tropical sweetness, while a subtle hint of chilli teases the palate with warmth. Pinechill is bright, playful, and adventurous — the perfect harmony of refreshing fruit and gentle spice. Each sip begins smooth and vibrant, finishing with a lively kick that keeps you coming back for more.",
      color: "#FF6B35",
      gradient: "from-[#6F5D48] to-[#39322A]",
      image: pinechillImage,
      titleColor: '#D1A01B',
    },
    {
      name: "JADEITE",
      description:
        "Where tart meets warmth. Handpicked gooseberries bring a crisp tang, while a gentle touch of ginger adds warmth and depth. Bright, zesty, and soothing all at once — Jadeite is a refreshing balance of contrast in every sip. Each glass lingers with a playful sharpness mellowed by spice, making it both invigorating and comforting. A wine crafted for those who savor vibrancy with a twist.",
      color: "#4A7C59",
      gradient: "from-[#6F5D48] to-[#39322A]",
      image: jadeiteImage,
      titleColor: '#6a9f27',
    },
  ];

  return (
    <div className="flex flex-col items-center pt-16 sm:pt-24 pb-12 sm:pb-16 bg-gradient-about">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-miluena-bold text-tannin-gold mb-10 sm:mb-16 text-center px-4"
      >
        OUR COLLECTION
      </motion.h2>

      {/* Main content container */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-12 sm:gap-16 px-4">
        {wines.map((wine, index) => (
          <motion.div
            key={wine.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            // Stack on mobile, alternate layout only on md+
            className={`w-full rounded-3xl shadow-elegant backdrop-blur-sm overflow-hidden 
                       flex flex-col p-6 sm:p-8 lg:p-16 relative md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            style={{
              background: `linear-gradient(to bottom right, ${wine.gradient.replace(
                'from-',
                '#'
              ).replace('to-', '#')})`,
            }}
          >
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center text-left space-y-3 sm:space-y-4 md:pr-8 lg:pr-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
                className="font-miluena-bold text-4xl sm:text-6xl lg:text-8xl break-words"
                style={{ color: wine.titleColor }}
              >
                {wine.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed"
              >
                {wine.description}
              </motion.p>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center items-center mt-6 sm:mt-8 md:mt-0">
              <motion.img
                src={wine.image}
                alt={`${wine.name} bottle`}
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 !== 0 ? 15 : -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: index % 2 !== 0 ? 15 : -15 }}
                transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 200 }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-40 sm:w-60 md:w-72 lg:w-80 h-auto object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CatalogueSection;
