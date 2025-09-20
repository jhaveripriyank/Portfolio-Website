import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

type SkillLevels = {
  Experienced: string[];
  Intermediate: string[];
};

const ExperienceSection = () => {
  const programmingSkills: SkillLevels = {
    Experienced: ["Python", "JavaScript", "Java"],
    Intermediate: ["C", "MATLAB", "Dart"],
  };

  const frameworksSkills: SkillLevels = {
    Experienced: ["PyTorch", "TensorFlow", "ReactJS", "Django"],
    Intermediate: ["NodeJS", "AngularJS", "Flask", "OpenCV"],
  };

  const renderSkills = (skills: SkillLevels) =>
    (Object.entries(skills) as [keyof SkillLevels, string[]][])
      .flatMap(([level, names]) =>
        names.map((name, index) => (
          <div key={`${name}-${index}`} className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-portfolio-accent flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-portfolio-text">{name}</h3>
              <Badge variant="secondary" className="text-xs">
                {level}
              </Badge>
            </div>
          </div>
        ))
      );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-portfolio-muted text-lg mb-4">Explore My</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text">Experience</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <Card className="border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-portfolio-text">
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderSkills(programmingSkills)}
            </CardContent>
          </Card>

          {/* Frameworks & Tools */}
          <Card className="border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-portfolio-text">
                Frameworks & Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderSkills(frameworksSkills)}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
