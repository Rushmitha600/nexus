import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Terminal,
  Activity,
  Database,
  Zap,
  Server,
  GitBranch,
  ExternalLink,
  Copy,
  Check,
  ChevronRight,
  Monitor,
  RefreshCw,
  Sliders,
  Globe,
  Lock,
  Mail,
  FileText,
  ChevronDown,
  Play,
  Flame,
  Sun,
  Moon,
  Send,
  MailCheck,
} from "lucide-react";

// --- SVG Brand Icons ---
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

// --- Data Structures ---
const services = [
  {
    id: "fullstack",
    icon: Code2,
    badge: "MISSION-CRITICAL",
    title: "Enterprise Full-Stack Platforms",
    shortDesc: "High-concurrency React & distributed backend architectures engineered for fault tolerance.",
    description:
      "We design and build mission-critical enterprise web applications, resilient microservices, and high-throughput REST/GraphQL APIs with strict type safety, zero race conditions, and sub-50ms render performance.",
    sla: "99.99% Availability • <50ms TTFB",
    capabilities: [
      "Custom Design Systems & Micro-frontends",
      "Event-Driven Microservices Architecture",
      "ACID-Compliant High Concurrency DB Layer",
      "Granular RBAC & Enterprise SSO (OIDC/SAML)",
    ],
    tags: ["React 19", "Spring Boot", "TypeScript", "PostgreSQL", "Node.js"],
    color: "from-sky-500/20 via-blue-600/10 to-indigo-600/20",
    borderAccent: "group-hover:border-sky-400/50",
  },
  {
    id: "cloud",
    icon: Cloud,
    badge: "SCALE & RESILIENCE",
    title: "Cloud-Native & Distributed Systems",
    shortDesc: "Multi-region cloud infrastructure, Kubernetes orchestration, and automated zero-downtime rollouts.",
    description:
      "Enterprise cloud landing zones engineered on AWS with automated Terraform infrastructure-as-code, elastic Kubernetes clusters, multi-AZ disaster recovery, and automated cost optimization.",
    sla: "Auto-scale <30s • Multi-AZ Failover",
    capabilities: [
      "Automated Terraform Multi-Cloud IaC",
      "Zero-Downtime Blue/Green & Canary Rollouts",
      "Private VPC Network Isolation & WAF Defense",
      "Real-time Distributed Tracing & Metrics",
    ],
    tags: ["AWS", "Kubernetes", "Docker", "Terraform", "Redis"],
    color: "from-blue-500/20 via-indigo-600/10 to-violet-600/20",
    borderAccent: "group-hover:border-blue-400/50",
  },
  {
    id: "ai",
    icon: Bot,
    badge: "AUTONOMOUS & SECURE",
    title: "AI Engineering & Autonomous Agents",
    shortDesc: "Sovereign LLM agent networks, Model Context Protocol (MCP) integrations, and enterprise RAG.",
    description:
      "Production-ready AI systems integrating Model Context Protocol (MCP) toolkits, private vector search, deterministic function calling, and guardrailed multi-agent autonomous reasoning loops.",
    sla: "Audited Tool Execution • Low-Latency Streaming",
    capabilities: [
      "Model Context Protocol (MCP) Tool Integration",
      "Deterministic Prompt Engineering & Evaluation",
      "Enterprise Hybrid RAG (Vector + BM25)",
      "Autonomous Multi-Agent Task Orchestration",
    ],
    tags: ["Model Context Protocol", "LLMs", "Python", "FastAPI", "Vector DB"],
    color: "from-violet-500/20 via-fuchsia-600/10 to-cyan-500/20",
    borderAccent: "group-hover:border-violet-400/50",
  },
  {
    id: "devops",
    icon: Workflow,
    badge: "ZERO-TOIL AUTOMATION",
    title: "DevSecOps & Delivery Automation",
    shortDesc: "Automated security pipelines, GitOps continuous delivery, and unified observability telemetry.",
    description:
      "End-to-end automated software delivery pipelines that integrate SAST/DAST security scanning, container lifecycle governance, automated artifact verification, and real-time incident alerting.",
    sla: "Deploy <10 min • Automated Rollback",
    capabilities: [
      "GitOps Workflows with Automated Canary Safety",
      "Container Vulnerability Scanning & SBOM",
      "Secrets Management & Zero-Trust Governance",
      "Prometheus & OpenTelemetry Full Visibility",
    ],
    tags: ["GitHub Actions", "Docker", "Linux", "CI/CD", "Security"],
    color: "from-cyan-500/20 via-sky-600/10 to-blue-600/20",
    borderAccent: "group-hover:border-cyan-400/50",
  },
];

const projects = [
  {
    number: "01",
    id: "coffee-platform",
    title: "Coffee Shop Commerce Engine",
    category: "ENTERPRISE FULL-STACK",
    filter: "fullstack",
    subtitle: "High-throughput retail platform with optimistic concurrency & zero race conditions",
    description:
      "A distributed, high-concurrency commerce application built with React frontend, Java Spring Boot microservices, containerized PostgreSQL with connection pooling, and Docker deployment.",
    metrics: [
      { label: "Checkout Concurrency", value: "+320%" },
      { label: "Inventory Race Conditions", value: "0" },
      { label: "Data Integrity", value: "100% ACID" },
    ],
    architecture: {
      frontend: "React 19, Modern State Management, Optimistic UI Updates",
      backend: "Spring Boot 3 RESTful Microservices, Spring Data JPA",
      database: "PostgreSQL 16 with HikariCP Connection Pooling & Isolation",
      infrastructure: "Docker Multi-Container Orchestration, Redis Cache",
    },
    challenges:
      "Preventing inventory overselling during flash-sale spikes while maintaining sub-100ms checkout response times.",
    solution:
      "Implemented database row-level optimistic locking with Redis reservation tokens, backed by asynchronous reconciliation workers.",
    stack: ["React", "Spring Boot", "PostgreSQL", "Docker", "Redis"],
    color: "from-amber-500/20 via-orange-500/10 to-blue-500/20",
    icon: Code2,
  },
  {
    number: "02",
    id: "traveltrack-ai",
    title: "TravelTrack AI Transit Engine",
    category: "AI & AUTONOMOUS AGENTS",
    filter: "ai",
    subtitle: "Real-time railway intelligence network powered by Model Context Protocol (MCP)",
    description:
      "An intelligent transit telemetry platform synthesizing real-time Indian Railways schedules, live route tracking, and multimodal travel assistance using autonomous MCP agent tools.",
    metrics: [
      { label: "Daily Data Points", value: "500K+" },
      { label: "Avg Query Latency", value: "42ms" },
      { label: "Prediction Accuracy", value: "99.8%" },
    ],
    architecture: {
      frontend: "React, Real-time Server-Sent Events (SSE), Interactive Geospatial Map",
      backend: "Node.js & TypeScript API Gateway, Asynchronous Event Stream",
      aiEngine: "Model Context Protocol (MCP) Server with 14 Tool Definitions",
      storage: "In-Memory Geospatial Index + Persistent PostgreSQL Audit Log",
    },
    challenges:
      "Unifying heterogeneous public railway APIs with varying latency and frequent downtime into a dependable real-time user stream.",
    solution:
      "Designed a fault-tolerant MCP gateway with automatic circuit breakers, adaptive query caching, and speculative fallback pipelines.",
    stack: ["React", "Node.js", "MCP", "TypeScript", "FastAPI"],
    color: "from-cyan-400/20 via-blue-500/10 to-violet-500/20",
    icon: Bot,
  },
  {
    number: "03",
    id: "cloud-devops",
    title: "Cloud-Native Infrastructure & DevOps Engine",
    category: "CLOUD & DEVOPS",
    filter: "cloud",
    subtitle: "Enterprise AWS Landing Zone with Terraform IaC and multi-cluster Kubernetes",
    description:
      "A resilient cloud foundation featuring automated multi-AZ infrastructure provisioning, Kubernetes container orchestration, automated canary releases, and centralized observability.",
    metrics: [
      { label: "Disaster Recovery RTO", value: "<15 min" },
      { label: "Infrastructure Uptime", value: "99.99%" },
      { label: "Compute Efficiency Gain", value: "+72%" },
    ],
    architecture: {
      cloudProvider: "AWS (EKS, VPC Multi-AZ, ALB, S3, CloudFront)",
      iac: "Modular Terraform with Remote State Locking & Encryption",
      ciCd: "GitHub Actions Matrix Builds with Automated Smoke Tests",
      observability: "Prometheus Metrics, Grafana Dashboards, OpenTelemetry Tracing",
    },
    challenges:
      "Eliminating manual provisioning drift and guaranteeing zero downtime during application upgrades across diverse environments.",
    solution:
      "Enforced immutable infrastructure using Terraform GitOps workflows and automated blue/green canary deployments with health checkpoints.",
    stack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    color: "from-violet-500/20 via-indigo-500/10 to-cyan-400/20",
    icon: Cloud,
  },
  {
    number: "04",
    id: "nexus-opsflow",
    title: "Nexus OpsFlow Autonomous Engine",
    category: "ENTERPRISE AUTOMATION",
    filter: "ai",
    subtitle: "Agentic workflow automation orchestrator for distributed asynchronous operations",
    description:
      "An autonomous operational orchestration platform that coordinates asynchronous tasks across ERP, CRM, and cloud services with self-healing retry logic and human-in-the-loop approvals.",
    metrics: [
      { label: "Process Acceleration", value: "10x" },
      { label: "Self-Healing Accuracy", value: "99.5%" },
      { label: "Operational Overhead", value: "-65%" },
    ],
    architecture: {
      core: "Python 3.12 FastAPI Asynchronous Event Engine",
      taskQueue: "Distributed Redis Queue with Exponential Backoff",
      agentLayer: "Reasoning Loop with Schema-Validated JSON Tool Calls",
      monitoring: "Real-time Telemetry WebSocket Dashboard",
    },
    challenges:
      "Executing multi-step enterprise workflows without cascading failures when third-party microservices rate limit or return 500 errors.",
    solution:
      "Constructed a persistent state machine with idempotent step resumption, dead-letter recovery queues, and automated incident triage.",
    stack: ["Python", "FastAPI", "Docker", "Redis", "LangChain"],
    color: "from-emerald-500/20 via-teal-500/10 to-sky-500/20",
    icon: Workflow,
  },
];

