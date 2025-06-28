import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Zap, 
  Eye,
  CheckCircle,
  ArrowRight,
  Settings,
  Monitor,
  Cpu
} from '../../components/Icons';

const SafetyPage: React.FC = () => {
  const safetyPrinciples = [
    {
      title: "故障安全原则",
      description: "系统故障时必须进入安全状态",
      icon: <Target className="w-8 h-8" />,
      color: "from-red-400 to-red-600",
      principles: [
        "断电安全：失电时设备自动停止",
        "常闭设计：安全信号采用常闭触点",
        "硬件优先：安全逻辑不依赖软件",
        "冗余保护：重要安全功能双重保护"
      ],
      examples: "急停按钮断开时所有设备立即停止，安全门打开时机器自动停机"
    },
    {
      title: "风险评估与控制",
      description: "识别危险源并采取相应控制措施",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
      principles: [
        "危险识别：分析所有潜在危险源",
        "风险评级：按照严重程度分级",
        "控制层级：消除-预防-保护-程序",
        "定期评估：持续改进安全措施"
      ],
      examples: "机械伤害风险通过防护罩和光幕保护，电气危险通过接地和漏电保护"
    },
    {
      title: "安全集成系统",
      description: "将安全功能集成到控制系统中",
      icon: <Settings className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
      principles: [
        "功能安全：符合IEC 61508标准",
        "安全PLC：专用安全控制器",
        "诊断功能：安全回路自检测",
        "可追溯性：安全操作记录"
      ],
      examples: "F-PLC安全控制器，安全I/O模块，故障诊断系统"
    }
  ];

  const emergencyStopSystems = [
    {
      component: "急停按钮",
      description: "手动紧急停止设备运行",
      requirements: [
        "红色蘑菇头按钮，黄色背景",
        "按下后自锁，需手动复位",
        "常闭触点，断电时安全",
        "每个工作区域必须可达"
      ],
      installation: [
        "安装高度：800-1200mm",
        "设置间距：不超过15米",
        "明显标识：紧急停止字样",
        "定期检测：确保功能正常"
      ],
      wiring: "急停按钮串联在主接触器控制回路中，任一按钮按下都能切断主电源",
      color: "from-red-500 to-red-700"
    },
    {
      component: "安全门开关",
      description: "监控防护门的开闭状态",
      requirements: [
        "双通道监控：两个独立开关",
        "强制断开：机械强制分离",
        "防欺骗设计：防止人为绕过",
        "状态指示：门状态清晰显示"
      ],
      installation: [
        "安装位置：门框和门体对应",
        "检测距离：门开启3-5mm即检测",
        "防护等级：IP65以上",
        "连接方式：专用安全电缆"
      ],
      wiring: "安全门开关连接到安全PLC输入端，控制危险区域设备的运行权限",
      color: "from-orange-500 to-orange-700"
    },
    {
      component: "安全光幕",
      description: "无接触式安全保护装置",
      requirements: [
        "光束间距：根据手指/手掌选择",
        "响应时间：满足安全距离要求",
        "自检功能：定期自动检测",
        "抗干扰：光束编码和滤波"
      ],
      installation: [
        "安装高度：覆盖危险区域",
        "安全距离：S = K × T + C",
        "光轴对准：发射器和接收器同轴",
        "环境考虑：避免强光干扰"
      ],
      wiring: "光幕输出信号连接安全继电器或安全PLC，实现安全逻辑控制",
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  const safetyStandards = [
    {
      standard: "IEC 61508",
      title: "功能安全基础标准",
      description: "电气/电子/可编程电子安全系统的功能安全",
      keyPoints: [
        "SIL等级：安全完整性等级1-4",
        "生命周期：从概念到废弃的全过程",
        "风险降低：量化安全目标",
        "管理体系：功能安全管理"
      ],
      application: "工业过程控制、交通运输、医疗设备等安全关键系统"
    },
    {
      standard: "ISO 13849",
      title: "机械安全控制系统",
      description: "机械安全相关控制系统的设计原则",
      keyPoints: [
        "PLr等级：所需性能等级a-e",
        "类别结构：Cat.B, 1, 2, 3, 4",
        "MTTFD：平均故障间隔时间",
        "诊断覆盖：DC诊断覆盖率"
      ],
      application: "工业机械、生产线、自动化设备的安全控制系统"
    },
    {
      standard: "IEC 62061",
      title: "机械安全功能安全",
      description: "机械电气控制系统的功能安全",
      keyPoints: [
        "SILCL：声称的安全完整性等级",
        "子系统：传感器-逻辑-执行器",
        "架构约束：硬件故障容错",
        "软件评估：系统软件安全要求"
      ],
      application: "机械设备的电气控制系统安全设计和评估"
    }
  ];

  const practicalSafetyCase = {
    title: "实际案例：冲压机安全系统设计",
    description: "设计冲压机的完整安全保护系统",
    hazardAnalysis: [
      "挤压伤害：手部被冲压模具挤压",
      "切割伤害：锋利边缘造成割伤",
      "撞击伤害：设备意外启动撞击",
      "电气危险：触电和电弧伤害"
    ],
    safetyMeasures: [
      {
        measure: "双手控制",
        description: "操作员双手同时按下启动按钮",
        implementation: "两个启动按钮相距500mm，必须在0.5秒内同时按下",
        safetyLevel: "PLd / SIL2"
      },
      {
        measure: "安全光幕",
        description: "保护冲压区域，检测人员入侵",
        implementation: "光幕高度600mm，光束间距30mm，安全距离1000mm",
        safetyLevel: "PLd / SIL2"
      },
      {
        measure: "急停系统",
        description: "紧急情况下立即停止设备",
        implementation: "操作台和维护位置各设置一个急停按钮",
        safetyLevel: "PLe / SIL3"
      },
      {
        measure: "安全门联锁",
        description: "维护门打开时禁止设备运行",
        implementation: "双通道安全门开关，带防欺骗功能",
        safetyLevel: "PLd / SIL2"
      }
    ],
    controlLogic: [
      "运行条件：安全门关闭 AND 光幕未遮挡 AND 急停未按下",
      "启动条件：运行条件 AND 双手启动按钮同时按下",
      "停止条件：任一安全条件不满足立即停止",
      "复位条件：所有安全条件恢复后手动复位"
    ]
  };

  const maintenanceSafety = [
    {
      phase: "上电前检查",
      procedures: [
        "检查急停按钮是否复位",
        "确认所有安全门已关闭",
        "检查安全设备状态指示",
        "验证接地连接可靠"
      ],
      warnings: ["断电状态下进行检查", "使用合格的检测仪表", "穿戴个人防护用品"]
    },
    {
      phase: "运行中监控",
      procedures: [
        "观察安全设备状态指示",
        "监听异常声音和振动",
        "检查温度和压力参数",
        "记录运行数据和异常"
      ],
      warnings: ["不要绕过安全保护装置", "异常情况立即停机检查", "保持安全操作距离"]
    },
    {
      phase: "维护作业",
      procedures: [
        "执行上锁挂牌程序",
        "验证设备零能量状态",
        "使用专用维护工具",
        "恢复所有安全装置"
      ],
      warnings: ["多人作业时沟通确认", "维护后测试安全功能", "记录维护作业内容"]
    }
  ];

  return (
    <main className="relative z-10 py-8">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-red-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">安全强化模块</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            深入学习工业安全的核心概念，掌握安全系统设计原则和实际应用方法，确保人员和设备安全。
          </p>
        </div>
      </section>

      {/* 安全设计原则 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-red-400" />
            工业安全设计原则
          </h2>
          <p className="text-white/80">
            安全是工业自动化的首要原则，必须从系统设计阶段就充分考虑安全因素。
          </p>
        </div>

        <div className="space-y-8">
          {safetyPrinciples.map((principle, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">应用实例</h4>
                    <p className="text-white/70 text-sm">{principle.examples}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                    核心原则
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {principle.principles.map((p, pIndex) => (
                      <div key={pIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90 text-sm">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 安全设备详解 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-orange-400" />
            核心安全设备
          </h2>
          <p className="text-white/80">
            了解各种安全设备的特点、安装要求和接线方法，正确选择和使用安全保护装置。
          </p>
        </div>

        <div className="space-y-8">
          {emergencyStopSystems.map((system, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${system.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold`}>
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {system.component}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {system.description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">技术要求</h4>
                  <div className="space-y-2">
                    {system.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">安装规范</h4>
                  <div className="space-y-2">
                    {system.installation.map((install, installIndex) => (
                      <div key={installIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{install}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">接线说明</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <p className="text-green-300 text-sm leading-relaxed">
                      {system.wiring}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 安全标准 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Monitor className="w-6 h-6 mr-3 text-blue-400" />
            国际安全标准
          </h2>
          <p className="text-white/80">
            遵循国际安全标准，确保安全系统设计的规范性和有效性。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {safetyStandards.map((standard, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="mb-4">
                <div className="text-blue-300 font-bold text-lg mb-1">{standard.standard}</div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {standard.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {standard.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">核心要点</h4>
                  <div className="space-y-1">
                    {standard.keyPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className="text-white/60 text-xs bg-white/5 rounded px-2 py-1">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-900/20 rounded p-3">
                  <h4 className="text-blue-300 font-medium text-sm mb-1">应用领域</h4>
                  <p className="text-blue-200 text-xs">{standard.application}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 实际案例 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-yellow-400" />
            {practicalSafetyCase.title}
          </h2>
          <p className="text-white/80 mb-6">
            {practicalSafetyCase.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-red-400 font-semibold mb-3">危险分析</h4>
              <div className="space-y-2">
                {practicalSafetyCase.hazardAnalysis.map((hazard, hazardIndex) => (
                  <div key={hazardIndex} className="flex items-start space-x-3 bg-red-900/20 rounded-lg p-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-200 text-sm">{hazard}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-green-400 font-semibold mb-3">控制逻辑</h4>
              <div className="space-y-2">
                {practicalSafetyCase.controlLogic.map((logic, logicIndex) => (
                  <div key={logicIndex} className="bg-green-900/20 rounded-lg p-3">
                    <div className="text-green-200 text-sm font-mono">{logic}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">安全措施详解</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {practicalSafetyCase.safetyMeasures.map((measure, measureIndex) => (
                <div key={measureIndex} className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-yellow-300 font-medium">{measure.measure}</h5>
                    <span className="text-purple-300 text-xs bg-purple-900/20 rounded px-2 py-1">
                      {measure.safetyLevel}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-2">{measure.description}</p>
                  <p className="text-white/60 text-xs">{measure.implementation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 维护安全 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Eye className="w-6 h-6 mr-3 text-purple-400" />
            维护作业安全规程
          </h2>
          <p className="text-white/80">
            制定完善的维护安全规程，确保维护人员的安全和设备的可靠性。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {maintenanceSafety.map((phase, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {phase.phase}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">操作程序</h4>
                  <div className="space-y-2">
                    {phase.procedures.map((procedure, procIndex) => (
                      <div key={procIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-sm">{procedure}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-red-400 font-medium mb-2">安全警告</h4>
                  <div className="space-y-1">
                    {phase.warnings.map((warning, warnIndex) => (
                      <div key={warnIndex} className="text-red-300 text-xs bg-red-900/20 rounded px-2 py-1">
                        ⚠️ {warning}
                      </div>
                    ))}
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
            深入理解工业安全系统的基本概念和设计原则
          </p>
        </div>

        <div className="space-y-8">
          {/* 安全系统基本概念 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">安全系统基本概念</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-red-300 mb-4">功能安全概念</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">功能安全定义</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 通过安全相关系统正确执行安全功能</li>
                      <li>• 确保人员、环境和设备的安全</li>
                      <li>• 在设备故障时能够进入安全状态</li>
                      <li>• 包括硬件和软件的综合安全措施</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                    <p className="text-red-200 text-sm">
                      <strong>核心理念：</strong>功能安全不是消除所有危险，而是将风险降低到可接受的水平。通过系统性的方法识别、评估和控制风险。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-orange-300 mb-4">安全完整性等级（SIL）</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">SIL等级划分</h5>
                    <div className="space-y-2 text-white/80 text-sm">
                      <div className="flex justify-between items-center bg-red-900/20 rounded p-2">
                        <span>SIL 4</span>
                        <span>最高安全等级</span>
                        <span>10⁻⁵ - 10⁻⁴</span>
                      </div>
                      <div className="flex justify-between items-center bg-orange-900/20 rounded p-2">
                        <span>SIL 3</span>
                        <span>高安全等级</span>
                        <span>10⁻⁴ - 10⁻³</span>
                      </div>
                      <div className="flex justify-between items-center bg-yellow-900/20 rounded p-2">
                        <span>SIL 2</span>
                        <span>中等安全等级</span>
                        <span>10⁻³ - 10⁻²</span>
                      </div>
                      <div className="flex justify-between items-center bg-green-900/20 rounded p-2">
                        <span>SIL 1</span>
                        <span>基本安全等级</span>
                        <span>10⁻² - 10⁻¹</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-4">
                    <p className="text-orange-200 text-sm">
                      <strong>SIL选择：</strong>根据风险评估结果确定所需的SIL等级，等级越高，对系统可靠性和安全性要求越严格。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 风险评估与安全等级 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">风险评估与安全等级</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-blue-300 mb-4">危险源识别</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">识别方法</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 系统性分析设备运行过程</li>
                      <li>• 识别可能的危险源</li>
                      <li>• 分析人员与设备的交互</li>
                      <li>• 考虑维护和异常情况</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4">
                    <p className="text-blue-200 text-sm">
                      <strong>常见危险：</strong>机械伤害、电击、烫伤、化学伤害、噪音、辐射等。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-green-300 mb-4">风险评估矩阵</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">评估因素</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 严重程度（S）：伤害的严重性</li>
                      <li>• 频率（F）：暴露于危险的频率</li>
                      <li>• 概率（P）：发生危险事件的概率</li>
                      <li>• 避免可能性（A）：避免伤害的可能性</li>
                    </ul>
                  </div>
                  <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                    <p className="text-green-200 text-sm">
                      <strong>风险计算：</strong>风险 = S × F × P × A，根据计算结果确定风险等级。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-4">风险降低策略</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">三级保护</h5>
                    <ol className="space-y-2 text-white/80 text-sm">
                      <li>1. 本质安全设计：从设计上消除危险</li>
                      <li>2. 安全保护装置：安全光栅、急停等</li>
                      <li>3. 警告标识：安全标志、操作说明</li>
                    </ol>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-4">
                    <p className="text-purple-200 text-sm">
                      <strong>优先级：</strong>优先采用本质安全设计，然后是保护装置，最后是警告措施。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 故障安全设计原则 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">故障安全设计原则</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-cyan-300 mb-4">故障安全概念</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">基本原理</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 设备故障时自动进入安全状态</li>
                      <li>• 使用常闭触点作为安全输入</li>
                      <li>• 断电时系统自动停止运行</li>
                      <li>• 避免单点故障影响安全功能</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-600/30 rounded-lg p-4">
                    <p className="text-cyan-200 text-sm">
                      <strong>设计思想：</strong>"宁可误停，不可误动"。系统设计时考虑最坏情况，确保故障时进入安全状态。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-yellow-300 mb-4">冗余设计策略</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">冗余类型</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 硬件冗余：双重传感器、双CPU系统</li>
                      <li>• 软件冗余：双重逻辑检查</li>
                      <li>• 时间冗余：周期性检测和监控</li>
                      <li>• 信息冗余：校验码、诊断信息</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                    <p className="text-yellow-200 text-sm">
                      <strong>实施方法：</strong>关键安全功能采用1oo2D架构（2个通道中1个有效，包含诊断功能）。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/5 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-red-300 mb-4">故障检测与诊断</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h5 className="text-red-300 font-semibold mb-2">故障检测</h5>
                  <p className="text-white/70 text-xs">实时监测系统运行状态</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h5 className="text-orange-300 font-semibold mb-2">故障诊断</h5>
                  <p className="text-white/70 text-xs">分析故障原因和位置</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h5 className="text-yellow-300 font-semibold mb-2">故障响应</h5>
                  <p className="text-white/70 text-xs">执行预定的安全动作</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h5 className="text-green-300 font-semibold mb-2">故障恢复</h5>
                  <p className="text-white/70 text-xs">修复故障并重新启动</p>
                </div>
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
            掌握安全器件选择和安全电路设计的关键技术
          </p>
        </div>

        <div className="space-y-8">
          {/* 安全器件选择与应用 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">安全器件选择与应用</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">安全传感器</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">安全光栅</h5>
                    <ul className="space-y-1 text-white/80 text-xs">
                      <li>• 分辨率：14mm、20mm、30mm等</li>
                      <li>• 保护高度：根据应用选择</li>
                      <li>• 安全距离：计算安全安装距离</li>
                      <li>• 类型4安全光栅适用于SIL3应用</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">安全地毯</h5>
                    <ul className="space-y-1 text-white/80 text-xs">
                      <li>• 压力敏感型安全装置</li>
                      <li>• 适用于大面积保护</li>
                      <li>• 需要防止故意失效措施</li>
                      <li>• 定期测试功能完整性</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-3 mt-4">
                  <p className="text-blue-200 text-xs">
                    选择安全传感器时要考虑环境条件、检测距离、响应时间等因素。
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-green-300 mb-4">安全控制器</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">安全PLC</h5>
                    <ul className="space-y-1 text-white/80 text-xs">
                      <li>• 双CPU架构确保安全功能</li>
                      <li>• 支持SIL3/PLe安全等级</li>
                      <li>• 故障检测和诊断功能</li>
                      <li>• 安全I/O模块集成</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">安全继电器</h5>
                    <ul className="space-y-1 text-white/80 text-xs">
                      <li>• 强制导向触点设计</li>
                      <li>• 多通道输入监控</li>
                      <li>• 防止粘连故障</li>
                      <li>• 诊断输出功能</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-3 mt-4">
                  <p className="text-green-200 text-xs">
                    安全控制器必须通过相应的安全认证，确保符合功能安全标准。
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-purple-300 mb-4">安全执行器</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">安全接触器</h5>
                    <ul className="space-y-1 text-white/80 text-xs">
                      <li>• 强制分离触点技术</li>
                      <li>• 辅助触点监控主触点</li>
                      <li>• 符合IEC 60947-4-1标准</li>
                      <li>• 适用于电机安全停止</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">安全阀门</h5>
                    <ul className="space-y-1 text-white/80 text-xs">
                      <li>• 失气关闭或失气开启</li>
                      <li>• 位置反馈确认</li>
                      <li>• 部分行程测试功能</li>
                      <li>• 防止超压保护</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-3 mt-4">
                  <p className="text-purple-200 text-xs">
                    安全执行器的选择要匹配控制系统的安全等级要求。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 安全电路设计技巧 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">安全电路设计技巧</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-red-300 mb-4">电路设计原则</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">基本原则</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 采用正逻辑设计（常闭触点）</li>
                      <li>• 实现冗余监控</li>
                      <li>• 避免共同故障模式</li>
                      <li>• 确保可测试性</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                    <h5 className="text-red-200 font-semibold mb-2">设计要点</h5>
                    <ul className="space-y-1 text-red-200 text-sm">
                      <li>• 安全链路采用串联连接</li>
                      <li>• 双通道监控增加可靠性</li>
                      <li>• 使用强制导向原理</li>
                      <li>• 定期进行功能测试</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-orange-300 mb-4">典型安全电路</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">急停电路</h5>
                    <div className="bg-gray-900/50 rounded p-3 mb-2">
                      <code className="text-orange-300 text-xs">
                        急停按钮（NC）→ 安全继电器 → 接触器<br/>
                        |                     |<br/>
                        └── 监控触点 ←───┘
                      </code>
                    </div>
                    <p className="text-white/70 text-xs">双通道监控，确保急停功能可靠性</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">门禁电路</h5>
                    <div className="bg-gray-900/50 rounded p-3 mb-2">
                      <code className="text-orange-300 text-xs">
                        门开关（NC）→ 安全继电器 → 主回路<br/>
                        锁定开关（NC）→      |<br/>
                        使能开关（NO）→      |
                      </code>
                    </div>
                    <p className="text-white/70 text-xs">多重安全条件确保人员安全</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
              <h4 className="text-yellow-200 font-semibold mb-3">电路设计验证方法</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="text-white font-semibold mb-2">功能验证</h5>
                  <ul className="space-y-1 text-yellow-100 text-xs">
                    <li>• 正常工作条件下的功能测试</li>
                    <li>• 各种故障条件下的响应测试</li>
                    <li>• 安全功能的有效性验证</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-2">故障模拟</h5>
                  <ul className="space-y-1 text-yellow-100 text-xs">
                    <li>• 断线故障模拟</li>
                    <li>• 短路故障模拟</li>
                    <li>• 器件失效模拟</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-2">文档记录</h5>
                  <ul className="space-y-1 text-yellow-100 text-xs">
                    <li>• 测试方案和测试结果</li>
                    <li>• 故障分析报告</li>
                    <li>• 改进措施记录</li>
                  </ul>
                </div>
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
            通过实际案例掌握安全系统设计和验证的完整流程
          </p>
        </div>

        <div className="space-y-8">
          {/* 安全系统设计实践 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">安全系统设计实践</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">设计流程与步骤</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">危险分析</h5>
                      <p className="text-white/80 text-sm mb-2">系统性识别设备运行过程中的所有潜在危险。</p>
                      <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-3">
                        <p className="text-blue-200 text-sm">使用HAZOP、FMEA等方法进行全面的危险分析。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">风险评估</h5>
                      <p className="text-white/80 text-sm mb-2">评估每个危险的风险等级，确定所需的安全措施。</p>
                      <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-3">
                        <p className="text-green-200 text-sm">使用风险矩阵计算风险值，确定SIL等级要求。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">安全功能规范</h5>
                      <p className="text-white/80 text-sm mb-2">定义安全功能的具体要求和性能指标。</p>
                      <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-3">
                        <p className="text-purple-200 text-sm">包括安全功能描述、触发条件、响应时间等。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-orange-300 mb-4">实际设计案例</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">器件选型</h5>
                      <p className="text-white/80 text-sm mb-2">根据SIL等级选择合适的安全器件。</p>
                      <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-3">
                        <p className="text-orange-200 text-sm">确保所选器件满足相应的安全标准认证。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">电路设计</h5>
                      <p className="text-white/80 text-sm mb-2">设计具体的安全控制电路和逻辑。</p>
                      <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-3">
                        <p className="text-red-200 text-sm">采用冗余设计，确保故障安全原则。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">6</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">系统集成</h5>
                      <p className="text-white/80 text-sm mb-2">将安全系统与主控系统进行集成。</p>
                      <div className="bg-indigo-900/20 border border-indigo-600/30 rounded-lg p-3">
                        <p className="text-indigo-200 text-sm">确保安全系统独立性，避免共同故障模式。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 安全验证与测试 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">安全验证与测试</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-cyan-300 mb-4">功能安全测试</h4>
                <div className="space-y-3">
                  <div className="text-white/80 text-sm">
                    <strong>正常功能测试：</strong>
                    <p className="text-xs mt-1">验证安全功能在正常条件下是否按预期工作</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>故障注入测试：</strong>
                    <p className="text-xs mt-1">模拟各种故障条件，验证系统响应</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>边界条件测试：</strong>
                    <p className="text-xs mt-1">测试系统在极限条件下的性能</p>
                  </div>
                </div>
                <div className="bg-cyan-900/20 border border-cyan-600/30 rounded-lg p-3 mt-4">
                  <p className="text-cyan-200 text-xs">
                    功能测试必须覆盖所有安全功能和可能的故障模式。
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-300 mb-4">性能验证测试</h4>
                <div className="space-y-3">
                  <div className="text-white/80 text-sm">
                    <strong>响应时间测试：</strong>
                    <p className="text-xs mt-1">测量安全功能的响应时间是否满足要求</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>可靠性测试：</strong>
                    <p className="text-xs mt-1">长期运行测试验证系统可靠性</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>环境适应性测试：</strong>
                    <p className="text-xs mt-1">在不同环境条件下测试系统性能</p>
                  </div>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-3 mt-4">
                  <p className="text-yellow-200 text-xs">
                    性能验证确保安全系统在实际使用中的稳定性。
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">证据收集与记录</h4>
                <div className="space-y-3">
                  <div className="text-white/80 text-sm">
                    <strong>测试计划：</strong>
                    <p className="text-xs mt-1">详细的测试方案和测试用例</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>测试结果：</strong>
                    <p className="text-xs mt-1">完整的测试数据和结果分析</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>认证文档：</strong>
                    <p className="text-xs mt-1">安全认证所需的技术文档</p>
                  </div>
                </div>
                <div className="bg-indigo-900/20 border border-indigo-600/30 rounded-lg p-3 mt-4">
                  <p className="text-indigo-200 text-xs">
                    完整的文档记录是安全认证和后续维护的重要依据。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-900/20 border border-green-600/30 rounded-lg p-6">
              <h4 className="text-green-200 font-semibold mb-3">验证流程总结</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <h5 className="text-green-300 font-semibold mb-1 text-sm">验证计划</h5>
                  <p className="text-white/70 text-xs">制定详细的验证和测试计划</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <h5 className="text-blue-300 font-semibold mb-1 text-sm">执行测试</h5>
                  <p className="text-white/70 text-xs">按计划执行各项验证测试</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <h5 className="text-yellow-300 font-semibold mb-1 text-sm">结果分析</h5>
                  <p className="text-white/70 text-xs">分析测试结果和发现的问题</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                  <h5 className="text-purple-300 font-semibold mb-1 text-sm">文档归档</h5>
                  <p className="text-white/70 text-xs">整理验证文档和认证材料</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 导航链接 */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            完成课程学习
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            恭喜您完成了PLC控制器基础课程的学习！现在可以查看课程总结或进行课堂测试。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/summary" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>课程总结</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/test" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>课堂测试</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/tia-portal" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Monitor className="w-5 h-5" />
                <span>上一章：TIA Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SafetyPage;
