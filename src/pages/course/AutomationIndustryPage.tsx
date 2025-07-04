import React from 'react';
import { Link } from 'react-router-dom';
import LiquidGlass from '../../components/LiquidGlass';
import { 
  Settings, 
  Cpu, 
  Zap, 
  Monitor,
  ArrowRight,
  Target,
  CheckCircle,
  BookOpen,
  Award
} from '../../components/Icons';

const AutomationIndustryPage: React.FC = () => {
  const controllerTypes = [
    {
      name: "PLC",
      fullName: "可编程逻辑控制器",
      description: "适用于离散制造场景的工业控制器",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-600",
      features: ["结构简单", "编程方便", "可靠性高", "成本适中"],
      applications: ["汽车装配线", "机械加工", "包装设备", "物料搬运"],
      advantages: "逻辑控制能力强，适合开关量控制和简单运动控制"
    },
    {
      name: "DCS",
      fullName: "分布式控制系统", 
      description: "侧重于过程控制的大规模工业控制系统",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-green-400 to-teal-600",
      features: ["集中监控", "分散控制", "过程调节", "大规模集成"],
      applications: ["化工生产", "电力系统", "石化工业", "制药工艺"],
      advantages: "过程控制能力强，适合连续生产过程的监控和调节"
    },
    {
      name: "SCADA",
      fullName: "数据采集与监视控制系统",
      description: "主要用于远程设备监控和数据采集",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-400 to-pink-600",
      features: ["远程监控", "数据采集", "历史记录", "报警管理"],
      applications: ["水利系统", "能源管理", "环境监测", "基础设施"],
      advantages: "远程监控能力强，适合地理分布广泛的设备管理"
    }
  ];

  const plcHistory = [
    {
      generation: "第一代PLC",
      period: "20世纪70年代",
      features: ["替代继电器控制", "逻辑控制功能", "体积较大", "功能单一"],
      description: "主要功能是替代继电器控制系统，实现基本的逻辑控制",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      generation: "第二代PLC",
      period: "20世纪80年代", 
      features: ["模拟量处理", "通信功能", "性能提升", "功能扩展"],
      description: "具备了模拟量处理、通信等功能，性能有所提升",
      icon: <Settings className="w-6 h-6" />
    },
    {
      generation: "第三代PLC",
      period: "20世纪90年代至今",
      features: ["先进微处理器", "网络通信", "运动控制", "远程监控"],
      description: "采用先进微处理器，支持复杂运动控制和远程监控功能",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const plcBrands = [
    {
      name: "西门子",
      country: "德国",
      features: ["性能稳定", "功能丰富", "全球领先"],
      marketPosition: "在全球工业控制领域占据重要地位",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "罗克韦尔",
      country: "美国", 
      features: ["运动控制强", "过程控制优", "高端制造"],
      marketPosition: "在高端制造业具有强大优势",
      icon: <Target className="w-6 h-6" />
    },
    {
      name: "欧姆龙",
      country: "日本",
      features: ["体积小巧", "性价比高", "中小型应用"],
      marketPosition: "在亚洲市场拥有广泛用户群体",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      name: "三菱",
      country: "日本",
      features: ["编程简单", "用户友好", "亚洲市场"],
      marketPosition: "在亚洲市场拥有广泛的用户群体，编程简单易懂",
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: "汇川",
      country: "中国",
      features: ["国产品牌", "性价比优", "技术突破"],
      marketPosition: "国内知名PLC品牌，性能逐渐提升，价格相对亲民",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const applicationScenarios = [
    {
      title: "离散制造",
      subtitle: "汽车装配线案例",
      description: "在汽车装配线上，PLC用于控制机械手的动作序列，实现汽车零部件的有序装配。",
      process: [
        "传感器检测机械手到达指定位置",
        "PLC接收传感器信号并进行逻辑判断", 
        "PLC发出控制指令驱动机械手工作",
        "确保汽车零部件准确安装到相应位置"
      ],
      features: ["精确控制", "序列动作", "质量保证", "效率提升"],
      color: "from-blue-400 to-cyan-600",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "过程控制",
      subtitle: "化工厂反应罐案例", 
      description: "在化工厂的反应罐中，PLC用于调节温度和液位，保证化学反应的正常进行。",
      process: [
        "温度传感器和液位传感器实时监测",
        "PLC根据预设范围进行逻辑判断",
        "控制加热设备和补液设备的工作",
        "使反应罐温度和液位保持在合适范围"
      ],
      features: ["实时监测", "精确调节", "安全控制", "过程优化"],
      color: "from-green-400 to-teal-600", 
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "基础设施",
      subtitle: "智能楼宇案例",
      description: "在智能楼宇中，PLC用于管理电梯调度与照明，实现节能降耗和智能管理。",
      process: [
        "按钮或传感器检测用户需求",
        "PLC分析电梯运行状态和光线条件", 
        "合理分配电梯资源和调节照明亮度",
        "实现高效节能的楼宇设备管理"
      ],
      features: ["智能调度", "节能环保", "用户体验", "设备管理"],
      color: "from-purple-400 to-indigo-600",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  const marketStatus = [
    {
      aspect: "市场格局",
      content: "目前中国PLC市场仍以外资品牌主导，西门子、罗克韦尔等国际巨头占据较大市场份额",
      trend: "外资主导"
    },
    {
      aspect: "国产突围",
      content: "国内PLC品牌通过加大研发投入，提升产品性能和稳定性，逐渐缩小与外资品牌的技术差距",
      trend: "技术进步"
    },
    {
      aspect: "发展挑战",
      content: "国内PLC品牌在高端市场占有率仍然较低，主要因为技术积累相对较少，产品可靠性有待提高",
      trend: "需要提升"
    }
  ];

  return (
    <main className="relative z-10 py-8">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Settings className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">PLC行业认知与基础框架</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            全面了解工业控制器分类对比、PLC发展历程、主要品牌竞争格局和典型应用场景
          </p>
        </div>
      </section>

      {/* 工业控制器分类对比 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">工业控制器分类对比</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            了解PLC、DCS、SCADA三种主要工业控制器的特点和适用场景
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {controllerTypes.map((controller, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className={`w-20 h-20 bg-gradient-to-r ${controller.color} rounded-2xl flex items-center justify-center mb-6`}>
                {controller.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{controller.name}</h3>
              <h4 className="text-lg text-blue-300 mb-4">{controller.fullName}</h4>
              <p className="text-white/80 mb-6 leading-relaxed">{controller.description}</p>

              <div className="mb-6">
                <h5 className="text-white font-semibold mb-3">核心特点：</h5>
                <div className="grid grid-cols-2 gap-2">
                  {controller.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-white font-semibold mb-3">典型应用：</h5>
                <div className="flex flex-wrap gap-2">
                  {controller.applications.map((app, aIndex) => (
                    <span key={aIndex} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/80 text-sm italic">{controller.advantages}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLC发展历程 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">PLC发展历程</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            了解PLC从第一代到第三代的功能演变流程和技术特点
          </p>
        </div>

        <div className="space-y-8">
          {plcHistory.map((era, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  {era.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">{era.generation}</h3>
                    <span className="text-blue-300 text-sm bg-blue-900/20 rounded-full px-3 py-1">
                      {era.period}
                    </span>
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">{era.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {era.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 主要品牌简介 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">主要品牌简介</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            了解全球主要PLC品牌的特点和市场定位
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plcBrands.map((brand, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  {brand.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                  <span className="text-blue-300 text-sm">{brand.country}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {brand.features.map((feature, fIndex) => (
                    <span key={fIndex} className="text-xs bg-green-900/20 text-green-300 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed">{brand.marketPosition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 中国PLC竞争格局 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">中国PLC竞争格局</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            了解中国PLC市场现状和国产品牌发展情况
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {marketStatus.map((status, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <h3 className="text-lg font-bold text-white">{status.aspect}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  status.trend === '外资主导' ? 'bg-red-900/20 text-red-300' :
                  status.trend === '技术进步' ? 'bg-green-900/20 text-green-300' :
                  'bg-yellow-900/20 text-yellow-300'
                }`}>
                  {status.trend}
                </span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">{status.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 典型应用场景认知 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">典型应用场景认知</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            通过具体案例了解PLC在不同工业场景中的应用
          </p>
        </div>

        <div className="space-y-8">
          {applicationScenarios.map((scenario, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${scenario.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  {scenario.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{scenario.title}</h3>
                  <h4 className="text-lg text-blue-300 mb-4">{scenario.subtitle}</h4>
                  <p className="text-white/80 mb-6 leading-relaxed">{scenario.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-white font-semibold mb-3">控制流程：</h5>
                      <div className="space-y-2">
                        {scenario.process.map((step, sIndex) => (
                          <div key={sIndex} className="flex items-start space-x-3">
                            <span className="w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              {sIndex + 1}
                            </span>
                            <span className="text-white/90 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-white font-semibold mb-3">核心特点：</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {scenario.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-white/90 text-sm">{feature}</span>
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

      {/* 理论基础与概念解析 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">理论基础与概念解析</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            深入理解工业控制器的核心概念和工作原理
          </p>
        </div>

        <div className="space-y-8">
          {/* 工业控制器定义与核心作用 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">工业控制器的定义与核心作用</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">基本定义</h4>
                <p className="text-white/80 leading-relaxed mb-4">
                  工业控制器是一种专门用于自动执行逻辑、时序或算法的计算机设备，它能够接收来自传感器的信号，并根据预设的程序驱动执行机构工作。
                </p>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">核心作用</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• 替代人工操作，实现自动化控制</li>
                  <li>• 提供高精度、高可靠性的控制</li>
                  <li>• 实现可重构的控制系统</li>
                  <li>• 提高生产效率和产品质量稳定性</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">实际应用案例</h4>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/80 leading-relaxed">
                    <strong>汽车制造焊接工序：</strong><br/>
                    工业控制器精确控制焊接机器人的动作时序，确保每一个焊点的质量和位置都符合标准。相比人工操作，极大提高了生产效率和产品质量的稳定性。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 工业控制器分类详解 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">工业控制器分类详解</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">PLC特点</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• 结构简单，编程方便</li>
                    <li>• 可靠性高，成本适中</li>
                    <li>• 适用于离散型工业控制场景</li>
                    <li>• 如汽车装配线、机械加工</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">DCS特点</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• 侧重于过程控制</li>
                    <li>• 集中监控和分散控制</li>
                    <li>• 适用于大规模工业生产过程</li>
                    <li>• 如化工、电力等连续生产行业</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">SCADA特点</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• 主要用于远程设备监控</li>
                    <li>• 数据采集和监视控制</li>
                    <li>• 适用于地理分布广泛的设备</li>
                    <li>• 如水利、能源等领域</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                <p className="text-yellow-200 text-sm">
                  <strong>选择原则：</strong>小型机械加工车间只需简单开关量逻辑控制，选择PLC即可满足需求；大型化工生产厂需要集中监控和过程调节，则需要采用DCS系统。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术要点与操作方法 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">技术要点与操作方法</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            掌握工业控制器选型和应用的核心技术要点
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">工业控制器分类对比要点分析</h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-blue-300 font-semibold mb-2">对比维度</h4>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>• 适用场景：离散制造 vs 过程控制 vs 远程监控</li>
                  <li>• 功能特点：逻辑控制 vs 过程调节 vs 数据采集</li>
                  <li>• 性能指标：响应时间、处理能力、可靠性</li>
                </ul>
              </div>
              <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                <p className="text-green-200 text-sm">
                  <strong>实际应用指导：</strong>根据具体的工业控制需求选择合适的控制器。离散制造优先考虑PLC的逻辑控制能力，过程控制关注DCS的过程调节功能，远程监控重视SCADA的数据采集能力。
                </p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">PLC典型应用场景操作方法</h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-purple-300 font-semibold mb-2">汽车装配线PLC控制</h4>
                <ol className="space-y-1 text-white/80 text-sm">
                  <li>1. 根据机械手动作流程进行编程</li>
                  <li>2. 硬件接线连接驱动电机和传感器</li>
                  <li>3. 调试程序确保动作准确性</li>
                  <li>4. 监控程序运行状态和故障诊断</li>
                </ol>
              </div>
              <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4">
                <p className="text-blue-200 text-sm">
                  <strong>关键技术：</strong>使用梯形图语言编写逻辑控制程序，明确常开触点、常闭触点的使用来实现机械手的启动、停止、动作切换等功能。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实践应用与操作要点 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">实践应用与操作要点</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            通过实际操作步骤掌握工业控制器应用技能
          </p>
        </div>

        <div className="space-y-8">
          {/* 工业控制器对比实践步骤 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">工业控制器分类对比实践步骤</h3>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">明确工业控制需求</h4>
                    <p className="text-white/80 mb-3">首先需要对具体的工业控制场景进行分析，确定是离散制造、过程控制还是基础设施监控等需求。</p>
                    <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-3">
                      <p className="text-blue-200 text-sm">
                        <strong>案例：</strong>小型电子元件组装车间，需求是实现简单的开关量逻辑控制。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">收集控制器信息</h4>
                    <p className="text-white/80 mb-3">通过查阅资料、咨询行业人士等方式，收集PLC、DCS、SCADA等不同类型工业控制器的产品信息。</p>
                    <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-3">
                      <p className="text-green-200 text-sm">
                        <strong>收集内容：</strong>功能特点、性能指标、价格、适用场景等完整信息。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">对比分析选择控制器</h4>
                    <p className="text-white/80 mb-3">根据第一步确定的需求和第二步收集的信息，对不同类型的工业控制器进行对比分析，选择最适合的控制器。</p>
                    <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-3">
                      <p className="text-purple-200 text-sm">
                        <strong>选择结果：</strong>对于小型电子元件组装车间的简单开关量逻辑控制需求，选择PLC最为合适，因为结构简单、编程方便、价格相对较低。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PLC应用实践步骤 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">PLC在汽车装配线应用的实践步骤</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4 font-bold">1</div>
                <h4 className="text-lg font-semibold text-white mb-3">编写梯形图程序</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• 使用TIA Portal等编程软件</li>
                  <li>• 编写机械手启动逻辑程序</li>
                  <li>• 使用定时器、计数器实现时序控制</li>
                  <li>• 设计动作顺序控制程序</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mb-4 font-bold">2</div>
                <h4 className="text-lg font-semibold text-white mb-3">硬件接线</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• 传感器信号线连接DI模块</li>
                  <li>• 驱动电机控制线连接DO模块</li>
                  <li>• 按照I/O接线规范进行连接</li>
                  <li>• 为PLC连接电源模块</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-4 font-bold">3</div>
                <h4 className="text-lg font-semibold text-white mb-3">程序下载与调试</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• 将程序下载到PLC中</li>
                  <li>• 监控程序运行状态</li>
                  <li>• 观察传感器信号输入</li>
                  <li>• 检查驱动电机动作准确性</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 学习总结与下一步 */}
      <section>
        <LiquidGlass
          displacementScale={60}
          blurAmount={0.1}
          saturation={140}
          cornerRadius={20}
          className="p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            本章学习要点
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-3">核心知识点：</h3>
              <ul className="space-y-2 text-white/80">
                <li>• 工业控制器分类对比（PLC、DCS、SCADA）</li>
                <li>• PLC三代发展历程及特点演变</li>
                <li>• 主要PLC品牌特点和市场定位</li>
                <li>• 中国PLC市场竞争格局现状</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-3">应用场景：</h3>
              <ul className="space-y-2 text-white/80">
                <li>• 离散制造：汽车装配线控制</li>
                <li>• 过程控制：化工厂反应罐调节</li>
                <li>• 基础设施：智能楼宇管理</li>
                <li>• 不同场景的控制需求分析</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <LiquidGlass
              displacementScale={40}
              blurAmount={0.05}
              saturation={150}
              cornerRadius={50}
              className="inline-block"
            >
              <Link to="/course/plc-basics" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>继续学习：PLC核心定位与硬件基础</span>
              </Link>
            </LiquidGlass>
            <LiquidGlass
              displacementScale={40}
              blurAmount={0.05}
              saturation={150}
              cornerRadius={50}
              className="inline-block"
            >
              <Link to="/objectives" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>回顾学习目标</span>
              </Link>
            </LiquidGlass>
          </div>
        </LiquidGlass>
      </section>
    </main>
  );
};

export default AutomationIndustryPage; 