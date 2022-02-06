import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// scene ==>sahne
// geometry ==> şekil
//material ==> texture,renk
//mesh ==> geometry,material

const Box = (props) => {
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  const ref = useRef();
  return (
    <mesh {...props} ref={ref} position={[0, 0, 0]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={"#fff"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <spotLight intensity={1} />
      <Box />
    </Canvas>
  );
};
export default App;
