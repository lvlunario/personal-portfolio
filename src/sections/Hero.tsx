import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icoons/fi';
import AnimatedText from '../components/AnimatedText';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gray-300 dark:bg-gray-700/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6zl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="inline-block px-4 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium mb-6">
                            <span className="mr-2">👋</span> Hello, I'm Leo
                        </div>

                        <h1 className="text-4x1 md:text-6xl font-bold mb-6">
                            <AnimatedText text="Leonardo Lunario" />
                        </h1>

                        <div className="text-xl text-secondary mb-8 max-w-xl space-y-4">
                            <p>
                                <AnimatedText
                                    text="Engineer, Project Manager & Lifelong Learner"
                                    delay={0.6}
                                />
                            </p>

                            <div className="pl-4 border-l-2 border-accent mt-6 space-y-2">
                                <p className="flex items-start">
                                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">🎓</span>
                                    <span><strong>BS, Electrical Engineering</strong> (UCSD, 2008)</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">🎓</span>
                                    <span><strong>MS, Engineering</strong> (UCLA, 2013)</span>
                                </p>
                                <p className="flex items-start">
                                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">📜</span>
                                    <span><strong>PMP Certified</strong> | <strong>Remote Pilot in Command</strong></span>
                                </p>
                                <p className="flex items-start">
                                    <span className="bg-gray-100 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">🏡</span>
                                    <span><strong>Self-employed real estate owner</strong> in Maui, Hawaii & Philippines</span>
                                </p>
                            </div>

                            <p className="mt-6">
                                <AnimatedText
                                    text="Building a portfolio of technical and entrepreneurial projects"
                                    delay={1.0}
                                />
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <a
                            href="#work"
                            className="px-6 py-3 bg-gradient-to-r from-accent to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-accent/30 flex items-center"
                        >
                            View My Work
                            <FiArrowDown className="ml-2" />
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border-2 border-gray-800 dark:border-gray-200 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-all flex items-center"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                    >
                        <a
                            href="https://github.com/lvlunario"
                            aria-label="Github"
                            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent hover:text-white transition-colors"
                        >
                            <FiGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/leonardolunario"
                            aria-label="LinkedIn"
                            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                        >
                            <FiLinkedin size={20} />
                        </a>
                    </motion.div>
                </div>
                
                <AnimatedSection>
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity: 1, y:0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi, I'm <span className="text-accent">Leonardo Lunario</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-secondary mb-8 max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        I'm an engineer, project manager, and lifelong learner passionate about technology, innovation, and real-world impact.<br /><br />
                        <strong>BS, Electrical Engineering</strong> (UCSD, 2008)<br />
                        <strong>MS, Engineering</strong> (UCLA, 2013)<br />
                        <strong>Project Management Professional (PMP)</strong> | <strong>Remote Pilot in Command</strong><br />
                        <strong>Self-employed real estate owner</strong> in Maui &amp; the Philippines<br /><br />
                        My journey has taken me from unmanned aerospace systems, to space systems, to advancing renewable energy delivery across the state. Now, I’m building my own portfolio of technical and entrepreneurial projects.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a
                            href="#work"
                            className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border-2 border-primary dark:border-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-all"
                        >
                            Contact Me
                        </a>

                    </motion.div>
                </AnimatedSection>

                <AnimatedSection className="flex justify-center">
                    <div className="relative">
                        {/* Placeholder for your image/avatar */}
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80" />

                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.0, type: "spring" }}
                        />
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}