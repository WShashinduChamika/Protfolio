import { motion } from "framer-motion";

const experiences = [
  {
    period: "Jun 2025 — Present",
    role: "Associate Software Engineer",
    company: "Freelancing Development Team",
    description:
      "Working as a full-stack developer on multiple production systems including the Toutix event organization and ticketing platform built with Next.js and NestJS. Developed responsive SEO-optimized frontend interfaces and scalable backend APIs. Implemented authentication, authorization, and role-based access control. Also built a hotel management system and restaurant management dashboards for business operations.",
    technologies: [
      "Next.js",
      "NestJS",
      "Node.js",
      "React",
      "TypeScript",
      "MongoDB"
    ],
    current: true,
  },
  {
    period: "Mar 2025 — May 2025",
    role: "Associate Software Engineer",
    company: "Ceyentra Technologies",
    description:
      "Worked as a backend developer for the Sereny visa approval management system. Designed and implemented backend APIs using Node.js to support visa application workflows. Implemented secure validation and data processing mechanisms and collaborated with cross-functional teams to deliver stable backend functionality.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "JavaScript"
    ],
    current: false,
  },
  {
    period: "Aug 2024 — Feb 2025",
    role: "Trainee Software Engineer",
    company: "Ceyentra Technologies",
    description:
      "Worked on the Sri Delivery platform by developing new features for the admin portal. Implemented a subscription payment gateway integration for restaurants and location-based notifications. Improved mobile application compatibility by upgrading Android SDK versions and enhanced overall system performance.",
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "MySQL",
      "Android SDK"
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase"
          >
            Career Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative grid md:grid-cols-2 gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
