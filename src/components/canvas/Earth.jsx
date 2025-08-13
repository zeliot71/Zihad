import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    if (earth.scene) {
      earth.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          const geometry = child.geometry;
          const positionAttribute = geometry.attributes.position;
          
          if (positionAttribute) {
            const array = positionAttribute.array;
            for (let i = 0; i < array.length; i++) {
              if (isNaN(array[i])) {
                array[i] = 0;
              }
            }
            positionAttribute.needsUpdate = true;
            geometry.computeBoundingBox();
            geometry.computeBoundingSphere();
          }
        }
      });
    }
  }, [earth.scene]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
