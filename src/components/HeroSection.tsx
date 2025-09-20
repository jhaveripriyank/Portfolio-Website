import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import profilePic from "@/assets/profile-pic.jpg";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:order-2">
          <div className="relative">
            <img src={profilePic} alt="Profile" className="w-80 h-80 rounded-full object-cover shadow-2xl" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left lg:order-1">
          <p className="text-portfolio-muted text-lg mb-4">Hey, I'm</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-portfolio-text mb-4">Priyank Jhaveri</h1>
          <p className="text-xl text-portfolio-muted mb-8">
            Graduate Student in Computer Science | Software Developer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              className="bg-portfolio-accent hover:bg-portfolio-accent/90"
              onClick={() => window.open('/Resume_Priyank_Jhaveri.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white">
              <Mail className="w-4 h-4 mr-2" />
              Contact Info
            </Button>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <Button variant="ghost" size="icon" className="hover:bg-portfolio-accent/10">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-portfolio-accent/10">
              <Github className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;