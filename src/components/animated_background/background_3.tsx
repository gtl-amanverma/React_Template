"use client";

import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

const BackgroundThree = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) {return};

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 20;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8A2BE2, 1.5, 200);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x4169E1, 1.5, 200);
    pointLight2.position.set(0, 0, -10);
    scene.add(pointLight2);


    // Objects
    const shapesGroup = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.7,
        roughness: 0.3,
        transparent: true,
        opacity: 0.8,
    });

    const geometries = [
        new THREE.IcosahedronGeometry(1, 0),
        new THREE.SphereGeometry(0.8, 32, 16),
        new THREE.TorusGeometry(0.8, 0.3, 16, 100),
        new THREE.BoxGeometry(1.2, 1.2, 1.2),
    ];
    
    for(let i=0; i<50; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const shape = new THREE.Mesh(geometry, material);

        shape.position.set(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30
        );

        shape.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );

        const scale = Math.random() * 0.4 + 0.2;
        shape.scale.set(scale, scale, scale);

        shapesGroup.add(shape);
    }
    scene.add(shapesGroup);


    // Mouse movement
    const mouse = new THREE.Vector2();
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      shapesGroup.rotation.y = elapsedTime * 0.05;
      shapesGroup.rotation.x = elapsedTime * 0.05;

      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const onWindowResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      geometries.forEach(g => g.dispose());
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default BackgroundThree;
