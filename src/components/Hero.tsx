
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Ogunbanwo Opeyemi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in">
            Python Backend Engineer | Django Specialist | Data Scientist
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in">
            Crafting robust backend systems and data-driven solutions with Python. 
            5+ years of experience building scalable applications that power businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:contact@yemibanwo.dev"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-green-400 transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
