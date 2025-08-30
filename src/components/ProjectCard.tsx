import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function ProjectCard({ project, delay = 0 }: {
  project: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card-bg rounded-xl overflow-hidden border border-card-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
        <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="inline-flex items-center text-accent font-medium group"
        >
          View Project
          <FiArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}