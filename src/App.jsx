import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Cat from "./components/Cat";
const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <spotLight intensity={0.5} />
      <Suspense fallback={null}>
        <Cat />
      </Suspense>
    </Canvas>
  );
};
export default App;
