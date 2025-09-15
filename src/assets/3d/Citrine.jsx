import React from "react";
import { useGLTF } from "@react-three/drei";
import modelUrl from "@/assets/3d/citrine.glb";
const   CitrineModel = () => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} dispose={null} />;
};

export default CitrineModel;
