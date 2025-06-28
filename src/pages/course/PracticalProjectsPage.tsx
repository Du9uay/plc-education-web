import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings,
  Cpu,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Eye,
  Monitor
} from '../../components/Icons';

const PracticalProjectsPage: React.FC = () => {
  const beginnerProjects = [
    {
      title: "LED流水灯控制",
      difficulty: "初级",
      duration: "1-2小时",
      description: "使用PLC控制8个LED灯实现不同的流水灯效果",
      objectives: [
        "熟悉基本输出控制",
        "掌握定时器指令使用",
        "理解程序扫描原理",
        "学会在线监控调试"
      ],
      hardware: [
        "PLC主机（CPU 1214C）",
        "LED指示灯模块 × 8",
        "24V电源",
        "接线端子排"
      ],
      steps: [
        "硬件接线：连接LED模块到PLC输出端",
        "程序编写：使用TON定时器实现循环控制",
        "下载调试：程序下载和在线监控",
        "效果验证：观察不同流水灯模式"
      ],
      skills: "输出控制、定时器应用、程序调试",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "电机启停控制",
      difficulty: "初级",
      duration: "2-3小时", 
      description: "实现三相异步电机的点动、连续运行控制",
      objectives: [
        "掌握电机控制原理",
        "学会按钮输入处理",
        "理解互锁逻辑设计",
        "熟悉故障保护机制"
      ],
      hardware: [
        "PLC主机（CPU 1214C）",
        "交流接触器KM1",
        "启动按钮SB1（常开）",
        "停止按钮SB2（常闭）",
        "三相异步电机"
      ],
      steps: [
        "控制回路设计：绘制电气原理图",
        "硬件连接：按图纸连接控制电路",
        "程序编写：实现启动、停止、自锁逻辑",
        "安全测试：验证急停和保护功能"
      ],
      skills: "输入处理、逻辑控制、电机原理、安全设计",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "交通灯控制系统",
      difficulty: "初中级",
      duration: "3-4小时",
      description: "模拟十字路口交通信号灯的自动控制",
      objectives: [
        "设计复杂时序控制",
        "实现多状态切换",
        "掌握计数器应用",
        "理解实时控制概念"
      ],
      hardware: [
        "PLC主机（CPU 1214C）",
        "红绿黄LED灯各4个",
        "数码管显示器2个",
        "手动/自动切换开关",
        "紧急控制按钮"
      ],
      steps: [
        "需求分析：确定交通灯切换时序",
        "状态设计：设计交通灯状态转换图",
        "程序实现：编写定时切换程序",
        "功能扩展：添加倒计时显示功能"
      ],
      skills: "状态机设计、定时控制、显示控制、中断处理",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const intermediateProjects = [
    {
      title: "温度控制系统",
      difficulty: "中级",
      duration: "1-2天",
      description: "基于PID算法的温度闭环控制系统",
      objectives: [
        "理解模拟量处理",
        "掌握PID控制原理",
        "学会数据采集存储",
        "实现上位机通信"
      ],
      hardware: [
        "PLC主机（CPU 1214C）",
        "模拟量输入模块SM1231",
        "模拟量输出模块SM1232",
        "温度传感器PT100",
        "加热器和风扇",
        "触摸屏HMI"
      ],
      programming: [
        "模拟量标定和线性化处理",
        "PID参数整定和算法实现",
        "温度曲线记录和显示",
        "报警处理和安全保护"
      ],
      skills: "模拟量处理、PID控制、HMI设计、数据记录",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "传送带分拣系统",
      difficulty: "中级",
      duration: "2-3天",
      description: "基于传感器的自动分拣控制系统",
      objectives: [
        "设计多工位协调控制",
        "实现物料检测分类",
        "掌握高速计数应用",
        "学会故障诊断设计"
      ],
      hardware: [
        "PLC主机（CPU 1215C）",
        "变频器和传送带电机",
        "光电传感器4个",
        "颜色传感器1个",
        "气动分拣装置2套",
        "编码器和计数模块"
      ],
      programming: [
        "多传感器信号处理和滤波",
        "物料检测和分类逻辑",
        "传送带速度闭环控制",
        "分拣动作时序协调"
      ],
      skills: "传感器应用、变频控制、气动控制、时序设计",
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const advancedProjects = [
    {
      title: "柔性制造单元",
      difficulty: "高级",
      duration: "1-2周",
      description: "集成工业机器人的智能制造系统",
      features: [
        "多PLC分布式控制架构",
        "工业机器人协调控制",
        "MES制造执行系统集成",
        "预测性维护算法"
      ],
      technologies: [
        "PROFINET工业以太网",
        "OPC UA通信协议",
        "SQLite数据库",
        "Python数据分析"
      ],
      challenges: [
        "多设备实时同步",
        "生产数据采集分析",
        "异常处理和恢复",
        "人机安全协作"
      ],
      skills: "系统集成、网络通信、数据分析、项目管理"
    },
    {
      title: "智能立体仓库",
      difficulty: "高级", 
      duration: "2-3周",
      description: "全自动化的立体仓储管理系统",
      features: [
        "AGV自动导引车调度",
        "RFID物料全程追踪",
        "WMS仓储管理软件",
        "3D可视化监控界面"
      ],
      technologies: [
        "多PLC网络架构",
        "无线通信技术",
        "云平台数据同步",
        "Web可视化技术"
      ],
      challenges: [
        "路径规划优化算法",
        "库存动态平衡管理",
        "设备故障预测维护",
        "系统性能优化调试"
      ],
      skills: "算法设计、云计算、大数据、人工智能"
    }
  ];

  const practicalSkills = [
    {
      category: "硬件技能",
      skills: [
        "电气原理图设计和识读",
        "PLC硬件选型和配置",
        "传感器选择和安装调试",
        "电气安装和接线规范",
        "仪器仪表使用和校准",
        "故障诊断和维修技能"
      ],
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-600"
    },
    {
      category: "软件技能",
      skills: [
        "PLC编程软件熟练使用",
        "HMI界面设计和开发",
        "网络通信配置和调试",
        "数据库应用和管理",
        "上位机软件开发",
        "系统集成和测试"
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-400 to-teal-600"
    },
    {
      category: "管理技能",
      skills: [
        "项目计划制定和执行",
        "技术文档编写和管理",
        "团队协作和沟通技能",
        "客户需求分析和方案设计",
        "质量控制和改进",
        "成本控制和预算管理"
      ],
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-400 to-pink-600"
    }
  ];

  return (
    <main className="relative z-10 py-8">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Settings className="w-8 h-8 text-green-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">实践项目与技能培养</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            通过循序渐进的实践项目，全面提升PLC应用技能，从基础控制到复杂系统集成。
          </p>
        </div>
      </section>

      {/* 初级项目 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" />
            基础控制项目（初级）
          </h2>
          <p className="text-white/80">
            从简单的输入输出控制开始，建立PLC编程的基础概念和实践能力。
          </p>
        </div>

        <div className="space-y-8">
          {beginnerProjects.map((project, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2 mb-2">
                        <span className="text-green-300 text-sm bg-green-900/20 rounded px-2 py-1">
                          {project.difficulty}
                        </span>
                        <span className="text-blue-300 text-sm bg-blue-900/20 rounded px-2 py-1">
                          {project.duration}
                        </span>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-900/20 rounded-lg p-4">
                    <h4 className="text-purple-300 font-medium mb-2">核心技能</h4>
                    <p className="text-purple-200 text-sm">{project.skills}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">学习目标</h4>
                      <div className="space-y-2">
                        {project.objectives.map((objective, objIndex) => (
                          <div key={objIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">实施步骤</h4>
                      <div className="space-y-2">
                        {project.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <span className="text-white/80 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-3">硬件清单</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.hardware.map((item, itemIndex) => (
                        <div key={itemIndex} className="text-white/60 text-sm bg-white/5 rounded px-3 py-2">
                          {item}
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

      {/* 中级项目 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Monitor className="w-6 h-6 mr-3 text-orange-400" />
            系统集成项目（中级）
          </h2>
          <p className="text-white/80">
            结合多种设备和技术，实现更复杂的自动化控制系统。
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {intermediateProjects.map((project, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <div className="text-orange-300 text-sm bg-orange-900/20 rounded px-3 py-1">
                      {project.difficulty}
                    </div>
                    <div className="text-green-300 text-sm bg-green-900/20 rounded px-3 py-1">
                      {project.duration}
                    </div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  {project.icon}
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">学习目标</h4>
                  <div className="space-y-2">
                    {project.objectives.map((objective, objIndex) => (
                      <div key={objIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">硬件配置</h4>
                  <div className="space-y-2">
                    {project.hardware.map((hw, hwIndex) => (
                      <div key={hwIndex} className="text-green-300 text-sm bg-green-900/10 rounded px-2 py-1">
                        {hw}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">编程要点</h4>
                  <div className="space-y-2">
                    {project.programming.map((prog, progIndex) => (
                      <div key={progIndex} className="text-purple-300 text-sm bg-purple-900/10 rounded px-2 py-1">
                        {prog}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-900/20 rounded-lg p-4">
                <h4 className="text-yellow-300 font-medium mb-2">重点技能</h4>
                <p className="text-yellow-200 text-sm">{project.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 高级项目 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-purple-400" />
            智能制造项目（高级）
          </h2>
          <p className="text-white/80">
            面向工业4.0的智能制造系统，集成前沿技术的综合应用项目。
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {advancedProjects.map((project, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <div className="text-purple-300 text-sm bg-purple-900/20 rounded px-3 py-1">
                      {project.difficulty}
                    </div>
                    <div className="text-red-300 text-sm bg-red-900/20 rounded px-3 py-1">
                      {project.duration}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">系统特色</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-blue-300 text-sm bg-blue-900/10 rounded px-2 py-1">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">核心技术</h4>
                  <div className="space-y-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="text-green-300 text-sm bg-green-900/10 rounded px-2 py-1">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">技术挑战</h4>
                  <div className="space-y-2">
                    {project.challenges.map((challenge, challengeIndex) => (
                      <div key={challengeIndex} className="text-orange-300 text-sm bg-orange-900/10 rounded px-2 py-1">
                        {challenge}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">综合技能</h4>
                  <p className="text-purple-300 text-sm bg-purple-900/10 rounded p-2">
                    {project.skills}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 技能体系 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-red-400" />
            综合技能体系
          </h2>
          <p className="text-white/80">
            全面的技能培养体系，涵盖技术、管理和创新等多个维度。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {practicalSkills.map((category, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 导航链接 */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            开始您的实践学习之旅
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            理论与实践相结合，通过项目驱动的学习方式，快速提升自动化技能水平。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/advanced" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>进阶应用学习</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/test" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>技能测试评估</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PracticalProjectsPage;
