
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Float } from '@react-three/drei';
import * as THREE from 'three';

// Error Boundary for 3D Canvas
class Canvas3DErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log('3D Canvas Error:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const FloatingSphere = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[scale, 32, 32]}>
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </Sphere>
    </Float>
  );
};

const AnimatedCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Box ref={meshRef} position={position} args={[1.5, 1.5, 1.5]}>
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </Box>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />

      {/* 3D Objects */}
      <FloatingSphere position={[-4, 2, -2]} color="#8b5cf6" scale={1.2} />
      <FloatingSphere position={[4, -1, -3]} color="#06b6d4" scale={0.8} />
      <FloatingSphere position={[2, 3, -4]} color="#ec4899" scale={0.6} />
      <FloatingSphere position={[-2, -2, -1]} color="#10b981" scale={0.4} />
      
      <AnimatedCube position={[0, 0, -5]} />

      {/* Orbit Controls for subtle movement */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

// Fallback component for when WebGL fails
const Hero3DFallback = () => {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8 opacity-30">
        <div className="w-16 h-16 bg-primary/40 rounded-full blur-xl animate-pulse"></div>
        <div className="w-12 h-12 bg-accent/40 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="w-14 h-14 bg-accent/50 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="w-18 h-18 bg-primary/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="w-10 h-10 bg-accent/35 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
    </div>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas3DErrorBoundary fallback={<Hero3DFallback />}>
        <Suspense fallback={<Hero3DFallback />}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 75 }}
            style={{ background: 'transparent' }}
            gl={{ 
              antialias: false, 
              alpha: true, 
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: false 
            }}
          >
            <Scene3D />
          </Canvas>
        </Suspense>
      </Canvas3DErrorBoundary>
    </div>
  );
};

export default Hero3D;
