import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ObjectivesPage from './pages/ObjectivesPage';
import CareersPage from './pages/CareersPage';
import AutomationIndustryPage from './pages/course/AutomationIndustryPage';
import PLCBasicsPage from './pages/course/PLCBasicsPage';
import IOWiringPage from './pages/course/IOWiringPage';
import LadderDiagramPage from './pages/course/LadderDiagramPage';
import TIAPortalPage from './pages/course/TIAPortalPage';
import SafetyPage from './pages/course/SafetyPage';
import CourseSummaryPage from './pages/CourseSummaryPage';
import CourseTestPage from './pages/CourseTestPage';
import AdvancedApplicationsPage from './pages/course/AdvancedApplicationsPage';
import PracticalProjectsPage from './pages/course/PracticalProjectsPage';
import ResourcesPage from './pages/ResourcesPage';

const App: React.FC = () => {
  return (
    <Router basename="/plc-education-web">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        

        
        {/* 导航栏 */}
        <Navigation />
        
        {/* 页面切换时自动滚动到顶部 */}
        <ScrollToTop />
        
        {/* 主要内容 - 添加居中容器 */}
        <div className="relative z-10 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/objectives" element={<ObjectivesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/course/automation-industry" element={<AutomationIndustryPage />} />
              <Route path="/course/plc-basics" element={<PLCBasicsPage />} />
              <Route path="/course/io-wiring" element={<IOWiringPage />} />
              <Route path="/course/ladder-diagram" element={<LadderDiagramPage />} />
              <Route path="/course/tia-portal" element={<TIAPortalPage />} />
              <Route path="/course/safety" element={<SafetyPage />} />
              <Route path="/course/advanced" element={<AdvancedApplicationsPage />} />
              <Route path="/course/projects" element={<PracticalProjectsPage />} />
              <Route path="/summary" element={<CourseSummaryPage />} />
              <Route path="/test" element={<CourseTestPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App; 