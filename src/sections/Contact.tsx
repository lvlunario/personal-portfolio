import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    return (
        <AnimatedSection>
            <section id="contact" className="py-20 bg-background text-foreground">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                        I’d love to hear from you! Whether it’s about potential collaborations, projects, or just to say hello, feel free to reach out.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <a href="mailto:leonardo.lunario@proton.me" className="flex items-center gap-3 hover:text-primary transition">
                                <Mail className="w-5 h-5" /> leonardo.lunario@proton.me
                            </a>
                            <a href="mailto:leonardolunario@gmail.com" className="flex items-center gap-3 hover:text-primary transition">
                                <Mail className="w-5 h-5" /> leonardolunario@gmail.com
                            </a>
                            <a href="tel:+18082761011" className="flex items-center gap-3 hover:text-primary transition">
                                <Phone className="w-5 h-5" /> +1 (808) 276-1011
                            </a>
                            <a href="tel:+639283128589" className="flex items-center gap-3 hover:text-primary transition">
                                <Phone className="w-5 h-5" /> +63 0928-312-8589
                            </a>
                            <a href="https://linkedin.com/in/leonardolunario" target="_blank" className="flex items-center gap-3 hover:text-primary transition">
                                <Linkedin className="w-5 h-5" /> linkedin.com/in/leonardolunario
                            </a>
                            <a href="https://github.com/lvlunario" target="_blank" className="flex items-center gap-3 hover:text-primary transition">
                                <Github className="w-5 h-5" /> github.com/lvlunario
                            </a>
                        </div>

                        {/* Simple Contact Form */}
                        <form className="space-y-4">
                            <input type="text" name="name" placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" />
                            <input type="email" name="email" placeholder="Your Email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary" />
                            <textarea name="message" rows={5} placeholder="Your Message"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"></textarea>
                            <button type="submit"
                                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl shadow-md hover:scale-105 transition">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}
