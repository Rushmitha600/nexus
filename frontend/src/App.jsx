
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Workflow,
  Menu,
  X,
  Sparkles,
  Layers3,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Modern web applications, robust APIs, and scalable digital products built around real-world needs.",
    tags: ["React", "Node.js", "Python"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Reliable cloud infrastructure, secure deployments, and architectures designed to scale.",
    tags: ["AWS", "Cloud", "Security"],
  },
  {
    icon: Bot,
    title: "AI Engineering",
    description:
      "Intelligent applications, AI integrations, and automation that make digital experiences smarter.",
    tags: ["AI", "LLMs", "MCP"],
  },
  {
    icon: Workflow,
    title: "DevOps & Automation",
    description:
      "Streamlined CI/CD, containerization, and infrastructure automation for dependable delivery.",
    tags: ["Docker", "Kubernetes", "CI/CD"],
  },
];

const projects = [
  {
    number: "01",
    title: "Coffee Shop Platform",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A full-stack coffee shop application with a React frontend, Spring Boot backend, PostgreSQL, and Docker.",
    stack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    color: "from-orange-400/20 via-blue-500/10 to-violet-500/20",
    icon: Code2,
  },
  {
    number: "02",
    title: "TravelTrack AI",
    category: "AI & INTEGRATIONS",
    description:
      "An AI-powered railway information experience integrating Indian Railways tools into a modern application.",
    stack: ["React", "Node.js", "MCP", "TypeScript"],
    color: "from-cyan-400/20 via-blue-500/10 to-violet-500/20",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Cloud-Native Engineering",
    category: "CLOUD & DEVOPS",
    description:
      "Cloud infrastructure, containerized applications, deployment automation, and observability experiments.",
    stack: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    color: "from-violet-500/20 via-blue-500/10 to-cyan-400/20",
    icon: Cloud,
  },
];

const teamMembers = [
  {
    name: "DNV Venkat",
    role: "Core Team",
    focus: "Software · Cloud · DevOps",
    image: "/team/venkat.png",
    initial: "V",
  },
  {
    name: "T Rushmitha",
    role: "Core Team",
    focus: "Technology · Collaboration",
    image: "/team/rushmitha.png",
    initial: "R",
  },
  {
    name: "V Satish Teja",
    role: "Core Team",
    focus: "Engineering · Innovation",
    image: "/team/satish.png",
    initial: "S",
  },
];

const technologies = [
  "React",
  "Node.js",
  "Python",
  "FastAPI",
  "AWS",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "PostgreSQL",
  "Linux",
  "Git",
  "AI / MCP",
];

