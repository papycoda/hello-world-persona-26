
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Backend Engineer with over 5 years of experience specializing in 
                Python and Django development. My journey spans from building robust web applications 
                to diving deep into data science and machine learning.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I thrive on solving complex problems and creating scalable solutions that make a real 
                impact. Whether it's architecting microservices, optimizing database performance, or 
                building data pipelines, I bring both technical expertise and strategic thinking to 
                every project.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
