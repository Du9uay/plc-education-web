import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Settings, 
  Cpu,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Eye
} from '../../components/Icons';

const TIAPortalPage: React.FC = () => {
  const softwareFeatures = [
    {
      title: "项目管理",
      description: "统一管理所有项目文件和组件",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-400 to-purple-600",
      features: [
        "项目树结构：清晰的项目组织结构",
        "设备配置：PLC硬件配置和参数设置",
        "程序组织：OB、FC、FB等程序块管理",
        "变量管理：全局变量和局部变量定义"
      ],
      benefits: "提高工程效率，减少配置错误，便于团队协作"
    },
    {
      title: "硬件配置",
      description: "直观的硬件配置和诊断功能",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-400 to-teal-600",
      features: [
        "设备选型：从设备目录选择PLC型号",
        "模块配置：I/O模块添加和参数设置",
        "网络配置：PROFINET网络配置",
        "诊断功能：实时设备状态监控"
      ],
      benefits: "可视化配置，减少硬件错误，支持在线诊断"
    },
    {
      title: "程序编辑",
      description: "多种编程语言支持和调试功能",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-orange-400 to-red-600",
      features: [
        "梯形图编辑：直观的梯形图编程界面",
        "STL指令：结构化文本编程支持",
        "功能块：可重用的程序模块",
        "在线调试：实时程序监控和修改"
      ],
      benefits: "编程效率高，调试功能强大，支持模块化编程"
    }
  ];

  const operationSteps = [
    {
      step: "创建新项目",
      description: "建立PLC控制项目的基础框架",
      operations: [
        "启动TIA Portal软件",
        "选择'创建新项目'",
        "输入项目名称和路径",
        "选择PLC型号（如S7-1200）",
        "完成项目初始化设置"
      ],
      tips: [
        "项目名称使用有意义的描述",
        "选择合适的PLC型号和版本",
        "建议创建项目模板便于复用"
      ],
      color: "from-blue-400 to-cyan-600"
    },
    {
      step: "硬件组态",
      description: "配置PLC硬件和I/O模块",
      operations: [
        "在设备视图中添加CPU模块",
        "配置CPU参数（IP地址等）",
        "添加I/O扩展模块",
        "设置模块参数和地址",
        "编译硬件配置"
      ],
      tips: [
        "I/O地址分配要规范有序",
        "预留扩展模块插槽",
        "注意模块功耗和供电能力"
      ],
      color: "from-green-400 to-blue-600"
    },
    {
      step: "编写程序",
      description: "使用梯形图编写控制逻辑",
      operations: [
        "创建主程序OB1",
        "添加网络和编写逻辑",
        "定义变量和数据块",
        "编译检查程序语法",
        "保存程序文件"
      ],
      tips: [
        "使用符号变量提高可读性",
        "程序结构要清晰模块化",
        "及时保存避免数据丢失"
      ],
      color: "from-purple-400 to-pink-600"
    },
    {
      step: "下载调试",
      description: "将程序下载到PLC并进行调试",
      operations: [
        "连接PLC设备（以太网或USB）",
        "下载硬件配置和程序",
        "切换PLC到RUN模式",
        "监控程序运行状态",
        "修改和优化程序逻辑"
      ],
      tips: [
        "确保网络连接正常",
        "先下载硬件配置再下载程序",
        "使用监控功能观察变量状态"
      ],
      color: "from-red-400 to-orange-600"
    }
  ];

  const programmingTools = [
    {
      name: "梯形图编辑器",
      description: "主要的编程界面，支持拖拽式编程",
      functions: [
        "指令库：常用指令快速插入",
        "自动补全：变量名自动提示",
        "语法检查：实时语法错误提示",
        "交叉引用：变量使用位置查看"
      ],
      shortcuts: [
        "F9：编译程序",
        "Ctrl+S：保存程序",
        "F5：插入网络",
        "F7：插入常开触点"
      ],
      icon: <Monitor className="w-6 h-6" />
    },
    {
      name: "变量表",
      description: "管理项目中的所有变量定义",
      functions: [
        "全局变量：项目共享变量",
        "数据类型：Bool、Int、Real等",
        "初始值：变量默认值设置", 
        "注释说明：变量用途描述"
      ],
      shortcuts: [
        "Ctrl+T：打开变量表",
        "F2：编辑变量名",
        "Insert：插入新变量",
        "Delete：删除变量"
      ],
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: "监控表",
      description: "实时监控变量值和程序状态",
      functions: [
        "变量监控：实时显示变量值",
        "强制功能：手动设置变量值",
        "触发条件：设置监控触发条件",
        "数据记录：历史数据保存"
      ],
      shortcuts: [
        "Ctrl+M：打开监控表",
        "F8：启动监控",
        "Shift+F8：停止监控",
        "F10：强制变量"
      ],
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const practicalCase = {
    title: "实操案例：交通灯控制系统",
    description: "使用TIA Portal完整实现交通灯控制项目",
    requirements: [
      "红灯持续30秒，然后转为绿灯",
      "绿灯持续25秒，然后转为黄灯",
      "黄灯持续5秒，然后转为红灯",
      "系统上电后从红灯开始循环",
      "提供手动/自动模式切换"
    ],
    hardwareConfig: [
      { module: "CPU 1214C DC/DC/DC", description: "主控制器" },
      { module: "DI 8x24VDC BA", description: "数字输入模块" },
      { module: "DO 8x24VDC/0.5A BA", description: "数字输出模块" }
    ],
    ioMapping: [
      { address: "I0.0", description: "手动/自动切换开关", type: "DI" },
      { address: "I0.1", description: "系统启动按钮", type: "DI" },
      { address: "I0.2", description: "系统停止按钮", type: "DI" },
      { address: "Q0.0", description: "红灯输出", type: "DO" },
      { address: "Q0.1", description: "黄灯输出", type: "DO" },
      { address: "Q0.2", description: "绿灯输出", type: "DO" }
    ],
    variableTable: [
      { name: "红灯定时器", type: "TON", initialValue: "T#30S" },
      { name: "黄灯定时器", type: "TON", initialValue: "T#5S" },
      { name: "绿灯定时器", type: "TON", initialValue: "T#25S" },
      { name: "系统运行", type: "BOOL", initialValue: "FALSE" },
      { name: "当前状态", type: "INT", initialValue: "1" }
    ]
  };

  const debuggingTips = [
    {
      category: "连接问题",
      issues: [
        "无法连接PLC：检查网络配置和IP地址",
        "下载失败：确认PLC处于STOP模式",
        "通信超时：检查网线连接和防火墙设置"
      ],
      color: "from-red-500 to-red-700"
    },
    {
      category: "程序问题",
      issues: [
        "编译错误：检查语法和变量定义",
        "逻辑错误：使用监控表观察变量状态",
        "时序问题：检查扫描周期和定时器设置"
      ],
      color: "from-orange-500 to-orange-700"
    },
    {
      category: "硬件问题",
      issues: [
        "I/O状态异常：检查接线和信号电平",
        "模块故障：查看诊断信息和LED指示",
        "供电问题：检查电源电压和负载电流"
      ],
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  return (
    <main className="relative z-10 py-8">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Monitor className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">TIA Portal软件操作</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            掌握西门子TIA Portal集成开发环境的使用方法，从项目创建到程序调试的完整流程。
          </p>
        </div>
      </section>

      {/* 软件功能特色 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-blue-400" />
            TIA Portal核心功能
          </h2>
          <p className="text-white/80">
            TIA Portal是西门子推出的全集成自动化软件平台，提供从硬件配置到程序调试的完整解决方案。
          </p>
        </div>

        <div className="space-y-8">
          {softwareFeatures.map((feature, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">核心优势</h4>
                    <p className="text-white/70 text-sm">{feature.benefits}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    主要功能
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {feature.features.map((func, funcIndex) => (
                      <div key={funcIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-4">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/90 text-sm">{func}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 操作步骤 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 mr-3 text-green-400" />
            完整操作流程
          </h2>
          <p className="text-white/80">
            从项目创建到程序调试的标准操作流程，确保高效完成PLC项目开发。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {operationSteps.map((step, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center text-white text-lg font-bold`}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {step.step}
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {step.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">操作步骤</h4>
                  <div className="space-y-2">
                    {step.operations.map((operation, opIndex) => (
                      <div key={opIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/70 text-xs">{operation}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-green-400 font-medium mb-2">操作技巧</h4>
                  <div className="space-y-1">
                    {step.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="text-green-300 text-xs bg-green-900/20 rounded px-2 py-1">
                        💡 {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 编程工具 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-purple-400" />
            常用编程工具
          </h2>
          <p className="text-white/80">
            熟练掌握TIA Portal的编程工具，提高开发效率和程序质量。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programmingTools.map((tool, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {tool.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">主要功能</h4>
                  <div className="space-y-1">
                    {tool.functions.map((func, funcIndex) => (
                      <div key={funcIndex} className="text-white/60 text-xs bg-white/5 rounded px-2 py-1">
                        {func}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">快捷键</h4>
                  <div className="space-y-1">
                    {tool.shortcuts.map((shortcut, shortIndex) => (
                      <div key={shortIndex} className="text-blue-300 text-xs bg-blue-900/20 rounded px-2 py-1 font-mono">
                        {shortcut}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 实操案例 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" />
            {practicalCase.title}
          </h2>
          <p className="text-white/80 mb-6">
            {practicalCase.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">控制要求</h4>
              <div className="space-y-2">
                {practicalCase.requirements.map((req, reqIndex) => (
                  <div key={reqIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">硬件配置</h4>
              <div className="space-y-2">
                {practicalCase.hardwareConfig.map((hw, hwIndex) => (
                  <div key={hwIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="text-blue-300 font-medium text-sm">{hw.module}</div>
                    <div className="text-white/70 text-xs">{hw.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">I/O地址分配</h4>
              <div className="space-y-2">
                {practicalCase.ioMapping.map((io, ioIndex) => (
                  <div key={ioIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-green-300 font-mono text-sm">{io.address}</span>
                      <span className="text-purple-300 text-xs bg-purple-900/20 rounded px-2 py-1">{io.type}</span>
                    </div>
                    <div className="text-white/70 text-sm mt-1">{io.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">变量定义</h4>
              <div className="space-y-2">
                {practicalCase.variableTable.map((variable, varIndex) => (
                  <div key={varIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-orange-300 text-sm">{variable.name}</span>
                      <span className="text-cyan-300 text-xs bg-cyan-900/20 rounded px-2 py-1">{variable.type}</span>
                    </div>
                    <div className="text-white/60 text-xs mt-1">初值: {variable.initialValue}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 调试技巧 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Clock className="w-6 h-6 mr-3 text-red-400" />
            常见问题与调试技巧
          </h2>
          <p className="text-white/80">
            掌握常见问题的解决方法，快速定位和排除故障。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {debuggingTips.map((category, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white text-xl font-bold`}>
                  ⚠️
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.issues.map((issue, issueIndex) => (
                  <div key={issueIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/90 text-sm">{issue}</div>
                  </div>
                ))}
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
            深入了解TIA Portal软件的核心功能和程序调试的基本原理
          </p>
        </div>

        <div className="space-y-8">
          {/* TIA Portal软件介绍 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">TIA Portal软件介绍</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-300 mb-4">软件概述与特点</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">TIA Portal全称</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Totally Integrated Automation Portal</li>
                      <li>• 全集成自动化门户</li>
                      <li>• 西门子公司开发的自动化工程软件</li>
                      <li>• 涵盖硬件配置、编程、调试、诊断</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4">
                    <p className="text-blue-200 text-sm">
                      <strong>集成优势：</strong>TIA Portal提供了一个统一的工程环境，从硬件配置到程序开发，从仿真测试到在线诊断，所有功能都在一个平台上完成，大大提高了工程效率。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-green-300 mb-4">主要功能模块</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">核心功能</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 硬件配置：设备选型、参数设置</li>
                      <li>• 编程开发：梯形图、SCL、FBD等</li>
                      <li>• 仿真调试：离线仿真、在线监控</li>
                      <li>• 诊断维护：故障诊断、系统优化</li>
                    </ul>
                  </div>
                  <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                    <p className="text-green-200 text-sm">
                      <strong>实际应用：</strong>在TIA Portal中，可以通过项目树清晰地管理整个工程，从PLC硬件配置到HMI画面设计，每个组件都有专门的编辑器和工具支持。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 程序调试原理 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">程序调试原理</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-4">调试概念与目的</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">调试的基本概念</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 验证程序逻辑是否正确</li>
                      <li>• 检查程序运行是否符合预期</li>
                      <li>• 发现并修复程序中的错误</li>
                      <li>• 优化程序性能和效率</li>
                    </ul>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-4">
                    <p className="text-purple-200 text-sm">
                      <strong>调试重要性：</strong>程序调试是确保工业控制系统安全可靠运行的关键环节，通过系统的调试过程可以避免生产事故和设备损坏。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-orange-300 mb-4">调试方法与工具</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">常用调试工具</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 在线监控：实时查看变量状态</li>
                      <li>• 断点调试：暂停程序执行</li>
                      <li>• 强制变量：手动修改变量值</li>
                      <li>• 监控表：批量监视多个变量</li>
                    </ul>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-4">
                    <p className="text-orange-200 text-sm">
                      <strong>调试策略：</strong>采用分步调试方法，先验证基本功能，再测试复杂逻辑，逐步缩小问题范围，快速定位故障原因。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/5 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-cyan-300 mb-4">调试流程与步骤</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h5 className="text-cyan-300 font-semibold mb-2">程序编译</h5>
                  <p className="text-white/70 text-xs">检查语法错误，生成可执行代码</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h5 className="text-green-300 font-semibold mb-2">程序下载</h5>
                  <p className="text-white/70 text-xs">将程序传输到PLC中运行</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h5 className="text-yellow-300 font-semibold mb-2">在线监控</h5>
                  <p className="text-white/70 text-xs">实时观察程序运行状态</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h5 className="text-red-300 font-semibold mb-2">问题修复</h5>
                  <p className="text-white/70 text-xs">分析问题并修改程序</p>
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
            掌握TIA Portal的核心操作技巧和调试方法
          </p>
        </div>

        <div className="space-y-8">
          {/* 软件操作方法 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">软件操作方法</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">界面布局与导航</h4>
                <ul className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>项目树：管理所有硬件和软件组件</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>工作区：编辑程序和配置参数</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>属性窗口：设置对象属性</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>输出窗口：显示编译和诊断信息</span>
                  </li>
                </ul>
                <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-3 mt-4">
                  <p className="text-blue-200 text-xs">
                    <strong>操作技巧：</strong>熟练使用快捷键和右键菜单，可以大大提高操作效率。
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-green-300 mb-4">项目管理技巧</h4>
                <ul className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>创建项目：选择合适的控制器类型</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>版本管理：定期保存项目版本</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>备份恢复：建立完善的备份机制</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>文档管理：添加注释和说明文档</span>
                  </li>
                </ul>
                <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-3 mt-4">
                  <p className="text-green-200 text-xs">
                    <strong>最佳实践：</strong>使用有意义的命名规则，建立清晰的项目结构。
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-purple-300 mb-4">程序编辑技巧</h4>
                <ul className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>指令库：熟悉常用指令的位置</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>拖拽编程：直接拖拽指令到编辑器</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>复制粘贴：复用程序块和逻辑</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>查找替换：批量修改变量名称</span>
                  </li>
                </ul>
                <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-3 mt-4">
                  <p className="text-purple-200 text-xs">
                    <strong>编程规范：</strong>保持代码风格一致，添加必要的注释说明。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 程序编译与下载操作方法 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">程序编译与下载操作方法</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-red-300 mb-4">编译操作详解</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">编译过程</h5>
                    <ol className="space-y-2 text-white/80 text-sm">
                      <li>1. 语法检查：检查程序的语法错误</li>
                      <li>2. 逻辑分析：分析程序逻辑结构</li>
                      <li>3. 资源分配：为变量分配内存地址</li>
                      <li>4. 代码生成：生成可执行的机器代码</li>
                    </ol>
                  </div>
                  <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                    <h5 className="text-red-200 font-semibold mb-2">编译命令</h5>
                    <div className="text-red-200 text-sm font-mono bg-black/30 rounded p-2">
                      Ctrl + Shift + F7 或点击"编译"按钮
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">!</div>
                      <span className="text-white/80 text-sm">编译错误会在输出窗口显示详细信息</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">⚠</div>
                      <span className="text-white/80 text-sm">警告信息需要仔细检查并处理</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-orange-300 mb-4">下载操作详解</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">下载前准备</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 确保PLC与电脑正确连接</li>
                      <li>• 检查通信设置是否正确</li>
                      <li>• 确认PLC处于STOP状态</li>
                      <li>• 保存当前项目文件</li>
                    </ul>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-4">
                    <h5 className="text-orange-200 font-semibold mb-2">下载步骤</h5>
                    <ol className="space-y-1 text-orange-200 text-sm">
                      <li>1. 点击"下载到设备"按钮</li>
                      <li>2. 选择目标PLC设备</li>
                      <li>3. 选择下载内容（程序、数据等）</li>
                      <li>4. 确认下载并等待完成</li>
                    </ol>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</div>
                      <span className="text-white/80 text-sm">下载成功后会显示确认消息</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">i</div>
                      <span className="text-white/80 text-sm">可以选择下载后自动启动PLC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 在线监控与调试技巧 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">在线监控与调试技巧</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-cyan-300 mb-4">监控表使用技巧</h4>
                <div className="space-y-3">
                  <div className="text-white/80 text-sm">
                    <strong>创建监控表：</strong>
                    <p className="text-xs mt-1">添加需要监控的变量到监控表中，可以实时查看变量值的变化</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>强制变量：</strong>
                    <p className="text-xs mt-1">手动设置变量值，测试程序在不同条件下的响应</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>触发条件：</strong>
                    <p className="text-xs mt-1">设置触发条件，只在特定情况下更新监控值</p>
                  </div>
                </div>
                <div className="bg-cyan-900/20 border border-cyan-600/30 rounded-lg p-3 mt-4">
                  <p className="text-cyan-200 text-xs">
                    监控表是调试过程中最常用的工具，建议创建多个监控表分类管理不同类型的变量。
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-300 mb-4">在线编辑技巧</h4>
                <div className="space-y-3">
                  <div className="text-white/80 text-sm">
                    <strong>在线修改：</strong>
                    <p className="text-xs mt-1">在程序运行时直接修改程序逻辑，无需停止PLC</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>测试功能：</strong>
                    <p className="text-xs mt-1">使用测试功能模拟输入信号，验证程序响应</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>比较功能：</strong>
                    <p className="text-xs mt-1">比较在线程序与离线程序的差异</p>
                  </div>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-3 mt-4">
                  <p className="text-yellow-200 text-xs">
                    在线编辑功能强大，但需要谨慎使用，避免在生产过程中进行危险的修改。
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">诊断功能应用</h4>
                <div className="space-y-3">
                  <div className="text-white/80 text-sm">
                    <strong>设备诊断：</strong>
                    <p className="text-xs mt-1">检查PLC硬件状态和模块通信情况</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>程序诊断：</strong>
                    <p className="text-xs mt-1">分析程序执行时间和资源使用情况</p>
                  </div>
                  <div className="text-white/80 text-sm">
                    <strong>通信诊断：</strong>
                    <p className="text-xs mt-1">检查网络通信状态和数据传输质量</p>
                  </div>
                </div>
                <div className="bg-indigo-900/20 border border-indigo-600/30 rounded-lg p-3 mt-4">
                  <p className="text-indigo-200 text-xs">
                    定期使用诊断功能可以提前发现潜在问题，确保系统稳定运行。
                  </p>
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
            通过实际操作掌握TIA Portal的程序开发和调试流程
          </p>
        </div>

        <div className="space-y-8">
          {/* 程序开发实践步骤 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">程序开发实践步骤</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">项目创建与配置</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">启动TIA Portal</h5>
                      <p className="text-white/80 text-sm mb-2">打开TIA Portal软件，选择"创建新项目"。</p>
                      <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-3">
                        <p className="text-blue-200 text-sm">选择合适的项目模板和PLC型号，设置项目名称和存储路径。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">硬件配置</h5>
                      <p className="text-white/80 text-sm mb-2">在项目树中配置PLC硬件，添加所需的I/O模块。</p>
                      <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-3">
                        <p className="text-green-200 text-sm">根据实际硬件配置添加CPU、数字量模块、模拟量模块等。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">变量定义</h5>
                      <p className="text-white/80 text-sm mb-2">创建PLC变量表，定义输入、输出和内部变量。</p>
                      <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-3">
                        <p className="text-purple-200 text-sm">使用有意义的变量名，设置正确的数据类型和注释。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-orange-300 mb-4">程序编写与测试</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">编写程序逻辑</h5>
                      <p className="text-white/80 text-sm mb-2">在Main程序块中编写控制逻辑，使用梯形图或其他编程语言。</p>
                      <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-3">
                        <p className="text-orange-200 text-sm">按功能模块组织程序结构，保持代码清晰易读。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">程序编译</h5>
                      <p className="text-white/80 text-sm mb-2">编译程序检查语法错误，修复发现的问题。</p>
                      <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-3">
                        <p className="text-red-200 text-sm">仔细查看编译信息，解决所有错误和重要警告。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">6</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">仿真测试</h5>
                      <p className="text-white/80 text-sm mb-2">使用PLCSIM仿真器测试程序逻辑是否正确。</p>
                      <div className="bg-indigo-900/20 border border-indigo-600/30 rounded-lg p-3">
                        <p className="text-indigo-200 text-sm">通过仿真可以在没有实际硬件的情况下验证程序功能。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 程序调试实践步骤 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">程序调试实践步骤</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-cyan-300 mb-4">调试环境准备</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">建立通信连接</h5>
                      <p className="text-white/80 text-sm mb-2">配置通信接口，建立电脑与PLC的连接。</p>
                      <div className="bg-cyan-900/20 border border-cyan-600/30 rounded-lg p-3">
                        <p className="text-cyan-200 text-sm">检查以太网或PROFIBUS连接，确保通信正常。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">下载程序</h5>
                      <p className="text-white/80 text-sm mb-2">将编译好的程序下载到PLC中运行。</p>
                      <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-3">
                        <p className="text-yellow-200 text-sm">选择适当的下载选项，确保程序正确传输。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">启动PLC</h5>
                      <p className="text-white/80 text-sm mb-2">将PLC切换到RUN状态，开始执行程序。</p>
                      <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-3">
                        <p className="text-green-200 text-sm">观察PLC状态指示灯，确认程序正常运行。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-red-300 mb-4">在线调试操作</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">创建监控表</h5>
                      <p className="text-white/80 text-sm mb-2">添加关键变量到监控表，实时观察变量状态。</p>
                      <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-3">
                        <p className="text-red-200 text-sm">分类创建监控表：输入信号、输出信号、内部变量等。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">功能测试</h5>
                      <p className="text-white/80 text-sm mb-2">测试各个控制功能，验证程序逻辑是否正确。</p>
                      <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-3">
                        <p className="text-purple-200 text-sm">使用强制变量功能模拟不同的输入条件。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">6</div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-2">问题排查</h5>
                      <p className="text-white/80 text-sm mb-2">发现问题时，使用调试工具定位和解决问题。</p>
                      <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-3">
                        <p className="text-orange-200 text-sm">分析程序执行流程，检查逻辑错误和参数设置。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
              <h4 className="text-yellow-200 font-semibold mb-3">调试过程中的注意事项</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">安全注意事项</h5>
                  <ul className="space-y-1 text-yellow-100 text-sm">
                    <li>• 调试前确保系统处于安全状态</li>
                    <li>• 谨慎使用强制变量功能</li>
                    <li>• 避免在生产过程中进行危险操作</li>
                    <li>• 保持急停按钮随时可用</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-2">调试技巧</h5>
                  <ul className="space-y-1 text-yellow-100 text-sm">
                    <li>• 分步骤验证程序功能</li>
                    <li>• 记录调试过程和发现的问题</li>
                    <li>• 保存调试前的程序版本</li>
                    <li>• 与团队成员分享调试经验</li>
                  </ul>
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
            继续学习安全强化模块
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            现在您已经掌握了TIA Portal的操作方法，让我们学习工业安全的重要知识。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/safety" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>下一章：安全强化模块</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/ladder-diagram" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>上一章：梯形图编程</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TIAPortalPage;
