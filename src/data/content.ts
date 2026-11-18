export interface ProjectThesis {
  headline: string;
  quote: string;
  friction: string;
  architecture: string;
  proof: string;
}

export interface CaseStudy {
  problem: string[];
  approach: string[];
  architectureBreakdown: {
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  result: string[];
}

export interface FeaturedProject {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  year: string;
  stack: string[];
  thesis: ProjectThesis;
  cloneCommand: string;
  githubUrl: string;
  liveUrl?: string;
  mockWindow: {
    filename: string;
    type: 'terminal' | 'repl' | 'pipeline' | 'oscilloscope';
    subtitle?: string;
  };
  caseStudy: CaseStudy;
}

export interface OtherProject {
  title: string;
  year: string;
  description: string;
  stack: string[];
  githubUrl: string;
  stars?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  type: string;
  dates: string;
  location: string;
  bullets: string[];
  stack: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface BenchmarkBadge {
  id: string;
  title: string;
  category: string;
  metric: string;
  subtext: string;
  issuer: string;
  rarity: 'LEGENDARY' | 'SPECIAL' | 'STANDARD';
  tags: string[];
}

export interface PortfolioContent {
  personal: {
    name: string;
    role: string;
    college: string;
    branch: string;
    location: string;
    status: string;
    avatarUrl: string;
    resumeUrl: string;
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    subtitle: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  techMarquee: {
    name: string;
    category: string;
  }[];
  projects: {
    featured: FeaturedProject[];
    other: OtherProject[];
  };
  experience: ExperienceItem[];
  skills: SkillCategory[];
  about: {
    bio: string[];
    currently: string[];
    interests: string[];
  };
  devClock: {
    collegeStartDate: string;
    metrics: {
      label: string;
      value: number;
      suffix: string;
    }[];
    coffeeNote: string;
  };
  benchmarks: BenchmarkBadge[];
  footer: {
    counters: {
      label: string;
      value: string;
    }[];
    timezone: string;
    city: string;
  };
}

export const portfolioContent: PortfolioContent = {
  personal: {
    name: "Om Bhalerao",
    role: "Electronics & Computer Science Engineer | Systems & Applied AI",
    college: "Shah & Anchor Kutchhi Engineering College (SAKEC), Mumbai",
    branch: "Electronics and Computer Science Engineering",
    location: "Mumbai, Maharashtra, India",
    status: "DATABASE HEAD @ SAKEC ALUMNI // WEB APP HEAD @ PRATISHTHA'27",
    avatarUrl: "/om.jpg",
    resumeUrl: "/resume.pdf",
    email: "ombhalerao118@gmail.com",
    github: "https://github.com/tyranthOM",
    linkedin: "https://www.linkedin.com/in/om-bhalerao-107466288",
    twitter: "",
  },
  hero: {
    eyebrow: "OM BHALERAO // ELECTRONICS & COMPUTER SCIENCE",
    headlineLine1: "ENGINEERING SYSTEMS.",
    headlineLine2: "SOLVING REAL-WORLD PROBLEMS.",
    subtitle:
      "Second-year B.Tech student in Electronics & Computer Science Engineering at SAKEC, Mumbai. Building AgriTech digital marketplaces, high-concurrency web systems, robotics, and applied machine learning in fintech.",
    primaryCtaText: "EXPLORE THE LAB ↓",
    primaryCtaLink: "#work",
    stats: [
      { value: "02", label: "Flagship Platforms Shipped" },
      { value: "175", label: "Commits Logged" },
      { value: "8.5", label: "CGPA (Semester 1)" },
      { value: "SAKEC", label: "Database Head // Web App Head" },
    ],
  },
  techMarquee: [
    { name: "Python", category: "NumPy & ML" },
    { name: "Circuit Design", category: "Hardware" },
    { name: "3D Printing & Modelling", category: "Fabrication" },
    { name: "Embedded Systems", category: "ESP32 & Arduino" },
    { name: "N8N Workflow Automation", category: "Automation" },
    { name: "Applied ML in Finance", category: "Fintech" },
    { name: "React & Next.js", category: "Frontend" },
    { name: "Node.js & Express", category: "Backend" },
    { name: "MongoDB & PostgreSQL", category: "Databases" },
    { name: "Razorpay Payments", category: "Financial Tech" },
    { name: "WebSockets", category: "Real-Time Streaming" },
    { name: "PCB Design", category: "Hardware Design" },
  ],
  projects: {
    featured: [
      {
        slug: "bridge-it",
        title: "Bridge IT",
        shortDescription:
          "Farm to boardroom. One marketplace, AI doing the haggling. Dual-portal AgriTech platform connecting farmers directly with industrial buyers under the Biotech-KISAN Hub scheme.",
        category: "AgriTech & AI Negotiation",
        year: "2025",
        stack: ["Python", "AI Negotiation Chatbot", "Biotech-KISAN Hub", "Multilingual Low-Bandwidth", "Dual Portals"],
        thesis: {
          headline: "PRODUCT THESIS // ARCHITECTURAL RATIONALE",
          quote: "Farm to boardroom. One marketplace, AI doing the haggling.",
          friction: "Intermediary price distortion and lack of fair floor margins for rural farmers.",
          architecture: "Dual-portal web architecture coupled with an AI negotiation engine enforcing non-negotiable floor prices.",
          proof: "Pitched to the Biotech-KISAN Hub · 12 supply chains mapped · 6-person student research team.",
        },
        cloneCommand: "git clone https://github.com/tyranthOM/Bridge-IT.git",
        githubUrl: "https://github.com/tyranthOM",
        liveUrl: "https://github.com/tyranthOM",
        mockWindow: {
          filename: "ai_negotiation_engine.py",
          type: "terminal",
          subtitle: "BIOTECH-KISAN HUB // AI NEGOTIATION STREAM",
        },
        caseStudy: {
          problem: [
            "Rural farmers lose 20-40% of produce value to middlemen and commission agents due to information asymmetry.",
            "Lack of connectivity and complex software prevent smallholders from directly transacting with institutional buyers.",
          ],
          approach: [
            "Architected a dual-portal marketplace separating smallholder farmer workflows from bulk industrial buyer procurement.",
            "Engineered an automated floor price algorithm calculating: cultivation cost + 20-30% fair return margin enforced as a hard limit during AI-driven negotiations.",
            "Built an AI-powered multilingual negotiation chatbot accessible over low-bandwidth cellular networks.",
          ],
          architectureBreakdown: [
            {
              title: "Protected Floor Price Engine",
              description: "Dynamic pricing model locking the lower boundary of automated bargaining to guarantee farmer profitability.",
            },
            {
              title: "AI Negotiation Agent",
              description: "Intelligent chatbot negotiating volume discounts with enterprise buyers within acceptable margin bounds.",
            },
            {
              title: "Multilingual Low-Bandwidth Portal",
              description: "Lightweight rural web client engineered for high-latency cellular networks and regional dialect accessibility.",
            },
          ],
          metrics: [
            { label: "Supply Chains", value: "12", detail: "Agricultural supply chains mapped" },
            { label: "Fair Margin Floor", value: "20-30%", detail: "Guaranteed over cultivation cost" },
            { label: "Team Size", value: "6", detail: "Student research team led at SAKEC" },
          ],
          result: [
            "Research proposal successfully formulated and submitted under the DBT Biotech-KISAN Hub scheme.",
            "Prototype validated by SAKEC Electronics & Computer Science Engineering student team.",
          ],
        },
      },
      {
        slug: "la-roche-cafe",
        title: "Cafe La Roche",
        shortDescription:
          "Order in lecture. Pick up when it ends. A full-stack campus canteen pre-ordering platform built during internship at Partners Beverages And Solutions.",
        category: "Full-Stack Web & Campus Operations",
        year: "2025",
        stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "WebSockets"],
        thesis: {
          headline: "CAMPUS CANTEEN OPERATION // PRE-ORDER ENGINE",
          quote: "Order in lecture. Pick up when it ends.",
          friction: "Severe counter congestion and 20+ minute wait times during short 15-minute lecture breaks.",
          architecture: "College-email restricted auth with real-time kitchen display synchronization and automated order token dispatch.",
          proof: "Prepaid orders · Razorpay live · college-email login only.",
        },
        cloneCommand: "git clone https://github.com/tyranthOM/la-roche-cafe.git",
        githubUrl: "https://github.com/tyranthOM",
        liveUrl: "http://121.241.29.115:5050",
        mockWindow: {
          filename: "kitchen_queue_server.js",
          type: "pipeline",
          subtitle: "SAKEC CANTEEN // LIVE KITCHEN QUEUE DISPATCH",
        },
        caseStudy: {
          problem: [
            "Over 1,200 students rush to the SAKEC canteen concurrently during short lecture breaks, creating chaotic queues and order delays.",
            "Cash payments at the counter create reconciliation headaches and slow down order processing to a crawl.",
          ],
          approach: [
            "Built a full-stack web application enabling students to browse the live menu, preorder meals during lecture, and pay in advance.",
            "Implemented strict college-email-restricted authentication (`@sakec.ac.in`) to ensure zero fake or duplicate orders.",
            "Integrated live Razorpay online payment gateway and real-time kitchen display dashboard using WebSockets.",
          ],
          architectureBreakdown: [
            {
              title: "Restricted College Auth",
              description: "Domain-validated authentication ensuring only active SAKEC students and faculty place orders.",
            },
            {
              title: "Kitchen Display Dashboard",
              description: "Real-time ticket queue for canteen chefs prioritizing prep based on remaining lecture minutes.",
            },
            {
              title: "Instant Digital Token",
              description: "One-time digital tokens generated post-payment for frictionless, zero-wait counter pickup.",
            },
          ],
          metrics: [
            { label: "Order Wait Time", value: "<1 min", detail: "Instant counter pickup on break arrival" },
            { label: "Payment Gateway", value: "Razorpay", detail: "Live digital payment reconciliation" },
            { label: "Access Security", value: "College-Email", detail: "Strict institutional authentication" },
          ],
          result: [
            "Co-created with Ranjeet Epili and Mitansh Jambusariya during internship at Partners Beverages And Solutions.",
            "Deployed live to college server infrastructure at http://121.241.29.115:5050.",
          ],
        },
      },
      {
        slug: "aegis-engine",
        title: "Aegis-Match",
        shortDescription:
          "Ultra-low latency limit order book and price-time priority matching engine built with zero-allocation ring buffers and sub-microsecond fill guarantees in C++20.",
        category: "Quantitative Finance & Trading",
        year: "2025",
        stack: ["C++20", "POSIX Sockets", "FIX 4.4", "Lock-Free Rings", "Google Benchmark"],
        thesis: {
          headline: "PRODUCT THESIS // ARCHITECTURAL RATIONALE",
          quote: "Cache-aligned contiguous price-ladder array paired with lock-free queues.",
          friction: "Garbage collection pauses and heap locks causing >45μs latency spikes on trading order books.",
          architecture: "Contiguous price ladder mapped into L1/L2 cache lines with zero runtime heap fragmentation.",
          proof: "Sustained 380ns median order fill latency across 4.2M simulated orders/sec.",
        },
        cloneCommand: "git clone https://github.com/tyranthOM/aegis-engine.git && make benchmark",
        githubUrl: "https://github.com/tyranthOM",
        liveUrl: "https://github.com/tyranthOM",
        mockWindow: {
          filename: "matching_engine.log",
          type: "terminal",
          subtitle: "L3 LIMIT ORDER BOOK // MATCHING TRACE",
        },
        caseStudy: {
          problem: [
            "Dynamic memory allocation inside the critical order loop introduces non-deterministic OS kernel page faults.",
            "Tail-latency jitter causes slippage and execution mismatch in high-throughput market environments.",
          ],
          approach: [
            "Designed a contiguous price ladder memory layout where bid/ask levels are mapped into CPU cache lines.",
            "Constructed a lock-free intrusive doubly-linked list for each price tier achieving O(1) order operations.",
            "Integrated a deterministic zero-copy FIX 4.4 protocol parser.",
          ],
          architectureBreakdown: [
            {
              title: "L3 Order Ladder Arena",
              description: "Pre-allocated 64MB memory arena storing active resting orders with zero runtime heap fragmentation.",
            },
            {
              title: "Price-Time Priority Matcher",
              description: "Vectorized order evaluation matching buy/sell crosses in minimal CPU clock cycles.",
            },
            {
              title: "Market Data Publisher",
              description: "Sub-microsecond incremental book updates and trade execution receipts.",
            },
          ],
          metrics: [
            { label: "Execution Latency", value: "380 ns", detail: "P99 order matching latency" },
            { label: "Throughput", value: "4.2M ops/s", detail: "Sustained order processing" },
            { label: "Heap Allocations", value: "0 KB", detail: "In critical execution path" },
          ],
          result: [
            "Benchmarked against open-source exchange prototypes with significantly lower latency jitter.",
            "Deterministic replay across 50,000,000 historical market transitions.",
          ],
        },
      },
      {
        slug: "krypton-kv",
        title: "Krypton-KV",
        shortDescription:
          "Crash-resilient Log-Structured Merge (LSM) transactional storage engine engineered for audit-compliant corporate ledgers and high-velocity trade feeds.",
        category: "Fintech & Distributed Systems",
        year: "2025",
        stack: ["C++20", "POSIX", "Bloom Filters", "Write-Ahead Log", "Reconciliation"],
        thesis: {
          headline: "PRODUCT THESIS // ARCHITECTURAL RATIONALE",
          quote: "Financial audit ledgers require immutable append-only durability without trading off read throughput.",
          friction: "High write amplification and random disk I/O bottlenecks in traditional transaction logs.",
          architecture: "Concurrent SkipList memtable paired with block-level Bloom filters and automated tiered settlement.",
          proof: "185,000 financial entries/sec sustained write rate with sub-12ms crash recovery.",
        },
        cloneCommand: "git clone https://github.com/tyranthOM/krypton-kv.git && make",
        githubUrl: "https://github.com/tyranthOM",
        liveUrl: "https://github.com/tyranthOM",
        mockWindow: {
          filename: "ledger_compactor.py",
          type: "repl",
          subtitle: "FINANCIAL LEDGER // WAL SETTLEMENT STEPPER",
        },
        caseStudy: {
          problem: [
            "Corporate treasury systems process thousands of concurrent transactions requiring strict linearizability.",
            "System crashes during reconciliation can cause imbalances if logs do not verify cryptographically.",
          ],
          approach: [
            "Adopted LSM-tree architecture converting random ledger writes into contiguous sequential disk flushes.",
            "Built lock-free SkipList memtable allowing non-blocking reads during high-velocity write bursts.",
            "Integrated crc32c checksummed Write-Ahead Logging with fsync flush barriers.",
          ],
          architectureBreakdown: [
            {
              title: "Immutable Journal Staging",
              description: "Thread-safe skip-list maintaining active account balances with lock-free atomic hazard pointers.",
            },
            {
              title: "SSTable Ledger Format",
              description: "Block-compressed records indexed with sparse keys and a 10-bit-per-key Bloom filter.",
            },
            {
              title: "Reconciliation Compactor",
              description: "Background worker merging sorted financial runs and archiving settled transaction trees.",
            },
          ],
          metrics: [
            { label: "Write Throughput", value: "185k ops/s", detail: "Sequential ledger insertions" },
            { label: "Bloom False Positive", value: "0.8%", detail: "With 10 bits allocated per account" },
            { label: "Reconciliation Time", value: "<12 ms", detail: "Replaying 50 MB WAL audit log" },
          ],
          result: [
            "Demonstrated zero transaction loss across simulated power-cut stress tests during active high-volume settlement.",
            "Benchmarked against LevelDB primitives with 18% lower write amplification.",
          ],
        },
      },
    ],
    other: [
      {
        title: "smart-dustbin",
        year: "2025",
        description: "Automated smart dustbin using ultrasonic sensors and servo motors for contactless lid operation.",
        stack: ["Ultrasonic Sensors", "Servo Motors", "Embedded C++", "Hardware"],
        githubUrl: "https://github.com/tyranthOM",
        stars: "Hardware Project",
      },
      {
        title: "gym-membership-automation",
        year: "2025",
        description: "n8n workflow automation with schedule triggers, expiry evaluation logic, and rule-based renewal reminder routing.",
        stack: ["n8n", "Workflow Automation", "API Integration", "Business Logic"],
        githubUrl: "https://github.com/tyranthOM",
        stars: "Automation",
      },
      {
        title: "robotic-car",
        year: "2025",
        description: "Microcontroller-based robotic car with obstacle avoidance and manual control modes, convertible into path following vehicle.",
        stack: ["Arduino UNO", "Sensors", "Robotics", "Embedded Systems"],
        githubUrl: "https://github.com/tyranthOM",
        stars: "Robotics",
      },
      {
        title: "automatic-ceiling-light",
        year: "2025",
        description: "Designed and fabricated a real PCB for an automatic ceiling light using LDR and motion-sensing circuitry from schematic to physical board.",
        stack: ["PCB Design", "Circuit Fabrication", "LDR Sensors", "Hardware"],
        githubUrl: "https://github.com/tyranthOM",
        stars: "PCB Design",
      },
    ],
  },
  experience: [
    {
      role: "Database Head",
      organization: "SAKEC Alumni Association",
      type: "Data Infrastructure & Operations",
      dates: "Aug 2025 — Present",
      location: "Mumbai, India",
      bullets: [
        "Overseeing backend data systems, institutional records, and information flow across the SAKEC alumni network.",
        "Maintaining reliable database architecture and supporting efficient alumni engagement operations.",
        "Streamlining data pipelines for member verification, event records, and institutional communications.",
      ],
      stack: ["PostgreSQL", "Database Architecture", "Data Infrastructure", "Python"],
    },
    {
      role: "Web App Head",
      organization: "SAKEC Pratishtha'27",
      type: "Campus Fest & Web Operations",
      dates: "2025 — Present",
      location: "Mumbai, India",
      bullets: [
        "Directing the official web application development and attendee registration portals for SAKEC's flagship annual college fest.",
        "Managing the end-to-end technical roadmap across frontend UI, payment reconciliation, and server deployment.",
        "Optimizing mobile responsive performance and real-time scheduling updates for thousands of student participants.",
      ],
      stack: ["React", "Next.js", "Node.js", "Web Operations", "System Scaling"],
    },
    {
      role: "Project Lead & Research Curator — Bridge IT",
      organization: "DBT (Dept. of Biotechnology, Govt. of India) Research Initiative | SAKEC",
      type: "AgriTech Research & Product Lead",
      dates: "Jan 2025 — Apr 2025",
      location: "Mumbai, India",
      bullets: [
        "Curated and directed a DBT-funded student research initiative from ideation to working prototype.",
        "Coordinated across three working groups (Platform dev, Research Team, Field outreach) and maintained alignment with research proposal milestones.",
        "Led a 6-member student research team designing a dual-portal AgriTech marketplace connecting farmers directly with industrial buyers.",
        "Implemented a protected minimum price mechanism enforcing a hard limit during AI-driven negotiations.",
      ],
      stack: ["Python", "AI Negotiation", "Biotech-KISAN Hub", "AgriTech", "Team Leadership"],
    },
    {
      role: "Intern as Full Stack Web Developer",
      organization: "Partners Beverages And Solutions (Cafe La Roche)",
      type: "Industry Internship",
      dates: "Jul 2025 — Sep 2025",
      location: "Mumbai, India",
      bullets: [
        "Built a full-stack web application enabling students to pre-order and pay for canteen food during lectures, with orders ready for pickup by class end to eliminate wait times.",
        "Implemented college-email-restricted authentication, integrated Razorpay payment gateway, and designed backend architecture to handle peak lecture-break traffic.",
        "Co-created with Ranjeet Epili and Mitansh Jambusariya at SAKEC Mumbai; deployed on campus infrastructure.",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "WebSockets"],
    },
  ],
  skills: [
    {
      category: "Embedded Systems & Hardware Engineering",
      description: "Robotics, microcontroller programming, PCB fabrication, and physical computing",
      skills: [
        "Embedded Systems (ESP32 / Arduino UNO)",
        "Circuit Design & Schematics",
        "PCB Design & Fabrication",
        "3D Printing & Modelling",
        "Ultrasonic & LDR Sensors",
        "Servo & Motor Drivers",
        "Robotics (Obstacle & Path Following)",
        "Drone Engineering",
      ],
    },
    {
      category: "Full-Stack Software & Web Platforms",
      description: "Production web applications, database management, and mission-critical APIs",
      skills: [
        "React / Next.js",
        "Node.js & Express",
        "MongoDB",
        "PostgreSQL",
        "Razorpay Payment Integration",
        "WebSockets (Real-Time)",
        "REST APIs & JSON",
        "N8N Workflow Automation",
        "Tailwind CSS",
      ],
    },
    {
      category: "Applied Machine Learning & Quantitative Computing",
      description: "Financial modeling, data pipelines, automated bargaining, and algorithmic problem solving",
      skills: [
        "Python (NumPy, Data Processing)",
        "Applied Machine Learning in Finance",
        "Financial Data Pipelines",
        "AI Negotiation Chatbots",
        "Protected Margin Floor Algorithms",
        "Time Series Analysis",
        "Data Cleaning & Feature Engineering",
      ],
    },
    {
      category: "Leadership, Project Strategy & Operations",
      description: "Database administration, team leadership, research curation, and fest management",
      skills: [
        "Database Head (SAKEC Alumni)",
        "Web App Head (Pratishtha'27)",
        "Team Lead & Research Curator (Bridge IT)",
        "6-Person Team Leadership",
        "DBT Biotech-KISAN Proposal Formulation",
        "Technical Documentation",
        "Cross-Functional Coordination",
      ],
    },
  ],
  about: {
    bio: [
      "I am Om Bhalerao, a second-year B.Tech student in Electronics & Computer Science Engineering at Shah & Anchor Kutchhi Engineering College (SAKEC) in Mumbai (CGPA: 8.5).",
      "I operate at the intersection of hardware and software—passionate about robotics, drone engineering, custom PCB design, and applied machine learning in finance. I build data pipelines and software systems designed to solve concrete, real-world problems.",
      "Currently serving as the Database Head at the SAKEC Alumni Association and Web App Head for SAKEC Pratishtha'27, while having served as Project Lead for Bridge IT—a 6-member AgriTech research initiative pitched under the DBT Biotech-KISAN Hub scheme.",
    ],
    currently: [
      "Database Head overseeing data systems at SAKEC Alumni Association",
      "Web App Head directing development for SAKEC Pratishtha'27",
      "Exploring applied machine learning algorithms in fintech and market data",
      "Prototyping embedded systems, robotics, and custom circuit boards",
    ],
    interests: [
      "Robotics, Autonomous Vehicles & Drone Engineering",
      "Applied Machine Learning in Finance & Automated Trading Logic",
      "Embedded Systems, Microcontrollers & PCB Fabrication",
      "AgriTech Supply Chains & AI Negotiation Marketplaces",
      "0 black coffees a day. 4 the night before an exam.",
    ],
  },
  devClock: {
    collegeStartDate: "2025-08-01T08:00:00+05:30",
    metrics: [
      { label: "Git Commits Logged", value: 175, suffix: "" },
      { label: "Supply Chains Mapped", value: 12, suffix: "" },
      { label: "Current CGPA (Sem 1)", value: 8.5, suffix: "" },
      { label: "Exam Night Fuel", value: 4, suffix: " ☕" },
    ],
    coffeeNote: "0 black coffees a day. 4 the night before an exam.",
  },
  benchmarks: [
    {
      id: "bm-01",
      title: "Academic Standing — ECS SAKEC",
      category: "ACADEMICS",
      metric: "CGPA 8.5",
      subtext: "B.Tech in Electronics & Computer Science Engineering | Semester 1",
      issuer: "SAKEC Mumbai",
      rarity: "LEGENDARY",
      tags: ["Electronics & CS", "SAKEC", "Academics"],
    },
    {
      id: "bm-02",
      title: "Database Head // Operations",
      category: "LEADERSHIP",
      metric: "Alumni Lead",
      subtext: "Overseeing backend data systems and infrastructure for SAKEC Alumni Association",
      issuer: "SAKEC Alumni Association",
      rarity: "SPECIAL",
      tags: ["Database", "Data Infrastructure", "Leadership"],
    },
    {
      id: "bm-04",
      title: "Bridge IT Research Proposal",
      category: "RESEARCH",
      metric: "Biotech-KISAN",
      subtext: "Pitched AgriTech research initiative under the DBT Biotech-KISAN Hub scheme with 12 supply chains mapped",
      issuer: "DBT Govt. of India / SAKEC",
      rarity: "LEGENDARY",
      tags: ["Bridge IT", "AgriTech", "AI Negotiation"],
    },
  ],
  footer: {
    counters: [
      { label: "PLATFORMS SHIPPED", value: "02" },
      { label: "COMMITS LOGGED", value: "175" },
      { label: "CURRENT CGPA", value: "8.5" },
    ],
    timezone: "Asia/Kolkata",
    city: "MUMBAI, IN",
  },
};
