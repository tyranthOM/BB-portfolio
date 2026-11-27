import { PERSONAL_INFO, PROJECTS, SKILLS_GROUPS } from "./projects";
export * from "./projects";

// Legacy shim to satisfy unmounted widgets
export const portfolioContent: any = {
  about: {
    name: PERSONAL_INFO.name,
    title: PERSONAL_INFO.headline,
    bio: [PERSONAL_INFO.aboutText],
    dossier: {
      institution: "SAKEC Mumbai",
      degree: "B.Tech in ECS",
      status: "Semester 1 CGPA 8.5",
    },
    funFacts: [],
  },
  projects: {
    featured: PROJECTS.filter((p) => p.featured).map((p) => ({
      slug: p.slug,
      title: p.title,
      tagline: p.tag,
      shortDescription: p.oneLiner,
      techStack: p.stack,
      metrics: [],
      links: { github: p.githubUrl, live: p.liveUrl },
    })),
    other: [],
  },
  skills: {
    categories: SKILLS_GROUPS.map((s) => ({
      name: s.category,
      items: s.skills.map((name) => ({ name, level: "Advanced" })),
    })),
  },
  benchmarks: [],
  devClock: {
    metrics: [],
  },
  contact: {
    email: PERSONAL_INFO.email,
    github: PERSONAL_INFO.github,
    linkedin: PERSONAL_INFO.linkedin,
  },
};

export type FeaturedProject = any;
