import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: "Dev Blog",
            description: "My journey through building my portfolio and ventures to various projects",
            tags: ["React", "Markdown", "SSG"],
            link: "/blog"
        },
        {
            title: "Explore",
            description: "Documenting my adventures around the world and journey of early retirement",
            tags: ["Next.js", "Mapbox", "Contentful"],
            link: "/explore"
        }
    ];

    return (
        <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <AnimatedSection className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-secondary max-w-xl">
                        A selection of my recent work including personal projects, technical articles, and open-source contributions.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
