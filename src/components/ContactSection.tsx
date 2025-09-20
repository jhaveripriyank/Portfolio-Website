import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-portfolio-muted text-lg mb-4">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
                Let's work together
              </h3>
              <p className="text-portfolio-muted leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-portfolio-accent" />
                <div>
                  <p className="font-medium text-portfolio-text">Email</p>
                  <p className="text-portfolio-muted">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-portfolio-accent" />
                <div>
                  <p className="font-medium text-portfolio-text">Phone</p>
                  <p className="text-portfolio-muted">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-portfolio-accent" />
                <div>
                  <p className="font-medium text-portfolio-text">Location</p>
                  <p className="text-portfolio-muted">Your City, Country</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-portfolio-accent/20">
            <CardHeader>
              <CardTitle className="text-xl text-portfolio-text">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border-portfolio-accent/20 focus:border-portfolio-accent" />
                <Input placeholder="Last Name" className="border-portfolio-accent/20 focus:border-portfolio-accent" />
              </div>
              <Input placeholder="Email" type="email" className="border-portfolio-accent/20 focus:border-portfolio-accent" />
              <Input placeholder="Subject" className="border-portfolio-accent/20 focus:border-portfolio-accent" />
              <Textarea 
                placeholder="Your message..." 
                rows={6} 
                className="border-portfolio-accent/20 focus:border-portfolio-accent resize-none"
              />
              <Button className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;