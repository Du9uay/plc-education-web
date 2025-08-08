import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowRight, CheckCircle } from '../components/Icons';

const CareersPage: React.FC = () => {
  const careerPaths = [
    {
      title: '设备调试技术员',
      skills: [
        { name: '电气与电机基础', desc: '掌握电气布线、电机原理与控制，确保设备安全高效启动。' },
        { name: '机械传动与液压气动', desc: '理解机械动力传递和液气系统工作，进行精准调试与维修。' },
        { name: '机电系统集成', desc: '将电气、机械与自动化部件组合为完整系统，实现协同运行。' },
        { name: '传感与检测', desc: '配置传感器与视觉系统，保障设备智能化监测与反馈。' },
        { name: 'PLC与控制原理', desc: '应用PLC逻辑程序及通讯协议，实现自动化控制方案调试。', highlight: true },
        { name: '调试仿真技能', desc: '借助仿真平台进行预调试，提高调试效率并减少现场风险。' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '自动化技术员',
      skills: [
        { name: '机械、电气与液气一体化', desc: '统筹多领域部件，实现设备的协同工作。' },
        { name: '运动控制原理', desc: '调试步进与伺服电机，实现精确运动控制。' },
        { name: '传感与视觉识别系统', desc: '安装传感器与相机，提升生产质量监控。' },
        { name: 'PLC编程与网络通信', desc: '编写PLC程序并配置通讯，实现设备联动。', highlight: true },
        { name: '机器人集成与控制', desc: '将机器人引入自动化流程，提高作业效率。' },
        { name: '自动化产线与仿真工具', desc: '通过仿真验证产线功能，提升自动化项目部署可靠性。' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '工业机器人工程师',
      skills: [
        { name: '机器人系统基础', desc: '深入理解机器人构造与编程，掌握自动化抓取与运动。' },
        { name: '运动与驱动系统', desc: '运用伺服与步进系统实现高精度机器动作。' },
        { name: '感知系统', desc: '集成传感与视觉，实现环境感知与路径优化。' },
        { name: '控制系统与PLC/网络', desc: '开发控制逻辑并配置网络，实现机器人与系统联动。', highlight: true },
        { name: '系统集成与产线设计', desc: '将机器人嵌入工厂产线，实现高效生产布局。' },
        { name: '仿真与调试工具', desc: '通过仿真平台调试机器人流程，减少现场出错率。' }
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'PLC编程工程师',
      skills: [
        { name: 'PLC编程基础与标准', desc: '掌握梯形图、结构文本及标准，实现逻辑控制开发。', highlight: true },
        { name: '逻辑与运动控制', desc: '编程控制电机运转，实现定点、变速及同步运动。' },
        { name: '传感输入与视觉嵌入', desc: '处理传感器信号与视觉反馈，增强控制决策能力。' },
        { name: '工业通信协议', desc: '配置Modbus、Profinet等，实现设备间可靠互联。' },
        { name: '产线与系统集成', desc: '将控制程序嵌入产线，实现设备协同与生产优化。' },
        { name: '仿真与调试技能', desc: '透过仿真环境测试程序逻辑，缩短开发与调试周期。' }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-4">职业发展前景</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            通过本节课的学习，你可以掌握以下岗位的技能
          </p>
        </motion.div>

        {/* 职业发展路径 */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${path.color} flex items-center justify-center mb-4`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${path.color} bg-clip-text text-transparent`}>
                  {path.title}
                </h3>
                <div className="space-y-3">
                  {path.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className={`w-4 h-4 mt-1 mr-2 flex-shrink-0 ${skill.highlight ? 'text-green-400' : 'text-white/20'}`} />
                      <div>
                        <span className={`font-medium ${skill.highlight ? 'text-white' : 'text-white/40'}`}>
                          {skill.name}
                        </span>
                        <p className={`text-sm mt-1 ${skill.highlight ? 'text-white/80' : 'text-white/30'}`}>
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 开启你的PLC职业生涯 */}
        <motion.div 
          className="text-center py-16 px-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">开启你的PLC职业生涯</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            掌握PLC技术，抓住工业自动化发展机遇
          </p>
          <div className="flex justify-center">
            <Link 
              to="/course/automation-industry"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white hover:from-blue-700 hover:to-purple-700 transition-all flex items-center"
            >
              开始学习课程
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage; 