import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target,
  Settings,
  Cpu,
  Monitor,
  CheckCircle,
  ArrowRight,
  Award,
  Eye
} from '../../components/Icons';

const AdvancedApplicationsPage: React.FC = () => {
  const advancedTopics = [
    {
      title: "HMI人机界面设计",
      description: "设计直观友好的操作界面，提升系统可操作性",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-400 to-purple-600",
      concepts: [
        "触摸屏界面布局设计",
        "实时数据显示和趋势图",
        "报警管理和历史记录",
        "操作权限和用户管理"
      ],
      applications: [
        "生产线状态监控界面",
        "设备参数设置界面",
        "故障诊断和维护界面"
      ],
      benefits: "直观的操作界面，降低操作难度，提高生产效率"
    },
    {
      title: "工业通信网络",
      description: "掌握PLC与其他设备的通信协议和网络架构",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-400 to-teal-600",
      concepts: [
        "PROFINET工业以太网",
        "Modbus RTU/TCP协议",
        "OPC UA数据交换",
        "无线通信技术应用"
      ],
      applications: [
        "多PLC系统协调控制",
        "MES制造执行系统集成",
        "远程监控和维护"
      ],
      benefits: "实现设备互联互通，构建智能制造系统"
    },
    {
      title: "数据采集与分析",
      description: "收集和分析生产数据，支持智能决策",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-400 to-pink-600",
      concepts: [
        "实时数据采集系统",
        "数据库存储和管理",
        "统计分析和报表生成",
        "预测性维护算法"
      ],
      applications: [
        "设备运行状态监控",
        "生产效率分析",
        "质量控制和追溯"
      ],
      benefits: "数据驱动决策，优化生产过程，降低运营成本"
    }
  ];

  const integrationProjects = [
    {
      project: "智能装配线系统",
      complexity: "高级",
      duration: "4-6周",
      description: "集成多工位协调控制的智能装配系统",
      technologies: [
        "多PLC分布式控制",
        "工业机器人集成",
        "视觉检测系统",
        "MES系统接口"
      ],
      challenges: [
        "多设备时序协调",
        "数据同步和通信",
        "故障诊断和恢复",
        "生产节拍优化"
      ],
      skills: [
        "系统架构设计",
        "复杂程序编写",
        "通信配置调试",
        "项目管理"
      ]
    },
    {
      project: "智能仓储管理系统",
      complexity: "中高级",
      duration: "3-4周", 
      description: "基于PLC的自动化仓储货物管理系统",
      technologies: [
        "RFID物料追踪",
        "AGV自动导引车",
        "立体仓库控制",
        "WMS仓储管理软件"
      ],
      challenges: [
        "货物定位和追踪",
        "路径规划优化",
        "库存动态管理",
        "异常处理机制"
      ],
      skills: [
        "物流控制算法",
        "数据库应用",
        "上位机软件开发",
        "系统集成"
      ]
    },
    {
      project: "智能环境控制系统",
      complexity: "中级",
      duration: "2-3周",
      description: "楼宇或工厂环境的智能监控和调节系统",
      technologies: [
        "传感器网络部署",
        "环境参数控制",
        "能耗优化算法",
        "移动端监控APP"
      ],
      challenges: [
        "多参数协调控制",
        "节能算法实现",
        "远程监控实现",
        "用户体验优化"
      ],
      skills: [
        "控制算法设计",
        "移动应用开发",
        "云平台集成",
        "用户界面设计"
      ]
    }
  ];

  const careerAdvancement = [
    {
      level: "高级PLC工程师",
      experience: "3-5年",
      responsibilities: [
        "复杂自动化系统设计",
        "技术方案评估和优化",
        "团队技术指导和培训",
        "客户技术支持和服务"
      ],
      skills: [
        "多品牌PLC平台精通",
        "工业通信协议掌握",
        "项目管理和协调能力",
        "技术文档编写能力"
      ],
      salary: "15K-30K",
      nextStep: "技术专家或项目经理"
    },
    {
      level: "自动化系统集成工程师",
      experience: "5-8年",
      responsibilities: [
        "整体系统架构设计",
        "多系统集成和调试",
        "技术标准制定",
        "创新技术研发"
      ],
      skills: [
        "系统工程思维",
        "多学科技术整合",
        "创新解决方案设计",
        "行业深度理解"
      ],
      salary: "25K-50K",
      nextStep: "技术总监或事业部负责人"
    },
    {
      level: "智能制造专家",
      experience: "8年以上",
      responsibilities: [
        "智能制造战略规划",
        "前沿技术研究和应用",
        "行业标准参与制定",
        "技术团队建设管理"
      ],
      skills: [
        "前瞻性技术视野",
        "战略思维和规划能力",
        "团队领导和管理",
        "商业价值创造"
      ],
      salary: "40K-80K+",
      nextStep: "CTO或技术创业"
    }
  ];

  const learningResources = [
    {
      category: "在线课程平台",
      resources: [
        "Coursera工业4.0专项课程",
        "edX自动化控制系统",
        "Udemy PLC编程进阶",
        "中国大学MOOC自动化专业课程"
      ],
      type: "理论学习"
    },
    {
      category: "实践训练平台",
      resources: [
        "西门子数字化工厂仿真",
        "罗克韦尔自动化实验室",
        "施耐德电气培训中心",
        "ABB机器人学院"
      ],
      type: "实操训练"
    },
    {
      category: "技术社区交流",
      resources: [
        "工控人家园论坛",
        "Stack Overflow自动化版块",
        "LinkedIn自动化专业群组",
        "GitHub开源PLC项目"
      ],
      type: "交流学习"
    },
    {
      category: "行业认证考试",
      resources: [
        "西门子认证自动化工程师",
        "罗克韦尔ControlLogix认证",
        "施耐德Unity Pro认证",
        "工信部智能制造工程师"
      ],
      type: "专业认证"
    }
  ];

  return (
    <main className="relative z-10 py-8">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">进阶应用与职业发展</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            深入探索PLC在智能制造中的高级应用，规划长远的职业发展路径，成为自动化领域的专业人才。
          </p>
        </div>
      </section>

      {/* 进阶技术主题 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-purple-400" />
            进阶技术主题
          </h2>
          <p className="text-white/80">
            掌握PLC在现代工业中的高级应用技术，提升系统集成和创新能力。
          </p>
        </div>

        <div className="space-y-8">
          {advancedTopics.map((topic, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${topic.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {topic.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4">
                    <h4 className="text-green-300 font-medium mb-2">技术价值</h4>
                    <p className="text-green-200 text-sm">{topic.benefits}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">核心概念</h4>
                      <div className="space-y-2">
                        {topic.concepts.map((concept, conceptIndex) => (
                          <div key={conceptIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{concept}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">应用场景</h4>
                      <div className="space-y-2">
                        {topic.applications.map((app, appIndex) => (
                          <div key={appIndex} className="bg-white/5 rounded p-3">
                            <span className="text-white/90 text-sm">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 综合项目实践 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-green-400" />
            综合项目实践
          </h2>
          <p className="text-white/80">
            通过复杂的综合项目提升系统设计和工程实施能力。
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {integrationProjects.map((project, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.project}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <div className="text-blue-300 text-sm bg-blue-900/20 rounded px-3 py-1">
                      {project.complexity}
                    </div>
                    <div className="text-green-300 text-sm bg-green-900/20 rounded px-3 py-1">
                      {project.duration}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">核心技术</h4>
                  <div className="space-y-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="text-blue-300 text-sm bg-blue-900/10 rounded px-2 py-1">
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
                  <h4 className="text-white font-semibold mb-3">能力要求</h4>
                  <div className="space-y-2">
                    {project.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-purple-300 text-sm bg-purple-900/10 rounded px-2 py-1">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 职业发展进阶 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-400" />
            职业发展进阶路径
          </h2>
          <p className="text-white/80">
            从初级到专家的完整职业发展规划，实现技术和管理的双重成长。
          </p>
        </div>

        <div className="space-y-6">
          {careerAdvancement.map((career, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4 flex-shrink-0">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">{index + 3}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{career.level}</h3>
                    <div className="text-blue-300 text-sm mb-2">{career.experience}经验</div>
                    <div className="text-green-300 font-semibold">{career.salary}</div>
                    <div className="text-white/60 text-xs mt-2">下一步：{career.nextStep}</div>
                  </div>
                </div>

                <div className="lg:w-3/4 flex-grow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">主要职责</h4>
                      <div className="space-y-2">
                        {career.responsibilities.map((resp, respIndex) => (
                          <div key={respIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/80 text-sm">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">核心技能</h4>
                      <div className="space-y-2">
                        {career.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/80 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 持续学习资源 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Monitor className="w-6 h-6 mr-3 text-blue-400" />
            持续学习资源
          </h2>
          <p className="text-white/80">
            保持技术领先需要持续学习，这里为您推荐优质的学习资源和平台。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {learningResources.map((category, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                  <span className="text-blue-300 text-sm bg-blue-900/20 rounded px-2 py-1">{category.type}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {category.resources.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="bg-white/5 rounded p-3">
                    <span className="text-white/90 text-sm">{resource}</span>
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
            开启您的进阶学习之旅
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            继续深化学习，成为自动化领域的专业人才，为工业4.0贡献您的力量。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/summary" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>返回课程总结</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/test" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>参加综合测试</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdvancedApplicationsPage;
