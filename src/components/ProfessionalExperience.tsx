import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProfessionalExperience = () => {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "Drexel University",
      location: "Philadelphia, United States",
      period: "Apr 2025 — Jun 2025",
      description: [
        "Developed a novel generative AI framework to produce high-fidelity synthetic patient data, overcoming key data privacy barriers in cancer care research",
        "Authored software documentation and analysis reports",
        "Simulated real-world data scenarios to test system reliability and performance"
      ]
    },
    {
      title: "App Developing Intern",
      company: "TicketUs",
      location: "Mumbai, India",
      period: "Sep 2023 — Jan 2024",
      description: [
        "Led the development and testing of an app for the startup company that optimized buying and selling tickets",
        "Participated in debugging and troubleshooting for deployment stability"
      ]
    },
    {
      title: "App and Web Developer",
      company: "Vyavasay Solutions",
      location: "Mumbai, India",
      period: "Dec 2022 — Jul 2023",
      description: [
        "Spearheaded the development of multiple full-stack digital solutions, including a workforce management app with efficient employee verification and a comprehensive suite of three apps and a website to digitalize preschool operations",
        "Analyzed diverse client requirements, from seamless clock-in/out processes to logistics and administrative tasks, translating complex workflows into integrated digital solutions",
        "Streamlined daily operations for multiple clients, optimizing workforce management while improving efficiency by 25% and communication for both front and back-office preschool administration"
      ]
    },
    {
      title: "AI/ML Intern",
      company: "University of Naples Federico II",
      location: "Naples, Italy",
      period: "Sep 2022 — Dec 2022",
      description: [
        "Solved a critical failure point in a predictive maintenance system by using generative AI to simulate future, high-stress road conditions not found in historical data",
        "Provided more accurate and reliable deterioration forecasts, helping authorities make better-informed decisions on road maintenance and repair schedules"
      ]
    },
    {
      title: "Project Management Intern",
      company: "Siemens Energy",
      location: "Pune, India",
      period: "Aug 2021 — Sep 2021",
      description: [
        "Contributed as an intern at Siemens Energy by creating detailed project reports, summarizing key findings, and analyzing project data",
        "Collaborated with project teams to gather insights and ensure accurate documentation of progress and outcomes",
        "Provided valuable data-driven insights, helping to inform decision-making and improve project efficiency"
      ]
    }
  ];

  return (
    <section id="professional-experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-portfolio-muted text-lg mb-4">My Career Journey</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text">Professional Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="p-6 border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-text">{experience.title}</h3>
                  <p className="text-portfolio-accent font-medium">{experience.company}</p>
                  <p className="text-sm text-portfolio-muted">{experience.location}</p>
                </div>
                <Badge variant="outline" className="mt-2 md:mt-0 w-fit border-portfolio-accent text-portfolio-accent">
                  {experience.period}
                </Badge>
              </div>
              <ul className="text-portfolio-muted leading-relaxed list-disc list-inside space-y-2">
                {experience.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;