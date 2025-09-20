import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-portfolio-muted text-lg mb-4">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text">Contact Me</h2>
        </div>

        {/* Centered Content */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
              Let's work together
            </h3>
            <p className="text-portfolio-muted leading-relaxed mb-8 max-w-2xl">
              I'm always interested in new opportunities in AI/ML, software development, and research. 
              Whether you have a question or want to discuss potential collaborations, feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Mail className="w-5 h-5 text-portfolio-accent" />
              <div>
                <p className="font-medium text-portfolio-text">Email</p>
                <p className="text-portfolio-muted">jhaveripriyank1@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Phone className="w-5 h-5 text-portfolio-accent" />
              <div>
                <p className="font-medium text-portfolio-text">Phone</p>
                <p className="text-portfolio-muted">+1 (551) 396-9263</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <MapPin className="w-5 h-5 text-portfolio-accent" />
              <div>
                <p className="font-medium text-portfolio-text">Location</p>
                <p className="text-portfolio-muted">Philadelphia, Pennsylvania, United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
