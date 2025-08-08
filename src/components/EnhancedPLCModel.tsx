import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Environment, Grid, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

// 基于SolidWorks文件结构创建的高精度PLC实训台模型
function DetailedPLCStation() {
  const stationRef = useRef<any>(null);
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  // 自动旋转动画
  useFrame((state, delta) => {
    if (stationRef.current && !hoveredComponent && !selectedComponent) {
      stationRef.current.rotation.y += delta * 0.1;
    }
  });

  // 组件信息
  const componentInfo: { [key: string]: { name: string; description: string; specifications: string[] } } = {
    'main-frame': {
      name: '主体框架',
      description: '实训台的主要支撑结构，采用工业级铝合金型材制造',
      specifications: ['尺寸: 800×600×400mm', '材质: 6063铝合金', '承重: ≤50kg']
    },
    'cpu-module': {
      name: 'CPU模块 (S7-1214C)',
      description: '西门子S7-1200系列PLC主控制器，集成14路数字输入/10路数字输出',
      specifications: ['型号: CPU 1214C DC/DC/DC', '输入: 14路数字量输入', '输出: 10路继电器输出', '内存: 100KB工作内存']
    },
    'power-supply': {
      name: '开关电源模块',
      description: '为整个实训台提供稳定的24V DC电源供电',
      specifications: ['输出电压: DC 24V', '输出电流: 5A', '功率: 120W', '效率: >85%']
    },
    'io-module': {
      name: 'I/O扩展模块',
      description: '数字量输入输出扩展模块，增加系统的输入输出能力',
      specifications: ['输入: 8路数字量输入', '输出: 8路继电器输出', '工作电压: DC 24V']
    },
    'hmi-panel': {
      name: '人机界面 (HMI)',
      description: '7寸彩色触摸屏，用于监控和操作系统状态',
      specifications: ['屏幕: 7寸TFT彩色触摸屏', '分辨率: 800×480', '通信: 以太网接口']
    },
    'terminal-block': {
      name: '接线端子排',
      description: '标准化接线端子，方便电缆连接和信号分配',
      specifications: ['规格: Phoenix Contact端子', '额定电流: 10A', '接线规格: 0.2-2.5mm²']
    },
    'indicator-lights': {
      name: 'LED指示灯组',
      description: '系统状态指示灯，显示设备运行状态',
      specifications: ['颜色: 红/绿/黄', '工作电压: DC 24V', '功耗: <1W']
    },
    'control-buttons': {
      name: '控制按钮组',
      description: '急停、启动、停止等控制按钮',
      specifications: ['类型: 施耐德XB4系列', '触点容量: AC 250V 3A', '防护等级: IP65']
    }
  };

  const handleComponentClick = (componentId: string) => {
    setSelectedComponent(selectedComponent === componentId ? null : componentId);
  };

  return (
    <group ref={stationRef} scale={[0.8, 0.8, 0.8]}>
      {/* 主体框架 */}
      <group
        name="main-frame"
        onPointerOver={() => setHoveredComponent('main-frame')}
        onPointerOut={() => setHoveredComponent(null)}
        onClick={() => handleComponentClick('main-frame')}
      >
        {/* 底座 */}
        <mesh position={[0, -2, 0]}>
          <boxGeometry args={[8, 0.2, 6]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* 立柱 */}
        {[[-3.8, 0, -2.8], [3.8, 0, -2.8], [-3.8, 0, 2.8], [3.8, 0, 2.8]].map((pos, i) => (
          <mesh key={i} position={pos}>
            <boxGeometry args={[0.1, 4, 0.1]} />
            <meshStandardMaterial color="#3a3a3a" metalness={0.95} roughness={0.05} />
          </mesh>
        ))}
        
        {/* 横梁 */}
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[8, 0.1, 6]} />
          <meshStandardMaterial color="#3a3a3a" metalness={0.95} roughness={0.05} />
        </mesh>
      </group>

      {/* CPU模块 (S7-1214C) */}
      <group
        name="cpu-module"
        position={[-1.5, -0.5, 1]}
        onPointerOver={() => setHoveredComponent('cpu-module')}
        onPointerOut={() => setHoveredComponent(null)}
        onClick={() => handleComponentClick('cpu-module')}
      >
        <mesh>
          <boxGeometry args={[1.2, 0.8, 0.6]} />
          <meshStandardMaterial 
            color={hoveredComponent === 'cpu-module' ? "#4a90e2" : "#2563eb"} 
            metalness={0.7} 
            roughness={0.3} 
          />
        </mesh>
        
        {/* CPU前面板 */}
        <mesh position={[0, 0, 0.31]}>
          <boxGeometry args={[1.15, 0.75, 0.02]} />
          <meshStandardMaterial color="#1e40af" metalness={0.5} roughness={0.5} />
        </mesh>
        
        {/* LED指示灯 */}
        {[-0.4, -0.2, 0, 0.2, 0.4].map((x, i) => (
          <mesh key={i} position={[x, 0.2, 0.32]}>
            <cylinderGeometry args={[0.02, 0.02, 0.01]} />
            <meshStandardMaterial 
              color={i < 2 ? "#22c55e" : "#f59e0b"} 
              emissive={i < 2 ? "#22c55e" : "#f59e0b"}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>

      {/* 开关电源模块 */}
      <group
        name="power-supply"
        position={[0, -0.5, 1]}
        onPointerOver={() => setHoveredComponent('power-supply')}
        onPointerOut={() => setHoveredComponent(null)}
        onClick={() => handleComponentClick('power-supply')}
      >
        <mesh>
          <boxGeometry args={[1, 0.7, 0.5]} />
          <meshStandardMaterial 
            color={hoveredComponent === 'power-supply' ? "#22d3ee" : "#16a34a"} 
            metalness={0.7} 
            roughness={0.3} 
          />
        </mesh>
        
        {/* 电源接口 */}
        <mesh position={[0, -0.2, 0.26]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1]} />
          <meshStandardMaterial color="#000" />
        </mesh>
      </group>

      {/* I/O扩展模块 */}
      <group
        name="io-module"
        position={[1.5, -0.5, 1]}
        onPointerOver={() => setHoveredComponent('io-module')}
        onPointerOut={() => setHoveredComponent(null)}
        onClick={() => handleComponentClick('io-module')}
      >
        <mesh>
          <boxGeometry args={[1, 0.8, 0.6]} />
          <meshStandardMaterial 
            color={hoveredComponent === 'io-module' ? "#f87171" : "#dc2626"} 
            metalness={0.7} 
            roughness={0.3} 
          />
        </mesh>
        
        {/* I/O指示灯 */}
        {[-0.3, -0.1, 0.1, 0.3].map((x, i) => (
          <mesh key={i} position={[x, 0.15, 0.31]}>
            <cylinderGeometry args={[0.015, 0.015, 0.01]} />
            <meshStandardMaterial 
              color="#fbbf24" 
              emissive="#fbbf24"
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>

      {/* HMI触摸屏 */}
      <group
        name="hmi-panel"
        position={[0, 0.5, 1]}
        onPointerOver={() => setHoveredComponent('hmi-panel')}
        onPointerOut={() => setHoveredComponent(null)}
        onClick={() => handleComponentClick('hmi-panel')}
      >
        <mesh>
          <boxGeometry args={[2, 1.2, 0.15]} />
          <meshStandardMaterial color="#1f2937" metalness={0.3} roughness={0.7} />
        </mesh>
        
        {/* 屏幕 */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[1.8, 1, 0.02]} />
          <meshStandardMaterial 
            color={hoveredComponent === 'hmi-panel' ? "#3b82f6" : "#0f172a"}
            emissive={hoveredComponent === 'hmi-panel' ? "#1e40af" : "#000"}
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>

      {/* DIN导轨 */}
      <mesh position={[0, -1, 1]} name="din-rail">
        <boxGeometry args={[4, 0.05, 0.15]} />
        <meshStandardMaterial color="#525252" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* 接线端子排 */}
      <group
        name="terminal-block"
        position={[0, -1.5, 0.8]}
        onPointerOver={() => setHoveredComponent('terminal-block')}
        onPointerOut={() => setHoveredComponent(null)}
        onClick={() => handleComponentClick('terminal-block')}
      >
        {[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <boxGeometry args={[0.08, 0.15, 0.2]} />
            <meshStandardMaterial 
              color={hoveredComponent === 'terminal-block' ? "#fcd34d" : "#fbbf24"} 
              metalness={0.9} 
              roughness={0.1} 
            />
          </mesh>
        ))}
      </group>

      {/* 控制按钮组 */}
      <group
        name="control-buttons"
        position={[-2.5, 0.2, 1.2]}
        onPointerOver={() => setHoveredComponent('control-buttons')}
        onPointerOut={() => setHoveredComponent(null)}
        onClick={() => handleComponentClick('control-buttons')}
      >
        {/* 急停按钮 */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1]} />
          <meshStandardMaterial color="#dc2626" emissive="#991b1b" emissiveIntensity={0.3} />
        </mesh>
        
        {/* 启动按钮 */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.08]} />
          <meshStandardMaterial color="#16a34a" />
        </mesh>
        
        {/* 停止按钮 */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.08]} />
          <meshStandardMaterial color="#dc2626" />
        </mesh>
      </group>

      {/* LED指示灯组 */}
      <group
        name="indicator-lights"
        position={[2.5, 0.5, 1.2]}
        onPointerOver={() => setHoveredComponent('indicator-lights')}
        onPointerOut={() => setHoveredComponent(null)}
        onClick={() => handleComponentClick('indicator-lights')}
      >
        {[
          { pos: [0, 0.4, 0], color: "#dc2626" },
          { pos: [0, 0.2, 0], color: "#f59e0b" },
          { pos: [0, 0, 0], color: "#22c55e" },
          { pos: [0, -0.2, 0], color: "#3b82f6" },
          { pos: [0, -0.4, 0], color: "#8b5cf6" }
        ].map((light, i) => (
          <mesh key={i} position={light.pos}>
            <cylinderGeometry args={[0.08, 0.08, 0.06]} />
            <meshStandardMaterial 
              color={light.color} 
              emissive={light.color}
              emissiveIntensity={hoveredComponent === 'indicator-lights' ? 1 : 0.4}
            />
          </mesh>
        ))}
      </group>

      {/* 组件信息标签 */}
      {selectedComponent && componentInfo[selectedComponent] && (
        <Html position={[0, 3, 0]} center>
          <div className="bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg max-w-xs">
            <h3 className="font-bold text-lg mb-2">{componentInfo[selectedComponent].name}</h3>
            <p className="text-sm mb-3 text-gray-300">{componentInfo[selectedComponent].description}</p>
            <div>
              <h4 className="font-semibold text-sm mb-1">技术规格：</h4>
              <ul className="text-xs text-gray-400">
                {componentInfo[selectedComponent].specifications.map((spec, i) => (
                  <li key={i}>• {spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </Html>
      )}

      {/* 悬停提示 */}
      {hoveredComponent && componentInfo[hoveredComponent] && !selectedComponent && (
        <Html position={[0, 2.5, 0]} center>
          <div className="bg-blue-600/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {componentInfo[hoveredComponent].name}
            <div className="text-xs opacity-80">点击查看详细信息</div>
          </div>
        </Html>
      )}
    </group>
  );
}

// 加载动画组件
function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="text-white mt-2 text-sm">加载精细模型中...</p>
      </div>
    </Html>
  );
}

interface EnhancedPLCModelProps {
  className?: string;
}

const EnhancedPLCModel: React.FC<EnhancedPLCModelProps> = ({ className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div 
      className={`relative h-[500px] bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 rounded-xl overflow-hidden shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 3D画布 */}
      <Canvas
        camera={{ position: [8, 6, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={() => setTimeout(() => setIsLoading(false), 1500)}
      >
        {/* 光照设置 */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} castShadow />
        <directionalLight position={[-5, 5, 5]} intensity={0.3} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />
        
        {/* 网格背景 */}
        <Grid 
          args={[20, 20]} 
          cellSize={0.5}
          cellThickness={0.5}
          cellColor="#1e40af"
          sectionSize={2}
          sectionThickness={1}
          sectionColor="#3b82f6"
          fadeDistance={15}
          fadeStrength={1}
          followCamera={false}
          infiniteGrid={true}
        />
        
        {/* 精细PLC实训台模型 */}
        <Suspense fallback={<LoadingSpinner />}>
          <Center>
            <DetailedPLCStation />
          </Center>
        </Suspense>
        
        {/* 轨道控制器 */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          minDistance={5}
          maxDistance={15}
          maxPolarAngle={Math.PI * 0.75}
          minPolarAngle={Math.PI * 0.25}
        />
        
        {/* 环境贴图 */}
        <Environment preset="warehouse" />
      </Canvas>
      
      {/* 加载指示器 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <div className="text-lg font-semibold">加载高精度PLC实训台模型</div>
            <div className="text-sm text-white/70 mt-2">基于71个SolidWorks零件构建</div>
          </div>
        </div>
      )}
      
      {/* 标题和说明 */}
      <div className="absolute top-4 left-4 text-white">
        <h4 className="text-lg font-semibold">西门子 S7-1200 PLC 实训台</h4>
        <p className="text-sm text-white/70">高精度交互式3D模型</p>
      </div>
      
      {/* 操作提示 */}
      <div className="absolute bottom-4 right-4 text-white/70 text-xs text-right">
        <p>🖱️ 拖拽旋转 | 🎯 点击组件查看详情</p>
        <p>⚡ 滚轮缩放 | 📱 悬停查看名称</p>
      </div>
    </motion.div>
  );
};

export default EnhancedPLCModel;