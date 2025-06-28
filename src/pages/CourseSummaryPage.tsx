import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CheckCircle, 
  Award, 
  Target,
  Settings,
  Cpu,
  Zap,
  Monitor,
  ArrowRight
} from '../components/Icons';

const CourseSummaryPage: React.FC = () => {
  const basicKnowledge = [
    {
      title: '工业控制器分类与适用场景',
      description: 'PLC适用于离散制造，DCS用于过程控制，SCADA用于远程监控',
      icon: <Settings className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=200&h=120&fit=crop&auto=format'
    },
    {
      title: 'PLC发展历程',
      description: '经历三代，各代在功能、性能上逐步提升，从简单逻辑控制到支持复杂运动控制与远程监控',
      icon: <BookOpen className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=120&fit=crop&auto=format'
    },
    {
      title: 'PLC硬件组成',
      description: '最小系统由CPU、电源和I/O模块构成，DI/DO点数需根据实际需求估算',
      icon: <Cpu className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&h=120&fit=crop&auto=format'
    },
    {
      title: 'I/O接线规范',
      description: '两线制、三线制传感器接线有不同要求，涉及熔断器选型与继电器隔离',
      icon: <Zap className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=200&h=120&fit=crop&auto=format'
    },
    {
      title: '梯形图编程基础',
      description: '包含五大基础指令、起保停电路、电气与机械互锁等编程范式',
      icon: <Monitor className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=120&fit=crop&auto=format'
    },
    {
      title: 'TIA Portal操作',
      description: '工程创建、梯形图编写、下载监控、变量强制修改及CPU状态指示灯诊断等调试技能',
      icon: <Target className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=200&h=120&fit=crop&auto=format'
    },
    {
      title: '电气安全与编程安全',
      description: '漏电保护原理、安全电压等级，编程中双线圈冲突禁忌与急停梯形图设计要求',
      icon: <Award className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=200&h=120&fit=crop&auto=format'
    }
  ];

  const importantKnowledge = [
    {
      title: '工业控制器对比',
      content: '不同控制器的适用场景、功能特点与性能指标对比，如PLC用于离散制造的逻辑控制',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: 'PLC核心特性与原理',
      content: '高可靠性（硬件冗余、软件容错）、实时性（扫描循环流程）及工作原理',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: 'I/O点数估算与接线',
      content: 'DI/DO点数估算方法，两线制、三线制传感器接线规范，熔断器选型与继电器隔离应用',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: '梯形图编程技能',
      content: '基础指令应用，起保停电路、电气与机械互锁编程，TIA Portal程序编写与调试',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&auto=format'
    },
    {
      title: '电气安全与编程安全实践',
      content: '漏电保护电路设计、急停梯形图设计，编程中双线圈冲突避免',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=300&h=200&fit=crop&auto=format'
    }
  ];

  const coreTheory = [
    {
      title: 'PLC工作原理',
      description: '扫描循环流程（内部处理、输入采样、程序执行、输出刷新）',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: '梯形图编程范式',
      description: '起保停电路构建（启动、保持、停止逻辑）、电气与机械互锁实现方法',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: '程序调试方法',
      description: '变量强制修改、CPU状态指示灯诊断，用于验证程序逻辑正确性',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: '电气系统设计方法论',
      description: '漏电保护电路设计步骤、急停梯形图设计规范',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const uniqueContent = [
    {
      title: '中国PLC市场格局',
      description: '外资品牌主导，国内品牌不断突围但高端市场占有率低的竞争现状',
      highlight: '前沿性内容'
    },
    {
      title: '安全强化模块',
      description: '急停电路独立硬接线设计及编程禁忌，突出工业安全的特殊要求',
      highlight: '独特性内容'
    }
  ];

  const keyLearning = [
    {
      title: 'PLC应用场景',
      areas: ['离散制造', '过程控制', '基础设施'],
      description: '三大场景中PLC的具体应用'
    },
    {
      title: '硬件接线实操',
      areas: ['I/O接线', '熔断器选型', '继电器隔离'],
      description: '操作步骤与规范'
    },
    {
      title: '梯形图编程',
      areas: ['基础指令运用', '起保停电路', '互锁编程', 'TIA Portal'],
      description: '程序编写与调试'
    },
    {
      title: '电气安全与编程安全',
      areas: ['漏电保护电路', '急停梯形图', '双线圈冲突避免'],
      description: '安全设计原则'
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
              课程内容总结
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              系统梳理PLC控制器基础课程的核心知识点，构建完整的技术知识体系
            </p>
            
            {/* 课程成果展示图片 */}
            <div className="flex justify-center mb-6">
              <div className="grid grid-cols-4 gap-2 max-w-lg">
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=120&h=80&fit=crop&auto=format"
                  alt="工业应用"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=120&h=80&fit=crop&auto=format"
                  alt="程序编写"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=120&h=80&fit=crop&auto=format"
                  alt="硬件操作"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=80&fit=crop&auto=format"
                  alt="调试应用"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 基础知识点 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">基础知识点</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            七大基础知识模块，构建PLC技术理论基础
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {basicKnowledge.map((knowledge, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
              {/* 知识点图片 */}
              <div className="relative h-32">
                <img 
                  src={knowledge.image}
                  alt={knowledge.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    {knowledge.icon}
                  </div>
                </div>
              </div>
              
              {/* 知识点内容 */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  {knowledge.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {knowledge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 重要知识点 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">重要知识点</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            五大重要技能领域，深化PLC应用能力
          </p>
        </div>

        <div className="space-y-6">
          {importantKnowledge.map((knowledge, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* 知识点图片 */}
                <div className="lg:w-1/3">
                  <div className="relative h-48 lg:h-full">
                    <img 
                      src={knowledge.image}
                      alt={knowledge.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg font-bold">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 知识点内容 */}
                <div className="lg:w-2/3 p-8">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {knowledge.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {knowledge.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 核心理论与方法论 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">核心理论与方法论</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            四大核心理论体系，指导实际工程应用
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {coreTheory.map((theory, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  {theory.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {theory.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {theory.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 独特性与前沿性内容 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">独特性与前沿性内容</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            紧跟行业发展，突出课程特色
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {uniqueContent.map((content, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {content.title}
                    </h3>
                    <span className="text-orange-300 text-sm bg-orange-900/20 rounded-full px-3 py-1">
                      {content.highlight}
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {content.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 重点学习内容 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">重点学习内容</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            四大重点学习领域，突出实践应用能力
          </p>
        </div>

        <div className="space-y-8">
          {keyLearning.map((learning, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {learning.title}
                  </h3>
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {learning.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {learning.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="bg-indigo-900/20 border border-indigo-400/20 rounded-lg px-3 py-2">
                        <span className="text-indigo-300 text-sm font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 课程权重总结 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">课程权重分配总结</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg font-bold">70%</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">课程内容详解</h3>
              <p className="text-white/70 text-sm">六大模块核心知识</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg font-bold">10%</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">课程总结</h3>
              <p className="text-white/70 text-sm">知识点梳理</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg font-bold">5%</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">课程概述</h3>
              <p className="text-white/70 text-sm">整体框架介绍</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg font-bold">10%</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">目标与岗位</h3>
              <p className="text-white/70 text-sm">学习目标与职业发展</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg font-bold">5%</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">课堂测试</h3>
              <p className="text-white/70 text-sm">知识点验证</p>
            </div>
          </div>
        </div>
      </section>

      {/* 学习建议 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            后续学习建议
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            继续深化PLC技术学习，通过实践项目提升专业技能，为职业发展做好准备
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/test" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <CheckCircle className="w-5 h-5" />
                <span>进行课堂测试</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/resources" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>查看学习资源</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseSummaryPage;
