import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Star, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

// Enriched timeline data with corresponding icons for better visual cues.
const timeline = [
  {
    year: "2006-2008",
    title: "UC San Diego – BSc Electrical Engineering",
    description: "Graduated with a strong foundation in digital/analog circuits and applied sciences.",
    icon: <GraduationCap size={18} />
  },
  {
    year: "2008–2014",
    title: "Northrop Grumman",
    description: "Led system-level testing, integration, and software development for unmanned and satellite systems.",
    icon: <Briefcase size={18} />
  },
  {
    year: "2013",
    title: "UCLA – MSc Engineering",
    description: "Focused on systems engineering and project leadership while working full-time in the industry.",
    icon: <GraduationCap size={18} />
  },
  {
    year: "2014–2015",
    title: "L-3 Linkabit",
    description: "Developed embedded software and communication systems for key defense programs.",
    icon: <Briefcase size={18} />
  },
  {
    year: "2015–2020",
    title: "Maui Electric",
    description: "Engineered SCADA/EMS systems and power grid integrations, bridging energy and control systems.",
    icon: <Briefcase size={18} />
  },
  {
    year: "2020",
    title: "FIRE & Entrepreneurship",
    description: "Achieved financial independence. Built a real estate portfolio in Maui and the Philippines.",
    icon: <Star size={18} />
  },
  {
    year: "2015–Present",
    title: "Real Estate Owner & Operator",
    description: "Manage and market short-term rentals, focusing on family, learning, and new tech ventures.",
    icon: <TrendingUp size={18} />
  },
];

export default function About() {
  return (
    <AnimatedSection>
      <section id="about" className="py-20 bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed text-balance text-center">
              I’m <span className="font-semibold text-accent">Leonardo Lunario</span>—an engineer, project manager, and lifelong learner driven by curiosity and a desire to build things that matter. My career has taken me across the energy, aerospace, and defense industries, delivering complex systems from concept to deployment.
            </p>
          </motion.div>

          {/* Career Journey */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold mb-10 text-center">Career Journey</h3>
            <div className="relative border-l-2 border-primary/30">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="mb-10 ml-8"
                >
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-8 ring-background text-primary-foreground">
                    {item.icon}
                  </span>
                  <time className="mb-1 text-sm font-medium text-accent">{item.year}</time>
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}