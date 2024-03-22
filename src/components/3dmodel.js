import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// Include these imports if you're using environment maps or other advanced features
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import en from "../models/env1.hdr";

const Avatar3D = ({ modelUrl }) => {
  const mountRef = useRef(null);
  const objectRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, 800 / 600, 0.1, 1000);
    camera.position.z = 1.2;
    camera.position.y = 0.3;
    // camera.position.x = -0.1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.render(scene, camera);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minPolarAngle = Math.PI / 2; // 90 degrees
    controls.maxPolarAngle = Math.PI / 2;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(ambientLight);
    const directionalLight = new THREE.PointLight(0xffffff, 10);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const envMapLoader = new RGBELoader();
    envMapLoader.load(en, (texture) => {
      scene.background = texture;
    });

    // Model loading
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        objectRef.current = gltf.scene;
        scene.add(objectRef.current);
        objectRef.current.position.y = -1.3;
        objectRef.current.position.z = 0;
      },
      undefined, // onProgress can be omitted
      (error) => {
        console.error("An error happened", error);
      }
    );

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
      mountRef.current.removeEventListener("pointerdown", onPointerDown);
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

  return <div ref={mountRef} style={{ width: "100%", height: "500px" }} />;
};

export default Avatar3D;
