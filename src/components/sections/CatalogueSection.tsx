import React, { Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Group } from "three";

// Images
import citrineImage from "@/assets/citrineP.png";
import carotaImage from "@/assets/carotaP.png";
import scarlettImage from "@/assets/scarlettP.png";
import pinechillImage from "@/assets/pinechillP.png";
import jadeiteImage from "@/assets/jadeiteP.png";

// 3D models
import PineChillModel from "@/assets/3d/PineChill";
import ScarlettModel from "@/assets/3d/Scarlett";
import CarotaModel from "@/assets/3d/Carota";
import CitrineModel from "@/assets/3d/Citrine";
import JadeiteModel from "@/assets/3d/Jadeite";

type Pointer = { x: number; y: number };

// Reusable rotating wrapper
function RotatingModel({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group | null>(null);
  const rotationSpeed = (2 * Math.PI) / 80;

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed * delta;
    }
  });

  return (
    <group ref={ref} dispose={null}>
      {children}
    </group>
  );
}

const CatalogueSection: React.FC = () => {
  const [pointer, setPointer] = useState<Pointer>({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = (0.5 - (e.clientY - rect.top) / rect.height) * 2;
    setPointer({ x: nx * 0.18, y: ny * 0.18 });
  };

  const handlePointerLeave = () => setPointer({ x: 0, y: 0 });

  // Card renderer for 3D-based wines
  const renderWineCard = (
    name: string,
    Model: React.FC,
    bottle: string,
    titleColor: string,
    borderColor: string,
    textColor: string,
    labels: string[],
    mobileLabels: string[],
    labelTop: string,
    labelLeft: string,
    titleTop: string,
    titleRight: string,
    mobileStyles: {
      modelContainer?: string;
      bottleImage?: string;
      title?: string;
      label?: string;
      mainContainer?: string;
      elementStyles?: {
        model?: React.CSSProperties;
        bottle?: React.CSSProperties;
        title?: React.CSSProperties;
        label?: React.CSSProperties;
      };
    } = {}
  ) => (
    <motion.div
      key={name}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`mt-6 w-full rounded-1xl shadow-elegant backdrop-blur-sm overflow-hidden flex flex-col items-center p-6 sm:p-8 lg:p-12 relative ${mobileStyles.mainContainer || ''}`}
      style={{ backgroundColor: "#0f010c" }}
    >
      <div
        className="w-full text-right mb-6 pr-40 pt-4 absolute hidden md:block"
        style={{ top: titleTop, right: titleRight }}
      >
        <h3
          className="font-miluena-bold text-3xl sm:text-5xl lg:text-7xl"
          style={{ color: titleColor }}
        >
          {name}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full">
        {/* Mobile-only layout with the 3D model and bottle side-by-side */}
        <div className="md:hidden relative w-full h-80 flex items-center justify-center">
          {/* Mobile Title & Label */}
          <div className="absolute top-10 w-full text-center" style={mobileStyles.elementStyles?.title}>
            <h3 className={`font-miluena-bold text-3xl ${mobileStyles.title || ''}`} style={{ color: titleColor }}>
              {name}
            </h3>
            <p className={`text-sm font-miluena text-center px-4 mt-2 ${mobileStyles.label || ''}`} style={{ color: textColor }}>
              {mobileLabels[0]}
            </p>
          </div>
          
          {/* 3D Model Container (Mobile) */}
          <div className={`absolute w-[120px] h-[200px] ${mobileStyles.modelContainer || ''}`} style={mobileStyles.elementStyles?.model}>
            <Canvas camera={{ position: [300, 0, 400], fov: 35 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[-10, 10, 10]} intensity={1.0} />
              <Suspense fallback={null}>
                <group scale={6.5} position={[45, -190, 45]}>
                  <RotatingModel>
                    <Model />
                  </RotatingModel>
                </group>
              </Suspense>
              <OrbitControls enableZoom={false} enablePan={false} target={[45, -70, 45]} />
            </Canvas>
          </div>
          
          {/* Bottle Image (Mobile) */}
          <motion.img
            src={bottle}
            alt={`${name} bottle`}
            className={`absolute w-[120px] h-auto object-contain brightness-75 contrast-125 saturate-90 ${mobileStyles.bottleImage || ''}`}
            style={mobileStyles.elementStyles?.bottle}
          />
        </div>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden md:flex flex-1 flex-row justify-center items-center gap-12 w-full">
          {/* 3D Model (Desktop) */}
          <div
            className="flex-1 flex justify-center items-center"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <div className="relative w-[320px] h-[450px] sm:w-[380px] sm:h-[520px] md:w-[460px] md:h-[600px]">
              <Canvas camera={{ position: [300, 0, 400], fov: 35 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[-10, 10, 10]} intensity={1.0} />
                <Suspense fallback={null}>
                  <group scale={9.0} position={[45, -190, 45]}>
                    <RotatingModel>
                      <Model />
                    </RotatingModel>
                  </group>
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} target={[45, -70, 45]} />
              </Canvas>
            </div>
          </div>
          {/* Bottle Image (Desktop) */}
          <div className="flex-1 flex justify-center items-center">
            <motion.img
              src={bottle}
              alt={`${name} bottle`}
              initial={{ opacity: 0, y: -29, x: -800 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-56 sm:w-72 md:w-80 lg:w-96 h-auto object-contain brightness-75 contrast-125 saturate-90"
            />
          </div>
        </div>
      </div>

      {/* Floating Labels */}
      <div
        className="absolute transform -translate-y-1/2 w-full max-w-lg lg:max-w-xl space-y-12 hidden md:block"
        style={{ top: labelTop, left: labelLeft }}
      >
        {labels.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative w-72 p-3 rounded-md bg-transparent border ${borderColor} ${textColor} text-base before:content-[''] before:absolute before:left-[-70px] before:top-1/2 before:-translate-y-1/2 before:w-[60px] before:h-[2px] before:${borderColor}`}
          >
            <p>{text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

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

      <div className="w-full max-w-7xl flex flex-col items-center gap-12 sm:gap-16 px-4">
        {/* Citrine */}
        {renderWineCard(
          "CITRINE",
          CitrineModel,
          citrineImage,
          "#ffa366",
          "border-[#ffa366]",
          "border-[#ffa366]",
          [
            "The sweetest of them all.",
            "A vibrant citrusy wine with playful notes.Citrine is the most playful and indulgent wine in our collection. Sweet, vibrant, and irresistibly smooth,",
            "Perfect for bright, sunny days.it delights the palate with layers of citrusy freshness balanced by a honeyed finish. Every sip feels bright and golden — a cheerful celebration in a glass"
          ],
          ["A vibrant, citrusy and playful wine."],
          "55%",
          "56%",
          "30px",
          "90px",
          {
            elementStyles: {
              model: {
                width: '120px',
                height: '300px',
                top: '30px',
                left: '95px',
              },
              bottle: {
                width: '130px',
                height: 'auto',
                top: '130px',
                right: '100px',
              },
              title: {
                top: '20px',
                fontSize: '2rem',
              },
              label: {
                top: '10px',
                fontSize: '1rem',
              },
            }
          }
        )}

        {/* Carota */}
        {renderWineCard(
          "CAROTA",
          CarotaModel,
          carotaImage,
          "#c86810",
          "border-orange-500",
          "text-orange-300",
          [
            "Carota captures the natural essence of carrots.",
            "Smooth, earthy, and refreshing.— a gentle sweetness layered with a soft, earthy bitterness that lingers gracefully on the palate. ",
            "A taste as unique as its origin.This delicate balance creates a refreshing and sophisticated wine, offering a truly one-of-a-kind tasting experience."
          ],
          ["An earthy and unique taste of carrots."],
          "55%",
          "55%",
          "20px",
          "95px",
          {
            elementStyles: {
              model: {
                width: '120px',
                height: '300px',
                top: '30px',
                left: '95px',
              },
              bottle: {
                width: '140px',
                height: 'auto',
                top: '130px',
                right: '100px',
              },
              title: {
                top: '20px',
                fontSize: '2rem',
              },
              label: {
                top: '80px',
                fontSize: '1rem',
              },
            }
          }
        )}

        {/* Scarlett */}
        {renderWineCard(
          "SCARLETT",
          ScarlettModel,
          scarlettImage,
          "#ff6666",
          "border-[#ff6666]",
          "text-[#ff6666]",
          [
            "Nothing like you’ve ever tasted before.",
            "Bold and unconventional, crafted from beetroots.Scarlet transforms the earthy richness of beetroots into a wine experience unlike any other.",
            "A perfect balance of sweetness, earthiness, and velvety finish.Its deep ruby hue mirrors its intensity — a perfect balance of subtle sweetness, gentle earthiness, and a smooth, velvety finish. Each sip surprises the palate."
          ],
          ["Bold and unconventional, crafted from beetroots."],
          "55%",
          "55%",
          "20px",
          "50px",
          {
            elementStyles: {
              model: {
                width: '120px',
                height: '300px',
                top: '30px',
                left: '95px',
              },
              bottle: {
                width: '130px',
                height: 'auto',
                top: '130px',
                right: '100px',
              },
              title: {
                top: '20px',
                fontSize: '2rem',
              },
              label: {
                top: '80px',
                fontSize: '1rem',
              },
            }
          }
        )}

        {/* Pinechill */}
        {renderWineCard(
          "PINECHILL",
          PineChillModel,
          pinechillImage,
          "#cca300",
          "border-pinechill-yellow",
          "text-yellow-400",
          [
            "A tropical spark with a fiery twist.",
            "Sweet pineapple meets subtle chilli heat.while a subtle hint of chilli teases the palate with warmth. Pinechill is bright, playful, and adventurous — the perfect harmony of refreshing fruit and gentle spice. ",
            "Refreshing fruit with a lively kick.Each sip begins smooth and vibrant, finishing with a lively kick that keeps you coming back for mor"
          ],
          ["A tropical spark with a fiery twist."],
          "55%",
          "55%",
          "20px",
          "40px",
          {
            elementStyles: {
              model: {
                width: '120px',
                height: '300px',
                top: '30px',
                left: '95px',
              },
              bottle: {
                width: '140px',
                height: 'auto',
                top: '130px',
                right: '100px',
              },
              title: {
                top: '20px',
                fontSize: '2rem',
              },
              label: {
                top: '80px',
                fontSize: '1rem',
              },
            }
          }
        )}

        {/* Jadeite */}
        {renderWineCard(
          "JADEITE",
          JadeiteModel,
          jadeiteImage,
          "#9fff80",
          "border-[#9fff80]",
          "text-[#9fff80]",
          [
            "Where tart meets warmth.",
            "Handpicked gooseberries bring a crisp tang, while a gentle touch of ginger adds warmth and depth. Bright, zesty, and soothing all at once.",
            "A unique blend that soothes and excites.Each glass lingers with a playful sharpness mellowed by spice, making it both invigorating and comforting. A wine crafted for those who savor vibrancy with a twist"
          ],
          ["Where tart gooseberry meets warm ginger."],
          "55%",
          "55%",
          "30px",
          "100px",
          {
            elementStyles: {
              model: {
                width: '120px',
                height: '300px',
                top: '30px',
                left: '95px',
              },
              bottle: {
                width: '120px',
                height: 'auto',
                top: '130px',
                right: '100px',
              },
              title: {
                top: '20px',
                fontSize: '2rem',
              },
              label: {
                top: '80px',
                fontSize: '1rem',
              },
            }
          }
        )}
      </div>
    </div>
  );
};

export default CatalogueSection;