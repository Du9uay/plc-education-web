import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
// import LiquidGlass from '../components/LiquidGlass';
import { 
  Target,
  CheckCircle,
  BookOpen,
  Settings,
  Zap,
  // ArrowRight,
  Cpu,
  Network
  // Code,
  // Shield
} from '../components/Icons';

const ObjectivesPage: React.FC = () => {
  // const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [skillProgress, setSkillProgress] = useState<number[]>([]);
  // const controls = useAnimation();

  useEffect(() => {
    // 模拟进度条动画
    const timer = setTimeout(() => {
      setSkillProgress([100, 100, 100, 100, 100, 100]);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const learningObjectives = [
    {
      title: 'PLC系统认知与比较分析',
      description: '掌握PLC与DCS、工控机、单片机、运动控制器在应用场景和功能上的区别，熟悉离散型工业生产中PLC的应用流程。',
      capabilities: [
        '使用相关资料对比分析不同控制器特点',
        '在小型包装机械控制场景中区分PLC与其他控制器作用'
      ],
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      backInfo: '通过实际案例分析，你将能够在复杂的工业环境中准确识别PLC的最佳应用场景，并为客户提供专业的技术建议。'
    },
    {
      title: 'PLC硬件组成与配置',
      description: '掌握PLC硬件组成中CPU模块、电源模块、I/O模块的功能，熟悉简单自动化设备的硬件连接生产流程。',
      capabilities: [
        '使用TIA Portal软件进行硬件组态',
        '添加CPU、电源、I/O模块并设置参数'
      ],
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      backInfo: '掌握硬件配置技能后，你将能够独立完成中小型自动化项目的硬件选型和系统设计，胜任自动化工程师职位。'
    },
    {
      title: 'PLC程序开发流程',
      description: '掌握PLC程序开发的需求分析、硬件组态、编程、编译、下载、调试等流程，熟悉汽车零部件冲压生产线等离散制造中的程序开发流程。',
      capabilities: [
        '使用TIA Portal等编程软件编写简单梯形图程序',
        '进行编译、下载和调试操作'
      ],
      icon: Zap,
      color: 'from-green-500 to-teal-500',
      backInfo: '完整的程序开发能力是PLC工程师的核心竞争力，这将使你能够从零开始完成自动化项目的程序开发工作。'
    },
    {
      title: 'TIA Portal软件操作',
      description: '掌握TIA Portal软件创建项目、硬件组态、编写梯形图程序、下载程序及在线调试的操作，熟悉自动化项目开发中软件操作的生产流程。',
      capabilities: [
        '熟练使用TIA Portal软件进行自动化项目从创建到调试全过程操作',
        '掌握梯形图编程语言的基本指令和编程模式'
      ],
      icon: Network,
      color: 'from-orange-500 to-red-500',
      backInfo: 'TIA Portal是西门子自动化的核心工具，熟练掌握后你将在西门子产品相关的项目中具有显著优势。'
    },
    {
      title: 'PLC安全保障措施',
      description: '掌握PLC电气安全、功能安全、数据安全的实施步骤，熟悉工业生产中PLC安全保障的生产流程。',
      capabilities: [
        '使用绝缘电阻测试仪检测电气线路绝缘电阻',
        '进行PLC冗余模块配置、数据加密存储等安全措施实施'
      ],
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      backInfo: '安全技能是工业自动化的基础要求，这些知识将确保你在工业现场工作时的人身安全和设备安全。'
    }
  ];

  const coreSkills = [
    { text: '理解PLC在工业自动化中实现自动化控制、提升生产效率的基本作用', level: 85 },
    { text: '具备区分不同控制器适用场景，合理选择PLC应用的能力', level: 90 },
    { text: '掌握PLC硬件组成及各模块功能特点', level: 88 },
    { text: '熟练进行电气接线和信号识别操作', level: 92 },
    { text: '具备独立完成PLC程序开发与调试的能力', level: 86 },
    { text: '掌握工业安全规范和PLC安全防护措施', level: 89 }
  ];

  // const handleCardFlip = (index: number) => {
  //   setFlippedCards(prev => 
  //     prev.includes(index) 
  //       ? prev.filter(i => i !== index)
  //       : [...prev, index]
  //   );
  // };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: '100%',
      transition: {
        duration: 2,
        ease: "easeInOut" as const,
        delay: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring" as const,
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          >
            <Target className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
              课程学习目标
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            通过本课程学习，学员将全面掌握PLC技术核心知识，具备在工业自动化领域独立工作的能力
          </motion.p>
        </motion.div>
            
        {/* 学习目标详细说明 - 卡片翻转效果 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            详细学习目标
          </motion.h2>

        <div className="space-y-8">
            {learningObjectives.map((objective, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="flex items-start">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${objective.color} flex items-center justify-center flex-shrink-0`}>
                    <objective.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">{objective.title}</h3>
                    <p className="text-white/90 mb-4">{objective.description}</p>
                  <div className="space-y-2">
                      {objective.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-white/80">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
        </motion.div>

        {/* 核心技能总结 - 进度条动画 */}
        <motion.div 
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            核心技能掌握
          </motion.h2>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              borderColor: "rgba(255, 255, 255, 0.3)"
            }}
          >
            <motion.p 
              className="text-xl text-gray-300 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              完成本课程学习后，你将具备以下核心技能：
            </motion.p>
            
            <div className="space-y-6">
              {coreSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 bg-white/5 rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                      <span className="text-gray-300 leading-relaxed flex-1">
                        {skill.text}
                      </span>
              </div>
                    <motion.span 
                      className="text-blue-300 font-semibold ml-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skillProgress[index] || 0}%
                    </motion.span>
                </div>
                
                  {/* 进度条 */}
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={skill.level}
                      viewport={{ once: true }}
                    />
                </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 学习指引 - 弹簧动画 */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring" as const, 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.3)"
          }}
        >
          {/* 背景动画效果 */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{ 
              background: [
                "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 70% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 50% 70%, rgba(34, 197, 94, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          
          <motion.h2 
            className="text-3xl font-bold text-white mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            准备开始学习？
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照课程模块顺序学习，每个模块都会帮助你达成相应的学习目标
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/careers"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg inline-block"
              >
                了解职业前景
              </Link>
            </motion.div>
            

          </motion.div>
        </motion.div>
      </div>
          </div>
  );
};

export default ObjectivesPage; 