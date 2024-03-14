import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function Model() {
  const gltf = useLoader(GLTFLoader, "/soda_can.glb");
  return <primitive object={gltf.scene} />;
}

export default function Home() {
  return (
    <main>
      <Canvas
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ambientLight intensity={0} />
        <pointLight position={[10000, 2000, 1200]} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </main>
  );
}
