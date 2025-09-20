import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
                <h3 className="text-xl font-semibold text-portfolio-text mb-2">Master's</h3>
                <p className="text-portfolio-muted mb-1">Drexel University, Philadelphia</p>
                <p className="text-portfolio-muted mb-1">Computer Science</p>
                <p className="text-sm text-portfolio-muted">GPA: 3.78/4.0</p>
                <p className="text-sm text-portfolio-muted">Sep 2024 — May 2026</p>
              </CardContent>
            </Card>

            <Card className="border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-colors">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-portfolio-accent" />
                <h3 className="text-xl font-semibold text-portfolio-text mb-2">Bachelor's</h3>
                <p className="text-portfolio-muted mb-1">Shah & Anchor Kutchhi Engineering College</p>
                <p className="text-portfolio-muted mb-1">Computer Science</p>
                <p className="text-sm text-portfolio-muted">GPA: 3.62/4.0</p>
                <p className="text-sm text-portfolio-muted">Sep 2020 — Jun 2024</p>
              </CardContent>
            </Card>
          </div>

          {/* About Text */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-portfolio-text text-lg leading-relaxed">
                I am a passionate Computer Science graduate student at Drexel University with expertise in 
                <span className="text-portfolio-accent font-semibold"> Artificial Intelligence</span>, 
                <span className="text-portfolio-accent font-semibold"> Web Development</span>, and 
                <span className="text-portfolio-accent font-semibold"> Machine Learning</span>.
              </p>
              
              <p className="text-portfolio-muted leading-relaxed">
                As an AI/ML Engineer, I enjoy turning complex ideas into practical solutions, whether it’s building smarter medical imaging tools with generative AI, designing full-stack apps for startups, or working on research in computer vision. My journey has taken me across research labs, international internships, and industry projects — and I’m always excited to collaborate on innovative work that blends AI research with real-world impact.
              </p>

              <p className="text-portfolio-muted leading-relaxed">
                <strong>Relevant Coursework:</strong> Computer Networks, Artificial Intelligence, Operating Systems, 
                Object Oriented Programming, Human AI, Computer Vision, Responsible Machine Learning, Privacy, 
                Development of User Interfaces, Cloud Computing, Database Systems, Cryptography and System Security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;