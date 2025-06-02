
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "Tech Company",
      location: "Remote",
      period: "2022 - Present",
      description: "Leading backend architecture and development for scalable web applications using Django and PostgreSQL.",
      achievements: [
        "Reduced API response time by 40% through optimization",
        "Led team of 4 developers in agile environment",
        "Implemented microservices architecture"
      ]
    },
    {
      title: "Python Developer",
      company: "Previous Company",
      location: "Lagos, Nigeria",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using Django framework with focus on data processing.",
      achievements: [
        "Built data pipeline processing 1M+ records daily",
        "Implemented automated testing reducing bugs by 60%",
        "Collaborated with frontend team using React/Redux"
      ]
    },
    {
      title: "Junior Backend Developer",
      company: "Startup",
      location: "Lagos, Nigeria",
      period: "2019 - 2020",
      description: "Started career building REST APIs and learning best practices in software development.",
      achievements: [
        "Contributed to 10+ successful project deliveries",
        "Learned TDD and agile methodologies",
        "Gained expertise in database design"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
