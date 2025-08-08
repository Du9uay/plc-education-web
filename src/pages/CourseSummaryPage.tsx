import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  CheckCircle, 
  Award, 
  Target,
  // Users, 
  Zap, 
  Settings,
  // Network,
  Shield,
  RefreshCw
} from '../components/Icons';

const CourseSummaryPage: React.FC = () => {
  const [selectedTheory, setSelectedTheory] = useState<number | null>(null);
  const [showAllContent, setShowAllContent] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCompletionPercentage(95);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (index: number) => {
    if (selectedTheory === index) {
      setShowAllContent(false);
      setSelectedTheory(null);
    } else {
      setShowAllContent(true);
      setSelectedTheory(index);
    }
  };

  const coreTheories = [
    {
      title: 'PLC工作原理',
      description: '基于扫描循环机制的三个关键阶段',
      points: [
        '输入采样阶段：读取输入端子状态存入输入映像寄存器',
        '程序执行阶段：按程序逻辑运算并存入输出映像寄存器',
        '输出刷新阶段：将输出映像寄存器状态输出到输出端子'
      ],
      icon: RefreshCw,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'PLC特性与电气信号分类',
      description: 'PLC的核心特性和两种主要信号类型',
      points: [
        'PLC特性：可靠性高、编程便捷、功能丰富',
        '数字信号：离散、抗干扰强，用于开关量控制',
        '模拟信号：连续、反映物理量变化，用于精确控制'
      ],
      icon: Settings,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'PLC程序开发流程',
      description: '完整的PLC程序开发步骤',
      points: [
        '需求分析→硬件组态→编程',
        '编译→下载→调试',
        '程序优化与维护'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const uniqueFeatures = [
    {
      name: 'PLC与运动控制器对比',
      description: '不同控制器的应用场景区分',
      capabilities: [
        '运动控制器专注精确运动轴控制',
        'PLC适用于简单运动控制场景',
        '传送带启停等基础控制应用'
      ],
      icon: Target
    },
    {
      name: 'PLC安全强化',
      description: '系统安全保障措施',
      capabilities: [
        '冗余模块配置实现主备故障切换',
        '数据安全中的加密存储技术',
        '访问控制与权限管理'
      ],
      icon: Shield
    }
  ];

  const keyTools = [
    {
      name: 'TIA Portal软件操作',
      description: '西门子自动化工程软件使用',
      capabilities: [
        '创建项目与硬件组态',
        '编写梯形图程序',
        '程序下载及在线调试'
      ],
      icon: Settings
    },
    {
      name: '梯形图基础指令应用',
      description: '常用PLC编程指令',
      capabilities: [
        '常开触点、常闭触点、线圈等基础指令',
        '启保停、定时、计数等编程范式',
        '基本逻辑控制程序编写'
      ],
      icon: BookOpen
    }
  ];

  const importantContent = [
    {
      category: 'PLC分类与对比',
      items: [
        'DCS：适用于过程控制和连续生产',
        '工控机：适用于复杂运算和数据处理',
        '单片机：适用于简单嵌入式控制',
        '运动控制器：适用于精确运动控制'
      ]
    },
    {
      category: 'PLC硬件组成',
      items: [
        'CPU模块：核心运算处理',
        '电源模块(PS)：提供稳定电源',
        '信号模块(SM)：接收传感器信号与驱动执行器',
        '功能模块(FM)：执行特定任务',
        '接口模块(IM)：连接多机架实现I/O扩展',
        '通信处理器(CP)：支持工业协议'
      ]
    },
    {
      category: '电气接线操作',
      items: [
        '数字量输入连接按钮等设备',
        '模拟量输入连接传感器',
        '输出连接执行元件的步骤',
        '接线端子的正确连接方法'
      ]
    },
    {
      category: 'PLC安全措施实施',
      items: [
        '电气安全：接地、绝缘、过流保护',
        '功能安全：故障安全设计、程序可靠性',
        '数据安全：加密、访问控制、备份',
        '安全规范与操作规程'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* 页面标题 */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            课程总结
          </motion.h1>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            通过本课程的学习，您已经掌握了PLC控制系统的核心知识和实践技能
          </motion.p>

          {/* 完成进度条 */}
          <motion.div 
            className="mt-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="bg-white/10 rounded-full h-4 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-500 to-teal-500"
                initial={{ width: '0%' }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-white/60 text-sm mt-2">课程完成度 {completionPercentage}%</p>
          </motion.div>
        </motion.div>

        {/* 核心理论与关键方法论 */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">核心理论与关键方法论</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {coreTheories.map((theory, index) => {
              const Icon = theory.icon;
              return (
                <motion.div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${theory.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
              </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{theory.title}</h3>
                      <p className="text-white/70 text-sm">{theory.description}</p>
                      <AnimatePresence>
                        {(showAllContent || selectedTheory === index) && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 space-y-2"
                          >
                            {theory.points.map((point, i) => (
                              <li key={i} className="flex items-start text-sm text-white/60">
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
                </div>
        </motion.section>

        {/* 独特性或前沿性知识点技能点 */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">独特性或前沿性知识点技能点</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {uniqueFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start text-sm text-white/60">
                        <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* 关键工具操作技能 */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">关键工具操作技能</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {keyTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{tool.description}</p>
                  <ul className="space-y-2">
                    {tool.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start text-sm text-white/60">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
        </div>
        </motion.section>

        {/* 重点学习内容 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">重点学习内容</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {importantContent.map((content, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{content.category}</h3>
                <ul className="space-y-3">
                  {content.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 前往课堂测试按钮 */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.8 }}
        >
          <Link 
            to="/course-test" 
            className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold hover:from-green-500 hover:to-teal-500 transition-colors"
          >
            <span>前往课堂测试</span>
            <Award className="w-5 h-5 ml-2" />
              </Link>
        </motion.div>
            </div>
          </div>
  );
};

export default CourseSummaryPage;
