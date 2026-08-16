import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Tech logos available in /public — used for the marquee on the About page
export const SkillData = [
  { name: "Go", Image: "/Go-Logo.png", width: 80, height: 80 },
  { name: "JavaScript", Image: "/js.png", width: 65, height: 65 },
  { name: "TypeScript", Image: "/ts.png", width: 80, height: 80 },
  { name: "Next.js", Image: "/next.png", width: 80, height: 80 },
  { name: "React", Image: "/react.png", width: 80, height: 80 },
  { name: "Node.js", Image: "/node-js.png", width: 80, height: 80 },
  { name: "MySQL", Image: "/mysql.png", width: 80, height: 80 },
  { name: "Tailwind CSS", Image: "/tailwind.png", width: 80, height: 80 },
  { name: "HTML 5", Image: "/html.png", width: 80, height: 80 },
  { name: "CSS", Image: "/css.png", width: 80, height: 80 },
];

// Text-based skills (no logo needed) — straight from the CV
export const ProgrammingLanguages = ["Python", "Java", "JavaScript", "C++", "Go"];

export const ToolsFrameworks = ["Next.js", "YOLO", "GNS3", "Linux", "Docker"];

export const Expertise = [
  "Cybersecurity",
  "Network Security",
  "Machine Learning",
  "Computer Vision",
];

export const Experiences = [
  {
    role: "Penetration Tester Intern",
    org: "Confidential Client (NDA)",
    period: "Jul 2026 – Present",
    points: [
      "Performed web application penetration testing on client-assigned targets, uncovering vulnerabilities across authentication, input validation, and session management.",
      "Documented findings and delivered actionable remediation recommendations to strengthen the client's security posture.",
    ],
  },
  {
    role: "Practicum Assistant",
    org: "Informatics Lab, Telkom University",
    period: "Sep 2025 – Present",
    points: [
      "Guided students through practical sessions on Programming Algorithms, Computer Networks, and Databases.",
      "Evaluated assignments and gave one-on-one mentoring to help students complete their final projects.",
    ],
  },
  {
    role: "IoT Security Research Group",
    org: "IoT Studio Laboratory, Telkom University",
    period: "Nov 2025 – Present",
    points: [
      "Researched IoT security vulnerabilities with a focus on network-layer threats and device-level exploits.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    org: "MBC Laboratory, Telkom University",
    period: "Aug 2025 – Oct 2025",
    points: [
      "Compared two automated threat-mitigation methods in Software-Defined Networking (SDN) for response speed vs. network stability.",
      "Built a Python framework to benchmark latency, throughput, and overhead for Direct-Blocking and Meter-Based mitigation.",
      "Authored a scientific paper on adaptive intrusion prevention and a proposed enhanced security model.",
    ],
  },
  {
    role: "Member",
    org: "AI Lab, Telkom University",
    period: "Oct 2024 – Present",
    points: [
      "Collaborated on AI/ML challenges within the AI Lab study group.",
      "Developed a computer-vision bird-detection model using YOLOv5.",
    ],
  },
];

export const Certifications = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Nov 2025",
    kind: "Certification",
  },
  {
    title: "ISO/IEC 27001:2022 Lead Auditor Training",
    issuer: "Mastermind",
    date: "Dec 2025",
    kind: "Training",
  },
  {
    title: "IT Audit Training Class (Batch 3)",
    issuer: "Cisometric Academy",
    date: "Sep – Dec 2025",
    kind: "Training",
  },
];

export const Projects = [
  {
    title: "SLICE — Log Compression Engine",
    text: "A self-hosted preprocessor that compresses SIEM logs before they reach an LLM. On an 86,839-line SSH auth log it cut tokens from 2.33M to 504 (−99.9%), and the model still flagged the brute-force attack correctly. Raw logs stay on your machine.",
    tags: ["Python", "FastAPI", "SIEM", "LLM"],
    accent: "bg-emerald-500",
    link: "https://github.com/DegreeJr/SLICE",
    linkLabel: "View on GitHub",
  },
  {
    title: "SDN Adaptive Threat Mitigation",
    text: "Python testing framework benchmarking Direct-Blocking vs. Meter-Based mitigation in Software-Defined Networking, measuring latency, throughput, and resource overhead. Produced a scientific paper proposing an enhanced intrusion-prevention model.",
    tags: ["Python", "SDN", "Network Security"],
    accent: "bg-blue-500",
    link: "https://drive.google.com/file/d/1LycDJeOOSmiGx1y8-fIXZ1SMhLqtFejL/view?usp=sharing",
    linkLabel: "Read the paper",
  },
  {
    title: "Web Application Penetration Testing",
    text: "Real-world web application pentests against client targets, probing authentication, input validation, and session management, then reporting findings with remediation guidance.",
    tags: ["Pentest", "OWASP", "Reporting"],
    accent: "bg-rose-500",
    note: "Confidential · under NDA",
  },
  {
    title: "YOLOv5 Bird Detection",
    text: "Computer-vision model built with the YOLOv5 architecture to detect birds in imagery, developed within the Telkom University AI Lab.",
    tags: ["YOLOv5", "Computer Vision", "ML"],
    accent: "bg-amber-500",
    link: "https://github.com/Akma86/Deteksi-Burung-dengan-YOLOv5",
    linkLabel: "View on GitHub",
  },
];

export const Socials = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/DegreeJr" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/RazanDradjat" },
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/razanathaya" },
];
