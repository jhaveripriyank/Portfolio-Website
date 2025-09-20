import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides current weather conditions, forecasts, and weather maps using external APIs.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      githubLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-portfolio-muted text-lg mb-4">Browse My Recent</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-text">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-portfolio-muted text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-portfolio-accent/10 text-portfolio-accent text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Github
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-portfolio-accent hover:bg-portfolio-accent/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;