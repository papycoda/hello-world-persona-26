import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "cue for Windows",
      description:
        "A Windows port and extension of the open-source Cue overlay, adapted for Windows screen context, microphone input, system audio, and multi-provider AI responses.",
      technologies: ["Electron", "JavaScript", "Open Source", "OpenAI", "Anthropic", "Windows"],
      githubUrl: "https://github.com/papycoda/cue-windows",
    },
    {
      title: "FuelSpotter API",
      description:
        "A Django REST route-planning API that combines routing, local fuel-price data, background geocoding, and cost-aware fuel-stop optimization.",
      technologies: ["Python", "Django", "DRF", "GeoJSON", "Docker", "Swagger"],
      githubUrl: "https://github.com/papycoda/SpotterDjango",
    },
    {
      title: "Bookie",
      description:
        "A booking and payment platform for small businesses with staff scheduling, availability, Paystack payments, notifications, and multi-business support.",
      technologies: ["FastAPI", "PostgreSQL", "Redis", "Paystack", "React", "Docker"],
      githubUrl: "https://github.com/papycoda/booking-scheduler",
    },
    {
      title: "JobScout",
      description:
        "A resume-driven job-search assistant that pulls from multiple sources, applies conservative eligibility filters, scores matches, and sends focused email digests.",
      technologies: ["Python", "Automation", "RSS", "APIs", "Scheduling", "Email"],
      githubUrl: "https://github.com/papycoda/jobscout",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-green-400 font-semibold uppercase tracking-[0.2em] text-sm mb-3">Selected work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Things I&apos;ve built and extended.</h2>
            </div>
            <a href="https://github.com/papycoda?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors inline-flex items-center gap-2">
              <Github className="w-5 h-5" />
              More on GitHub
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="bg-gray-800 border-gray-700 hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300">
                <CardHeader><CardTitle className="text-2xl text-white">{project.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-xs rounded-full">{tech}</span>
                    ))}
                  </div>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors">
                    <Github className="w-4 h-4" />
                    View repository
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
