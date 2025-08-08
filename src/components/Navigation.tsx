import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu } from './Icons';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const courseModules = [
    { name: 'PLC行业认知与基础框架', path: '/course/automation-industry' },
    { name: 'PLC核心定位与硬件基础', path: '/course/plc-basics' },
    { name: '电气接线与信号认知', path: '/course/io-wiring' },
    { name: 'PLC程序开发与调试', path: '/course/program-development' },
    { name: 'PLC安全强化', path: '/course/safety' }
  ];

  // const additionalPages = [
  //   { name: '课程总结', path: '/course-summary' },
  //   { name: '课堂测试', path: '/course-test' }
  // ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-lg">PLC基础教学</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActivePath('/') ? 'text-blue-300' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课程首页
            </Link>

            <Link
              to="/objectives"
              className={`text-sm font-medium transition-colors ${
                isActivePath('/objectives') ? 'text-blue-300' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              学习目标
            </Link>
            <Link
              to="/careers"
              className={`text-sm font-medium transition-colors ${
                isActivePath('/careers') ? 'text-blue-300' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              职业发展
            </Link>

            {/* 课程章节下拉菜单 */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>课程章节</span>
                <svg className={`w-4 h-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCoursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 backdrop-blur-md bg-slate-900/80 border border-white/20 rounded-lg shadow-xl">
                  {courseModules.map((module, index) => (
                    <Link
                      key={index}
                      to={module.path}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        isActivePath(module.path) 
                          ? 'text-blue-300 bg-blue-900/50' 
                          : 'text-white hover:text-white hover:bg-white/10'
                      } ${index === 0 ? 'rounded-t-lg' : ''} ${index === courseModules.length - 1 ? 'rounded-b-lg' : ''}`}
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      {module.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/course-summary"
              className={`text-sm font-medium transition-colors ${
                isActivePath('/course-summary') ? 'text-blue-300' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课程总结
            </Link>
            <Link
              to="/course-test"
              className={`text-sm font-medium transition-colors ${
                isActivePath('/course-test') ? 'text-blue-300' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课堂测试
            </Link>
            <Link
              to="/homework"
              className={`text-sm font-medium transition-colors ${
                isActivePath('/homework') ? 'text-blue-300' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsCoursesOpen(false)}
            >
              课后作业
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/') ? 'text-blue-300 bg-blue-900/20' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课程首页
            </Link>

            <Link
              to="/objectives"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/objectives') ? 'text-blue-300 bg-blue-900/20' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              学习目标
            </Link>
            <Link
              to="/careers"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/careers') ? 'text-blue-300 bg-blue-900/20' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              职业发展
            </Link>
            
            {/* 移动端课程章节 */}
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-white/60 mb-2">课程章节</div>
              <div className="pl-4 space-y-1">
                {courseModules.map((module, index) => (
                  <Link
                    key={index}
                    to={module.path}
                    className={`block py-2 text-sm transition-colors ${
                      isActivePath(module.path) ? 'text-blue-300' : 'text-white/70 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {module.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/course-summary"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/course-summary') ? 'text-blue-300 bg-blue-900/20' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课程总结
            </Link>
            <Link
              to="/course-test"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/course-test') ? 'text-blue-300 bg-blue-900/20' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课堂测试
            </Link>
            <Link
              to="/homework"
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActivePath('/homework') ? 'text-blue-300 bg-blue-900/20' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              课后作业
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 