import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-28 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-green-400 font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
              Backend engineering is the center of my work.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-7">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Most of what I build lives behind the interface: APIs, background
                jobs, integrations, data workflows, and the infrastructure that keeps
                products dependable when real users show up.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Python is my main tool, especially Django and FastAPI. I also work
                across databases, queues, cloud infrastructure, data tooling, and LLM
                APIs. When a product needs it, I&apos;ll cross the boundary into React,
                TypeScript, or Electron rather than treating the stack as a religion.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I care about clear architecture, security, correctness, and making
                complicated workflows easier to operate. The goal is not clever code;
                it&apos;s software people can trust.
              </p>

              <div className="grid grid-cols-2 gap-5 pt-5">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-400">5+</div>
                    <div className="text-gray-400 mt-2">Years building software</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-400">50M+</div>
                    <div className="text-gray-400 mt-2">Data points in LLM workflows</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute -inset-3 rounded-2xl border border-green-500/20" />
                <img
                  src="/profp.webp"
                  alt="Yemi Banwo"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
