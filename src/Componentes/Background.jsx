import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Background() {
  return (
    <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
      <Stars
        radius={100} // Tamaño del universo
        depth={100} // Profundidad de campo
        count={5000} // Cantidad de estrellas
        factor={2} // Factor de tamaño
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  );
}
