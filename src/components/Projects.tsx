
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Django E-Commerce API",
      description: "Scalable REST API built with Django REST Framework and PostgreSQL, handling 10,000+ daily transactions with real-time inventory management and payment processing.",
      technologies: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Python Data Pipeline",
      description: "Real-time data processing pipeline using Python, Pandas, and Apache Kafka for ETL operations and business intelligence reporting.",
      technologies: ["Python", "Pandas", "Kafka", "PostgreSQL", "Docker", "Airflow"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Flask Microservices",
      description: "Distributed microservices architecture using Flask, Docker, and Kubernetes for user management, payments, and notification services.",
      technologies: ["Flask", "Docker", "Kubernetes", "RabbitMQ", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-green-900 text-green-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
