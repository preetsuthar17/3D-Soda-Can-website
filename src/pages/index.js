import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

function Model() {
  const gltf = useLoader(GLTFLoader, "/soda_can.glb");
  const mesh = useRef();
  gltf.scene.scale.set(0.4, 0.4, 0.4);
  gltf.scene.castShadow = true;

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.getElapsedTime() * 0.1;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.1;
  });

  return (
    <>
      <primitive ref={mesh} object={gltf.scene} />;
      <OrbitControls enableZoom={false} />
    </>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Canvas
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) ",
          background: "#121212",
        }}
      >
        <ambientLight intensity={0} />
        <pointLight position={[10000, 2000, 1200]} />

        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
      <Hero />
    </main>
  );
}
