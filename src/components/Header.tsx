import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../App';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    const navItems = [
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full ${isDarkTheme ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm z-50 border-b ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.a
                    href="#"
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
                                    className="hover:text-primary transition-colors text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    <div className="flex gap-4 ml-6">
                        <a href="https://github.com/lvlunario" aria-label="GitHub" className="hover:text-primary transition-colors">
                            <FiGithub className="text-xl" />
                        </a>
                        <a href="https://linkedin.com/in/LeonardoLunario" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                            <FiLinkedin className="text-xl" />
                        </a>
                    </div>
                    <button 
                        onClick={toggleTheme} 
                        className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
                        aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {isDarkTheme ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`md:hidden ${isDarkTheme ? 'bg-black' : 'bg-white'} border-t ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'}`}
                >
                    <ul className="flex flex-col px-6 py-4 gap-4">
                        {navItems.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * i }}
                            >
                                <a
                                    href={item.href}
                                    className="block py-2 hover:text-primary transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                        <div className="flex gap-4 pt-4">
                            <a href="https://github.com/lvlunario" className="p-2 hover:text-primary transition-colors">
                                <FiGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/LeonardoLunario" className="p-2 hover:text-primary transition-colors">
                                <FiLinkedin size={20} />
                            </a>
                        </div>
                    </ul>
                </motion.div>
            )}
        </header>
    );
}