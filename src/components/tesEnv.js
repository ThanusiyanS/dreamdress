import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import env1 from "../models/env1.hdr";

const Avatar3DT = ({ modelUrl }) => {
  const mountRef = useRef(null);
  const objectRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mountRef.current.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    new RGBELoader()
      .setDataType(THREE.UnsignedByteType)
      .load(env1, (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.background = envMap;
        scene.environment = envMap;

        texture.dispose();
        pmremGenerator.dispose();

        // Model loading
        const loader = new GLTFLoader();
        loader.load(
          modelUrl,
          (gltf) => {
            objectRef.current = gltf.scene;
            scene.add(objectRef.current);
          },
          undefined, // onProgress can be omitted
          (error) => {
            console.error("An error happened", error);
          }
        );
      });

    // Lighting (optional, depending on your scene)
    // const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(ambientLight);

    // Event handlers for dragging
    const onPointerDown = (event) => {
      setIsDragging(true);
      setLastX(event.clientX);
      setLastY(event.clientY);
    };

    const onPointerMove = (event) => {
      if (isDragging) {
        const deltaX = event.clientX - lastX;
        const deltaY = event.clientY - lastY;
        if (objectRef.current) {
          objectRef.current.rotation.y += deltaX * 0.005;
          objectRef.current.rotation.x += deltaY * 0.005;
        }
        setLastX(event.clientX);
        setLastY(event.clientY);
      }
    };

    const onPointerUp = () => {
      setIsDragging(false);
    };

    // Adding event listeners for drag functionality
    mountRef.current.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      // Ensure the element exists before trying to remove the event listener
      if (mountRef.current) {
        mountRef.current.removeEventListener("pointerdown", onPointerDown);
      }
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl]); // Make sure to add any other dependencies here if necessary

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Avatar3DT;
