import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navItems = [
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.a
                href="#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-x1 font-medium"
                >
                    <span className="font-bold"></span>
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
                            className="hover:text-accent transition-colors text-sm font-medium"
                            >
                                {item.name}
                            </a>
                        </motion.li>
                        ))}
                    </ul>
                    <div className="flex gap-4 ml-6">
                        <a href="https://github.com/lvlunario" aria-label="GitHub">
                            <FiGithub className="text-xl hover:text-accent transition-colors" />
                        </a>
                        <a href="https://linkedin.com/in/LeonardoLunario" aria-label="LinkedIn">
                            <FiLinkedin className="text-xl hover:text-accent transition-colors" />
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
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
                        className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
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
                                    className="block py-2 hover:text-accent transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/lvlunario" className="p-2">
                                    <FiGithub size={20} />
                                </a>
                                <a href="https://linkedin.com/in/LeonardoLunario" className="p-2">
                                    <FiLinkedin size={20} />
                                </a>
                            </div>
                        </ul>
                    </motion.div>
                )}
        </header>
    );
}