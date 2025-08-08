import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Environment, Grid } from '@react-three/drei';
import { motion } from 'framer-motion';

// 占位模型组件（用于展示PLC外观）
function PLCPlaceholderModel() {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  // 自动旋转动画
  useFrame((state, delta) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={[1.2, 1.2, 1.2]}
    >
      {/* 主体框架 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 0.8]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* PLC模块 */}
      <mesh position={[-0.8, 0.3, 0.5]}>
        <boxGeometry args={[0.6, 0.8, 0.3]} />
        <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* 电源模块 */}
      <mesh position={[0, 0.3, 0.5]}>
        <boxGeometry args={[0.5, 0.7, 0.25]} />
        <meshStandardMaterial color="#16a34a" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* I/O模块 */}
      <mesh position={[0.8, 0.3, 0.5]}>
        <boxGeometry args={[0.6, 0.8, 0.3]} />
        <meshStandardMaterial color="#dc2626" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* DIN导轨 */}
      <mesh position={[0, -0.3, 0.3]}>
        <boxGeometry args={[2.8, 0.1, 0.2]} />
        <meshStandardMaterial color="#525252" metalness={0.95} roughness={0.05} />
      </mesh>
      
      {/* 显示屏 */}
      <mesh position={[0, -0.6, 0.45]}>
        <boxGeometry args={[1.2, 0.4, 0.05]} />
        <meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* LED指示灯 */}
      {[-0.3, -0.1, 0.1, 0.3].map((x, i) => (
        <mesh key={i} position={[x, 0.6, 0.5]}>
          <cylinderGeometry args={[0.03, 0.03, 0.1]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#22c55e" : "#f59e0b"} 
            emissive={i % 2 === 0 ? "#22c55e" : "#f59e0b"}
            emissiveIntensity={hovered ? 1 : 0.5}
          />
        </mesh>
      ))}
      
      {/* 接线端子 */}
      {[-1.2, -0.8, -0.4, 0, 0.4, 0.8, 1.2].map((x, i) => (
        <mesh key={i} position={[x, -0.85, 0.4]}>
          <boxGeometry args={[0.08, 0.15, 0.15]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

interface ModelViewer3DProps {
  className?: string;
  showControls?: boolean;
  autoRotate?: boolean;
}

const ModelViewer3D: React.FC<ModelViewer3DProps> = ({ 
  className = "",
  showControls = true,
  autoRotate = true
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div 
      className={`relative w-full h-[400px] bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 rounded-xl overflow-hidden shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 3D画布 */}
      <Canvas
        camera={{ position: [5, 3, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setIsLoading(false)}
      >
        {/* 环境光照 */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
        
        {/* 网格背景 */}
        <Grid 
          args={[10, 10]} 
          cellSize={0.5}
          cellThickness={0.5}
          cellColor="#1e40af"
          sectionSize={2}
          sectionThickness={1}
          sectionColor="#3b82f6"
          fadeDistance={10}
          fadeStrength={1}
          followCamera={false}
          infiniteGrid={true}
        />
        
        {/* 3D模型 */}
        <Suspense fallback={null}>
          <Center>
            <PLCPlaceholderModel />
          </Center>
        </Suspense>
        
        {/* 控制器 */}
        {showControls && (
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={autoRotate}
            autoRotateSpeed={1}
            minDistance={3}
            maxDistance={10}
          />
        )}
        
        {/* 环境贴图 */}
        <Environment preset="city" />
      </Canvas>
      
      {/* 加载指示器 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white text-lg">加载3D模型中...</div>
        </div>
      )}
      
      
      {/* 控制提示 */}
      {showControls && (
        <div className="absolute bottom-4 left-4 text-white/70 text-xs">
          <p>🖱️ 左键拖动旋转 | 滚轮缩放 | 右键平移</p>
        </div>
      )}
      
      {/* 标题 */}
      <div className="absolute top-4 left-4 text-white">
        <h4 className="text-lg font-semibold">西门子 S7-1200 PLC 实训台</h4>
        <p className="text-sm text-white/70">3D交互模型</p>
      </div>
    </motion.div>
  );
};

export default ModelViewer3D;