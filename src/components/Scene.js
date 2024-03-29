import { Suspense } from "react";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

const Scene = ({ item }) => {
  return (
    <div>
      <Canvas style={{ width: "40vw", height: "500px" }}>
        <color attach="background" args={["#232323"]} />
        <fog attach="fog" args={["#232323", 10, 20]} />

        <Model item={item} />

        {/* <Environment preset="city" /> */}
      </Canvas>
    </div>
  );
};

export default Scene;
