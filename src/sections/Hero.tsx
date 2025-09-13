import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection>
      <section id="home" className="relative isolate overflow-hidden bg-background text-foreground py-24 sm:py-32">
        {/* Decorative background gradients */}
        <div className="absolute -top-40 -right-40 -z-10 w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[150px] opacity-60" />
        <div className="absolute top-20 -left-60 -z-10 w-[40rem] h-[40rem] bg-secondary/20 rounded-full blur-[150px] opacity-50" />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Hi, I’m <span className="text-gradient">Leonardo Lunario</span>
            </h1>

            <TypeAnimation
              sequence={[
                'Systems Engineer', 2000,
                'Project Manager', 2000,
                'Full-Stack Developer', 2000,
                'Real Estate Entrepreneur', 2000,
                'Lifelong Learner', 2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-lg font-medium text-foreground/80 h-12"
              repeat={Infinity}
            />

            <p className="text-base leading-relaxed text-foreground/70 max-w-lg mx-auto md:mx-0">
              I build bridges between complex technology and real-world impact. From aerospace to modern web apps, I lead with persistent rigor and a passion for innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-6">
              <a
                href="mailto:leonardo.lunario@proton.me" // <-- UPDATE THIS LINE
                className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
                aria-label="Contact Leonardo"
              >
                Get in Touch
              </a>
              <Link
                to="/resume"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View My Resume <FiArrowRight />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 pt-4">
              <a href="https://github.com/lvlunario" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <FaGithub className="text-3xl text-foreground/60 hover:text-accent transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/leonardolunario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedin className="text-3xl text-foreground/60 hover:text-accent transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-[70vw] max-w-[300px] aspect-square mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 rounded-2xl shadow-2xl transform -rotate-6 transition-transform hover:rotate-0"></div>
            <img
              src="/assets/leo-avatar.png"
              alt="Leonardo Lunario"
              className="relative w-full h-full object-cover rounded-2xl shadow-xl border-4 border-background"
            />
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
