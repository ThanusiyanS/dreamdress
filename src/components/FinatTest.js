import * as THREE from "three";
import React, { useEffect, useRef } from "react";

//scene

const TesEnv = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(3, 64, 64);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff83 });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const camera = new THREE.PerspectiveCamera(45, 800 / 600);
    camera.position.z = 20;
    scene.add(camera);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(800, 600);
    renderer.render(scene, camera);
    mountRef.current.appendChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} style={{ width: "500px", height: "500px" }} />;
};

export default TesEnv;
