import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const TanninLogo3D = () => {
  const meshRef = useRef<Group>(null);

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
      {/* Hexagonal base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.3, 6]} />
        <meshStandardMaterial 
          color="#D1A01B" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>

      {/* Wine glass shape */}
      <group position={[0, 0, 0.2]}>
        {/* Bowl */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.8, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.7]} />
          <meshStandardMaterial 
            color="#26084F" 
            transparent 
            opacity={0.9}
            metalness={0.3}
            roughness={0.1}
          />
        </mesh>

        {/* Stem */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial 
            color="#26084F" 
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* Base */}
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.1]} />
          <meshStandardMaterial 
            color="#26084F" 
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Glow effect */}
      <pointLight 
        position={[0, 0, 2]} 
        color="#D1A01B" 
        intensity={0.5} 
        distance={5}
      />
    </group>
  );
};

export default TanninLogo3D;