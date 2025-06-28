import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Cpu,
  Settings,
  Monitor,
  Zap
} from '../components/Icons';

const HomePage: React.FC = () => {
  const stats = [
    { label: '学习模块', value: '6个', icon: <BookOpen className="w-6 h-6" /> },
    { label: '学习时长', value: '90分钟', icon: <Clock className="w-6 h-6" /> },
    { label: '知识点', value: '30+项', icon: <Target className="w-6 h-6" /> },
    { label: '应用场景', value: '5类', icon: <Users className="w-6 h-6" /> }
  ];

  const modules = [
    {
      title: '模块1：PLC行业认知与基础框架',
      description: '学习工业控制器分类、PLC发展历史、品牌竞争格局和典型应用场景',
      icon: <Settings className="w-8 h-8" />,
      path: '/course/automation-industry',
      color: 'from-blue-400 to-cyan-600',
      difficulty: '基础',
      duration: '15分钟',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=250&fit=crop&auto=format'
    },
    {
      title: '模块2：PLC核心定位与硬件基础', 
      description: '掌握PLC高可靠性与实时性特性、扫描循环原理和硬件最小系统',
      icon: <Cpu className="w-8 h-8" />,
      path: '/course/plc-basics',
      color: 'from-green-400 to-blue-600',
      difficulty: '重点',
      duration: '15分钟',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=250&fit=crop&auto=format'
    },
    {
      title: '模块3：电气接线与信号认知',
      description: '学习I/O接线规范、两线制三线制传感器接线和信号类型辨析',
      icon: <Zap className="w-8 h-8" />,
      path: '/course/io-wiring',
      color: 'from-yellow-400 to-orange-600',
      difficulty: '实操',
      duration: '15分钟',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&h=250&fit=crop&auto=format'
    },
    {
      title: '模块4：梯形图编程',
      description: '掌握五大基础指令、起保停电路构建和电气机械互锁实现',
      icon: <Monitor className="w-8 h-8" />,
      path: '/course/ladder-diagram',
      color: 'from-purple-400 to-pink-600',
      difficulty: '核心',
      duration: '20分钟',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&auto=format'
    },
    {
      title: '模块5：程序开发与调试',
      description: '熟练使用TIA Portal进行工程创建、程序编写和调试技能',
      icon: <Target className="w-8 h-8" />,
      path: '/course/tia-portal',
      color: 'from-indigo-400 to-purple-600',
      difficulty: '实操',
      duration: '15分钟',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop&auto=format'
    },
    {
      title: '模块6：安全强化模块',
      description: '强化电气安全与编程安全知识，掌握漏电保护和急停设计',
      icon: <Award className="w-8 h-8" />,
      path: '/course/safety',
      color: 'from-red-400 to-pink-600',
      difficulty: '重要',
      duration: '10分钟',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=250&fit=crop&auto=format'
    }
  ];

  return (
    <main className="relative z-10 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Hero背景图片 */}
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=600&fit=crop&auto=format)'
            }}
          ></div>
          
          {/* Hero内容 */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              PLC控制器基础
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              从零开始学习PLC控制技术，掌握自动化行业核心技能，开启工业4.0职业发展之路
            </p>
            
            {/* PLC设备图片展示 */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-3 gap-4 max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=150&h=100&fit=crop&auto=format" 
                  alt="PLC控制器"
                  className="rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=150&h=100&fit=crop&auto=format" 
                  alt="工业控制面板"
                  className="rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=150&h=100&fit=crop&auto=format" 
                  alt="电气接线"
                  className="rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
                <Link to="/course/automation-industry" className="px-8 py-4 text-white font-semibold flex items-center space-x-2 hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                  <span>开始学习</span>
                </Link>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
                <Link to="/objectives" className="px-8 py-4 text-white font-semibold flex items-center space-x-2 hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                  <span>学习目标</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Content Overview */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">课程内容概述</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">🏭 PLC行业认知与基础框架</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                工业控制器的定义、核心作用、分类对比及PLC的发展历史、主要品牌、中国竞争格局和典型应用场景认知
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">🔧 PLC核心定位与硬件基础</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                PLC的高可靠性与实时性核心特性、扫描循环工作原理、硬件最小系统的CPU、电源、I/O模块组成及急停电路独立硬接线的安全规范基础
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">⚡ 电气接线与信号认知</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                I/O接线的两线制/三线制传感器接线规范、熔断器选型原则、继电器隔离方法及数字信号状态判定阈值和模拟信号概念辨析
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">📋 梯形图编程</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                梯形图编程的常开触点、常闭触点、输出线圈、TON定时器、计数器五大基础指令，起保停电路构建及电气与机械互锁的实现方式
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">💻 程序开发与调试</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                TIA Portal工程创建、梯形图编写、下载监控的基础操作，以及变量强制修改和CPU状态指示灯诊断的调试技能
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">🛡️ 安全强化模块</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                漏电保护原理、安全电压等级的电气安全知识，双线圈冲突后果及急停梯形图设计禁忌的编程安全内容
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">学习模块</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            系统性学习PLC控制技术，从基础概念到实际应用，培养工业自动化核心能力
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* 模块图片 */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="text-blue-300 text-sm bg-blue-900/70 backdrop-blur-sm rounded px-2 py-1 mb-1">
                    {module.difficulty}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center`}>
                    {module.icon}
                  </div>
                </div>
              </div>
              
              {/* 模块内容 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {module.title}
                  </h3>
                  <div className="text-white/60 text-xs">
                    {module.duration}
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {module.description}
                </p>
                
                <Link 
                  to={module.path}
                  className="w-full bg-gradient-to-r from-white/10 to-white/20 border border-white/20 rounded-lg py-3 px-4 text-white font-medium hover:from-white/20 hover:to-white/30 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>进入学习</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">学习路径推荐</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=200&h=120&fit=crop&auto=format"
                  alt="理论学习"
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto -mt-8 relative z-10">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">理论基础</h3>
              <p className="text-white/70 text-sm">
                学习自动化行业认知和PLC核心定位，建立扎实的理论基础
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1621905252472-365c7bb9ae50?w=200&h=120&fit=crop&auto=format"
                  alt="实践操作"
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto -mt-8 relative z-10">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">实践技能</h3>
              <p className="text-white/70 text-sm">
                掌握电气接线和梯形图编程，培养实际操作能力
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=200&h=120&fit=crop&auto=format"
                  alt="综合应用"
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto -mt-8 relative z-10">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">综合应用</h3>
              <p className="text-white/70 text-sm">
                学习TIA Portal操作和安全规范，形成完整的应用能力
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/objectives" className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">学习目标</h3>
                <p className="text-white/70 text-sm">了解课程学习目标和能力要求</p>
              </div>
            </div>
          </Link>
          
          <Link to="/careers" className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">职业发展</h3>
                <p className="text-white/70 text-sm">探索PLC技能的职业发展路径</p>
              </div>
            </div>
          </Link>
          
          <Link to="/test" className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">课堂测试</h3>
                <p className="text-white/70 text-sm">检验学习成果和知识掌握</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
  };
  
export default HomePage; 