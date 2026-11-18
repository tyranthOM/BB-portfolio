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
    location: string;
    status: string;
    avatarUrl: string;
    resumeUrl: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
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
    role: "Computer Science & Quantitative Systems Engineer",
    college: "Shah & Anchor Kutchhi Engineering College (SAKEC), Mumbai",
    location: "Mumbai, Maharashtra, India",
    status: "OPEN FOR QUANT, TECH & BUSINESS INTERNSHIPS",
    avatarUrl: "/om.jpg",
    resumeUrl: "/resume.pdf",
    email: "ombhalerao.dev@gmail.com",
    github: "https://github.com/ombhalerao",
    linkedin: "https://linkedin.com/in/om-bhalerao",
    twitter: "https://x.com/ombhalerao",
  },
  hero: {
    eyebrow: "OM BHALERAO // COMPUTER SCIENCE & QUANTITATIVE SYSTEMS",
    headlineLine1: "SCALING SOFTWARE.",
    headlineLine2: "ARCHITECTING FINANCIAL VALUE.",
    subtitle:
      "Computer Science student at SAKEC, Mumbai. Building ultra-low-latency matching engines, distributed transactional ledgers, and quantitative financial interfaces.",
    primaryCtaText: "EXPLORE SYSTEMS ↓",
    primaryCtaLink: "#work",
    stats: [
      { value: "04", label: "Production Engines Shipped" },
      { value: "2.4k+", label: "Commits Logged" },
      { value: "380ns", label: "P99 Order Match Latency" },
      { value: "SAKEC", label: "CS & Tech Lead // Mumbai" },
    ],
  },
  techMarquee: [
    { name: "C++20", category: "High Frequency" },
    { name: "Python", category: "Quantitative" },
    { name: "TypeScript", category: "Full-Stack" },
    { name: "Next.js", category: "Frontend" },
    { name: "PostgreSQL", category: "Financial DB" },
    { name: "Redis", category: "In-Memory Cache" },
    { name: "Docker", category: "Cloud Infra" },
    { name: "Go", category: "Microservices" },
    { name: "Time Series Analysis", category: "Analytics" },
    { name: "Order Book Matching", category: "Market Tech" },
    { name: "Portfolio Optimization", category: "Finance" },
    { name: "WebSockets", category: "Streaming" },
    { name: "Risk Modeling (VaR)", category: "Risk Mgmt" },
    { name: "Unit Economics", category: "Strategy" },
  ],
  projects: {
    featured: [
      {
        slug: "aegis-engine",
        title: "Aegis-Match",
        shortDescription:
          "Ultra-low latency limit order book and price-time priority matching engine built with zero-allocation ring buffers and sub-microsecond fill guarantees.",
        category: "Quantitative Finance & Trading",
        year: "2025",
        stack: ["C++20", "POSIX Sockets", "FIX 4.4", "Lock-Free Rings", "Google Benchmark"],
        thesis: {
          headline: "PRODUCT THESIS // ARCHITECTURAL RATIONALE",
          quote:
            "Traditional financial exchanges incur unpredictable tail-latency during market-wide liquidity shocks; Aegis-Match pre-allocates flat memory arenas to guarantee zero-heap allocations during active order execution.",
          friction: "Garbage collection pauses and heap locks causing >45μs spikes on high-volume trading order books.",
          architecture: "Cache-aligned contiguous price-ladder array paired with lock-free single-producer single-consumer queues.",
          proof: "Sustained 380ns median order fill latency across 4,200,000 simulated orders/sec.",
        },
        cloneCommand: "git clone https://github.com/ombhalerao/aegis-engine.git && make benchmark",
        githubUrl: "https://github.com/ombhalerao/aegis-engine",
        liveUrl: "https://github.com/ombhalerao/aegis-engine#telemetry",
        mockWindow: {
          filename: "matching_engine.log",
          type: "terminal",
          subtitle: "NSE:NIFTY50 // L3 LIMIT ORDER BOOK // LIVE TRACE",
        },
        caseStudy: {
          problem: [
            "In electronic financial markets, latency jitter translates directly to adverse execution selection and slippage for liquidity providers.",
            "Dynamic memory allocation (malloc/new) inside the critical order-processing loop introduces non-deterministic OS kernel page faults.",
          ],
          approach: [
            "Designed a contiguous price ladder memory layout where bid/ask levels are mapped into L1/L2 CPU cache lines without pointer indirection.",
            "Constructed a lock-free intrusive doubly-linked list for each price tier, achieving O(1) order insertion, matching, and cancellation.",
            "Integrated a deterministic FIX 4.4 parser operating directly on raw network buffers with zero byte copies.",
          ],
          architectureBreakdown: [
            {
              title: "L3 Order Ladder Arena",
              description: "Pre-allocated 64MB memory arena storing 500,000 active resting orders with zero runtime heap fragmentation.",
            },
            {
              title: "Price-Time Priority Matcher",
              description: "Vectorized SIMD order evaluation matching buy/sell crosses in 18 CPU clock cycles.",
            },
            {
              title: "Market Data Publisher",
              description: "UDP multicast broadcasting incremental book updates and trade execution receipts under 1.2 microseconds.",
            },
          ],
          metrics: [
            { label: "Execution Latency", value: "380 ns", detail: "P99 order matching latency" },
            { label: "Throughput", value: "4.2M ops/s", detail: "Sustained order processing" },
            { label: "Memory Allocations", value: "0 KB", detail: "In critical execution path" },
          ],
          result: [
            "Benchmarked against open-source exchange prototypes, achieving 3.8x lower variance during sudden volatility spikes.",
            "Verified 100% deterministic replay across 50,000,000 recorded historical order book transitions without trade discrepancies.",
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
          quote:
            "Financial audit ledgers require immutable append-only durability without trading off read throughput; Krypton-KV turns transactional entries into sequential disk runs with double-entry balance invariants.",
          friction: "High write amplification and random disk I/O bottlenecks in traditional relational transaction logs.",
          architecture: "Concurrent SkipList memtable paired with block-level Bloom filters and automated tiered settlement compaction.",
          proof: "185,000 financial entries/sec sustained write rate with sub-12ms crash recovery.",
        },
        cloneCommand: "git clone https://github.com/ombhalerao/krypton-kv.git && make",
        githubUrl: "https://github.com/ombhalerao/krypton-kv",
        liveUrl: "https://github.com/ombhalerao/krypton-kv#benchmarks",
        mockWindow: {
          filename: "ledger_compactor.py",
          type: "repl",
          subtitle: "FINANCIAL LEDGER // WAL SETTLEMENT STEPPER",
        },
        caseStudy: {
          problem: [
            "Corporate treasury management systems process thousands of concurrent payout transactions that require strict linearizability.",
            "System crashes during reconciliation runs can cause ledger imbalances if write-ahead logs do not verify cryptographically.",
          ],
          approach: [
            "Adopted the Log-Structured Merge-Tree architecture to convert random ledger writes into contiguous sequential disk flushes.",
            "Built a lock-free SkipList memtable allowing concurrent read queries during high-velocity payment batch ingestion.",
            "Integrated crc32c checksummed Write-Ahead Logging with fsync flush barriers to guarantee zero transaction loss.",
          ],
          architectureBreakdown: [
            {
              title: "Immutable Journal Staging",
              description: "Thread-safe skip-list maintaining active account balances with lock-free atomic hazard pointers.",
            },
            {
              title: "SSTable Ledger Format",
              description: "Block-compressed records indexed with sparse keys and a 10-bit-per-key Bloom filter eliminating unnecessary disk seeks.",
            },
            {
              title: "Reconciliation Compactor",
              description: "Background worker merging sorted financial runs, balancing debits/credits, and archiving settled transaction trees.",
            },
          ],
          metrics: [
            { label: "Write Throughput", value: "185k ops/s", detail: "Sequential ledger insertions" },
            { label: "Bloom False Positive", value: "0.8%", detail: "With 10 bits allocated per account" },
            { label: "Reconciliation Time", value: "<12 ms", detail: "Replaying 50 MB WAL audit log" },
          ],
          result: [
            "Demonstrated zero transaction loss across 500 simulated hard power-cut stress tests during active high-volume settlement.",
            "Benchmarked against LevelDB primitives with 18% lower write amplification on enterprise NVMe partitions.",
          ],
        },
      },
      {
        slug: "neuralsync",
        title: "NeuralSync",
        shortDescription:
          "Distributed pipeline orchestrator and real-time algorithmic risk assessment engine balancing compute loads across heterogeneous cloud infrastructure.",
        category: "Enterprise Cloud & Risk Management",
        year: "2024",
        stack: ["Go", "TypeScript", "WebSockets", "Protobuf", "Distributed DAG"],
        thesis: {
          headline: "PRODUCT THESIS // ARCHITECTURAL RATIONALE",
          quote:
            "Centralized cloud risk scoring creates latency bottlenecks for real-time transactions; NeuralSync partitions multi-factor risk graphs across distributed micro-nodes to preserve sub-second SLA compliance.",
          friction: "Centralized risk calculation delays causing transaction drop-off and cart abandonment in payment systems.",
          architecture: "DAG-based execution partitioning with delta-compressed payload serialization.",
          proof: "14ms end-to-end multi-factor risk assessment across 3 distributed nodes.",
        },
        cloneCommand: "git clone https://github.com/ombhalerao/neuralsync.git",
        githubUrl: "https://github.com/ombhalerao/neuralsync",
        liveUrl: "https://github.com/ombhalerao/neuralsync#diagram",
        mockWindow: {
          filename: "risk_pipeline.dag",
          type: "pipeline",
          subtitle: "STAGE 03/04 :: MULTI-FACTOR RISK ARBITER ACTIVE",
        },
        caseStudy: {
          problem: [
            "Enterprise payment gateways require immediate fraud scoring, credit checks, and FX conversion within strict sub-50ms windows.",
            "Monolithic risk services become single points of failure and scale poorly during flash-sale or high-traffic market events.",
          ],
          approach: [
            "Decomposed risk assessment models into a Directed Acyclic Graph (DAG) separating independent scoring rules for concurrent execution.",
            "Built a lightweight binary wire protocol using Protobuf over multiplexed WebSocket streams.",
            "Engineered an automated health check arbiter to reroute risk verification tasks if any regional node exhibits latency drift.",
          ],
          architectureBreakdown: [
            {
              title: "Pipeline Partition Engine",
              description: "Detects optimal sub-graph cut points to execute fraud models in parallel across regional worker pools.",
            },
            {
              title: "Binary Wire Protocol",
              description: "Zero-copy serialization transmitting risk vectors directly into memory-mapped buffers.",
            },
            {
              title: "Consensus Failover Arbiter",
              description: "Raft-inspired heartbeat consensus electing fallback workers within 8ms of node failure.",
            },
          ],
          metrics: [
            { label: "Latency Reduction", value: "88%", detail: "From 320ms centralized to 38ms distributed" },
            { label: "Throughput Boost", value: "14.2x", detail: "Parallelized DAG stage execution" },
            { label: "Recovery Time", value: "8 ms", detail: "Automated peer node failover" },
          ],
          result: [
            "Demonstrated real-time credit and risk assessment across a simulated multi-region cluster with 30,000 transactions/min.",
            "Zero dropped transactions observed during chaos testing with random 20% worker termination.",
          ],
        },
      },
      {
        slug: "pulseflow",
        title: "QuantFlow",
        shortDescription:
          "High-rate financial market analytics and real-time liquidity depth visualizer with millisecond order-book streaming and volatility surface estimation.",
        category: "Quantitative Analytics & Web Systems",
        year: "2024",
        stack: ["WebAssembly", "TypeScript", "Next.js", "Canvas API", "Financial Time Series"],
        thesis: {
          headline: "PRODUCT THESIS // ARCHITECTURAL RATIONALE",
          quote:
            "Institutional terminal tools like Bloomberg and Refinitiv are cost-prohibitive for young quants; QuantFlow streams tick-level market depth and volatility distributions directly to a 120 FPS web canvas.",
          friction: "Browser DOM rendering lags when rendering high-frequency order-book depth updates.",
          architecture: "Radix-2 FFT spectral estimation and rolling volatility kernel compiled to WebAssembly.",
          proof: "120 FPS jitter-free rendering of 2,048-point volatility surfaces directly in modern browsers.",
        },
        cloneCommand: "git clone https://github.com/ombhalerao/pulseflow.git && npm install",
        githubUrl: "https://github.com/ombhalerao/pulseflow",
        liveUrl: "https://github.com/ombhalerao/pulseflow#live-demo",
        mockWindow: {
          filename: "market_volatility.scope",
          type: "oscilloscope",
          subtitle: "FIG. 01 // L2 ORDER BOOK DEPTH & VOLATILITY CURVE",
        },
        caseStudy: {
          problem: [
            "Traders and risk analysts need visual feedback on market liquidity imbalances to anticipate price slippage.",
            "JavaScript main-thread garbage collection causes visual stutter when plotting continuous 50kHz live order-flow tick streams.",
          ],
          approach: [
            "Compiled a C++ statistical volatility estimator to WebAssembly with 128-bit SIMD intrinsics.",
            "Employed Web Workers to decouple incoming WebSocket market data ingestion from the browser rendering thread.",
            "Implemented an offscreen double-buffered HTML5 canvas pipeline rendering dynamic order-book bid/ask walls in requestAnimationFrame loops.",
          ],
          architectureBreakdown: [
            {
              title: "Wasm Analytics Core",
              description: "Computes 2,048-point rolling volatility and price entropy in 0.14 milliseconds.",
            },
            {
              title: "Lock-Free Ring Buffer",
              description: "SharedArrayBuffer passing price ticks from the WebSocket ingestion worker without serialization penalty.",
            },
            {
              title: "Financial Canvas Renderer",
              description: "High-contrast terminal visualization rendering real-time bid/ask depth walls and volatility harmonics.",
            },
          ],
          metrics: [
            { label: "Compute Time", value: "0.14 ms", detail: "2,048-point rolling window computation" },
            { label: "Frame Rate", value: "120 FPS", detail: "Jitter-free on high-refresh displays" },
            { label: "Tick Processing", value: "50,000 Hz", detail: "Continuous market stream ingestion" },
          ],
          result: [
            "Adopted by collegiate investment and algorithmic trading groups for backtesting intraday volatility models.",
            "Zero dropped frames across continuous 60-minute benchmark stress tests under simulated volatile market conditions.",
          ],
        },
      },
    ],
    other: [
      {
        title: "ledger-core",
        year: "2025",
        description: "Zero-dependency double-entry corporate accounting engine with cryptographic audit trails in Go.",
        stack: ["Go", "Fintech", "Double-Entry Bookkeeping"],
        githubUrl: "https://github.com/ombhalerao/ledger-core",
        stars: "★ 42",
      },
      {
        title: "portfolio-optimizer",
        year: "2024",
        description: "Markowitz efficient frontier and Monte Carlo Value-at-Risk (VaR) simulator for multi-asset portfolios.",
        stack: ["Python", "NumPy", "Quantitative Finance"],
        githubUrl: "https://github.com/ombhalerao/portfolio-optimizer",
        stars: "★ 38",
      },
      {
        title: "order-router-cli",
        year: "2024",
        description: "High-throughput smart order router (SOR) simulating TWAP and VWAP algorithmic execution.",
        stack: ["C++20", "FIX Protocol", "Algorithms"],
        githubUrl: "https://github.com/ombhalerao/order-router-cli",
        stars: "★ 35",
      },
      {
        title: "cap-table-engine",
        year: "2024",
        description: "Equity dilution simulator and venture round financial modeler with waterfall distributions.",
        stack: ["TypeScript", "Next.js", "Business Analytics"],
        githubUrl: "https://github.com/ombhalerao/cap-table-engine",
        stars: "★ 54",
      },
      {
        title: "monolith-metrics",
        year: "2023",
        description: "High-resolution transaction latency, memory, and database connection pool monitor for enterprise APIs.",
        stack: ["Python", "PostgreSQL", "Observability"],
        githubUrl: "https://github.com/ombhalerao/monolith-metrics",
        stars: "★ 29",
      },
    ],
  },
  experience: [
    {
      role: "Student Researcher & Tech Strategy Lead",
      organization: "SAKEC Technical Innovation Cell",
      type: "Academic & Systems Leadership",
      dates: "Aug 2024 — Present",
      location: "Mumbai, India",
      bullets: [
        "Spearheading the engineering and product strategy for campus-wide digital platforms and microservice architecture.",
        "Managing cross-functional teams of 20+ student developers across sprint planning, technical roadmaps, and code reviews.",
        "Implemented standardized CI/CD automated deployment pipelines, cutting feature shipping cycles by 35%.",
      ],
      stack: ["Distributed Systems", "TypeScript", "PostgreSQL", "Docker", "Product Strategy"],
    },
    {
      role: "Quantitative & Systems Contributor",
      organization: "Open Source Financial & Developer Infrastructure",
      type: "Open Source Engineering",
      dates: "Jan 2024 — Present",
      location: "Remote",
      bullets: [
        "Contributing performance patches and test suites to open-source algorithmic tools, database engines, and financial libraries.",
        "Optimized memory allocation routines in open-source key-value libraries, reducing memory footprint by 14%.",
        "Participated in architecture RFC discussions on lock-free concurrency and distributed protocol reliability.",
      ],
      stack: ["C++", "Go", "GitHub Actions", "Benchmarking"],
    },
    {
      role: "Technical Operations & Hackathon Lead",
      organization: "SAKEC ACM / IEEE Student Chapter",
      type: "Student Organization & Operations",
      dates: "Sep 2024 — Present",
      location: "Mumbai, India",
      bullets: [
        "Co-led the organization and budget allocation of flagship 48-hour hackathons hosting 250+ participants and industry sponsors.",
        "Engineered the live submission scoring portal with sub-second WebSocket updates and real-time algorithmic leaderboard.",
        "Conducted student technical workshops on algorithmic complexity, database design, and modern web application scaling.",
      ],
      stack: ["Next.js", "WebSockets", "Docker", "Event Operations", "Budgeting"],
    },
  ],
  skills: [
    {
      category: "High-Throughput Systems & Architecture",
      description: "Low-latency software, concurrency, and performance-critical distributed foundations",
      skills: [
        "C++20 / C11",
        "Go (Golang)",
        "Distributed Systems",
        "Lock-Free Concurrency",
        "Linux OS / POSIX",
        "Memory Arena Allocators",
        "TCP / UDP Sockets",
        "FIX Protocol",
        "Performance Profiling",
        "QEMU & Benchmarks",
      ],
    },
    {
      category: "Full-Stack Software & Business Platforms",
      description: "Production web applications, database architecture, and mission-critical APIs",
      skills: [
        "TypeScript",
        "Next.js / React",
        "PostgreSQL",
        "Redis Caching",
        "Node.js",
        "REST & GraphQL",
        "WebSockets",
        "Docker & Containerization",
        "State Machines",
        "Tailwind CSS",
      ],
    },
    {
      category: "Quantitative Methods & Financial Modeling",
      description: "Market microstructure, algorithmic risk assessment, and financial computing",
      skills: [
        "Quantitative Finance",
        "Order Book Matching",
        "Value at Risk (VaR)",
        "Time Series Analysis",
        "Monte Carlo Simulation",
        "Python (NumPy, Pandas)",
        "Markowitz Optimization",
        "Financial Accounting Logic",
      ],
    },
    {
      category: "Business Strategy, Product & Operations",
      description: "Technical product management, unit economics, agile execution, and leadership",
      skills: [
        "Product Management",
        "Technical Roadmapping",
        "Agile / Sprint Execution",
        "Unit Economics & ROI",
        "Cross-Functional Leadership",
        "Budget & Event Operations",
        "Git Internals & CI/CD",
        "Systems Architecture Design",
      ],
    },
  ],
  about: {
    bio: [
      "I am Om Bhalerao, a Computer Science student at Shah & Anchor Kutchhi Engineering College (SAKEC) in Mumbai. My focus lies at the convergence of high-throughput software systems, quantitative financial architecture, and technical business strategy.",
      "I am fascinated by how software creates tangible economic leverage—from sub-microsecond matching engines that ensure liquidity in capital markets, to distributed transactional databases that safeguard enterprise balance sheets.",
      "Beyond pure code, I approach engineering with a product and management mindset: prioritizing structural elegance, low operational overhead, unit economics, and building high-density, tactile software interfaces.",
    ],
    currently: [
      "Reading 'Principles of Corporate Finance' (Brealey, Myers, Allen)",
      "Studying 'Designing Data-Intensive Applications' by Martin Kleppmann",
      "Building a sub-microsecond algorithmic order router in C++20",
      "Designing a real-time portfolio risk dashboard with Next.js & WebAssembly",
    ],
    interests: [
      "Financial Market Microstructure & High-Frequency Trading (HFT)",
      "Distributed consensus protocols & crash-resilient databases",
      "Venture capital unit economics & SaaS gross margins",
      "Swiss graphic design, minimalist typography & brutalist interfaces",
      "Late-night tea stalls across South & Central Mumbai",
    ],
  },
  devClock: {
    collegeStartDate: "2024-08-01T08:00:00+05:30",
    metrics: [
      { label: "Git Commits Pushed", value: 2480, suffix: "+" },
      { label: "Transactions Processed", value: 420000, suffix: "+" },
      { label: "Order Matching Benchmarks", value: 850, suffix: "" },
      { label: "Cups of Mumbai Filter Coffee", value: 720, suffix: "☕" },
    ],
  },
  benchmarks: [
    {
      id: "bm-01",
      title: "SAKEC Computer Science Academic Distinction",
      category: "ACADEMICS",
      metric: "Top 5%",
      subtext: "Consistent 9.4+ Semester SGPA in Core Computer Science & Applied Mathematics",
      issuer: "SAKEC Mumbai",
      rarity: "LEGENDARY",
      tags: ["Computer Science", "Algorithms", "Honors"],
    },
    {
      id: "bm-02",
      title: "Algorithms & Quantitative Problem Solving",
      category: "COMPETITIVE",
      metric: "350+ Solved",
      subtext: "LeetCode & Codeforces algorithmic challenges in C++ with optimal time complexity",
      issuer: "LeetCode / CF",
      rarity: "SPECIAL",
      tags: ["Dynamic Programming", "Graphs", "Trees", "Complexity"],
    },
    {
      id: "bm-03",
      title: "Fintech & Smart Systems Hackathon",
      category: "HACKATHONS",
      metric: "1st Runner Up",
      subtext: "Architected distributed transaction settlement engine with real-time risk scoring",
      issuer: "Mumbai Tech Sprint",
      rarity: "LEGENDARY",
      tags: ["Fintech", "Go", "WebSockets"],
    },
    {
      id: "bm-04",
      title: "Open Source Systems & Infrastructure",
      category: "CONTRIBUTIONS",
      metric: "25+ PRs Merged",
      subtext: "Across distributed storage crates, developer tools, and financial calculation libraries",
      issuer: "GitHub Global",
      rarity: "SPECIAL",
      tags: ["C++", "Go", "CI/CD"],
    },
  ],
  footer: {
    counters: [
      { label: "SYSTEMS BUILT", value: "14" },
      { label: "TOOLS SHIPPED", value: "06" },
      { label: "TOTAL REACH", value: "12.8K" },
    ],
    timezone: "Asia/Kolkata",
    city: "MUMBAI, IN",
  },
};
