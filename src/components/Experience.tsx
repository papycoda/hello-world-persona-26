import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Python LLM Engineer",
      company: "Turing",
      location: "Remote",
      period: "Oct 2024 – Present",
      description:
        "Building Python data and evaluation workflows used in large-language-model development and training.",
      achievements: [
        "Designed ETL workflows that processed more than 50 million data points from multilingual public datasets.",
        "Built modular, testable Python workflows for data preparation, experimentation, and repeatable research tasks.",
        "Worked with distributed research and engineering teams to improve data quality, model-training workflows, and technical documentation.",
      ],
    },
    {
      title: "Software Engineer (Contract)",
      company: "MacGeorge Consulting",
      location: "Remote",
      period: "Aug 2020 – Oct 2024",
      description:
        "Delivered backend, data, and business-software projects across Python, Flask, React, and Odoo environments.",
      achievements: [
        "Built and improved backend services and internal business systems, including Flask and MongoDB applications.",
        "Worked directly with stakeholders to turn operational requirements into maintainable software workflows.",
        "Applied data analysis and machine-learning techniques where they materially improved reporting and decision-making.",
      ],
    },
    {
      title: "Staff Software Developer",
      company: "OKK Global Resources",
      location: "Nigeria",
      period: "Jul 2019 – Aug 2020",
      description:
        "Built internal web systems and helped move operational workflows away from desktop-only tooling.",
      achievements: [
        "Migrated a personnel-management workflow from desktop software to a web application.",
        "Extended internal application modules to reduce repetitive administrative work.",
        "Worked across application design, implementation, debugging, and delivery in a small engineering environment.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Bincom Development Centre",
      location: "Nigeria",
      period: "Jan 2019 – Jul 2019",
      description:
        "Worked on data-centric projects using Python, PostgreSQL, NumPy, and Pandas.",
      achievements: [
        "Cleaned, explored, and analyzed datasets for internal and client-facing projects.",
        "Built predictive experiments and visualizations to support data-driven decisions.",
        "Researched emerging tools and techniques and translated findings into practical project work.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-green-700 font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Production work, not just portfolio code.
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card
                key={`${exp.company}-${exp.title}`}
                className="border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg text-green-700 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 min-w-fit">
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
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start">
                        <span className="text-green-700 mr-3 font-bold">•</span>
                        <span className="text-gray-600 leading-relaxed">{achievement}</span>
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
