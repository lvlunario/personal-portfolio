// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
    return (
        <AnimatedSection>
            <section className="relative isolate">
            {/* Background Gradients */}
            <div className="absolute top-1/3 right-0 -z-10 w-96 h-96 bg-accent/30 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
            <div className="absolute top-1/4 left-0 -z-10 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] mix-blend-multiply opacity-70" />

            {/* Hero Content */}
            <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I’m <span className="text-accent">Leonardo Lunario</span>
            </h1>

            <p className="text-xl text-muted-foreground font-medium">
                Engineer 👷‍♂️ • Project Manager 📈 • Lifelong Learner 📚
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
                I’m passionate about solving real-world problems using systems engineering,
                project leadership, and continuous innovation. From SCADA systems to drones
                and quantum demos — I make tech work for people.
            </p>

            {/* Labels */}
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full shadow">
                🎓 UCLA MS, Engineering
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-600 text-white text-xs rounded-full shadow">
                🏗 14+ yrs Systems & Embedded
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-pink-600 text-white text-xs rounded-full shadow">
                🧠 PMP • Remote Ops • FIRE Path
                </span>
                </div>

             {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                <a
                    href="#contact"
                    className="px-6 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 transition"
                    aria-label="Contact Leonardo"
                >
                    Contact Me
                </a>
                <a
                    href="#projects"
                    className="px-6 py-3 border border-accent text-accent rounded-xl hover:bg-accent hover:text-white transition"
                    aria-label="View Leonardo's Work"
                >
                    View My Work
                </a>
                <a
                    href="/assets/Leonardo-Lunario-Resume.pdf"
                    className="px-6 py-3 border border-secondary text-secondary rounded-xl hover:bg-secondary hover:text-white transition"
                    download
                >
                    Download Resume
                </a>
                </div>
            </motion.div>

            {/* Avatar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative w-[80vw] max-w-[320px] aspect-square mx-auto overflow-hidden rounded-2xl"
            >
            <div className="absolute inset-0 bg-muted flex items-center justify-center text-6xl">
                👤
            </div>
            <img
                src="/assets/leo-avatar.png"
                alt="Leonardo Lunario"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
