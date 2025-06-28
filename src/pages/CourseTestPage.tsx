import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target,
  CheckCircle,
  Settings,
  Cpu,
  Zap,
  Monitor,
  Eye,
  ArrowRight,
  Award,
  BookOpen
} from '../components/Icons';

interface Question {
  id: number;
  type: 'choice' | 'fill' | 'connect' | 'order' | 'match';
  difficulty: '低' | '中' | '高';
  question: string;
  options?: string[] | { left: string[]; right: string[]; };
  answer: any;
  userAnswer?: any;
  explanation?: string;
}

const CourseTestPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: any}>({});
  const [showResults, setShowResults] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  
  // 连线题状态
  const [connections, setConnections] = useState<{[key: string]: string}>({});
  // 排序题状态  
  const [orderItems, setOrderItems] = useState<string[]>([]);
  // 配对题状态
  const [matches, setMatches] = useState<{[key: string]: string}>({});

  const questions: Question[] = [
    {
      id: 1,
      type: 'choice',
      difficulty: '低',
      question: '工业控制器中，适用于离散制造的是（  ）',
      options: ['DCS', 'PLC', 'SCADA', '变频器'],
      answer: 'PLC',
      explanation: 'PLC（可编程逻辑控制器）适用于离散制造场景，如汽车装配线、机械加工等。'
    },
    {
      id: 2,
      type: 'choice',
      difficulty: '低',
      question: 'PLC发展历程中，第几代开始支持复杂运动控制与远程监控？（  ）',
      options: ['第一代', '第二代', '第三代', '都不支持'],
      answer: '第三代',
      explanation: '第三代PLC从20世纪90年代开始发展，采用了更先进的微处理器和通信技术，支持复杂的运动控制和远程监控功能。'
    },
    {
      id: 3,
      type: 'fill',
      difficulty: '中',
      question: 'PLC硬件最小系统由CPU、_____和I/O模块构成。',
      answer: '电源',
      explanation: 'PLC的硬件最小系统由CPU模块、电源模块和I/O模块三部分组成。'
    },
    {
      id: 4,
      type: 'connect',
      difficulty: '高',
      question: '请将左侧工业控制器与右侧适用场景连线：',
      options: {
        left: ['PLC', 'DCS', 'SCADA'],
        right: ['A. 过程控制', 'B. 离散制造', 'C. 远程监控']
      },
      answer: {'PLC': 'B. 离散制造', 'DCS': 'A. 过程控制', 'SCADA': 'C. 远程监控'},
      explanation: 'PLC适用于离散制造，DCS用于过程控制，SCADA用于远程监控。'
    },
    {
      id: 5,
      type: 'order',
      difficulty: '中',
      question: '请将PLC扫描循环工作流程按顺序排序：',
      options: ['①程序执行', '②输入采样', '③输出刷新', '④内部处理'],
      answer: ['④内部处理', '②输入采样', '①程序执行', '③输出刷新'],
      explanation: 'PLC扫描循环的正确顺序是：内部处理→输入采样→程序执行→输出刷新。'
    },
    {
      id: 6,
      type: 'match',
      difficulty: '低',
      question: '请将左侧PLC相关术语与右侧解释配对：',
      options: {
        left: ['常开触点', '常闭触点', 'TON定时器'],
        right: ['A. 延时接通定时器指令', 'B. 触点闭合时允许电流通过', 'C. 触点断开时允许电流通过']
      },
      answer: {'常开触点': 'B. 触点闭合时允许电流通过', '常闭触点': 'C. 触点断开时允许电流通过', 'TON定时器': 'A. 延时接通定时器指令'},
      explanation: '常开触点在闭合时导通，常闭触点在断开时导通，TON是延时接通定时器指令。'
    }
  ];

  // 在题目切换时重置状态
  useEffect(() => {
    const currentQ = questions[currentQuestion];
    if (currentQ.type === 'order' && Array.isArray(currentQ.options)) {
      setOrderItems([...currentQ.options]);
    } else {
      setOrderItems([]);
    }
    setConnections({});
    setMatches({});
  }, [currentQuestion, questions]);

  const handleAnswerChange = (questionId: number, answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      const userAnswer = answers[q.id];
      if (q.type === 'choice' || q.type === 'fill') {
        if (userAnswer === q.answer) correct++;
      } else if (q.type === 'order') {
        if (JSON.stringify(userAnswer) === JSON.stringify(q.answer)) correct++;
      } else if (q.type === 'connect' || q.type === 'match') {
        if (JSON.stringify(userAnswer) === JSON.stringify(q.answer)) correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const currentQ = questions[currentQuestion];

  const renderQuestion = () => {
    switch (currentQ.type) {
      case 'choice':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">{currentQ.question}</h3>
            <div className="space-y-3">
              {Array.isArray(currentQ.options) && currentQ.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswerChange(currentQ.id, option)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    answers[currentQ.id] === option
                      ? 'border-blue-400 bg-blue-900/20 text-blue-300'
                      : 'border-white/20 bg-white/5 text-white/80 hover:border-white/40'
                  }`}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 'fill':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">{currentQ.question}</h3>
            <input
              type="text"
              value={answers[currentQ.id] || ''}
              onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
              className="w-full p-4 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none"
              placeholder="请输入答案"
            />
          </div>
        );

      case 'connect':
        const connectOptions = currentQ.options as { left: string[]; right: string[]; };
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">{currentQ.question}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">左侧：</h4>
                <div className="space-y-2">
                  {connectOptions?.left.map((item: string, index: number) => (
                    <div key={index} className="p-3 border border-white/20 rounded-lg bg-white/5 text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">右侧：</h4>
                <div className="space-y-2">
                  {connectOptions?.right.map((item: string, index: number) => (
                    <div key={index} className="p-3 border border-white/20 rounded-lg bg-white/5 text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-4">您的连线：</h4>
              {connectOptions?.left.map((leftItem: string) => (
                <div key={leftItem} className="mb-3">
                  <span className="text-white mr-4">{leftItem} →</span>
                  <select
                    value={connections[leftItem] || ''}
                    onChange={(e) => {
                      const newConnections = {...connections, [leftItem]: e.target.value};
                      setConnections(newConnections);
                      handleAnswerChange(currentQ.id, newConnections);
                    }}
                    className="p-2 rounded border border-white/20 bg-white/5 text-white"
                  >
                    <option value="">请选择</option>
                    {connectOptions?.right.map((rightItem: string, index: number) => (
                      <option key={index} value={rightItem}>{rightItem}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        );

      case 'order':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">{currentQ.question}</h3>
            <div className="space-y-2">
              {orderItems.map((item: string, index: number) => (
                <div
                  key={index}
                  className="p-3 border border-white/20 rounded-lg bg-white/5 text-white cursor-move"
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData('text/plain', index.toString())}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
                    const dropIndex = index;
                    const newItems = [...orderItems];
                    [newItems[dragIndex], newItems[dropIndex]] = [newItems[dropIndex], newItems[dragIndex]];
                    setOrderItems(newItems);
                    handleAnswerChange(currentQ.id, newItems);
                  }}
                >
                  {index + 1}. {item}
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm">拖拽重新排序</p>
          </div>
        );

      case 'match':
        const matchOptions = currentQ.options as { left: string[]; right: string[]; };
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">{currentQ.question}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">左侧术语：</h4>
                <div className="space-y-2">
                  {matchOptions?.left.map((item: string, index: number) => (
                    <div key={index} className="p-3 border border-white/20 rounded-lg bg-white/5 text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">右侧解释：</h4>
                <div className="space-y-2">
                  {matchOptions?.right.map((item: string, index: number) => (
                    <div key={index} className="p-3 border border-white/20 rounded-lg bg-white/5 text-white">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-4">您的配对：</h4>
              {matchOptions?.left.map((leftItem: string) => (
                <div key={leftItem} className="mb-3">
                  <span className="text-white mr-4">{leftItem} →</span>
                  <select
                    value={matches[leftItem] || ''}
                    onChange={(e) => {
                      const newMatches = {...matches, [leftItem]: e.target.value};
                      setMatches(newMatches);
                      handleAnswerChange(currentQ.id, newMatches);
                    }}
                    className="p-2 rounded border border-white/20 bg-white/5 text-white"
                  >
                    <option value="">请选择</option>
                    {matchOptions?.right.map((rightItem: string, index: number) => (
                      <option key={index} value={rightItem}>{rightItem}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <main className="relative z-10 py-8">
        <section className="mb-16 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              测试完成！
            </h1>
            <div className="text-6xl font-bold text-white mb-4">
              {score}分
            </div>
            <p className="text-xl text-white/80 mb-8">
              {score >= 90 ? '优秀！您已充分掌握课程内容' : 
               score >= 80 ? '良好！还需要进一步学习' :
               score >= 60 ? '及格！建议复习相关知识点' :
               '需要加强学习，建议重新学习课程内容'}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">答对题数</h3>
                <p className="text-2xl font-bold text-green-400">
                  {Math.round((score / 100) * questions.length)}/{questions.length}
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">正确率</h3>
                <p className="text-2xl font-bold text-blue-400">{score}%</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">评级</h3>
                <p className="text-2xl font-bold text-purple-400">
                  {score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 60 ? 'C' : 'D'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setTestCompleted(false);
                }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Target className="w-5 h-5" />
                <span>重新测试</span>
              </button>
              <a
                href="/"
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 text-white font-medium flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <BookOpen className="w-5 h-5" />
                <span>返回首页</span>
              </a>
            </div>
          </div>
        </section>

        {/* 答案解析 */}
        <section>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">答案解析</h2>
          </div>
          
          <div className="space-y-6">
            {questions.map((q, index) => {
              const userAnswer = answers[q.id];
              const isCorrect = 
                (q.type === 'choice' || q.type === 'fill') ? userAnswer === q.answer :
                (q.type === 'order') ? JSON.stringify(userAnswer) === JSON.stringify(q.answer) :
                (q.type === 'connect' || q.type === 'match') ? JSON.stringify(userAnswer) === JSON.stringify(q.answer) :
                false;
                
              return (
                <div key={q.id} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isCorrect ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-white font-semibold">{q.question}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          q.difficulty === '低' ? 'bg-green-900/20 text-green-300' :
                          q.difficulty === '中' ? 'bg-yellow-900/20 text-yellow-300' :
                          'bg-red-900/20 text-red-300'
                        }`}>
                          {q.difficulty}
                        </span>
                      </div>
                      <div className="text-white/80 mb-2">
                        <strong>正确答案：</strong> {typeof q.answer === 'object' ? JSON.stringify(q.answer) : q.answer}
                      </div>
                      <div className="text-white/80 mb-2">
                        <strong>您的答案：</strong> {typeof userAnswer === 'object' ? JSON.stringify(userAnswer) : userAnswer || '未答'}
                      </div>
                      <p className="text-white/70 text-sm">{q.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    );
  }

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
              课堂测试
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              通过多种题型测试您对PLC控制器基础知识的掌握程度
            </p>
            
            {/* 测试图片展示 */}
            <div className="flex justify-center mb-6">
              <div className="grid grid-cols-3 gap-4 max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=120&h=80&fit=crop&auto=format"
                  alt="知识测试"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=80&fit=crop&auto=format"
                  alt="技能检验"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=120&h=80&fit=crop&auto=format"
                  alt="能力评估"
                  className="rounded opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{questions.length}</div>
                <div className="text-sm">题目总数</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">5</div>
                <div className="text-sm">题型种类</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100</div>
                <div className="text-sm">满分</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="mb-16">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-semibold">
                题目 {currentQuestion + 1} / {questions.length}
              </span>
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  currentQ.difficulty === '低' ? 'bg-green-900/20 text-green-300' :
                  currentQ.difficulty === '中' ? 'bg-yellow-900/20 text-yellow-300' :
                  'bg-red-900/20 text-red-300'
                }`}>
                  {currentQ.difficulty}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  currentQ.type === 'choice' ? 'bg-blue-900/20 text-blue-300' :
                  currentQ.type === 'fill' ? 'bg-purple-900/20 text-purple-300' :
                  currentQ.type === 'connect' ? 'bg-orange-900/20 text-orange-300' :
                  currentQ.type === 'order' ? 'bg-pink-900/20 text-pink-300' :
                  'bg-indigo-900/20 text-indigo-300'
                }`}>
                  {currentQ.type === 'choice' ? '选择题' :
                   currentQ.type === 'fill' ? '填空题' :
                   currentQ.type === 'connect' ? '连线题' :
                   currentQ.type === 'order' ? '排序题' :
                   '配对题'}
                </span>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Content */}
          {renderQuestion()}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
            >
              上一题
            </button>
            
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={() => setShowResults(true)}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-600 text-white font-semibold hover:scale-105 transition-transform flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>提交测试</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold hover:scale-105 transition-transform flex items-center space-x-2"
              >
                <span>下一题</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseTestPage;
