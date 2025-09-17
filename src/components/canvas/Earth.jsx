import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = React.memo(() => {
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    if (earth.scene) {
      earth.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          const geometry = child.geometry;
          
          // Quick NaN fix for critical attributes only
          ['position', 'normal'].forEach(attrName => {
            const attr = geometry.attributes[attrName];
            if (attr?.array) {
              const arr = attr.array;
              for (let i = 0; i < arr.length; i++) {
                if (isNaN(arr[i])) arr[i] = 0;
              }
            }
          });
          
          // Only recompute if needed
          if (!geometry.boundingSphere) geometry.computeBoundingSphere();
        }
      });
    }
  }, [earth.scene]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
});

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: false,
        powerPreference: "high-performance"
      }}
      performance={{ min: 0.5 }}
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
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={false}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
