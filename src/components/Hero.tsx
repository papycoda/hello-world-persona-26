import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.14),_transparent_38%)]" />

      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm md:text-base uppercase tracking-[0.28em] text-green-400 font-semibold mb-6 animate-fade-in">
            Backend Engineer · Python · AI Systems
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Hi, I&apos;m Yemi &apos;Banwo.
            <span className="block text-gray-300 mt-3">
              I build backend systems that do real work.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            I&apos;m a Python backend engineer with 5+ years of experience building APIs,
            automation, data pipelines, and AI-powered products. I care about systems
            that are secure, maintainable, observable, and boring in production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button asChild size="lg" className="bg-gray-800 border border-gray-600 text-white hover:bg-gray-700 hover:text-white">
              <a href="#contact">Work With Me</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in">
            <a
              href="https://github.com/papycoda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:opeyemi655@gmail.com"
              aria-label="Send email"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gray-500 hover:text-green-400 transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
