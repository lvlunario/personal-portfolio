import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
    return (
        <AnimatedSection>
            <section id="about" className="py-20 bg-background text-foreground">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <p className="text-lg mb-4">
                        {/* Your about content */}
                    </p>
                </div>
            </section>
        </AnimatedSection>
    );
}