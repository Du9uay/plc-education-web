import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, RefreshCw, CheckCircle, Settings, Monitor, Eye } from '../components/Icons';

// 拼图类型定义
interface PuzzlePiece {
  id: string;
  type: 'instruction' | 'logic';
  label: string;
  symbol: string;
  color: string;
  shape: string;
  description: string;
  category?: string;
}

// 拼图位置
interface PuzzlePosition {
  x: number;
  y: number;
  pieceId: string | null;
  isCorrect?: boolean;
}

// 游戏状态
interface GameState {
  currentPuzzle: PuzzlePiece[];
  gridPositions: PuzzlePosition[];
  isChecking: boolean;
  hints: number;
  isComplete: boolean;
  errors: string[];
  score: number;
}

// 拖拽状态
interface DragState {
  isDragging: boolean;
  draggedPiece: PuzzlePiece | null;
  dragOffset: { x: number; y: number };
  dragPosition: { x: number; y: number };
}

const HomeworkPage: React.FC = () => {
  // 可用的拼图块
  const availablePieces: PuzzlePiece[] = [
    {
      id: 'ld-weight',
      type: 'instruction',
      label: 'LD',
      symbol: '-||-',
      color: 'bg-blue-500',
      shape: 'rounded-lg',
      description: '常开触点指令',
      category: 'weight'
    },
    {
      id: 'ld-vision',
      type: 'instruction',
      label: 'LD',
      symbol: '-||-',
      color: 'bg-blue-500',
      shape: 'rounded-lg',
      description: '常开触点指令',
      category: 'vision'
    },
    {
      id: 'and-range',
      type: 'instruction',
      label: 'AND',
      symbol: '&',
      color: 'bg-green-500',
      shape: 'rounded-lg',
      description: '与逻辑指令',
      category: 'range'
    },
    {
      id: 'and-material',
      type: 'instruction',
      label: 'AND',
      symbol: '&',
      color: 'bg-green-500',
      shape: 'rounded-lg',
      description: '与逻辑指令',
      category: 'material'
    },
    {
      id: 'or-condition',
      type: 'instruction',
      label: 'OR',
      symbol: 'O',
      color: 'bg-yellow-500',
      shape: 'rounded-lg',
      description: '或逻辑指令',
      category: 'condition'
    },
    {
      id: 'out-motor',
      type: 'instruction',
      label: 'OUT',
      symbol: '-()',
      color: 'bg-red-500',
      shape: 'rounded-lg',
      description: '输出指令',
      category: 'output'
    },
    {
      id: 'logic-weight',
      type: 'logic',
      label: '重量检测',
      symbol: 'W',
      color: 'bg-purple-500',
      shape: 'rounded-lg',
      description: '产品重量传感器信号'
    },
    {
      id: 'logic-range',
      type: 'logic',
      label: '重量范围',
      symbol: 'R',
      color: 'bg-purple-600',
      shape: 'rounded-lg',
      description: '重量在合适范围内'
    },
    {
      id: 'logic-vision',
      type: 'logic',
      label: '外观检测',
      symbol: 'V',
      color: 'bg-indigo-500',
      shape: 'rounded-lg',
      description: '外观检测合格信号'
    },
    {
      id: 'logic-material',
      type: 'logic',
      label: '材料准备',
      symbol: 'M',
      color: 'bg-teal-500',
      shape: 'rounded-lg',
      description: '包装材料准备就绪'
    },
    {
      id: 'logic-motor',
      type: 'logic',
      label: '包装电机',
      symbol: 'P',
      color: 'bg-red-600',
      shape: 'rounded-lg',
      description: '包装机电机输出'
    }
  ];

  // 正确的拼图顺序（用于后续扩展功能）
  // const correctSequence = [
  //   'ld-weight', 'logic-weight', 'and-range', 'logic-range',
  //   'or-condition', 'ld-vision', 'logic-vision',
  //   'and-material', 'logic-material', 'out-motor', 'logic-motor'
  // ];

  // 初始化网格位置 (6列2行)
  const initializeGrid = (): PuzzlePosition[] => {
    const positions: PuzzlePosition[] = [];
    for (let i = 0; i < 12; i++) {
      positions.push({
        x: (i % 6) * 120 + 25,
        y: Math.floor(i / 6) * 100 + 25,
        pieceId: null,
        isCorrect: false
      });
    }
    return positions;
  };

  const [gameState, setGameState] = useState<GameState>({
    currentPuzzle: [],
    gridPositions: initializeGrid(),
    isChecking: false,
    hints: 3,
    isComplete: false,
    errors: [],
    score: 0
  });

  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    draggedPiece: null,
    dragOffset: { x: 0, y: 0 },
    dragPosition: { x: 0, y: 0 }
  });

  const [showSimulation, setShowSimulation] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [usedPieces, setUsedPieces] = useState<Set<string>>(new Set());
  const [hoveredGridIndex, setHoveredGridIndex] = useState<number>(-1);

  // const dragRef = useRef<HTMLDivElement>(null); // 备用引用

  // 鼠标移动处理
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (dragState.isDragging && dragState.draggedPiece) {
      setDragState(prev => ({
        ...prev,
        dragPosition: {
          x: e.clientX,
          y: e.clientY
        }
      }));

      // 检测当前悬停的网格单元格 - 使用正确的选择器，每次重新获取位置
      const gridContainer = document.querySelector('.puzzle-grid .grid.grid-cols-6');
      if (gridContainer) {
        const gridRect = gridContainer.getBoundingClientRect();
        // 考虑网格容器的padding (p-4 = 16px)
        const relativeX = e.clientX - gridRect.left - 16;
        const relativeY = e.clientY - gridRect.top - 16;

        console.log('Mouse hover check:', { 
          clientX: e.clientX, 
          clientY: e.clientY, 
          gridLeft: gridRect.left, 
          gridTop: gridRect.top,
          relativeX, 
          relativeY 
        });

        const cellWidth = 144; // w-36
        const cellHeight = 96; // h-24
        const gap = 16; // gap-4
        const cols = 6;
        const rows = 2;

        let newHoveredIndex = -1;
        
        if (relativeX >= 0 && relativeY >= 0) {
          const totalGridWidth = cols * cellWidth + (cols - 1) * gap;
          const totalGridHeight = rows * cellHeight + (rows - 1) * gap;
          
          console.log('Grid bounds check:', { totalGridWidth, totalGridHeight, relativeX, relativeY });
          
          if (relativeX <= totalGridWidth && relativeY <= totalGridHeight) {
            // 使用精确的数学计算，避免累积误差
            let col = -1;
            for (let c = 0; c < cols; c++) {
              const cellStart = c * (cellWidth + gap);
              const cellEnd = cellStart + cellWidth;
              console.log(`Col ${c}: start=${cellStart}, end=${cellEnd}, relativeX=${relativeX}`);
              if (relativeX >= cellStart && relativeX < cellEnd) {
                col = c;
                break;
              }
            }
            
            // 如果没有找到列，检查是否超出了最后一列的范围但仍在网格内
            if (col === -1 && relativeX >= (cols - 1) * (cellWidth + gap) && relativeX <= totalGridWidth) {
              col = cols - 1;
              console.log(`Fallback to last column: col=${col}`);
            }
            
            let row = -1;
            for (let r = 0; r < rows; r++) {
              const cellStart = r * (cellHeight + gap);
              const cellEnd = cellStart + cellHeight;
              console.log(`Row ${r}: start=${cellStart}, end=${cellEnd}, relativeY=${relativeY}`);
              if (relativeY >= cellStart && relativeY < cellEnd) {
                row = r;
                break;
              }
            }
            
            console.log('Grid position calculation:', { col, row });
            
            if (col >= 0 && row >= 0) {
              const gridIndex = row * cols + col;
              console.log('Calculated grid index:', gridIndex);
              if (gridIndex >= 0 && gridIndex < gameState.gridPositions.length) {
                const position = gameState.gridPositions[gridIndex];
                if (!position.pieceId) { // 只有空格子才能悬停
                  newHoveredIndex = gridIndex;
                }
              }
            }
          }
        }

        console.log('Final hover index:', newHoveredIndex);
        setHoveredGridIndex(newHoveredIndex);
      }
    }
  }, [dragState.isDragging, dragState.draggedPiece, gameState.gridPositions]);

  // 鼠标释放处理
  const handleMouseUp = useCallback((e: MouseEvent) => {
    if (dragState.isDragging && dragState.draggedPiece) {
      // 查找网格容器 - 使用正确的选择器，每次重新获取位置
      const gridContainer = document.querySelector('.puzzle-grid .grid.grid-cols-6');
      if (gridContainer) {
        const gridRect = gridContainer.getBoundingClientRect();
        // 考虑网格容器的padding (p-4 = 16px)
        const relativeX = e.clientX - gridRect.left - 16;
        const relativeY = e.clientY - gridRect.top - 16;

        // 网格参数
        const cellWidth = 144; // w-36
        const cellHeight = 96; // h-24
        const gap = 16; // gap-4
        const cols = 6;
        const rows = 2;

        // 计算网格索引 - 使用更精确的方法
        let gridIndex = -1;
        let calculatedCol = -1;
        let calculatedRow = -1;
        
        // 检查是否在网格范围内
        if (relativeX >= 0 && relativeY >= 0) {
          // 计算总网格宽度和高度
          const totalGridWidth = cols * cellWidth + (cols - 1) * gap;
          const totalGridHeight = rows * cellHeight + (rows - 1) * gap;
          
          if (relativeX <= totalGridWidth && relativeY <= totalGridHeight) {
            // 使用精确的数学计算，避免累积误差 - 与悬停处理保持一致
            for (let c = 0; c < cols; c++) {
              const cellStart = c * (cellWidth + gap);
              const cellEnd = cellStart + cellWidth;
              console.log(`Drop Col ${c}: start=${cellStart}, end=${cellEnd}, relativeX=${relativeX}`);
              if (relativeX >= cellStart && relativeX < cellEnd) {
                calculatedCol = c;
                break;
              }
            }
            
            // 如果没有找到列，检查是否超出了最后一列的范围但仍在网格内
            if (calculatedCol === -1 && relativeX >= (cols - 1) * (cellWidth + gap) && relativeX <= totalGridWidth) {
              calculatedCol = cols - 1;
              console.log(`Drop fallback to last column: col=${calculatedCol}`);
            }
            
            // 计算行索引
            for (let r = 0; r < rows; r++) {
              const cellStart = r * (cellHeight + gap);
              const cellEnd = cellStart + cellHeight;
              console.log(`Drop Row ${r}: start=${cellStart}, end=${cellEnd}, relativeY=${relativeY}`);
              if (relativeY >= cellStart && relativeY < cellEnd) {
                calculatedRow = r;
                break;
              }
            }
            
            // 计算最终索引
            if (calculatedCol >= 0 && calculatedRow >= 0) {
              gridIndex = calculatedRow * cols + calculatedCol;
            }
          }
        }

        console.log('Drop position:', { 
          clientX: e.clientX, 
          clientY: e.clientY,
          gridLeft: gridRect.left,
          gridTop: gridRect.top,
          relativeX, 
          relativeY, 
          gridIndex,
          calculatedCol,
          calculatedRow 
        }); // 调试信息

        // 如果找到有效的网格位置且为空
        if (gridIndex >= 0 && gridIndex < gameState.gridPositions.length) {
          const targetPosition = gameState.gridPositions[gridIndex];
          
          if (!targetPosition.pieceId) {
            const newGridPositions = [...gameState.gridPositions];
            newGridPositions[gridIndex] = {
              ...targetPosition,
              pieceId: dragState.draggedPiece.id
            };

            const newCurrentPuzzle = [...gameState.currentPuzzle];
            if (!newCurrentPuzzle.find(p => p.id === dragState.draggedPiece!.id)) {
              newCurrentPuzzle.push(dragState.draggedPiece);
            }

            setGameState(prev => ({
              ...prev,
              gridPositions: newGridPositions,
              currentPuzzle: newCurrentPuzzle,
              errors: []
            }));

            setUsedPieces(prev => {
              const newSet = new Set(prev);
              newSet.add(dragState.draggedPiece!.id);
              return newSet;
            });
          }
        }
      }

      setDragState({
        isDragging: false,
        draggedPiece: null,
        dragOffset: { x: 0, y: 0 },
        dragPosition: { x: 0, y: 0 }
      });
      
      setHoveredGridIndex(-1);
    }
  }, [dragState.isDragging, dragState.draggedPiece, gameState.gridPositions, gameState.currentPuzzle]);

  // 添加事件监听器
  useEffect(() => {
    if (dragState.isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragState.isDragging, handleMouseMove, handleMouseUp]);

  // 拖拽开始
  const handleDragStart = (piece: PuzzlePiece, event: React.MouseEvent) => {
    if (usedPieces.has(piece.id)) return;
    
    event.preventDefault(); // 防止默认拖拽行为
    
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    
    console.log('Drag start:', piece.label, { offsetX, offsetY }); // 调试信息
    
    setDragState({
      isDragging: true,
      draggedPiece: piece,
      dragOffset: {
        x: offsetX,
        y: offsetY
      },
      dragPosition: {
        x: event.clientX,
        y: event.clientY
      }
    });
  };

  // 移除拼图块
  const removePiece = (gridIndex: number) => {
    const position = gameState.gridPositions[gridIndex];
    if (position.pieceId) {
      const newGridPositions = [...gameState.gridPositions];
      newGridPositions[gridIndex] = {
        ...position,
        pieceId: null,
        isCorrect: false
      };

      const newCurrentPuzzle = gameState.currentPuzzle.filter(p => p.id !== position.pieceId);

      setGameState(prev => ({
        ...prev,
        gridPositions: newGridPositions,
        currentPuzzle: newCurrentPuzzle,
        errors: []
      }));

      setUsedPieces(prev => {
        const newSet = new Set(prev);
        newSet.delete(position.pieceId!);
        return newSet;
      });
    }
  };

  // 重置拼图
  const resetPuzzle = () => {
    setGameState(prev => ({
      ...prev,
      currentPuzzle: [],
      gridPositions: initializeGrid(),
      isComplete: false,
      errors: [],
      score: 0
    }));
    setUsedPieces(new Set());
    setShowSimulation(false);
    setSimulationStep(0);
  };

  // 检查拼图
  const checkPuzzle = () => {
    setGameState(prev => ({ ...prev, isChecking: true }));

    // 使用通知而不是alert
    const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
      const notification = document.createElement('div');
      const bgColor = type === 'success' ? 'rgba(34, 197, 94, 0.9)' : 
                     type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 
                     'rgba(59, 130, 246, 0.9)';
      
      notification.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: ${bgColor};
          color: white;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          max-width: 300px;
          font-size: 14px;
          line-height: 1.5;
        ">
          ${message}
        </div>
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 4000);
    };

    setTimeout(() => {
      const errors: string[] = [];
      const filledPositions = gameState.gridPositions.filter(pos => pos.pieceId);
      
      if (filledPositions.length < 6) {
        errors.push('拼图不完整，请添加更多指令块');
        showNotification('❌ 拼图不完整，请添加更多指令块', 'error');
      }

      // 检查必要的指令
      const placedPieces = filledPositions.map(pos => pos.pieceId);
      const hasLD = placedPieces.some(id => availablePieces.find(p => p.id === id)?.label === 'LD');
      const hasAND = placedPieces.some(id => availablePieces.find(p => p.id === id)?.label === 'AND');
      const hasOR = placedPieces.some(id => availablePieces.find(p => p.id === id)?.label === 'OR');
      const hasOUT = placedPieces.some(id => availablePieces.find(p => p.id === id)?.label === 'OUT');

      if (!hasLD) errors.push('缺少LD（常开触点）指令');
      if (!hasAND) errors.push('缺少AND（与逻辑）指令');
      if (!hasOR) errors.push('缺少OR（或逻辑）指令');
      if (!hasOUT) errors.push('缺少OUT（输出）指令');

      // 检查逻辑组合
      const hasWeightLogic = placedPieces.includes('logic-weight') && placedPieces.includes('logic-range');
      const hasVisionLogic = placedPieces.includes('logic-vision');
      const hasMaterialLogic = placedPieces.includes('logic-material');
      const hasMotorOutput = placedPieces.includes('logic-motor');

      if (!hasWeightLogic) errors.push('缺少完整的重量检测逻辑');
      if (!hasVisionLogic) errors.push('缺少外观检测逻辑');
      if (!hasMaterialLogic) errors.push('缺少包装材料检测逻辑');
      if (!hasMotorOutput) errors.push('缺少包装电机输出');

      // 计算分数
      let score = 0;
      if (hasLD) score += 10;
      if (hasAND) score += 15;
      if (hasOR) score += 15;
      if (hasOUT) score += 10;
      if (hasWeightLogic) score += 20;
      if (hasVisionLogic) score += 10;
      if (hasMaterialLogic) score += 10;
      if (hasMotorOutput) score += 10;

      const isComplete = errors.length === 0;
      if (isComplete) {
        score = 100;
        showNotification('🎉 恭喜！拼图完成，得分100分！', 'success');
      } else {
        showNotification(`❌ 发现${errors.length}个问题，请检查拼图`, 'error');
      }

      setGameState(prev => ({
        ...prev,
        isChecking: false,
        isComplete,
        errors,
        score
      }));

      if (isComplete) {
        setShowSimulation(true);
        runSimulation();
      }
    }, 1500);
  };

  // 运行模拟
  const runSimulation = () => {
    setSimulationStep(0);
    const steps = [
      '产品进入检测区域',
      '重量传感器检测产品重量',
      '判断重量是否在合适范围',
      '外观检测传感器检查产品外观',
      '检查包装材料准备状态',
      '逻辑判断：(重量合适 OR 外观合格) AND 材料就绪',
      '满足条件，启动包装机',
      '包装完成，产品输出'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setSimulationStep(currentStep);
      if (currentStep >= steps.length) {
        clearInterval(interval);
      }
    }, 1200);
  };

  // 使用提示
  const useHint = () => {
    if (gameState.hints > 0) {
      const hints = [
        "先放置LD指令读取重量传感器信号",
        "使用OR指令连接重量检测和外观检测",
        "用AND指令连接条件判断和材料准备",
        "最后放置OUT指令输出到包装电机"
      ];
      
      // 修复提示序号计算：第一次点击应该显示第1个提示
      const currentHintIndex = 3 - gameState.hints;
      if (currentHintIndex >= 0 && currentHintIndex < hints.length) {
        // 使用console.log而不是alert避免弹窗问题
        console.log(`提示${currentHintIndex + 1}：${hints[currentHintIndex]}`);
        
        // 创建一个临时的通知div
        const notification = document.createElement('div');
        notification.innerHTML = `
          <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(59, 130, 246, 0.9);
            color: white;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-width: 300px;
            font-size: 14px;
            line-height: 1.5;
          ">
            <strong>💡 提示${currentHintIndex + 1}：</strong><br>
            ${hints[currentHintIndex]}
          </div>
        `;
        document.body.appendChild(notification);
        
        // 3秒后自动移除通知
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 3000);
        
        setGameState(prev => ({
          ...prev,
          hints: prev.hints - 1
        }));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* 页面标题 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <div className="w-10 h-10 mr-4 text-purple-400 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="8" height="8" rx="2"/>
                <rect x="13" y="3" width="8" height="8" rx="2"/>
                <rect x="3" y="13" width="8" height="8" rx="2"/>
                <rect x="13" y="13" width="8" height="8" rx="2"/>
              </svg>
            </div>
            课后作业：多条件逻辑拼图
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            通过拖拽PLC指令拼图，构建自动包装机的控制逻辑。<strong className="text-white font-bold">当产品重量合适或外观检测合格，且包装材料准备就绪时，启动包装动作。</strong>
          </p>
        </motion.div>

        {/* 游戏状态栏 */}
        <motion.div
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-medium">
                  状态: {gameState.isComplete ? '已完成' : '进行中'}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 text-blue-400 mr-2">💡</div>
                <span className="text-white font-medium">
                  提示次数: {gameState.hints}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 text-yellow-400 mr-2">⭐</div>
                <span className="text-white font-medium">
                  分数: {gameState.score}/100
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={useHint}
                disabled={gameState.hints === 0}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center"
              >
                <div className="w-4 h-4 mr-2">💡</div>
                使用提示
              </button>
              <button
                onClick={resetPuzzle}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                重置拼图
              </button>
              <button
                onClick={checkPuzzle}
                disabled={gameState.isChecking}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white rounded-lg transition-colors flex items-center"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {gameState.isChecking ? '检查中...' : '检查拼图'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* 拼图盒 - 上方单独一行 */}
        <motion.div
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <div className="w-6 h-6 mr-3 text-purple-400">📦</div>
            拼图盒
          </h3>
          
                    <div className="grid lg:grid-cols-2 gap-6">
            {/* 基础指令 */}
            <div>
              <h4 className="text-base font-semibold text-white/90 mb-2">基础指令</h4>
              <div className="grid grid-cols-2 gap-1">
                {availablePieces.filter(piece => piece.type === 'instruction').map((piece) => (
                  <motion.div
                    key={piece.id}
                    className={`${piece.color} ${piece.shape} p-1.5 cursor-grab active:cursor-grabbing text-white text-center font-bold shadow-lg transition-all ${
                      usedPieces.has(piece.id) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                    onMouseDown={(e) => handleDragStart(piece, e)}
                    whileHover={usedPieces.has(piece.id) ? {} : { scale: 1.05 }}
                    whileTap={usedPieces.has(piece.id) ? {} : { scale: 0.95 }}
                  >
                    <div className="text-xs font-bold">{piece.label}</div>
                    <div className="text-xs opacity-80">{piece.symbol}</div>
                    <div className="text-xs opacity-70 truncate">{piece.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 逻辑条件 */}
            <div>
              <h4 className="text-base font-semibold text-white/90 mb-2">逻辑条件</h4>
              <div className="grid grid-cols-1 gap-1">
                {availablePieces.filter(piece => piece.type === 'logic').map((piece) => (
                  <motion.div
                    key={piece.id}
                    className={`${piece.color} ${piece.shape} p-1.5 cursor-grab active:cursor-grabbing text-white font-bold shadow-lg transition-all ${
                      usedPieces.has(piece.id) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                    onMouseDown={(e) => handleDragStart(piece, e)}
                    whileHover={usedPieces.has(piece.id) ? {} : { scale: 1.05 }}
                    whileTap={usedPieces.has(piece.id) ? {} : { scale: 0.95 }}
                  >
                    <div className="flex items-center">
                      <span className="text-xs font-bold mr-1.5 min-w-[16px]">{piece.symbol}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium truncate">{piece.label}</div>
                        <div className="text-xs opacity-70 truncate">{piece.description}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 逻辑拼接区 - 中间单独一行 */}
        <motion.div
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-green-400" />
            逻辑拼接区
          </h3>

          {/* 网格区域 - 增强可见性 */}
          <div className="puzzle-grid relative bg-slate-800/70 rounded-lg p-6 border border-white/20">
            {/* 网格标题和说明 */}
            <div className="mb-6 text-center">
              <h4 className="text-white font-semibold mb-2">拖拽指令到下方格子中构建逻辑</h4>
              <p className="text-white/60 text-sm">目标：(重量检测 OR 外观检测) AND 材料准备 → 包装电机</p>
            </div>
            
            {/* 调试信息显示 */}
            <div className="mb-4 p-2 bg-black/20 rounded text-xs text-white/60 font-mono">
              调试: 网格数量={gameState.gridPositions.length} | 拖拽={dragState.isDragging ? '进行中' : '无'} | 悬停格子={hoveredGridIndex} | 已放置={gameState.currentPuzzle.length}
            </div>
            
            {/* 网格容器 - 增强视觉效果 */}
            <div className="grid grid-cols-6 gap-4 max-w-5xl mx-auto p-4 bg-slate-700/30 rounded-lg border-2 border-dashed border-white/20">
              {gameState.gridPositions.map((position, index) => (
                <div
                  key={index}
                  className={`grid-cell relative transition-all duration-200 cursor-pointer
                    w-36 h-24 
                    border-2 border-dashed rounded-lg 
                    flex items-center justify-center
                    ${hoveredGridIndex === index && dragState.isDragging && !position.pieceId
                      ? 'border-green-400 bg-green-400/30 shadow-xl scale-105 ring-2 ring-green-400/50'
                      : position.pieceId
                      ? 'border-blue-400 bg-blue-400/20 shadow-lg'
                      : 'border-white/40 hover:border-white/60 bg-white/5 hover:bg-white/10'
                    }
                  `}
                  data-grid-index={index}
                  onClick={() => removePiece(index)}
                  style={{
                    minWidth: '144px',
                    minHeight: '96px',
                    boxShadow: position.pieceId ? '0 4px 8px rgba(0,0,0,0.3)' : 'inset 0 2px 4px rgba(255,255,255,0.1)'
                  }}
                >
                  {/* 网格索引和状态指示器 */}
                  <div className="absolute top-1 left-1 text-xs text-white/40 font-mono">
                    #{index}
                  </div>
                  
                  {position.pieceId ? (
                    // 已放置的拼图块
                    <div className="absolute inset-1 flex items-center justify-center">
                      {(() => {
                        const piece = availablePieces.find(p => p.id === position.pieceId);
                        return piece ? (
                          <div className={`${piece.color} ${piece.shape} p-2 text-white text-center text-xs font-bold w-full h-full flex flex-col items-center justify-center shadow-lg rounded border border-white/20`}>
                            <div className="text-sm font-bold">{piece.label}</div>
                            <div className="text-xs opacity-90">{piece.symbol}</div>
                            {piece.type === 'logic' && (
                              <div className="text-xs opacity-80 mt-1 truncate max-w-full">{piece.description}</div>
                            )}
                          </div>
                        ) : null;
                      })()}
                    </div>
                  ) : (
                    // 空格子提示
                    <div className="text-center">
                      <div className="text-white/40 text-xs mb-1">
                        {hoveredGridIndex === index && dragState.isDragging ? '🎯 放置在此' : '📦 空位'}
                      </div>
                      <div className="text-white/30 text-xs">
                        拖拽到此处
                      </div>
                    </div>
                  )}
                  
                  {/* 悬停效果指示器 */}
                  {hoveredGridIndex === index && dragState.isDragging && !position.pieceId && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-8 h-8 bg-green-400/50 rounded-full animate-ping"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

                         {/* 网格说明 */}
             <div className="mt-4 text-center">
               <p className="text-white/50 text-xs">
                 💡 提示：点击已放置的拼图块可以移除它 | 绿色高亮表示可以放置
               </p>
             </div>

             {/* 逻辑流程图 */}
             {gameState.currentPuzzle.length > 0 && (
               <div className="mt-6 p-4 bg-white/5 rounded-lg max-w-5xl mx-auto border border-white/10">
                 <h4 className="text-sm font-semibold text-white/90 mb-2 flex items-center">
                   <div className="w-4 h-4 mr-2">🔗</div>
                   当前逻辑流程
                 </h4>
                 <div className="text-xs text-white/70 font-mono bg-black/20 p-2 rounded">
                   {gameState.gridPositions
                     .filter(pos => pos.pieceId)
                     .map(pos => {
                       const piece = availablePieces.find(p => p.id === pos.pieceId);
                       return piece?.label || '未知';
                     })
                     .join(' → ') || '暂无拼图块'}
                 </div>
               </div>
             )}

             {/* 错误提示 */}
             {gameState.errors.length > 0 && (
               <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg max-w-5xl mx-auto">
                 <h4 className="text-red-300 font-semibold mb-2 flex items-center">
                   <div className="w-4 h-4 mr-2">⚠️</div>
                   检测到以下问题：
                 </h4>
                 <ul className="text-red-200 text-sm space-y-1">
                   {gameState.errors.map((error, index) => (
                     <li key={index} className="flex items-start">
                       <span className="mr-2">•</span>
                       <span>{error}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             )}

             {/* 完成提示 */}
             {gameState.isComplete && (
               <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg max-w-5xl mx-auto">
                 <h4 className="text-green-300 font-semibold mb-2 flex items-center">
                   <CheckCircle className="w-5 h-5 mr-2" />
                   拼图完成！
                 </h4>
                 <p className="text-green-200 text-sm">
                   🎉 恭喜！您已成功构建了自动包装机的控制逻辑。得分：{gameState.score}/100
                 </p>
               </div>
             )}
           </div>
         </motion.div>

        {/* 设备示意图 - 下方单独一行 */}
        <motion.div
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Monitor className="w-6 h-6 mr-3 text-blue-400" />
              设备示意图
            </h3>

            {/* 设备图示 */}
            <div className="bg-slate-800/50 rounded-lg p-6 space-y-6">
              {/* 传送带和包装机 */}
              <div className="text-center">
                <div className="w-full h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                  <span className="text-white text-sm font-medium">传送带</span>
                  {showSimulation && simulationStep >= 1 && (
                    <motion.div
                      className="absolute left-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center"
                      animate={{ x: [0, 200, 400] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      📦
                    </motion.div>
                  )}
                </div>
                <div className="w-32 h-24 bg-blue-600 rounded-lg mx-auto flex items-center justify-center">
                  <div className="text-white text-xs text-center">
                    <div className="text-2xl mb-1">📦</div>
                    <div>包装机</div>
                  </div>
                </div>
              </div>

              {/* 传感器组 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className={`w-12 h-12 bg-purple-500 rounded-full mx-auto flex items-center justify-center mb-2 transition-all ${
                    showSimulation && simulationStep >= 2 ? 'ring-4 ring-purple-300 bg-purple-400' : ''
                  }`}>
                    <div className="text-white text-xl">⚖️</div>
                  </div>
                  <span className="text-white text-xs">重量传感器</span>
                </div>
                <div className="text-center">
                  <div className={`w-12 h-12 bg-indigo-500 rounded-full mx-auto flex items-center justify-center mb-2 transition-all ${
                    showSimulation && simulationStep >= 4 ? 'ring-4 ring-indigo-300 bg-indigo-400' : ''
                  }`}>
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-xs">外观检测</span>
                </div>
                <div className="text-center">
                  <div className={`w-12 h-12 bg-teal-500 rounded-full mx-auto flex items-center justify-center mb-2 transition-all ${
                    showSimulation && simulationStep >= 5 ? 'ring-4 ring-teal-300 bg-teal-400' : ''
                  }`}>
                    <div className="text-white text-xl">🧰</div>
                  </div>
                  <span className="text-white text-xs">材料检测</span>
                </div>
              </div>

              {/* 控制逻辑说明 */}
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">控制目标</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  当产品重量在合适范围内<strong>或者</strong>外观检测合格，<strong>并且</strong>包装材料准备就绪时，自动包装机启动包装动作。
                </p>
              </div>
            </div>

            {/* 模拟运行 */}
            {showSimulation && (
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="text-green-300 font-semibold mb-3 flex items-center">
                  <div className="w-5 h-5 mr-2">▶️</div>
                  模拟运行
                </h4>
                <div className="space-y-2">
                  {[
                    '产品进入检测区域',
                    '重量传感器检测产品重量',
                    '判断重量是否在合适范围',
                    '外观检测传感器检查产品外观',
                    '检查包装材料准备状态',
                    '逻辑判断：(重量合适 OR 外观合格) AND 材料就绪',
                    '满足条件，启动包装机',
                    '包装完成，产品输出'
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`text-sm p-2 rounded transition-colors ${
                        index < simulationStep
                          ? 'bg-green-500/20 text-green-200'
                          : index === simulationStep
                          ? 'bg-yellow-500/20 text-yellow-200'
                          : 'text-white/50'
                      }`}
                    >
                      {index + 1}. {step}
                    </div>
                  ))}
                </div>
              </div>
            )}
        </motion.div>

        {/* 拖拽中的拼图块 */}
        <AnimatePresence>
          {dragState.isDragging && dragState.draggedPiece && (
            <motion.div
              className={`fixed pointer-events-none z-50 ${dragState.draggedPiece.color} ${dragState.draggedPiece.shape} p-3 text-white text-center font-bold shadow-2xl`}
              style={{
                left: dragState.dragPosition.x - dragState.dragOffset.x,
                top: dragState.dragPosition.y - dragState.dragOffset.y,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.1, opacity: 0.9 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="text-lg font-bold">{dragState.draggedPiece.label}</div>
              <div className="text-sm opacity-80">{dragState.draggedPiece.symbol}</div>
              {dragState.draggedPiece.type === 'logic' && (
                <div className="text-xs mt-1 opacity-70">{dragState.draggedPiece.label}</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomeworkPage; 