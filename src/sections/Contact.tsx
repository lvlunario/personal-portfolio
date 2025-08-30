import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  // A simple handler for form submission.
  // In a real app, you'd integrate a backend service here.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for your message! I'll be in touch soon.");
    (event.target as HTMLFormElement).reset();
  };

  return (
    <AnimatedSection>
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 text-foreground">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="mb-10 text-lg text-center text-foreground/70">
            Have a project in mind or just want to connect? Feel free to reach out.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-8 bg-card-bg border border-card-border rounded-lg shadow-lg"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded-lg bg-background border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded-lg bg-background border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary" />
              <textarea name="message" rows={5} placeholder="Your Message" required className="w-full px-4 py-2 rounded-lg bg-background border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"></textarea>
              <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow-md hover:scale-105 transition-transform">
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6 pt-8 md:pt-4">
              <a href="mailto:leonardo.lunario@proton.me" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition">
                <Mail className="w-5 h-5" /> leonardo.lunario@proton.me
              </a>
              <a href="tel:+18082761011" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition">
                <Phone className="w-5 h-5" /> +1 (808) 276-1011
              </a>
              <a href="https://linkedin.com/in/leonardolunario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition">
                <Linkedin className="w-5 h-5" /> /in/leonardolunario
              </a>
              <a href="https://github.com/lvlunario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition">
                <Github className="w-5 h-5" /> /lvlunario
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}