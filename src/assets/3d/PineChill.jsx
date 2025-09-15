// src/assets/3d/PineChill.jsx
import React from "react";
import { useGLTF } from "@react-three/drei";
import modelUrl from "@/assets/3d/pinechill.glb";

const PineChillModel = () => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} dispose={null} />;
};

export default PineChillModel;
