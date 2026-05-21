export interface Service {
  step: string;
  title: string;
  desc: string;
  icon: string;
  iconClass: string;
  tags: string[];
  delay: string;
}

export const SERVICES: Service[] = [
  {
    step: "#1",
    title: "Building the Front-end",
    desc: "From design to fully functional web apps using Vue, React, and TypeScript — optimized for speed, accessibility, and scale.",
    icon: "vuedotjs",
    iconClass: "icon-img-50",
    tags: ["Vue.js", "React", "Nuxt", "TypeScript"],
    delay: ".1s",
  },
  {
    step: "#2",
    title: "Mobile Adaptation",
    desc: "Responsive, touch-friendly interfaces that work flawlessly on any device — mobile-first approach with PWA support.",
    icon: "apple",
    iconClass: "icon-img-40",
    tags: ["Responsive", "PWA", "Capacitor", "iOS & Android"],
    delay: ".2s",
  },
  {
    step: "#3",
    title: "SEO Optimization",
    desc: "SEO audits, semantic markup, structured data, and performance tuning to rank higher on Google and drive organic traffic.",
    icon: "google",
    iconClass: "icon-img-50",
    tags: ["Lighthouse", "Core Web Vitals", "Schema.org", "SSR"],
    delay: ".3s",
  },
  {
    step: "#4",
    title: "Building the Back-end",
    desc: "Scalable APIs, server logic, and database design with Node.js, Python, and PostgreSQL — built for reliability and growth.",
    icon: "nodedotjs",
    iconClass: "icon-img-50",
    tags: ["Node.js", "Python", "REST", "GraphQL", "PostgreSQL"],
    delay: ".4s",
  },
  {
    step: "#5",
    title: "Admin Panel Setup",
    desc: "Custom admin dashboards and CMS integrations so you can manage content, users, and analytics without touching code.",
    icon: "strapi",
    iconClass: "icon-img-50",
    tags: ["Strapi", "Supabase", "Custom CMS", "Analytics"],
    delay: ".5s",
  },
  {
    step: "#6",
    title: "Deploy to Production",
    desc: "CI/CD pipelines, Docker containers, and cloud infrastructure — deploy with confidence, zero downtime, and full monitoring.",
    icon: "docker",
    iconClass: "icon-img-50",
    tags: ["Docker", "Firebase", "VPS", "GitLab CI/CD"],
    delay: ".6s",
  },
];
