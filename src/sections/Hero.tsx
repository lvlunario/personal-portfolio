import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function Hero() {
    return (
        <div className="min-h-screen flex items-center pt-16">
            <div className="max-w-6zl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
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