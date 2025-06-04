
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-20">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate Python Backend Engineer with over 5 years of experience 
                specializing in Django development and data science. My journey spans from 
                architecting scalable web APIs to building intelligent data pipelines.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                I thrive on solving complex backend challenges and creating robust solutions 
                that drive business growth. Whether it's optimizing database performance, 
                designing microservices architecture, or implementing machine learning models, 
                I bring both technical depth and strategic thinking to every project.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <Card className="text-center p-6 bg-gray-800 border-gray-700">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-green-400">5+</div>
                    <div className="text-lg text-gray-400 mt-2">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 bg-gray-800 border-gray-700">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-green-400">50+</div>
                    <div className="text-lg text-gray-400 mt-2">Projects Delivered</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-green-900 to-green-800 rounded-lg flex items-center justify-center shadow-2xl">
                <div className="text-8xl">🐍</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
