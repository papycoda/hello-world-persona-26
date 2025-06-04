
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-20">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                  Let's Work Together
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a backend engineer, want to discuss a project, or 
                  just want to connect, I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="text-xl text-gray-600">contact@yemibanwo.dev</span>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="text-xl text-gray-600">+234 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="text-xl text-gray-600">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg">Name</Label>
                    <Input id="name" placeholder="Your name" required className="mt-2 h-12 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required className="mt-2 h-12 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-lg">Subject</Label>
                    <Input id="subject" placeholder="Project discussion" required className="mt-2 h-12 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-lg">Message</Label>
                    <textarea 
                      id="message"
                      className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-4 py-3 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg">
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
