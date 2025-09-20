import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dental Disease Detector",
      description:
        "Addressed data scarcity in medical imaging using generative AI to build robust datasets of synthetic dental radiographs. Achieved superior accuracy with fine-tuned models like Xception and DenseNet.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Medical AI"],
      date: "Feb 2024",
      githubLink:
        "https://github.com/jhaveripriyank/Dental-Disease-Detection-using-Dental-Radiographs",
    },
    {
      title: "Personal Expense Tracker",
      description:
        "Developed comprehensive test suite to verify financial logic and alerts. Documented test results and failure cases for iterative improvements.",
      technologies: ["JavaScript", "Testing", "Financial Logic"],
      date: "Philadelphia",
      githubLink: "https://github.com/jhaveripriyank/Personal-Finance-App",
    },
    {
      title: "Road Maintenance System using YOLOV7",
      description:
        "Research publication on AI-powered road maintenance system using advanced computer vision techniques for automated road condition assessment. Published in 2023 ICPCSN Conference.",
      technologies: ["YOLOV7", "Computer Vision", "Research", "Published"],
      date: "Oct 2023",
      githubLink: "#https://github.com/jhaveripriyank/Road-Maintenance-System-using-YOLOv7",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-portfolio-muted text-lg mb-4">Browse My Recent</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-text">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-portfolio-muted text-xs mb-2 font-medium">
                  {project.date}
                </p>
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
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Github
                    </Button>
                  </a>
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
