import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, RotateCcw, ZoomIn, ZoomOut, Eye } from '../components/Icons';

// PLC实训台的详细视图数据
const plcViews = [
  {
    id: 1,
    image: '/images/plc-models/1.png',
    title: '整体正面视图',
    description: '展示PLC实训台的完整结构，包括控制面板、显示屏和各个模块的整体布局'
  },
  {
    id: 2,
    image: '/images/plc-models/2.png',
    title: '侧面结构视图',
    description: '从侧面观察实训台的框架结构和模块安装方式'
  },
  {
    id: 3,
    image: '/images/plc-models/3.png',
    title: '控制面板特写',
    description: '详细展示PLC控制面板的按钮、指示灯和接线端子'
  },
  {
    id: 4,
    image: '/images/plc-models/4.png',
    title: '模块配置视图',
    description: '展示CPU模块、I/O模块和电源模块的具体配置'
  },
  {
    id: 5,
    image: '/images/plc-models/5.png',
    title: '接线端子详图',
    description: '清楚显示各种接线端子和连接器的布局'
  },
  {
    id: 6,
    image: '/images/plc-models/6.png',
    title: '背面连接视图',
    description: '展示实训台背面的电缆连接和通信接口'
  },
  {
    id: 7,
    image: '/images/plc-models/7.png',
    title: '顶部俯视图',
    description: '从上方观察整个实训台的布局和组件分布'
  },
  {
    id: 8,
    image: '/images/plc-models/8.png',
    title: '局部放大视图',
    description: '重要组件的局部放大展示'
  },
  {
    id: 9,
    image: '/images/plc-models/9.png',
    title: '工作状态展示',
    description: '展示实训台在工作状态下的指示灯和显示效果'
  },
  {
    id: 10,
    image: '/images/plc-models/10.png',
    title: '三维立体视图',
    description: '展示实训台的三维立体效果和空间关系'
  },
  {
    id: 11,
    image: '/images/plc-models/11.png',
    title: '分解装配图',
    description: '展示各个组件的分解装配关系和安装顺序'
  }
];

interface DetailedPLCModelProps {
  className?: string;
}

const DetailedPLCModel: React.FC<DetailedPLCModelProps> = ({ className = "" }) => {
  const [currentView, setCurrentView] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % plcViews.length);
    resetImageTransform();
  };

  const prevView = () => {
    setCurrentView((prev) => (prev - 1 + plcViews.length) % plcViews.length);
    resetImageTransform();
  };

  const resetImageTransform = () => {
    setImageScale(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setImageScale(prev => Math.min(prev * 1.2, 3));
  };

  const zoomOut = () => {
    setImageScale(prev => Math.max(prev / 1.2, 0.5));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (imageScale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && imageScale > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const currentViewData = plcViews[currentView];

  return (
    <>
      <motion.div 
        className={`relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 rounded-xl overflow-hidden shadow-2xl ${className}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* 标题栏 */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="flex justify-between items-start">
            <div className="text-white">
              <h4 className="text-lg font-semibold">西门子 S7-1200 PLC 实训台</h4>
              <p className="text-sm text-white/70">高精度3D渲染模型 ({currentView + 1}/{plcViews.length})</p>
            </div>
            <button
              onClick={() => setIsFullscreen(true)}
              className="p-2 bg-black/30 hover:bg-black/50 rounded-lg backdrop-blur-sm transition-all"
            >
              <Eye className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* 主图片显示区域 */}
        <div className="relative h-[400px] overflow-hidden">
          <motion.img
            ref={imageRef}
            src={currentViewData.image}
            alt={currentViewData.title}
            className="w-full h-full object-contain cursor-pointer"
            style={{
              transform: `scale(${imageScale}) translate(${imagePosition.x}px, ${imagePosition.y}px)`
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={() => setIsFullscreen(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={currentView}
            transition={{ duration: 0.3 }}
          />

          {/* 导航箭头 */}
          <button
            onClick={prevView}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextView}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* 底部控制栏 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
            <button
              onClick={zoomOut}
              className="p-2 hover:bg-white/20 rounded transition-all"
              title="缩小"
            >
              <ZoomOut className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={resetImageTransform}
              className="p-2 hover:bg-white/20 rounded transition-all"
              title="重置"
            >
              <RotateCcw className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={zoomIn}
              className="p-2 hover:bg-white/20 rounded transition-all"
              title="放大"
            >
              <ZoomIn className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* 底部信息栏 */}
        <div className="p-4 bg-black/30 backdrop-blur-sm">
          <h5 className="text-white font-semibold mb-1">{currentViewData.title}</h5>
          <p className="text-white/70 text-sm">{currentViewData.description}</p>
        </div>

        {/* 缩略图导航 */}
        <div className="p-4 bg-black/20 backdrop-blur-sm">
          <div className="flex space-x-2 overflow-x-auto">
            {plcViews.map((view, index) => (
              <button
                key={view.id}
                onClick={() => {
                  setCurrentView(index);
                  resetImageTransform();
                }}
                className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                  index === currentView 
                    ? 'border-blue-400 shadow-lg' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <img
                  src={view.image}
                  alt={view.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 全屏模式 */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* 全屏图片 */}
            <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden">
              <img
                src={currentViewData.image}
                alt={currentViewData.title}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* 全屏模式导航 */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevView();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextView();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>

              {/* 全屏模式信息 */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-md">
                <h5 className="text-white font-semibold mb-1">{currentViewData.title}</h5>
                <p className="text-white/70 text-sm">{currentViewData.description}</p>
                <p className="text-white/50 text-xs mt-2">
                  {currentView + 1} / {plcViews.length} | 点击空白处关闭
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DetailedPLCModel;