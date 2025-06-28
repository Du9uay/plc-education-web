import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor,
  Settings,
  Eye,
  Target,
  CheckCircle,
  ArrowRight,
  Cpu,
  Zap
} from '../components/Icons';

const ResourcesPage: React.FC = () => {
  const softwareResources = [
    {
      category: "编程软件",
      description: "PLC编程必备的开发环境和工具",
      resources: [
        {
          name: "TIA Portal V17",
          description: "西门子官方编程软件，支持S7-1200/1500系列",
          size: "8.5GB",
          version: "V17 SP1",
          features: ["项目管理", "硬件组态", "程序编辑", "仿真调试"],
          downloadUrl: "#",
          officialSite: "https://support.industry.siemens.com"
        },
        {
          name: "Studio 5000 Logix Designer",
          description: "罗克韦尔自动化编程开发环境",
          size: "4.2GB", 
          version: "V34.0",
          features: ["ControlLogix编程", "梯形图编辑", "结构化文本", "功能块图"],
          downloadUrl: "#",
          officialSite: "https://www.rockwellautomation.com"
        },
        {
          name: "Unity Pro XL",
          description: "施耐德电气PLC编程软件",
          size: "2.8GB",
          version: "V13.1",
          features: ["Modicon编程", "多语言支持", "在线诊断", "仿真测试"],
          downloadUrl: "#",
          officialSite: "https://www.se.com"
        }
      ]
    },
    {
      category: "仿真工具",
      description: "学习和测试用的仿真软件",
      resources: [
        {
          name: "PLCSim Advanced",
          description: "西门子PLC高级仿真器",
          size: "850MB",
          version: "V4.0",
          features: ["虚拟PLC", "实时仿真", "HMI集成", "故障模拟"],
          downloadUrl: "#",
          officialSite: "https://support.industry.siemens.com"
        },
        {
          name: "Factory I/O",
          description: "3D工厂仿真软件",
          size: "1.2GB",
          version: "V2.5",
          features: ["3D场景", "多PLC支持", "传感器仿真", "现实物理"],
          downloadUrl: "#",
          officialSite: "https://factoryio.com"
        }
      ]
    },
    {
      category: "辅助工具",
      description: "提高开发效率的辅助工具",
      resources: [
        {
          name: "S7 Communication",
          description: "西门子S7通信调试工具",
          size: "45MB",
          version: "V1.3",
          features: ["网络诊断", "数据监控", "通信测试", "协议分析"],
          downloadUrl: "#",
          officialSite: "https://github.com/killeder/s7netplus"
        },
        {
          name: "Modbus Poll",
          description: "Modbus主站仿真器",
          size: "12MB",
          version: "V9.6",
          features: ["数据轮询", "协议测试", "多设备支持", "日志记录"],
          downloadUrl: "#",
          officialSite: "https://www.modbustools.com"
        }
      ]
    }
  ];

  const learningMaterials = [
    {
      category: "视频教程",
      materials: [
        {
          title: "西门子S7-1200零基础入门",
          duration: "12小时",
          chapters: 48,
          description: "从基础概念到实际项目的完整教程",
          level: "初级",
          language: "中文",
          platform: "B站/YouTube"
        },
        {
          title: "TIA Portal高级编程技巧",
          duration: "8小时",
          chapters: 32,
          description: "深入讲解高级功能和编程技巧",
          level: "高级",
          language: "中文",
          platform: "腾讯课堂"
        },
        {
          title: "工业网络通信实战",
          duration: "6小时",
          chapters: 24,
          description: "PROFINET、Modbus等工业通信协议",
          level: "中级",
          language: "中文",
          platform: "网易云课堂"
        }
      ]
    },
    {
      category: "电子书籍",
      materials: [
        {
          title: "《西门子PLC编程与应用》",
          author: "廖常初",
          pages: 568,
          description: "系统介绍S7-1200/1500编程方法",
          level: "初中级",
          language: "中文",
          publisher: "机械工业出版社"
        },
        {
          title: "《PLC控制系统设计与实现》",
          author: "王永华",
          pages: 432,
          description: "PLC系统设计的理论与实践",
          level: "中高级",
          language: "中文",
          publisher: "清华大学出版社"
        },
        {
          title: "《Industrial Automation with PLC》",
          author: "Frank D. Petruzella",
          pages: 624,
          description: "工业自动化与PLC应用",
          level: "中级",
          language: "英文",
          publisher: "McGraw-Hill"
        }
      ]
    },
    {
      category: "在线文档",
      materials: [
        {
          title: "S7-1200系统手册",
          source: "西门子官方",
          description: "完整的硬件和编程参考手册",
          level: "全级别",
          language: "中英文",
          format: "PDF"
        },
        {
          title: "TIA Portal编程指南",
          source: "西门子技术支持",
          description: "详细的编程指南和最佳实践",
          level: "中高级",
          language: "中英文",
          format: "在线帮助"
        },
        {
          title: "工业以太网应用指南",
          source: "工控网",
          description: "工业网络配置和应用案例",
          level: "高级",
          language: "中文",
          format: "Web文档"
        }
      ]
    }
  ];

  const practiceResources = [
    {
      category: "虚拟实验室",
      description: "在线实践平台，无需实体设备即可学习",
      platforms: [
        {
          name: "西门子数字化工厂",
          description: "官方提供的在线仿真学习平台",
          features: ["真实设备仿真", "编程练习", "故障诊断", "项目案例"],
          access: "免费注册",
          url: "https://www.plm.automation.siemens.com"
        },
        {
          name: "自动化学习中心",
          description: "综合性在线实验平台",
          features: ["多品牌支持", "分级练习", "项目库", "技能评估"],
          access: "部分免费",
          url: "https://learningcenter.automation.com"
        }
      ]
    },
    {
      category: "开源项目",
      description: "GitHub上的开源PLC项目和代码库",
      projects: [
        {
          name: "OpenPLC Runtime",
          description: "开源PLC运行时环境",
          language: "C++/Python",
          stars: "3.2k",
          features: ["多平台支持", "IEC 61131-3", "Modbus通信", "Web界面"]
        },
        {
          name: "S7 Communication",
          description: "西门子S7通信库",
          language: "C#/.NET",
          stars: "1.8k",
          features: ["TCP/IP通信", "数据读写", "异步操作", "跨平台"]
        },
        {
          name: "PLCnext",
          description: "菲尼克斯开放式PLC平台",
          language: "C++",
          stars: "890",
          features: ["Linux基础", "容器支持", "边缘计算", "云连接"]
        }
      ]
    }
  ];

  const certificationPrograms = [
    {
      level: "基础认证",
      certifications: [
        {
          name: "西门子自动化技术认证工程师",
          provider: "西门子",
          duration: "3个月",
          cost: "￥3,800",
          requirements: ["PLC基础知识", "TIA Portal操作", "电气基础"],
          benefits: ["官方证书", "技能认可", "职业提升"],
          examFormat: "理论+实操"
        },
        {
          name: "工信部智能制造工程师",
          provider: "工信部",
          duration: "6个月",
          cost: "￥4,500",
          requirements: ["自动化基础", "工业4.0概念", "系统集成"],
          benefits: ["国家认可", "行业权威", "政策支持"],
          examFormat: "在线考试"
        }
      ]
    },
    {
      level: "专业认证",
      certifications: [
        {
          name: "罗克韦尔ControlLogix专家",
          provider: "罗克韦尔自动化",
          duration: "4个月",
          cost: "￥8,200",
          requirements: ["PLC高级编程", "网络通信", "系统设计"],
          benefits: ["全球认可", "技术专家", "高薪保障"],
          examFormat: "项目考核"
        },
        {
          name: "施耐德电气认证专家",
          provider: "施耐德电气",
          duration: "5个月",
          cost: "￥7,600",
          requirements: ["Modicon编程", "EcoStruxure平台", "能效管理"],
          benefits: ["国际证书", "专业技能", "职业发展"],
          examFormat: "综合评估"
        }
      ]
    }
  ];

  return (
    <main className="relative z-10 py-8">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Monitor className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">学习资源中心</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            丰富的学习资源，包括软件工具、教学材料、实践平台和认证项目，助您全面掌握PLC技术。
          </p>
        </div>
      </section>

      {/* 软件资源 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-green-400" />
            软件工具下载
          </h2>
          <p className="text-white/80">
            PLC编程开发必备的软件工具和仿真环境。
          </p>
        </div>

        <div className="space-y-8">
          {softwareResources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.category}</h3>
                <p className="text-white/70 text-sm">{category.description}</p>
              </div>

              <div className="grid lg:grid-cols-1 gap-6">
                {category.resources.map((software, softwareIndex) => (
                  <div key={softwareIndex} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/3 flex-shrink-0">
                        <h4 className="text-lg font-semibold text-white mb-2">{software.name}</h4>
                        <p className="text-white/80 text-sm mb-4 leading-relaxed">{software.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-white/60 text-sm">版本：</span>
                            <span className="text-blue-300 text-sm">{software.version}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60 text-sm">大小：</span>
                            <span className="text-green-300 text-sm">{software.size}</span>
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-1/3 flex-grow">
                        <h5 className="text-white font-medium mb-3">主要功能</h5>
                        <div className="space-y-2">
                          {software.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-white/80 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:w-1/3 flex-shrink-0 text-center">
                        <div className="space-y-3">
                          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
                            获取软件
                          </button>
                          <a 
                            href={software.officialSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-300 text-sm hover:text-blue-200 transition-colors"
                          >
                            官方网站 ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 学习材料 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Eye className="w-6 h-6 mr-3 text-purple-400" />
            学习材料库
          </h2>
          <p className="text-white/80">
            精选的学习资料，包括视频教程、技术书籍和在线文档。
          </p>
        </div>

        <div className="space-y-8">
          {learningMaterials.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.materials.map((material, materialIndex) => (
                  <div key={materialIndex} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">{material.title}</h4>
                    {'author' in material && (
                      <p className="text-blue-300 text-sm mb-2">作者：{material.author}</p>
                    )}
                    {'source' in material && (
                      <p className="text-blue-300 text-sm mb-2">来源：{material.source}</p>
                    )}
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">{material.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {'duration' in material && (
                        <div className="flex justify-between">
                          <span className="text-white/60 text-sm">时长：</span>
                          <span className="text-green-300 text-sm">{material.duration}</span>
                        </div>
                      )}
                      {'chapters' in material && (
                        <div className="flex justify-between">
                          <span className="text-white/60 text-sm">章节：</span>
                          <span className="text-green-300 text-sm">{material.chapters}章</span>
                        </div>
                      )}
                      {'pages' in material && (
                        <div className="flex justify-between">
                          <span className="text-white/60 text-sm">页数：</span>
                          <span className="text-green-300 text-sm">{material.pages}页</span>
                        </div>
                      )}
                      {'publisher' in material && (
                        <div className="flex justify-between">
                          <span className="text-white/60 text-sm">出版社：</span>
                          <span className="text-green-300 text-sm">{material.publisher}</span>
                        </div>
                      )}
                      {'format' in material && (
                        <div className="flex justify-between">
                          <span className="text-white/60 text-sm">格式：</span>
                          <span className="text-green-300 text-sm">{material.format}</span>
                        </div>
                      )}
                      {'platform' in material && (
                        <div className="flex justify-between">
                          <span className="text-white/60 text-sm">平台：</span>
                          <span className="text-green-300 text-sm">{material.platform}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-white/60 text-sm">难度：</span>
                        <span className="text-yellow-300 text-sm">{material.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60 text-sm">语言：</span>
                        <span className="text-blue-300 text-sm">{material.language}</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform">
                        获取资源
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 实践资源 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-orange-400" />
            实践平台
          </h2>
          <p className="text-white/80">
            在线实验环境和开源项目，提供丰富的实践机会。
          </p>
        </div>

        <div className="space-y-8">
          {practiceResources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.category}</h3>
                <p className="text-white/70 text-sm">{category.description}</p>
              </div>

              <div className="grid lg:grid-cols-1 gap-6">
                {category.platforms && category.platforms.map((platform, platformIndex) => (
                  <div key={platformIndex} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/2 flex-shrink-0">
                        <h4 className="text-lg font-semibold text-white mb-2">{platform.name}</h4>
                        <p className="text-white/80 text-sm mb-4 leading-relaxed">{platform.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-green-300 text-sm bg-green-900/20 rounded px-2 py-1">
                            {platform.access}
                          </span>
                          <a 
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 text-sm hover:text-blue-200 transition-colors"
                          >
                            访问平台 ↗
                          </a>
                        </div>
                      </div>

                      <div className="lg:w-1/2 flex-grow">
                        <h5 className="text-white font-medium mb-3">平台特色</h5>
                        <div className="grid md:grid-cols-2 gap-2">
                          {platform.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="text-white/60 text-sm bg-white/5 rounded px-3 py-2">
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {category.projects && category.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/2 flex-shrink-0">
                        <h4 className="text-lg font-semibold text-white mb-2">{project.name}</h4>
                        <p className="text-white/80 text-sm mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex space-x-4">
                          <span className="text-blue-300 text-sm bg-blue-900/20 rounded px-2 py-1">
                            {project.language}
                          </span>
                          <span className="text-yellow-300 text-sm bg-yellow-900/20 rounded px-2 py-1">
                            ⭐ {project.stars}
                          </span>
                        </div>
                      </div>

                      <div className="lg:w-1/2 flex-grow">
                        <h5 className="text-white font-medium mb-3">项目特性</h5>
                        <div className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-white/80 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 认证项目 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-red-400" />
            专业认证项目
          </h2>
          <p className="text-white/80">
            权威的行业认证，提升专业资质和职业竞争力。
          </p>
        </div>

        <div className="space-y-8">
          {certificationPrograms.map((level, levelIndex) => (
            <div key={levelIndex}>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{level.level}</h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {level.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                        <p className="text-blue-300 text-sm">{cert.provider}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="text-white font-medium mb-2">基本信息</h5>
                        <div className="space-y-1">
                          <div className="text-white/60 text-sm">培训周期：{cert.duration}</div>
                          <div className="text-white/60 text-sm">费用：{cert.cost}</div>
                          <div className="text-white/60 text-sm">考试形式：{cert.examFormat}</div>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-white font-medium mb-2">报名要求</h5>
                        <div className="space-y-1">
                          {cert.requirements.map((req, reqIndex) => (
                            <div key={reqIndex} className="text-white/70 text-sm">• {req}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-white font-medium mb-2">认证价值</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="text-green-300 text-sm bg-green-900/20 rounded px-2 py-1">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <button className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
                        了解详情
                      </button>
                    </div>
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
            开始您的学习之旅
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            利用这些丰富的资源，系统性地学习和实践PLC技术，成为自动化领域的专业人才。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>回到课程首页</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/projects" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Settings className="w-5 h-5" />
                <span>开始实践项目</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
