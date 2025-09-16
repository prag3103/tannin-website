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

// ✅ Adjustable params for mobile (<700px only)
const mobileConfig = {
  modelWidth: 130, // px
  modelHeight: 250, // px
  modelScale: 6.5, // 3D scale
  modelPosition: [100, -140, 100] as [number, number, number],
  bottleWidth: 150, // px
  gap: 6, // Tailwind gap-x-[value] -> here it's "gap-6"
};

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

type MobileCardProps = {
  name: string;
  Model: React.FC;
  bottle: string;
  titleColor: string;
  textColor: string;
  mobileLabels: string[];
};

const MobileCard: React.FC<MobileCardProps> = ({
  name,
  Model,
  bottle,
  titleColor,
  textColor,
  mobileLabels,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.5 }}
    className="flex-shrink-0 w-full snap-center rounded-xl shadow-elegant backdrop-blur-sm overflow-hidden p-6 relative flex flex-col items-center"
    style={{ backgroundColor: "#0f010c" }}
  >
    <div className="w-full text-center mb-6">
      <h3 className="font-miluena-bold text-3xl" style={{ color: titleColor }}>
        {name}
      </h3>
    </div>

    {/* ✅ Mobile only: side by side, fully configurable */}
    <div
      className="flex flex-row items-center justify-center w-full"
      style={{ gap: `${mobileConfig.gap * 0.25}rem` }} // tailwind gap-6 = 1.5rem
    >
      {/* 3D Model */}
      <div
        style={{
          width: `${mobileConfig.modelWidth}px`,
          height: `${mobileConfig.modelHeight}px`,
        }}
        className="flex items-center justify-center"
      >
        <Canvas camera={{ position: [300, 0, 400], fov: 35 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[-10, 10, 10]} intensity={1.0} />
          <Suspense fallback={null}>
            <group
              scale={mobileConfig.modelScale}
              position={mobileConfig.modelPosition}
            >
              <RotatingModel>
                <Model />
              </RotatingModel>
            </group>
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            target={[45, -70, 45]}
          />
        </Canvas>
      </div>

      {/* Bottle Image */}
      <img
        src={bottle}
        alt={`${name} bottle`}
        style={{ width: `${mobileConfig.bottleWidth}px` }}
        className="h-auto object-contain brightness-75 contrast-125 saturate-90"
      />
    </div>

    {/* Labels */}
    <div className="mt-4 text-center w-full">
      <p className={`text-xl font-miluena text-center mx-auto ${textColor}`}>
        {mobileLabels[0]}
      </p>
    </div>
  </motion.div>
);

