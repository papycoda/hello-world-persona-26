
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Settings, BarChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Python Backend",
      icon: <Code className="w-8 h-8 text-green-400" />,
      skills: ["Python", "Django", "Flask", "FastAPI", "REST APIs", "GraphQL"]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-blue-400" />,
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Database Design"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      skills: ["AWS", "Docker", "GitLab CI/CD", "Linux", "Nginx", "Microservices"]
    },
    {
      title: "Data Science",
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Data Analysis", "ML Pipelines"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-700">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="bg-gray-700 rounded-full px-3 py-1 text-sm text-gray-300 text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
