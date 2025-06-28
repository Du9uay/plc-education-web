import React from 'react';
import { Link } from 'react-router-dom';
import LiquidGlass from '../components/LiquidGlass';
import { 
  Target,
  CheckCircle,
  BookOpen,
  Settings,
  Zap,
  ArrowRight
} from '../components/Icons';

const ObjectivesPage: React.FC = () => {
  const objectives = [
    {
      title: '工业控制器认知能力',
      description: '掌握工业控制器分类及适用场景，熟悉离散制造、过程控制等生产流程，具有通过查阅资料了解PLC、DCS、SCADA等不同工业控制器特点及适用场景的能力',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-blue-400 to-cyan-600',
      skills: ['PLC vs DCS vs SCADA对比', '离散制造与过程控制', '工业控制器选型'],
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: 'PLC发展历程理解',
      description: '掌握PLC发展历程相关知识，熟悉PLC从第一代到第三代的功能演变流程，具有利用教材等资料梳理PLC发展各阶段特点的能力',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-green-400 to-blue-600',
      skills: ['PLC三代发展历程', '各阶段功能特点', '技术演进理解'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: 'PLC硬件与接线技能',
      description: '掌握PLC硬件组成及I/O接线规范，熟悉PLC最小系统由CPU、电源和I/O模块构成，具有使用工具进行两线制、三线制传感器I/O接线以及熔断器选型、继电器隔离操作的能力',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-600',
      skills: ['PLC硬件最小系统', '两线制三线制接线', '熔断器选型规范', '继电器隔离设计'],
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: '梯形图编程能力',
      description: '掌握梯形图编程基础指令及编程范式，熟悉起保停电路、电气与机械互锁等编程范式，具有使用TIA Portal软件进行梯形图编写的能力',
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-600',
      skills: ['五大基础指令', '起保停电路', '电气机械互锁', 'TIA Portal编程'],
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: '电气安全与编程安全',
      description: '掌握电气安全与编程安全相关知识，熟悉漏电保护电路设计、急停梯形图设计要求，具有运用相关知识设计急停梯形图并避免编程中双线圈冲突的能力',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-red-400 to-pink-600',
      skills: ['漏电保护原理', '安全电压等级', '急停梯形图设计', '双线圈冲突避免'],
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=300&h=200&fit=crop&auto=format'
    }
  ];

  return (
    <main className="relative z-10 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* 背景图片 */}
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=600&fit=crop&auto=format)'
            }}
          ></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              课程学习目标
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              通过本课程学习，学生将全面掌握PLC控制技术的核心知识与技能，具备工业自动化项目开发的基础能力
            </p>
            
            {/* 技能展示图片 */}
            <div className="flex justify-center mb-6">
              <div className="grid grid-cols-4 gap-2 max-w-lg">
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=120&h=80&fit=crop&auto=format"
                  alt="工业认知"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=80&fit=crop&auto=format"
                  alt="技术发展"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=120&h=80&fit=crop&auto=format"
                  alt="实操技能"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=120&h=80&fit=crop&auto=format"
                  alt="编程应用"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Objectives */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">核心能力目标</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            五大核心能力培养，构建完整的PLC技术知识体系
          </p>
        </div>

        <div className="space-y-8">
          {objectives.map((objective, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* 目标图片 */}
                <div className="lg:w-1/3">
                  <div className="relative h-48 lg:h-full">
                    <img 
                      src={objective.image}
                      alt={objective.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${objective.color} rounded-lg flex items-center justify-center`}>
                        {objective.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-blue-300 text-sm bg-blue-900/70 backdrop-blur-sm rounded-full px-3 py-1">
                        目标 {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* 目标内容 */}
                <div className="lg:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {objective.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">
                    {objective.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold mb-3">具体技能点：</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {objective.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-white/90 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assessment Standards */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">课程权重分配</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=150&h=100&fit=crop&auto=format"
                  alt="课程学习"
                  className="w-full h-20 object-cover rounded-lg mx-auto mb-2"
                />
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto -mt-8 relative z-10">
                  <span className="text-white text-lg font-bold">70%</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">课程内容详解</h3>
              <p className="text-white/70 text-sm">六大模块核心知识学习</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=100&fit=crop&auto=format"
                  alt="目标认知"
                  className="w-full h-20 object-cover rounded-lg mx-auto mb-2"
                />
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto -mt-8 relative z-10">
                  <span className="text-white text-lg font-bold">15%</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">目标与认知</h3>
              <p className="text-white/70 text-sm">学习目标、岗位认知等</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=150&h=100&fit=crop&auto=format"
                  alt="测试评估"
                  className="w-full h-20 object-cover rounded-lg mx-auto mb-2"
                />
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto -mt-8 relative z-10">
                  <span className="text-white text-lg font-bold">15%</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">总结与测试</h3>
              <p className="text-white/70 text-sm">课程总结和课堂测试</p>
            </div>
          </div>
        </div>
      </section>

      {/* 行动引导 */}
      <section>
        <LiquidGlass
          displacementScale={60}
          blurAmount={0.1}
          saturation={140}
          cornerRadius={20}
          className="p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            准备好开始学习了吗？
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            让我们从自动化行业的基本构成开始，逐步建立完整的PLC知识体系。
          </p>
          
          {/* 学习路径图示 */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=150&fit=crop&auto=format"
              alt="学习开始"
              className="rounded-lg opacity-70"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <LiquidGlass
              displacementScale={40}
              blurAmount={0.05}
              saturation={150}
              cornerRadius={50}
              className="inline-block"
            >
              <Link to="/course/automation-industry" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>开始学习第一章</span>
              </Link>
            </LiquidGlass>
            <LiquidGlass
              displacementScale={40}
              blurAmount={0.05}
              saturation={150}
              cornerRadius={50}
              className="inline-block"
            >
              <Link to="/careers" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>了解职业发展</span>
              </Link>
            </LiquidGlass>
          </div>
        </LiquidGlass>
      </section>
    </main>
  );
};

export default ObjectivesPage; 