const CatalogueSection: React.FC = () => {
  const [pointer, setPointer] = useState<Pointer>({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = (0.5 - (e.clientY - rect.top) / rect.height) * 2;
    setPointer({ x: nx * 0.18, y: ny * 0.18 });
  };

  const handlePointerLeave = () => setPointer({ x: 0, y: 0 });

  // Desktop Card renderer (unchanged)
  const renderWineCard = (
    name: string,
    Model: React.FC,
    bottle: string,
    titleColor: string,
    borderColor: string,
    textColor: string,
    labels: string[],
    labelTop: string,
    labelLeft: string,
    titleTop: string,
    titleRight: string
  ) => (
    <motion.div
      key={name}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      className="mt-6 w-full rounded-xl shadow-elegant backdrop-blur-sm overflow-hidden flex flex-col items-center p-6 sm:p-8 lg:p-12 relative"
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
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  target={[45, -70, 45]}
                />
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
            className={`relative w-72 p-3 rounded-md bg-transparent border ${borderColor} ${textColor} text-base before:content-[''] before:absolute before:left-[-70px] before:top-1/2 before:-translate-y-1/2 before:w-[60px] before:h-[2px]`}
            style={{
              borderColor: borderColor.replace("border-", ""),
              color: textColor.replace("text-", ""),
            }}
          >
            <p>{text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col items-center pt-16 sm:pt-24 bg-gradient-about pb-12 sm:pb-16 md:pb-24">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-miluena-bold text-tannin-gold mb-10 sm:mb-16 text-center px-4"
      >
        OUR COLLECTION
      </motion.h2>

      {/* Desktop */}
      <div className="hidden md:flex w-full max-w-7xl flex-col items-center gap-12 sm:gap-16 px-4">
        {/* Citrine */}
        {renderWineCard(
          "CITRINE",
          CitrineModel,
          citrineImage,
          "#ffa366",
          "border-[#ffa366]",
          "text-[#ffa366]",
          [
            "The sweetest of them all.",
            "A vibrant citrusy wine with playful notes. Citrine is the most playful and indulgent wine in our collection.",
            "Perfect for bright, sunny days. It delights the palate with layers of citrusy freshness balanced by a honeyed finish.",
          ],
          "55%",
          "56%",
          "30px",
          "90px"
        )}

        {/* Carota */}
        {renderWineCard(
          "CAROTA",
          CarotaModel,
          carotaImage,
          "#c86810",
          "border-[#c86810]",
          "text-[#c86810]",
          [
            "Carota captures the natural essence of carrots.",
            "Smooth, earthy, and refreshing — a gentle sweetness layered with a soft, earthy bitterness.",
            "A taste as unique as its origin. A refreshing and sophisticated wine.",
          ],
          "55%",
          "55%",
          "20px",
          "95px"
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
            "Bold and unconventional, crafted from beetroots.",
            "A perfect balance of sweetness, earthiness, and a velvety finish.",
          ],
          "55%",
          "55%",
          "20px",
          "50px"
        )}

        {/* Pinechill */}
        {renderWineCard(
          "PINECHILL",
          PineChillModel,
          pinechillImage,
          "#cca300",
          "border-[#cca300]",
          "text-[#cca300]",
          [
            "A tropical spark with a fiery twist.",
            "Sweet pineapple meets subtle chilli heat.",
            "Refreshing fruit with a lively kick.",
          ],
          "55%",
          "55%",
          "20px",
          "40px"
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
            "Gooseberries bring a crisp tang, ginger adds warmth.",
            "A unique blend that soothes and excites.",
          ],
          "55%",
          "55%",
          "20px",
          "100px"
        )}
      </div>

      {/* Mobile */}
      <div className="block md:hidden w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-p-4 sm:scroll-p-6 pb-12">
        <div className="flex flex-row space-x-4 px-4 sm:px-6">
          <MobileCard
            key="citrine-mobile"
            name="CITRINE"
            Model={CitrineModel}
            bottle={citrineImage}
            titleColor="#ffa366"
            textColor="text-[#ffa366]"
            mobileLabels={["A vibrant, citrusy and playful wine."]}
          />
          <MobileCard
            key="carota-mobile"
            name="CAROTA"
            Model={CarotaModel}
            bottle={carotaImage}
            titleColor="#c86810"
            textColor="text-orange-300"
            mobileLabels={["An earthy and unique taste of carrots."]}
          />
          <MobileCard
            key="scarlett-mobile"
            name="SCARLETT"
            Model={ScarlettModel}
            bottle={scarlettImage}
            titleColor="#ff6666"
            textColor="text-[#ff6666]"
            mobileLabels={["Bold and unconventional, crafted from beetroots."]}
          />
          <MobileCard
            key="pinechill-mobile"
            name="PINECHILL"
            Model={PineChillModel}
            bottle={pinechillImage}
            titleColor="#cca300"
            textColor="text-yellow-400"
            mobileLabels={["A tropical spark with a fiery twist."]}
          />
          <MobileCard
            key="jadeite-mobile"
            name="JADEITE"
            Model={JadeiteModel}
            bottle={jadeiteImage}
            titleColor="#9fff80"
            textColor="text-[#9fff80]"
            mobileLabels={["Where tart gooseberry meets warm ginger."]}
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogueSection;