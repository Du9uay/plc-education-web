import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  Cpu, 
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Monitor,
  Eye
} from '../../components/Icons';

const LadderDiagramPage: React.FC = () => {
  const basicInstructions = [
    {
      name: "LD（常开触点）",
      symbol: "|-| |",
      description: "当输入为1时，触点闭合，程序向右导通",
      type: "输入指令",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-400 to-blue-600",
      usage: [
        "起始指令：每个网络的第一个指令",
        "并联分支：创建新的并联路径",
        "条件判断：作为逻辑判断条件"
      ],
      examples: [
        "LD I0.0  // 读取输入点I0.0的状态",
        "LD M0.1  // 读取内部继电器M0.1",
        "LD \"启动按钮\" // 使用符号名称"
      ],
      application: "检测按钮按下、传感器状态、系统条件等"
    },
    {
      name: "LDN（常闭触点）",
      symbol: "|-/|-",
      description: "当输入为0时，触点闭合，程序向右导通",
      type: "输入指令",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-400 to-purple-600",
      usage: [
        "起始指令：网络第一个常闭触点",
        "安全逻辑：急停、安全门等安全信号",
        "反逻辑：需要反向逻辑的场合"
      ],
      examples: [
        "LDN I0.1  // 读取输入点I0.1的反状态",
        "LDN \"急停按钮\" // 急停信号检测",
        "LDN M1.0  // 内部继电器反状态"
      ],
      application: "急停检测、安全门状态、设备故障信号等"
    },
    {
      name: "A（串联常开）",
      symbol: "|- |-| |",
      description: "与前面的逻辑结果进行与运算",
      type: "逻辑指令",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-400 to-red-600",
      usage: [
        "串联连接：多个条件同时满足",
        "逻辑与：所有条件为真时输出为真",
        "安全联锁：多重安全条件确认"
      ],
      examples: [
        "A I0.2  // 与输入点I0.2进行与运算",
        "A \"运行许可\" // 与运行许可信号相与",
        "A T1  // 与定时器T1状态相与"
      ],
      application: "多条件启动、安全联锁、设备就绪检测等"
    },
    {
      name: "AN（串联常闭）",
      symbol: "|- |-/|-",
      description: "与前面的逻辑结果和输入的非进行与运算",
      type: "逻辑指令",
      icon: <Target className="w-8 h-8" />,
      color: "from-red-400 to-pink-600",
      usage: [
        "反向串联：与反状态进行串联",
        "故障检测：设备无故障时允许运行",
        "保护逻辑：保护条件不成立时允许操作"
      ],
      examples: [
        "AN I0.3  // 与输入点I0.3的反状态相与",
        "AN \"设备故障\" // 无故障时允许运行",
        "AN M2.0  // 与M2.0的反状态相与"
      ],
      application: "故障检测、保护逻辑、反向条件判断等"
    },
    {
      name: "=（输出线圈）",
      symbol: "( )",
      description: "将逻辑运算结果输出到指定地址",
      type: "输出指令",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-400 to-indigo-600",
      usage: [
        "执行输出：控制外部设备动作",
        "状态存储：保存中间逻辑结果",
        "信号传递：在程序中传递控制信号"
      ],
      examples: [
        "= Q0.0  // 输出到输出点Q0.0",
        "= \"电机运行\" // 输出到电机控制",
        "= M0.0  // 输出到内部继电器"
      ],
      application: "电机控制、阀门控制、指示灯驱动等"
    }
  ];

  const programmingRules = [
    {
      title: "扫描执行规则",
      description: "程序按照从上到下、从左到右的顺序执行",
      rules: [
        "网络顺序：按照网络编号从小到大依次执行",
        "指令顺序：每个网络内从左到右扫描指令",
        "输出更新：所有网络执行完成后统一更新输出",
        "循环扫描：一个扫描周期完成后重新开始"
      ],
      tips: [
        "重要的控制逻辑放在程序前面",
        "输出指令只在网络末尾使用",
        "避免在一个扫描周期内多次修改同一输出"
      ]
    },
    {
      title: "并联分支规则",
      description: "多个条件之一满足时执行输出",
      rules: [
        "分支起始：使用LD或LDN指令开始新分支",
        "分支合并：在输出指令前自动合并",
        "嵌套分支：支持分支内再分支的复杂逻辑",
        "或逻辑：任一分支为真则输出为真"
      ],
      tips: [
        "分支数量不宜过多，影响程序可读性",
        "复杂逻辑可以分解为多个简单网络",
        "使用括号明确逻辑运算优先级"
      ]
    },
    {
      title: "地址分配规则",
      description: "合理分配I/O地址和内部元件地址",
      rules: [
        "输入地址：I开头，如I0.0-I0.7",
        "输出地址：Q开头，如Q0.0-Q0.7",
        "内部继电器：M开头，如M0.0-M7.7",
        "定时器：T开头，如T1、T2、T3"
      ],
      tips: [
        "按功能模块分配地址，便于维护",
        "保留一定数量的备用地址",
        "使用符号名称提高程序可读性"
      ]
    }
  ];

  const practicalExample = {
    title: "实际应用案例：电机启停控制",
    description: "使用基础指令实现电机的安全启停控制",
    requirements: [
      "按下启动按钮，电机启动运行",
      "按下停止按钮，电机立即停止",
      "急停按钮按下时，电机必须停止",
      "电机运行时，运行指示灯点亮",
      "系统具有自保持功能"
    ],
    ioAllocation: [
      { address: "I0.0", description: "启动按钮（常开）", type: "DI" },
      { address: "I0.1", description: "停止按钮（常闭）", type: "DI" },
      { address: "I0.2", description: "急停按钮（常闭）", type: "DI" },
      { address: "Q0.0", description: "电机接触器", type: "DO" },
      { address: "Q0.1", description: "运行指示灯", type: "DO" },
      { address: "M0.0", description: "电机运行状态", type: "内部继电器" }
    ],
    ladderLogic: [
      {
        network: "Network 1",
        description: "电机启动控制逻辑",
        logic: "LD I0.0 // 启动按钮\nA I0.1 // 停止按钮（常闭）\nA I0.2 // 急停按钮（常闭）\n= M0.0 // 电机运行信号"
      },
      {
        network: "Network 2", 
        description: "电机自保持逻辑",
        logic: "LD M0.0 // 电机运行状态\nA I0.1 // 停止按钮（常闭）\nA I0.2 // 急停按钮（常闭）\n= M0.0 // 自保持"
      },
      {
        network: "Network 3",
        description: "输出控制",
        logic: "LD M0.0 // 电机运行状态\n= Q0.0 // 电机接触器\n= Q0.1 // 运行指示灯"
      }
    ]
  };

  return (
    <main className="relative z-10 py-8">
      {/* 页面标题 */}
      <section className="mb-12">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl text-center p-8">
          <div className="flex items-center justify-center mb-4">
            <Settings className="w-8 h-8 text-green-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">梯形图编程基础指令</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            掌握PLC梯形图编程的五大基础指令，学习程序编写规则和实际应用方法。
          </p>
        </div>
      </section>

      {/* 五大基础指令 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-3 text-blue-400" />
            五大基础指令详解
          </h2>
          <p className="text-white/80">
            掌握这五个基础指令，就能编写大部分PLC控制程序。
          </p>
        </div>

        <div className="space-y-8">
          {basicInstructions.map((instruction, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${instruction.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {instruction.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {instruction.name}
                      </h3>
                      <div className="text-green-400 font-mono text-lg mb-2">
                        {instruction.symbol}
                      </div>
                      <span className="text-blue-300 text-sm bg-blue-900/20 rounded px-2 py-1">
                        {instruction.type}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">应用场景</h4>
                    <p className="text-white/70 text-sm">{instruction.application}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 flex-grow">
                  <p className="text-white/90 mb-4">
                    {instruction.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                        使用方法
                      </h4>
                      <div className="space-y-2">
                        {instruction.usage.map((usage, usageIndex) => (
                          <div key={usageIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-white/80 text-sm">{usage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Monitor className="w-5 h-5 mr-2 text-blue-400" />
                        编程示例
                      </h4>
                      <div className="space-y-2">
                        {instruction.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="bg-gray-900/50 rounded-lg p-3">
                            <code className="text-green-300 text-sm font-mono">
                              {example}
                            </code>
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

      {/* 编程规则 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-orange-400" />
            梯形图编程规则
          </h2>
          <p className="text-white/80">
            遵循正确的编程规则，编写清晰、可靠的PLC程序。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programmingRules.map((rule, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {rule.title}
              </h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {rule.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">核心规则</h4>
                  <div className="space-y-2">
                    {rule.rules.map((r, rIndex) => (
                      <div key={rIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/70 text-xs">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-green-400 font-medium mb-2">编程技巧</h4>
                  <div className="space-y-1">
                    {rule.tips.map((tip, tipIndex) => (
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

      {/* 实际应用案例 */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl mb-8 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" />
            {practicalExample.title}
          </h2>
          <p className="text-white/80 mb-4">
            {practicalExample.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">控制要求</h4>
              <div className="space-y-2">
                {practicalExample.requirements.map((req, reqIndex) => (
                  <div key={reqIndex} className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">I/O分配表</h4>
              <div className="space-y-2">
                {practicalExample.ioAllocation.map((io, ioIndex) => (
                  <div key={ioIndex} className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-300 font-mono text-sm">{io.address}</span>
                      <span className="text-purple-300 text-xs bg-purple-900/20 rounded px-2 py-1">{io.type}</span>
                    </div>
                    <div className="text-white/70 text-sm mt-1">{io.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {practicalExample.ladderLogic.map((network, networkIndex) => (
            <div key={networkIndex} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {network.network}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {network.description}
              </p>
              <div className="bg-gray-900/70 rounded-lg p-4">
                <pre className="text-green-300 text-sm font-mono whitespace-pre-wrap">
                  {network.logic}
                </pre>
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
            深入理解梯形图语言的基础概念和逻辑门原理
          </p>
        </div>

        <div className="space-y-8">
          {/* 梯形图语言基础 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">梯形图语言基础</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-300 mb-4">梯形图语言概念</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">语言特点</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 图形化编程语言，直观易懂</li>
                      <li>• 基于继电器控制原理</li>
                      <li>• 类似电气控制电路图</li>
                      <li>• 广泛应用于工业控制系统</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4">
                    <p className="text-blue-200 text-sm">
                      <strong>应用优势：</strong>梯形图语言对于电气工程师来说易于理解和掌握，因为它的逻辑结构与传统的继电器控制电路图相似，降低了学习门槛。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-green-300 mb-4">基本构成要素</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">主要元素</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 触点：常开触点、常闭触点</li>
                      <li>• 线圈：输出线圈、设置线圈、复位线圈</li>
                      <li>• 连接线：水平线、垂直线</li>
                      <li>• 母线：左母线、右母线</li>
                    </ul>
                  </div>
                  <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                    <p className="text-green-200 text-sm">
                      <strong>编程结构：</strong>梯形图程序由多个网络组成，每个网络从左母线开始，到右母线结束，通过触点和线圈的逻辑组合实现控制功能。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 基础指令解析 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">基础指令解析：与门、或门、非门原理</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-4">与门（AND）逻辑</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">逻辑原理</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 所有输入都为真，输出才为真</li>
                      <li>• 任一输入为假，输出为假</li>
                      <li>• 梯形图中表现为触点串联</li>
                      <li>• 实现"并且"的逻辑关系</li>
                    </ul>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-4">
                    <h5 className="text-purple-200 font-semibold mb-2">真值表</h5>
                    <div className="text-purple-200 text-xs font-mono">
                      <div>A | B | 输出</div>
                      <div>0 | 0 | 0</div>
                      <div>0 | 1 | 0</div>
                      <div>1 | 0 | 0</div>
                      <div>1 | 1 | 1</div>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <p className="text-purple-200 text-sm">
                      <strong>应用实例：</strong>启动按钮AND安全开关 → 电机启动
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-orange-300 mb-4">或门（OR）逻辑</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">逻辑原理</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 任一输入为真，输出为真</li>
                      <li>• 所有输入都为假，输出才为假</li>
                      <li>• 梯形图中表现为触点并联</li>
                      <li>• 实现"或者"的逻辑关系</li>
                    </ul>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-4">
                    <h5 className="text-orange-200 font-semibold mb-2">真值表</h5>
                    <div className="text-orange-200 text-xs font-mono">
                      <div>A | B | 输出</div>
                      <div>0 | 0 | 0</div>
                      <div>0 | 1 | 1</div>
                      <div>1 | 0 | 1</div>
                      <div>1 | 1 | 1</div>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <p className="text-orange-200 text-sm">
                      <strong>应用实例：</strong>手动按钮OR自动信号 → 阀门开启
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-300 mb-4">非门（NOT）逻辑</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">逻辑原理</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 输入为真，输出为假</li>
                      <li>• 输入为假，输出为真</li>
                      <li>• 梯形图中表现为常闭触点</li>
                      <li>• 实现"取反"的逻辑关系</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                    <h5 className="text-red-200 font-semibold mb-2">真值表</h5>
                    <div className="text-red-200 text-xs font-mono">
                      <div>A | 输出</div>
                      <div>0 | 1</div>
                      <div>1 | 0</div>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <p className="text-red-200 text-sm">
                      <strong>应用实例：</strong>急停按钮（常闭） → 系统停止
                    </p>
                  </div>
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
            掌握基础指令的实现原理和编程技巧
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">基础指令实现原理</h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-blue-300 font-semibold mb-2">触点指令原理</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• 常开触点：输入为1时触点闭合，为0时触点断开</li>
                  <li>• 常闭触点：输入为1时触点断开，为0时触点闭合</li>
                  <li>• 触点状态直接影响能流的通断</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-green-300 font-semibold mb-2">线圈指令原理</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• 输出线圈：有能流时线圈得电，输出为1</li>
                  <li>• 设置线圈：有能流时置位，保持状态</li>
                  <li>• 复位线圈：有能流时复位，清零状态</li>
                </ul>
              </div>
              <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4">
                <p className="text-green-200 text-sm">
                  <strong>关键概念：</strong>能流（电流）是梯形图逻辑执行的核心，只有当能流能够从左母线流到右母线时，输出线圈才会得电。
                </p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">编程注意事项</h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-purple-300 font-semibold mb-2">程序结构要求</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• 每个网络必须从左母线开始</li>
                  <li>• 输出线圈必须连接到右母线</li>
                  <li>• 触点不能直接连接右母线</li>
                  <li>• 避免短路和开路的逻辑结构</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-orange-300 font-semibold mb-2">命名规范</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• 使用有意义的变量名称</li>
                  <li>• 输入变量以I开头，输出变量以Q开头</li>
                  <li>• 内部变量以M开头</li>
                  <li>• 添加注释说明程序功能</li>
                </ul>
              </div>
              <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-4">
                <p className="text-orange-200 text-sm">
                  <strong>编程技巧：</strong>合理使用串联和并联组合，可以实现复杂的逻辑控制。先画出逻辑流程图，再转换为梯形图程序。
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
            通过点动控制和自锁控制程序掌握梯形图编程的实际应用
          </p>
        </div>

        <div className="space-y-8">
          {/* 点动控制程序逻辑分析与实践 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">点动控制程序逻辑分析与实践</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-300 mb-4">控制要求分析</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">点动控制特点</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 按下启动按钮，电机立即启动</li>
                      <li>• 松开启动按钮，电机立即停止</li>
                      <li>• 不具备自保持功能</li>
                      <li>• 适用于短时间操作场合</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4">
                    <p className="text-blue-200 text-sm">
                      <strong>应用场景：</strong>机床点动调试、输送带微调位置、起重机精确定位等需要精确控制的场合。
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-green-300 mb-4 mt-6">I/O地址分配</h4>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-green-300 font-mono text-sm">I0.0</span>
                      <span className="text-white/80 text-sm">启动按钮（常开）</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-300 font-mono text-sm">I0.1</span>
                      <span className="text-white/80 text-sm">停止按钮（常闭）</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-300 font-mono text-sm">Q0.0</span>
                      <span className="text-white/80 text-sm">电机接触器</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-purple-300 mb-4">梯形图程序实现</h4>
                <div className="space-y-4">
                  <div className="bg-gray-900/70 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-3">Network 1: 点动控制</h5>
                    <div className="bg-black/50 rounded p-4 font-mono text-sm">
                      <div className="text-green-300">
                        ┌──[I0.0]──[I0.1]──( Q0.0 )─┐<br/>
                        │   START   STOP    MOTOR   │<br/>
                        └─────────────────────────────┘
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-600/30 rounded-lg p-4">
                    <h5 className="text-purple-200 font-semibold mb-2">程序逻辑说明</h5>
                    <ul className="space-y-2 text-purple-200 text-sm">
                      <li>• I0.0（启动按钮）与I0.1（停止按钮）串联</li>
                      <li>• 只有同时满足两个条件时Q0.0才得电</li>
                      <li>• 启动按钮按下且停止按钮未按下时电机运行</li>
                      <li>• 松开启动按钮或按下停止按钮电机停止</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-orange-300 mb-4 mt-6">实践操作步骤</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span className="text-white/80 text-sm">在TIA Portal中创建新项目和PLC设备</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span className="text-white/80 text-sm">添加Main程序块（OB1）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span className="text-white/80 text-sm">插入触点指令：常开触点I0.0，常闭触点I0.1</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                    <span className="text-white/80 text-sm">添加输出线圈Q0.0</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">5</div>
                    <span className="text-white/80 text-sm">编译程序并下载到PLC进行测试</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 自锁控制程序逻辑分析与实践 */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">自锁控制程序逻辑分析与实践</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-cyan-300 mb-4">控制要求分析</h4>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-2">自锁控制特点</h5>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• 按下启动按钮，电机启动并保持运行</li>
                      <li>• 松开启动按钮，电机继续运行</li>
                      <li>• 按下停止按钮，电机停止运行</li>
                      <li>• 具备自保持功能，适用于连续运行</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-600/30 rounded-lg p-4">
                    <p className="text-cyan-200 text-sm">
                      <strong>应用场景：</strong>水泵控制、风机控制、输送带控制等需要连续运行的设备控制。
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-yellow-300 mb-4 mt-6">I/O地址分配</h4>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-300 font-mono text-sm">I0.0</span>
                      <span className="text-white/80 text-sm">启动按钮（常开）</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-300 font-mono text-sm">I0.1</span>
                      <span className="text-white/80 text-sm">停止按钮（常闭）</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-300 font-mono text-sm">Q0.0</span>
                      <span className="text-white/80 text-sm">电机接触器</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-300 font-mono text-sm">M0.0</span>
                      <span className="text-white/80 text-sm">自锁中间变量</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-300 mb-4">梯形图程序实现</h4>
                <div className="space-y-4">
                  <div className="bg-gray-900/70 rounded-lg p-4">
                    <h5 className="text-white font-semibold mb-3">Network 1: 自锁控制</h5>
                    <div className="bg-black/50 rounded p-4 font-mono text-sm">
                      <div className="text-green-300">
                        ┌──[I0.0]──┬──[I0.1]──( Q0.0 )─┐<br/>
                        │  START  │   STOP    MOTOR   │<br/>
                        │         │                   │<br/>
                        └──[Q0.0]─┘                   │<br/>
                        &nbsp;&nbsp;&nbsp;SELF-LOCK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br/>
                        └─────────────────────────────┘
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                    <h5 className="text-red-200 font-semibold mb-2">程序逻辑说明</h5>
                    <ul className="space-y-2 text-red-200 text-sm">
                      <li>• I0.0（启动按钮）与Q0.0（自锁触点）并联</li>
                      <li>• 并联结果与I0.1（停止按钮）串联驱动Q0.0</li>
                      <li>• 按下启动按钮，Q0.0得电并自锁</li>
                      <li>• 松开启动按钮，通过Q0.0自锁触点保持得电</li>
                      <li>• 按下停止按钮，切断电路，Q0.0失电</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-indigo-300 mb-4 mt-6">实践操作步骤</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span className="text-white/80 text-sm">创建新的程序网络Network 2</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span className="text-white/80 text-sm">插入常开触点I0.0（启动按钮）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span className="text-white/80 text-sm">在I0.0下方并联常开触点Q0.0（自锁触点）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                    <span className="text-white/80 text-sm">在并联结果后串联常闭触点I0.1（停止按钮）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">5</div>
                    <span className="text-white/80 text-sm">添加输出线圈Q0.0并测试自锁功能</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
              <h4 className="text-yellow-200 font-semibold mb-3">重要提示：点动与自锁控制的区别</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">点动控制</h5>
                  <ul className="space-y-1 text-yellow-100 text-sm">
                    <li>• 按住启动按钮才运行</li>
                    <li>• 松开按钮立即停止</li>
                    <li>• 无自保持功能</li>
                    <li>• 适用于短时操作</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-2">自锁控制</h5>
                  <ul className="space-y-1 text-yellow-100 text-sm">
                    <li>• 按一下启动按钮即可运行</li>
                    <li>• 松开按钮继续运行</li>
                    <li>• 具备自保持功能</li>
                    <li>• 适用于连续运行</li>
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
            继续学习TIA Portal操作
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            现在您已经掌握了梯形图编程基础，让我们学习西门子TIA Portal软件的具体操作方法。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/tia-portal" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" />
                <span>下一章：TIA Portal操作</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/io-wiring" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>上一章：接线规范</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LadderDiagramPage;
