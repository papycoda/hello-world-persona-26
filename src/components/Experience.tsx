import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Python LLM Engineer",
      company: "Turing",
      location: "Remote",
      period: "Oct 2024 – Present",
      summary:
        "Building large-scale Python data and evaluation workflows used in LLM development and training.",
      highlights: [
        "Designed ETL workflows processing 50M+ data points from multilingual public datasets.",
        "Built modular, testable Python workflows for data preparation, experimentation, and repeatable research tasks.",
        "Collaborate with distributed research and engineering teams on data quality, training workflows, and technical documentation.",
      ],
      stack: ["Python", "ETL", "LLM workflows", "Data pipelines"],
    },
    {
      title: "Software Engineer (Contract)",
      company: "MacGeorge Consulting",
      location: "Remote",
      period: "Aug 2020 – Oct 2024",
      summary:
        "Delivered backend, data, and internal business systems across Python-based product environments.",
      highlights: [
        "Built and improved backend services and operational tools using Flask, MongoDB, React, and Odoo.",
        "Turned business processes and stakeholder requirements into maintainable software workflows.",
        "Applied data analysis and machine-learning techniques where they improved reporting and decision-making.",
      ],
      stack: ["Python", "Flask", "MongoDB", "React", "Odoo"],
    },
    {
      title: "Staff Software Developer",
      company: "OKK Global Resources",
      location: "Nigeria",
      period: "Jul 2019 – Aug 2020",
      summary:
        "Built internal web systems and helped move operational workflows away from desktop-only tooling.",
      highlights: [
        "Migrated a personnel-management workflow from desktop software to a web application.",
        "Extended internal application modules to reduce repetitive administrative work.",
        "Worked across application design, implementation, debugging, and delivery in a small engineering environment.",
      ],
      stack: ["Python", "Django", "PostgreSQL", "Web applications"],
    },
    {
      title: "Data Science Intern",
      company: "Bincom Development Centre",
      location: "Nigeria",
      period: "Jan 2019 – Jul 2019",
      summary:
        "Worked on data-centric projects and learned how to turn raw datasets into useful analysis and software outputs.",
      highlights: [
        "Cleaned, explored, and analyzed datasets for internal and client-facing projects.",
        "Built predictive experiments and visualizations to support data-driven decisions.",
        "Researched emerging tools and translated findings into practical project work.",
      ],
      stack: ["Python", "Pandas", "NumPy", "PostgreSQL", "scikit-learn"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <p className="text-green-700 font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              I&apos;ve spent years building software people actually depend on.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From internal business systems to large-scale LLM data workflows, the common thread is backend engineering: turning messy requirements into reliable software.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[7px] md:left-[11px] top-3 bottom-3 w-px bg-gray-200" />

            <div className="space-y-14">
              {experiences.map((exp, index) => (
                <article
                  key={`${exp.company}-${exp.title}`}
                  className="relative pl-10 md:pl-14 grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-12"
                >
                  <div className="absolute left-0 md:left-1 top-2 w-4 h-4 rounded-full bg-green-700 ring-4 ring-green-50" />

                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-2">
                      {index === 0 ? "Current" : exp.period}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-4">
                      {exp.company}
                    </p>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-12">
                    <p className="text-xl text-gray-800 leading-relaxed mb-6">
                      {exp.summary}
                    </p>

                    <ul className="space-y-3 mb-7">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                          <span className="text-green-700 font-bold mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
