import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../App';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  // Updated nav items to match the section IDs in your app
  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu on click
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-card-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-primary"
        >
          Leo Lunario
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="flex gap-4 items-center ml-4">
            <a href="https://github.com/lvlunario" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground/70 hover:text-primary transition-colors">
              <FiGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com/in/LeonardoLunario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors">
              <FiLinkedin className="text-xl" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-foreground/70 hover:text-primary transition-colors"
              aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkTheme ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-foreground/70 hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            className="p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-background border-t border-card-border"
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}