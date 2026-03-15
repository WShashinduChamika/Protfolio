import { Award, BadgeCheck, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "AWS Educate",
    focus: "Cloud Fundamentals",
    credentialUrl: "https://www.credly.com/badges/214b7a39-9579-400b-ba20-a8d9291fe287/public_url",
  },
  {
    title: "Career Essentials in Software Development by Microsoft and LinkedIn",
    issuer: "Microsoft x LinkedIn",
    focus: "Software Development",
    credentialUrl: "https://www.linkedin.com/learning/certificates/f548490d7e80b55ea2cc1b0691d8d746359e54be7e05d782d99df93262354341",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Generative AI Learning",
    focus: "AI Foundations",
    credentialUrl: "https://www.linkedin.com/learning/certificates/552b2d16411a885495a65d1ec174995a5b21122a6075848d302a5d32c167c431",
  },
  {
    title: "React Basic",
    issuer: "Developer Certification",
    focus: "Frontend Development",
    credentialUrl: "https://www.hackerrank.com/certificates/b9f6d93623fb",
  },
  {
    title: "JavaScript Basic",
    issuer: "Developer Certification",
    focus: "Core Programming",
    credentialUrl: "https://www.hackerrank.com/certificates/f269085604e8",
  },
  {
    title: "SQL Basic",
    issuer: "Database Certification",
    focus: "Data & Queries",
    credentialUrl: "https://www.hackerrank.com/certificates/01e86f8577ab",
  },
  {
    title: "Java Basic",
    issuer: "Programming Certification",
    focus: "Object-Oriented Programming",
    credentialUrl: "https://www.hackerrank.com/certificates/894bd3efae8d",
  },
  {
    title: "Python Basic",
    issuer: "Programming Certification",
    focus: "Automation & Scripting",
    credentialUrl: "https://www.hackerrank.com/certificates/d3d156b92b34",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-highlight/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium uppercase tracking-[0.28em] text-secondary-foreground"
            >
              Certificates
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-4xl font-bold text-secondary-foreground md:text-5xl"
            >
              Verified learning,
              <span className="font-serif text-white italic font-normal">
                {" "}
                built for modern engineering.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-2xl text-muted-foreground"
            >
              A focused collection of certifications covering cloud, AI,
              software development, and core programming skills.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="glass-strong flex max-w-md items-center gap-4 rounded-3xl border border-primary/20 p-5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <BadgeCheck className="h-7 w-7" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">
                {certificates.length} Credentials
              </p>
              <p className="text-sm text-muted-foreground">
                Verified certificates across cloud, AI, and software
                development.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[28px] border border-border/70 bg-card/80 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(32,178,166,0.14),transparent_45%,rgba(245,166,35,0.12))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    {index < 3 ? (
                      <Sparkles className="h-5 w-5" />
                    ) : (
                      <Award className="h-5 w-5" />
                    )}
                  </div>

                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    {certificate.focus}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {certificate.issuer}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                    {certificate.title}
                  </h3>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-border/70 pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      Verified Credential
                    </p>
                  </div>

                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${certificate.title} certificate`}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};