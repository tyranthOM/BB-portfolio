export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  category: "AI" | "Web" | "Systems";
  tag: string;
  role: string;
  dates: string;
  datesNote?: string;
  problem: string;
  solution: string;
  keyDecisions?: string;
  result: string;
  framing?: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

export interface LeadershipExperience {
  period: string;
  role: string;
  organization: string;
  bullets: string[];
}

export const PERSONAL_INFO = {
  name: "Om Bhalerao",
  fullName: "Om Kundalik Bhalerao",
  headline: "AI & Product Builder | Team Lead",
  tagline: "I build AI-powered products and lead the teams that ship them.",
  heroAsk: "Open to Summer 2027 internships in product, fintech and startup operations.",
  location: "Mumbai, India",
  email: "ombhalerao118@gmail.com", // [TODO: confirm primary email]
  github: "https://github.com/tyranthOM",
  linkedin: "https://www.linkedin.com/in/om-bhalerao-107466288",
  portfolioUrl: "https://ombhalerao.vercel.app/",
  resumePdf: "/resume.pdf",
  aboutText:
    "I'm a B.Tech student in Electronics & Computer Science at SAKEC, Mumbai. I like turning messy real-world problems into working products. I led a six-person team that pitched an AI-driven AgriTech marketplace to the Biotech-KISAN Hub (DBT, Govt. of India), and I built and shipped a campus ordering app with live payments. I'm now focused on AI products, fintech and how startups are built and run.",
  funFact: "0 black coffees a day. 4 the night before an exam.",
  education: {
    institution: "Shah & Anchor Kutchhi Engineering College (SAKEC), Mumbai",
    degree: "B.Tech, Electronics & Computer Science Engineering",
    period: "Aug 2025 to Present",
    cgpa: "CGPA 8.5", // [TODO: confirm latest CGPA]
    yearSem: "Second Year", // [TODO: verify semester]
  },
  earlierHardwareNote:
    "Earlier work: Robotics and custom PCB builds, including an obstacle-avoiding robotic car and a fabricated automatic ceiling-light PCB.",
};