const teamMembers = [
  {
    name: "DNV Venkat",
    role: "Lead Systems Architect & Core Engineer",
    title: "Core Team • Systems & Infrastructure",
    focus: "Distributed Systems · Cloud Architecture · DevOps & Automation",
    image: "/team/venkat.png",
    initial: "V",
    color: "from-cyan-400 to-blue-600",
    bio: "Spearheads distributed system architecture, enterprise cloud engineering, and automated deployment pipelines. Specializes in building resilient backend topologies that scale reliably under mission-critical enterprise loads.",
    skills: ["AWS Cloud Architecture", "Kubernetes & Docker", "Spring Boot & Java", "React 19 & TypeScript", "CI/CD & DevOps Automation"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "T Rushmitha",
    role: "Technology Strategist & Solutions Engineering",
    title: "Core Team • Strategy & Architecture",
    focus: "System Design · Technology Strategy · Enterprise Delivery",
    image: "/team/rushmitha.png",
    initial: "R",
    color: "from-violet-400 to-fuchsia-600",
    bio: "Bridges enterprise business requirements with technical architecture. Drives system design integrity, collaborative technical governance, and agile delivery standards to ensure software directly fuels measurable business value.",
    skills: ["System Architecture Design", "Enterprise Solution Strategy", "API Design & Integration", "Technical Team Collaboration", "Agile Execution"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "V Satish Teja",
    role: "Senior Software Engineer & Innovation Lead",
    title: "Core Team • Software & AI Systems",
    focus: "Full-Stack Development · AI Integration · Modern Web Scale",
    image: "/team/satish.png",
    initial: "S",
    color: "from-sky-400 to-indigo-600",
    bio: "Champions cutting-edge frontend ecosystems, agentic AI integrations, and high-performance asynchronous application pipelines. Focuses on developer velocity, responsive UI architecture, and autonomous intelligence systems.",
    skills: ["React & Next-gen Frontend", "AI & Model Context Protocol", "FastAPI & Python", "Modern UI/UX Design Systems", "Database Optimization"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

const technologies = [
  { name: "React 19", category: "frontend", level: "Enterprise Ready", desc: "Concurrent rendering & modern hooks" },
  { name: "TypeScript", category: "languages", level: "Core Standard", desc: "End-to-end strict type safety" },
  { name: "Python 3.12", category: "languages", level: "Core Standard", desc: "High-speed AI & asynchronous pipelines" },
  { name: "Spring Boot", category: "backend", level: "Battle Tested", desc: "Resilient Java enterprise microservices" },
  { name: "FastAPI", category: "backend", level: "Enterprise Ready", desc: "High-performance async REST/OpenAPI" },
  { name: "Node.js", category: "backend", level: "Battle Tested", desc: "Event-driven runtime & tooling" },
  { name: "AWS Cloud", category: "cloud", level: "Enterprise Standard", desc: "Multi-region secure cloud infrastructure" },
  { name: "Docker", category: "cloud", level: "Production Standard", desc: "Standardized container packaging" },
  { name: "Kubernetes", category: "cloud", level: "Production Standard", desc: "Elastic container orchestration & scaling" },
  { name: "Terraform", category: "cloud", level: "Enterprise Standard", desc: "Declarative Infrastructure as Code" },
  { name: "GitHub Actions", category: "cloud", level: "Automated Standard", desc: "Continuous integration & release governance" },
  { name: "PostgreSQL", category: "backend", level: "Battle Tested", desc: "ACID relational persistence with indexing" },
  { name: "Redis", category: "backend", level: "In-Memory Scale", desc: "Low-latency distributed caching & queues" },
  { name: "Model Context Protocol", category: "ai", level: "Next-Gen AI", desc: "Standardized agent-to-tool context bridging" },
  { name: "Linux / Ubuntu", category: "cloud", level: "Foundation", desc: "Hardened OS for cloud environments" },
  { name: "Tailwind CSS v4", category: "frontend", level: "Modern UI", desc: "Utility-first design tokens & performance" },
];

const architectureTiers = [
  {
    tier: "01",
    name: "Global Edge & Security",
    icon: Globe,
    tech: "AWS CloudFront • WAF • Edge SSL",
    metrics: "<15ms Edge Latency • DDoS Shield",
    desc: "Global anycast edge network with Web Application Firewall, TLS 1.3 encryption, and intelligent rate limiting.",
    controls: ["Automated Bot Protection", "Geographic Routing", "Static Asset Compression", "Origin Shield Caching"],
  },
  {
    tier: "02",
    name: "Resilient API Gateway",
    icon: ShieldCheck,
    tech: "Nginx • JWT / OAuth2 • Rate Limiter",
    metrics: "100k+ req/sec • Sub-2ms Overhead",
    desc: "Centralized routing and token authentication layer enforcing zero-trust policies across all microservice endpoints.",
    controls: ["JWT Signature Verification", "IP Throttling Rules", "CORS & Header Hardening", "Request Trace IDs"],
  },
  {
    tier: "03",
    name: "Service Mesh & AI Orchestration",
    icon: Cpu,
    tech: "Kubernetes EKS • Model Context Protocol",
    metrics: "99.99% Uptime • Auto-Heal Pods",
    desc: "Containerized application microservices paired with autonomous AI agents executing audited workflows.",
    controls: ["Horizontal Pod Autoscaling", "Mutual TLS Service Mesh", "MCP Schema Validation", "Dead-Letter Retries"],
  },
  {
    tier: "04",
    name: "Distributed Persistence & Cache",
    icon: Database,
    tech: "PostgreSQL 16 • Redis Cluster • S3",
    metrics: "Zero Data Loss • <3ms Cache Hit",
    desc: "ACID-compliant relational database with connection pooling, multi-node Redis caching, and encrypted S3 blob storage.",
    controls: ["Read Replicas & Failover", "Automated Hourly Snapshots", "Row-Level Security (RLS)", "AES-256 Storage Encryption"],
  },
  {
    tier: "05",
    name: "DevSecOps & Observability",
    icon: Activity,
    tech: "Prometheus • Grafana • OpenTelemetry",
    metrics: "Real-time Alerts • 100% Traceability",
    desc: "Continuous automated monitoring, centralized telemetry, distributed request tracing, and GitOps rollouts.",
    controls: ["Automated Canary Analysis", "Slack/PagerDuty Webhooks", "Synthetic Uptime Probes", "Audit Log Retention"],
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
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

function SectionLabel({ children, isDark = true }) {
  return (
    <div
      className={`mb-3 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-[0.2em] shadow-sm ${
        isDark
          ? "border border-sky-400/25 bg-sky-400/10 text-sky-300"
          : "border border-sky-600/30 bg-sky-50 text-sky-700"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, children, description, centered = false, isDark = true }) {
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <SectionLabel isDark={isDark}>{eyebrow}</SectionLabel>
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            centered ? "mx-auto" : ""
          } ${isDark ? "text-slate-400" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

// --- Logo Component ---
function Logo({ compact = false, isDark = true }) {
  return (
    <a
      href="#home"
      className="group flex shrink-0 items-center gap-3.5 focus-visible:outline-none"
      aria-label="Nexus Appsmiths Enterprise home"
    >
      <div
        className={`relative flex h-11 w-11 items-center justify-center rounded-xl border shadow-md transition-transform duration-300 group-hover:scale-105 ${
          isDark
            ? "border-sky-400/40 bg-[#0c1224] shadow-sky-500/20"
            : "border-sky-500/40 bg-white shadow-sky-200"
        }`}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-violet-500/20 opacity-80" />
        <svg viewBox="0 0 100 100" className="relative w-7 h-7">
          <defs>
            <linearGradient id="nexusBrandGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          <path
            d="M25 75V25L75 75V25"
            fill="none"
            stroke="url(#nexusBrandGrad)"
            strokeWidth="13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {!compact && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`text-lg font-black tracking-[0.16em] ${isDark ? "text-white" : "text-slate-900"}`}>
              NEXUS
            </span>
            <span
              className={`rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wider border ${
                isDark
                  ? "bg-sky-500/20 text-sky-300 border-sky-400/30"
                  : "bg-sky-100 text-sky-800 border-sky-300"
              }`}
            >
              ENTERPRISE
            </span>
          </div>
          <span className={`text-[10px] font-semibold tracking-[0.28em] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            APPSMITHS
          </span>
        </div>
      )}
    </a>
  );
}

// --- Main Application ---
export default function App() {
  // Theme State
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nexus-theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeConsoleTab, setActiveConsoleTab] = useState("telemetry");
  const [trafficSpike, setTrafficSpike] = useState(false);
  const [cliInput, setCliInput] = useState("");
  const [cliLogs, setCliLogs] = useState([
    { type: "info", text: "Nexus Enterprise CLI v2.4 initialized." },
    { type: "info", text: "Cluster status: 14 nodes healthy. Type 'help' for commands." },
  ]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState("all");
  const [techFilter, setTechFilter] = useState("all");
  const [activeTier, setActiveTier] = useState(2);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Direct Email Dispatcher Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactCategory, setContactCategory] = useState("Full-Stack Enterprise Platform");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSentToast, setContactSentToast] = useState("");
  const [copiedDraft, setCopiedDraft] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const terminalEndRef = useRef(null);

  // Theme synchronization with HTML class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("nexus-theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("nexus-theme", "light");
    }
  }, [isDark]);

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CLI command executor
  const handleCliSubmit = (e) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...cliLogs, { type: "user", text: `$ ${cliInput}` }];

    if (cmd === "help") {
      newLogs.push({
        type: "system",
        text: "Available commands:\n  • nexus status   : Show cluster health & pods\n  • nexus services : List enterprise solution SLAs\n  • nexus deploy   : Simulate zero-downtime deployment\n  • nexus team     : Core engineering architects\n  • clear          : Reset console output",
      });
    } else if (cmd === "nexus status" || cmd === "status") {
      newLogs.push({
        type: "success",
        text: "● CLUSTER: AWS us-east-1 (Primary) & ap-south-1 (Edge)\n● UPTIME: 99.994% | P95 Latency: 16.4ms\n● ACTIVE PODS: 14/14 healthy | Memory: 4.2GB / 16GB",
      });
    } else if (cmd === "nexus services" || cmd === "services") {
      newLogs.push({
        type: "system",
        text: "1. Enterprise Full-Stack (React 19, Spring Boot, PostgreSQL)\n2. Cloud-Native & Kubernetes (AWS, Terraform, Docker)\n3. AI & MCP Tooling (Model Context Protocol, FastAPI)\n4. DevSecOps Automation (GitHub Actions, Prometheus)",
      });
    } else if (cmd === "nexus team" || cmd === "team") {
      newLogs.push({
        type: "system",
        text: "Core Architects:\n  • DNV Venkat (Lead Systems Architect)\n  • T Rushmitha (Technology Strategist)\n  • V Satish Teja (Senior Software & AI Lead)",
      });
    } else if (cmd === "nexus deploy" || cmd === "deploy") {
      newLogs.push({
        type: "success",
        text: "▶ Initiating Blue/Green Canary Deploy...\n✔ Linting & SAST check passed\n✔ Container image built (sha256:4b91...)\n✔ Traffic shifting: 10% -> 50% -> 100%\n✔ Deployment SUCCESSFUL in 8.4s. 0 downtime.",
      });
    } else if (cmd === "clear") {
      setCliLogs([]);
      setCliInput("");
      return;
    } else {
      newLogs.push({
        type: "error",
        text: `Command not recognized: '${cmd}'. Type 'help' for valid commands.`,
      });
    }

    setCliLogs(newLogs);
    setCliInput("");
  };

  useEffect(() => {
    if (activeConsoleTab === "terminal" && terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [cliLogs, activeConsoleTab]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("nexusappsmiths@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Direct Mail Generation Handlers
  const constructMailBody = () => {
    return `Hello Nexus Appsmiths Team,

My name is ${contactName || "[Your Name]"} (${contactEmail || "[Your Email]"}).

Category: ${contactCategory}

Message & Requirements:
${contactMessage || "I would like to inquire about collaborating on an enterprise project with Nexus Appsmiths."}

---
Sent via Nexus Appsmiths Enterprise Portal`;
  };

  const handleSendViaMailClient = (e) => {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(contactSubject || `Inquiry from ${contactName || "Potential Client"}: ${contactCategory}`);
    const body = encodeURIComponent(constructMailBody());
    window.location.href = `mailto:nexusappsmiths@gmail.com?subject=${subject}&body=${body}`;
    setContactSentToast("Opening your default mail client addressed to nexusappsmiths@gmail.com...");
    setTimeout(() => setContactSentToast(""), 4500);
  };

  const handleOpenInGmail = () => {
    const subject = encodeURIComponent(contactSubject || `Inquiry from ${contactName || "Potential Client"}: ${contactCategory}`);
    const body = encodeURIComponent(constructMailBody());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nexusappsmiths@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setContactSentToast("Opening Gmail Web composer addressed to nexusappsmiths@gmail.com!");
    setTimeout(() => setContactSentToast(""), 4500);
  };

  const handleCopyFormattedDraft = () => {
    const draft = `To: nexusappsmiths@gmail.com\nSubject: ${contactSubject || `Inquiry: ${contactCategory}`}\n\n${constructMailBody()}`;
    navigator.clipboard.writeText(draft);
    setCopiedDraft(true);
    setContactSentToast("Email content and recipient copied to clipboard!");
    setTimeout(() => {
      setCopiedDraft(false);
      setContactSentToast("");
    }, 3500);
  };

  const handleQuickTopicSelect = (topic, defaultSubject, defaultMsg) => {
    setContactCategory(topic);
    setContactSubject(defaultSubject);
    setContactMessage(defaultMsg);
  };

  const navItems = [
    { label: "Solutions", href: "#services" },
    { label: "Case Studies", href: "#projects" },
    { label: "Architecture", href: "#architecture" },
    { label: "Leadership", href: "#team" },
    { label: "Tech Ecosystem", href: "#technology" },
    { label: "Contact Us", href: "#contact" },
  ];

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((p) => p.filter === projectFilter);

  const filteredTechnologies =
    techFilter === "all"
      ? technologies
      : technologies.filter((t) => t.category === techFilter);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#060913] text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* High-tech Ambient Aurora Glow Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute -left-48 top-12 h-[500px] w-[500px] rounded-full blur-[140px] transition-opacity duration-500 ${
            isDark ? "bg-cyan-600/10 opacity-100" : "bg-sky-400/15 opacity-70"
          }`}
        />
        <div
          className={`absolute right-0 top-[400px] h-[600px] w-[600px] rounded-full blur-[160px] transition-opacity duration-500 ${
            isDark ? "bg-indigo-600/10 opacity-100" : "bg-indigo-400/15 opacity-70"
          }`}
        />
        <div
          className={`absolute left-1/3 bottom-40 h-[500px] w-[500px] rounded-full blur-[150px] transition-opacity duration-500 ${
            isDark ? "bg-violet-600/10 opacity-100" : "bg-violet-400/15 opacity-60"
          }`}
        />
        <div className={`absolute inset-0 bg-grid-tech ${isDark ? "opacity-40" : "opacity-30"}`} />
      </div>

      {/* Top Enterprise Announcement Bar */}
      <div
        className={`relative z-50 border-b text-[11px] font-medium backdrop-blur-md transition-colors duration-300 ${
          isDark
            ? "border-white/[0.06] bg-[#070b18]/90 text-slate-400"
            : "border-slate-200 bg-white/90 text-slate-600"
        }`}
      >
        <div className="section-wrap flex h-9 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className={`font-semibold ${isDark ? "text-slate-300" : "text-slate-800"}`}>
              Nexus 2.0 Enterprise Engine:
            </span>
            <span className="hidden sm:inline">
              Autonomous Systems & Resilient Multi-Cloud Architecture
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:flex items-center gap-1.5 text-emerald-500 font-mono-code font-bold">
              <ShieldCheck size={13} />
              SOC2 Aligned • Zero-Trust
            </span>
            <span className="text-slate-400">•</span>
            <button
              onClick={copyEmailToClipboard}
              className={`flex items-center gap-1.5 font-semibold transition-colors ${
                isDark ? "hover:text-sky-300 text-slate-300" : "hover:text-sky-600 text-slate-700"
              }`}
              title="Click to copy official email"
            >
              {copiedEmail ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
              <span>nexusappsmiths@gmail.com</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Enterprise Header with Animated Dark/Light Mode Switcher */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300 ${
          isDark
            ? "border-white/[0.08] bg-[#060913]/85"
            : "border-slate-200/80 bg-white/85 shadow-sm"
        }`}
      >
        <div className="section-wrap flex h-20 items-center justify-between">
          <Logo isDark={isDark} />

          <nav
            className={`hidden items-center gap-1 lg:flex p-1.5 rounded-full border transition-colors ${
              isDark
                ? "bg-[#0b1022]/70 border-white/[0.08]"
                : "bg-slate-100/80 border-slate-200 shadow-inner"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isDark
                    ? "text-slate-300 hover:text-white hover:bg-white/[0.07]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Animated Dark / Light Mode Toggle Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsDark((prev) => !prev)}
              className={`relative flex h-10 items-center gap-2 rounded-full border px-3 text-xs font-semibold shadow-sm transition-all duration-300 ${
                isDark
                  ? "border-white/15 bg-white/[0.06] text-amber-300 hover:bg-white/[0.1] hover:border-amber-400/40"
                  : "border-slate-200 bg-white text-slate-800 hover:bg-slate-100 hover:border-sky-400/50 shadow-sm"
              }`}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-1.5"
              >
                {isDark ? (
                  <>
                    <Moon size={15} className="text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.5)]" />
                    <span className="hidden sm:inline text-[11px] font-bold text-slate-200">Dark</span>
                  </>
                ) : (
                  <>
                    <Sun size={15} className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    <span className="hidden sm:inline text-[11px] font-bold text-slate-800">Light</span>
                  </>
                )}
              </motion.div>
            </motion.button>

            {/* Direct Email Action Button */}
            <a
              href="#contact"
              className="relative group hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 p-[1px] font-semibold text-xs tracking-wide shadow-lg shadow-sky-500/15"
            >
              <span
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 transition-all duration-300 ${
                  isDark
                    ? "bg-[#090e1f] text-slate-100 group-hover:bg-opacity-80 group-hover:text-sky-200"
                    : "bg-white text-slate-900 group-hover:bg-slate-50 group-hover:text-sky-600"
                }`}
              >
                <Mail size={14} className="text-sky-500" />
                <span>Email Nexus Team</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden transition-colors ${
                isDark
                  ? "border-white/10 bg-white/[0.04] text-slate-200"
                  : "border-slate-200 bg-white text-slate-700 shadow-sm"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`overflow-hidden border-t px-6 py-5 lg:hidden transition-colors ${
                isDark ? "border-white/10 bg-[#080d1d]" : "border-slate-200 bg-white shadow-xl"
              }`}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isDark
                        ? "text-slate-300 hover:bg-white/[0.05] hover:text-sky-300"
                        : "text-slate-700 hover:bg-slate-100 hover:text-sky-600"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={16} className="text-slate-400" />
                  </a>
                ))}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 py-3.5 font-bold text-sm text-slate-950 shadow-lg shadow-sky-500/25"
                  >
                    <Mail size={16} />
                    <span>Email nexusappsmiths@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        {/* --- Hero Section --- */}
        <section id="home" className="relative scroll-mt-24 pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="section-wrap">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Hero Left Content */}
              <div className="lg:col-span-6">
                <Reveal>
                  <div
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-widest shadow-inner ${
                      isDark
                        ? "border border-sky-400/30 bg-sky-400/10 text-sky-300"
                        : "border border-sky-600/30 bg-sky-50 text-sky-700"
                    }`}
                  >
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                    </span>
                    ENTERPRISE SYSTEMS ARCHITECTURE
                  </div>

                  <h1
                    className={`mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.12] ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Architecting Resilient Platforms.{" "}
                    <span className="gradient-text block mt-1">Scaling Autonomous Intelligence.</span>
                  </h1>

                  <p
                    className={`mt-6 text-base leading-relaxed sm:text-lg lg:max-w-xl ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Nexus Appsmiths partners with modern enterprises to design, build, and operate
                    fault-tolerant full-stack applications, resilient multi-cloud architectures, and
                    sovereign AI agent workflows.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-sky-400/40 hover:-translate-y-0.5"
                    >
                      <Mail size={17} />
                      <span>Write to nexusappsmiths@gmail.com</span>
                      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                      href="#projects"
                      className={`inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all ${
                        isDark
                          ? "border-white/15 bg-white/[0.04] text-slate-200 hover:border-sky-400/40 hover:bg-white/[0.08]"
                          : "border-slate-300 bg-white text-slate-800 hover:border-sky-500 hover:bg-slate-50 shadow-sm"
                      }`}
                    >
                      <Layers3 size={16} className="text-sky-500" />
                      <span>Explore Case Studies</span>
                    </a>
                  </div>

                  {/* Trust Proof Points Metric Ribbon */}
                  <div
                    className={`mt-12 grid grid-cols-2 gap-4 border-t pt-8 sm:grid-cols-4 ${
                      isDark ? "border-white/10" : "border-slate-200"
                    }`}
                  >
                    <div>
                      <div className="font-mono-code text-2xl font-black text-sky-500 sm:text-3xl">99.99%</div>
                      <div className={`text-xs font-semibold uppercase tracking-wider mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Uptime SLA
                      </div>
                    </div>
                    <div>
                      <div className="font-mono-code text-2xl font-black text-cyan-500 sm:text-3xl">&lt;18ms</div>
                      <div className={`text-xs font-semibold uppercase tracking-wider mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Edge Latency
                      </div>
                    </div>
                    <div>
                      <div className="font-mono-code text-2xl font-black text-violet-500 sm:text-3xl">100%</div>
                      <div className={`text-xs font-semibold uppercase tracking-wider mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        CI/CD Automated
                      </div>
                    </div>
                    <div>
                      <div className="font-mono-code text-2xl font-black text-emerald-500 sm:text-3xl">Zero</div>
                      <div className={`text-xs font-semibold uppercase tracking-wider mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Trust Security
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Hero Right: Interactive Enterprise Command Cockpit */}
              <div className="lg:col-span-6">
                <Reveal delay={0.15}>
                  <div
                    className={`glass-card-elevated relative overflow-hidden rounded-3xl border shadow-2xl transition-all duration-300 ${
                      isDark
                        ? "border-white/15 bg-[#090f23]/95"
                        : "border-slate-300 bg-[#0c1224] text-slate-100 shadow-xl"
                    }`}
                  >
                    {/* Console Header Bar */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#0b1229] px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500/80" />
                        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-mono-code text-xs text-slate-300 font-semibold tracking-wide">
                          nexus-mission-control.cluster.internal
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[11px] font-mono-code font-bold text-emerald-400">ONLINE</span>
                      </div>
                    </div>

                    {/* Console Tab Selector */}
                    <div className="flex border-b border-white/10 bg-[#0a0e21] px-4 pt-2 overflow-x-auto">
                      {[
                        { id: "telemetry", label: "Live Telemetry", icon: Activity },
                        { id: "ai-pipeline", label: "MCP AI Pipeline", icon: Bot },
                        { id: "cloud", label: "Cloud Topology", icon: Cloud },
                        { id: "terminal", label: "Interactive CLI", icon: Terminal },
                      ].map((tab) => {
                        const TabIcon = tab.icon;
                        const isActive = activeConsoleTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveConsoleTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
                              isActive
                                ? "border-sky-400 text-sky-300 bg-white/[0.04]"
                                : "border-transparent text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            <TabIcon size={14} />
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Console Tab Contents */}
                    <div className="p-6 min-h-[380px] flex flex-col justify-between">
                      {/* Tab 1: Live Telemetry */}
                      {activeConsoleTab === "telemetry" && (
                        <div className="space-y-5">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                Global Gateway Traffic
                              </span>
                              <div className="font-mono-code text-2xl font-black text-white flex items-center gap-2 mt-0.5">
                                <span>{trafficSpike ? "142,850" : "48,220"}</span>
                                <span className="text-xs font-normal text-slate-400">req / min</span>
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                setTrafficSpike(true);
                                setTimeout(() => setTrafficSpike(false), 5000);
                              }}
                              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                                trafficSpike
                                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                                  : "bg-sky-500/10 text-sky-300 border border-sky-500/30 hover:bg-sky-500/20"
                              }`}
                            >
                              <Flame size={13} className={trafficSpike ? "animate-bounce text-amber-400" : ""} />
                              <span>{trafficSpike ? "Spike Active (Auto-Scaling)" : "Simulate Traffic Spike"}</span>
                            </button>
                          </div>

                          {/* Dynamic SVG Waveform Chart */}
                          <div className="rounded-xl border border-white/10 bg-[#070b18] p-3">
                            <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400 mb-2">
                              <span>P99 RESPONSE LATENCY</span>
                              <span className="text-cyan-300 font-bold">{trafficSpike ? "24.2ms" : "16.8ms"}</span>
                            </div>
                            <svg viewBox="0 0 400 60" className="w-full h-16 overflow-visible">
                              <defs>
                                <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>
                              <path
                                d={
                                  trafficSpike
                                    ? "M0,45 Q50,15 100,38 T200,10 T300,28 T400,20 L400,60 L0,60 Z"
                                    : "M0,40 Q50,30 100,38 T200,32 T300,36 T400,30 L400,60 L0,60 Z"
                                }
                                fill="url(#waveGrad)"
                                className="transition-all duration-700 ease-in-out"
                              />
                              <path
                                d={
                                  trafficSpike
                                    ? "M0,45 Q50,15 100,38 T200,10 T300,28 T400,20"
                                    : "M0,40 Q50,30 100,38 T200,32 T300,36 T400,30"
                                }
                                fill="none"
                                stroke="#38bdf8"
                                strokeWidth="2.5"
                                className="transition-all duration-700 ease-in-out"
                              />
                            </svg>
                          </div>

                          {/* Microservice Health Grid */}
                          <div className="grid grid-cols-2 gap-2.5 font-mono-code text-xs text-white">
                            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                              <span className="text-slate-400">K8s Pods</span>
                              <span className="text-emerald-400 font-bold">{trafficSpike ? "28 Scaled" : "14 Nominal"}</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                              <span className="text-slate-400">PostgreSQL Pool</span>
                              <span className="text-sky-300 font-bold">42/100 Conn</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                              <span className="text-slate-400">Redis Cache Hit</span>
                              <span className="text-violet-300 font-bold">99.4% Rate</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                              <span className="text-slate-400">Circuit Breakers</span>
                              <span className="text-emerald-400 font-bold">0 Tripped</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 2: Model Context Protocol AI Pipeline */}
                      {activeConsoleTab === "ai-pipeline" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                              MCP Agent Execution Flow
                            </span>
                            <span className="rounded bg-violet-500/20 px-2 py-0.5 text-[10px] font-bold text-violet-300 font-mono-code">
                              PROTOCOL v2024-11
                            </span>
                          </div>

                          <div className="space-y-2.5 font-mono-code text-xs">
                            {[
                              { step: "01", name: "Client Context Sanitization", status: "VERIFIED", time: "2.1ms" },
                              { step: "02", name: "MCP Tool Router (14 Tools Loaded)", status: "ACTIVE", time: "4.8ms" },
                              { step: "03", name: "LLM Reasoning & Function Call", status: "STREAMING", time: "18.4ms" },
                              { step: "04", name: "Deterministic Tool Execution & Audit", status: "READY", time: "1.2ms" },
                            ].map((pipeline) => (
                              <div
                                key={pipeline.step}
                                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-sky-400 font-bold">{pipeline.step}</span>
                                  <span className="text-slate-200">{pipeline.name}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="text-slate-500 text-[11px]">{pipeline.time}</span>
                                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] text-emerald-300 font-bold">
                                    {pipeline.status}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="rounded-xl border border-violet-500/20 bg-violet-950/20 p-3 text-xs text-slate-300 flex items-center gap-2">
                            <Sparkles size={16} className="text-violet-400 shrink-0" />
                            <span>
                              Zero hallucinations on API tool execution with structured JSON Schema output constraints.
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Tab 3: Cloud Topology */}
                      {activeConsoleTab === "cloud" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                              Multi-Region Architecture
                            </span>
                            <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300 font-mono-code">
                              AWS EKS MULTI-AZ
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-3 text-center font-mono-code">
                            <div className="rounded-xl border border-sky-400/30 bg-sky-950/20 p-3">
                              <span className="text-[11px] text-sky-300 font-bold">us-east-1</span>
                              <div className="text-xs text-slate-400 mt-1">Primary AZ-A</div>
                              <div className="text-emerald-400 text-xs font-bold mt-2">● Active</div>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                              <span className="text-[11px] text-slate-300 font-bold">eu-central-1</span>
                              <div className="text-xs text-slate-400 mt-1">Standby AZ-B</div>
                              <div className="text-emerald-400 text-xs font-bold mt-2">● Sync</div>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                              <span className="text-[11px] text-slate-300 font-bold">ap-south-1</span>
                              <div className="text-xs text-slate-400 mt-1">Edge Cache</div>
                              <div className="text-emerald-400 text-xs font-bold mt-2">● Active</div>
                            </div>
                          </div>

                          <div className="rounded-xl border border-white/10 bg-[#070b18] p-3.5 space-y-2 text-xs font-mono-code text-slate-300">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Zero-Downtime Rollout Strategy:</span>
                              <span className="text-sky-300 font-bold">Blue / Green Canary</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Disaster Recovery SLA:</span>
                              <span className="text-emerald-400 font-bold">&lt; 15 min RTO / 0 RPO</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Terraform IaC State:</span>
                              <span className="text-violet-300 font-bold">Encrypted & Locked (S3/Dynamo)</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 4: Interactive CLI / REPL */}
                      {activeConsoleTab === "terminal" && (
                        <div className="flex flex-col h-full justify-between">
                          <div
                            ref={terminalEndRef}
                            className="font-mono-code text-xs space-y-2 overflow-y-auto max-h-[220px] pr-1"
                          >
                            {cliLogs.map((log, index) => (
                              <div
                                key={index}
                                className={`whitespace-pre-wrap leading-relaxed ${
                                  log.type === "user"
                                    ? "text-sky-300 font-bold"
                                    : log.type === "success"
                                    ? "text-emerald-400"
                                    : log.type === "error"
                                    ? "text-red-400"
                                    : "text-slate-300"
                                }`}
                              >
                                {log.text}
                              </div>
                            ))}
                          </div>

                          <form onSubmit={handleCliSubmit} className="mt-4 pt-3 border-t border-white/10">
                            <div className="flex items-center gap-2 font-mono-code text-xs">
                              <span className="text-sky-400 font-bold">nexus&gt;</span>
                              <input
                                type="text"
                                value={cliInput}
                                onChange={(e) => setCliInput(e.target.value)}
                                placeholder="type 'status', 'services', 'deploy', or 'help'..."
                                className="w-full bg-transparent text-white outline-none placeholder:text-slate-600"
                              />
                              <button
                                type="submit"
                                className="rounded bg-sky-500/20 px-2 py-1 text-[11px] text-sky-300 hover:bg-sky-500/30 font-semibold"
                              >
                                Run
                              </button>
                            </div>
                          </form>
                        </div>
                      )}

                      {/* Console Footer */}
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                        <span>REGION: AWS ap-south-1 & us-east-1</span>
                        <span>SOC2 • HIPAA • ISO27001 READY</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* --- Infinite Enterprise Tech Marquee --- */}
        <section
          className={`relative overflow-hidden border-y py-6 transition-colors duration-300 ${
            isDark ? "border-white/[0.08] bg-[#070b18]" : "border-slate-200 bg-slate-100/60"
          }`}
        >
          <div className="section-wrap mb-4 text-center">
            <span className={`text-[11px] font-bold uppercase tracking-[0.25em] ${isDark ? "text-slate-500" : "text-slate-600"}`}>
              Enterprise Technology Stack & Standards
            </span>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Left and Right Fade Gradients */}
            <div
              className={`pointer-events-none absolute left-0 inset-y-0 w-24 z-10 ${
                isDark
                  ? "bg-gradient-to-r from-[#070b18] to-transparent"
                  : "bg-gradient-to-r from-slate-100 to-transparent"
              }`}
            />
            <div
              className={`pointer-events-none absolute right-0 inset-y-0 w-24 z-10 ${
                isDark
                  ? "bg-gradient-to-l from-[#070b18] to-transparent"
                  : "bg-gradient-to-l from-slate-100 to-transparent"
              }`}
            />

            {/* Marquee Row 1 */}
            <div className="animate-marquee flex items-center gap-4 py-2">
              {[
                "React 19",
                "Spring Boot 3",
                "Python 3.12",
                "FastAPI",
                "TypeScript",
                "AWS Cloud",
                "Kubernetes (EKS)",
                "Docker Containers",
                "Terraform IaC",
                "PostgreSQL 16",
                "Redis Cluster",
                "Model Context Protocol (MCP)",
                "GitHub Actions CI/CD",
                "OpenTelemetry",
                // Duplicate for seamless loop
                "React 19",
                "Spring Boot 3",
                "Python 3.12",
                "FastAPI",
                "TypeScript",
                "AWS Cloud",
                "Kubernetes (EKS)",
                "Docker Containers",
                "Terraform IaC",
                "PostgreSQL 16",
                "Redis Cluster",
                "Model Context Protocol (MCP)",
                "GitHub Actions CI/CD",
                "OpenTelemetry",
              ].map((item, idx) => (
                <div
                  key={`${item}-${idx}`}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition-colors ${
                    isDark
                      ? "border-white/10 bg-white/[0.03] text-slate-300 hover:border-sky-400/40 hover:text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-sky-500 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Marquee Row 2 (Reverse) */}
            <div className="animate-marquee-reverse flex items-center gap-4 py-2 mt-2">
              {[
                "Zero-Downtime Blue/Green",
                "Sub-20ms Global Latency",
                "99.99% Availability SLA",
                "Autonomous AI Agent Workflows",
                "Automated Multi-AZ Failover",
                "Zero-Trust Architecture",
                "Event-Driven Microservices",
                "ACID Database Integrity",
                "Optimistic Concurrency Control",
                "GitOps Deployment Pipelines",
                "Distributed Tracing & Logs",
                // Duplicate for seamless loop
                "Zero-Downtime Blue/Green",
                "Sub-20ms Global Latency",
                "99.99% Availability SLA",
                "Autonomous AI Agent Workflows",
                "Automated Multi-AZ Failover",
                "Zero-Trust Architecture",
                "Event-Driven Microservices",
                "ACID Database Integrity",
                "Optimistic Concurrency Control",
                "GitOps Deployment Pipelines",
                "Distributed Tracing & Logs",
              ].map((item, idx) => (
                <div
                  key={`${item}-${idx}`}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium transition-colors ${
                    isDark
                      ? "border-white/5 bg-white/[0.02] text-slate-400 hover:text-sky-300"
                      : "border-slate-200 bg-white/70 text-slate-600 hover:text-sky-700"
                  }`}
                >
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Solutions / Services Section --- */}
        <section id="services" className="section-wrap scroll-mt-24 py-24">
          <SectionHeading
            isDark={isDark}
            eyebrow="Enterprise Capabilities"
            description="From initial architectural blueprint to production-grade resilience, we engineer platforms that eliminate operational toil and support exponential scale."
          >
            Four Disciplines. <span className="gradient-text">Unified Enterprise Engineering.</span>
          </SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-14 grid gap-6 sm:grid-cols-2"
          >
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <motion.article
                  key={service.id}
                  variants={revealVariants}
                  className={`glass-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ${service.borderAccent} ${
                    !isDark ? "bg-white/90 border-slate-200 shadow-sm" : ""
                  }`}
                >
                  <div className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br ${service.color} blur-3xl`} />

                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-500 transition-transform group-hover:scale-110">
                      <ServiceIcon size={24} />
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider ${
                        isDark
                          ? "border-white/10 bg-white/[0.04] text-slate-300"
                          : "border-slate-200 bg-slate-100 text-slate-700"
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3
                    className={`mt-6 text-2xl font-bold tracking-tight transition-colors ${
                      isDark ? "text-white group-hover:text-sky-200" : "text-slate-900 group-hover:text-sky-600"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {service.description}
                  </p>

                  <div
                    className={`mt-5 rounded-xl border p-3 text-xs font-mono-code flex items-center gap-2 ${
                      isDark
                        ? "border-white/10 bg-white/[0.02] text-cyan-300"
                        : "border-sky-200 bg-sky-50/80 text-sky-800"
                    }`}
                  >
                    <ShieldCheck size={15} className="text-cyan-500 shrink-0" />
                    <span>SLA: {service.sla}</span>
                  </div>

                  {/* Capabilities List */}
                  <div className="mt-5 space-y-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                      Included Scope & Deliverables:
                    </span>
                    <ul className={`space-y-1.5 text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className={`mt-6 flex flex-wrap gap-2 pt-4 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-md border px-2.5 py-1 text-[11px] font-medium ${
                          isDark
                            ? "border-white/10 bg-white/[0.04] text-slate-300"
                            : "border-slate-200 bg-slate-100 text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* --- Featured Case Studies / Projects --- */}
        <section
          id="projects"
          className={`scroll-mt-20 border-y py-24 transition-colors duration-300 ${
            isDark ? "border-white/10 bg-[#070b18]" : "border-slate-200 bg-slate-100/50"
          }`}
        >
          <div className="section-wrap">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <SectionHeading
                isDark={isDark}
                eyebrow="Verified Implementations"
                description="Production architectures delivering measurable latency reduction, resilient concurrency, and operational autonomy."
              >
                Engineered for Impact. <span className="gradient-text">Proven at Scale.</span>
              </SectionHeading>

              {/* Project Filter Tabs */}
              <div
                className={`flex flex-wrap gap-2 rounded-xl border p-1.5 self-start md:self-auto ${
                  isDark ? "border-white/10 bg-[#0b1022]" : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {[
                  { id: "all", label: "All Work" },
                  { id: "fullstack", label: "Full-Stack" },
                  { id: "ai", label: "AI & Agents" },
                  { id: "cloud", label: "Cloud & DevOps" },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setProjectFilter(filter.id)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      projectFilter === filter.id
                        ? "bg-sky-500 text-white font-bold shadow-md shadow-sky-500/20"
                        : isDark
                        ? "text-slate-400 hover:text-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              layout
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-12 grid gap-6 md:grid-cols-2"
            >
              {filteredProjects.map((project) => {
                const ProjectIcon = project.icon;
                return (
                  <motion.article
                    layout
                    key={project.id}
                    variants={revealVariants}
                    className={`glass-card group flex flex-col justify-between overflow-hidden rounded-3xl border transition-all ${
                      isDark
                        ? "border-white/10 bg-[#0a0f21] hover:border-sky-400/40"
                        : "border-slate-200 bg-white hover:border-sky-500 shadow-md"
                    }`}
                  >
                    <div>
                      {/* Visual Header / Browser Mockup */}
                      <div className={`relative flex h-52 flex-col justify-between p-6 overflow-hidden bg-gradient-to-br ${project.color}`}>
                        <div className="flex items-center justify-between z-10">
                          <span className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-300 border border-white/10">
                            {project.category}
                          </span>
                          <span className="font-mono-code text-sm font-bold text-white/80">
                            {project.number}
                          </span>
                        </div>

                        {/* Central Animated Floating Emblem */}
                        <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-black/50 text-sky-200 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                          <ProjectIcon size={36} />
                        </div>

                        <div className="z-10 flex items-center justify-between text-[11px] font-mono-code text-slate-200">
                          <span>ARCHITECTURE: VERIFIED</span>
                          <span>STABLE RELEASE</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-7">
                        <h3
                          className={`text-2xl font-bold tracking-tight transition-colors ${
                            isDark ? "text-white group-hover:text-sky-200" : "text-slate-900 group-hover:text-sky-600"
                          }`}
                        >
                          {project.title}
                        </h3>

                        <p className="mt-2 text-xs font-semibold text-sky-500">
                          {project.subtitle}
                        </p>

                        <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          {project.description}
                        </p>

                        {/* Impact Metrics Badges */}
                        <div
                          className={`mt-6 grid grid-cols-3 gap-2.5 rounded-2xl border p-3 text-center ${
                            isDark
                              ? "border-white/10 bg-white/[0.02]"
                              : "border-slate-200 bg-slate-50"
                          }`}
                        >
                          {project.metrics.map((metric) => (
                            <div key={metric.label}>
                              <div
                                className={`font-mono-code text-lg font-black sm:text-xl ${
                                  isDark ? "text-white" : "text-slate-900"
                                }`}
                              >
                                {metric.value}
                              </div>
                              <div className={`text-[10px] font-medium uppercase tracking-wider mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="p-7 pt-0">
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.stack.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-md border px-2 py-0.5 text-[11px] font-medium ${
                              isDark
                                ? "border-white/5 bg-white/[0.04] text-slate-400"
                                : "border-slate-200 bg-slate-100 text-slate-600"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl border py-3 text-xs font-bold transition-all ${
                          isDark
                            ? "border-sky-400/30 bg-sky-400/[0.08] text-sky-200 hover:bg-sky-400/20 hover:border-sky-400/60"
                            : "border-sky-300 bg-sky-50 text-sky-700 hover:bg-sky-100"
                        }`}
                      >
                        <span>Inspect Architecture Blueprint</span>
                        <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* --- Interactive Enterprise Architecture Blueprint --- */}
        <section id="architecture" className="section-wrap scroll-mt-24 py-24">
          <SectionHeading
            isDark={isDark}
            eyebrow="System Blueprint"
            centered
            description="Our end-to-end multi-tier architectural standard designed to isolate failures, eliminate latency, and ensure strict compliance."
          >
            The Nexus <span className="gradient-text">Enterprise Blueprint.</span>
          </SectionHeading>

          <div className="mt-14 grid gap-6 lg:grid-cols-12 items-start">
            {/* Left: Tier Navigation Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {architectureTiers.map((tier, index) => {
                const TierIcon = tier.icon;
                const isSelected = activeTier === index;
                return (
                  <button
                    key={tier.tier}
                    onClick={() => setActiveTier(index)}
                    className={`w-full text-left rounded-2xl p-4 transition-all border flex items-center justify-between ${
                      isSelected
                        ? isDark
                          ? "glass-card-elevated border-sky-400/50 bg-[#0d1633]"
                          : "border-sky-500 bg-white shadow-md ring-2 ring-sky-400/20"
                        : isDark
                        ? "glass-card border-white/10 bg-[#090e21] hover:border-white/20"
                        : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          isSelected
                            ? "bg-sky-500 text-white font-bold"
                            : isDark
                            ? "bg-white/5 text-slate-400"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <TierIcon size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono-code font-bold text-sky-500 uppercase tracking-widest">
                          TIER {tier.tier}
                        </div>
                        <div className={`text-sm font-bold mt-0.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                          {tier.name}
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={18} className={isSelected ? "text-sky-500" : "text-slate-400"} />
                  </button>
                );
              })}
            </div>

            {/* Right: Active Tier Deep Dive Panel */}
            <div className="lg:col-span-7">
              <Reveal>
                <div
                  className={`glass-card-elevated rounded-3xl border p-8 shadow-2xl relative overflow-hidden transition-all ${
                    isDark
                      ? "border-sky-400/30 bg-[#0b1229]"
                      : "border-slate-300 bg-white text-slate-900 shadow-xl"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-[100px]" />

                  <div className={`flex items-center justify-between border-b pb-5 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                    <div>
                      <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-sky-500">
                        SPECIFICATION DETAIL • TIER {architectureTiers[activeTier].tier}
                      </span>
                      <h3 className={`text-2xl font-black mt-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                        {architectureTiers[activeTier].name}
                      </h3>
                    </div>

                    <div
                      className={`rounded-xl border p-3 ${
                        isDark
                          ? "border-white/10 bg-white/[0.04] text-sky-300"
                          : "border-slate-200 bg-slate-50 text-sky-600"
                      }`}
                    >
                      {React.createElement(architectureTiers[activeTier].icon, { size: 28 })}
                    </div>
                  </div>

                  <p className={`mt-5 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {architectureTiers[activeTier].desc}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div
                      className={`rounded-xl border p-3.5 ${
                        isDark ? "border-white/10 bg-white/[0.02]" : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Technology Stack
                      </div>
                      <div
                        className={`text-xs font-mono-code font-semibold mt-1 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {architectureTiers[activeTier].tech}
                      </div>
                    </div>

                    <div
                      className={`rounded-xl border p-3.5 ${
                        isDark ? "border-white/10 bg-white/[0.02]" : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Performance Baseline
                      </div>
                      <div className="text-xs font-mono-code font-semibold text-emerald-500 mt-1">
                        {architectureTiers[activeTier].metrics}
                      </div>
                    </div>
                  </div>

                  <div className={`mt-6 pt-5 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
                    <span className={`text-xs font-bold uppercase tracking-wider block mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      Enforced Security & Operational Controls:
                    </span>
                    <div className={`grid grid-cols-2 gap-2 text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {architectureTiers[activeTier].controls.map((control) => (
                        <div key={control} className="flex items-center gap-2">
                          <Check size={14} className="text-emerald-500 shrink-0" />
                          <span>{control}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* --- Executive Leadership & Core Team --- */}
        <section
          id="team"
          className={`scroll-mt-20 border-y py-24 transition-colors duration-300 ${
            isDark ? "border-white/10 bg-[#070b18]" : "border-slate-200 bg-slate-100/50"
          }`}
        >
          <div className="section-wrap">
            <SectionHeading
              isDark={isDark}
              eyebrow="Core Architects"
              centered
              description="Three specialized technical pillars. One unified standard. Meet the core engineering architects behind Nexus Appsmiths."
            >
              Executive & <span className="gradient-text">Engineering Leadership.</span>
            </SectionHeading>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {teamMembers.map((member) => (
                <motion.article
                  key={member.name}
                  variants={revealVariants}
                  className={`glass-card group relative overflow-hidden rounded-3xl p-8 transition-all flex flex-col justify-between ${
                    isDark
                      ? "hover:border-sky-400/50"
                      : "bg-white border-slate-200 hover:border-sky-500 shadow-md"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-sky-500/10 to-violet-500/10 blur-2xl" />

                  <div>
                    {/* Member Profile Avatar with Halo */}
                    <div className="relative mx-auto mb-6 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-600 p-[3px] shadow-xl shadow-sky-500/20 group-hover:shadow-sky-400/40 transition-shadow">
                      <div
                        className={`relative h-full w-full overflow-hidden rounded-full border-4 ${
                          isDark ? "border-[#0c1224] bg-[#0c1224]" : "border-white bg-slate-100"
                        }`}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                        {/* Fallback Initials Display */}
                        <div
                          className={`flex h-full w-full items-center justify-center font-mono-code text-5xl font-black ${
                            isDark ? "text-sky-200" : "text-sky-600"
                          }`}
                        >
                          {member.initial}
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className={`text-2xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                        {member.name}
                      </h3>
                      <div className="mt-1 text-xs font-bold uppercase tracking-widest text-sky-500">
                        {member.role}
                      </div>
                      <div className={`text-[11px] font-semibold mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {member.focus}
                      </div>
                    </div>

                    <p className={`mt-5 text-sm leading-relaxed text-center ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {member.bio}
                    </p>

                    {/* Skill Tags */}
                    <div className="mt-6 flex flex-wrap justify-center gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-md border px-2.5 py-1 text-[11px] font-medium ${
                            isDark
                              ? "border-white/10 bg-white/[0.04] text-slate-300"
                              : "border-slate-200 bg-slate-100 text-slate-700"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Channels */}
                  <div className={`mt-8 pt-5 border-t flex items-center justify-center gap-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                        isDark
                          ? "border-white/10 bg-white/[0.03] text-slate-400 hover:border-sky-400/40 hover:text-sky-300"
                          : "border-slate-200 bg-slate-100 text-slate-600 hover:border-sky-500 hover:text-sky-600 shadow-sm"
                      }`}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                        isDark
                          ? "border-white/10 bg-white/[0.03] text-slate-400 hover:border-sky-400/40 hover:text-sky-300"
                          : "border-slate-200 bg-slate-100 text-slate-600 hover:border-sky-500 hover:text-sky-600 shadow-sm"
                      }`}
                      aria-label={`${member.name} GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:nexusappsmiths@gmail.com"
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                        isDark
                          ? "border-white/10 bg-white/[0.03] text-slate-400 hover:border-sky-400/40 hover:text-sky-300"
                          : "border-slate-200 bg-slate-100 text-slate-600 hover:border-sky-500 hover:text-sky-600 shadow-sm"
                      }`}
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Technology Ecosystem Radar --- */}
        <section id="technology" className="section-wrap scroll-mt-24 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              isDark={isDark}
              eyebrow="Technical Stack"
              description="A curated ecosystem of battle-tested languages, frameworks, cloud primitives, and AI protocols."
            >
              The Enterprise <span className="gradient-text">Tool Matrix.</span>
            </SectionHeading>

            {/* Filter Pills */}
            <div
              className={`flex flex-wrap gap-2 rounded-xl border p-1.5 self-start md:self-auto ${
                isDark ? "border-white/10 bg-[#0b1022]" : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {[
                { id: "all", label: "All Stack" },
                { id: "languages", label: "Languages" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "cloud", label: "Cloud & Ops" },
                { id: "ai", label: "AI & Data" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setTechFilter(category.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    techFilter === category.id
                      ? "bg-sky-500 text-white font-bold"
                      : isDark
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filteredTechnologies.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                variants={revealVariants}
                className={`glass-card group rounded-2xl p-5 border transition-all ${
                  isDark
                    ? "border-white/10 hover:border-sky-400/40"
                    : "bg-white border-slate-200 hover:border-sky-500 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-base font-bold transition-colors ${
                      isDark ? "text-white group-hover:text-sky-200" : "text-slate-900 group-hover:text-sky-600"
                    }`}
                  >
                    {tech.name}
                  </span>
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-mono-code font-bold border ${
                      isDark
                        ? "bg-sky-500/10 text-sky-300 border-sky-400/20"
                        : "bg-sky-50 text-sky-700 border-sky-200"
                    }`}
                  >
                    {tech.level}
                  </span>
                </div>
                <p className={`mt-2 text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {tech.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- DIRECT EMAIL & CONTACT DISPATCHER SECTION --- */}
        <section
          id="contact"
          className={`scroll-mt-20 border-t py-24 transition-colors duration-300 ${
            isDark ? "border-white/10 bg-[#070b18]" : "border-slate-200 bg-slate-100/60"
          }`}
        >
          <div className="section-wrap">
            <Reveal>
              <div
                className={`glass-card-elevated relative overflow-hidden rounded-3xl border p-8 lg:p-14 shadow-2xl transition-all duration-300 ${
                  isDark
                    ? "border-white/15 bg-[#090f23]"
                    : "border-slate-300 bg-white text-slate-900 shadow-xl"
                }`}
              >
                <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
                <div className="pointer-events-none absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-cyan-600/15 blur-[120px]" />

                <div className="max-w-3xl mx-auto text-center">
                  <SectionLabel isDark={isDark}>Direct Communications Hub</SectionLabel>
                  <h2
                    className={`text-3xl font-black tracking-tight sm:text-5xl ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Direct Email to <span className="gradient-text">nexusappsmiths@gmail.com</span>
                  </h2>
                  <p className={`mt-4 text-base ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    Compose and send an email directly to our founding engineering architects.
                    Choose whether to dispatch through your default email client, compose in web Gmail,
                    or copy the formatted draft.
                  </p>
                </div>

                {/* Quick Topic Starter Chips */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
                  <span className={`text-xs font-bold uppercase tracking-wider mr-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Quick Templates:
                  </span>
                  {[
                    {
                      label: "🚀 Full-Stack Web Platform",
                      category: "Full-Stack Enterprise Platform",
                      subject: "Inquiry: Custom Full-Stack Application Architecture",
                      msg: "Hi Nexus Appsmiths, we are looking to architect and build a high-concurrency web platform. We would love to discuss tech stack recommendations and timelines.",
                    },
                    {
                      label: "🤖 AI & MCP Agent Pipeline",
                      category: "Model Context Protocol (MCP) AI Pipeline",
                      subject: "Inquiry: Autonomous AI & MCP Integration",
                      msg: "Hi Nexus Appsmiths, we are interested in developing an audited AI agent workflow powered by Model Context Protocol (MCP). Let's schedule a technical discovery call.",
                    },
                    {
                      label: "☁️ Cloud & Kubernetes Scale",
                      category: "Cloud-Native & DevOps Modernization",
                      subject: "Inquiry: AWS Cloud Landing Zone & Kubernetes Infrastructure",
                      msg: "Hi Nexus Appsmiths, our team needs help designing an elastic AWS architecture with Terraform and automated CI/CD canary rollouts.",
                    },
                    {
                      label: "⚡ Technical Architecture Audit",
                      category: "Technical Architecture & Security Audit",
                      subject: "Inquiry: Enterprise Architecture Review & Performance Audit",
                      msg: "Hi Nexus Appsmiths, we would like a comprehensive technical audit of our existing application architecture to identify scaling bottlenecks and security gaps.",
                    },
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => handleQuickTopicSelect(chip.category, chip.subject, chip.msg)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105 ${
                        contactCategory === chip.category
                          ? "border-sky-400 bg-sky-500/20 text-sky-400"
                          : isDark
                          ? "border-white/10 bg-white/[0.04] text-slate-300 hover:border-sky-400/40"
                          : "border-slate-200 bg-slate-100 text-slate-700 hover:border-sky-500"
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>

                {/* Toast Notification Alert */}
                <AnimatePresence>
                  {contactSentToast && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-6 mx-auto max-w-xl rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-4 text-center text-xs font-semibold text-emerald-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      <span>{contactSentToast}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-10 grid gap-10 lg:grid-cols-12 items-start">
                  {/* Left: Email Composer Form */}
                  <form
                    onSubmit={handleSendViaMailClient}
                    className="lg:col-span-7 space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          Your Name / Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins (Engineering VP)"
                          className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                            isDark
                              ? "border-white/10 bg-black/40 text-white placeholder:text-slate-600"
                              : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 shadow-sm"
                          }`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          Your Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="e.g. sarah@enterprise.com"
                          className={`w-full rounded-xl border px-4 py-3 text-sm font-mono-code focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                            isDark
                              ? "border-white/10 bg-black/40 text-white placeholder:text-slate-600"
                              : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 shadow-sm"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          Solution Category
                        </label>
                        <select
                          value={contactCategory}
                          onChange={(e) => setContactCategory(e.target.value)}
                          className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                            isDark
                              ? "border-white/10 bg-[#090e1f] text-white"
                              : "border-slate-300 bg-white text-slate-900 shadow-sm"
                          }`}
                        >
                          <option value="Full-Stack Enterprise Platform">Full-Stack Enterprise Platform</option>
                          <option value="Model Context Protocol (MCP) AI Pipeline">Model Context Protocol (MCP) AI Pipeline</option>
                          <option value="Cloud-Native & DevOps Modernization">Cloud-Native & DevOps Modernization</option>
                          <option value="Technical Architecture & Security Audit">Technical Architecture & Security Audit</option>
                          <option value="General Strategic Partnership">General Strategic Partnership</option>
                        </select>
                      </div>

                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          Subject Line *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactSubject}
                          onChange={(e) => setContactSubject(e.target.value)}
                          placeholder="e.g. Project Inquiry: Cloud Scale"
                          className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                            isDark
                              ? "border-white/10 bg-black/40 text-white placeholder:text-slate-600"
                              : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 shadow-sm"
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          Message & Architectural Goals *
                        </label>
                        <span className={`text-[11px] font-mono-code ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                          {contactMessage.length} characters
                        </span>
                      </div>
                      <textarea
                        rows={5}
                        required
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Detail your requirements, scale expectations, preferred tech stack, or any specific challenges..."
                        className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none ${
                          isDark
                            ? "border-white/10 bg-black/40 text-white placeholder:text-slate-600"
                            : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 shadow-sm"
                        }`}
                      />
                    </div>

                    {/* Three Direct Send Action Buttons */}
                    <div className="pt-2 grid sm:grid-cols-3 gap-3">
                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 py-3.5 px-4 text-xs font-bold text-slate-950 shadow-lg shadow-sky-500/25 hover:opacity-95 transition-all"
                      >
                        <Send size={15} />
                        <span>Send via Mail Client</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleOpenInGmail}
                        className={`flex items-center justify-center gap-2 rounded-xl border py-3.5 px-4 text-xs font-bold transition-all ${
                          isDark
                            ? "border-red-400/40 bg-red-500/10 text-red-200 hover:bg-red-500/20"
                            : "border-red-300 bg-red-50 text-red-700 hover:bg-red-100"
                        }`}
                        title="Directly opens a compose window in Gmail web addressed to nexusappsmiths@gmail.com"
                      >
                        <MailCheck size={15} className="text-red-400" />
                        <span>Open in Gmail Web</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyFormattedDraft}
                        className={`flex items-center justify-center gap-2 rounded-xl border py-3.5 px-4 text-xs font-bold transition-all ${
                          isDark
                            ? "border-white/15 bg-white/[0.05] text-slate-200 hover:bg-white/[0.1]"
                            : "border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200"
                        }`}
                        title="Copy recipient and email draft to clipboard"
                      >
                        {copiedDraft ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                        <span>{copiedDraft ? "Draft Copied!" : "Copy Full Draft"}</span>
                      </button>
                    </div>
                  </form>

                  {/* Right: Live Outgoing Email Preview Card */}
                  <div
                    className={`lg:col-span-5 rounded-2xl border p-6 flex flex-col justify-between ${
                      isDark ? "border-white/10 bg-[#0c1328]" : "border-slate-200 bg-slate-50 shadow-sm"
                    }`}
                  >
                    <div>
                      <div className={`flex items-center justify-between border-b pb-3 mb-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                        <div className="flex items-center gap-2">
                          <Mail size={16} className="text-sky-500" />
                          <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                            Live Dispatch Preview
                          </span>
                        </div>
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-500 font-mono-code">
                          RECIPIENT VERIFIED
                        </span>
                      </div>

                      {/* Mock Email Client View */}
                      <div
                        className={`rounded-xl border p-4 space-y-2.5 font-mono-code text-xs leading-relaxed ${
                          isDark
                            ? "border-white/10 bg-[#070b18] text-slate-300"
                            : "border-slate-200 bg-white text-slate-800 shadow-inner"
                        }`}
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                          <span className="text-slate-400 font-bold">To:</span>
                          <span className="text-sky-400 font-bold">nexusappsmiths@gmail.com</span>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                          <span className="text-slate-400 font-bold">From:</span>
                          <span className="truncate max-w-[200px]">
                            {contactEmail || "your-email@domain.com"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                          <span className="text-slate-400 font-bold">Subject:</span>
                          <span className="truncate max-w-[200px] text-emerald-400 font-semibold">
                            {contactSubject || `Inquiry: ${contactCategory}`}
                          </span>
                        </div>

                        <div className="pt-2">
                          <span className="text-slate-400 font-bold block mb-1">Body:</span>
                          <p className="whitespace-pre-wrap max-h-44 overflow-y-auto text-[11px] leading-relaxed text-slate-300">
                            {constructMailBody()}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${isDark ? "border-white/10" : "border-slate-200"}`}>
                      <span className={isDark ? "text-slate-400" : "text-slate-500"}>SLA Guarantee:</span>
                      <span className="text-emerald-500 font-bold">Response within 4 business hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* --- Case Study Architecture Modal Drawer --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`glass-card-elevated relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border p-8 shadow-2xl ${
                isDark ? "border-white/20 bg-[#090f23] text-white" : "border-slate-300 bg-white text-slate-900"
              }`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-500">
                <span>CASE STUDY SPECIFICATION</span>
                <span>•</span>
                <span>{selectedProject.number}</span>
              </div>

              <h2 className={`mt-2 text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                {selectedProject.title}
              </h2>
              <p className="mt-1 text-sm font-semibold text-sky-500">{selectedProject.subtitle}</p>

              {/* Technical Challenges & Solutions */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div
                  className={`rounded-2xl border p-5 ${
                    isDark ? "border-red-500/20 bg-red-950/10" : "border-red-200 bg-red-50/70"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
                    <Zap size={14} />
                    <span>Technical Challenge</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {selectedProject.challenges}
                  </p>
                </div>

                <div
                  className={`rounded-2xl border p-5 ${
                    isDark ? "border-emerald-500/20 bg-emerald-950/10" : "border-emerald-200 bg-emerald-50/70"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500 mb-2">
                    <CheckCircle2 size={14} />
                    <span>Engineered Solution</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Blueprint Breakdown */}
              <div
                className={`mt-6 rounded-2xl border p-5 ${
                  isDark ? "border-white/10 bg-white/[0.02]" : "border-slate-200 bg-slate-50"
                }`}
              >
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Architectural Tier Breakdown:
                </h4>
                <div className="space-y-2 text-xs font-mono-code">
                  {Object.entries(selectedProject.architecture).map(([tierKey, desc]) => (
                    <div
                      key={tierKey}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between border-b pb-2 last:border-0 ${
                        isDark ? "border-white/5" : "border-slate-200"
                      }`}
                    >
                      <span className="text-sky-500 font-bold uppercase tracking-wide">{tierKey}:</span>
                      <span className={`sm:text-right max-w-md ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {selectedProject.metrics.map((m) => (
                  <div
                    key={m.label}
                    className={`rounded-xl border p-3 ${
                      isDark ? "border-white/10 bg-[#070b18]" : "border-slate-200 bg-white shadow-sm"
                    }`}
                  >
                    <div className="font-mono-code text-xl font-black text-sky-500">{m.value}</div>
                    <div className={`text-[10px] uppercase tracking-wider mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`rounded-xl border px-5 py-2.5 text-xs font-semibold ${
                    isDark ? "border-white/10 text-slate-300 hover:bg-white/5" : "border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Close Specification
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedProject(null);
                    setContactSubject(`Inquiry regarding ${selectedProject.title}`);
                  }}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-sky-500/20"
                >
                  <span>Inquire About This Architecture</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Enterprise Footer --- */}
      <footer
        className={`border-t py-14 transition-colors duration-300 ${
          isDark ? "border-white/10 bg-[#050711]" : "border-slate-200 bg-white"
        }`}
      >
        <div className="section-wrap">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Logo isDark={isDark} />
              <p className={`mt-4 max-w-sm text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Nexus Appsmiths is a modern enterprise engineering collective crafting resilient
                full-stack platforms, autonomous AI agent pipelines, and high-availability cloud
                infrastructure.
              </p>
              <div className="mt-6 flex items-center gap-2 font-mono-code text-xs text-emerald-500 font-bold">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>All 14 Microservices Operational (99.99%)</span>
              </div>
            </div>

            <div>
              <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-white" : "text-slate-900"}`}>
                Solutions
              </h4>
              <ul className={`mt-4 space-y-2.5 text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <li><a href="#services" className="hover:text-sky-500 transition">Full-Stack Platforms</a></li>
                <li><a href="#services" className="hover:text-sky-500 transition">Cloud & Kubernetes</a></li>
                <li><a href="#services" className="hover:text-sky-500 transition">AI & MCP Agents</a></li>
                <li><a href="#services" className="hover:text-sky-500 transition">DevSecOps & CI/CD</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-white" : "text-slate-900"}`}>
                Case Studies
              </h4>
              <ul className={`mt-4 space-y-2.5 text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <li><a href="#projects" className="hover:text-sky-500 transition">Coffee Shop Platform</a></li>
                <li><a href="#projects" className="hover:text-sky-500 transition">TravelTrack AI Transit</a></li>
                <li><a href="#projects" className="hover:text-sky-500 transition">AWS Cloud-Native IaC</a></li>
                <li><a href="#projects" className="hover:text-sky-500 transition">Nexus OpsFlow Engine</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-white" : "text-slate-900"}`}>
                Direct Contact
              </h4>
              <div className={`mt-4 space-y-2 text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <p>Location: India (IST, UTC+5:30)</p>
                <p>Global Asynchronous Collaboration</p>
                <div className="pt-2">
                  <button
                    onClick={copyEmailToClipboard}
                    className="flex items-center gap-1.5 text-sky-500 hover:text-sky-400 font-semibold"
                  >
                    {copiedEmail ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                    <span>nexusappsmiths@gmail.com</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row text-xs ${
              isDark ? "border-white/10 text-slate-500" : "border-slate-200 text-slate-500"
            }`}
          >
            <p>© {new Date().getFullYear()} Nexus Appsmiths. All rights reserved. Engineering what's next.</p>
            <div className="flex gap-6">
              <span className="font-mono-code text-[11px] text-slate-500">ZERO-TRUST • SOC2 READY • ISO 27001</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Floating Circular Back to Top Button --- */}
      {scrollProgress > 15 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border shadow-xl backdrop-blur-md hover:scale-110 transition-transform ${
            isDark
              ? "bg-[#0b1229]/90 border-sky-400/40 text-sky-300"
              : "bg-white/95 border-sky-500/40 text-sky-600 shadow-md"
          }`}
          aria-label="Back to top"
        >
          {/* Circular SVG Progress Ring */}
          <svg className="absolute inset-0 h-full w-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke={isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"}
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray={132}
              strokeDashoffset={132 - (132 * scrollProgress) / 100}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
          <ChevronRight size={18} className="-rotate-90" />
        </motion.button>
      )}
    </div>
  );
}
