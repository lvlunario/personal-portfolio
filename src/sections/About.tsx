import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

export default function About() {
    const timeline = [
        {
            year: "2006-2008",
            title: "UC San Diego – BSc Electrical Engineering",
            description: "Graduated with a strong foundation in digital/analog circuits and applied sciences."
        },
        {
            year: "2008–2014",
            title: "Northrop Grumman",
            description: "Led system level 1-3 testing and integration and various software developement in unmanned and satellite system projects, specializing in hardware-software integration."
        },
        {
            year: "2013",
            title: "UCLA – MSc Engineering",
            description: "Focused on systems engineering, advanced systems integration, and project leadership while balancing work in industry."
        },
        {
            year: "2014–2015",
            title: "L-3 Linkabit",
            description: "Developed embedded software and communication systems for defense programs."
        },
        {
            year: "2015–2020",
            title: "Maui Electric",
            description: "Worked on SCADA/EMS systems and power grid integration — bridging energy and control systems."

        },
        {
            year: "2020",
            title: "FIRE & Entrepreneurship",
            description: "Achieved financial independence at 35. Built a real estate portfolio in Maui and the Philippines."
        },
        {
            year: "2015–Present",
            title: "Owner of Maui Oceanfron Condominium and Casa de Oasay (PH)",
            description: "Manage and market short-term rentals in Maui and Philippines.  Focused on family, continuous learning, and exploration in projects related to AI, quantum software, and full-stack development."
        },
    ];

    return (
        <AnimatedSection>
            <section id="about" className="py-20 bg-background text-foreground">
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                                I’m <span className="font-semibold text-accent">Leonardo Lunario</span>, 
                                an engineer, project manager, and lifelong learner. My career has taken me across 
                                the <span className="font-medium">energy, aerospace, and defense industries</span>, 
                                where I’ve led cross-functional teams and delivered complex systems from concept to deployment. 
                            </p>

                            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                                Outside of industry, I’ve built a path of independence through 
                                <span className="font-medium"> real estate ownership and remote operations</span>. 
                                I’m passionate about making technology useful in people’s everyday lives — from embedded systems 
                                and drones, to modern web applications. 
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At my core, I value <span className="font-medium">rigor, curiosity, and family</span>. 
                                Whether I’m mentoring my kids, contributing to technical projects, or exploring new ideas, 
                                I’m always looking for ways to connect <span className="font-medium">innovation with real-world impact</span>.
                            </p>

                            {/* Skills / Highlights */}
                            <div className="grid sm:grid-cols-2 gap-6 pt-8">
                                <div className="p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition">
                                    <h3 className="text-xl font-semibold mb-2">Technical Toolkit</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Systems Engineering • Project Management • Embedded SW • Python • C/C++ • Full-Stack (React, Node.js) • AI/ML tools
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition">
                                    <h3 className="text-xl font-semibold mb-2">Core Values</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Ostinato rigore (persistent rigor) • Lifelong learning • Building with integrity • Family first
                                    </p>
                                </div>
                            </div>

                            {/* Career Timeline */}
                            <div className="pt-12">
                                <h3 className="text-2xl font-bold mb-8">Career Journey</h3>
                                <div className="relative border-l border-border">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2, duration: 0.6 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="mb-10 ml-6"
                                    >
                                        <div className="absolute w-3 h-3 bg-accent rounded-full mt-2 -left-1.5 border border-background"></div>
                                        <time className="mb-1 text-sm font-medium text-accent">{item.year}</time>
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                        </motion.div>
                                ))}
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}