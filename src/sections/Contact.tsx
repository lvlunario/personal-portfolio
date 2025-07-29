import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
    return (
        <AnimatedSection>
            <section id="contact" className="py-20 bg-background text-foreground">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    {/* Add your contact form or contact information here */}
                </div>
            </section>
        </AnimatedSection>
    );
}