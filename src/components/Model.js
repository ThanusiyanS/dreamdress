import React, { useEffect, useState } from "react";
import * as THREE from "three";

import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import model1 from "../models/finalGirlModel.glb";
import model1 from "../models/variant1.glb";
import model2 from "../models/variant2.glb";
import model3 from "../models/variant3.glb";
import model4 from "../models/variant4.glb";
import model5 from "../models/variant5.glb";
import model6 from "../models/variant6.glb";
import model7 from "../models/variant7.glb";

const data = {
  P1: model2,
  P2: model1,
  P3: model2,
  S1: model3,
  S2: model4,
  S3: model5,
  B1: model6,
  B2: model7,
  B3: model6,
};

const Model = ({ item }) => {
  const [value, setValue] = useState("P1");
  useEffect(() => {
    if (item !== "") {
      setValue(item);
    }
  }, [item]);
  console.log(value);

  const gltf = useLoader(GLTFLoader, data[value]);
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={1}
      position={[0, 1, 0]}
      polar={[0.5, Math.PI / 4]}
    >
      <Stage
        environment={"city"}
        intensity={0.6}
        adjustCamera={1}
        position={[-10, 0, -10]}
        castShadow={false}
      >
        <mesh position={[0, -1.2, 0]}>
          <primitive object={gltf.scene} />
        </mesh>
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}
      </Stage>
      <mesh position={[0, -1.2, 1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Model;
