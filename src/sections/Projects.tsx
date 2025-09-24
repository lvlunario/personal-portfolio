import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Cockpit Server Management",
      description: "Deployed and manage a personal server using Cockpit for a streamlined, web-based graphical interface for server administration and Docker container management.",
      tags: ["Linux", "Docker", "System Admin", "Self-Hosting"],
      link: "https://github.com/lvlunario/cockpit-server"
    },
    {
      title: "UAS Program Initiative",
      description: "Initiated and managed the Unmanned Aerial System (UAS) program for power grid inspections at Maui Electric, enhancing operational efficiency and safety.",
      tags: ["Program Management", "UAS", "Process Optimization"],
      // link: "#"
    },
    {
      title: "Data Analysis GUI",
      description: "Developed Python-based graphical user interfaces for data analysis and reporting, streamlining the data validation process.",
      tags: ["Python", "GUI", "Data Analysis", "Automation"],
      link: "https://github.com/lvlunario/flight-data-analyzer"
    },
    {
      title: "Portfolio Website",
      description: "This personal portfolio, built from scratch to showcase my skills in modern front-end development and design.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://github.com/lvlunario/personal-portfolio"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-foreground/70 max-w-xl mx-auto text-center">
            A selection of my work, from leading engineering initiatives to hands-on software development.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}