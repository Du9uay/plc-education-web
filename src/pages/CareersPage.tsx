import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  CheckCircle,
  Target,
  BookOpen,
  Settings,
  Cpu,
  Zap,
  ArrowRight
} from '../components/Icons';

const CareersPage: React.FC = () => {
  const marketTrends = [
    {
      title: 'PLC相关岗位需求上升',
      description: '随着制造业自动化升级，PLC相关岗位需求量呈上升趋势',
      icon: <Target className="w-6 h-6" />,
      fields: ['离散制造（汽车制造、机械加工）', '过程控制（化工、电力）', '基础设施（智能楼宇）'],
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=250&fit=crop&auto=format'
    },
    {
      title: '国产PLC发展机遇',
      description: '国内PLC品牌不断发展，带动熟悉国产PLC技术的岗位需求增长',
      icon: <Award className="w-6 h-6" />,
      fields: ['PLC编程工程师', '自动化控制工程师', '设备调试工程师'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&auto=format'
    }
  ];

  const jobRequirements = [
    {
      category: '教育背景',
      requirement: '电气自动化、机电一体化等相关专业大专及以上学历',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-blue-400 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&auto=format'
    },
    {
      category: '技能证书',
      requirement: '部分企业要求具备PLC相关认证证书，如西门子PLC认证、三菱PLC认证等',
      icon: <Award className="w-6 h-6" />,
      color: 'from-green-400 to-blue-600',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=300&h=200&fit=crop&auto=format'
    },
    {
      category: '基础技能',
      requirement: '需掌握电气原理、电路接线知识，熟悉PLC编程软件（如TIA Portal、GX Works等），具备基本的硬件接线与调试能力',
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-600',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=300&h=200&fit=crop&auto=format'
    }
  ];

  const skillMapping = [
    {
      knowledge: 'PLC行业认知与基础框架',
      skills: [
        {
          area: '工业控制器分类对比',
          requirement: '能根据工业控制场景（离散制造、过程控制等）选择合适的工业控制器',
          icon: <Settings className="w-6 h-6" />
        },
        {
          area: 'PLC发展历史与品牌简介',
          requirement: '了解不同品牌PLC的特点，能根据项目需求选择适配的PLC品牌及型号',
          icon: <BookOpen className="w-6 h-6" />
        },
        {
          area: '典型应用场景认知',
          requirement: '能分析不同应用场景的控制需求，设计相应的PLC控制方案',
          icon: <Target className="w-6 h-6" />
        }
      ]
    },
    {
      knowledge: '技术要点与操作方法',
      skills: [
        {
          area: '工业控制器分类对比要点分析',
          requirement: '熟练对比不同工业控制器的适用场景、功能特点等，精准选择并配置控制器',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          area: 'PLC典型应用场景的操作方法思考',
          requirement: '能根据应用场景编写梯形图程序，进行硬件接线，并调试PLC控制程序',
          icon: <Zap className="w-6 h-6" />
        }
      ]
    },
    {
      knowledge: '实践应用与操作要点',
      skills: [
        {
          area: '工业控制器分类对比实践步骤',
          requirement: '能按照步骤明确工业控制需求，收集并对比不同控制器信息，选择最优控制器',
          icon: <CheckCircle className="w-6 h-6" />
        },
        {
          area: 'PLC在汽车装配线应用的实践步骤',
          requirement: '能独立编写梯形图程序、进行硬件接线与调试，解决PLC应用中的实际问题',
          icon: <Target className="w-6 h-6" />
        }
      ]
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
              职业发展前景
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              了解PLC相关岗位需求、门槛要求与技能对应关系，为职业发展做好规划
            </p>
            
            {/* 职业发展图片展示 */}
            <div className="flex justify-center mb-6">
              <div className="grid grid-cols-3 gap-4 max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=120&h=80&fit=crop&auto=format" 
                  alt="工业现场"
                  className="rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=80&fit=crop&auto=format" 
                  alt="技能学习"
                  className="rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=120&h=80&fit=crop&auto=format" 
                  alt="职业认证"
                  className="rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">市场需求趋势</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            国内制造业自动化升级推动PLC人才需求持续增长
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {marketTrends.map((trend, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
              {/* 趋势图片 */}
              <div className="relative h-48">
                <img 
                  src={trend.image}
                  alt={trend.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    {trend.icon}
                  </div>
                </div>
              </div>
              
              {/* 趋势内容 */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {trend.title}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {trend.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3">重点领域：</h4>
                  {trend.fields.map((field, fieldIndex) => (
                    <div key={fieldIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm">{field}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Requirements */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">岗位门槛要求</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            PLC相关岗位的基本要求与准入门槛
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {jobRequirements.map((req, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
              {/* 要求图片 */}
              <div className="relative h-32">
                <img 
                  src={req.image}
                  alt={req.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${req.color} rounded-lg flex items-center justify-center`}>
                    {req.icon}
                  </div>
                </div>
              </div>
              
              {/* 要求内容 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  {req.category}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {req.requirement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skill Mapping */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">技能对应关系</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            课程知识点与实际岗位技能要求的对应关系
          </p>
        </div>

        <div className="space-y-8">
          {skillMapping.map((mapping, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {mapping.knowledge}
              </h3>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                {mapping.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-3">
                          {skill.area}
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {skill.requirement}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            开启PLC职业发展之路
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            通过系统学习PLC技术，掌握工业自动化核心技能，为职业发展奠定坚实基础
          </p>
          
          {/* 职业发展路径图 */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=120&fit=crop&auto=format"
                  alt="基础学习"
                  className="w-full h-24 object-cover rounded-lg mb-3"
                />
                <h4 className="text-white font-semibold text-sm">基础技能培养</h4>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=200&h=120&fit=crop&auto=format"
                  alt="实践应用"
                  className="w-full h-24 object-cover rounded-lg mb-3"
                />
                <h4 className="text-white font-semibold text-sm">实践项目经验</h4>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=120&fit=crop&auto=format"
                  alt="职业发展"
                  className="w-full h-24 object-cover rounded-lg mb-3"
                />
                <h4 className="text-white font-semibold text-sm">职业发展提升</h4>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/course/automation-industry" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
                <span>开始学习</span>
              </Link>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full inline-block">
              <Link to="/objectives" className="px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
                <span>了解学习目标</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage; 