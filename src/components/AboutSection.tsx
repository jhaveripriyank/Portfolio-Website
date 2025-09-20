import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-portfolio-muted text-lg mb-4">Get To Know More</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Education Cards */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-colors">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-portfolio-accent" />
                <h3 className="text-xl font-semibold text-portfolio-text mb-2">Masters</h3>
                <p className="text-portfolio-muted mb-1">Your University</p>
                <p className="text-portfolio-muted">Computer Science</p>
              </CardContent>
            </Card>

            <Card className="border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-colors">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-portfolio-accent" />
                <h3 className="text-xl font-semibold text-portfolio-text mb-2">Bachelors</h3>
                <p className="text-portfolio-muted mb-1">Your University</p>
                <p className="text-portfolio-muted">Computer Engineering</p>
              </CardContent>
            </Card>
          </div>

          {/* About Text */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-portfolio-text text-lg leading-relaxed">
                I am a passionate and driven Computer Science graduate student with expertise in 
                <span className="text-portfolio-accent font-semibold"> Web Development</span>, 
                <span className="text-portfolio-accent font-semibold"> Mobile Development</span>, and 
                <span className="text-portfolio-accent font-semibold"> Artificial Intelligence</span>.
              </p>
              
              <p className="text-portfolio-muted leading-relaxed">
                My academic journey, paired with hands-on experience, has shaped my technical skills 
                and problem-solving abilities. I'm dedicated to creating innovative solutions and 
                staying at the forefront of technology trends.
              </p>

              <p className="text-portfolio-muted leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;