import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitMessage("Message sent. I'll get back to you soon.");
        form.reset();
      } else {
        setSubmitMessage("Something went wrong. Please email me directly instead.");
      }
    } catch {
      setSubmitMessage("Something went wrong. Please email me directly instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-green-700 font-semibold uppercase tracking-[0.2em] text-sm mb-3">Contact</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building something that needs a serious backend?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-10">
                I&apos;m open to backend engineering, automation, data-platform, and AI-product work where reliability and good engineering matter.
              </p>

              <div className="space-y-5">
                <a href="mailto:opeyemi655@gmail.com" className="flex items-center gap-4 text-gray-700 hover:text-green-700 transition-colors">
                  <div className="bg-green-50 p-3 rounded-full"><Mail className="w-6 h-6 text-green-700" /></div>
                  <span className="text-lg">opeyemi655@gmail.com</span>
                </a>
                <a href="https://github.com/papycoda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-green-700 transition-colors">
                  <div className="bg-green-50 p-3 rounded-full"><Github className="w-6 h-6 text-green-700" /></div>
                  <span className="text-lg">github.com/papycoda</span>
                </a>
              </div>
            </div>

            <Card className="shadow-xl border-gray-200">
              <CardHeader className="pb-6"><CardTitle className="text-2xl">Send a message</CardTitle></CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/xrbkpeey"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <Label htmlFor="name" className="text-base">Name</Label>
                    <Input id="name" name="name" autoComplete="name" placeholder="Your name" required className="mt-2 h-11" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className="mt-2 h-11" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-base">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Backend engineering / project discussion" required className="mt-2 h-11" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base">Message</Label>
                    <textarea id="message" name="message" className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-4 py-3 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2" placeholder="Tell me what you're building and where you need help." required />
                  </div>

                  <input type="hidden" name="_subject" value="New contact from yemibanwo.dev" />

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-green-700 hover:bg-green-800 h-12 disabled:opacity-50">
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitMessage && (
                    <div role="status" aria-live="polite" className={`text-center p-4 rounded-md ${submitMessage.startsWith("Message sent") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {submitMessage}
                    </div>
                  )}
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
