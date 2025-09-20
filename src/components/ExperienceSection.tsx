import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const programmingSkills = [
    { name: "Python", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "Java", level: "Experienced" },
    { name: "C", level: "Intermediate" },
    { name: "MATLAB", level: "Intermediate" },
    { name: "Dart", level: "Intermediate" },
  ];

  const frameworksSkills = [
    { name: "PyTorch", level: "Experienced" },
    { name: "TensorFlow", level: "Experienced" },
    { name: "ReactJS", level: "Experienced" },
    { name: "Django", level: "Experienced" },
    { name: "NodeJS", level: "Intermediate" },
    { name: "AngularJS", level: "Intermediate" },
    { name: "Flask", level: "Intermediate" },
    { name: "OpenCV", level: "Intermediate" },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-portfolio-muted text-lg mb-4">Explore My</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text">Experience</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Frontend Development */}
          <Card className="border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-portfolio-text">
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-portfolio-accent flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-portfolio-text">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Backend Development */}
          <Card className="border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-portfolio-text">
                Frameworks & Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {frameworksSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-portfolio-accent flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-portfolio-text">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;