const capabilities = [
  {
    title: "Purpose-driven",
    text: "Build around real problems and meaningful outcomes.",
  },
  {
    title: "Cloud-minded",
    text: "Design systems with reliability and scalability in mind.",
  },
  {
    title: "Automation-first",
    text: "Make engineering workflows repeatable and efficient.",
  },
  {
    title: "Always learning",
    text: "Explore emerging tools and better engineering practices.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Logo({ compact = false }) {
  return (
    <a
      href="#home"
      className="group flex shrink-0 items-center gap-3"
      aria-label="Nexus Appsmiths home"
    >
      <motion.div
        whileHover={{ rotate: 12, scale: 1.07 }}
        transition={{ type: "spring", stiffness: 260, damping: 15 }}
        className="relative flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/50 bg-[#10182e] shadow-lg shadow-blue-500/20"
      >
        <div className="absolute inset-1 rounded-full border border-violet-400/20" />
        <svg viewBox="0 0 100 100" className="relative w-9">
          <defs>
            <linearGradient id="nexusBrandGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="55%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          <path
            d="M25 75V25L75 75V25"
            fill="none"
            stroke="url(#nexusBrandGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {!compact && (
        <div>
          <div className="text-lg font-black tracking-[0.15em]">NEXUS</div>
          <div className="text-[10px] font-semibold tracking-[0.25em] text-slate-400">
            APPSMITHS
          </div>
        </div>
      )}
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, children, description, centered = false }) {
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        {children}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl leading-7 text-slate-400 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navItems = [
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Our Team", "#team"],
    ["Technology", "#technology"],
  ];

  const floatingTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      };

  return (
    <div className="min-h-screen overflow-hidden bg-[#080b16] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div className="absolute -right-40 top-[700px] h-96 w-96 rounded-full bg-violet-600/[0.08] blur-[120px]" />
      </div>

      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#080b16]/85 backdrop-blur-2xl">
        <div className="section-wrap flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition-colors duration-200 hover:text-sky-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-200 sm:flex"
          >
            Let's talk <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-xl border border-white/10 p-2 text-slate-200 lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-[#0b1020] px-6 py-5 lg:hidden"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-sky-300"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 px-4 py-3 font-bold text-slate-950"
            >
              Let's talk <ArrowRight size={17} />
            </a>
          </motion.nav>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section
          id="home"
          className="relative flex min-h-[760px] scroll-mt-20 items-center pb-20 pt-32"
        >
          <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />

          <div className="section-wrap relative grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.08] px-4 py-2 text-xs tracking-widest text-sky-200"
              >
                <motion.span
                  animate={shouldReduceMotion ? {} : { opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-emerald-400"
                />
                ENGINEERING WHAT'S NEXT
              </motion.div>

              <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Ideas into impact.
                <motion.span
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                  className="gradient-text mt-3 block"
                >
                  Technology into possibility.
                </motion.span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                Welcome to Nexus Appsmiths. We bring software engineering,
                cloud, AI, and DevOps together to build meaningful digital
                experiences.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-6 py-4 font-bold shadow-lg shadow-blue-600/20 transition-shadow hover:shadow-blue-500/40"
                >
                  Explore our work <ArrowRight size={18} />
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  className="rounded-full border border-white/15 px-6 py-4 font-semibold text-slate-200 transition hover:border-sky-400/50 hover:bg-white/[0.03]"
                >
                  Our services
                </motion.a>
              </div>

              <div className="mt-12 flex flex-wrap gap-6 text-xs font-semibold tracking-widest text-slate-500">
                {["SOFTWARE", "CLOUD", "AI", "DEVOPS"].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="hover:text-sky-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Animated Nexus ecosystem */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="glass relative mx-auto w-full max-w-md rounded-[2rem] p-8"
            >
              <div className="mb-7 flex items-center justify-between text-xs tracking-widest text-slate-400">
                <span>NEXUS ECOSYSTEM</span>
                <span className="text-emerald-400">● CONNECTED</span>
              </div>

              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -9, 0] }}
                transition={floatingTransition}
                className="relative mx-auto flex h-56 w-56 items-center justify-center"
              >
                <motion.div
                  animate={shouldReduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 32,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-sky-400/30"
                />

                <motion.div
                  animate={shouldReduceMotion ? {} : { rotate: -360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-5 rounded-full border border-violet-400/30"
                />

                <div className="absolute inset-10 rounded-full border border-dashed border-sky-300/40" />
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }
                  }
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute h-36 w-36 rounded-full bg-gradient-to-br from-sky-400/20 to-violet-500/30 blur-2xl"
                />

                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                  className="relative flex h-28 w-28 items-center justify-center rounded-full border border-sky-300/40 bg-[#10182e] text-5xl font-black shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                >
                  <span className="gradient-text">N</span>
                </motion.div>

                <motion.span
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.4, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute right-5 top-5 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]"
                />

                <motion.span
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-7 left-5 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_#a855f7]"
                />
              </motion.div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {services.map(({ icon: Icon, title }, index) => (
                  <motion.div
                    key={title}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.12 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.04, x: 2 }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                  >
                    <Icon size={19} className="shrink-0 text-sky-300" />
                    <span className="text-xs font-medium text-slate-300">
                      {title.split(" ")[0]}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5 text-center text-xs text-slate-500">
                SOFTWARE | CLOUD | AI | DEVOPS
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-wrap scroll-mt-24 py-24">
          <SectionHeading
            eyebrow="What we do"
            description="From the first line of code to production infrastructure, we connect the technologies that turn ideas into digital products."
          >
            Four disciplines. <span className="gradient-text">One vision.</span>
          </SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-5 sm:grid-cols-2"
          >
            {services.map(({ icon: Icon, title, description, tags }) => (
              <motion.article
                key={title}
                variants={revealVariants}
                whileHover={shouldReduceMotion ? {} : { y: -7 }}
                className="glass group rounded-2xl p-7 transition-colors duration-300 hover:border-sky-400/40"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { rotate: -8, scale: 1.08 }}
                  className="inline-flex rounded-xl bg-sky-400/10 p-3 text-sky-300 transition-colors group-hover:bg-sky-400/20"
                >
                  <Icon size={26} />
                </motion.div>

                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-sky-400/10 bg-sky-400/[0.05] px-2 py-1 text-xs text-sky-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-20 border-y border-white/10 bg-[#0b1020] py-24"
        >
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Selected work"
              description="A selection of application development, AI integration, and cloud engineering work."
            >
              Built with purpose.{" "}
              <span className="gradient-text">Ready to grow.</span>
            </SectionHeading>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-5 lg:grid-cols-3"
            >
              {projects.map((project) => {
                const ProjectIcon = project.icon;

                return (
                  <motion.article
                    key={project.number}
                    variants={revealVariants}
                    whileHover={shouldReduceMotion ? {} : { y: -7 }}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101629] transition-colors hover:border-violet-400/40"
                  >
                    <div
                      className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
                    >
                      <motion.div
                        animate={shouldReduceMotion ? {} : { rotate: 360 }}
                        transition={{
                          duration: 35,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute h-36 w-36 rounded-full border border-white/10"
                      />

                      <div className="absolute h-24 w-24 rounded-full border border-white/10" />

                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { scale: 1.15 }}
                        className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-[#101629]/80 text-sky-200 shadow-xl backdrop-blur"
                      >
                        <ProjectIcon size={34} />
                      </motion.div>

                      <span className="absolute right-5 top-5 text-xs font-bold tracking-widest text-white/60">
                        {project.number}
                      </span>
                    </div>

                    <div className="p-6">
                      <p className="text-[10px] font-bold tracking-widest text-sky-300">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-xl font-bold transition-colors group-hover:text-sky-200">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>

            
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="section-wrap grid scroll-mt-24 gap-12 py-24 md:grid-cols-2 md:items-center"
        >
          <Reveal>
            <SectionLabel>About Nexus</SectionLabel>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Engineering that connects{" "}
              <span className="gradient-text">everything.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Nexus Appsmiths brings software development, cloud
              infrastructure, artificial intelligence, and DevOps practices
              together in one connected engineering approach.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              Our focus is on building useful digital experiences, automating
              repetitive work, and designing systems that are maintainable,
              secure, and ready to grow.
            </p>

            <a
              href="#team"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-sky-300 transition hover:gap-3"
            >
              Meet our core team <ArrowRight size={17} />
            </a>
          </Reveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl p-7"
          >
            {capabilities.map(({ title, text }) => (
              <motion.div
                key={title}
                variants={revealVariants}
                className="border-b border-white/10 py-5 last:border-0"
              >
                <h3 className="font-bold text-sky-200">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Core Team */}
        <section
          id="team"
          className="scroll-mt-20 border-y border-white/10 bg-[#0b1020] py-24"
        >
          <div className="section-wrap">
            <SectionHeading
              eyebrow="The people behind the vision"
              centered
              description="Three pillars. One shared vision. Meet the core team behind Nexus Appsmiths."
            >
              Meet the <span className="gradient-text">Core Team.</span>
            </SectionHeading>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
            >
              {teamMembers.map((member) => (
                <motion.article
                  key={member.name}
                  variants={revealVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -9 }}
                  className="glass group relative overflow-hidden rounded-3xl p-7 text-center transition-colors duration-300 hover:border-sky-400/40"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl transition-colors group-hover:bg-violet-500/20" />

                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.045 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className="relative mx-auto mb-7 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-500 p-[3px] shadow-lg shadow-blue-500/10 transition-shadow duration-300 group-hover:shadow-blue-500/30"
                  >
                    <div className="h-full w-full overflow-hidden rounded-full border-4 border-[#101629] bg-[#101629]">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                        className="h-full w-full rounded-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />

                      <div className="flex h-full w-full items-center justify-center text-5xl font-black text-sky-200">
                        {member.initial}
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="relative text-xl font-bold tracking-wide">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                    {member.role}
                  </p>

                  <div className="mx-auto my-5 h-px w-16 bg-gradient-to-r from-cyan-400 to-violet-500" />

                  <p className="text-sm leading-6 text-slate-400">
                    {member.focus}
                  </p>

                  <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology */}
        <section
          id="technology"
          className="scroll-mt-20 border-b border-white/10 bg-[#080b16] py-24"
        >
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Our technology"
              centered
              description="A flexible technology stack for building, shipping, and operating modern applications."
            >
              The tools behind <span className="gradient-text">the work.</span>
            </SectionHeading>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap justify-center gap-3"
            >
              {technologies.map((technology) => (
                <motion.span
                  key={technology}
                  variants={revealVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.04 }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300 transition-colors hover:border-sky-400/50 hover:bg-sky-400/[0.06] hover:text-sky-200"
                >
                  {technology}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-wrap scroll-mt-24 py-24">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
              <motion.div
                animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/15 blur-[80px]"
              />

              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300"
              >
                <Sparkles size={23} />
              </motion.div>

              <div className="relative">
                <SectionLabel>Let's connect</SectionLabel>

                <h2 className="text-4xl font-bold sm:text-6xl">
                  Have an idea?{" "}
                  <span className="gradient-text">Let's build it.</span>
                </h2>

                <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
                  Have a project, an engineering challenge, or a collaboration
                  in mind? We'd love to hear about it.
                </p>

                <motion.a
                  href="mailto:nexusappsmiths@gmail.com"
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-500/20"
                >
                  Contact Nexus Appsmiths <ArrowRight size={18} />
                </motion.a>

                
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="section-wrap flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Logo />
            <p className="mt-3 text-xs text-slate-500">
              Software | Cloud | AI | DevOps
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-500">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#team" className="transition hover:text-white">
              Our Team
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Nexus Appsmiths
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
