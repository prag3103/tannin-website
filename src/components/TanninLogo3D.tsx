import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const TanninLogo3D = () => {
  const meshRef = useRef<Group>(null);

  // A light, slow oscillation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group
      ref={meshRef}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default';
      }}
    >
      {/* Hexagonal prism */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.5, 6]} />
        <meshStandardMaterial
          color="#D1A01B"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Wine glass cut-out (using negative space) */}
      <group position={[0, -0.4, 0.25]}>
        {/* Sphere for the bowl */}
        <mesh>
          <sphereGeometry args={[1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#26084F"
            transparent
            opacity={0.8}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Stem of the wine glass */}
        <mesh position={[0, -0.7, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1.4]} />
          <meshStandardMaterial
            color="#26084F"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Base of the wine glass */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.1]} />
          <meshStandardMaterial
            color="#26084F"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Glow effect - increased intensity */}
      <pointLight 
        position={[0, 0, 2]} 
        color="#D1A01B" 
        intensity={2} 
        distance={5}
      />
      {/* Additional ambient light for overall brightness */}
      <ambientLight intensity={0.5} />
    </group>
  );
};

export default TanninLogo3D;
