import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { ThemeContext } from '../App';
import { Button, cn } from './ui/Primitives';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Intranet vs Internet', path: '/concepts' },
  { name: 'Planificación', path: '/planning' },
  { name: 'Políticas', path: '/policies' },
  { name: 'SOC Dashboard', path: '/dashboard' },
  { name: 'Caso de Estudio', path: '/case-study' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            {/* UTN Logo - Using SVG for better quality, inverted in dark mode if needed, though official logos usually maintain colors. 
                Applying a brightness filter for dark mode to ensure visibility if it's black text. */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Logo_UTN.svg" 
              alt="UTN Logo" 
              className="h-10 w-auto dark:invert dark:brightness-200"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none hidden sm:block">TP8 <span className="text-orange-500">Seguridad</span></span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:block">Universidad Tecnológica Nacional</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-500",
                  location.pathname === item.path ? "text-orange-500" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="mr-2">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-foreground p-2">
              {isMobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === item.path ? "bg-accent text-orange-500" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;