export const PROJECTS: Project[] = [
  {
    slug: "bridge-it",
    title: "Bridge IT",
    category: "AI",
    tag: "AgriTech & AI Marketplace",
    oneLiner:
      "Farm to boardroom. A marketplace where AI negotiates prices without ever going below the farmer's floor.",
    dates: "Jan 2025 to Apr 2025",
    datesNote: "[VERIFY: before Aug 2025 college start; pre-college research proposal]",
    role: "Team Lead & Research Curator (6-member team across platform development, research and field outreach)",
    problem:
      "Farmers sell through intermediaries who distort prices, and industrial buyers struggle to discover and buy directly.",
    solution:
      "Dual-portal marketplace (farmer and buyer) with an AI negotiation chatbot, produce listing and digital payments. Multilingual, low-bandwidth support for rural deployment.",
    keyDecisions:
      "Protected minimum price. The floor is cultivation cost plus a 20-30% fair-return margin, enforced as a hard limit during AI negotiation.",
    result:
      "Research proposal submitted and pitched to the Biotech-KISAN Hub (DBT, Govt. of India). 12 agricultural supply chains mapped. Working prototype built.",
    stack: ["Python", "AI Negotiation Chatbot", "Multilingual Web"],
    githubUrl: "https://github.com/tyranthOM/Bridge-IT",
    featured: true,
  },
  {
    slug: "cafe-la-roche",
    title: "Cafe La Roche",
    category: "Web",
    tag: "Campus Canteen Platform",
    oneLiner: "Order during lecture, pick up when it ends.",
    dates: "Jul 2025 to Sep 2025",
    role: "Full Stack Web Developer Intern, Partners Beverages and Solutions (Co-built with Ranjeet Epili and Mitansh Jambusariya)",
    problem: "Long lunchtime canteen queues eat into students' break time.",
    solution:
      "Prepaid pre-orders, college-email-only login (@sakec.ac.in), live Razorpay payments with token generation, and a real-time kitchen dashboard.",
    result:
      "Deployed live on the SAKEC campus network. Eliminates lunchtime queuing and enables direct kitchen order dispatch with instant digital token generation.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "WebSockets"],
    liveUrl: "http://121.241.29.115:5050",
    githubUrl: "https://github.com/tyranthOM/la-roche-cafe",
    featured: true,
  },
  {
    slug: "aegis-match",
    title: "Aegis-Match",
    category: "Systems",
    tag: "Fintech Infrastructure",
    oneLiner: "C++20 matching engine showing how markets work under the hood.",
    dates: "2025",
    role: "Systems Developer",
    problem:
      "Financial exchanges demand deterministic, sub-microsecond order execution without garbage collection stalls or runtime heap contention.",
    solution:
      "Price-time priority matching, lock-free ring buffers, cache-aligned price ladder, zero heap allocation in the hot path, and FIX 4.4 parser.",
    result: "380ns P99 order-matching latency [VERIFY: benchmark method and hardware in README].",
    framing: "Fintech engineering depth. A supporting project showcasing systems rigor.",
    stack: ["C++20", "POSIX Sockets", "FIX 4.4"],
    githubUrl: "https://github.com/tyranthOM/aegis-engine",
    featured: true,
  },
  {
    slug: "krypton-kv",
    title: "Krypton-KV",
    category: "Systems",
    tag: "Storage Engine",
    oneLiner:
      "Crash-resilient single-node LSM-tree storage engine for financial ledgers with WAL and Bloom filters.",
    dates: "2025",
    role: "Systems Developer",
    problem:
      "High-throughput transactional ledgers require high ingestion rates with strict crash resilience and quick recovery invariants.",
    solution:
      "Single-node storage engine built with Write-Ahead Log (WAL) with CRC32 checksums, Bloom filters, and SkipList memtable.",
    result:
      "Processes 185k entries/sec with sub-12ms crash recovery [VERIFY: benchmark in README].",
    stack: ["C++20", "SkipList", "Bloom Filters", "Write-Ahead Log"],
    githubUrl: "https://github.com/tyranthOM/krypton-kv",
    featured: false,
  },
];

export const LEADERSHIP_EXPERIENCE: LeadershipExperience[] = [
  {
    period: "2025 to Present",
    role: "Web App Head",
    organization: "SAKEC Pratishtha'27",
    bullets: [
      "Lead the web application architecture, registration portals and scheduling systems for SAKEC's flagship college festival.",
      "Coordinate UI/UX, payment reconciliation and server scaling for peak traffic.",
    ],
  },
  {
    period: "Aug 2025 to Present",
    role: "Database Head",
    organization: "SAKEC Alumni Association",
    bullets: [
      "Own backend data systems, database management and information flow for the alumni network.",
      "Maintain data integrity, structured queries, and secure records for institutional alumni outreach.",
    ],
  },
  {
    period: "Jul 2025 to Sep 2025",
    role: "Full Stack Web Developer Intern",
    organization: "Partners Beverages and Solutions",
    bullets: [
      "Engineered Cafe La Roche campus canteen ordering platform with live Razorpay payments and WebSocket kitchen tokens.",
    ],
  },
  {
    period: "Jan 2025 to Apr 2025",
    role: "Team Lead & Research Curator",
    organization: "Bridge IT (Biotech-KISAN Hub Proposal)",
    bullets: [
      "Led a six-person student research team and coordinated platform, research and field-outreach groups against proposal milestones for the DBT Biotech-KISAN submission.",
    ],
  },
];

export const SKILLS_GROUPS = [
  {
    category: "Product & Leadership",
    skills: [
      "Team Leadership (6-person team)",
      "Product Roadmapping",
      "Stakeholder Pitching",
      "Cross-Functional Coordination",
      "Technical Documentation",
    ],
  },
  {
    category: "AI & Data",
    skills: ["Python", "NumPy", "Pandas", "AI Negotiation Chatbots"],
  },
  {
    category: "Engineering",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Razorpay",
      "WebSockets",
      "C++20",
      "Git / GitHub",
    ],
  },
];
