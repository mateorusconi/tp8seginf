import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InternetVsIntranet from './pages/InternetVsIntranet';
import SecurityPlanning from './pages/SecurityPlanning';
import Policies from './pages/Policies';
import DashboardPage from './pages/DashboardPage';
import CaseStudyPage from './pages/CaseStudyPage';
import { AnimatePresence } from 'framer-motion';

// Theme Context for manual toggling if needed outside Tailwind's class strategy
export const ThemeContext = React.createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HashRouter>
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-orange-500/30">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow pt-16">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/concepts" element={<InternetVsIntranet />} />
                <Route path="/planning" element={<SecurityPlanning />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/case-study" element={<CaseStudyPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeContext.Provider>
  );
};

export default App;