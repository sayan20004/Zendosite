import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ZBoltShape() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  // Create an extruded "Z" / bolt shape
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    
    // Z/Bolt shape path — stylized lightning bolt
    shape.moveTo(-1.2, 2.0);
    shape.lineTo(1.2, 2.0);
    shape.lineTo(-0.3, 0.3);
    shape.lineTo(1.2, 0.3);
    shape.lineTo(-0.2, -2.0);
    shape.lineTo(0.5, -0.3);
    shape.lineTo(-1.2, -0.3);
    shape.closePath();

    const extrudeSettings = {
      steps: 2,
      depth: 1.0,
      bevelEnabled: true,
      bevelThickness: 0.3,
      bevelSize: 0.2,
      bevelOffset: 0,
      bevelSegments: 12,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={0.8}
    >
      <mesh
        ref={meshRef}
        geometry={geometry}
        position={[0, 0, -0.5]}
        scale={1.1}
        castShadow
        receiveShadow
      >
        <MeshDistortMaterial
          color="#D4920A"
          roughness={0.15}
          metalness={0.8}
          distort={0.08}
          speed={2}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

export function ZendoLogo3D({ className }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 3, 2]} intensity={0.5} color="#FFD60A" />
        <pointLight position={[0, -3, 3]} intensity={0.4} color="#FF9966" />
        <Environment preset="studio" />
        <ZBoltShape />
      </Canvas>
    </div>
  );
}
