export type NavItem = {
  href: string;
  label: string;
};

export type Highlight = {
  value: string;
  label: string;
};

export type WorkItem = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  tags: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  startIso: string;
  endIso?: string;
  highlights: string[];
  skills: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Gabriel Mota",
  role: "Software Engineer",
  headline:
    "I turn complex product requirements into interfaces that feel simple, fast, and considered.",
  location: "Brasília, Brazil",
  availability: "Open to remote roles and global relocation",
  contactNote:
    "I collaborate in English with international teams and clients.",
  email: "gabrielmota287@gmail.com",
  phone: "+55 61 99303-5392",
  phoneHref: "tel:+5561993035392",
  keywords: [
    "Frontend Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Vue.js",
    "Remote",
    "Brazil",
  ],
  languages: [
    { name: "English", level: "Full professional proficiency" },
    { name: "Portuguese", level: "Native" },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/gabriel-mota-033528206",
    github: "https://github.com/GabrielMTF",
  },
  nav: [
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#stack", label: "Stack" },
  ] satisfies NavItem[],
  highlights: [
    { value: "5+", label: "Years shipping web products" },
    { value: "React", label: "Specialist, TypeScript-first" },
    { value: "Global", label: "US clients and remote teams" },
    { value: "EN", label: "Advanced professional English" },
  ] satisfies Highlight[],
  about: [
    "Software engineer with 5+ years in web development, focused on frontend architecture with React, TypeScript, and modern JavaScript. I care about understanding the problem, designing the right system, and delivering software that creates value.",
    "I have built B2B platforms, event products, and internal tools — from VAST Data’s Cosmos experience to real-time event websites and marketplace workflows. Comfortable across the lifecycle: requirements, UI architecture, API integration, and production care.",
  ],
  work: [
    {
      id: "cosmos",
      index: "01",
      title: "Cosmos",
      kicker: "VAST Data · Event platform",
      description:
        "The first Cosmos event website, built end to end in React and Next.js as a scalable, reusable platform for a global event experience — from implementation to delivery.",
      tags: ["React", "Next.js", "Contentful"],
    },
    {
      id: "one-pager",
      index: "02",
      title: "One Pager",
      kicker: "Celebration · Product",
      description:
        "A live website builder for events. People create and customize an event site in real time, turning a process that used to require technical knowledge into a simple product.",
      tags: ["Vue.js", "Strapi", "Product UI"],
    },
    {
      id: "marketplace",
      index: "03",
      title: "Industrial marketplace",
      kicker: "Atena Solutions · B2B",
      description:
        "Frontend and GraphQL work on a marketplace connecting industrial buyers and sellers — replacing spreadsheet workflows with digital processes that match complex business rules.",
      tags: ["React", "TypeScript", "GraphQL"],
    },
    {
      id: "gpd",
      index: "04",
      title: "GPD",
      kicker: "Grupo ICTS · Internal platform",
      description:
        "A project-management platform that centralized proposals, approvals, hours, and live project tracking for teams that previously ran the commercial process on spreadsheets.",
      tags: ["React", "Node.js", "MySQL"],
    },
  ] satisfies WorkItem[],
  experience: [
    {
      company: "Fetchly Labs",
      role: "Software Engineer",
      location: "Denver, United States · Remote",
      start: "Feb 2024",
      end: "Present",
      startIso: "2024-02",
      highlights: [
        "Maintain and evolve VAST Data’s global website: features, pages, events, integrations, and performance work on a high-traffic product.",
        "Built the first Cosmos event website in React and Next.js as a reusable platform for VAST Data’s event experience.",
        "Integrated Google Tag Manager, Algolia, VWO, Sentry, and HubSpot for analytics, search, experimentation, monitoring, and marketing.",
        "Modeled Contentful content so the team can ship pages without code changes.",
        "Worked the full frontend lifecycle with US-based clients and teammates, in English.",
      ],
      skills: ["TypeScript", "React", "Next.js", "Vue.js", "Contentful"],
    },
    {
      company: "Atena Solutions",
      role: "Software Engineer",
      location: "Brasília, Brazil · Remote",
      start: "Feb 2025",
      end: "Present",
      startIso: "2025-02",
      highlights: [
        "Shipped features for a B2B industrial marketplace using React, TypeScript, and GraphQL, moving buying and selling off spreadsheets.",
        "Built scalable frontend flows and contributed on the backend, translating dense business requirements into clear user workflows.",
        "Developed event-management product work in Vue.js and Strapi: event creation, custom websites, invitations, and guest experiences.",
        "Ran local environments with Podman, keeping application containers ready for development and testing.",
      ],
      skills: ["TypeScript", "React", "Vue.js", "GraphQL", "Golang", "MySQL"],
    },
    {
      company: "Smartleader",
      role: "Software Engineer",
      location: "São Paulo, Brazil · Remote",
      start: "Feb 2024",
      end: "Feb 2025",
      startIso: "2024-02",
      endIso: "2025-02",
      highlights: [
        "Built product features for a team-management platform covering leadership, engagement, communication, and performance.",
        "Translated people-management workflows into accessible Vue.js interfaces, with Laravel and PHP on the backend.",
        "Shipped feedback, evaluations, recognition, gamification, internal communication, and video-based training.",
        "Improved existing flows so managers and employees could run day-to-day people processes with less friction.",
      ],
      skills: ["JavaScript", "Vue.js", "Laravel", "PHP", "MySQL"],
    },
    {
      company: "Grupo ICTS",
      role: "Software Engineer",
      location: "Brasília, Brazil · Hybrid",
      start: "Sep 2021",
      end: "Feb 2024",
      startIso: "2021-09",
      endIso: "2024-02",
      highlights: [
        "Designed and built GPD, an internal platform that replaced spreadsheet-based project and proposal management.",
        "Delivered React, TypeScript, Node.js, and MySQL features for creating, presenting, and approving commercial proposals.",
        "Added real-time project tracking after approval, plus hours tracking as the platform grew beyond the original scope.",
        "Turned operational requirements into a centralized system used across commercial and management teams.",
      ],
      skills: ["TypeScript", "React", "Node.js", "MySQL", "Java"],
    },
  ] satisfies ExperienceItem[],
  stack: [
    {
      title: "Interface",
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue.js", "Figma"],
    },
    {
      title: "Systems",
      items: ["Node.js", "GraphQL", "Golang", "Laravel", "MySQL", "CMS architecture"],
    },
    {
      title: "Delivery",
      items: [
        "Frontend architecture",
        "System design",
        "API integration",
        "Performance",
        "Contentful",
        "Strapi",
      ],
    },
  ] satisfies SkillGroup[],
  education: {
    title: "Bachelor of Technology — Systems Analysis and Development",
    school: "Estácio, Brazil",
    period: "2021 — 2023",
  },
  certifications: [
    "Vue.js 3 Complete with Composition API, Vuex & Vue Router — Udemy, 2024",
    "React from zero to advanced — Udemy, 2022",
    "Modern Web with JavaScript + Projects — Udemy, 2023",
  ],
  description:
    "Frontend Software Engineer specializing in React, TypeScript, and high-performance interfaces. Open to remote roles and global relocation.",
} as const;

export type Profile = typeof profile;
