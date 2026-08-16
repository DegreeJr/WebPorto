"use client";
import Image from "next/image";
import {
  ProgrammingLanguages,
  ToolsFrameworks,
  Expertise,
  Experiences,
  Certifications,
  Projects,
  Socials,
} from "@/constants";
import ProjectCard from "@/components/ui/ProjectCard";
import ContactForm from "@/components/ui/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Typewriter } from "@/components/Typewriter";
import { FiDownload } from "react-icons/fi";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sm px-3.5 py-1.5 rounded-full border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/[0.03] text-stone-600 dark:text-stone-300">
    {children}
  </span>
);

const Heading = ({ n, title }: { n: string; title: string }) => (
  <Reveal className="mb-12">
    <p className="font-mono text-xs text-blue-500 mb-2 tracking-wider">
      {n} {"/"} {title.toLowerCase()}
    </p>
    <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white">
      {title}
    </h2>
  </Reveal>
);

const Socials_ = () => (
  <div className="flex gap-4">
    {Socials.map((s) => (
      <a
        key={s.name}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.name}
        className="text-stone-400 dark:text-stone-500 hover:text-blue-500 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all"
      >
        <s.icon size={22} />
      </a>
    ))}
  </div>
);

export default function Home() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-6"
      >
        <div className="max-w-5xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="font-mono text-sm text-blue-500 mb-4">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900 dark:text-white">
              Razan <span className="text-blue-500">Dradjat</span>
            </h1>
            <h2 className="mt-4 text-lg md:text-2xl font-medium text-stone-500 dark:text-stone-400 font-mono h-8">
              <Typewriter
                words={[
                  "Penetration Tester",
                  "Security Researcher",
                  "ISO 27001 Lead Auditor",
                  "Network & IoT Security",
                ]}
              />
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone-500 dark:text-stone-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Informatics student at Telkom University. I break systems to
              understand them, then help make them safer. Focused on
              penetration testing and network &amp; IoT security.
            </p>

            <div className="flex gap-3 mt-8 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-medium rounded-lg border border-stone-300 dark:border-white/15 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="/CV_Razan_Dradjat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg text-stone-600 dark:text-stone-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FiDownload size={16} /> Download CV
              </a>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <Socials_ />
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/fotoSaya.webp"
              alt="Razan Dradjat"
              width={300}
              height={300}
              priority
              className="rounded-full object-cover w-48 h-48 md:w-72 md:h-72 ring-1 ring-stone-200 dark:ring-white/10 shadow-xl"
            />
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 dark:text-stone-600 text-xs font-mono animate-bounce"
        >
          scroll ↓
        </a>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 md:py-28">
        <Heading n="01" title="About" />
        <Reveal>
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <p className="md:col-span-3 text-stone-600 dark:text-stone-400 leading-relaxed">
              I&apos;m a Bachelor&apos;s student in Informatics at{" "}
              <span className="text-stone-900 dark:text-white font-medium">
                Telkom University
              </span>{" "}
              (GPA 3.56), specializing in cybersecurity. My work spans web
              application penetration testing, Software-Defined Networking
              security research, and IoT exploitation. I&apos;m a certified{" "}
              <span className="text-stone-900 dark:text-white font-medium">
                ISO/IEC 27001:2022 Lead Auditor
              </span>
. I also teach. As a practicum assistant, I help students
              understand programming, networking, and databases.
              <br />
              <br />
              I enjoy the whole loop: finding a weakness, understanding why it
              exists, and writing the fix and the report that keep it from
              coming back.
            </p>
            <div className="md:col-span-2 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/[0.03] p-6 shadow-sm">
              <dl className="space-y-3 text-sm">
                {[
                  ["Focus", "Cybersecurity"],
                  ["Based in", "Bandung, ID"],
                  ["GPA", "3.56 / 4.00"],
                  ["Semester", "7"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-stone-400 dark:text-stone-500 font-mono">
                      {k}
                    </dt>
                    <dd className="text-stone-800 dark:text-stone-200 font-medium">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-24 md:py-28">
        <Heading n="02" title="Experience" />
        <div className="flex flex-col gap-4 border-l border-stone-200 dark:border-white/10 pl-6 md:pl-8">
          {Experiences.map((exp, i) => (
            <Reveal key={exp.role + exp.org} delay={i * 0.05}>
              <div className="relative rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/[0.03] p-6 shadow-sm hover:border-blue-300 dark:hover:border-blue-500/40 transition-colors">
                <span className="absolute -left-[31px] md:-left-[39px] top-7 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-[#0d0d0f]" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-stone-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-stone-400 dark:text-stone-500">
                    {exp.period}
                  </span>
                </div>
                <p className="text-blue-500 text-sm mb-3">{exp.org}</p>
                <ul className="list-disc list-inside text-stone-500 dark:text-stone-400 text-sm space-y-1.5 marker:text-stone-300 dark:marker:text-stone-600">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-24 md:py-28">
        <Heading n="03" title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {Projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.05}
              className="w-full flex justify-center"
            >
              <ProjectCard
                title={p.title}
                text={p.text}
                tags={p.tags}
                accent={p.accent}
                link={p.link}
                linkLabel={p.linkLabel}
                note={p.note}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SKILLS + CERTS ---------- */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-24 md:py-28">
        <Heading n="04" title="Skills & Certifications" />

        <Reveal className="flex flex-col gap-8 mb-16">
          {[
            ["Languages", ProgrammingLanguages],
            ["Frameworks & Tools", ToolsFrameworks],
            ["Expertise", Expertise],
          ].map(([label, items]) => (
            <div key={label as string}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
                {label as string}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {(items as string[]).map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4">
          {Certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/[0.03] p-5 flex flex-col gap-2 shadow-sm hover:border-blue-300 dark:hover:border-blue-500/40 transition-colors">
                <span className="text-blue-500 font-mono text-xs">
                  {c.kind === "Certification" ? "✓ certification" : "○ training"}
                </span>
                <h3 className="font-semibold text-sm leading-snug text-stone-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs">
                  {c.issuer}
                </p>
                <p className="text-stone-400 dark:text-stone-500 text-xs mt-auto">
                  {c.date}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 md:py-28">
        <Heading n="05" title="Get in touch" />
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6 max-w-sm">
                Have an opportunity or a question? Drop me a message or reach
                out on any platform below.
              </p>
              <Socials_ />
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-stone-200 dark:border-white/10 py-8 text-center text-stone-400 dark:text-stone-600 text-xs font-mono">
        <p>© {new Date().getFullYear()} Razan Dradjat · Built with Next.js &amp; Tailwind</p>
      </footer>
    </main>
  );
}
