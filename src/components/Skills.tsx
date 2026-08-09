import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Braces, Database, Workflow } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Braces className="w-8 h-8 text-green-400" />,
      skills: ["Python", "Django", "Django REST Framework", "FastAPI", "Flask", "REST APIs"],
    },
    {
      title: "Data & Storage",
      icon: <Database className="w-8 h-8 text-blue-400" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Pandas", "NumPy"],
    },
    {
      title: "Systems & Delivery",
      icon: <Workflow className="w-8 h-8 text-purple-400" />,
      skills: ["Celery", "RabbitMQ", "Docker", "AWS", "Linux", "GitHub Actions"],
    },
    {
      title: "AI & Product",
      icon: <Bot className="w-8 h-8 text-orange-400" />,
      skills: ["OpenAI APIs", "Anthropic", "Gemini", "scikit-learn", "TypeScript", "Electron"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Stack
            </p>
            <h2 className="text-4xl font-bold text-white">What I work with</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
              Python-first backend engineering, with the surrounding tools needed to ship complete systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-colors"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4">{category.icon}</div>
                  <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-800 border border-gray-700 rounded-full px-3 py-1.5 text-sm text-gray-300"
                      >
                        {skill}
                      </span>
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
