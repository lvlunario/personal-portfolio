import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
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
                                        Systems Engineering • Embedded SW • Python • C/C++ • Full-Stack (React, Node.js) • AI/ML tools
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition">
                                    <h3 className="text-xl font-semibold mb-2">Core Values</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Ostinato rigore (persistent rigor) • Lifelong learning • Building with integrity • Family first
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}