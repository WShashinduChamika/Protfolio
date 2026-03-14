import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building maintainable and scalable systems using modern development practices.",
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description:
      "Creating fast and responsive applications optimized for real-world users.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Working effectively with teams to design, build, and deliver reliable software.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and improving skills to stay relevant in the tech industry.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
            >
              Building scalable solutions,
              <span className="font-serif italic font-normal text-white">
                {" "}one system at a time.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                I'm <strong>Shashindu Chamika</strong>, an undergraduate software developer
                passionate about building modern web and mobile applications.
                My journey in software development started with curiosity about
                how digital systems work and evolved into hands-on experience
                developing full-stack applications.
              </p>

              <p>
                I work with technologies such as <strong>React, Next.js, Flutter,
                Node.js, Express, MongoDB, and MySQL</strong>, building systems
                that are scalable, maintainable, and user-focused. I enjoy
                solving complex problems and transforming ideas into functional
                software solutions.
              </p>

              <p>
                Beyond coding, I continuously explore new technologies,
                contribute to projects, and focus on improving my skills as a
                software engineer while preparing for a professional career in
                the tech industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-2xl p-6 glow-border"
            >
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build reliable software that solves real-world
                problems while creating meaningful user experiences."
              </p>
            </motion.div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
