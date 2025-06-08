import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Python LLM Engineer",
      company: "Turing - Meta",
      location: "Remote",
      period: "2024",
      description:
        "Engineered high-performance Python solutions as part of a globally distributed team contributing to the development of Meta's LLaMA 4 language model.",
      achievements: [
        "Designed and optimized ETL pipelines that ingested and transformed over 50 million data points from multilingual public datasets",
        "Wrote modular, testable code in Jupyter Notebooks to support research reproducibility and transparency",
        "Collaborated cross-functionally with data scientists and researchers to refine model training strategies, resulting in 10% improvement in training efficiency",
        "Authored detailed documentation and participated in code reviews to uphold rigorous quality standards across ML workflows",
      ],
    },
    {
      title: "Independent Contractor (Python/React/Odoo)",
      company: "McGeorge Consulting",
      location: "Remote",
      period: "Aug 2020 - Oct 2024",
      description:
        "Led full-stack development and data science initiatives, delivering scalable solutions using Python, React, and Odoo frameworks.",
      achievements: [
        "Led backend development using Flask and MongoDB, reducing page load times by 40%",
        "Coordinated with cross-functional teams, resulting in a 30% increase in customer engagement",
        "Implemented agile practices, boosting team productivity by 70%",
        "Developed predictive data models using machine learning techniques, enhancing decision-making processes",
      ],
    },
    {
      title: "Staff Software Developer",
      company: "OKK Global Resources",
      location: "Lagos, Nigeria",
      period: "Jul 2019 - Aug 2020",
      description:
        "Leading backend architecture and development for scalable web applications using Django and PostgreSQL.",
      achievements: [
        "Migrated personnel management system from desktop to web application, improving staff efficiency by 50%",
        "Enhanced application modules, leading to a 30% increase in productivity",
        "Utilized software design skills to expedite project completion times by 33%",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Bincom Development Centre",
      location: "Lagos, Nigeria",
      period: "Jan 2019 - Jul 2019",
      description:
        "Worked on data-centric projects using Python, PostgreSQL, NumPy, and Pandas to develop industry-leading solutions.",
      achievements: [
        "Worked on data-centric projects using Python, PostgreSQL, NumPy, and Pandas",
        "Developed predictive models and visualization tools, contributing to industry-leading solutions",
        "Conducted research on emerging technologies to inform project development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-20">
            Professional Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 p-8"
              >
                <CardHeader className="pb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {exp.title}
                      </CardTitle>
                      <p className="text-xl text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-3 min-w-fit">
                      <div className="flex items-center text-gray-500 text-lg">
                        <Calendar className="w-5 h-5 mr-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-500 text-lg">
                        <MapPin className="w-5 h-5 mr-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3 text-lg font-bold">
                          •
                        </span>
                        <span className="text-gray-600 text-lg">
                          {achievement}
                        </span>
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
